import iconSnake from '../assets/images/iconSnake.png';
import webFloodImg from '../assets/images/project_webflood_1790860476320.jpg';
import tourismImg from '../assets/images/project_tourism_1790860487894.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web App' | 'Landing Page' | 'UI';
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  percentage: number;
  category: 'Core' | 'Frameworks' | 'Tools';
  icon: string;
  level: string;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  detailedFeatures: string[];
  deliverables: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  achievements?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const portfolioData = {
  personal: {
    name: 'Tola Toch',
    shortName: 'Tola',
    role: 'Frontend Developer',
    secondaryRole: 'UI Engineer',
    university: 'University of Phayao, Thailand',
    yearOfStudy: 'Year 3 Student',
    location: 'Phayao & Bangkok, Thailand',
    status: 'Seeking Internship & Junior Roles (2025 - 2026)',
    email: 'tolatuch081@gmail.com',
    github: 'https://github.com/tolatoch',
    linkedin: 'https://linkedin.com/in/tolatoch',
    twitter: 'https://twitter.com/tolatoch',
    resumeUrl: '#',
    avatarImage: iconSnake,
    bioShort: 'Frontend developer and Year 3 student at University of Phayao, Thailand. Dedicated to building accessible, pixel-perfect web apps and delightful user interfaces with modern React and Tailwind CSS.',
    bioLong: `I am currently in my 3rd year studying Computer Science / Information Technology at the University of Phayao in northern Thailand. My passion lies at the intersection of aesthetic design and robust frontend engineering. 

Over the past 3 years, I have honed my expertise in modern JavaScript/TypeScript, React component architecture, fluid CSS design systems, and web performance optimization. Whether constructing real-time monitoring dashboards like Web Flood or implementing responsive landing pages, I focus on clean code, semantic accessibility, and snappy user experiences.`,
    stats: [
      { label: 'Projects Built', value: '15+' },
      { label: 'Years Coding', value: '3+' },
      { label: 'Tech Stack', value: '10+' },
      { label: 'Current GPA', value: '3.8/4.0' },
    ],
  },

  hero: {
    tag: 'Hello There!',
    titlePart1: "I'm ",
    name: 'Tola Toch',
    titlePart2: ', Frontend Developer based in Thailand',
    subtitle: 'Crafting responsive, accessible web applications and high-performance digital products. Ready to bring fresh energy and solid code to your team.',
    primaryCta: 'View My Portfolio',
    secondaryCta: 'Hire Me',
  },

  marqueeItems: [
    'Responsive Websites',
    'Web Apps',
    'UI Components',
    'Landing Pages',
    'Clean Architecture',
    'Accessibility First',
    'Performance Tuned',
    'Design Systems',
  ],

  services: [
    {
      id: 'frontend-dev',
      iconName: 'Code2',
      title: 'Frontend Development',
      description: 'Building modern, fast, and scalable client-side applications using React, TypeScript, and state management solutions tailored for real-world reliability.',
      detailedFeatures: [
        'Single Page Applications (SPAs) with React & TypeScript',
        'State management & asynchronous RESTful / WebSocket integrations',
        'Lighthouse 90+ speed optimization, bundle splitting, and SEO compliance',
        'Rigorous cross-browser and cross-device testing'
      ],
      deliverables: ['Production React Codebase', 'API Integration Layer', 'Unit & End-to-End Test Plan', 'Clean Deployment Pipeline']
    },
    {
      id: 'responsive-design',
      iconName: 'Layout',
      title: 'Responsive Web Design',
      description: 'Engineering fluid, mobile-first layouts that look stunning and function intuitively across mobile phones, tablets, laptops, and ultra-wide desktop monitors.',
      detailedFeatures: [
        'Mobile-first architecture using modern CSS & Tailwind utility primitives',
        'Adaptive touch interactions and ergonomic tap target sizing',
        'Fluid typography and proportional clamp scales',
        'Accessible color contrast adhering strictly to WCAG AA guidelines'
      ],
      deliverables: ['Responsive Grid Layouts', 'Mobile Navigation Drawers', 'High-DPI Retina Media Assets', 'Device Compatibility Report']
    },
    {
      id: 'ui-implementation',
      iconName: 'Layers',
      title: 'UI Implementation',
      description: 'Translating Figma designs and UI design tokens into modular, maintainable component systems with buttery smooth transitions and zero layout shifts.',
      detailedFeatures: [
        'Pixel-accurate translation from Figma / Adobe XD mockups',
        'Custom design tokens (typography, color ramps, shadows, spacing)',
        'Subtle micro-interactions using Motion and CSS transitions',
        'Reusable atomic component libraries with clean documentation'
      ],
      deliverables: ['Figma-to-React Components', 'Interactive Storybook/Sandbox', 'Design Token Config', 'Asset Optimization Package']
    }
  ] as ServiceItem[],

  skills: [
    { name: 'HTML & CSS', percentage: 95, category: 'Core', icon: 'Code', level: 'Advanced' },
    { name: 'JavaScript', percentage: 90, category: 'Core', icon: 'FileCode2', level: 'Advanced' },
    { name: 'React', percentage: 88, category: 'Frameworks', icon: 'Atom', level: 'Proficient' },
    { name: 'Tailwind CSS', percentage: 92, category: 'Core', icon: 'Palette', level: 'Advanced' },
    { name: 'TypeScript', percentage: 82, category: 'Core', icon: 'ShieldCheck', level: 'Proficient' },
    { name: 'Git & GitHub', percentage: 86, category: 'Tools', icon: 'GitBranch', level: 'Proficient' },
    { name: 'Figma', percentage: 80, category: 'Tools', icon: 'Figma', level: 'Intermediate' },
    { name: 'Vite & Next.js', percentage: 84, category: 'Frameworks', icon: 'Zap', level: 'Proficient' },
  ] as SkillItem[],

  projects: [
    {
      id: 'web-flood',
      title: 'Web Flood — Real-Time Disaster & Water Monitoring System',
      category: 'Web App',
      description: 'Interactive disaster-resilience web dashboard tracking river water levels, rainfall telemetry, and flood alert stages across northern Thailand basins.',
      longDescription: 'Developed for flood-prone regions in northern Thailand, Web Flood aggregates sensor feeds, water level telemetry, and meteorological rainfall radar into an intuitive, accessible dashboard. It features live geospatial map markers, threshold-based visual alerts, and historical trend charts.',
      image: webFloodImg,
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Leaflet GIS', 'Chart.js', 'REST API'],
      liveUrl: 'https://webflood-demo.vercel.app',
      githubUrl: 'https://github.com/tolatoch/web-flood-monitoring',
      highlights: [
        'Interactive geospatial map with color-coded flood warning stations',
        'Live telemetry charts visualizing hourly water level flux and precipitation',
        'Mobile-friendly alert status banner for quick civil protection updates',
        '95+ Lighthouse accessibility and performance score'
      ]
    },
    {
      id: 'kwan-phayao',
      title: 'Kwan Phayao Eco-Tourism & Cultural Platform',
      category: 'Landing Page',
      description: 'High-performance responsive travel portal spotlighting eco-tourism trails, community homestays, and lakeside cultural experiences in Phayao.',
      longDescription: 'A modern, dynamic landing platform created to promote sustainable local tourism around Kwan Phayao Lake. Features interactive route planners, sunset viewpoint guides, booking inquiry forms, and bilingual content presentation.',
      image: tourismImg,
      tags: ['React', 'Tailwind CSS', 'Motion', 'Vite', 'Bilingual Support'],
      liveUrl: 'https://kwanphayao-travel.vercel.app',
      githubUrl: 'https://github.com/tolatoch/kwan-phayao-tourism',
      highlights: [
        'Smooth micro-interactions and scroll-triggered animations',
        'Interactive community homestay and boat tour preview cards',
        'Fully responsive layout optimized for mobile travelers on 4G networks',
        'Sub-second first contentful paint (FCP)'
      ]
    },
    {
      id: 'devpulse-ui',
      title: 'DevPulse Component System & Accessible UI Kit',
      category: 'UI',
      description: 'Modular, accessible frontend component library with 25+ production-grade elements, dark/light theme tokens, and keyboard accessibility.',
      longDescription: 'A comprehensive design token and component system built from scratch to standardize frontend development across personal and hackathon projects. Adheres to WAI-ARIA authoring practices with zero runtime dependencies.',
      image: webFloodImg, // will also showcase UI in modal
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'WAI-ARIA', 'Storybook'],
      liveUrl: 'https://devpulse-ui.vercel.app',
      githubUrl: 'https://github.com/tolatoch/devpulse-ui-system',
      highlights: [
        'Strict WCAG AA contrast ratios and visible keyboard focus rings',
        'Dynamic theme engine supporting deep forest green and amber palettes',
        'Zero-dependency accessible modal, drawer, tabs, and toast components'
      ]
    },
    {
      id: 'unigrade-planner',
      title: 'UniGrade — Academic Tracker & GPA Simulator',
      category: 'Web App',
      description: 'Lightweight web application for University of Phayao students to calculate semester GPAs, track credit requirements, and simulate graduation targets.',
      longDescription: 'Designed to solve real problems for university peers, UniGrade offers instantaneous grade simulations, prerequisite tree visualizations, and offline-capable local storage sync without requiring cloud sign-in.',
      image: tourismImg,
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage', 'PWA Ready'],
      liveUrl: 'https://unigrade-planner.vercel.app',
      githubUrl: 'https://github.com/tolatoch/unigrade-planner',
      highlights: [
        'Instant grade point simulations with visual distribution charts',
        '100% offline functionality with client-side LocalStorage cache',
        'Clean tabular schedule export in PDF and JSON formats'
      ]
    }
  ] as ProjectItem[],

  education: [
    {
      year: '2023 — Present',
      title: 'Bachelor of Science in Information Technology / Computer Science',
      organization: 'University of Phayao, Thailand',
      description: 'Year 3 undergraduate student focusing on frontend development, human-computer interaction, and software engineering. Maintaining top academic standing with 3.8/4.0 GPA.',
      achievements: [
        'Core coursework: Web Programming, Human-Computer Interaction, Database Systems, Software Architecture',
        'Active member of the University Developer Society and Tech Innovation Lab',
        'Represented university in Northern Thailand Regional Student Hackathon'
      ]
    },
    {
      year: '2020 — 2023',
      title: 'Senior High School Diploma (Science & Mathematics Track)',
      organization: 'Phayao Secondary Academy',
      description: 'Graduated with honors in Science, Mathematics, and Computer Club Leadership. First introduced to HTML, CSS, and basic JavaScript algorithmic problem solving.',
    }
  ] as TimelineItem[],

  experience: [
    {
      year: '2024 — Present',
      title: 'Frontend Developer & Freelance Engineer',
      organization: 'Independent & Academic Research Projects',
      description: 'Developing responsive web applications, landing pages, and interactive client portals for local academic initiatives, small businesses, and community organizations.',
      achievements: [
        'Built and deployed Web Flood monitoring system prototype tested with regional environmental data',
        'Crafted responsive websites boosting local client engagement and mobile traffic by 40%',
        'Established reusable Tailwind + React boilerplate reducing project bootstrap time by 50%'
      ]
    },
    {
      year: '2023 — 2024',
      title: 'Frontend Lead & Project Contributor',
      organization: 'University Student Tech Projects & Hackathons',
      description: 'Led UI implementation for collaborative team projects, translating Figma mockups into accessible code and coordinating Git version control.',
      achievements: [
        'Mentored 1st and 2nd year students in modern JavaScript and React fundamentals',
        'Organized peer code reviews emphasizing clean CSS structure and semantic markup'
      ]
    }
  ] as TimelineItem[],

  testimonials: [
    {
      id: 'test-1',
      name: 'Dr. Kittisak P.',
      role: 'Lecturer in Computer Science',
      organization: 'University of Phayao',
      avatar: '👨‍🏫',
      quote: 'Tola is among the most proactive and dedicated frontend students in his cohort. In our disaster monitoring research, his work on the Web Flood interface demonstrated both technical acumen in React and a genuine care for end-user accessibility.',
      rating: 5
    },
    {
      id: 'test-2',
      name: 'Praweena S.',
      role: 'UI/UX Designer & Project Partner',
      organization: 'Student Hackathon Team',
      avatar: '👩‍💻',
      quote: 'Collaborating with Tola is an absolute joy for any designer. He translates Figma design systems into pixel-perfect Tailwind code without compromising spacing, responsiveness, or subtle micro-interactions.',
      rating: 5
    },
    {
      id: 'test-3',
      name: 'Supachai R.',
      role: 'Community Project Coordinator',
      organization: 'Phayao Local Initiatives',
      avatar: '👨‍💼',
      quote: 'Tola delivered our landing portal ahead of schedule, with exceptional mobile performance and clean code. He is enthusiastic, communicative, and ready for an impactful frontend developer internship!',
      rating: 5
    }
  ] as TestimonialItem[],

  contact: {
    heading: "Let's Build Something *Remarkable Together*",
    subheading: 'Currently open to internship opportunities, junior frontend developer roles, and freelance collaborations. Drop me a line or send an email directly!',
    email: 'tolatuch081@gmail.com',
    location: 'Phayao, Thailand (Available for on-site in Thailand & remote worldwide)',
    availability: 'Available for immediate internship & full-time roles upon graduation',
  }
};
