import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "travel-booking-platform",
    title: "Travel Booking Platform",
    description:
      "A full-stack travel booking platform with modules for hotels, buses, cabs, visa services, activities, and holiday packages. Contributing as part of a development team by building scalable features, integrating third-party APIs for real-time booking and pricing, and enhancing the admin dashboard.",
    longDescription:
      "Multi-module travel platform covering hotels, buses, cabs, visa, activities, and packages — with third-party API integrations and admin dashboard enhancements.",
    image: "/images/travel-booking-platform.png",
    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Third-Party APIs",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "#dc2626",
    year: "2026 • Ongoing",
  },
  {
    id: "banks-partner",
    title: "Banks Partner",
    description:
      "Developed a full-stack fintech platform with a customer portal and an admin dashboard to manage loan applications, users, partners, EMI calculations, and website content through a secure and responsive interface.",
    longDescription:
      "Customer portal and admin dashboard for loans, users, partners, EMI tools, and CMS — built for secure, responsive fintech workflows.",
    image: "/images/banks-partner.png",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
    liveUrl: "https://banks-partner-c79c16.netlify.app/",
    githubUrl: "https://github.com/vikashfullstack/CapitalSession-Dashboard.git",
    accent: "#b91c1c",
    year: "Ongoing",
  },
  {
    id: "student-management-system",
    title: "Student_Management_System",
    description:
      "Developed a Student Management System with a modern and responsive UI, featuring complete CRUD operations for managing student records. Integrated REST APIs with a PostgreSQL database to ensure efficient data management and a seamless user experience.",
    longDescription:
      "Full CRUD student records with a responsive dashboard UI, REST APIs, and PostgreSQL for reliable data management.",
    image: "/images/student-management-system.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://studentmanagementsystem-tawny-ten.vercel.app/",
    githubUrl: "https://github.com/Mithlesh05/SMS-Frontend",
    accent: "#9f1239",
    year: "2024",
  },
  {
    id: "job-seeker-portal",
    title: "Job Seeker Portal",
    description:
      "A full-stack job portal that connects job seekers with employers through secure authentication, job applications, profile management, and an intuitive dashboard.",
    longDescription:
      "Built with React, Node.js, and Supabase — featuring secure auth, job listings, applications, and employer/seeker dashboards.",
    image: "/images/job-seeker-portal.png",
    tags: ["React", "Node.js", "Supabase"],
    liveUrl: "https://job-seeker-project123.netlify.app/",
    githubUrl: "https://github.com",
    accent: "#ef4444",
    year: "2024",
  },
];
