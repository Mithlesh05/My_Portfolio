export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  accent: string;
  year: string;
  /** CSS object-position, e.g. "right center" */
  imagePosition?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Achievement {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
