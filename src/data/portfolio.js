export const personalInfo = {
  name: "Atikur Rahman Chitholian",
  shortName: "Chitholian",
  title: "Fullstack Web & Software Engineer",
  tagline: "Building high-quality software solutions with 5+ years of professional experience",
  description:
    "Enthusiastic programmer and system engineer with more than 6 years of experience in Linux system administration and full-stack development. Skilled in Rust, PHP, Go, Python, JavaScript, TypeScript, Java, Kotlin and C, with expertise in frameworks like Laravel, Slim, Axum, Spring Boot, Svelte, Vue, and React, and strong proficiency in relational databases (Oracle, MySQL, PostgreSQL) using raw SQL.",
  avatar: "https://avatars.githubusercontent.com/u/18095981?v=4",
  location: "Dhaka, Bangladesh",
  hometown: "Sherpur, Mymensingh, Bangladesh",
  company: "Link Tech",
  email: "chitholian@gmail.com",
  phone: "+8801521446530",
  website: "https://chitholian.com",
  github: "https://github.com/chitholian",
  linkedin: "https://linkedin.com/in/chitholian",
  twitter: "https://twitter.com/the_chitholian",
  facebook: "https://facebook.com/Chitholian",
  resumeUrl: "/resume.html",
};

export const experiences = [
  {
    role: "Software Engineer",
    company: "Link Tech IT",
    companyLocation: "Makkah Al Rusifa, Saudi Arabia",
    url: "https://linktech.com.sa/",
    period: "Sep 2025 - Present",
    current: true,
    responsibilities: [
      "Web App Development",
      "REST API Development",
      "Custom Web Framework",
      "Software Security",
      "Database Design",
    ],
    technologies: ["PHP", "Laravel", "Bootstrap CSS", "Tailwind CSS", "MySQL", "MariaDB", "ERP System"],
  },
  {
    role: "Software Engineer",
    company: "Computer Network Systems Limited",
    companyLocation: "Dhaka, Bangladesh",
    url: "https://cnsbd.com/",
    period: "Oct 2022 - Sep 2025",
    current: false,
    responsibilities: [
      "Web App Development",
      "REST API Development",
      "Create Custom Components",
      "Debugging & Bug-Fixing",
      "Create Stored Procedures",
      "Source Code Management",
    ],
    technologies: ["PHP Laravel", "Zend Framework", "Oracle PL/SQL", "Java & Spring Boot", "Vue JS & React", "Tailwind CSS"],
  },
  {
    role: "Freelance Software Developer",
    company: "Self-Employed",
    companyLocation: "Remote",
    url: null,
    period: "Jun 2020 - Sep 2022",
    current: false,
    responsibilities: [
      "Mobile & Web Development",
      "REST API Development",
      "Build Custom VPN Protocol",
      "Build OpenWrt Firmware",
      "Build Custom Linux Distro",
      "Develop FastAGI with GO",
      "Develop SMPP Server",
      "Manage Linux VPS Systems",
    ],
    technologies: ["Rust", "C", "GO", "PHP", "OpenWrt", "Asterisk", "SIP", "RTP", "SMPP v5", "Laravel", "Slim v4", "MySQL", "Vue JS", "Svelte", "Bootstrap CSS"],
  },
];

export const skills = {
  languages: [
    { name: "PHP", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Java", level: 95 },
    { name: "Rust", level: 80 },
    { name: "C", level: 95 },
    { name: "Python", level: 85 },
    { name: "Go", level: 85 },
    { name: "Kotlin", level: 85 },
  ],
  frameworks: [
    { name: "Laravel", level: 95, color: "#FF2D20" },
    { name: "Vue.js", level: 95, color: "#4FC08D" },
    { name: "React", level: 95, color: "#61DAFB" },
    { name: "Svelte", level: 90, color: "#FF3E00" },
    { name: "Spring Boot", level: 85, color: "#6DB33F" },
    { name: "Django", level: 75, color: "#092E20" },
  ],
  additional: [
    { name: "MySQL", level: 95, color: "#4479A1" },
    { name: "Oracle PL/SQL", level: 85, color: "#F80000" },
    { name: "PostgreSQL", level: 75, color: "#336791" },
    { name: "Android", level: 80, color: "#3DDC84" },
    { name: "DevOps", level: 75, color: "#2496ED" },
    { name: "Asterisk PBX", level: 70, color: "#F57C00" },
    { name: "OpenWrt", level: 65, color: "#00B5E2" },
  ],
  tools: [
    { name: "Linux", color: "#FCC624" },
    { name: "Docker", color: "#2496ED" },
    { name: "Git", color: "#F05032" },
    { name: "Nginx", color: "#009639" },
  ],
};

export const projects = [
  {
    title: "Call Center & CRM System",
    category: "Government & Enterprise",
    description:
      "Full-featured call center and CRM system for the Bangladesh Insurance Sector Development Project (BISDP) with Asterisk PBX integration and Single Sign-On via Keycloak.",
    roles: ["Web front-end development", "REST API development", "Deploy & configure Asterisk", "Database schema design", "Lead & guide junior devs", "Integrate Single Sign On"],
    tech: ["Java", "Spring Boot", "MySQL", "Vue JS", "Bootstrap CSS", "Asterisk PABX", "OAuth2", "Keycloak"],
  },
  {
    title: "MVTAX Collection & Reporting",
    category: "Government & Enterprise",
    description:
      "Motor vehicle TAX and fees collection integrated with ACS (Automated Challan System) of iBAS. Stakeholder: Bangladesh Road Transport Authority (BRTA).",
    roles: ["Web front-end development", "REST API development", "Create stored procedures", "Integrate with iBAS ACS", "Incremental deployment"],
    tech: ["Laravel", "Oracle PL/SQL", "Vue JS", "jQuery", "Bootstrap CSS"],
  },
  {
    title: "Unified Toll Collection Management",
    category: "Government & Enterprise",
    description:
      "Unifies collection of tolls at different bridges of the roads and highways of Bangladesh with automatic vehicle identification, weight scaling, axle counting, audit and monitoring system.",
    tech: ["PHP", "Zend Framework", "Oracle PL/SQL", "jQuery"],
  },
  {
    title: "SMSC - Short Message Service Center",
    category: "Telecommunications",
    description:
      "An SMS soft-switch using SMPP and HTTP protocols for SMS sending, receiving, routing and billing. Uses SMPP, Android application and GSM gateways for SMS sending.",
    tech: ["GO", "Kotlin", "PHP", "Slim Framework", "Svelte", "SMPP", "REST API"],
  },
  {
    title: "SoftPhone & Server Monitor",
    category: "Telecommunications",
    description:
      "An Android application used as a SoftPhone for SIP-based VoIP calls. Also monitors IP-PABX servers and gateway status and notifies the user if any gateway or peer is down.",
    tech: ["Kotlin", "C++", "Android", "Websocket", "SIP/SDP", "RTP"],
  },
  {
    title: "RTP Tunnel, Billing & Routing",
    category: "Telecommunications",
    description:
      "Bandwidth-optimized RTP tunnel with web-based billing and Asterisk Gateway Interface written in GO for routing. Increases number of concurrent RTP channels at low bandwidth.",
    tech: ["C", "GO", "PHP", "Slim Framework", "Svelte", "MySQL", "Asterisk", "OpenWrt"],
  },
  {
    title: "TopUp - Mobile Recharge System",
    category: "Telecommunications",
    description:
      "Top up service for recharging balance and packages to SIM cards. Uses MFS to recharge mobile accounts alongside mobile operator services. Utilizes recharge-commissions yielding more profit.",
    tech: ["GO", "Kotlin", "PHP", "Slim Framework", "Svelte", "Android", "GSM Gateways", "USSD"],
  },
  {
    title: "Potholes Detection",
    category: "Research",
    description:
      "Real-time pothole detection and localization using Convolutional Neural Network. Published in Springer (BIM 2021).",
    tech: ["Python", "CNN", "Computer Vision", "C++"],
    link: "https://github.com/chitholian/Potholes-Detection",
    paper: "https://doi.org/10.1007/978-981-16-6636-0_44",
  },
  {
    title: "Vehicle Tracking System",
    category: "Mobile & IoT",
    description:
      "Uses Android phone and its location service for live location tracking on Google Map.",
    tech: ["Kotlin", "Java", "Android", "GPS", "Firebase Database", "Firebase Auth", "Google Map"],
    link: "https://github.com/chitholian/CSE-618-Bus-Tracking",
  },
  {
    title: "Semester Form Fill-Up System",
    category: "Academic",
    description:
      "SPA web application providing online semester form fill-up service for university students.",
    tech: ["Python", "JavaScript", "Django", "Angular", "Material UI"],
    link: "https://github.com/chitholian/CSE-616-Semester-Form-Fillup-System",
  },
  {
    title: "Bangla Dictionary",
    category: "Academic",
    description:
      "Desktop application for translating words between Bengali and English.",
    tech: ["Python", "PyQt5", "SQLite"],
    link: "https://github.com/chitholian/Bangla-Dictionary",
  },
];

export const education = [
  {
    degree: "MS in Engineering",
    field: "Computer Science & Engineering",
    institution: "University of Chittagong",
    period: "Jan 2020 - Jun 2021",
    result: "CGPA 3.62 / 4.00",
  },
  {
    degree: "BSc in Engineering",
    field: "Computer Science & Engineering",
    institution: "University of Chittagong",
    period: "Jan 2016 - Dec 2019",
    result: "CGPA 3.73 / 4.00",
  },
  {
    degree: "HSC in Science",
    field: "",
    institution: "Sherpur Govt. College",
    period: "Jun 2012 - May 2015",
    result: "GPA 4.90 / 5.00",
  },
  {
    degree: "SSC in Science",
    field: "",
    institution: "Bazitkhila High School",
    result: "GPA 5.00 / 5.00",
  },
];

export const certificates = [
  {
    title: "Diploma in Computer Science",
    period: "Jul 2013 - Dec 2013",
    issuer: "Ministry of Social Welfare, Department of Social Services, Information Technology Foundation (ITF), Bangladesh",
  },
  {
    title: "Advanced Mobile Game Development",
    period: "2017",
    issuer: "Capacity Building for Mobile Game Development, ICT Division, Bangladesh",
  },
  {
    title: "Mobile Game Graphics Design",
    period: "2017",
    issuer: "Capacity Building for Mobile Game Development, ICT Division, Bangladesh",
  },
];

export const achievements = [
  {
    title: "IPv6 Deployment in Enterprise Networks",
    period: "Dec 2018",
    description: "Workshop arranged by the ICT Cell, University of Chittagong.",
  },
  {
    title: "Competitive Programming",
    period: "2016 - Present",
    description: "Solved 100+ different problems on various Online Judges like Codeforces, UVA Online Judge, HackerRank, Google CodeJam. Participated in many online programming contests on Codeforces.",
  },
  {
    title: "Techtronics - Programming Contest",
    period: "2016",
    description: "Participated in a Programming Contest with a team of 3 members. Achieved 10th position. Organized by the FSET Research Club, University of Science and Technology Chittagong (USTC).",
  },
];

export const publications = [
  {
    title: "Real-time Pothole Detection and Localization Using Convolutional Neural Network",
    venue: "International Conference on Big Data, IoT and Machine Learning (BIM 2021)",
    publisher: "Springer",
    date: "Mar 2020",
    paper: "https://doi.org/10.1007/978-981-16-6636-0_44",
    springerLink: "https://link.springer.com/chapter/10.1007/978-981-16-6636-0_44",
    code: "https://github.com/chitholian/Potholes-Detection",
  },
];

export const spokenLanguages = [
  { name: "Bengali", proficiency: "Native Proficiency" },
  { name: "English", proficiency: "Full Professional Proficiency" },
];

export const interests = [
  "Coding",
  "Problem Solving",
  "DevOps",
  "Research",
  "Cyber Security",
  "Computer Vision",
  "Artificial Intelligence",
  "Cricket",
  "Swimming",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
