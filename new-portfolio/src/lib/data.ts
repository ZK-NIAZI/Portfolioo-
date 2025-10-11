export const personalInfo = {
  name: "Zeeshan Khan",
  role: "Flutter Developer",
  tagline: "Crafting beautiful, performant mobile experiences with Flutter & Dart",
  email: "shaniniazi568@gmail.com",
  phone: "(+92) 333 7783611",
  location: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/in/zeeshan-niazi-app-developer/",
  github: "https://github.com/ZK-NIAZI/",
  resume: "https://drive.google.com/file/d/1GEZNwmnWXyT9RnpJJzBJ2pl-c-z2odeh/view?usp=sharing",
};

export const about = {
  intro: "Hi, I'm Zeeshan Khan, a passionate Flutter Developer crafting high-performance, cross-platform mobile applications.",
  description: "With a bachelor's degree in Computer Science and experience at leading tech companies, I specialize in creating user-friendly, scalable apps using modern technologies.",
  highlights: [
    {
      icon: "Smartphone",
      title: "Mobile Expertise",
      description: "Specialized in Flutter, Dart, and cross-platform development"
    },
    {
      icon: "Layers",
      title: "Clean Architecture",
      description: "Expert in Bloc/Cubit, SOLID principles, and scalable code"
    },
    {
      icon: "Server",
      title: "Backend Integration",
      description: "Proficient with Firebase, REST APIs, and cloud services"
    }
  ]
};

export const skills = {
  "Mobile Development": [
    { name: "Flutter", level: "Expert" },
    { name: "Dart", level: "Expert" },
    { name: "Kotlin", level: "Advanced" },
    { name: "Swift", level: "Advanced" },
    { name: "Responsive UI", level: "Expert" },
    { name: "Custom Widgets", level: "Advanced" }
  ],
  "Backend & APIs": [
    { name: "Firebase", level: "Expert" },
    { name: "REST API", level: "Expert" },
    { name: "GraphQL", level: "Advanced" },
    { name: "Google Maps", level: "Advanced" },
    { name: "Deep Linking", level: "Advanced" },
    { name: "Cloud Functions", level: "Intermediate" }
  ],
  "State Management": [
    { name: "Bloc/Cubit", level: "Expert" },
    { name: "Provider", level: "Advanced" }
  ],
  "Architecture & Tools": [
    { name: "Git/GitHub", level: "Expert" },
    { name: "Dependency Injection", level: "Advanced" },
    { name: "Unit Testing", level: "Advanced" },
    { name: "Widget Testing", level: "Intermediate" },
    { name: "Animations", level: "Advanced" },
    { name: "Internationalization", level: "Intermediate" }
  ]
};

export const services = [
  {
    icon: "Smartphone",
    title: "Android App Development",
    description: "Native and cross-platform Android applications built with modern technologies like Flutter, Kotlin, and Java.",
    featured: true
  },
  {
    icon: "Apple",
    title: "iOS App Development",
    description: "Beautiful iOS applications using Flutter for cross-platform compatibility or native iOS development.",
    featured: true
  },
  {
    icon: "Monitor",
    title: "Cross-Platform Development",
    description: "Single codebase applications using Flutter that work seamlessly on both Android and iOS platforms.",
    featured: false
  },
  {
    icon: "Settings",
    title: "App Maintenance & Support",
    description: "Ongoing maintenance, updates, and technical support to keep your mobile applications running smoothly.",
    featured: false
  },
  {
    icon: "Database",
    title: "Backend Integration",
    description: "Seamless integration with APIs, databases, and cloud services including Firebase and REST APIs.",
    featured: false
  },
  {
    icon: "Palette",
    title: "UI/UX Design Implementation",
    description: "Transform your designs into pixel-perfect, responsive mobile interfaces with smooth animations.",
    featured: false
  }
];

export const projects = [
  {
    title: "Qaider-APP SFD",
    description: "Centralized customer review management system pulling reviews from Google Business Profile into Firebase, with AI-driven replies, deep-link invites, tiered subscriptions, and sentiment analytics.",
    date: "03/2025 – 04/2025",
    tags: ["Review Management", "AI", "Firebase", "Cross-Platform"],
    image: "/images/projects/qaider.jpg"
  },
  {
    title: "Loyzee",
    description: "Take your loyalty program to the next level with rewards, user-friendly interface, simple tracking, loyalty points, and enhanced user engagement.",
    date: "2024 – 2025",
    tags: ["Rewards", "Loyalty", "User Engagement"],
    image: "/images/projects/loyzee.jpg"
  },
  {
    title: "MAP Pakistan",
    description: "Role-based application for Students, Individuals, and Corporates with tailored packages, interactive event views, and seamless payment integration.",
    date: "12/2024 – 01/2025",
    tags: ["Events", "Payments", "Role-Based"],
    link: "https://play.google.com/store/apps/details?id=com.map.event",
    image: "/images/projects/map-pakistan.jpg"
  },
  {
    title: "DetailX CAS",
    description: "User-friendly car detailing and booking app with Google Maps integration for service discovery, reviews, and appointment booking.",
    date: "08/2024 – 09/2024",
    tags: ["Google Maps", "Booking", "Reviews"]
  },
  {
    title: "Quickly Transfer CAS",
    description: "Car booking application for organizations with time-specific bookings and real-time driver-user tracking on maps.",
    date: "08/2024 – 03/2025",
    tags: ["Real-time Tracking", "Maps", "Booking"]
  },
  {
    title: "Molly App CAS",
    description: "Fitness companion app allowing users to register, select personalized fitness plans, and track their progress.",
    date: "10/2024 – 11/2024",
    tags: ["Fitness", "Progress Tracking", "Personalization"]
  }
];

export const experience = [
  {
    company: "SPEEDFORCE DIGITAL",
    role: "Associate Flutter Developer",
    date: "March 2025 – Present",
    location: "Lahore, Pakistan",
    current: true,
    achievements: [
      "Built high-quality cross-platform mobile applications using Flutter and Dart",
      "Focused on performance optimization, clean architecture, and user-friendly design",
      "Collaborated closely with UI/UX designers to create responsive interfaces",
      "Integrated RESTful APIs, Firebase services, and third-party SDKs",
      "Managed end-to-end app lifecycle including Play Store and App Store deployments"
    ]
  },
  {
    company: "Cyber Advance Solutions",
    role: "Flutter Developer",
    date: "June 2024 – March 2025",
    location: "Lahore, Pakistan",
    current: false,
    achievements: [
      "Developed high-performance mobile applications using Flutter and Dart",
      "Created custom widgets and utilized ListView and GridView for enhanced UI/UX",
      "Applied Bloc and Cubit for effective state management",
      "Integrated Firebase Authentication for secure user management",
      "Implemented REST API integration to fetch and display remote data",
      "Used Hive for local data storage, improving offline functionality"
    ]
  }
];

export const education = {
  university: "University Of Sargodha",
  degree: "Bachelor of Science in Computer Science",
  date: "January 2021 – January 2025",
  location: "Bhakkar, Pakistan",
  subjects: ["Software Engineering", "Data Structures", "Algorithms", "Mobile Development", "Database Systems", "Web Development"]
};
