import { Project, ExperienceItem, SkillItem } from "./types";
import buildersImage from "./assets/images/builders.png";
import lionsImage from "./assets/images/lions.png";
import vocatiImage from "./assets/images/vocati.png";
import jconquiaImage from "./assets/images/jconquia.jpg";

export const PERSONAL_INFO = {
  name: "João Conquia",
  role: "Full Stack Developer",
  //focus: "Frontend Engineering",
  location: "Angola",
  bioShort: "Building products that people love to use.",
  bioLong: "Full Stack Developer focused on crafting modern digital experiences using React, Next.js, Node.js and TypeScript.",
  github: "https://github.com/C0nqu14",
  linkedin: "https://www.linkedin.com/in/joão-conquia-6a7507239",
  email: "joaomanuelconquia@gmail.com",
  cvUrl: "/joao-conquia.pdf", // Standard CTA link for CV download
  portraitUrl: jconquiaImage,
  story: [
    "I am a developer from Angola who believes that code is merely a tool to solve human problems, and that software should be as beautiful as it is robust.",
    "Specializing in Frontend Engineering, I dedicate my days to crafting fluid interfaces, rich visual systems, and high-performance full-stack architectures. I combine a passion for performance optimization with meticulous attention to detail.",
    "Whether developing responsive UI modules, setting up backend pipelines, or defining interactive brand stories, I approach every pixel with editorial intent: simplicity, balance, and flow."
  ]
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "builders-angola",
    title: "Builders Angola",
    description: "A digital hub and community uniting developers, founders, and creators in Angola. Designed to showcase local talent, spark collaboration, and drive tech innovation across the region.",
    techStack: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    year: "2024",
    visitUrl: "https://buildersangola.tech/",
    githubUrl: "https://github.com/C0nqu14", // Fallback to profile
    imageUrl: buildersImage,
    isFeatured: true
  },
  {
    id: "lionsec",
    title: "LionSec",
    description: "A premium cybersecurity platform representing penetration testing services, visual vulnerability logs, and active defense schemas. Focuses on minimal layouts and security-inspired aesthetics.",
    techStack: ["Next.js", "React", "TailwindCSS", "TypeScript", "GSAP"],
    year: "2024",
    visitUrl: "https://lionsec.vercel.app/",
    githubUrl: "https://github.com/C0nqu14",
    imageUrl: lionsImage,
    isFeatured: true
  },
  {
    id: "vocati",
    title: "Vocati",
    description: "An interactive, intelligent vocational profiling system designed to guide students and professionals toward educational and career paths tailored to their skills and interests.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    year: "2023",
    visitUrl: "https://www.vocati.tech/",
    githubUrl: "https://github.com/C0nqu14",
    imageUrl: vocatiImage,
    isFeatured: true
  }
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lead Full Stack Developer",
    company: "Tech Angola Initiative",
    location: "Luanda, Angola",
    period: "2023 — Present",
    description: [
      "Pioneering frontend architecture, creating robust component libraries and establishing premium interaction design standards.",
      "Developing high-performance, responsive full-stack modules with Next.js, Node.js, and Supabase.",
      "Optimizing core web vitals and bundle delivery, reducing load times by over 40% across key platforms."
    ]
  },
  {
    id: "exp-2",
    role: "Frontend Engineer",
    company: "Builders Angola Platform",
    location: "Luanda, Angola (Remote)",
    period: "2023",
    description: [
      "Designed and launched the core community interface, enhancing mobile responsiveness and interactive user workflows.",
      "Integrated key third-party developer integrations and client-side dashboards using TailwindCSS and TypeScript.",
      "Collaborated with local tech leaders to deliver clean, engaging layout structures for Angola's premier builder circle."
    ]
  },
  {
    id: "exp-3",
    role: "Full Stack Developer",
    company: "Software Solutions Studio",
    location: "Luanda, Angola",
    period: "2021 — 2023",
    description: [
      "Engineered responsive UI components and unified state-management schemas for diverse client platforms.",
      "Developed secure, scalable RESTful API endpoints and schema pipelines in Node.js, Express, and PostgreSQL.",
      "Maintained pristine codebases through rigorous linting, static analysis, and CI/CD automated deployments."
    ]
  }
];

export const SKILL_ITEMS: SkillItem[] = [
  { name: "React", iconName: "React" },
  { name: "Next.js", iconName: "Next" },
  { name: "React Native", iconName: "Mobile" },
  { name: "TypeScript", iconName: "TypeScript" },
  { name: "Node.js", iconName: "Node" },
  { name: "Supabase", iconName: "Database" },
  { name: "Python", iconName: "Python" },
  { name: "TailwindCSS", iconName: "Tailwind" },
  { name: "Docker", iconName: "Docker" },
  { name: "Git", iconName: "Git" },
  { name: "GitHub", iconName: "GitHub" },
  { name: "Figma", iconName: "Figma" },
  { name: "HTML", iconName: "HTML" },
  { name: "CSS", iconName: "CSS" },
  { name: "JavaScript", iconName: "JavaScript" }
];
