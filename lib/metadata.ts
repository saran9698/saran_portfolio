import { Metadata } from "next";

export const siteConfig = {
  name: "Saran K — UI/UX Designer & Product Designer",
  shortName: "Saran K",
  description:
    "Portfolio of Saran K, an aspiring UI/UX Designer and Product Designer specializing in user-centered design, Figma prototyping, design systems, and digital product experiences.",
  url: "https://sarank-portfolio.vercel.app",
  ogImage: "https://sarank-portfolio.vercel.app/og-image.png",
  author: "Saran K",
  location: "Hosur, Tamil Nadu, India",
  keywords: [
    "Saran K",
    "UI/UX Designer",
    "Product Designer",
    "Figma Designer",
    "User-Centered Design",
    "Design Systems",
    "Wireframing",
    "Prototyping",
    "Frontend Development",
    "Hosur UI Designer",
    "Tamil Nadu Designer",
    "Homora Smart Home UI",
    "CourseInn Redesign",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | Saran K",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Saran K — UI/UX Designer & Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@sarank_design",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saran K",
  jobTitle: "UI/UX Designer",
  description:
    "I am a passionate UI/UX Designer skilled in Figma, wireframing, prototyping, and user-centered design. I enjoy transforming ideas into simple, intuitive, and visually appealing digital experiences through thoughtful design and creative problem-solving.",
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hosur",
    addressRegion: "Tamil Nadu",
    addressCountry: "India",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Vel Tech High Tech Engineering College",
  },
  knowsAbout: [
    "UI/UX Design",
    "User Research",
    "Figma",
    "Prototyping",
    "Design Systems",
    "Wireframing",
    "Information Architecture",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
  ],
  sameAs: [
    "https://www.linkedin.com/in/saran-k-uiux",
    "https://github.com/saran9698",
    "https://www.hackerrank.com/profile/saransaran9698",
    "https://leetcode.com/u/saransara",
  ],
};
