export interface Project {
  slug: string;
  title: string;
  year: number;
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
    slug: "dashzap",
    title: "DashZap",
    year: 2024,
    shortDescription: "Dashboard completo de analytics e gestão para WhatsApp Business com visualizações em tempo real.",
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
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
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
    year: 2024,
    shortDescription: "Plataforma de captura e qualificação automática de leads com IA para otimização de conversão.",
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
      github: "https://github.com/joaosilva/leadsim",
      live: "https://leadsim.example.com",
    },
    featured: true,
  },
  {
    slug: "arcdashboard-api",
    title: "ArcDashboard API",
    year: 2023,
    shortDescription: "API RESTful robusta para gestão de dashboards customizáveis com sistema de permissões granular.",
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
