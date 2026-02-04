export interface TechCategory {
  category: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Angular", "Vue", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Prisma", "PostgreSQL", "MongoDB", "REST APIs", "Spring Boot", "Liquibase"],
  },
  {
    category: "Outras Habilidades",
    items: [
      "Versionamento Git",
      "Power BI",
      "Metodologias Ágeis",
      "Planejamento didático",
      "Comunicação",
      "Adaptabilidade",
      "Trabalho em equipe",
    ],
  },
];
