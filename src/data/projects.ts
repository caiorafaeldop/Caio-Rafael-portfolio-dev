export interface Learning {
  skill: string;
  category: 'hard' | 'soft' | 'methodology';
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  shortDescription: string;
  longDescription?: string;
  tags: string[];
  stack: string[];
  learnings: Learning[];
  responsibilities?: string[];
  results?: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  cover?: string;
  gallery?: string[];
  featured?: boolean;
  brandColor?: {
    light: string;
    dark: string;
  };
}

export const projects: Project[] = [
  {
    slug: "indra-minsait",
    title: "Indra Minsait",
    year: "2026 - Presente",
    shortDescription:
      "Atuação como Analista de Software em sistemas judiciais e governamentais para o Tribunal de Justiça da Paraíba.",
    longDescription: `# Indra Minsait

Atuação como Analista de Software em projetos de sistemas judiciais e governamentais vinculados ao Tribunal de Justiça da Paraíba, uma instituição do Poder Judiciário estadual brasileiro.

## Desafio
Manter, modernizar e evoluir aplicações institucionais de grande escala, incluindo sistemas legados em Java, integrações entre serviços e fluxos internos críticos para operação pública.

## Solução
Desenvolvimento e manutenção de funcionalidades com Java e Angular, integração com serviços internos e externos, melhoria de confiabilidade e colaboração em rotinas de engenharia como code review, debugging, TDD e metodologias ágeis.`,
    tags: ["Institucional", "Governo", "Justiça", "Sistemas Legados"],
    stack: ["Java", "Angular", "REST APIs", "SQL", "Git", "Scrum", "TDD"],
    learnings: [
      { skill: "Java", category: "hard" },
      { skill: "Angular", category: "hard" },
      { skill: "REST APIs", category: "hard" },
      { skill: "SQL", category: "hard" },
      { skill: "Git", category: "hard" },
      { skill: "Scrum", category: "methodology" },
      { skill: "TDD", category: "methodology" },
      { skill: "Code Review", category: "methodology" },
    ],
    responsibilities: [
      "Manutenção e modernização de aplicações Java legadas",
      "Desenvolvimento de novas funcionalidades com Java e Angular",
      "Integração com serviços internos e externos",
      "Apoio à confiabilidade dos sistemas e melhoria de fluxos internos",
      "Participação em debugging, TDD, code reviews e rotinas ágeis",
    ],
    results: [
      "Evolução contínua de sistemas institucionais de grande escala",
      "Maior sustentação técnica para aplicações judiciais e governamentais",
      "Colaboração em processos de engenharia voltados à qualidade e manutenção",
    ],
    cover: "/INDRA/1.jpg",
    gallery: [
      "/INDRA/2.webp",
    ],
    featured: true,
    brandColor: {
      light: "#dc2626",
      dark: "#f87171"
    },
  },
  {
    slug: "connecta-hub",
    title: "Connecta Hub",
    year: "2026",
    shortDescription:
      "Plataforma gamificada de gerenciamento interno para organizar projetos, equipes e entregas da comunidade acadêmica do Centro de Informática da UFPB.",
    longDescription: `# Connecta Hub

O Connecta Hub é uma ferramenta criada para apoiar a comunidade acadêmica do Centro de Informática da UFPB no gerenciamento interno de projetos universitários.

## Desafio
Projetos acadêmicos costumam envolver muitas pessoas, prazos, demandas e responsabilidades espalhadas em conversas, planilhas e documentos soltos. Isso dificulta o acompanhamento das entregas, a visibilidade do progresso e o engajamento dos participantes.

## Solução
Uma plataforma centralizada e gamificada para organizar projetos, acompanhar atividades, dar mais clareza aos fluxos internos e transformar a participação dos membros em uma experiência mais visual, colaborativa e motivadora.`,
    tags: ["Educação", "Gestão", "Gamificação", "Universidade"],
    stack: ["React", "TypeScript", "TailwindCSS", "UX/UI Design", "Gamificação"],
    learnings: [
      { skill: "React", category: "hard" },
      { skill: "TypeScript", category: "hard" },
      { skill: "TailwindCSS", category: "hard" },
      { skill: "UX/UI Design", category: "hard" },
      { skill: "Gamificação", category: "methodology" },
      { skill: "Gestão de Projetos", category: "methodology" },
    ],
    responsibilities: [
      "Desenvolvimento da plataforma de gerenciamento interno",
      "Criação de fluxos para acompanhamento de projetos acadêmicos",
      "Aplicação de elementos de gamificação para engajamento da comunidade",
      "Construção de interface responsiva e voltada à rotina universitária",
    ],
    results: [
      "Centralização do controle de projetos em um ambiente único",
      "Maior clareza sobre atividades, responsabilidades e progresso das equipes",
      "Experiência mais engajante para membros da comunidade acadêmica",
    ],
    links: {
      live: "https://connectahub.dev.br/",
    },
    cover: "/CONNECTA/1.png",
    gallery: [
      "/CONNECTA/2.png",
      "/CONNECTA/3.png",
      "/CONNECTA/4.png",
      "/CONNECTA/5.png",
      "/CONNECTA/6.png",
      "/CONNECTA/7.png",
    ],
    featured: true,
    brandColor: {
      light: "#7c3aed",
      dark: "#a78bfa"
    },
  },
  {
    slug: "pet-de-todos",
    title: "Pet de Todos",
    year: "2024 - Presente",
    shortDescription:
      "Plano de saúde pet do Grupo Cartão de Todos com consultas, exames, cirurgias, vacinas e teleorientação 24h para cães e gatos com cobertura nacional.",
    longDescription: `# Pet de Todos

Plataforma digital desenvolvida para o plano de saúde pet mais acessível do Brasil, parte do ecossistema do Grupo Cartão de Todos.

## Desafio
Criar uma experiência digital fluida para o gerenciamento de planos de saúde pet, incluindo jornada de contratação, telemedicina veterinária e gestão de reembolsos.

## Solução
Landing page moderna e conversiva com integração ao sistema de jornada de contratação, apresentação clara das coberturas e acesso rápido aos serviços.`,
    tags: ["HealthTech", "Pet", "Assinatura", "Conversão"],
    stack: ["React", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "Scrum", "Kanban", "Azure"],
    learnings: [
      { skill: "React", category: "hard" },
      { skill: "TypeScript", category: "hard" },
      { skill: "Node.js", category: "hard" },
      { skill: "Prisma", category: "hard" },
      { skill: "SQL", category: "hard" },
      { skill: "Git Flow", category: "methodology" },
      { skill: "Scrum", category: "methodology" },
      { skill: "Kanban", category: "methodology" },
    ],
    responsibilities: [
      "Desenvolvimento da landing page institucional",
      "Otimização de conversão e UX",
      "Integração com sistema de contratação",
      "Design responsivo e acessível",
    ],
    results: [
      "Planos a partir de R$ 19,90/mês com cobertura nacional",
      "Telemedicina veterinária 24h disponível",
      "Interface clara sem taxas escondidas",
    ],
    links: {
      live: "https://nacional.petdetodos.com.br/",
    },
    cover: "/PETDETODOS/1.png",
    gallery: [
      "/PETDETODOS/4.png",
    ],
    featured: true,
    brandColor: {
      light: "#ea580c",
      dark: "#fb923c"
    },
  },
  {
    slug: "leadsim",
    title: "LeadSim",
    year: "2024 - 2025",
    shortDescription:
      "Plataforma SaaS de CRM e gestão de leads que centraliza clientes, propostas, contratos, financeiro e automação de marketing em um só lugar.",
    longDescription: `# LeadSim

Sistema completo de gestão de leads e CRM desenvolvido para simplificar e centralizar todas as operações comerciais de empresas e franquias.

## Desafio
Empresas enfrentam o caos de múltiplas planilhas e sistemas desconectados para gerenciar CRM, financeiro e automação, resultando em perda de leads e baixa produtividade.

## Solução
Plataforma integrada que unifica:
- Controle e qualificação de leads
- Geração de contratos e propostas
- Gestão financeira
- Automação de marketing e follow-ups
- Cadastros e oportunidades centralizados`,
    tags: ["SaaS", "CRM", "Automação", "Gestão"],
    stack: ["React", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "Scrum", "Kanban", "Azure"],
    learnings: [
      { skill: "React", category: "hard" },
      { skill: "TypeScript", category: "hard" },
      { skill: "Node.js", category: "hard" },
      { skill: "Prisma", category: "hard" },
      { skill: "SQL/PostgreSQL", category: "hard" },
      { skill: "Git Flow", category: "methodology" },
      { skill: "Scrum", category: "methodology" },
      { skill: "Kanban", category: "methodology" },
      { skill: "Metodologias Ágeis", category: "methodology" },
    ],
    responsibilities: [
      "Arquitetura full-stack da plataforma SaaS",
      "Desenvolvimento do sistema de leads e CRM",
      "Implementação de automações e integrações",
      "Dashboard de analytics e relatórios",
    ],
    results: [
      "Centralização completa de operações comerciais",
      "Eliminação de múltiplas planilhas e sistemas",
      "Automação inteligente de nutrição de leads",
    ],
    links: {
      live: "https://leadsim.com.br/",
    },
    cover: "/LEADSIM/1.png",
    gallery: [
      "/LEADSIM/4.png",
    ],
    featured: true,
    brandColor: {
      light: "#2563eb",
      dark: "#60a5fa"
    },
  },
  {
    slug: "rfcc-colab",
    title: "RFCC-COLAB",
    year: "2025",
    shortDescription:
      "Plataforma voluntária para a Rede Feminina de Combate ao Câncer focada em aumentar arrecadações através de doações, e-commerce e assinaturas recorrentes.",
    longDescription: `# RFCC-COLAB

Plataforma desenvolvida de forma voluntária para a Rede Feminina de Combate ao Câncer com o objetivo de aumentar a arrecadação e ampliar o alcance da instituição.

## Desafio
A instituição enfrentava dificuldades para gerenciar doações e manter um fluxo constante de arrecadação para sustentar seus projetos de apoio a pacientes com câncer.

## Solução
Desenvolvimento de uma plataforma integrada com três pilares principais:
- Sistema de doações online com múltiplas formas de pagamento
- E-commerce para venda de produtos institucionais
- Programa de assinatura recorrente para doadores mensais`,
    tags: ["Voluntariado", "E-commerce", "Doações", "Impacto Social"],
    stack: ["React", "Node.js", "MongoDB", "Mercado Pago", "Render"],
    learnings: [
      { skill: "Clean Architecture", category: "hard" },
      { skill: "MongoDB (NoSQL)", category: "hard" },
      { skill: "DevOps", category: "hard" },
      { skill: "AWS", category: "hard" },
      { skill: "CI/CD", category: "methodology" },
      { skill: "Deploy em Produção", category: "hard" },
      { skill: "Integrações de Pagamento", category: "hard" },
    ],
    responsibilities: [
      "Desenvolvimento full-stack da plataforma",
      "Implementação do sistema de pagamentos recorrentes",
      "Integração com gateway de pagamentos",
      "Criação do e-commerce e sistema de gestão de estoque",
    ],
    results: [
      "Aumento na arrecadação mensal através de assinaturas recorrentes",
      "Crescimento expressivo na base de doadores com a adição de novas formas de pagamento",
      "Nova fonte de renda com operações de comércio digital dentro da plataforma",
    ],
    links: { live: "https://rede-feminina-colab.onrender.com/",
    },
    cover: "/RFCC/1.png",
    gallery: [
      "/RFCC/2.png",
      "/RFCC/3.png",
      "/RFCC/4.png",
      "/RFCC/5.png",
      "/RFCC/6.png",
    ],
    featured: true,
    brandColor: {
      light: "#db2777",
      dark: "#f472b6"
    },
  },
  {
    slug: "colab-ufpb",
    title: "Núcleo Colab UFPB",
    year: "2024 - 2025",
    shortDescription:
      "Plataforma institucional do Núcleo de Inovação e Empreendedorismo da UFPB, conectando startups ao ecossistema universitário de incubação.",
    longDescription: `# Núcleo Colab UFPB

Portal institucional desenvolvido para o Núcleo de Inovação e Empreendedorismo da Universidade Federal da Paraíba, promovendo a conexão entre startups, pesquisadores e o mercado.

## Desafio
O núcleo precisava de uma presença digital profissional para divulgar seus programas de incubação, atrair novos empreendedores e conectar a comunidade acadêmica ao ecossistema de inovação.

## Solução
Desenvolvimento de uma plataforma moderna que apresenta:
- Programas de incubação e pré-incubação
- Portfólio de startups incubadas
- Informações sobre mentoria e recursos disponíveis
- Formulários de inscrição para novos projetos`,
    tags: ["Institucional", "Educação", "Inovação", "Startups"],
    stack: ["React", "TypeScript", "NestJS", "MongoDB", "TailwindCSS"],
    learnings: [
      { skill: "Liderança de Projeto", category: "soft" },
      { skill: "Empreendedorismo", category: "soft" },
      { skill: "Comunicação", category: "soft" },
      { skill: "Gestão de Equipe", category: "soft" },
      { skill: "Inovação", category: "soft" },
      { skill: "React", category: "hard" },
      { skill: "TypeScript", category: "hard" },
    ],
    responsibilities: [
      "Liderança do projeto de desenvolvimento",
      "Desenvolvimento do site institucional",
      "Design de interface moderna e responsiva",
      "Implementação de formulários de inscrição",
      "Integração com sistemas do núcleo",
    ],
    results: [
      "Presença digital profissional para o núcleo",
      "Maior visibilidade do programa de incubação",
      "Facilidade de inscrição para novos empreendedores",
    ],
    links: {
      live: "https://colab-site.onrender.com/",
    },
    cover: "/COLAB/1.png",
    gallery: [
      "/COLAB/2.png",
      "/COLAB/3.png",
      "/COLAB/4.jpeg",
      "/COLAB/5.jpeg",
    ],
    featured: true,
    brandColor: {
      light: "#dc2626",
      dark: "#f87171"
    },
  },
  {
    slug: "paulo-maia-advocacia",
    title: "Paulo Maia Advocacia",
    year: "2024",
    shortDescription:
      "Site institucional para escritório de advocacia especializado em Direito Trabalhista com mais de 30 anos de experiência.",
    longDescription: `# Paulo Maia Advocacia

Site institucional desenvolvido para escritório de advocacia especializado em Direito do Trabalho, apresentando de forma profissional os serviços oferecidos tanto para trabalhadores quanto para empresas.

## Desafio
O escritório precisava de uma presença digital que transmitisse credibilidade, excelência e ética, alinhada com mais de 30 anos de experiência na área trabalhista.

## Solução
Site elegante e profissional que destaca:
- Áreas de atuação especializadas
- Experiência e credenciais do advogado
- Formulário de contato para consultas
- Design sóbrio e profissional adequado ao segmento jurídico`,
    tags: ["Institucional", "Advocacia", "Direito Trabalhista", "Landing Page"],
    stack: ["React", "TypeScript", "NestJS", "MongoDB", "TailwindCSS"],
    learnings: [
      { skill: "React", category: "hard" },
      { skill: "TypeScript", category: "hard" },
      { skill: "SEO", category: "hard" },
      { skill: "UX/UI Design", category: "hard" },
    ],
    responsibilities: [
      "Desenvolvimento do site institucional",
      "Design elegante e profissional",
      "Otimização SEO para advogados",
      "Formulário de captação de leads",
    ],
    results: [
      "Presença digital profissional estabelecida",
      "Maior visibilidade online para captação de clientes",
      "Design que transmite confiança e credibilidade",
    ],
    links: {
      live: "https://paulomaiaadv.com.br/",
    },
    cover: "/PAULOMAIA/1.png",
    gallery: [
      "/PAULOMAIA/2.png",
      "/PAULOMAIA/3.png",
      "/PAULOMAIA/4.png",
    ],
    featured: true,
    brandColor: {
      light: "#b45309",
      dark: "#fbbf24"
    },
  },
];

