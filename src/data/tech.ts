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
      { name: "Angular", level: "advanced" },
      { name: "Vue", level: "advanced" },
      { name: "JavaScript", level: "expert" },
      { name: "TypeScript", level: "expert" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "expert" },
      { name: "Prisma", level: "advanced" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "REST APIs", level: "expert" },
    ],
  },
  {
    category: "Outras Habilidades",
    items: [
      { name: "Versionamento Git", level: "advanced" },
      { name: "Power BI", level: "intermediate" },
      { name: "Metodologias Ágeis", level: "advanced" },
      { name: "Planejamento didático", level: "advanced" },
      { name: "Comunicação", level: "expert" },
      { name: "Adaptabilidade", level: "expert" },
      { name: "Trabalho em equipe", level: "expert" },
    ],
  },
];
