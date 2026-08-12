const projects = [
  {
    id: 1,
    title: 'Sentiment Analysis',
    subtitle: 'Naïve Bayes vs KNN',
    category: 'Academic Project',
    type: 'Individual',
    status: 'Local',
    description:
      'Aplikasi analisis sentimen untuk membandingkan performa algoritma Naïve Bayes dan K-Nearest Neighbors berdasarkan akurasi dan waktu prediksi.',
    technologies: [
      'Laravel',
      'Tailwind CSS',
      'Python',
      'Naïve Bayes',
      'KNN',
    ],
    contribution:
      'Mengembangkan sistem web, melakukan preprocessing data, membangun dan menguji model machine learning, serta menganalisis hasil performa kedua algoritma.',
    features: [
      'Text preprocessing',
      'TF-IDF',
      'Sentiment classification',
      'Model comparison',
      'Accuracy evaluation',
      'Prediction time evaluation',
    ],
    github: '',
    demo: '',
    image: '/images/projects/sentiment-analysis.jpg',
  },

  {
    id: 2,
    title: 'Android & iPhone Service',
    subtitle: 'Service Shop Landing Page',
    category: 'Web Development',
    type: 'Individual',
    status: 'Local',
    description:
      'Landing page untuk toko service Android dan iPhone yang menyediakan informasi layanan, jadwal operasional, lokasi, serta akses langsung ke admin melalui WhatsApp.',
    technologies: [
      'Laravel',
      'Tailwind CSS',
      'JavaScript',
    ],
    contribution:
      'Mengembangkan landing page dan mengimplementasikan informasi bisnis, integrasi lokasi, WhatsApp, serta pengelolaan konten gambar melalui konfigurasi aplikasi.',
    features: [
      'Real-time business hours',
      'Google Maps location',
      'WhatsApp integration',
      'Technician gallery',
      'Before & after showcase',
    ],
    github: '',
    demo: '',
    image: '/images/projects/service-shop.jpg',
  },

  {
    id: 3,
    title: 'Pharmacy Management System',
    subtitle: 'Inventory & Transaction Management',
    category: 'Web Application',
    type: 'Individual',
    status: 'Local',
    description:
      'Aplikasi manajemen apotek untuk mengelola obat, stok, transaksi, kadaluarsa, serta aktivitas admin dan apoteker.',
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'JavaScript',
    ],
    contribution:
      'Mengembangkan sistem dengan role admin dan apoteker, termasuk pengelolaan obat, transaksi multi-item, stok otomatis, monitoring kadaluarsa, serta dashboard informasi.',
    features: [
      'Role-based access',
      'Medicine management',
      'Stock management',
      'Multi-item transactions',
      'Automatic stock updates',
      'Expiration monitoring',
      'Transaction history',
      'Dashboard & charts',
    ],
    github: '',
    demo: '',
    image: '/images/projects/pharmacy.jpg',
  },

  {
    id: 4,
    title: 'Guakit',
    subtitle: 'Personal Shopping & Delivery Platform',
    category: 'Team Project',
    type: 'Team',
    status: 'Local',
    description:
      'Aplikasi jasa titip barang yang menghubungkan user, produsen, dan driver dalam proses pemesanan hingga pengiriman barang.',
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'JavaScript',
    ],
    contribution:
      'Berfokus pada pengembangan frontend dan implementasi antarmuka berdasarkan kebutuhan sistem serta alur pengguna.',
    features: [
      'Multi-role system',
      'Product ordering',
      'Driver selection',
      'Order confirmation',
      'Delivery status',
      'QRIS payment',
      'Admin monitoring',
      'Manual payout management',
    ],
    github: '',
    demo: '',
    image: '/images/projects/guakit.jpg',
  },
]

export default projects