export const personalInfo = {
  name: "Sonali Panigrahi",
  title: "Aspiring MERN Stack Developer",
  status: "Final-Year MCA Candidate (2027)",
  availability: "Open to Internships & Software Engineering Roles",
  tagline: "Building modern web experiences with the MERN Stack.",
  location: "GIET University, Gunupur, Odisha, India",
  email: "panigrahisonali278@gmail.com",
  phone: "+91 9861680383",
  github: "https://github.com/sonali-panigrahi2605",
  linkedin: "https://www.linkedin.com/in/sonali-panigrahi-18113a294",
  typingPhrases: [
    "MERN Stack Developer",
    "Full-Stack Web Enthusiast",
    "React.js & Node.js Specialist",
    "AI/ML Explorer & Problem Solver"
  ],
  summary:
    "Im a passionate Final-Year MCA student at GIET University and aspiring Full Stack Developer who enjoys building practical, user-friendly web applications. I love solving problems, learning new technologies, and turning ideas into real-world projects. Looking for an opportunity to contribute, learn from experienced professionals, and continue engineering impactful software.",
  stats: [
    { label: "MCA Academic Score", value: "8.7 CGPA", detail: "GIET University" },
    { label: "BCA Graduation Score", value: "8.43 CGPA", detail: "GIET University" },
    { label: "Internships Completed", value: "4 Programs", detail: "Grade 'O' EduSkills" },
    { label: "Featured Projects", value: "5+ Built", detail: "MERN, Cloud & AI" }
  ]
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: "Proficient", icon: "Code2", color: "#38bdf8" },
    { name: "JavaScript (ES6+)", level: "Proficient", icon: "FileCode", color: "#facc15" },
    { name: "HTML5", level: "Advanced", icon: "Layout", color: "#f97316" },
    { name: "CSS3 / Tailwind CSS", level: "Advanced", icon: "Palette", color: "#38bdf8" },
    { name: "Angular.js", level: "Familiar", icon: "Component", color: "#ef4444" }
  ],
  backend: [
    { name: "Node.js", level: "Proficient", icon: "Server", color: "#22c55e" },
    { name: "Express.js", level: "Proficient", icon: "Cpu", color: "#cbd5e1" },
    { name: "RESTful APIs", level: "Proficient", icon: "Network", color: "#818cf8" },
    { name: "JWT Authentication", level: "Intermediate", icon: "KeyRound", color: "#eab308" }
  ],
  database: [
    { name: "MongoDB", level: "Proficient", icon: "Database", color: "#10b981" },
    { name: "MySQL", level: "Intermediate", icon: "Table2", color: "#38bdf8" },
    { name: "Firebase Firestore", level: "Intermediate", icon: "Flame", color: "#f59e0b" }
  ],
  languages: [
    { name: "JavaScript", level: "Core", icon: "Terminal", color: "#facc15" },
    { name: "Python", level: "Intermediate", icon: "FileCode2", color: "#60a5fa" },
    { name: "C Language", level: "Foundational", icon: "Binary", color: "#94a3b8" },
    { name: "Java", level: "Basic Knowledge", icon: "Coffee", color: "#f97316" }
  ],
  tools: [
    { name: "Git", level: "Version Control", icon: "GitBranch", color: "#f97316" },
    { name: "GitHub", level: "Collaboration", icon: "Github", color: "#cbd5e1" },
    { name: "VS Code", level: "Primary IDE", icon: "Laptop", color: "#38bdf8" },
    { name: "Postman", level: "API Testing", icon: "Send", color: "#fb923c" },
    { name: "npm", level: "Package Manager", icon: "Package", color: "#ef4444" },
    { name: "AWS (Basics)", level: "Cloud", icon: "Cloud", color: "#f59e0b" },
    { name: "Docker (Basics)", level: "Containers", icon: "Container", color: "#0ea5e9" }
  ]
};

export const projectsData = [
  {
    id: "online-exam-portal",
    title: "Online Exam Portal",
    badge: "Internship Major Project",
    category: "MERN / Full Stack",
    tagline: "Full-stack timed assessment system with dual-role authentication & real-time evaluation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Developed as part of the PCS Global internship program at GIET University. A robust examination management platform featuring secure authentication, question administration, timed answer submissions, and instantaneous automated result generation.",
    problemStatement:
      "Educational institutions frequently struggle with administering scheduled assessments securely, preventing paper leakage, and providing instant grading feedback to candidates.",
    keyFeatures: [
      "Role-Based Access: Dedicated portals for Administrators and Students with JWT-secured sessions.",
      "Exam & Question Management: Coordinators can create, edit, schedule, and configure timed question papers.",
      "Interactive Exam Interface: Smooth countdown timer, auto-submission on timeout, and question navigation palette.",
      "Instant Result Calculation: Automated scoring with breakdown of correct/incorrect answers and performance metrics."
    ],
    roleAndContributions:
      "Spearheaded end-to-end full-stack development using the MERN stack. Designed normalized MongoDB schemas for users, exams, and question banks. Built modular Express.js controllers, and constructed a clean, accessible React interface.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    github: "https://github.com/sonali-panigrahi2605",
    demo: null,
    status: "Completed & Evaluated",
    isFeatured: true
  },
  {
    id: "one-kyc-hub",
    title: "OneKYCHub",
    badge: "Major Academic Project",
    category: "MERN / Full Stack",
    tagline: "Centralized KYC platform for single-point verification & secure multi-institution sharing",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    overview:
      "A centralized KYC platform that enables users to undergo identity verification once and securely share verified KYC credentials with authorized financial and enterprise organizations, drastically reducing repetitive verification delays.",
    problemStatement:
      "Customers are repeatedly asked to complete duplicate KYC verifications across banks, fintechs, and government portals, risking sensitive PII exposure and causing excessive overhead.",
    keyFeatures: [
      "Single-touch KYC Verification: Upload identity documents once for audited verification.",
      "Granular Consent Mechanism: Users grant and revoke credential viewing rights to specific partner organizations.",
      "Optimized API Integration: Seamless data retrieval pipelines with tokenized payloads.",
      "Containerized Deployment: Dockerized microservices with AWS hosting architecture."
    ],
    roleAndContributions:
      "Engineered backend REST APIs with Node.js and Express.js. Designed state management in React, optimized database indexing for lightning-fast queries, and deployed containerized containers using Docker and AWS fundamentals.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS", "Docker", "Tailwind CSS"],
    github: "https://github.com/sonali-panigrahi2605",
    demo: null,
    status: "Completed Major Project",
    isFeatured: true
  },
  {
    id: "travel-planner-website",
    title: "Travel Planner Website",
    badge: "Minor Team Project",
    category: "Web & Cloud",
    tagline: "Multi-day itinerary architect with budget breakdown & Firebase real-time sync",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
    overview:
      "A responsive web platform designed to streamline travel planning by uniting itinerary scheduling, packing checklists, and expense tracking into an intuitive collaborative portal.",
    problemStatement:
      "Travelers often juggle disjointed notes, spreadsheets, and chat groups to manage itineraries and group budgets, leading to confusion and overspending.",
    keyFeatures: [
      "Custom Itinerary Builder: Create day-by-day plans with destination milestones and timing.",
      "Budget Tracker: Monitor planned vs actual travel expenses across accommodation, transport, and food.",
      "Firebase Cloud Integration: Real-time data persistence and authentication for seamless access across devices."
    ],
    roleAndContributions:
      "Served as Team Lead coordinating a 3-person developer squad. Spearheaded both frontend UI implementation and Firebase database connectivity.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Firebase", "Team Leadership"],
    github: "https://github.com/sonali-panigrahi2605",
    demo: null,
    status: "Completed Minor Project",
    isFeatured: false
  }
];

export const experienceData = [
  {
    role: "MERN Full Stack Developer Intern",
    company: "AICTEEduSkills Virtual Internship",
    duration: "8 Weeks (Issued Aug 2026)",
    grade: "Grade 'O' (Outstanding)",
    highlights: [
      "Completed intensive hands-on full-stack development training and industry-evaluated project work.",
      "Mastered React.js component architectures, state hooks, and client-side routing.",
      "Engineered secure RESTful APIs using Node.js & Express.js with JWT authentication.",
      "Integrated MongoDB database modeling and deployed full-stack web applications following Git workflows."
    ]
  },
  {
    role: "AI/ML Virtual Intern",
    company: "AICTEEduSkills Virtual Internship",
    duration: "10 Weeks (Issued Jun 2026)",
    grade: "Grade 'O' (Outstanding)",
    highlights: [
      "Acquired deep grounding in Python programming, scientific computing libraries, and AI/ML pipelines.",
      "Performed comprehensive data preprocessing, exploratory data analysis (EDA), and feature engineering.",
      "Trained and evaluated machine learning models using standard metrics (precision, recall, F1-score).",
      "Explored natural language processing and computer vision fundamentals."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "PCS Global  Internship Program",
    duration: "Academic Internship (GIET University)",
    grade: "Successfully Completed",
    highlights: [
      "Designed and engineered the full-stack Online Exam Portal featuring separate Student and Admin portals.",
      "Constructed modular REST APIs in Express.js and managed dynamic schemas in MongoDB.",
      "Collaborated on API performance optimization, cross-browser compatibility testing, and responsive UI."
    ]
  },
  {
    role: "Python & AWS Intern (IPE)",
    company: "Hebbale Academy",
    duration: "Jun 2024  Jul 2024",
    grade: "Good Competing Code Award",
    highlights: [
      "Participated in the Virtual Industry Exposure Program (IPE) focusing on core Python and cloud fundamentals.",
      "Solved algorithmic problem-solving challenges and completed hands-on coding assignments.",
      "Recognized with the prestigious 'Good Competing Code Award' for writing modular, efficient code."
    ]
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "GIET University, Gunupur, Odisha",
    period: "2025  2027 (Final Year)",
    score: "8.7 CGPA",
    details:
      "Advanced coursework in Advanced Web Technologies, Cloud Computing, Object-Oriented Software Design, Machine Learning Fundamentals, and Enterprise Database Systems."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "GIET University, Gunupur, Odisha",
    period: "2022  2025",
    score: "8.43 CGPA",
    details:
      "Graduated with Distinction. Core focus on Data Structures & Algorithms, Database Management Systems (SQL), Web Development (HTML/CSS/JS), Operating Systems, and Java."
  },
  {
    degree: "Higher Secondary Certificate (Intermediate / +2)",
    institution: "Vikash Higher Secondary School",
    period: "2020  2022",
    score: "75.56%",
    details: "Science stream with coursework in Physics, Chemistry, Mathematics, and Computer Science."
  }
];

export const certificationsData = [
  {
    title: "MERN Full Stack Development + Project",
    issuer: "AICTE  EduSkills",
    date: "Issued Aug 2026",
    badge: "Grade 'O' (Outstanding)",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    verifyUrl: "https://eduskillsfoundation.org"
  },
  {
    title: "AI-ML Virtual Internship",
    issuer: "AICTE  EduSkills",
    date: "Issued Jun 2026",
    badge: "Grade 'O' (Outstanding)",
    skills: ["Python", "Data Preprocessing", "Supervised Learning", "Model Evaluation"],
    verifyUrl: "https://eduskillsfoundation.org"
  },
  {
    title: "Good Competing Code Award",
    issuer: "Hebbale Academy",
    date: "Issued Jul 2024",
    badge: "Excellence Award",
    skills: ["Python", "Algorithms", "Clean Code Architecture", "Problem Solving"],
    verifyUrl: "https://hebbaleacademy.com"
  },
  {
    title: "Google Cloud Computing Foundation",
    issuer: "NPTEL  IIT Kharagpur",
    date: "Aug 2024  Oct 2024",
    badge: "Elite Certificate",
    skills: ["Google Cloud Platform", "Compute Engine", "Cloud Storage", "Virtual Networks"],
    verifyUrl: "https://nptel.ac.in"
  },
  {
    title: "Data Analysis with Python",
    issuer: "NPTEL",
    date: "Jan 2024  Apr 2024",
    badge: "Certified",
    skills: ["NumPy", "Pandas", "Matplotlib", "Data Wrangling"],
    verifyUrl: "https://nptel.ac.in"
  },
  {
    title: "Social Networks",
    issuer: "NPTEL",
    date: "Feb 2026  Apr 2026",
    badge: "Certified",
    skills: ["Graph Theory", "Network Analysis", "Information Diffusion"],
    verifyUrl: "https://nptel.ac.in"
  },
  {
    title: "Complete Java Programming Course",
    issuer: "Udemy",
    date: "Issued Aug 2024",
    badge: "Verified Certificate",
    skills: ["Java Core", "OOP Principles", "Collections Framework", "Exception Handling"],
    verifyUrl: "https://www.udemy.com"
  }
];
