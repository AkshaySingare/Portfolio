import { Experience, Project, SkillCategory, EducationItem, SocialLink, ArchitectureHighlight } from "@/types";

export const personalInfo = {
  name: "Akshay Singare",
  headline: "Java Developer & Software Developer",
  subHeadline: "Building secure, high-throughput backend systems & deploying production infrastructure with Spring Boot, MySQL, and Linux VPS.",
  bio: "Java Developer with 11 months of hands-on experience building secure, scalable backend architectures using Java, Spring Boot, Spring Security, and Hibernate (JPA) with MySQL. Skilled in designing RESTful APIs, relational database schemas, and transactional business logic. Experienced with Linux server administration, Nginx reverse proxies, GitHub Actions CI/CD, and production deployment on VPS. Comfortable working across the stack with Next.js and React when needed, with an uncompromised focus on clean architecture and maintainable systems.",
  email: "akshaysingare.dev@gmail.com",
  phone: "+91 7020540649",
  location: "Warje Malewadi, Pune, Maharashtra, India",
  timezone: "IST (UTC+5:30)",
  availability: "Open for Full-Time & Contract Opportunities",
  yearsExperience: "11+ Months",
  resumePath: "/Images/AKSHAY-Resume.pdf?v=3",
  profileImage: "/Images/myImage.jpeg",
  alternateImage: "/Images/foto.jpeg",
  roles: [
    "Software Developer",
    "Java Backend Developer",
    "Spring Boot Specialist",
    "Deployment & DevOps Engineer",
    "Full-Stack Engineer (Next.js)",
    "Relational Database Architect"
  ],
  stats: [
    { value: "11+", label: "Months Hands-on Experience" },
    { value: "2+", label: "Live Production Systems" },
    { value: "99.9%", label: "API Reliability Target" },
    { value: "100%", label: "CI/CD Automated Deployments" }
  ]
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    label: "Explore Code Repositories",
    url: "https://github.com/AkshaySingare",
    icon: "Github",
    handle: "github.com/AkshaySingare"
  },
  {
    platform: "LinkedIn",
    label: "Connect on LinkedIn",
    url: "https://linkedin.com/in/Akshay-Singare",
    icon: "Linkedin",
    handle: "linkedin.com/in/Akshay-Singare"
  },
  {
    platform: "Email",
    label: "Send Direct Email",
    url: "mailto:singareakshay937@gmail.com",
    icon: "Mail",
    handle: "singareakshay937@gmail.com"
  },
  {
    platform: "WhatsApp",
    label: "Direct Chat",
    url: "https://wa.me/917020540649",
    icon: "MessageSquare",
    handle: "+91 7020540649"
  }
];

export const experiences: Experience[] = [
  {
    id: "veagle-space",
    role: "Backend Developer & Deployment Engineer",
    company: "Veagle Space Pvt. Ltd.",
    location: "Pune, MH",
    period: "March 2026 – Present",
    type: "Full-Time",
    technologies: ["Java", "Spring Boot", "Spring Security", "Hibernate (JPA)", "MySQL", "Next.js", "React Native", "Linux (Ubuntu)", "Nginx", "GitHub Actions"],
    summary: "Leading the core backend architecture and deployment pipelines for the live enterprise platform (veaglespace.com), ensuring secure authentication, database query optimization, and zero-downtime releases.",
    bullets: [
      "Architected and developed core business modules for the live platform (veaglespace.com) utilizing Java, Spring Boot, Hibernate (JPA), and MySQL.",
      "Engineered granular role-based authorization and stateless JWT authentication with Spring Security to safeguard critical endpoints.",
      "Designed normalized relational schemas and optimized indexing strategies to handle high concurrency with minimal latency.",
      "Configured and maintained production Linux VPS instances with Nginx reverse proxy, SSL certification, and automated GitHub Actions CI/CD pipelines.",
      "Collaborated with a team to build the Attendance SaaS platform (atty.veaglespace.com), handled its deployment, and engineered the companion mobile app for Play & App Store."
    ],
    liveUrl: "https://veaglespace.com",
    verified: true
  },

  {
    id: "creazione-software",
    role: "Java Developer Intern",
    company: "Creazione Software",
    location: "Pune, MH",
    period: "6 Months",
    type: "Internship",
    technologies: ["Java", "Spring Boot", "Spring MVC", "MySQL", "RESTful APIs", "Git", "Postman"],
    summary: "Contributed to developing enterprise backend microservices, testing REST API endpoints, and collaborating in daily Agile sprint routines.",
    bullets: [
      "Assisted senior engineers in writing scalable Java-based backend services and data access layers with Spring Boot and JPA.",
      "Authored and executed comprehensive RESTful API test suites using Postman, verifying payload contracts and status codes.",
      "Participated actively in pull request code reviews, unit testing, and Agile sprint ceremonies to deliver on-time sprint goals."
    ],
    verified: true
  },
  {
    id: "personal-projects-freelance",
    role: "Full Stack Developer (Self-Directed)",
    company: "Personal & Academic Projects",
    location: "Pune, MH",
    period: "Ongoing",
    type: "Self-Employed",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "React.js", "Node.js", "Express.js"],
    summary: "Architected and developed complex full-stack and backend systems focusing on high-concurrency algorithms, transactional integrity, and scalable recommendations.",
    bullets: [
      "Slot Booking System: Designed and developed a system enabling users to reserve time slots with real-time availability validation.",
      "Slot Booking System: Implemented RESTful APIs using Spring Boot, managed data persistence using Hibernate (JPA) with MySQL, and designed relational schemas ensuring data consistency.",
      "Slot Booking System: Prevented race conditions and duplicate bookings by applying transactional management and backend validation logic.",
      "Product Recommendation Web App: Implemented a recommendation engine processing 500+ product records using category- and item-to-item logic.",
      "Product Recommendation Web App: Built an Admin Panel with CRUD for 50+ products and 10+ categories.",
      "Product Recommendation Web App: Designed customer features including cart, purchase flow, and order tracking used by 30+ test users."
    ],
    verified: false
  }
];

export const projects: Project[] = [
  {
    id: "veagle-business-registration",
    title: "Veagle Space Business Registration Portal",
    category: "Production",
    role: "Full Stack Developer (Backend Focus)",
    tagline: "Online portal for company registration, GST filing, trademark registration, and legal services.",
    description: "Developed and deployed a comprehensive platform for business registration, tax compliance, and intellectual property protection. Features automated workflows for LLP, OPC, and Section 8 company registrations.",
    highlights: [
      "Developed the core services for the business registration platform and handled basic deployment",
      "Implemented secure data handling for sensitive legal and tax documents",
      "Optimized performance and SEO for high-traffic public portal"
    ],
    techStack: ["Next.js", "React", "Node.js", "Linux VPS", "Nginx", "SEO Optimization"],
    liveUrl: "http://br.veaglespace.com/",
    isFeatured: true,
    accentColor: "#D4AF37",
    stats: [
      { label: "Status", value: "Live Production" },
      { label: "Services", value: "Legal & Tax" },
      { label: "Deployment", value: "VPS & Nginx" }
    ]
  },
  {
    id: "sakhi-suraksha-sos",
    title: "Sakhi Suraksha SOS Platform & App",
    category: "Production",
    role: "Full Stack Developer (Backend Focus)",
    tagline: "Personal & women safety platform with 3-second SOS broadcasting and live GPS tracking.",
    description: "Engineered a modern personal safety web application (sakhisuraksha.veaglespace.com) featuring instant emergency alerts and real-time AES-256 encrypted location streaming. Also developing the companion cross-platform mobile app ('SakhiSuraksha') for Google Play and Apple App Store.",
    highlights: [
      "Implemented real-time telemetry with AES-256 encrypted location streaming",
      "Configured zero-delay dispatch systems for instant 3-second SOS alerts",
      "Developing the cross-platform companion mobile app (SakhiSuraksha) for global app stores"
    ],
    techStack: ["Next.js", "React Native", "Real-Time Telemetry", "Encryption", "Linux VPS", "App Store", "Google Play"],
    liveUrl: "http://sakhisuraksha.veaglespace.com/",
    isFeatured: true,
    accentColor: "#FF5C8A",
    stats: [
      { label: "Status", value: "Live Production" },
      { label: "Mobile App", value: "In Development" },
      { label: "Response Time", value: "3 Seconds" }
    ]
  },
  {
    id: "veagle-space-platform",
    title: "Veagle Space Live Platform",
    category: "Production",
    role: "Full Stack Developer (Backend Focus)",
    tagline: "Live production SaaS platform with enterprise-grade Spring Boot backend & automated VPS deployment.",
    description: "Architected and delivered the complete backend infrastructure for veaglespace.com. Features robust REST APIs, secure Spring Security authorization, relational schema modeling in MySQL, and automated CI/CD deployment via GitHub Actions to an Ubuntu Linux VPS with Nginx.",
    highlights: [
      "End-to-end production deployment on Linux VPS with Nginx reverse proxy and SSL",
      "Spring Security stateless token validation and role-based access control",
      "Automated continuous delivery via GitHub Actions workflows",
      "Optimized database connection pooling and JPA entity queries"
    ],
    techStack: ["Java", "Spring Boot", "Spring Security", "Hibernate (JPA)", "MySQL", "Next.js", "Ubuntu Linux", "Nginx", "GitHub Actions"],
    liveUrl: "https://veaglespace.com",
    isFeatured: true,
    accentColor: "#10B981",
    stats: [
      { label: "Status", value: "Live Production" },
      { label: "Architecture", value: "Multi-Tier" },
      { label: "CI/CD", value: "Automated" }
    ],
    architectureNotes: [
      "Client requests routed through Nginx reverse proxy with TLS 1.3 encryption",
      "Spring Boot backend runs as a background systemd service",
      "Hibernate JPA handles ORM with 2nd-level caching strategies"
    ]
  },
  {
    id: "valuexpert-ca",
    title: "ValueXpert CA Platform",
    category: "Production",
    role: "Full Stack Developer (Backend Focus)",
    tagline: "End-to-end chartered accountant digital platform delivered with custom backend APIs.",
    description: "Built valuexper.in for a Chartered Accountant consultancy firm (company client). Handled responsive frontend UI and backend API workflows, and managed basic deployment to a Hostinger VPS.",
    highlights: [
      "Delivered complete system from initial schema to live frontend and backend integration",
      "Set up basic build and deploy pipelines using GitHub Actions to Hostinger VPS",
      "Assisted with domain routing and basic Nginx configuration for the live site"
    ],
    techStack: ["Next.js", "Node.js", "Express.js", "MySQL", "Hostinger VPS", "Nginx", "GitHub Actions", "Tailwind CSS"],
    liveUrl: "https://valuexper.in",
    isFeatured: true,
    accentColor: "#06B6D4",
    stats: [
      { label: "Client Status", value: "Delivered & Live" },
      { label: "Deployment", value: "Hostinger VPS" },
      { label: "SEO Score", value: "98/100" }
    ],
    architectureNotes: [
      "Custom REST endpoints for consultation bookings & inquiries",
      "Clean server-side rendering with Next.js for instant search indexing"
    ]
  },
  {
    id: "slot-booking-engine",
    title: "High-Concurrency Slot Booking System",
    category: "Backend",
    role: "Backend Architect",
    tagline: "Transactional slot booking engine with race condition prevention & real-time validation.",
    description: "Engineered a high-performance slot booking system using Java, Spring Boot, Spring Data JPA, and MySQL. Implemented transactional isolation and row-level locking mechanisms to prevent double-booking anomalies under concurrent user requests.",
    highlights: [
      "Prevented race conditions and duplicate bookings using Spring @Transactional & isolation levels",
      "Real-time slot availability queries with optimized index-assisted MySQL queries",
      "Comprehensive validation middleware rejecting invalid time slots and conflicting reservations"
    ],
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Hibernate", "REST APIs", "Maven"],
    githubUrl: "https://github.com/AkshaySingare/Booking-Sloats-Project",
    isFeatured: true,
    accentColor: "#8B5CF6",
    stats: [
      { label: "Concurrency", value: "Race Condition Safe" },
      { label: "Validation", value: "Real-time" },
      { label: "DB Engine", value: "InnoDB / MySQL" }
    ],
    architectureNotes: [
      "Employs pessimistic/optimistic locking strategies to ensure deterministic booking allocation",
      "Clean separation of Service, Repository, and Controller layers"
    ]
  },
  {
    id: "product-recommendation-engine",
    title: "Product Recommendation & Commerce Engine",
    category: "Full Stack",
    role: "Full Stack Developer",
    tagline: "Recommendation algorithm processing 500+ items with administrative CRUD console.",
    description: "Developed a recommendation platform processing 500+ product records using item-to-item and category correlation logic. Includes a full-featured admin dashboard for managing 50+ products across 10+ categories, shopping cart, and order tracking tested by 30+ users.",
    highlights: [
      "Item-to-item correlation recommendation algorithm based on user behavior and category weights",
      "Admin Panel with full CRUD operations across multiple relational entities",
      "Cart state management, checkout simulation, and live order tracking verified with 30+ testers"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "RESTful APIs"],
    githubUrl: "https://github.com/AkshaySingare/Product_Recommendation_System",
    isFeatured: true,
    accentColor: "#F59E0B",
    stats: [
      { label: "Products Catalog", value: "500+ Records" },
      { label: "Categories", value: "10+ Categories" },
      { label: "User Testing", value: "30+ Test Users" }
    ]
  },
  {
    id: "attendance-saas-platform",
    title: "Attendance SaaS Platform & App",
    category: "Production",
    role: "Full Stack & Mobile Developer (Backend Focus)",
    tagline: "Comprehensive attendance tracking SaaS with a published cross-platform mobile app.",
    description: "Collaborated with a team to build the core web platform for a SaaS attendance management solution (atty.veaglespace.com) and handled its deployment. Independently engineered the companion cross-platform mobile app using React Native & Expo, successfully publishing it to both the Google Play Store and Apple App Store.",
    highlights: [
      "Collaborated on building the core web platform for tracking employee and student attendance",
      "Handled production deployment and engineered the cross-platform mobile app using React Native",
      "Managed successful release builds for Google Play Store and Apple App Store"
    ],
    techStack: ["Next.js", "React Native", "Expo", "Node.js", "MySQL", "Google Play", "App Store Connect"],
    liveUrl: "http://atty.veaglespace.com/",
    isFeatured: true,
    accentColor: "#6366F1",
    stats: [
      { label: "Platforms", value: "Web, iOS, Android" },
      { label: "Status", value: "Live Production" },
      { label: "Deployment", value: "Play & App Store" }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "backend-java",
    title: "Java & Backend Architecture",
    icon: "Server",
    tagline: "Enterprise-grade microservices, REST APIs, and secure transaction management",
    skills: [
      { name: "Java (Core & Advanced)", level: 94, badge: "Primary", description: "OOP, Multithreading, Streams, Collections, Memory Model" },
      { name: "Spring Boot", level: 95, badge: "Expert", description: "REST Controllers, Dependency Injection, Actuator, Profiles" },
      { name: "Spring Security", level: 92, badge: "Production", description: "JWT, OAuth2, Filter Chains, RBAC, Method Security" },
      { name: "Hibernate / Spring Data JPA", level: 93, badge: "Production", description: "Entity Mapping, JPQL, Caching, Transaction Isolation" },
      { name: "Spring MVC", level: 90, badge: "Core", description: "Request Routing, Validation, Exception Handling" },
      { name: "RESTful API Design", level: 96, badge: "Standard", description: "HTTP semantics, DTO patterns, Swagger/OpenAPI docs" },
      { name: "Maven", level: 88, badge: "Tool", description: "Dependency management, multi-module builds, plugins" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: "Database",
    tagline: "Relational schema design, normalization, indexing, and query optimization",
    skills: [
      { name: "MySQL", level: 93, badge: "Primary", description: "Schema design, InnoDB, indexing, foreign keys, query tuning" },
      { name: "SQL", level: 92, badge: "Expert", description: "Complex joins, aggregations, subqueries, transactions" },
      { name: "MongoDB", level: 75, badge: "Secondary", description: "Document stores, basic aggregation pipelines" },
      { name: "Transaction Management", level: 94, badge: "Crucial", description: "ACID compliance, race condition prevention, lock modes" }
    ]
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud Infrastructure",
    icon: "Terminal",
    tagline: "Production server administration, CI/CD automation, and reverse proxy routing",
    skills: [
      { name: "Linux (Ubuntu Server)", level: 90, badge: "Daily Driver", description: "Systemd, SSH, bash scripting, file permissions, logs" },
      { name: "Nginx", level: 92, badge: "Production", description: "Reverse proxy, SSL termination, load balancing, Gzip" },
      { name: "GitHub Actions CI/CD", level: 91, badge: "Automated", description: "Automated test workflows, build triggers, VPS deployment" },
      { name: "Hostinger VPS & Cloud", level: 89, badge: "Hands-on", description: "Provisioning, firewall rules, DNS record management" },
      { name: "PM2 & Process Control", level: 87, badge: "DevOps", description: "Node process daemonizing, cluster mode, monitoring" },
      { name: "Git & GitHub", level: 94, badge: "Collaborative", description: "Branching workflows, pull requests, semantic versioning" },
      { name: "Postman", level: 92, badge: "Testing", description: "API test suites, automated mock environments" }
    ]
  },
  {
    id: "frontend-web",
    title: "Web & Full-Stack (Secondary)",
    icon: "Layout",
    tagline: "Modern interactive user interfaces built with React and Next.js",
    skills: [
      { name: "Next.js (App Router)", level: 88, badge: "Modern", description: "SSR, SSG, Metadata API, Route Handlers" },
      { name: "React.js", level: 90, badge: "Proficient", description: "Hooks, state management, component lifecycle" },
      { name: "TypeScript", level: 88, badge: "Strict", description: "Type safety, generics, interfaces, strict typing" },
      { name: "JavaScript (ES6+)", level: 92, badge: "Core", description: "Async/Await, Promises, Closures, DOM APIs" },
      { name: "Tailwind CSS", level: 95, badge: "Design", description: "Responsive layouts, dark themes, custom utilities" },
      { name: "Node.js & Express.js", level: 89, badge: "Service", description: "Middleware, REST APIs, JSON parsing" },
      { name: "React Native / Expo", level: 82, badge: "Mobile", description: "Cross-platform mobile UI, native build configs" }
    ]
  },
  {
    id: "concepts-ai",
    title: "Computer Science & AI-Assisted Dev",
    icon: "Cpu",
    tagline: "Fundamental CS problem solving and cutting-edge AI accelerator workflows",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: 96, badge: "Core Principle", description: "SOLID principles, inheritance, polymorphism, encapsulation" },
      { name: "Data Structures & Algorithms (DSA)", level: 88, badge: "Problem Solving", description: "Arrays, LinkedLists, Trees, HashMaps, Big-O analysis" },
      { name: "Software Development Lifecycle (SDLC)", level: 92, badge: "Agile", description: "Scrum, sprint planning, peer code reviews" },
      { name: "GitHub Copilot & Cursor", level: 95, badge: "Accelerated", description: "AI pair programming, automated test generation, code refactoring" },
      { name: "ChatGPT & AI Debugging", level: 94, badge: "Efficiency", description: "Architecture brainstorming, schema validation, prompt engineering" }
    ]
  }
];

export const architectureHighlights: ArchitectureHighlight[] = [
  {
    id: "spring-security-jwt",
    title: "Stateless Security & RBAC Pipeline",
    subtitle: "Enterprise Authentication Engine",
    category: "Security & Auth",
    description: "Designed a token-based stateless security pipeline with custom Filter Chains, intercepting incoming HTTP headers, decoding signed claims, and enforcing fine-grained role permissions before hitting business controllers.",
    diagram: {
      steps: [
        { title: "1. Client Request", description: "Bearer token in Authorization header", tech: "HTTP/TLS" },
        { title: "2. JwtAuthFilter", description: "Interception & cryptographic signature verification", tech: "Spring Security Filter" },
        { title: "3. UserDetails Context", description: "Loads authenticated principal into SecurityContextHolder", tech: "Spring Context" },
        { title: "4. Business Controller", description: "PreAuthorize method-level role validation", tech: "Spring MVC" }
      ]
    },
    metrics: [
      "Zero server session memory footprint",
      "Instant token revocation via blacklist cache",
      "100% protected private endpoint surfaces"
    ]
  },
  {
    id: "concurrency-transaction",
    title: "High-Concurrency Transaction Management",
    subtitle: "Slot Booking Consistency Engine",
    category: "Data Consistency",
    description: "Implemented rigorous transactional boundaries with Spring @Transactional, ensuring atomic state transitions and eliminating race conditions when multiple concurrent users attempt to claim the same time slot.",
    diagram: {
      steps: [
        { title: "1. Lock Acquisition", description: "Pessimistic row lock on slot record", tech: "JPA / MySQL InnoDB" },
        { title: "2. State Verification", description: "Validate real-time slot availability state", tech: "Spring Data JPA" },
        { title: "3. Atomic Mutation", description: "Update booking record & generate reservation ID", tech: "Transactional Scope" },
        { title: "4. Commit / Release", description: "Flush transaction and release row lock cleanly", tech: "ACID Isolation" }
      ]
    },
    metrics: [
      "0% double-booking defect rate under concurrent load",
      "Sub-50ms transaction commit latency",
      "Strict ACID guarantee under heavy traffic"
    ]
  },
  {
    id: "vps-cicd-nginx",
    title: "Automated CI/CD & Linux VPS Pipeline",
    subtitle: "Zero-Downtime Deployment Flow",
    category: "DevOps & Cloud",
    description: "Configured automated continuous deployment via GitHub Actions. Pushes to main branch trigger automated build validation, artifact transfer via SSH, and systemd service reload behind an Nginx reverse proxy.",
    diagram: {
      steps: [
        { title: "1. Git Push Main", description: "Developer commits code to GitHub repository", tech: "Git / GitHub" },
        { title: "2. GitHub Actions CI", description: "Automated linting, compilation & test execution", tech: "Ubuntu Runner" },
        { title: "3. SSH Deploy Script", description: "Secure artifact transfer & environment sync", tech: "OpenSSH / VPS" },
        { title: "4. Nginx Reverse Proxy", description: "Zero-downtime routing & Let's Encrypt SSL renewal", tech: "Nginx / Systemd" }
      ]
    },
    metrics: [
      "Automated deploy cycle under 2 minutes",
      "Zero manual SSH server touch needed for releases",
      "A+ SSL Security rating on Qualys SSL Labs"
    ]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Swami Ramanand Teerth Marathwada University",
    location: "Nanded, Maharashtra",
    period: "2022 – 2025",
    highlights: [
      "Core coursework in Data Structures, Object-Oriented Programming, Database Management Systems, and Software Engineering",
      "Developed several full-stack and backend academic projects with Java and relational databases"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Shri Shivaji College",
    location: "Parbhani, Maharashtra",
    period: "2020 – 2022",
    highlights: ["Science stream with mathematics and computer fundamentals"]
  },
  {
    degree: "Secondary School Certificate (SSC - 10th)",
    institution: "N.V.S Marathwada High School",
    location: "Parbhani, Maharashtra",
    period: "2019 – 2020",
    highlights: ["Foundational academics with high marks in Mathematics and Science"]
  }
];

export const spokenLanguages = [
  { name: "English", level: "Professional Working Proficiency", flag: "🇬🇧" },
  { name: "Hindi", level: "Full Professional Fluency", flag: "🇮🇳" },
  { name: "Marathi", level: "Native / Mother Tongue", flag: "🇮🇳" }
];
