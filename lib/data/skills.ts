export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillTab {
  id: string;
  title: string;
  skills: SkillItem[];
}

export const skillTabs: SkillTab[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "◈" },
      { name: "CSS", icon: "◇" },
      { name: "JavaScript", icon: "JS" },
      { name: "React", icon: "⚛" },
      { name: "Tailwind CSS", icon: "◉" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "⬡" },
      { name: "Express", icon: "◇" },
      { name: "GraphQL", icon: "◈" },
      { name: "REST APIs", icon: "⇄" },
      { name: "WebSockets", icon: "◎" },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: "◆" },
      { name: "MongoDB", icon: "●" },
      { name: "Supabase", icon: "▲" },
      { name: "MySQL", icon: "⬡" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      { name: "Docker", icon: "▣" },
      { name: "CI/CD", icon: "↻" },
      { name: "GitHub Actions", icon: "◉" },
      { name: "Nginx", icon: "◇" },
      { name: "Linux", icon: "⬡" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    skills: [
      { name: "Vercel", icon: "▲" },
      { name: "Firebase", icon: "◆" },
      { name: "Netlify", icon: "◎" },
      { name: "Render", icon: "⬡" },
      { name: "Railway", icon: "▣" },
    ],
  },
];
