import {
  AtSign,
  Code2,
  FolderGit2,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export const siteConfig = {
  name: "Saheed (Prosper) Tobi Ogundipe",
  shortName: "Saheed Tobi",
  role: "Frontend Lead / Full-Stack Engineer",
  headline:
    "Frontend lead building scalable web, mobile, fintech, and enterprise products.",
  description:
    "Frontend Lead and Full-Stack Engineer building production web, mobile, fintech, and enterprise product systems with React, Next.js, React Native, and Node.js.",
  location: "Lagos, Nigeria",
  availability: "Available for relocation",
  email: "prosper8890@gmail.com",
  phone: "+2349034023685",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://oluwatobi3685.dev",
  github: {
    username: "prosper-85",
    url: "https://github.com/prosper-85",
  },
  cv: {
    label: "Download CV",
    href: "/cv/Saheed_Prosper_Tobi_Web_Frontend_Engineer_CV.pdf",
    fileName: "Saheed_Prosper_Tobi_Web_Frontend_Engineer_CV.pdf",
  },
  linkedin: "https://linkedin.com/in/oluwatobi3685",
  x: "https://x.com/gndptb",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/tech", label: "Stack" },
  { href: "/contact", label: "Contact" },
];

export const strengths = [
  {
    title: "Frontend architecture",
    description:
      "Component-driven React and Next.js systems with reusable UI libraries, strict TypeScript, state management, and performance tuning.",
    icon: Layers3,
  },
  {
    title: "Mobile development",
    description:
      "React Native and Expo features for iOS and Android, including navigation, Firebase flows, and cross-platform UI consistency.",
    icon: Smartphone,
  },
  {
    title: "Full-stack collaboration",
    description:
      "Backend collaboration across Node.js, Express, NestJS, REST APIs, JWT auth, MongoDB, and PostgreSQL-backed product flows.",
    icon: Workflow,
  },
];

export const metrics = [
  { value: "Web + Mobile", label: "Production product delivery" },
  { value: "Lead", label: "Frontend engineering experience" },
  { value: "Yes", label: "Available for relocation" },
];

export const projects = [
  {
    title: "Blink Merchant",
    description:
      "Digital payment platform for businesses with tap-to-pay, geo-payment, and scan-to-pay transaction flows.",
    impact:
      "Contributed to merchant-facing payment experiences for business transactions and secure digital collection.",
    tags: ["React Native", "Fintech", "Payments", "Mobile"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.blinkbusiness",
      },
    ],
  },
  {
    title: "Blink Pay",
    description:
      "Virtual card application for secure personal transactions and consumer payment experiences.",
    impact:
      "Worked on mobile financial product flows focused on secure personal spending and transaction confidence.",
    tags: ["React Native", "Virtual Cards", "Fintech", "Security"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.blinkpay",
      },
    ],
  },
  {
    title: "Dryve User App",
    description:
      "Ride-hailing mobile platform with real-time location, trip flows, and user interaction features.",
    impact:
      "Contributed to mobility features involving live location behavior and customer-facing app interactions.",
    tags: ["React Native", "Mobility", "Real-time Location", "Mobile"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.dryveuser",
      },
    ],
  },
  {
    title: "Accelerate",
    description:
      "Business-facing fintech platform contributed to as Lead Frontend Engineer at iRecharge.",
    impact:
      "Improved frontend delivery, UI consistency, and product-backend collaboration for production fintech workflows.",
    tags: ["Frontend Lead", "React", "Next.js", "Fintech"],
    links: [
      {
        label: "Visit site",
        href: "https://accelerate.ng/",
      },
    ],
  },
  {
    title: "iRecharge",
    description:
      "Digital recharge and payments platform contributed to as Lead Frontend Engineer at iRecharge Tech Innovations.",
    impact:
      "Worked across frontend systems, platform performance, and production user experience for payment flows.",
    tags: ["Frontend Lead", "Payments", "React", "Performance"],
    links: [
      {
        label: "Visit site",
        href: "https://irecharge.ng/",
      },
    ],
  },
  {
    title: "Sanitrack",
    description:
      "Full-stack web and mobile features with React, React Native, TypeScript, Express.js, MongoDB, and Docker.",
    impact:
      "Built secure API communication, structured validation flows, and consistent cross-platform interfaces.",
    tags: ["React", "React Native", "TypeScript", "Express", "MongoDB"],
    links: [],
  },
  {
    title: "Food Delivery App",
    description:
      "Mobile commerce experience for searching, filtering, and ordering preferred meals from restaurants.",
    impact:
      "Designed React Native and Firebase-backed mobile flows for product discovery and ordering.",
    tags: ["React Native", "Firebase", "Mobile UI", "E-commerce"],
    links: [],
  },
];

export const techGroups = [
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "Native Modules", "App Store flows"],
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "State and UI",
    icon: Layers3,
    items: ["Redux Toolkit", "Context API", "React Hook Form", "Zod"],
  },
  {
    title: "Backend",
    icon: ShieldCheck,
    items: ["Node.js", "Express", "NestJS", "JWT Auth", "REST APIs"],
  },
  {
    title: "Data and cloud",
    icon: Workflow,
    items: ["MongoDB", "PostgreSQL", "Firebase Auth", "Firestore"],
  },
  {
    title: "Delivery",
    icon: Rocket,
    items: ["Docker", "Sentry", "ESLint", "GitHub", "CI hygiene"],
  },
];

export const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    description: "Best for opportunities and project conversations.",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: siteConfig.github.url,
    description: "Code, experiments, and public engineering activity.",
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    description: "Professional background and role alignment.",
    icon: Workflow,
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.github.url,
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: Workflow,
  },
  {
    label: "X",
    href: siteConfig.x,
    icon: AtSign,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
];
