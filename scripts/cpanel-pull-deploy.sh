#!/usr/bin/env bash
set -euo pipefail

PATH=/usr/local/bin:/usr/bin:/bin

HOME_DIR="/home/binnetbi"
PUBLIC_DIR="$HOME_DIR/public_html"
TMP_BASE="$HOME_DIR/tmp"
STATE_FILE="$HOME_DIR/.binnet-deployed-sha"
LOCK_DIR="$HOME_DIR/.binnet-deploy.lock"
LOG_FILE="$HOME_DIR/binnet-auto-deploy.log"
REMOTE_HEALTH="https://raw.githubusercontent.com/Ddos-spec/binnet/cpanel-deploy/deploy-health.txt"
REMOTE_ARCHIVE="https://codeload.github.com/Ddos-spec/binnet/tar.gz/refs/heads/cpanel-deploy"

mkdir -p "$TMP_BASE"
exec >>"$LOG_FILE" 2>&1

echo "[$(date '+%Y-%m-%d %H:%M:%S %Z')] checking BINNET deployment"

if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  echo "Another deployment is already running; skipping."
  exit 0
fi

TMP_DIR="$(mktemp -d "$TMP_BASE/binnet-deploy.XXXXXX")"
cleanup() {
  rm -rf "$TMP_DIR"
  rmdir "$LOCK_DIR" 2>/dev/null || true
}
trap cleanup EXIT

REMOTE_SHA="$(curl -fsSL --connect-timeout 15 --max-time 45 "${REMOTE_HEALTH}?t=$(date +%s)" | tr -d '\r\n')"
if [[ ! "$REMOTE_SHA" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Invalid remote deploy marker: '$REMOTE_SHA'"
  exit 1
fi

CURRENT_SHA=""
if [[ -f "$STATE_FILE" ]]; then
  CURRENT_SHA="$(tr -d '\r\n' < "$STATE_FILE")"
fi

if [[ "$REMOTE_SHA" == "$CURRENT_SHA" ]]; then
  echo "Already live at $REMOTE_SHA"
  exit 0
fi

echo "New build detected: $REMOTE_SHA"
curl -fsSL --connect-timeout 15 --max-time 180 "$REMOTE_ARCHIVE" -o "$TMP_DIR/build.tar.gz"
mkdir -p "$TMP_DIR/site"
tar -xzf "$TMP_DIR/build.tar.gz" --strip-components=1 -C "$TMP_DIR/site"

BUILD_SHA="$(tr -d '\r\n' < "$TMP_DIR/site/deploy-health.txt")"
if [[ "$BUILD_SHA" != "$REMOTE_SHA" ]]; then
  echo "Build changed while downloading; aborting this cycle safely."
  exit 1
fi

test -f "$TMP_DIR/site/index.html"
test -d "$TMP_DIR/site/_astro"
test -d "$TMP_DIR/site/media"

if ! find "$TMP_DIR/site/_astro" -maxdepth 1 -type f | grep -q .; then
  echo "Astro asset directory is empty; refusing deployment."
  exit 1
fi

# One-time cleanup for the broken historical cPanel deployment. These paths are
# intentionally scoped to public_html only.
for bad_dir in "$PUBLIC_DIR/etc" "$PUBLIC_DIR/proc"; do
  if [[ -e "$bad_dir" ]]; then
    chmod -R u+rwX "$bad_dir" 2>/dev/null || true
    rm -rf -- "$bad_dir"
  fi
done

# Keep cPanel-managed files while making the website itself exactly match the
# validated static build.
rsync -a --delete \
  --exclude='.htaccess' \
  --exclude='.user.ini' \
  --exclude='php.ini' \
  --exclude='.well-known/' \
  --exclude='cgi-bin/' \
  --exclude='error_log' \
  "$TMP_DIR/site/" "$PUBLIC_DIR/"

printf '%s\n' "$BUILD_SHA" > "$STATE_FILE"
echo "Deployment complete: $BUILD_SHA"
