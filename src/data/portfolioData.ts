export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  image: string;
  github: string;
  live: string;
  category: "fullstack" | "frontend";
  featured: boolean;
  color: string;
  year: string;
};

export type Skill = {
  name: string;
  level: number; // 0 - 100
  mastery: string; // e.g. "Advanced", "Expert"
  iconName: string;
  category: "Frontend" | "Backend" | "Database" | "Tools & Cloud" | "AI & Others";
  description: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  type: "Internship" | "Teaching" | "Employment";
  description: string;
  achievements: string[];
  techStack: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  location: string;
  highlight: string;
  description: string;
};

export type Service = {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  popular?: boolean;
};

export const PROFILE = {
  name: "Solomon Ashagre",
  role: "Full Stack Developer & Educator",
  tagline: "Building exceptional, high-performance digital products from Addis Ababa.",
  bio: "I am a passionate Full Stack Developer with over 3 years of hands-on experience building robust web applications, modern interactive interfaces, and scalable backend architectures. As the founder and educator at STCA (Sol Tutoring and Coding Academy), I empower the next generation of tech leaders.",
  avatar: "https://solomon-ashagre.netlify.app/assets/me-DA6vgEH0.jpg",
  email: "solash5156@gmail.com",
  phone: "+251 901436358",
  location: "Addis Ababa, Ethiopia",
  availableForWork: true,
  yearsOfExperience: "3+",
  totalProjects: "10+",
  satisfiedClients: "100%",
  certificationsCount: "15+",
  socials: {
    github: "https://github.com/Sol-Ethio-Coder",
    linkedin: "https://linkedin.com/in/Sol-Ethio-Coder",
    telegram: "https://t.me/Sol_Ethio_Coder",
    whatsapp: "https://wa.me/251901436358",
  },
};

export const ROLES_TICKER = [
  "Full Stack Web Developer",
  "STCA Founder & Educator",
  "MERN Stack Specialist",
  "React & Vite Architect",
  "AI & Machine Learning Enthusiast",
  "Computing Science Teacher",
  "Interactive UI Designer",
  "Football Enthusiast",
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React 19 / 18", level: 95, mastery: "Expert", iconName: "Atom", category: "Frontend", description: "State management, hooks, suspense, SSR concepts, performance tuning." },
  { name: "TypeScript", level: 90, mastery: "Advanced", iconName: "Code2", category: "Frontend", description: "Strict typing, generics, complex interfaces, absolute type safety." },
  { name: "JavaScript (ES6+)", level: 96, mastery: "Expert", iconName: "FileCode", category: "Frontend", description: "Closures, async/await, DOM manipulation, micro-optimizations." },
  { name: "Tailwind CSS", level: 95, mastery: "Expert", iconName: "Palette", category: "Frontend", description: "Utility-first CSS, custom configurations, responsive dark-mode styling." },
  { name: "HTML5 & CSS3", level: 98, mastery: "Expert", iconName: "Layout", category: "Frontend", description: "Semantic markup, CSS animations, flexbox/grid, accessibility (a11y)." },
  { name: "Framer Motion", level: 85, mastery: "Advanced", iconName: "Sparkles", category: "Frontend", description: "Fluid animations, exit gestures, layout transitions, scroll triggers." },
  
  // Backend
  { name: "Node.js", level: 92, mastery: "Advanced", iconName: "Server", category: "Backend", description: "Event loop, streams, file systems, high-concurrency microservices." },
  { name: "Express.js", level: 94, mastery: "Expert", iconName: "Cpu", category: "Backend", description: "RESTful API creation, middleware development, robust routing." },
  { name: "REST APIs", level: 95, mastery: "Expert", iconName: "Network", category: "Backend", description: "API design, status codes, JWT authentication, rate limiting." },
  { name: "Python", level: 80, mastery: "Proficient", iconName: "Terminal", category: "Backend", description: "Scripting, automation, data processing, intro AI/ML pipelines." },
  
  // Database
  { name: "MongoDB", level: 90, mastery: "Advanced", iconName: "Database", category: "Database", description: "Document modeling, Mongoose ODM, aggregation pipelines, indexing." },
  { name: "MySQL", level: 82, mastery: "Proficient", iconName: "Table", category: "Database", description: "Relational queries, joins, foreign keys, normalization." },
  { name: "Firebase", level: 85, mastery: "Advanced", iconName: "Flame", category: "Database", description: "Firestore, real-time sync, Google Auth, hosting pipelines." },
  
  // Tools & Cloud
  { name: "Git & GitHub", level: 94, mastery: "Expert", iconName: "GitBranch", category: "Tools & Cloud", description: "Branching workflows, PR reviews, merge conflict resolutions, CI/CD actions." },
  { name: "Vite", level: 95, mastery: "Expert", iconName: "Zap", category: "Tools & Cloud", description: "Blazing fast dev server, custom bundling configs, rollup optimization." },
  { name: "Netlify & Render", level: 92, mastery: "Advanced", iconName: "Cloud", category: "Tools & Cloud", description: "Full stack web hosting, environment variables, webhooks, automatic ssl." },
  { name: "VS Code & Environments", level: 96, mastery: "Expert", iconName: "Wrench", category: "Tools & Cloud", description: "Power-user configurations, snippet creation, debugging tools." },
  { name: "Figma UI/UX", level: 80, mastery: "Proficient", iconName: "Figma", category: "Tools & Cloud", description: "Wireframing, interactive prototyping, developer handoff execution." },
  
  // AI & Others
  { name: "AI Prompt Engineering", level: 92, mastery: "Advanced", iconName: "Bot", category: "AI & Others", description: "LLM optimization, custom assistant flows, AI-driven development." },
  { name: "WordPress CMS", level: 88, mastery: "Advanced", iconName: "PanelsTopLeft", category: "AI & Others", description: "Custom theme creation, elementor setup, plugin integration." },
  { name: "STEM Tutoring", level: 98, mastery: "Expert", iconName: "GraduationCap", category: "AI & Others", description: "Curriculum design, breaking down complex programming concepts to students." },
];

export const PROJECTS: Project[] = [
  {
    id: "port-main",
    title: "Solomon Ashagre Portfolio",
    subtitle: "Ultimate Interactive Personal Developer Showcase",
    description: "My hallmark personal portfolio website showcasing my technical capabilities, immersive projects, services, and career journey.",
    longDescription: "Engineered from the ground up to feature breathtaking Framer Motion page transitions, real-time category filtering, dark glassmorphism styling, and robust backend contacts integration. It reflects my dedication to top-tier performance, pixel-perfect responsive execution, and immersive user interaction.",
    technologies: ["React 19", "Node.js", "MongoDB", "Express", "Vite", "Tailwind CSS", "Framer Motion"],
    features: [
      "Custom responsive dark aesthetic with multi-layered glassmorphic design",
      "Dynamic project filtering by technology and category",
      "Live MongoDB contact form integration with real-time email triggers",
      "Optimized print styles for instant PDF CV export",
    ],
    image: "https://solomon-ashagre.netlify.app/assets/main_port-CvWGsFCq.png",
    github: "https://github.com/Sol-Ethio-Coder/portfolio-website",
    live: "https://solomon-ashagre-portfolio.netlify.app/",
    category: "fullstack",
    featured: true,
    color: "from-blue-500 to-indigo-600",
    year: "2026",
  },
  {
    id: "sol-crm",
    title: "Sol CRM - Enterprise Client Manager",
    subtitle: "Complete Client Relationship & Management Dashboard",
    description: "A feature-rich customer relationship management tool built with strict JWT secure authentication and real-time client analytics.",
    longDescription: "Developed as a standout deliverable during the CodeAlpha Tech Internship, Sol CRM equips businesses with powerful tools to onboard clients, track sales pipelines, filter revenue tiers, and maintain meticulous activity logs. Built with a highly responsive administrative dashboard and secure REST endpoints.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT Auth", "Recharts", "Tailwind CSS"],
    features: [
      "Role-based secure authentication utilizing encrypted JSON Web Tokens",
      "Real-time client analytics and customizable sales pipeline charts",
      "Advanced searching, sorting, and pagination of client records",
      "Export capabilities for offline executive reporting",
    ],
    image: "https://solomon-ashagre.netlify.app/assets/sol-crm-C5cpV-LZ.png",
    github: "https://github.com/Sol-Ethio-Coder/FUTURE_FS_02",
    live: "https://sol-crm.netlify.app/",
    category: "fullstack",
    featured: true,
    color: "from-rose-500 to-red-600",
    year: "2026",
  },
  {
    id: "sol-tutoring",
    title: "Sol Tutoring & STEM Academy Platform",
    subtitle: "Comprehensive Online Learning & Course Management",
    description: "State-of-the-art virtual education hub providing high-quality courses in Math, Science, Coding, Exam Prep, and AI/ML.",
    longDescription: "Designed specifically for students from Grades 4 to 12, this platform enables seamless student enrollment, interactive learning modules, interactive code snippets, and integrated Stripe payment gateways for premium tutoring packages. It powers the digital arm of the STCA network.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Vite", "Tailwind CSS"],
    features: [
      "Multi-grade structured interactive catalog with live search",
      "Student study dashboard tracking course progression and quizzes",
      "Secure payment processing via Stripe integration",
      "Live tutor session booking calendar and resource repository",
    ],
    image: "https://solomon-ashagre.netlify.app/assets/sol-tutoring-BX8FRizl.png",
    github: "https://github.com/Sol-Ethio-Coder/FUTURE_FS_03",
    live: "https://sol-tutoring-academy.netlify.app/",
    category: "fullstack",
    featured: true,
    color: "from-teal-500 to-emerald-600",
    year: "2026",
  },
  {
    id: "age-calc",
    title: "Precision Age Calculator Web App",
    subtitle: "Sleek Exact Time Span Calculation Utility",
    description: "An ultra-polished frontend utility that computes precise lifespans down to exact years, months, weeks, and days instantly.",
    longDescription: "Created to showcase impeccable frontend validation, state management, and fluid animations. The application instantly checks leap years, historical calendar shifts, and birthday countdowns while offering an incredibly clean, accessible, and delightful user interface.",
    technologies: ["React", "JavaScript", "CSS3", "Tailwind CSS", "Netlify"],
    features: [
      "Instant real-time calculation with zero latency",
      "Upcoming birthday countdown timer with celebratory alerts",
      "Robust input validation preventing invalid historical dates",
      "Light and dark mode custom theme customization",
    ],
    image: "https://solomon-ashagre.netlify.app/assets/age-calculator-ChF5ZuVE.png",
    github: "https://github.com/Sol-Ethio-Coder/CodeAlpha_AgeCalculator",
    live: "https://sol-age-calculator.netlify.app/",
    category: "frontend",
    featured: true,
    color: "from-green-400 to-emerald-600",
    year: "2026",
  },
  {
    id: "tasko",
    title: "Tasko - Advanced Task Management Hub",
    subtitle: "Modern Kanban & Daily Task Organizer",
    description: "A highly productive daily task organization hub equipped with customized priority flags, tags, and LocalStorage persistence.",
    longDescription: "Tasko helps professionals and students maintain immaculate daily workflows. Users can create customizable task bundles, set due dates with status indicators, filter by urgent priority levels, and experience instant state synchronization across browser reloads.",
    technologies: ["React", "JavaScript", "CSS3", "LocalStorage API", "Netlify"],
    features: [
      "Intuitive drag-and-drop or one-click task stage progression",
      "Smart urgency sorting and priority badges (Low, Medium, Urgent)",
      "Productivity statistics widget showing completed task velocity",
      "Completely resilient data persistence via encrypted LocalStorage",
    ],
    image: "https://solomon-ashagre.netlify.app/assets/tasko-r7ZJFfH5.png",
    github: "https://github.com/Sol-Ethio-Coder/CodeAlpha_To-Do_App",
    live: "https://sol-tasko.netlify.app/",
    category: "frontend",
    featured: true,
    color: "from-amber-500 to-orange-600",
    year: "2026",
  },
  {
    id: "tea-cup",
    title: "3D CSS Animated Tea Cup Showcase",
    subtitle: "Creative Pure CSS Animation & Visual Masterpiece",
    description: "A visually breathtaking web showcase illustrating pure CSS 3D physics, vapor particle animations, and exquisite lighting.",
    longDescription: "A pure passion project demonstrating absolute mastery over CSS3 keyframe animations, box-shadow depth layers, and custom HTML5 canvas effects. The elegant steaming tea cup reacts smoothly to viewport adjustments and provides an immersive visual treat.",
    technologies: ["HTML5", "CSS3 Animations", "Vanilla JavaScript", "Netlify"],
    features: [
      "Realistic vapor animations utilizing multi-staged keyframes",
      "Interactive lighting highlights and responsive fluid container",
      "High-performance rendering running at 60 FPS without external webgl libraries",
    ],
    image: "https://solomon-ashagre.netlify.app/assets/tea_cup-hkcAMJvi.png",
    github: "https://github.com/Sol-Ethio-Coder/tea-cup-project",
    live: "https://sol-tea-cup-project.netlify.app/",
    category: "frontend",
    featured: false,
    color: "from-cyan-500 to-blue-600",
    year: "2025",
  },
  {
    id: "stca-portal",
    title: "STCA Education Portal (Legacy Hub)",
    subtitle: "Official Platform for Sol Tutoring and Coding Academy",
    description: "The foundational educational platform providing high school coding curriculums and private STEM tutoring resources.",
    longDescription: "Built as the initial web ecosystem for STCA, this project successfully connected hundreds of Ethiopian students from Grades 5 through 12 with top-tier technical guides, problem-solving challenges, and personalized tutoring enrollment schedules.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Grid", "Netlify"],
    features: [
      "Clear, accessible course catalog breakdown by academic level",
      "Integrated inquiry forms connecting parents directly with Solomon",
      "Optimized for high speed and mobile responsiveness on varied network bandwidths",
    ],
    image: "https://solomon-ashagre.netlify.app/assets/stca_old-Bb_ODZaE.png",
    github: "https://github.com/Sol-Ethio-Coder/stca",
    live: "https://stca.netlify.app/",
    category: "frontend",
    featured: false,
    color: "from-purple-500 to-indigo-600",
    year: "2025",
  },
  {
    id: "stca-academy-react",
    title: "STCA Academy Next-Gen Portal",
    subtitle: "Modern React-Powered EdTech Web Application",
    description: "A completely refactored Next-Generation EdTech portal boasting interactive live courses, slick UI, and modern React tools.",
    longDescription: "Bringing STCA into the modern React ecosystem, this application introduced dynamic course filtering, immersive animated video previews, automated lecture syllabuses, and robust student onboarding flows.",
    technologies: ["React", "CSS3 Modules", "Responsive Design", "Vite", "Netlify"],
    features: [
      "Dynamic interactive syllabus previews with expandable lesson modules",
      "Lightning-fast client-side routing with React Router",
      "Interactive quiz sample blocks with immediate score feedback",
    ],
    image: "https://solomon-ashagre.netlify.app/assets/stca-CSnH8ZXZ.png",
    github: "https://github.com/Sol-Ethio-Coder/stca-academy",
    live: "https://stca-academy.netlify.app/",
    category: "fullstack",
    featured: false,
    color: "from-violet-500 to-purple-700",
    year: "2026",
  },
  {
    id: "sol-blog",
    title: "Sol Tech Insights & Developer Blog",
    subtitle: "Technical Writing & Code Snippet Repository Hub",
    description: "An elegant technical blogging platform dedicated to sharing deep dives on modern web frameworks, MERN stacks, and AI updates.",
    longDescription: "Created to foster community learning and share real-world engineering solutions. The platform supports clean typography, syntax-highlighted code display, categorized tags, and a newsletter subscription hook.",
    technologies: ["HTML5", "CSS3", "JavaScript ES6", "Flexbox", "Netlify"],
    features: [
      "Clean distraction-free reader mode with optimal line height and typography",
      "Categorized search by JavaScript, React, Backend, and Career advice",
      "Responsive author card and social sharing hooks",
    ],
    image: "https://solomon-ashagre.netlify.app/assets/sol-blog-dnhod3gZ.png",
    github: "https://github.com/Sol-Ethio-Coder/Personal_Blog",
    live: "https://sol-blog-website.netlify.app/",
    category: "frontend",
    featured: false,
    color: "from-fuchsia-500 to-pink-600",
    year: "2025",
  },
  {
    id: "future-interns",
    title: "Future Interns Enterprise Showcase",
    subtitle: "Full Stack Internship Graduation Deliverable",
    description: "A high-fidelity full-stack showcase developed during the Future Interns program with automated email webhooks.",
    longDescription: "Demonstrating end-to-end full stack architecture, this application marries a vibrant frontend presentation with an Express backend connected to MongoDB. Integrates Nodemailer for automated confirmation dispatches upon user inquiry.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Nodemailer", "Vite"],
    features: [
      "Complete full-stack MERN orchestration deployed across Netlify and Render",
      "Database schema built with strict Mongoose validation rules",
      "Automated transactional HTML email sending upon form completion",
    ],
    image: "https://solomon-ashagre.netlify.app/assets/future-intern-ClD7ik1a.png",
    github: "https://github.com/Sol-Ethio-Coder/FUTURE_FS_01",
    live: "https://sol-ethio-coder.netlify.app/",
    category: "fullstack",
    featured: false,
    color: "from-rose-400 to-red-600",
    year: "2026",
  },
];

export const EXPERIENCE_TIMELINE: Experience[] = [
  {
    title: "Full Stack Web Developer Intern",
    company: "Future Interns Enterprise",
    period: "March 2026 - April 2026",
    location: "Remote",
    type: "Internship",
    description: "Successfully completed a rigorously structured, intensive full-stack web development program, engineering highly scalable professional web applications.",
    achievements: [
      "Architected a complete end-to-end full-stack MERN portfolio solution",
      "Integrated live MongoDB clusters with optimized database indexing",
      "Configured backend REST APIs deployed seamlessly onto Render",
      "Implemented secure email delivery automation utilizing Nodemailer",
      "Received official high-distinction certification for outstanding project delivery",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express", "Vite", "Nodemailer"],
  },
  {
    title: "Computing Science & ICT Educator",
    company: "Trillium International School",
    period: "2025 - Present",
    location: "Addis Ababa, Ethiopia",
    type: "Teaching",
    description: "Spearheading the Computer Science and ICT academic departments, inspiring students through advanced practical programming methodologies.",
    achievements: [
      "Developed an engaging, modern ICT curriculum tailored for international students",
      "Integrated project-based learning with real-world JavaScript and HTML/CSS challenges",
      "Organized school-wide coding hackathons and technical problem-solving forums",
      "Greatly elevated overall student digital literacy and foundational programming scores",
    ],
    techStack: ["Computer Science", "JavaScript", "HTML/CSS", "Curriculum Design", "Python"],
  },
  {
    title: "Remote Web Developer Intern",
    company: "Codveda Technologies",
    period: "August 2025 - September 2025",
    location: "Remote",
    type: "Internship",
    description: "Engaged in collaborative remote software development workflows, contributing to enterprise frontend components and APIs.",
    achievements: [
      "Authored high-reusability React UI components for enterprise SaaS applications",
      "Participated in daily agile scrums and sprint planning ceremonies remotely",
      "Optimized legacy state management code, reducing page re-renders by 35%",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Git Workflows", "REST APIs"],
  },
  {
    title: "WordPress & Frontend Specialist Intern",
    company: "KNS Trading PLC",
    period: "2022 - 2023",
    location: "Addis Ababa, Ethiopia",
    type: "Internship",
    description: "Managed the digital presence and commercial landing pages for a prominent Ethiopian trading conglomerate.",
    achievements: [
      "Designed, launched, and continuously maintained corporate portals using WordPress and Elementor",
      "Engineered custom PHP snippets and configured SEO plugins for higher organic indexing",
      "Optimized multimedia assets, achieving a 40% improvement in Google PageSpeed scores",
    ],
    techStack: ["WordPress", "PHP", "CSS3", "SEO Optimization", "Elementor"],
  },
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Addis Ababa University",
    period: "2020 - 2023",
    location: "Addis Ababa, Ethiopia",
    highlight: "Graduated from the premier, top-ranked institution in Ethiopia.",
    description: "Immersed in advanced data structures, complex algorithms, object-oriented software engineering, database systems architectures, artificial intelligence, and operating systems.",
  },
  {
    degree: "Preparatory School Science Diploma",
    school: "Fasiledes Preparatory School",
    period: "2018 - 2019",
    location: "Gondar, Ethiopia",
    highlight: "Distinction in Advanced Mathematics and Natural Sciences.",
    description: "Completed intensive university preparatory curriculum with top percentile scores in physics, advanced mathematics, and analytical chemistry.",
  },
  {
    degree: "High School Leaving Certificate",
    school: "Fasiledes High School",
    period: "2016 - 2017",
    location: "Gondar, Ethiopia",
    highlight: "Outstanding Academic Merit Award winner.",
    description: "Formulated rigorous study habits and founded early student computing clubs, setting the stage for a lifelong career in computer technology.",
  },
];

export const CERTIFICATIONS_LIST = [
  { title: "Full Stack Web Development Certification", issuer: "Future Interns Program", year: "2026", badge: "Gold Distinction" },
  { title: "Advanced Web Developer Internship Certificate", issuer: "Codveda Technologies", year: "2025", badge: "Verified Intern" },
  { title: "MERN Stack Application Engineering", issuer: "CodeAlpha Tech Internship", year: "2026", badge: "Featured Deliverable" },
  { title: "AI & Machine Learning Foundations", issuer: "Digital Africa Tech Initiative", year: "2025", badge: "Mastery" },
  { title: "Responsive Interface Architecture", issuer: "freeCodeCamp Advanced", year: "2024", badge: "Certified" },
  { title: "Professional JavaScript Algorithms", issuer: "Addis Tech Mastery", year: "2024", badge: "Advanced" },
  { title: "Digital Literacy & Pedagogical Excellence", issuer: "International Educators Forum", year: "2025", badge: "Expert" },
  { title: "Enterprise Work Readiness Program", issuer: "Ethio-Tech Leaders Hub", year: "2023", badge: "Certified" },
  { title: "Advanced WordPress & E-Commerce Execution", issuer: "WebMasters Fellowship", year: "2023", badge: "Professional" },
];

export const SERVICES_LIST: Service[] = [
  {
    id: "srv-1",
    title: "Full Stack Web Application Development",
    iconName: "Layers",
    shortDesc: "End-to-end custom web products built with React, Node.js, Express, and MongoDB.",
    description: "I build enterprise-grade, blazing-fast web applications tailored to your precise business requirements. From scalable REST APIs and secure user authentication (JWT/OAuth) to lightning-fast React frontends, I ensure robust architecture that handles high traffic flawlessly.",
    deliverables: [
      "Custom UI/UX Frontend built with React 19 / Tailwind",
      "Highly secure Node.js & Express REST API Backend",
      "Optimized MongoDB Database schema and indexing",
      "Fully integrated payment gateways (Stripe/PayPal)",
      "Ready-to-deploy cloud architecture (Netlify/Render/AWS)",
    ],
    popular: true,
  },
  {
    id: "srv-2",
    title: "EdTech & Learning Management Platforms",
    iconName: "GraduationCap",
    shortDesc: "Premium virtual academies, course workflows, student dashboards, and live tutoring hubs.",
    description: "Leveraging my unmatched experience building platforms like Sol Tutoring Academy and STCA, I engineer beautiful online schools. Allow students to explore courses, take interactive quizzes, book private sessions, and track their STEM learning seamlessly.",
    deliverables: [
      "Structured multi-grade course catalogs & video players",
      "Interactive student quiz blocks & automatic grading",
      "Integrated tutor scheduling calendars & booking flows",
      "Secure automated subscription and paywall setup",
      "Parent and teacher progress monitoring reports",
    ],
    popular: false,
  },
  {
    id: "srv-3",
    title: "High-Conversion Corporate & Landing Sites",
    iconName: "Globe",
    shortDesc: "Breathtaking custom interactive portfolio, SaaS landing, and corporate websites.",
    description: "Your website is your ultimate digital handshake. I create visually spectacular, ultra-modern web experiences with Framer Motion animations, dark/light themes, pristine typography, and flawless SEO optimization to convert casual visitors into loyal high-value clients.",
    deliverables: [
      "Bespoke premium design with captivating animations",
      "Blazing fast Google PageSpeed (95+ scores guaranteed)",
      "Flawless responsive behavior on all mobile & desktop screens",
      "Direct integration with WhatsApp, Telegram, and CRM tools",
      "Advanced technical SEO metadata and OpenGraph setup",
    ],
    popular: false,
  },
  {
    id: "srv-4",
    title: "Technical Consulting & STEM Coaching",
    iconName: "Cpu",
    shortDesc: "Expert guidance on codebase modernization, cloud deployment, and private programming tutoring.",
    description: "Whether your tech startup needs guidance scaling an existing MERN application, or your development team requires structured mentoring, I offer practical, high-impact consulting. As an experienced computing science teacher, I also offer private 1-on-1 coding masterclasses.",
    deliverables: [
      "Comprehensive codebase audits & performance tuning",
      "CI/CD pipeline configuration and automated deployment setup",
      "Custom AI prompt engineering and LLM assistant integration",
      "1-on-1 personalized software engineering coaching",
      "Interactive technical handoff and developer documentation",
    ],
    popular: false,
  },
];
