# Saran K — Elite UI/UX & Product Designer Portfolio

> *"Great design is not just about how it looks. It's about how naturally it works."*

A world-class personal portfolio website for **Saran K**, an aspiring UI/UX Designer and Product Designer specializing in user-centered design, interactive prototyping, and design systems.

Inspired by the design craftsmanship of **Apple**, **Linear**, **Framer**, **Vercel**, and **Stripe**, this portfolio showcases thoughtful design thinking, deep user research, structured design systems, and frontend engineering foundations.

---

## 🌟 Key Features

- **Split-Screen Interactive Hero**: Dynamic animated role cycler, prominent value proposition, and an interactive Figma workspace illustration complete with floating design panels, layers, vector bounds, and color token swatches.
- **Deep-Dive Case Studies**:
  - **HOMORA**: Smart Home Automation Mobile App with interactive phone mockup (climate control dials, live lighting toggles, biometric security states, and room selectors).
  - **COURSEINN**: Website UI/UX Redesign featuring an interactive browser mockup, course discovery filters, and responsive layout demonstrations.
  - **Smart Energy Monitoring & Prediction System**: Award-winning Capstone project (2025) integrating IoT telemetry with LSTM machine learning prediction curves rendered via dynamic SVG waveforms.
  - **Design System Showcase**: Live interactive component playground illustrating atomic design tokens, multi-state buttons, switches, contrast verification, and typography rhythm.
- **Case Study Modal Viewer**: Full-screen modal with problem definition, user journey mapping, design rationale, and deliverables.
- **Interactive 5-Step Design Process**: Animated horizontal timeline on desktop and vertical on mobile (Discover, Define, Ideate, Design, Validate) detailing specific activities, artifacts, and tools.
- **Engineering Foundation (Design-to-Code Bridge)**: Dedicated Experience timeline highlighting his Web Development Internship at NSIC, Ekkatuthangal, Chennai, emphasizing developer empathy and design system feasibility.
- **Honors & Recognition**: Featured Capstone Project Award 2025 badge with animated trophy and evaluation highlights.
- **Accessible & High-Performance**: 100% WCAG 2.2 AA contrast compliance, keyboard navigation, focus-visible indicators, skip-to-content accessibility link, and automatic `prefers-reduced-motion` detection.
- **SEO & Structured Data**: Built-in JSON-LD Person schema, OpenGraph cards, Twitter cards, meta tags, XML sitemap, and `robots.txt`.

---

## 🎨 Design System & Tokens

### Color Palette
| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Background (Obsidian)** | `#0B1120` | Core dark canvas |
| **Primary** | `#6366F1` | Primary interactive buttons, key focus accents |
| **Secondary** | `#8B5CF6` | Soft gradient bridges & badge glows |
| **Accent (Cyan)** | `#06B6D4` | Real-time telemetry, live status pings |
| **Text Primary** | `#FFFFFF` | High-contrast headings and active elements |
| **Text Muted** | `#94A3B8` | Body copy, secondary metadata |
| **Glass Surface** | `rgba(255, 255, 255, 0.05)` | Glassmorphism cards with backdrop blur |
| **Glass Border** | `rgba(255, 255, 255, 0.12)` | Subtle frosted glass border outline |

### Typography
- **Headings & Display**: `Space Grotesk`
- **Body & Interface**: `Inter`
- **Code & Tokens**: `Fira Code`

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Pre-Rendering)
- **Library**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **SEO & Structured Data**: JSON-LD Person Schema, OpenGraph, Canonical URLs, Sitemap XML, Robots TXT

---

## 📁 Project Architecture

```
Portfolio/
├── app/
│   ├── globals.css          # Glassmorphism utilities, scrollbars, reduced motion
│   ├── layout.tsx           # Fonts, SEO metadata, JSON-LD Person schema
│   └── page.tsx             # Home page assembling all primary sections
├── components/
│   ├── Navbar.tsx           # Sticky glass header with active section tracking
│   ├── Hero.tsx             # Split-screen hero & Figma workspace canvas
│   ├── About.tsx            # Philosophy, education & location cards
│   ├── Skills.tsx           # Grouped skill cards with category filters
│   ├── DesignProcess.tsx    # 5-step interactive horizontal & vertical timeline
│   ├── Projects.tsx         # Featured project showcases & case study modal
│   ├── Experience.tsx       # NSIC Web Dev Internship & design-to-code bridge
│   ├── Achievements.tsx     # Best Project Award Capstone 2025 card
│   ├── Services.tsx         # 6 core design capability cards
│   ├── Contact.tsx          # Form validation, 1-click copy & IST local time
│   ├── Footer.tsx           # Navigation links, copyright & back-to-top
│   └── ui/
│       ├── Button.tsx       # Button variants (primary, glass, outline, ghost)
│       ├── GlassCard.tsx    # Frosted glass card with hover glow
│       ├── SectionHeading.tsx # Editorial headings with badges
│       ├── ProjectCard.tsx  # Project showcase with 3D tilt & modal triggers
│       ├── ProjectModal.tsx # Full-screen case study modal
│       ├── ProjectMockups.tsx # HOMORA mobile, CourseInn browser, Energy chart, Design tokens
│       ├── SkillCard.tsx    # Categorized skill group component
│       └── AnimatedText.tsx # Dynamic role typewriter / cycler
├── lib/
│   ├── constants.ts         # Centralized portfolio data, projects, copy
│   ├── animations.ts        # Reusable Framer Motion transitions
│   ├── metadata.ts          # OpenGraph, Twitter & JSON-LD schema
│   └── utils.ts             # Tailwind class merging utility (cn)
├── hooks/
│   ├── useActiveSection.ts  # Scroll position observer for navigation
│   └── useReducedMotion.ts  # Accessibility media query listener
├── public/
│   ├── favicon.svg          # Stylized personal brand icon
│   ├── resume.pdf           # Printable professional resume
│   ├── robots.txt           # Search crawler permissions
│   └── sitemap.xml          # Search engine index
├── tailwind.config.ts       # Design tokens, shadows, colors, keyframes
├── tsconfig.json            # Strict TypeScript settings
└── package.json             # Scripts & dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.17.0` or higher (tested on Node `v24.13.0`)
- npm, pnpm, or yarn

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/saran9698/portfolio.git
cd portfolio
npm install
```

### 2. Local Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
Create an optimized production build:
```bash
npm run build
```

Run the production server:
```bash
npm start
```

---

## 🌐 Deployment to Vercel

The portfolio is pre-configured for one-click deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub (`github.com/saran9698/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository and leave the default build settings (`Framework: Next.js`, `Build Command: next build`).
4. Click **Deploy**.

---

## 👤 Designer Contact

- **Name**: Saran K
- **Role**: UI/UX Designer & Product Designer
- **Location**: Hosur, Tamil Nadu, India
- **Email**: [saransaran9698@gmail.com](mailto:saransaran9698@gmail.com)
- **GitHub**: [github.com/saran9698](https://github.com/saran9698)
- **LeetCode**: [leetcode.com/u/saransara](https://leetcode.com/u/saransara)
- **HackerRank**: [hackerrank.com/profile/saransaran9698](https://www.hackerrank.com/profile/saransaran9698)

---

## 📄 License
This project is open-source under the MIT License. © 2026 Saran K.
