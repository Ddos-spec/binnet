export const whatsappNumber = '6285773854210';

export const whatsappLink = (message = 'Halo BINNET, saya ingin cek jaringan dan paket internet di alamat saya.') =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const plans = [
  {
    speed: 25,
    price: 149,
    oldPrice: 199,
    name: 'Paket Hemat',
    devices: 'Rumah ringkas',
    fit: 'Streaming lancar dan aktivitas harian',
  },
  {
    speed: 50,
    price: 179,
    oldPrice: 249,
    name: 'Paket Keluarga',
    devices: 'Keluarga aktif',
    fit: 'Kerja, belajar, dan hiburan bersama',
    recommended: true,
  },
  {
    speed: 80,
    price: 219,
    oldPrice: 299,
    name: 'Paket Gaming',
    devices: 'Performa intensif',
    fit: 'Gaming, streaming, dan download cepat',
  },
  {
    speed: 100,
    price: 329,
    oldPrice: 399,
    name: 'Paket Sultan',
    devices: 'Rumah dan usaha aktif',
    fit: 'Semua kebutuhan tanpa kompromi',
  },
];

export const promoBenefits = [
  'Harga sudah termasuk',
  'Biaya instalasi gratis',
  'Sewa perangkat termasuk',
  'Customer service 24 jam',
  'Teknisi standby per area',
];

export const testimonials = [
  {
    name: 'Meisha',
    profession: 'Karyawan swasta',
    quote: 'Jaringannya selalu stabil sekalipun semua perangkat di rumah sedang dipakai. Saat hujan pun tetap aman.',
  },
  {
    name: 'Rudi',
    profession: 'Pemilik usaha',
    quote: 'Kalau ada kendala selalu direspons dengan baik. Saya sudah memakai BINNET di dua rumah dan sejauh ini aman.',
  },
  {
    name: 'Aula',
    profession: 'Ibu rumah tangga',
    quote: 'Komplain direspons dan diperbaiki dengan cepat. Owner dan timnya ramah, pelayanannya terasa dekat.',
  },
  {
    name: 'Naimah',
    profession: 'Profesional mandiri',
    quote: 'Harga tetap, jaringan bagus, dan komplain cukup lewat WhatsApp sehingga cepat ditangani.',
  },
];

export const services = [
  {
    number: '01',
    title: 'Internet Fiber',
    description: 'Koneksi fiber optic unlimited untuk rumah dan usaha, tanpa FUP dan tanpa biaya yang disembunyikan.',
    image: '/media/6060-img_5323.jpg',
  },
  {
    number: '02',
    title: 'Instalasi CCTV',
    description: 'Sistem keamanan yang dapat dipantau dari smartphone, dipasang oleh teknisi yang memahami kondisi lapangan.',
    image: '/media/4869-service-img2.jpg',
  },
  {
    number: '03',
    title: 'Elektronik & Jaringan',
    description: 'Pemeriksaan dan perbaikan perangkat elektronik serta jaringan rumah secara praktis dan terukur.',
    image: '/media/6063-img-20250408-wa0013.jpg',
  },
];

export const faqs = [
  {
    question: 'Apakah paket BINNET benar-benar unlimited?',
    answer: 'Ya. Paket internet BINNET unlimited tanpa FUP, sehingga tidak ada penurunan kecepatan karena kuota pemakaian bulanan.',
  },
  {
    question: 'Apakah harga sudah termasuk instalasi dan perangkat?',
    answer: 'Harga paket yang ditampilkan sudah termasuk PPN, biaya perangkat, dan pemasangan. Konfirmasi akhir tetap dilakukan setelah pengecekan area.',
  },
  {
    question: 'Berapa lama proses pemasangan?',
    answer: 'Tim akan mengecek ketersediaan jaringan di alamat Anda terlebih dahulu, lalu mengatur jadwal pemasangan terdekat melalui WhatsApp.',
  },
  {
    question: 'Paket mana yang cocok untuk rumah saya?',
    answer: 'Pilih berdasarkan jumlah perangkat aktif dan aktivitas paling berat. Paket 25 Mbps cocok untuk kebutuhan dasar, 50 Mbps untuk keluarga aktif, 80 Mbps untuk gaming dan aktivitas intensif, sedangkan 100 Mbps untuk rumah atau usaha dengan kebutuhan tinggi.',
  },
  {
    question: 'Bagaimana jika koneksi mengalami kendala?',
    answer: 'Hubungi customer service BINNET melalui WhatsApp. Tim lokal akan melakukan diagnosis dan menjadwalkan penanganan jika diperlukan.',
  },
];

export const blogPosts = [
  {
    slug: 'posisi-router-wifi-terbaik-di-rumah',
    title: 'Posisi Router Wi‑Fi yang Tepat: Sinyal Lebih Merata Tanpa Ganti Paket',
    excerpt: 'Sebelum menaikkan kecepatan internet, cek dulu posisi router. Beberapa meter bisa membuat perbedaan besar.',
    category: 'Wi‑Fi Rumah',
    date: '18 Juli 2026',
    readTime: '5 menit',
    image: '/media/generated/blog-router-position.webp',
    intro: 'Kecepatan paket dan kualitas Wi‑Fi adalah dua hal yang berbeda. Internet dapat masuk ke rumah dengan baik, tetapi sinyal dari router tetap melemah jika terhalang dinding, lemari, atau diletakkan di sudut bangunan.',
    sections: [
      {
        heading: 'Mulai dari titik yang paling sentral',
        paragraphs: [
          'Tempatkan router sedekat mungkin dengan pusat aktivitas rumah, bukan sekadar dekat dengan jalur kabel masuk. Posisi yang lebih sentral membuat jarak ke setiap ruangan lebih seimbang.',
          'Jika rumah bertingkat, posisi terbuka di lantai tengah biasanya lebih efektif daripada menyimpan router di lantai dasar dan di balik furnitur.',
        ],
      },
      {
        heading: 'Hindari tiga penghalang utama',
        paragraphs: ['Dinding beton tebal, benda logam besar, dan perangkat yang menghasilkan interferensi dapat mengurangi kualitas sinyal. Jauhkan router dari lemari tertutup, bagian belakang televisi, microwave, dan sudut yang terhalang banyak dinding.'],
      },
      {
        heading: 'Kapan perlu mesh atau access point?',
        paragraphs: ['Jika bentuk rumah memanjang, memiliki banyak lantai, atau ada area yang tetap lemah setelah router dipindah, mesh atau access point dapat memperluas cakupan. Solusi terbaik ditentukan dari bentuk bangunan, bukan hanya luas totalnya.'],
      },
    ],
  },
  {
    slug: 'perbedaan-wifi-2-4-ghz-dan-5-ghz',
    title: 'Wi‑Fi 2,4 GHz vs 5 GHz: Mana yang Sebaiknya Dipakai?',
    excerpt: 'Yang satu menjangkau lebih jauh, yang lain melaju lebih cepat. Kuncinya bukan memilih salah satu, tetapi menggunakannya dengan benar.',
    category: 'Perangkat',
    date: '18 Juli 2026',
    readTime: '6 menit',
    image: '/media/generated/blog-dual-band.webp',
    intro: 'Router dual-band memancarkan dua jaringan dengan karakter berbeda. Memahami perbedaannya membantu perangkat mendapatkan koneksi yang lebih stabil tanpa mengubah paket internet.',
    sections: [
      {
        heading: '2,4 GHz untuk jangkauan',
        paragraphs: ['Frekuensi 2,4 GHz umumnya menjangkau lebih jauh dan lebih mampu melewati dinding, tetapi kanalnya lebih ramai. Gunakan untuk perangkat yang jauh dari router atau tidak membutuhkan kecepatan tinggi, seperti sensor dan perangkat rumah pintar.'],
      },
      {
        heading: '5 GHz untuk kecepatan',
        paragraphs: ['Frekuensi 5 GHz biasanya memberikan kapasitas lebih tinggi dan interferensi lebih rendah, tetapi jangkauannya lebih pendek. Gunakan untuk laptop, smart TV, konsol, atau ponsel yang berada cukup dekat dengan router.'],
      },
      {
        heading: 'Biarkan perangkat memilih—dengan catatan',
        paragraphs: ['Fitur band steering pada router modern dapat memindahkan perangkat secara otomatis. Jika perpindahan terasa tidak stabil, memisahkan nama Wi‑Fi 2,4 GHz dan 5 GHz dapat memberi kontrol yang lebih jelas.'],
      },
    ],
  },
  {
    slug: 'cara-memilih-kecepatan-internet-rumah',
    title: 'Berapa Mbps yang Cukup untuk Rumah Anda?',
    excerpt: 'Hitung perangkat yang aktif bersamaan dan aktivitas terberatnya. Angka besar belum tentu pilihan paling efisien.',
    category: 'Panduan Paket',
    date: '18 Juli 2026',
    readTime: '6 menit',
    image: '/media/generated/blog-choose-speed.webp',
    intro: 'Cara paling praktis memilih paket adalah melihat berapa perangkat yang aktif bersamaan, bukan jumlah seluruh perangkat yang dimiliki. Meeting, streaming resolusi tinggi, unggah file, dan gaming juga memiliki pola kebutuhan berbeda.',
    sections: [
      {
        heading: '25 Mbps untuk kebutuhan harian',
        paragraphs: ['Cocok untuk aktivitas browsing, chat, belajar, streaming, dan meeting dengan penggunaan bersamaan yang masih terukur.'],
      },
      {
        heading: '50 Mbps untuk keluarga aktif',
        paragraphs: ['Kecepatan ini lebih nyaman untuk beberapa pengguna yang bekerja, belajar, streaming, atau bermain pada waktu yang sama. Kualitas router dan penempatannya tetap menentukan pengalaman Wi‑Fi.'],
      },
      {
        heading: '80–100 Mbps untuk aktivitas intensif',
        paragraphs: ['Pertimbangkan 80 atau 100 Mbps jika ada banyak perangkat aktif, beberapa layar streaming resolusi tinggi, gaming, transfer file besar, kamera cloud, atau usaha rumahan yang sangat bergantung pada koneksi.'],
      },
    ],
  },
  {
    slug: 'wifi-lambat-lakukan-pengecekan-ini',
    title: 'Wi‑Fi Terasa Lambat? Lakukan 7 Pengecekan Ini Sebelum Menghubungi Teknisi',
    excerpt: 'Diagnosis sederhana selama lima menit dapat membedakan masalah perangkat, Wi‑Fi, atau jalur internet.',
    category: 'Troubleshooting',
    date: '18 Juli 2026',
    readTime: '7 menit',
    image: '/media/generated/blog-slow-wifi.webp',
    intro: 'Koneksi lambat tidak selalu berarti jaringan provider bermasalah. Sumbernya bisa berasal dari satu perangkat, posisi router, aplikasi yang berjalan di latar belakang, atau gangguan sementara.',
    sections: [
      {
        heading: 'Mulai dari tes yang terukur',
        paragraphs: ['Coba koneksi dari dua perangkat berbeda, hentikan unduhan besar, lalu lakukan speed test di dekat router. Jika hanya satu perangkat yang lambat, masalah kemungkinan berada pada perangkat tersebut.'],
      },
      {
        heading: 'Restart dengan urutan yang benar',
        paragraphs: ['Matikan router sekitar 20–30 detik, hidupkan kembali, lalu tunggu indikator stabil. Jangan menekan tombol reset kecil karena itu dapat menghapus konfigurasi perangkat.'],
      },
      {
        heading: 'Catat pola gangguannya',
        paragraphs: ['Perhatikan waktu kejadian, ruangan, perangkat, dan indikator router. Informasi ini mempercepat diagnosis customer service dan membantu teknisi menentukan tindakan yang tepat.'],
      },
    ],
  },
  {
    slug: 'cara-mengamankan-wifi-rumah',
    title: 'Cara Mengamankan Wi‑Fi Rumah Tanpa Menjadi Ahli IT',
    excerpt: 'Lima pengaturan dasar dapat mencegah orang asing memakai jaringan dan melindungi perangkat di rumah.',
    category: 'Keamanan',
    date: '18 Juli 2026',
    readTime: '6 menit',
    image: '/media/generated/blog-wifi-security.webp',
    intro: 'Keamanan Wi‑Fi dimulai dari kebiasaan sederhana: kata sandi yang kuat, firmware yang diperbarui, dan akses admin router yang tidak dibiarkan menggunakan kredensial bawaan.',
    sections: [
      {
        heading: 'Ganti dua kata sandi yang berbeda',
        paragraphs: ['Kata sandi Wi‑Fi dan kata sandi halaman admin router sebaiknya berbeda. Gunakan kombinasi panjang yang tidak mudah ditebak dan hindari nomor telepon atau alamat rumah.'],
      },
      {
        heading: 'Gunakan enkripsi terbaru yang tersedia',
        paragraphs: ['Pilih WPA2 atau WPA3 jika didukung router dan perangkat. Hindari mode keamanan lama seperti WEP karena perlindungannya sudah tidak memadai.'],
      },
      {
        heading: 'Buat jaringan tamu',
        paragraphs: ['Pisahkan perangkat tamu dan perangkat rumah pintar dari jaringan utama jika router mendukung guest network. Cara ini membatasi akses antarpengguna di jaringan rumah.'],
      },
    ],
  },
  {
    slug: 'posisi-cctv-rumah-yang-efektif',
    title: 'Titik Pemasangan CCTV yang Efektif untuk Rumah',
    excerpt: 'Bukan soal memasang kamera sebanyak mungkin. Prioritaskan jalur masuk, sudut buta, dan kualitas bukti visual.',
    category: 'CCTV',
    date: '18 Juli 2026',
    readTime: '6 menit',
    image: '/media/generated/blog-cctv-placement.webp',
    intro: 'CCTV yang efektif harus menangkap peristiwa penting dengan sudut dan pencahayaan yang memadai. Penempatan yang terlalu tinggi atau menghadap langsung ke sumber cahaya dapat menghasilkan rekaman yang kurang berguna.',
    sections: [
      {
        heading: 'Prioritaskan akses utama',
        paragraphs: ['Pintu depan, area parkir, pintu samping, dan akses belakang adalah titik awal. Kamera sebaiknya dapat menangkap wajah dan arah pergerakan, bukan hanya puncak kepala.'],
      },
      {
        heading: 'Periksa cahaya dan sudut buta',
        paragraphs: ['Hindari mengarahkan kamera langsung ke lampu kuat atau matahari. Uji rekaman pada siang dan malam hari, lalu pastikan pohon, kanopi, atau kendaraan tidak menutup area penting.'],
      },
      {
        heading: 'Pastikan penyimpanan dan akses aman',
        paragraphs: ['Atur retensi rekaman sesuai kapasitas, ganti kata sandi bawaan, dan batasi siapa yang dapat mengakses kamera dari smartphone. Pemasangan fisik dan keamanan akun sama pentingnya.'],
      },
    ],
  },
];
