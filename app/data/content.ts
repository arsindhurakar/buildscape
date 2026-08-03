export type NavItem = {
  label: string;
  href: string;
};

export type SocialIcon = "github" | "linkedin" | "twitter" | "email";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

/** A run of text; if `href` is set it renders as a slate-200 link. */
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
  /** One-paragraph summary of responsibilities/achievements. */
  description: string;
  tech: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  externalUrl: string;
  /** Path to the project image, relative to /public. */
  image: string;
  imageAlt: string;
};

export type Article = {
  title: string;
  year: string;
  url: string;
  /** Path to the article thumbnail, relative to /public. */
  thumbnail: string;
};

/* ── Global / metadata ────────────────────────────────────────────────────── */

export const siteConfig = {
  name: "Your Name",
  role: "Frontend Engineer",
  tagline: "I build accessible, pixel-perfect experiences for the web.",
  email: "hello@example.com",
  /** Absolute URL for metadata / Open Graph. Update before deploying. */
  siteUrl: "https://your-domain.com",
  /** Resume link shown under the Experience section. */
  resumeUrl: "#",
  resumeLabel: "View Full Résumé",
  /** Archive link shown under the Projects section. */
  archiveUrl: "#",
  archiveLabel: "View Full Project Archive",
  /**
   * Footer reference text. Segments with an `href` render as links.
   */
  footerText: [
    { text: "Loosely designed in " },
    { text: "Figma", href: "https://www.figma.com/" },
    { text: " and coded in " },
    { text: "Visual Studio Code", href: "https://code.visualstudio.com/" },
    { text: " by yours truly. Built with " },
    { text: "Next.js", href: "https://nextjs.org/" },
    { text: " and " },
    { text: "Tailwind CSS", href: "https://tailwindcss.com/" },
    { text: ", deployed with " },
    { text: "Vercel", href: "https://vercel.com/" },
    { text: ". All text is set in the " },
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
  { label: "GitHub", href: "#", icon: "github" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "Email", href: "#", icon: "email" },
];

/* ── About ────────────────────────────────────────────────────────────────── */

export const aboutParagraphs: TextSegment[][] = [
  [
    {
      text: "Hi there! I'm a frontend engineer who enjoys building clean, thoughtful interfaces for the web. I care about the small details — the ones that make software feel effortless, accessible, and a little bit polished.",
    },
  ],
  [
    {
      text: "My focus is on writing maintainable code, following design systems closely, and turning ambiguous requirements into shipped, working software. I'm comfortable across the stack but happiest close to the pixels — and I'm always learning better ways to ",
    },
    { text: "build for the web", href: "#" },
    {
      text: ".",
    },
  ],
  [
    {
      text: "When I'm not coding, I'm usually reading about design, tinkering with side projects, or exploring new tools to add to my workflow.",
    },
  ],
];

/* ── Experience ───────────────────────────────────────────────────────────── */

export const experience: Job[] = [
  {
    company: "Company A",
    companyUrl: "#",
    role: "Senior Software Engineer",
    startDate: "2022",
    endDate: "Present",
    description:
      "Lead the development of a design-system-powered marketing site, improving Lighthouse scores and SEO. Mentor junior engineers, introduce code-review and testing conventions across the frontend team, and partner with design to ship pixel-perfect, accessible UI components used across multiple products.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    company: "Company B",
    companyUrl: "#",
    role: "Software Engineer",
    startDate: "2020",
    endDate: "2022",
    description:
      "Build and maintain customer-facing dashboards and internal tools using React and Node.js. Ship performance and accessibility improvements, reducing load times and passing WCAG checks, while collaborating cross-functionally to scope, design, and deliver new features on a rapid cadence.",
    tech: ["JavaScript", "React", "Node.js", "GraphQL"],
  },
  {
    company: "Company C",
    companyUrl: "#",
    role: "Frontend Developer",
    startDate: "2019",
    endDate: "2020",
    description:
      "Develop responsive, animated interfaces for marketing and product pages. Work with the design team to establish reusable component patterns and style guides, and contribute to a culture of clean, readable code.",
    tech: ["JavaScript", "TypeScript", "Sass"],
  },
  {
    company: "Company D",
    companyUrl: "#",
    role: "Junior Developer",
    startDate: "2018",
    endDate: "2019",
    description:
      "Fix bugs, write unit tests, and assist with feature development across the frontend codebase while learning modern JavaScript practices, version control, and agile workflows.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

/* ── Projects ─────────────────────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A polished, fully responsive web application — placeholder copy for your own project. Swap in your title, description, screenshots, and links here.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    externalUrl: "#",
    image: "/projects/project-1.svg",
    imageAlt: "Screenshot placeholder for Project One",
  },
  {
    title: "Project Two",
    description:
      "Another project slot with a screenshot of your favorite work and a one-paragraph story. Placeholder copy lives here until you replace it.",
    tech: ["TypeScript", "Node.js", "GraphQL", "PostgreSQL"],
    externalUrl: "#",
    image: "/projects/project-2.svg",
    imageAlt: "Screenshot placeholder for Project Two",
  },
  {
    title: "Project Three",
    description:
      "A small utility that makes a boring, everyday web task less annoying. A one-line description lives here.",
    tech: ["JavaScript", "Vite"],
    externalUrl: "#",
    image: "/projects/project-3.svg",
    imageAlt: "Screenshot placeholder for Project Three",
  },
  {
    title: "Project Four",
    description:
      "A component library with accessible, themed primitives you can drop into any project. Placeholder copy lives here until you replace it.",
    tech: ["TypeScript", "React"],
    externalUrl: "#",
    image: "/projects/project-4.svg",
    imageAlt: "Screenshot placeholder for Project Four",
  },
];

/* ── Writing ──────────────────────────────────────────────────────────────── */

export const articles: Article[] = [
  {
    title: "Reflections on Building Accessible Interfaces",
    year: "2025",
    url: "#",
    thumbnail: "/writing/article-1.svg",
  },
  {
    title: "Designing Better Developer Tools",
    year: "2025",
    url: "#",
    thumbnail: "/writing/article-2.svg",
  },
  {
    title: "Notes on Performance Budgets That Stick",
    year: "2024",
    url: "#",
    thumbnail: "/writing/article-3.svg",
  },
  {
    title: "A Practical Guide to Design Systems",
    year: "2024",
    url: "#",
    thumbnail: "/writing/article-4.svg",
  },
];
