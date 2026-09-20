export const personalInfo = {
  name: "Gali Uday Kiran",
  headline: "Java Developer",
  role: "Java Developer & Software Engineer",
  company: "Alladi Cloud Solutions",
  parentCompany: "Brainyway",
  location: "Hyderabad, India",
  email: "udaykirangali2@gmail.com",
  phone: "8341880177",
  portfolioUrl: "https://udaykirangali.onrender.com/",
  linkedinUrl: "https://www.linkedin.com/in/udaykiran-gali-522925285/",
  githubUrl: "https://github.com/galiudaykiran",
  resumeUrl: "/Resume_Uday_Kiran.pdf",
  profileImage: "/profile.jpg",
  currentRoleTimeline: "June 2026 — Present",
  heroSubtitle: "Java Developer building scalable backend systems, microservices and modern applications.",
  aboutText: "I'm a Computer Science graduate and Java Developer focused on building backend systems, microservices and practical software applications. My experience includes developing the Local Taxi application end-to-end across frontend mobile development and backend development."
};

export const currentWork = {
  title: "LOCAL TAXI",
  role: "Java Developer",
  company: "Alladi Cloud Solutions",
  parentCompany: "Brainyway",
  period: "June 2026 — Present",
  location: "Hyderabad, India",
  tag: "01 / CURRENTLY BUILDING",
  description: "Developing the Local Taxi application end-to-end, working across frontend mobile development and backend development.",
  highlights: [
    "End-to-end architecture encompassing passenger & driver dispatch lifecycle",
    "High-throughput RESTful backend services built with robust Java & Spring ecosystem",
    "Real-time ride coordinates stream, stateful status updates, and session handling",
    "Mobile frontend client integration with reactive state management"
  ],
  techStack: ["Java", "Spring Boot", "Microservices", "Flutter", "MySQL", "REST APIs", "Postman"]
};

export const experience = [
  {
    id: "alladi",
    period: "June 2026 — Present",
    year: "2026 — PRES",
    role: "Java Developer",
    company: "Alladi Cloud Solutions",
    parentCompany: "Brainyway",
    type: "Full-Time",
    current: true,
    description: "Developing the Local Taxi application end-to-end, working across frontend mobile development and backend development.",
    skills: ["Java", "Spring Boot", "Microservices", "Flutter", "REST APIs", "System Architecture"]
  },
  {
    id: "3zen",
    period: "January 2026 — June 2026",
    year: "2026",
    role: "Junior Software Engineer Intern",
    company: "3Zen Consulting Private Limited",
    type: "Internship",
    current: false,
    description: "Designed and built real-time microservices-based applications using Spring Boot, including Product Management Service and User Service integrated with Spring Security for authentication and authorization.",
    skills: ["Spring Boot", "Microservices", "Spring Security", "Authentication", "User Service", "Product Service"]
  },
  {
    id: "skillbanc",
    period: "June 2024 — July 2024",
    year: "2024",
    role: "Developer Intern",
    company: "Skill banc",
    type: "Internship",
    current: false,
    description: "Developed animated mathematics lessons using technical and creative approaches to make complex concepts more engaging.",
    skills: ["Technical Visualizations", "Creative Development", "Algorithms", "Concept Animation"]
  }
];

export const skillCategories = [
  {
    name: "Programming",
    icon: "Code2",
    description: "Core languages for systems and algorithmic logic",
    skills: [
      { name: "Java", level: "Primary", highlight: true, note: "Backend Core & Enterprise Systems" },
      { name: "SQL", level: "Query Language", highlight: true, note: "Complex Joins & Schema Design" },
      { name: "C", level: "Systems", highlight: false, note: "Memory & Low-level Principles" },
      { name: "Python", level: "Scripting & AI", highlight: false, note: "Automation & Computer Vision" }
    ]
  },
  {
    name: "Backend / Application",
    icon: "Server",
    description: "Distributed architectures, microservices, BaaS and client frameworks",
    skills: [
      { name: "Spring Boot", level: "Framework", highlight: true, note: "Microservices, DI, Security" },
      { name: "Flutter", level: "Mobile Framework", highlight: true, note: "Cross-Platform Mobile Apps" },
      { name: "Supabase", level: "Backend / BaaS", highlight: true, note: "PostgreSQL, Realtime DB & Auth" }
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: "Cloud",
    description: "Cloud infrastructure and scalable deployment fundamentals",
    skills: [
      { name: "AWS", level: "Cloud Platform", highlight: true, note: "EC2, S3, IAM & Cloud Foundations" }
    ]
  },
  {
    name: "Database / Tools",
    icon: "Database",
    description: "Data persistence, AI tools, testing and engineering environments",
    skills: [
      { name: "MySQL", level: "RDBMS", highlight: true, note: "Relational Modeling & Transactions" },
      { name: "MongoDB", level: "NoSQL", highlight: false, note: "Document Store Collections" },
      { name: "Antigravity", level: "AI Platform", highlight: true, note: "Agentic Engineering & Automation" },
      { name: "Claude", level: "AI Assistant", highlight: true, note: "Advanced Code Reasoning & Workflows" },
      { name: "GitHub", level: "VCS", highlight: false, note: "Git Workflow & Branching" },
      { name: "IntelliJ IDEA", level: "IDE", highlight: true, note: "Java & Spring Enterprise Tooling" },
      { name: "Postman", level: "API Tool", highlight: true, note: "API Testing & Automation" },
      { name: "VS Code", level: "Editor", highlight: false, note: "Polyglot Development" },
      { name: "Jupyter Notebook", level: "Data Science", highlight: false, note: "Interactive Prototyping" }
    ]
  },
  {
    name: "Core Computer Science",
    icon: "Cpu",
    description: "Foundational theory powering robust software engineering",
    skills: [
      { name: "DBMS", level: "Theory", highlight: true, note: "ACID, Indexing & Normalization" },
      { name: "Object-Oriented Programming", level: "Paradigm", highlight: true, note: "Encapsulation, Polymorphism, SOLID" },
      { name: "Data Structures & Algorithms", level: "Logic", highlight: true, note: "Trees, Graphs, Time Complexity" },
      { name: "Operating Systems", level: "Systems", highlight: false, note: "Threads, Memory, Concurrency" },
      { name: "Computer Networks", level: "Protocols", highlight: false, note: "TCP/IP, HTTP/S, Sockets, DNS" }
    ]
  }
];

export const projects = [
  {
    id: "product-auth-service",
    number: "01",
    title: "Product Catalog and User Authentication Service",
    shortTitle: "Catalog & Auth Microservices",
    category: "Distributed Backend Architecture",
    description: "Designed a scalable system to manage products and categories with full CRUD operations, validation, and meaningful error handling. Developed using a microservices architecture, integrating a separate User Authentication & Authorization Service. Implemented authentication services for signup, login, token validation and logout using BCryptPasswordEncoder and token-based session management.",
    tags: [
      "SPRING BOOT",
      "POSTMAN",
      "INTELLIJ IDEA",
      "JPA / HIBERNATE",
      "MYSQL",
      "BCryptPasswordEncoder"
    ],
    architecture: {
      clientFlow: ["Client App", "API Gateway", "Product Service", "MySQL Database"],
      authFlow: ["User Request", "Authentication Filter", "BCrypt Verification", "Token Session", "Authorization Guard"]
    },
    metrics: [
      { label: "Architecture", value: "Microservices" },
      { label: "Security", value: "BCrypt + Tokens" },
      { label: "Data Layer", value: "JPA / Hibernate" }
    ]
  },
  {
    id: "face-recognition-grouping",
    number: "02",
    title: "Face Recognition & Grouping",
    shortTitle: "Face AI & Image Clustering",
    category: "Computer Vision & Automation",
    description: "Built a face recognition tool for clustering and organizing images using face_recognition and HOG detection. Added webcam-based real-time recognition and a user-friendly interface with rename and ZIP features.",
    tags: [
      "PYTHON",
      "OPENCV",
      "HOG MODEL",
      "NUMPY",
      "TENSORFLOW",
      "JUPYTER NOTEBOOK"
    ],
    pipeline: [
      { step: "Input", detail: "Raw Photo Directory / Live Webcam Stream" },
      { step: "Detection", detail: "HOG (Histogram of Oriented Gradients) Classifier" },
      { step: "Encoding", detail: "128-d Facial Landmark Embeddings" },
      { step: "Clustering", detail: "Unsupervised Grouping & Duplicate Pruning" },
      { step: "Export", detail: "Automated Folder Reorganization & ZIP Generator" }
    ],
    metrics: [
      { label: "Detection Engine", value: "HOG & OpenCV" },
      { label: "Interface", value: "Webcam + Batch" },
      { label: "Feature Extraction", value: "128D Embeddings" }
    ]
  },
  {
    id: "document-hub",
    number: "03",
    title: "Document Hub",
    shortTitle: "Mobile Document Management",
    category: "Mobile Application",
    description: "Built Document Hub, a file management app with folder creation, notes, PDF maker, file uploads and camera integration. Implemented theme customization and colorful UI to enhance usability and user experience.",
    tags: [
      "FLUTTER",
      "DART",
      "ANDROID STUDIO"
    ],
    features: [
      "Dynamic Folder Hierarchy & File Categorization",
      "Built-in Rich Notes Editor & PDF Generator",
      "Hardware Camera Integration for Instant Document Capture",
      "Multi-format File Upload & Storage Management",
      "Custom Theme Engine with Vibrant UI Customization"
    ],
    metrics: [
      { label: "Platform", value: "Android / Flutter" },
      { label: "Core Modules", value: "Notes, PDF, Cam" },
      { label: "Storage", value: "Local & Filesystem" }
    ]
  }
];

export const education = [
  {
    institution: "ICFAI University, Hyderabad",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    period: "2022 — 2026",
    scoreLabel: "CGPA",
    score: "8.77",
    highlights: "Rigorous focus on Data Structures, Database Systems, Computer Architecture, and Modern Backend Engineering."
  },
  {
    institution: "Priyadharshini Junior College",
    degree: "Intermediate",
    field: "MPC (Mathematics, Physics, Chemistry)",
    period: "2020 — 2022",
    scoreLabel: "Score",
    score: "97.1%",
    highlights: "Distinction in advanced analytical mathematics and logical reasoning."
  },
  {
    institution: "Krishnaveni School",
    degree: "Secondary School Certificate",
    field: "General Academics",
    period: "2019 — 2020",
    scoreLabel: "Score",
    score: "93.1%",
    highlights: "Academic excellence with foundational science and mathematics focus."
  }
];

export const certifications = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS",
    badge: "Cloud Architecture",
    description: "Core cloud infrastructure, computing models, security controls, and storage topologies."
  },
  {
    title: "Java Course — Mastering the Fundamentals",
    issuer: "Scaler",
    badge: "Core Engineering",
    description: "In-depth OOP mastery, JVM memory model, collections framework, and algorithmic problem solving."
  },
  {
    title: "Microsoft Azure AI-900",
    issuer: "Udamey",
    badge: "AI & ML Principles",
    description: "Foundations of artificial intelligence, computer vision, natural language processing, and Azure ML."
  }
];

export const academicParticipations = [
  {
    title: "IoT-Based Hackathon",
    role: "Hardware & Firmware Builder",
    badge: "Hackathon",
    tech: ["ESP8266", "Embedded C", "Wi-Fi Control", "Robotics"],
    description: "Built a Wi-Fi controlled robotic car using the ESP8266 Wi-Fi module and Embedded C language, implementing direct wireless communication and motor actuation."
  },
  {
    title: "Mobile App & Chatbots Workshop",
    role: "Technical Workshop Attendee",
    badge: "Technical Training",
    tech: ["Mobile Apps", "Chatbot Flows", "AI Integrations"],
    description: "Participated in an intensive hands-on workshop focused on building responsive mobile applications and conversational chatbot systems."
  }
];
