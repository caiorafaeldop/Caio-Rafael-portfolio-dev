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
    items: ["Java", "Spring Boot", "Node.js", "Prisma", "PostgreSQL", "SQL", "MongoDB", "Liquibase", "REST APIs"],
  },
  {
    category: "Outras Habilidades",
    items: [
      "Versionamento Git",
      "Metodologias Ágeis",
      "Scrum",
      "TDD",
      "Code Review",
      "Debugging",
      "Planejamento didático",
      "Comunicação",
      "Adaptabilidade",
      "Trabalho em equipe",
      "Power BI",
    ],
  },
];
