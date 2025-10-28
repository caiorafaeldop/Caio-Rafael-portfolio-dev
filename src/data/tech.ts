export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  level?: "expert" | "advanced" | "intermediate";
}

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Vue.js", level: "advanced" },
      { name: "Framer Motion", level: "advanced" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "expert" },
      { name: "Express", level: "expert" },
      { name: "PostgreSQL", level: "expert" },
      { name: "MongoDB", level: "advanced" },
      { name: "Redis", level: "advanced" },
      { name: "Python", level: "intermediate" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", level: "advanced" },
      { name: "AWS", level: "advanced" },
      { name: "Git", level: "expert" },
      { name: "CI/CD", level: "advanced" },
      { name: "Vercel", level: "expert" },
      { name: "Linux", level: "advanced" },
    ],
  },
];
