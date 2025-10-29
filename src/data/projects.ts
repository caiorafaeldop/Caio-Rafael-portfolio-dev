export interface Project {
  slug: string;
  title: string;
  year: string;
  shortDescription: string;
  longDescription?: string;
  tags: string[];
  stack: string[];
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
}

export const projects: Project[] = [
  {
    slug: "rfcc-colab",
    title: "RFCC-COLAB",
    year: 2025,
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
    stack: ["React", "Node.js", "MongoDB", "Mercado Pago", "AWS"],
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
    links: {
      github: "https://github.com/caiorafaeldop/mvp-projeto-colab-ongs",
      live: "https://rede-feminina-colab.onrender.com/",
    },
    cover: "/RFCC/Captura de tela 2025-10-25 232152.png",
    gallery: [
      "/RFCC/Captura de tela 2025-10-28 213510.png",
      "/RFCC/Captura de tela 2025-10-28 213802.png",
      "/RFCC/Captura de tela 2025-10-28 213853.png",
      "/RFCC/Captura de tela 2025-10-28 213916.png",
      "/RFCC/Captura de tela 2025-10-28 213936.png",
      "/RFCC/Captura de tela 2025-10-28 214050.png",
      "/RFCC/Captura de tela 2025-10-28 214111.png",
    ],
    featured: true,
  },
  {
    slug: "dashzap",
    title: "DashZap",
    year: "2024",
    shortDescription:
      "Dashboard completo de analytics e gestão para WhatsApp Business com visualizações em tempo real.",
    longDescription: `# DashZap

Plataforma completa de analytics e gestão para WhatsApp Business API, oferecendo insights profundos sobre conversas, automações e performance de atendimento.

## Visão Geral
Sistema empresarial que conecta múltiplas instâncias do WhatsApp Business, processando milhares de mensagens por dia e fornecendo métricas em tempo real.

## Principais Features
- Dashboard com métricas em tempo real
- Automação de respostas com IA
- Gestão de múltiplos atendentes
- Relatórios customizáveis
- Integração com CRM`,
    tags: ["Dashboard", "Analytics", "Mensageria", "Real-time"],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "WebSocket",
    ],
    responsibilities: [
      "Arquitetura da solução end-to-end",
      "Implementação do sistema de WebSocket para real-time",
      "Design e desenvolvimento do dashboard analytics",
      "Integração com WhatsApp Business API",
    ],
    results: [
      "Processamento de +50k mensagens/dia",
      "Redução de 60% no tempo de resposta",
      "Aumento de 45% na satisfação do cliente",
      "ROI positivo em 3 meses",
    ],
    links: {
      github: "https://github.com/joaosilva/dashzap",
      live: "https://dashzap.example.com",
    },
    featured: true,
  },
  {
    slug: "leadsim",
    title: "LeadSim",
    year: "2024 - 2025",
    shortDescription:
      "Plataforma de captura e gerenciamento de leads com foco na administração de franquias e franqueadoras.",
    longDescription: `# LeadSim

Sistema inteligente de captura e qualificação de leads que utiliza Machine Learning para identificar oportunidades de alta qualidade e automatizar follow-ups.

## Desafio
Empresas perdem tempo qualificando leads manualmente, resultando em baixa conversão e desperdício de recursos.

## Solução
Plataforma que captura leads de múltiplas fontes, aplica scoring com IA e automatiza o processo de qualificação e nutrição.`,
    tags: ["IA", "Lead Gen", "Automação", "SaaS"],
    stack: ["Next.js", "Python", "FastAPI", "MongoDB", "TensorFlow", "AWS"],
    responsibilities: [
      "Desenvolvimento do algoritmo de scoring com ML",
      "Arquitetura de microserviços",
      "Implementação de integrações (Facebook Ads, Google Ads, etc)",
      "Dashboard de analytics e relatórios",
    ],
    results: [
      "Aumento de 80% na qualificação de leads",
      "Redução de 50% no custo por lead qualificado",
      "Automação de 90% do processo de follow-up",
    ],
    links: {
      live: "https://leadsim.com.br/",
    },
    featured: true,
  },
  {
    slug: "arcdashboard-api",
    title: "ArcDashboard API",
    year: "2023",
    shortDescription:
      "API RESTful robusta para gestão de dashboards customizáveis com sistema de permissões granular.",
    longDescription: `# ArcDashboard API

API backend escalável que permite criar, gerenciar e compartilhar dashboards customizáveis com sistema avançado de permissões e controle de acesso.

## Arquitetura
Sistema modular com arquitetura hexagonal, facilitando manutenção e escalabilidade.

## Features Principais
- Sistema de autenticação e autorização robusto
- CRUD completo para dashboards e widgets
- Permissões granulares (visualização, edição, compartilhamento)
- Rate limiting e caching
- Documentação automática com Swagger`,
    tags: ["API", "Backend", "Microservices"],
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "JWT"],
    responsibilities: [
      "Design da arquitetura da API",
      "Implementação de sistema de autenticação",
      "Otimização de queries e caching",
      "Documentação e testes unitários",
    ],
    results: [
      "99.9% de uptime",
      "Tempo de resposta médio <100ms",
      "Suporte a 10k+ requisições/minuto",
    ],
    links: {
      github: "https://github.com/joaosilva/arcdashboard-api",
    },
    featured: true,
  },
];
