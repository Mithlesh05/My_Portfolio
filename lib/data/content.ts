import type { Achievement, Testimonial, SocialLink } from "@/types";

export const achievements: Achievement[] = [
  { id: "projects", label: "Projects Completed", value: 25, suffix: "+" },
  { id: "clients", label: "Happy Clients", value: 15, suffix: "+" },
  { id: "users", label: "Users Impacted", value: 10, suffix: "K+" },
  { id: "years", label: "Years of Learning", value: 3, suffix: "+" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Mithlesh transformed our vision into a stunning digital experience. The attention to detail and performance optimization exceeded every expectation.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechVision Labs",
  },
  {
    id: "t2",
    quote:
      "Working with Mithlesh felt like having a creative director and senior engineer in one. Every interaction feels intentional.",
    author: "Marcus Rivera",
    role: "Creative Director",
    company: "Digital Craft Studio",
  },
  {
    id: "t3",
    quote:
      "Delivered a complex platform ahead of schedule with zero compromise on quality. Our users love the interface.",
    author: "Priya Sharma",
    role: "Product Lead",
    company: "Flow Finance",
  },
  {
    id: "t4",
    quote:
      "The most talented full-stack developer I've worked with. Clean code, beautiful design, and reliable delivery.",
    author: "James Okonkwo",
    role: "CTO",
    company: "StartUp Hub",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:singhmithleshkumar717@gmail.com",
    icon: "email",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/insp_iredbydesign?igsh=dTNsbHp6a3p4dnc0",
    icon: "instagram",
  },
];

export const contactInfo = {
  email: "singhmithleshkumar717@gmail.com",
  phone: "+91 7903402439",
  location: "Bokaro | Jharkhand",
};

export const introLines = [
  "I don't just write code.",
  "I solve problems.",
  "I build products.",
  "I create experiences.",
];
