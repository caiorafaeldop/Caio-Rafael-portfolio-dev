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
    items: ["Node.js", "Spring Boot", "Prisma", "PostgreSQL", "MongoDB", "Liquibase", "REST APIs"],
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
