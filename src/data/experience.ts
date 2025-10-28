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
    id: "exp-1",
    company: "TechCorp Solutions",
    role: "Senior Full-Stack Developer",
    period: "2023 - Presente",
    description: [
      "Liderança técnica de equipe de 5 desenvolvedores",
      "Arquitetura e desenvolvimento de aplicações enterprise",
      "Implementação de CI/CD e melhores práticas DevOps",
      "Mentoria de desenvolvedores júnior e pleno",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: "exp-2",
    company: "StartupXYZ",
    role: "Full-Stack Developer",
    period: "2021 - 2023",
    description: [
      "Desenvolvimento de MVP de produto SaaS do zero",
      "Integração com APIs de terceiros (Stripe, SendGrid, etc)",
      "Otimização de performance resultando em 40% de redução no tempo de carregamento",
      "Implementação de testes automatizados",
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Redis"],
  },
  {
    id: "exp-3",
    company: "Digital Agency Pro",
    role: "Frontend Developer",
    period: "2020 - 2021",
    description: [
      "Desenvolvimento de websites e landing pages para clientes",
      "Implementação de design systems",
      "Otimização de SEO e performance",
      "Colaboração com designers e gerentes de projeto",
    ],
    technologies: ["React", "Vue.js", "Tailwind CSS", "GSAP"],
  },
];
