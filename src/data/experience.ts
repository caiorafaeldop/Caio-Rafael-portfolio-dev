export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-indra",
    company: "Indra Minsait",
    role: "Analista de Software",
    period: "Março de 2026 - Presente",
    description: [
      "Manutenção, evolução e desenvolvimento de funcionalidades para sistemas judiciais e governamentais do Tribunal de Justiça da Paraíba",
      "Modernização de aplicações Java legadas e desenvolvimento de novas features com Java e Angular",
      "Integração com serviços internos e externos, APIs REST e bancos de dados relacionais",
      "Atuação com SQL, Git, Scrum, TDD, debugging, code reviews e fluxos colaborativos em sistemas institucionais de grande escala",
    ],
    technologies: ["Java", "Angular", "REST APIs", "SQL", "Git", "Scrum", "TDD"],
  },
  {
    id: "exp-1",
    company: "LAKS",
    role: "Desenvolvedor Full Stack",
    period: "Maio de 2024 - Presente",
    description: [
      "Desenvolvimento de soluções com React, Typescript, Node, Prisma e PostgreSQL",
      "Consumo de APIs REST",
      "Aplicação de boas práticas de UX/UI",
      "Aplicação de metodologias ágeis como modelo de trabalho (Scrum, Kanban, XP)",
      "Atuação em Projeto voltado para gestão de Franquias e Franqueadoras",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
  },
  {
    id: "exp-2",
    company: "CTRL Play",
    role: "Professor de Programação",
    period: "Janeiro - Abril de 2025",
    description: [
      "Planejamento e aplicação de aulas para mais de 50 alunos",
      "Ensino de programação para crianças e adultos",
      "Desenvolvimento de material didático",
    ],
    technologies: [],
  },
  {
    id: "exp-3",
    company: "FUNETEC",
    role: "Professor de Programação",
    period: "Maio de 2023 - Presente",
    description: [
      "Planejamento e aplicação de aulas no Projeto CODE para turmas do 6º ao 9º ano do ensino fundamental",
      "Ênfase em lógica de programação e desenvolvimento de aplicativos de forma didática",
    ],
    technologies: [],
  },
];
