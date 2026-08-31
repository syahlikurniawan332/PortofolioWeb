const projects = [
  {
    id: 1,
    title: "Sentiment Analysis",
    subtitle: "Naïve Bayes vs KNN",
    category: "Academic Project",
    type: "Individual",
    status: "Live",
    description:
      "Web application for Indonesian sentiment analysis that compares Naïve Bayes and K-Nearest Neighbors (KNN) based on prediction results, accuracy, and execution time.",
    technologies: [
      "Laravel",
      "Tailwind CSS",
      "Python",
      "Flask",
      "MySQL",
      "Naïve Bayes",
      "KNN",
    ],
    contribution:
      "Developed the web application, designed the sentiment analysis workflow, implemented text preprocessing and TF-IDF, trained and evaluated Naïve Bayes and KNN models, integrated Laravel with a Flask REST API, and deployed the application for public access.",
    features: [
      "Single-text sentiment analysis",
      "CSV dataset analysis",
      "Text preprocessing",
      "TF-IDF feature extraction",
      "Naïve Bayes & KNN classification",
      "Model performance comparison",
      "Prediction confidence",
      "Execution time comparison",
      "Sentiment visualization",
      "Live deployed application",
    ],
    github: "https://github.com/syahlikurniawan332/TGASentimen",
    demo: "https://tgasentimen.kesug.com",
    image: "/images/projects/sentiment-analysis/01-dashboard.jpg",
    screenshots: [
      "/images/projects/sentiment-analysis/01-dashboard.jpg",
      "/images/projects/sentiment-analysis/02-analysis.jpg",
      "/images/projects/sentiment-analysis/03-comparison.jpg",
    ],
  },

  {
    id: 2,
    title: "Radja Flasher",
    subtitle: "Android & iPhone Service Website",
    category: "Web Development",
    type: "Individual",
    status: "Live",
    description:
      "Responsive service website for Radja Flasher that presents service documentation, operating hours, business location, articles, and direct customer contact through WhatsApp.",
    technologies: ["Laravel", "Tailwind CSS", "JavaScript", "Vite"],
    contribution:
      "Developed and optimized the website interface, structured business information through configuration files, implemented responsive navigation, WhatsApp and Google Maps integration, service documentation, before-and-after showcases, article content, image optimization, and production deployment.",
    features: [
      "Responsive business website",
      "Operating hours information",
      "Google Maps integration",
      "WhatsApp consultation",
      "Before & after service showcase",
      "Service documentation gallery",
      "Article & maintenance tips",
      "Responsive mobile navigation",
      "Optimized WebP image assets",
      "Production deployment",
    ],
    github: "https://github.com/syahlikurniawan332/RadjaFlasher",
    demo: "https://radjaflasher.free.je",
    image: "/images/projects/service-shop/01-home.jpg",
    screenshots: [
      "/images/projects/service-shop/01-home.jpg",
      "/images/projects/service-shop/02-services.jpg",
      "/images/projects/service-shop/03-location.jpg",
    ],
  },

  {
    id: 3,
    title: "Pharmacy Management System",
    subtitle: "Inventory & Transaction Management",
    category: "Web Application",
    type: "Individual",
    status: "Live",
    description:
      "A pharmacy management application designed to manage medicines, inventory, transactions, expiration dates, and daily activities for administrators and pharmacists.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    contribution:
      "Developed the system with separate administrator and pharmacist roles, including medicine management, multi-item transactions, automatic stock updates, expiration monitoring, and an informational dashboard.",
    features: [
      "Role-based access",
      "Medicine management",
      "Stock management",
      "Multi-item transactions",
      "Automatic stock updates",
      "Expiration monitoring",
      "Transaction history",
      "Dashboard & charts",
    ],
    github: "https://github.com/syahlikurniawan332/DesemberSistemApotek",
    demo: "http://apotek-hijau.free.je/login",
    image: "/images/projects/pharmacy/01-dashboard.jpg",
    screenshots: [
      "/images/projects/pharmacy/01-dashboard.jpg",
      "/images/projects/pharmacy/02-medicine.jpg",
      "/images/projects/pharmacy/03-transaction.jpg",
    ],
  },

  {
    id: 4,
    title: "Guakit",
    subtitle: "Personal Shopping & Delivery Platform",
    category: "Client Project",
    type: "Team",
    status: "Private Project",

    description:
      "A collaborative personal shopping and delivery platform that connects customers, merchants, and drivers throughout the ordering and delivery process.",

    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],

    contribution:
      "Focused on frontend development and interface implementation based on system requirements and user workflows.",

    features: [
      "Multi-role system",
      "Product ordering",
      "Driver selection",
      "Order confirmation",
      "Delivery status",
      "QRIS payment",
      "Admin monitoring",
      "Manual payout management",
    ],

    github: "",
    demo: "",

    image: "/images/projects/guakit/01-home.jpg",

    screenshots: [
      "/images/projects/guakit/01-home.jpg",
      "/images/projects/guakit/02-order.jpg",
      "/images/projects/guakit/03-delivery.jpg",
    ],
  },
];

export default projects;
