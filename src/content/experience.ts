import type { Localized } from "./types";

export type ExperienceItem = {
  duration: Localized;
  title: Localized;
  institute: Localized;
  description: Localized;
  tags: string[];
  type: Localized;
};

export const experience: ExperienceItem[] = [
  {
    duration: { pt: "junho de 2024 — atual", en: "June 2024 — present" },
    title: { pt: "Desenvolvedor React Native sênior", en: "Senior React Native developer" },
    institute: {
      pt: "BRQ Digital Solutions, alocado na Vibra Energia",
      en: "BRQ Digital Solutions, allocated at Vibra Energia",
    },
    description: {
      pt: "Desenvolvimento e evolução de aplicativo corporativo de larga escala, com foco em estabilidade, performance e integração com APIs internas. A atuação inclui melhorias contínuas, arquitetura e entregas usadas na operação de equipes em campo.",
      en: "Development and evolution of a large-scale corporate app, focused on stability, performance and internal API integration. The work includes continuous improvements, architecture and deliveries used by field teams.",
    },
    tags: ["React Native", "TypeScript", "REST APIs", "CI/CD"],
    type: { pt: "CLT", en: "Full-time" },
  },
  {
    duration: { pt: "novembro de 2023 — junho de 2024", en: "November 2023 — June 2024" },
    title: { pt: "Desenvolvedor React Native", en: "React Native developer" },
    institute: { pt: "Pontotel", en: "Pontotel" },
    description: {
      pt: "Manutenção e evolução de aplicativo de ponto digital, com correção de falhas críticas e funcionalidades de biometria, geolocalização e suporte offline.",
      en: "Maintenance and evolution of a digital time-tracking app, including critical fixes and features for biometrics, geolocation and offline support.",
    },
    tags: ["React Native", "Offline-first", "Biometria"],
    type: { pt: "CLT", en: "Full-time" },
  },
  {
    duration: { pt: "agosto de 2023 — fevereiro de 2024", en: "August 2023 — February 2024" },
    title: { pt: "Desenvolvedor React Native", en: "React Native developer" },
    institute: { pt: "Parceiro da Construção (freelancer)", en: "Parceiro da Construção (freelance)" },
    description: {
      pt: "Desenvolvimento de uma plataforma mobile educacional, da concepção à entrega, com atenção a usabilidade e a uma arquitetura possível de evoluir.",
      en: "Development of an educational mobile platform, from concept to delivery, with attention to usability and an architecture that can evolve.",
    },
    tags: ["React Native", "Firebase", "UX"],
    type: { pt: "Freelancer", en: "Freelance" },
  },
  {
    duration: { pt: "agosto de 2021 — setembro de 2023", en: "August 2021 — September 2023" },
    title: { pt: "Desenvolvedor React Native", en: "React Native developer" },
    institute: { pt: "Digital Business", en: "Digital Business" },
    description: {
      pt: "Aplicações mobile e web em contextos de banking, e-commerce e sistemas corporativos. O trabalho cobriu arquitetura, integração de APIs e componentes reutilizáveis entre projetos.",
      en: "Mobile and web applications across banking, e-commerce and corporate systems. The work covered architecture, API integration and reusable components across projects.",
    },
    tags: ["React Native", "React", "Node.js", "PostgreSQL"],
    type: { pt: "CLT", en: "Full-time" },
  },
  {
    duration: { pt: "novembro de 2020 — agosto de 2021", en: "November 2020 — August 2021" },
    title: { pt: "Desenvolvedor React Native", en: "React Native developer" },
    institute: { pt: "Velty", en: "Velty" },
    description: {
      pt: "Aplicativos mobile com integração de APIs e otimização contínua, além de projetos de e-commerce nas plataformas VTEX e Tray Corp.",
      en: "Mobile apps with API integration and continuous optimization, plus e-commerce projects on VTEX and Tray Corp.",
    },
    tags: ["React Native", "VTEX", "Tray Corp"],
    type: { pt: "CLT", en: "Full-time" },
  },
  {
    duration: { pt: "abril de 2019 — novembro de 2020", en: "April 2019 — November 2020" },
    title: { pt: "Desenvolvedor full stack", en: "Full-stack developer" },
    institute: { pt: "BASE", en: "BASE" },
    description: {
      pt: "Interfaces web com React, integração com APIs e atenção a performance, responsividade e clareza dos fluxos.",
      en: "Web interfaces with React, API integration and attention to performance, responsiveness and clear flows.",
    },
    tags: ["React", "JavaScript", "SCSS"],
    type: { pt: "CLT", en: "Full-time" },
  },
];

export const education: ExperienceItem[] = [
  {
    duration: { pt: "setembro de 2025 — novembro de 2026", en: "September 2025 — November 2026" },
    title: { pt: "Inglês", en: "English" },
    institute: { pt: "Wizard by Pearson", en: "Wizard by Pearson" },
    description: {
      pt: "Curso de inglês com foco em conversação e escrita profissional para o mercado de tecnologia.",
      en: "English course focused on conversation and professional writing for the technology market.",
    },
    tags: ["Inglês"],
    type: { pt: "Formação", en: "Education" },
  },
  {
    duration: { pt: "2021 — 2023", en: "2021 — 2023" },
    title: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" },
    institute: { pt: "UniRitter", en: "UniRitter" },
    description: {
      pt: "Graduação tecnológica em engenharia de software, banco de dados, redes e programação.",
      en: "Technology degree covering software engineering, databases, networking and programming.",
    },
    tags: ["Engenharia de software"],
    type: { pt: "Formação", en: "Education" },
  },
];
