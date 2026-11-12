export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const PERSONAL_INFO = {
  name: "Saran K",
  role: "UI/UX Designer",
  specialization: "User-Centered Design & Digital Experiences",
  experienceLevel: "Fresher / Entry-Level Designer",
  location: "Hosur, Tamil Nadu, India",
  email: "saransaran9698@gmail.com",
  phoneDisplay: "+91 •••• •••••", // Private contact
  bio: "I am a passionate UI/UX Designer skilled in Figma, wireframing, prototyping, and user-centered design. I enjoy transforming ideas into simple, intuitive, and visually appealing digital experiences through thoughtful design and creative problem-solving.",
  quote: "Great design is not just about how it looks. It's about how naturally it works.",
  roles: [
    "UI/UX Designer",
    "Product Design Enthusiast",
    "Figma Designer",
    "Creative Problem Solver",
  ],
  education: {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Vel Tech High Tech Engineering College",
    duration: "2022–2026",
    score: "CGPA: 7.5/10",
    location: "Avadi, Chennai, Tamil Nadu",
  },
  socialLinks: [
    {
      name: "LinkedIn",
      username: "Saran K",
      url: "https://www.linkedin.com/in/saran-k-uiux",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      username: "saran9698",
      url: "https://github.com/saran9698",
      icon: "github",
    },
    {
      name: "HackerRank",
      username: "saransaran9698",
      url: "https://www.hackerrank.com/profile/saransaran9698",
      icon: "code",
    },
    {
      name: "LeetCode",
      username: "saransara",
      url: "https://leetcode.com/u/saransara",
      icon: "terminal",
    },
  ],
};

export interface SkillCategory {
  title: string;
  id: string;
  icon: string;
  description: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "UI/UX Design",
    id: "ui-ux",
    icon: "Layout",
    description: "Creating human-first digital architectures that balance visual elegance with cognitive simplicity.",
    skills: [
      "User Research",
      "UI Design",
      "Wireframing",
      "Prototyping",
      "Information Architecture",
      "Usability Testing",
    ],
  },
  {
    title: "Design Tools",
    id: "tools",
    icon: "Figma",
    description: "Mastering industry-standard design software for rapid ideation, vector craft, and high-fidelity prototypes.",
    skills: [
      "Figma",
      "FigJam",
      "Adobe XD",
      "Adobe Illustrator",
      "Canva",
    ],
  },
  {
    title: "UX Research",
    id: "research",
    icon: "Search",
    description: "Uncovering user pain points, mapping mental models, and turning qualitative feedback into design priorities.",
    skills: [
      "User Personas",
      "Journey Mapping",
      "Competitive Analysis",
      "Heuristic Evaluation",
    ],
  },
  {
    title: "Design Systems",
    id: "systems",
    icon: "Layers",
    description: "Building scalable, accessible, token-driven component libraries following modern guidelines.",
    skills: [
      "Material Design",
      "Responsive Design",
      "WCAG Accessibility",
      "Interaction Design",
      "Design Consistency",
    ],
  },
  {
    title: "Development",
    id: "development",
    icon: "Code2",
    description: "Understanding code realities to bridge the gap between design vision and technical implementation.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Git",
    ],
  },
  {
    title: "Productivity Tools",
    id: "productivity",
    icon: "Briefcase",
    description: "Collaborating across cross-functional workflows, documentation, and sprint organization.",
    skills: [
      "Miro",
      "Notion",
      "Microsoft Office",
    ],
  },
];

export interface ProcessStep {
  step: string;
  name: string;
  headline: string;
  description: string;
  activities: string[];
  deliverables: string[];
  tools: string[];
}

export const DESIGN_PROCESS: ProcessStep[] = [
  {
    step: "01",
    name: "Discover",
    headline: "Understand users and their needs.",
    description:
      "Every design starts with deep curiosity. I immerse myself in the problem space through user interviews, competitor benchmarks, and behavioral observations to find root pain points.",
    activities: [
      "User Interviews & Surveys",
      "Competitive Benchmarking",
      "User Persona Creation",
      "Problem Statement Formulation",
    ],
    deliverables: ["User Personas", "Pain Point Matrix", "Empathy Maps"],
    tools: ["FigJam", "Miro", "Notion"],
  },
  {
    step: "02",
    name: "Define",
    headline: "Identify problems and design objectives.",
    description:
      "Synthesizing qualitative findings into actionable design goals. I establish information architecture, map key user journeys, and frame metrics for usability success.",
    activities: [
      "Information Architecture (IA)",
      "User Journey Mapping",
      "Heuristic Auditing",
      "Feature Prioritization",
    ],
    deliverables: ["Sitemaps", "User Flow Diagrams", "Design Objectives"],
    tools: ["FigJam", "Miro", "Figma"],
  },
  {
    step: "03",
    name: "Ideate",
    headline: "Explore ideas and possible solutions.",
    description:
      "Brainstorming wide before converging. I explore alternative layouts, sketch divergent conceptual wireframes, and test early structural assumptions with quick paper & lo-fi mockups.",
    activities: [
      "Sketches & Low-Fi Wireframes",
      "Brainstorming & Concept Exploration",
      "Interactive Flow Logic",
      "Feedback Sessions",
    ],
    deliverables: ["Paper Sketches", "Low-Fidelity Wireframes", "Exploratory Concepts"],
    tools: ["Paper / Pen", "Figma", "FigJam"],
  },
  {
    step: "04",
    name: "Design",
    headline: "Build wireframes and high-fidelity interfaces.",
    description:
      "Crafting polished pixel-perfect interfaces with consistent design tokens, responsive typography, cohesive color schemes, micro-interactions, and reusable component libraries.",
    activities: [
      "High-Fidelity UI Screens",
      "Design System & Token Setup",
      "Micro-interaction & Transition Design",
      "Clickable Interactive Prototypes",
    ],
    deliverables: ["High-Fidelity Figma Screens", "Interactive Prototype", "UI Component Library"],
    tools: ["Figma", "Adobe Illustrator"],
  },
  {
    step: "05",
    name: "Validate",
    headline: "Evaluate usability and refine the experience.",
    description:
      "Validating design decisions through usability tests, cognitive walkthroughs, and WCAG accessibility evaluations, iteratively refining the product before handover.",
    activities: [
      "Task-Based Usability Testing",
      "WCAG 2.2 AA Accessibility Audits",
      "Developer Handoff Documentation",
      "Iterative Polish & Refinements",
    ],
    deliverables: ["Usability Report", "Design Specs & Tokens", "Final Production Asset Package"],
    tools: ["Figma Inspect", "Color Contrast Checkers", "Google Forms"],
  },
];

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  year: string;
  description: string;
  tools: string[];
  keyContributions: string[];
  features: string[];
  visualDirection: string;
  figmaUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    userFlowSteps: string[];
    designHighlights: string[];
    screenShowcase: {
      title: string;
      description: string;
    }[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: "homora",
    number: "01",
    title: "HOMORA",
    subtitle: "Smart Home Automation Mobile App",
    category: "Mobile UI/UX Design",
    role: "UI/UX Designer",
    year: "2026",
    description:
      "Designed a smart home application concept that allows users to manage connected devices, rooms, home security, and automation through an intuitive mobile interface.",
    tools: ["Figma", "FigJam", "Design System", "Wireframing", "User Flows"],
    keyContributions: [
      "Created user flows.",
      "Designed information architecture.",
      "Developed wireframes.",
      "Created high-fidelity UI screens.",
      "Built a reusable design system.",
      "Designed an intuitive smart home experience.",
    ],
    features: [
      "Context-aware room management (Living Room, Bedroom, Studio, Patio)",
      "One-tap automation scenes (Morning Routine, Cinema Mode, Energy Saver)",
      "Live device telemetry (Climate dials, smart lighting hue, power consumption)",
      "Integrated home surveillance & biometrics security panel",
    ],
    visualDirection:
      "Show premium smart home mobile mockups with device controls, room management, security panels, and automation dashboards.",
    figmaUrl: "https://www.figma.com",
    caseStudy: {
      overview:
        "Modern IoT ecosystems are plagued by fragmented device controllers, cluttered layouts, and high cognitive friction. HOMORA unifies complex home controls into an effortless mobile interface.",
      challenge:
        "Users struggled to quickly control devices across disparate brands, monitor energy loads, and trigger multi-device automation without navigating through confusing sub-menus.",
      solution:
        "Engineered a progressive-disclosure card architecture with tactile sliders, room-based grouping, and high-contrast dark visual aesthetics that reduce eye strain during evening home use.",
      userFlowSteps: [
        "User opens app -> Quick status summary & ambient temperature display",
        "Selects 'Living Room' -> Interactive device cards reveal instant toggle controls",
        "Adjusts climate slider -> Fluid haptic visual feedback reflects temperature change",
        "Enables 'Away Mode' -> Locks perimeter, dims lights, activates security camera stream",
      ],
      designHighlights: [
        "Dark-mode first color palette for low-light home environments",
        "Touch targets strictly adhering to 48x48dp minimum for reliable tap accuracy",
        "Visual hierarchy prioritizing frequently toggled devices and room states",
        "Consistent icon grid and modular card anatomy",
      ],
      screenShowcase: [
        {
          title: "Home Control Hub",
          description: "Live summary with weather, energy usage card, and active room selection chips.",
        },
        {
          title: "Room Detail & Climate Dial",
          description: "Interactive radial thermostat control with smooth temperature adjustment and mode toggles.",
        },
        {
          title: "Security & Device Automation",
          description: "Live camera stream preview, motion alert feed, and one-tap routine cards.",
        },
      ],
    },
  },
  {
    id: "courseinn",
    number: "02",
    title: "COURSEINN",
    subtitle: "Website UI/UX Redesign",
    category: "Web UI/UX & Responsive Design",
    role: "UI/UX Designer",
    year: "2026",
    description:
      "Analyzed an existing website to identify usability and visual design issues in navigation, hierarchy, and layout.",
    tools: ["Figma", "Wireframing", "Responsive Design", "Usability Analysis"],
    keyContributions: [
      "Identified usability issues.",
      "Evaluated visual hierarchy.",
      "Created redesigned wireframes.",
      "Improved layout consistency.",
      "Applied responsive design principles.",
      "Focused on intuitive navigation.",
    ],
    features: [
      "Streamlined course catalog with faceted search & filtering",
      "Restructured course curriculum page with transparent learning roadmaps",
      "Distraction-free enrollment checkout flow",
      "Full responsive grid adaptation from 320px mobile to 1920px desktop",
    ],
    visualDirection:
      "Show a premium website redesign presentation with desktop and mobile mockups.",
    figmaUrl: "https://www.figma.com",
    caseStudy: {
      overview:
        "CourseInn is a digital learning platform whose legacy site suffered from high bounce rates due to dense walls of unformatted text, unclear course outlines, and a confusing registration flow.",
      challenge:
        "Prospective students had difficulty finding relevant course prerequisites, comparing syllabus modules, and navigating on mobile devices due to unoptimized responsive breakpoints.",
      solution:
        "Redesigned the entire landing and course discovery experience with a clear editorial hierarchy, modern cards, scannable curriculum accordions, and frictionless CTA placement.",
      userFlowSteps: [
        "Landing page hero with clear value proposition and instant course search",
        "Filterable course grid categorized by skill level, duration, and topic",
        "Rich course detail page with instructor credentials, outcomes, and syllabus",
        "Two-step transparent enrollment dialog with clear pricing breakdown",
      ],
      designHighlights: [
        "Redesigned typography system improving reading speed by 40%",
        "Color-coded difficulty tags (Beginner, Intermediate, Advanced)",
        "Mobile-first wireframes ensuring equal usability on smaller touchscreens",
        "Clear visual breadcrumbs and sticky enrollment action bar",
      ],
      screenShowcase: [
        {
          title: "Editorial Course Discovery",
          description: "Modern grid with search bar, category chips, student ratings, and instructor avatars.",
        },
        {
          title: "Course Curriculum & Roadmap",
          description: "Visual timeline of weekly lessons with estimated completion hours and preview lessons.",
        },
        {
          title: "Responsive Mobile Navigation",
          description: "Clean sliding drawer menu and sticky bottom enroll bar designed for one-handed operation.",
        },
      ],
    },
  },
  {
    id: "energy-system",
    number: "03",
    title: "SMART ENERGY MONITORING",
    subtitle: "Prediction System Dashboard & IoT Integration",
    category: "Data Visualization & Dashboard UI",
    role: "Final Year Project",
    year: "2025",
    description:
      "Worked on an intelligent system designed to monitor and predict electricity consumption using historical energy usage data.",
    tools: ["Python", "Machine Learning", "LSTM", "IoT"],
    keyContributions: [
      "Worked with historical electricity consumption data.",
      "Applied machine learning techniques.",
      "Used LSTM-based prediction.",
      "Integrated IoT-based monitoring concepts.",
      "Focused on improving energy awareness.",
    ],
    features: [
      "Real-time wattage & load telemetry from simulated IoT smart meters",
      "LSTM neural network forecast curves predicting 24-hour demand spikes",
      "Anomaly detection alerts flagging unusual vampire power draws",
      "Cost breakdown analytics comparing peak vs off-peak consumption",
    ],
    visualDirection:
      "Show a modern energy analytics dashboard with consumption graphs, prediction charts, and IoT monitoring panels.",
    githubUrl: "https://github.com/saran9698",
    caseStudy: {
      overview:
        "As part of the final year capstone at Vel Tech High Tech Engineering College, this project addressed grid instability and domestic over-consumption by synthesizing IoT hardware telemetry with deep learning forecasting.",
      challenge:
        "Raw time-series sensor data is noisy and incomprehensible to everyday users. The primary challenge was making multi-sensor kilowatt-hour metrics and complex LSTM prediction bounds actionable and intuitive.",
      solution:
        "Designed a high-contrast dark telemetry dashboard that translates complex machine learning confidence intervals and historical datasets into legible graphs, proactive alerts, and cost savings tips.",
      userFlowSteps: [
        "System receives smart sensor telemetry via IoT communication pipeline",
        "LSTM model evaluates past 30 days of consumption patterns to predict 24hr load",
        "Dashboard surfaces live kilowatt-hour metrics and predicted peak hours",
        "User reviews automated recommendations to reschedule heavy appliance cycles",
      ],
      designHighlights: [
        "Clean time-series visual charts with dual comparison curves (Actual vs Predicted)",
        "Color-coded energy status alerts: Green (Optimal), Amber (Moderate), Cyan (Predicted)",
        "Clean tabular device power distribution with percentage breakdowns",
        "Recognized with Best Project Award – Capstone Project 2025",
      ],
      screenShowcase: [
        {
          title: "Telemetry & Prediction Overview",
          description: "Live power gauges, peak load indicators, and predicted 24-hour kilowatt projection curve.",
        },
        {
          title: "Appliance-Level Power Breakdown",
          description: "Distribution donut chart and device list detailing HVAC, refrigerator, and lighting consumption.",
        },
        {
          title: "Energy Conservation Insights",
          description: "Actionable cards suggesting optimal hours for running heavy machinery and reducing peak tariffs.",
        },
      ],
    },
  },
  {
    id: "design-system",
    number: "04",
    title: "DESIGN SYSTEM SHOWCASE",
    subtitle: "Modular UI Architecture & Component Guidelines",
    category: "Design Systems & Token Architecture",
    role: "Design System Lead / Creator",
    year: "2026",
    description:
      "A comprehensive design system showcase demonstrating reusable UI components, typography, color palettes, buttons, cards, and responsive design principles.",
    tools: ["Figma", "Design Tokens", "Auto Layout", "WCAG 2.2 AA", "Component Variants"],
    keyContributions: [
      "Established systematic color tokens with WCAG AA compliance.",
      "Architected typographic scale using fluid modular ratios.",
      "Built multi-state component variants (default, hover, active, disabled).",
      "Implemented responsive 4pt/8pt spacing grids.",
      "Documented design guidelines for developer handoff.",
      "Standardized micro-interaction patterns and elevation shadows.",
    ],
    features: [
      "Semantic color token hierarchy with strict accessible contrast ratios",
      "Button & input atom components across primary, secondary, outline, and glass states",
      "Responsive card organisms with fluid layouts and glassmorphic elevation",
      "Interactive component playground directly within the portfolio",
    ],
    visualDirection:
      "Present this as a visual design-system showcase, not as a separate completed client project.",
    figmaUrl: "https://www.figma.com",
    caseStudy: {
      overview:
        "Good design scales through discipline. This design system demonstration exemplifies how token-based thinking creates visual harmony, reduces development debt, and speeds up product iterations.",
      challenge:
        "Building user interfaces without a standardized component library leads to inconsistent padding, mismatched colors, fragmented typography, and inaccessible contrast states.",
      solution:
        "Constructed a modular token system rooted in an 8-point spatial grid, semantic color tokens, atomic component structures, and strict WCAG 2.2 AA contrast rules.",
      userFlowSteps: [
        "Token Definition: Define base primitives (colors, spacing, typography, radii)",
        "Component Architecture: Construct atoms (buttons, badges, inputs, icons)",
        "Organism Assembly: Combine atoms into cards, navigation bars, and modals",
        "Documentation & Tokens: Package for seamless developer implementation",
      ],
      designHighlights: [
        "100% WCAG 2.2 AA compliant contrast on all text and interactive elements",
        "Consistent 8pt grid system for predictable visual rhythm",
        "States mapped for every interactive element: default, hover, focused, active, disabled",
        "Token-driven naming conventions aligned with Tailwind CSS and CSS Variables",
      ],
      screenShowcase: [
        {
          title: "Color Palette & Token Spec",
          description: "Obsidian dark theme tokens, primary indigo, violet, and cyan accents with contrast ratios.",
        },
        {
          title: "Component Anatomy & Variants",
          description: "Button states, input fields, badge pills, toggle switches, and modal anatomy.",
        },
        {
          title: "Typography Scale & Spacing Grid",
          description: "Space Grotesk display headings, Inter body text, and 8px baseline rhythm.",
        },
      ],
    },
  },
];

export const EXPERIENCE_DATA = [
  {
    role: "Web Development Internship",
    organization: "NSIC (National Small Industries Corporation)",
    location: "Ekkatuthangal, Chennai, Tamil Nadu",
    year: "2024",
    type: "Internship",
    description:
      "Completed hands-on training in front-end and back-end web development, gaining a practical understanding of how user interfaces transition from design concepts to responsive, production-ready code.",
    responsibilities: [
      "Worked with HTML and CSS to structure and style modern web pages.",
      "Developed interactive web interfaces using vanilla JavaScript.",
      "Gained exposure to PHP and backend request-response cycles.",
      "Learned practical web development concepts, responsive layouts, and DOM manipulation.",
      "Developed a deep understanding of design-to-code implementation, enhancing designer-developer collaboration.",
    ],
    designBridgeHighlight:
      "This technical foundation enables Saran to design with code empathy—understanding CSS flexbox/grid constraints, DOM performance, and accessibility standards when crafting Figma prototypes.",
  },
];

export const ACHIEVEMENTS_DATA = [
  {
    title: "Best Project Award – Capstone Project",
    organization: "Vel Tech High Tech Engineering College",
    year: "2025",
    category: "Academic Excellence",
    project: "Smart Energy Monitoring and Prediction System",
    description:
      "Awarded first place among final-year capstone engineering projects for combining machine learning LSTM predictive models with user-friendly data visualization and IoT hardware telemetry.",
    highlights: [
      "Praised for clarity of user interface and telemetry dashboard presentation",
      "Demonstrated accurate 24-hour predictive load curves",
      "Presented to academic and industry evaluation panel",
    ],
  },
];

export const SERVICES_DATA = [
  {
    title: "UI/UX Design",
    icon: "Layout",
    description:
      "End-to-end user experience design from initial problem discovery and information architecture to high-fidelity, polished visual interfaces.",
  },
  {
    title: "Website UI Design",
    icon: "Monitor",
    description:
      "Designing responsive, conversion-focused web layouts, landing pages, and web apps with modern typography, whitespace, and visual hierarchy.",
  },
  {
    title: "Mobile App UI Design",
    icon: "Smartphone",
    description:
      "Crafting intuitive iOS and Android mobile experiences following human interface guidelines, touch ergonomics, and fluid gesture interactions.",
  },
  {
    title: "Wireframing & Prototyping",
    icon: "Cpu",
    description:
      "Building rapid low-fidelity structural wireframes and clickable high-fidelity Figma prototypes to test assumptions and simulate user flows.",
  },
  {
    title: "UX Research & Usability Analysis",
    icon: "Search",
    description:
      "Conducting heuristic evaluations, competitive benchmarking, user journey mapping, and persona synthesis to inform data-driven design decisions.",
  },
  {
    title: "Design Systems & Responsive Design",
    icon: "Layers",
    description:
      "Architecting scalable token-driven design systems, reusable UI component libraries, and responsive grid layouts compliant with WCAG accessibility.",
  },
];
