export const portfolioData = {
  personal: {
    name: "Rohan Shetty",
    role: "Software Developer",
    email: "rohanshetty135781@gmail.com",
    phone: "7483302346",
    resumeUrl: "/assets/Rohan_Shetty_Resume.pdf",
    profileImage: "/assets/profile.jpg",
  },
  links: {
    email: "mailto:rohanshetty135781@gmail.com",
    phone: "tel:7483302346",

    linkedin: "https://www.linkedin.com/in/rohansshetty-",
    leetcode: "https://leetcode.com/u/Rohanre1813/",
    codeforces: "https://codeforces.com/profile/Rohanre1813",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/rohanshet4k27",
    github: "https://github.com/rohanre1813",
    codolio: "https://codolio.com/profile/Rohanshetty"
  },
  education: [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "NIT Jamshedpur",
      location: "Jamshedpur, Jharkhand",
      period: "08/2024 – 05/2027",
      score: "CGPA : 7.96",
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "IBMR School of Business",
      location: "Hubli, Karnataka",
      period: "09/2020 – 09/2023",
      score: "CGPA : 7.67",
    }
  ],
  skills: {
    "Programming Languages": ["C++", "JavaScript", "SQL", "Python"],
    "Frontend Development": ["React"],
    "Backend Development": ["Node.js", "Express.js", "Socket.IO"],
    "Databases & Caching": ["MongoDB", "MySQL", "Redis"],
    "DevOps & Infrastructure": ["Docker", "Git", "GitHub", "Nginx", "Linux(Basics)", "Vercel", "Render"],
    "Core Concepts": ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "DBMS", "REST APIs"],
    "AI & LLM": ["LLMs", "RAG", "Embeddings", "LangChain", "Vector Databases", "Gemini API"]
  },
  projects: [
    {
      name: "JusBill – AI-Powered Invoicing & Inventory Management System",
      period: "02/2026 – 05/2026",
      description: "Full-stack invoicing and inventory management system with robust billing, stock tracking, and interactive analytics dashboards.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Redis", "Docker", "GitHub Actions", "JWT"],
      details: [
        "Developed REST APIs using Node.js/Express and MongoDB, featuring real-time inventory updates and secure JWT authentication.",
        "Reduced average API response time by ~80% on high-traffic endpoints using Redis caching with a 5-minute TTL.",
        "Deployed the containerized application on AWS EC2, configuring Nginx as a reverse proxy.",
        "Automated weekly MongoDB backups via GitHub Actions, establishing a reliable disaster recovery pipeline."
      ],
      liveUrl: "https://jusbill.online/",
      githubUrl: "https://github.com/rohanre1813/Jusbill"
    },
    {
      name: "WorkSphere – Real-Time Employee Office Tracking System",
      period: "01/2026 – 02/2026",
      description: "MERN access control system with Edge-Computed AI Facial Verification to eliminate backend server costs.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "TensorFlow.js (face-api.js)", "JWT", "Tailwind CSS"],
      details: [
        "Implemented real-time location tracking across office zones using QR scanning and Socket.IO.",
        "Cut manual attendance reporting effort by building automated MongoDB-powered analytics dashboards.",
        "Deployed on Vercel and Render, secured with JWT authentication, Role-Based Access Control, and code obfuscation."
      ],
      liveUrl: "https://worksphere-office.vercel.app/",
      githubUrl: "https://github.com/rohanre1813/Worksphere-"
    },
    {
      name: "DocuAI – RAG-Powered Document Analytics Engine",
      period: "05/2026 – 07/2026",
      description: "RAG-powered document analytics platform that enables users to upload PDFs, perform semantic search, generate summaries, and ask AI-powered questions.",
      technologies: ["React", "Node.js", "Express.js", "Python", "MongoDB", "Pinecone", "Gemini API"],
      details: [
        "Designed a Node.js + Python architecture, with Express.js handling APIs, and Python/LangChain for document processing.",
        "Integrated Gemini Embeddings with Pinecone via LangChain for semantic search.",
        "Developed a responsive React interface with JWT authentication and chat history.",
        "Deployed using Docker, Render, and Vercel."
      ],
      liveUrl: "https://intelldocs-ai.vercel.app/",
      githubUrl: "https://github.com/rohanre1813/DOCAI"
    }
  ],
  achievements: [
    "Solved 800+ DSA and competitive programming problems across 3+ coding platforms.",
    "Achieved a maximum rating of 1142 on Codeforces, demonstrating strong problem-solving skills.",
    "Secured All India Rank 549 in NIMCET 2024 among 25,000+ candidates.",
    "Secured Rank 29 in Karnataka PGCET MCA 2024 among 13,000+ candidates."
  ]
};
