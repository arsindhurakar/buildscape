export type NavItem = {
  label: string;
  href: string;
};

export type SocialIcon = "github" | "linkedin" | "codepen" | "email";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type TextSegment = {
  text: string;
  href?: string;
};

export type Job = {
  company: string;
  companyUrl: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  tech: string[];
};

export type Project = {
  title: string;
  description: TextSegment[];
  tech: string[];
  externalUrl: string;
  image: string;
  imageAlt: string;
};

export type Certificate = {
  title: string;
  year: string;
  url: string;
  thumbnail: string;
};

/* ── Global / metadata ────────────────────────────────────────────────────── */

export const siteConfig = {
  name: "Amin Sindhurakar",
  role: "Frontend Engineer",
  tagline:
    "I build fast, accessible, and thoughtfully crafted web experiences.",
  email: "hello@example.com",
  /** Absolute URL for metadata / Open Graph. Update before deploying. */
  siteUrl: "https://your-domain.com",
  /** Resume link shown under the Experience section. */
  resumeUrl: "#",
  resumeLabel: "Resume",
  /** Archive link shown under the Projects section. */
  archiveUrl: "#",
  archiveLabel: "Project Archive",
  footerText: [
    {
      text: "Content and development by the author. UI/UX recreated from the original portfolio by ",
    },
    { text: "Brittany Chiang", href: "https://brittanychiang.com/" },
    { text: ". Built with " },
    { text: "Next.js", href: "https://nextjs.org" },
    { text: " and " },
    { text: "Tailwind CSS", href: "https://tailwindcss.com" },
    { text: ", deployed on " },
    { text: "Vercel", href: "https://vercel.com" },
    { text: ", and set in the " },
    { text: "Inter", href: "https://rsms.me/inter/" },
    { text: " typeface." },
  ] as TextSegment[],
};

/* ── Navigation ───────────────────────────────────────────────────────────── */

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

/* ── Social links ─────────────────────────────────────────────────────────── */

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/arsindhurakar", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amin-sindhurakar-b5007b15b/",
    icon: "linkedin",
  },
  {
    label: "Codepen",
    href: "#",
    icon: "codepen",
  },
  { label: "Email", href: "mailto:arsindhurakar@gmail.com", icon: "email" },
];

/* ── About ────────────────────────────────────────────────────────────────── */

export const aboutParagraphs: TextSegment[][] = [
  [
    {
      text: "I'm a frontend engineer based in Kathmandu with nearly five years of experience building web applications using React and Angular. Currently, I work as a Frontend Software Engineer at ",
    },
    {
      text: "Novelty Technology LLC",
      href: "https://noveltytechnology.com/",
    },
    {
      text: ", where I build and maintain client-facing applications for businesses across a range of industries. I enjoy creating interfaces that feel fast, intuitive, and reliable while keeping the codebase maintainable for the people working on it next.",
    },
  ],
  [
    {
      text: "Most of my work has involved building customer-facing products, integrating APIs, improving performance, and collaborating with designers and backend engineers throughout the development process. Recently, I've been expanding my backend knowledge with Node.js while building personal projects in Next.js and TypeScript.",
    },
  ],
  [
    {
      text: "When I'm away from work, I'm usually experimenting with new tools, refining side projects, or learning something that helps me become a better engineer.",
    },
  ],
];

/* ── Experience ───────────────────────────────────────────────────────────── */

export const experience: Job[] = [
  {
    company: "Novelty Technology LLC",
    companyUrl: "https://www.noveltytechnology.com",
    role: "Software Engineer",
    startDate: "2021",
    endDate: "Present",
    description:
      "Built and maintained client-facing web applications using React and Angular, delivering scalable, responsive interfaces from initial development through ongoing enhancements. Collaborated closely with designers, backend engineers, and stakeholders to ship high-quality features while improving performance, maintainability, and overall user experience.",
    tech: ["React", "Angular", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    company: "PrismaSofts Pvt. Ltd.",
    companyUrl: "https://prismasofts.com.np/",
    role: "Developer",
    startDate: "Apr",
    endDate: "Nov 2021",
    description:
      "Developed and enhanced web applications by building intuitive user interfaces, implementing backend functionality, and delivering features that balanced user needs with business requirements. Worked closely with a small, agile team to ship high-quality software and continuously improve the product.",
    tech: ["React", "JavaScript", "Firebase", "Cloud Firestore"],
  },
  {
    company: "Next Nepal Pvt .Ltd",
    companyUrl: "https://www.linkedin.com/company/nextnepal/about/",
    role: "Frontend Developer",
    startDate: "Feb",
    endDate: "Mar 2021",
    description:
      "Maintained web applications using Angular, building responsive and user-centric interfaces. Partnered with cross-functional teams to deliver high-quality features and contributed to the design process through Figma by assisting with UI designs, design refinements, and maintaining consistency between design and implementation.",
    tech: ["Angular", "TypeScript", "Figma", "SCSS"],
  },
];

/* ── Projects ─────────────────────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    title: "Elevated Care Narrative",
    description: [
      {
        text: "A modern digital presence for a medical professional, showcasing qualifications, specialties, and clinical experience.",
      },
    ],
    tech: ["Next.js", "TypeScript", "Shadcn"],
    externalUrl: "https://www.drsonysherpa.com.np/",
    image: "/images/projects/project-1.png",
    imageAlt: "Screenshot placeholder for Project One",
  },
  {
    title: "Kathmandu Studio",
    description: [
      {
        text: "Initial prototype for a creative studio and digital marketing company, translating early concepts into a web experience before the product underwent a complete UI/UX redesign. ",
      },
      {
        text: "Current production site",
        href: "https://www.kathmandustudio.com/",
      },
      { text: ": Redesigned after the prototype phase." },
    ],
    tech: ["Next.js", "Google Analytics 4", "Meta Pixel"],
    externalUrl: "https://kathmandustudio.vercel.app",
    image: "/images/projects/project-2.png",
    imageAlt: "Screenshot placeholder for Project Two",
  },
  {
    title: "Aura Store",
    description: [
      {
        text: "Inventory management solution, streamlining product management, inventory tracking, and operational workflows.",
      },
    ],
    tech: ["Next.js", "Node.js", "Prisma", "Supabase"],
    externalUrl: "#",
    image: "/images/projects/project-3.png",
    imageAlt: "Screenshot placeholder for Project Three",
  },
];

/* ── Certificates ──────────────────────────────────────────────────────────────── */

export const certificates: Certificate[] = [
  {
    title: "Frontend Developer (React)",
    year: "2026",
    url: "https://www.hackerrank.com/certificates/iframe/526627babed0",
    thumbnail: "/images/certificates/certificate-1.png",
  },
  {
    title: "JavaScript (Intermediate)",
    year: "2026",
    url: "https://www.hackerrank.com/certificates/iframe/fdc0dec65b6a",
    thumbnail: "/images/certificates/certificate-2.png",
  },
];
