export type Language = "pt" | "en";

export const translations = {
  // Header / Nav
  nav: {
    home: { pt: "Início", en: "Home" },
    about: { pt: "Sobre", en: "About" },
    project: { pt: "Vamos fazer um projeto", en: "Let's build a project" },
    projectShort: { pt: "Fazer um projeto", en: "Start a project" },
    experience: { pt: "Experiência", en: "Experience" },
    portfolio: { pt: "Portfólio", en: "Portfolio" },
    contact: { pt: "Contato", en: "Contact" },
  },

  projectCta: {
    eyebrow: {
      pt: "Pronto para começar?",
      en: "Ready to start?",
    },
    title: {
      pt: "Vamos fazer um projeto sair do papel",
      en: "Let's get a project off the ground",
    },
    description: {
      pt: "Tem uma ideia de app, precisa evoluir um produto ou reforçar o time com React Native? Me chama no WhatsApp e alinhamos escopo, prazo e próximos passos.",
      en: "Have an app idea, need to evolve a product, or reinforce your team with React Native? Message me on WhatsApp and we'll align scope, timeline and next steps.",
    },
    whatsapp: {
      pt: "Falar no WhatsApp agora",
      en: "Chat on WhatsApp now",
    },
    form: {
      pt: "Preferir o formulário",
      en: "Prefer the form",
    },
  },

  // Hero
  hero: {
    greeting: { pt: "Olá, eu sou", en: "Hi, I'm" },
    title: {
      pt: "Cristiano Borges, desenvolvedor",
      en: "Cristiano Borges, developer",
    },
    titleHighlight: { pt: "React Native Sênior", en: "Senior React Native" },
    description: {
      pt: "Freelancer e desenvolvedor <span>React Native</span> sênior para apps iOS e Android — mais de 6 anos entregando produtos estáveis, com integrações e evolução contínua. Também atuo com <span>React e Next.js</span> sob demanda remota no Brasil.",
      en: "Freelance senior <span>React Native</span> developer for iOS and Android apps — 6+ years shipping stable products with integrations and continuous evolution. I also build with <span>React and Next.js</span> for remote projects.",
    },
    primaryCta: { pt: "Falar sobre um projeto", en: "Talk about a project" },
    secondaryCta: { pt: "Ver projetos", en: "View projects" },
    aboutBtn: { pt: "Sobre mim", en: "About me" },
    findMe: { pt: "Me encontre em", en: "Find me on" },
  },

  hire: {
    subtitle: {
      pt: "Como posso ajudar",
      en: "How I can help",
    },
    title: {
      pt: "Desenvolvedor React Native freelancer para o seu produto",
      en: "Freelance React Native developer for your product",
    },
    description: {
      pt: "Se você precisa contratar um desenvolvedor React Native para criar um app, evoluir um produto existente ou reforçar o time com PJ/freelance remoto, posso assumir fretes bem definidos com comunicação clara e entrega previsível.",
      en: "If you need to hire a React Native developer to build an app, evolve an existing product, or reinforce your team with remote freelance/contract work, I can take well-scoped deliveries with clear communication.",
    },
    cta: {
      pt: "Quero contratar pelo WhatsApp",
      en: "Hire me on WhatsApp",
    },
    faqTitle: {
      pt: "Perguntas frequentes sobre contratação",
      en: "Frequently asked hiring questions",
    },
    services: [
      {
        title: {
          pt: "App React Native do zero",
          en: "React Native app from scratch",
        },
        description: {
          pt: "Ideal para startups e negócios que precisam lançar um aplicativo iOS e Android com arquitetura limpa, autenticação, APIs e publicação nas lojas.",
          en: "Ideal for startups and businesses that need to launch an iOS and Android app with clean architecture, authentication, APIs and store publishing.",
        },
      },
      {
        title: {
          pt: "Manutenção e evolução de apps",
          en: "App maintenance and evolution",
        },
        description: {
          pt: "Correção de bugs, performance, novas telas, integrações e refatoração de código em produtos React Native já em produção.",
          en: "Bug fixes, performance, new screens, integrations and refactoring for React Native products already in production.",
        },
      },
      {
        title: {
          pt: "Frontend web com React e Next.js",
          en: "Web frontend with React and Next.js",
        },
        description: {
          pt: "Painéis, landing pages e produtos web com foco em performance, SEO técnico e experiência consistente em desktop e mobile.",
          en: "Dashboards, landing pages and web products focused on performance, technical SEO and consistent desktop/mobile experience.",
        },
      },
      {
        title: {
          pt: "Consultoria e reforço de time",
          en: "Consulting and team augmentation",
        },
        description: {
          pt: "Atuação como desenvolvedor React Native sênior sob demanda (PJ ou freelance) para acelerar entregas sem abrir mão de qualidade.",
          en: "Work as a senior React Native developer on demand (contract or freelance) to accelerate delivery without sacrificing quality.",
        },
      },
    ],
    faqs: [
      {
        question: {
          pt: "Você aceita projetos freelance e PJ?",
          en: "Do you accept freelance and contractor projects?",
        },
        answer: {
          pt: "Sim. Atendo freelance, PJ e consultoria remota no Brasil, além de oportunidades CLT quando o encaixe faz sentido. O primeiro passo é conversar sobre escopo, prazo e prioridade do produto.",
          en: "Yes. I take freelance, contractor and remote consulting work in Brazil, plus full-time roles when the fit makes sense. The first step is aligning on scope, timeline and product priorities.",
        },
      },
      {
        question: {
          pt: "Que tipo de app React Native você desenvolve?",
          en: "What kind of React Native apps do you build?",
        },
        answer: {
          pt: "Apps com jornadas reais de produto: autenticação, dashboards, fluxos financeiros, operações em campo, e-commerce e integrações com APIs, Firebase e serviços nativos como biometria e geolocalização.",
          en: "Product-oriented apps: authentication, dashboards, financial flows, field operations, e-commerce and integrations with APIs, Firebase and native features like biometrics and geolocation.",
        },
      },
      {
        question: {
          pt: "Como funciona o início de um projeto?",
          en: "How does a project kickoff work?",
        },
        answer: {
          pt: "Você me conta o objetivo, o prazo e o que já existe. Eu retorno com entendimento do escopo, riscos técnicos e uma proposta de entrega. Depois alinhamos comunicação, milestones e forma de acompanhamento.",
          en: "You share the goal, timeline and what already exists. I come back with scope understanding, technical risks and a delivery proposal. Then we align communication, milestones and follow-up cadence.",
        },
      },
      {
        question: {
          pt: "Você trabalha apenas com mobile?",
          en: "Do you only work with mobile?",
        },
        answer: {
          pt: "Meu foco principal é React Native para iOS e Android, mas também desenvolvo e evoluo produtos web com React e Next.js quando o projeto precisa dos dois lados.",
          en: "My main focus is React Native for iOS and Android, but I also build and evolve web products with React and Next.js when a project needs both sides.",
        },
      },
      {
        question: {
          pt: "Qual a melhor forma de falar com você?",
          en: "What is the best way to contact you?",
        },
        answer: {
          pt: "WhatsApp para conversa rápida sobre o projeto, ou e-mail/formulário se preferir registrar o briefing por escrito. LinkedIn e GitHub também estão disponíveis para avaliação técnica.",
          en: "WhatsApp for a quick project conversation, or email/form if you prefer a written brief. LinkedIn and GitHub are also available for technical evaluation.",
        },
      },
    ],
  },

  // TextAnim section
  textAnim: {
    text: {
      pt: "Crio experiências digitais com React Native para apps mobile e com React / Next.js para web. Meu foco é entregar produtos rápidos, intuitivos e com código sustentável para evolução contínua do seu negócio.",
      en: "I create digital experiences with React Native for mobile apps and with React / Next.js for web. My focus is delivering fast, intuitive products with sustainable code for the continuous evolution of your business.",
    },
    highlightWords: {
      pt: ["React Native", "React / Next.js"],
      en: ["React Native", "React / Next.js"],
    },
  },

  // About
  about: {
    yearsExp: { pt: "anos de experiência", en: "years of experience" },
    projectsDelivered: { pt: "Projetos Entregues", en: "Projects Delivered" },
    projectsCount: { pt: "30+ projetos", en: "30+ projects" },
    subtitle: { pt: "Sobre mim", en: "About me" },
    title: {
      pt: "Desenvolvimento mobile e web",
      en: "Mobile and web development",
    },
    titleLine2: { pt: "focado em resultado", en: "focused on results" },
    description: {
      pt: "Sou desenvolvedor especializado em React Native, criando aplicativos móveis para Android e iOS há mais de 6 anos. Minha paixão é transformar ideias em apps funcionais, intuitivos e de alta performance.\n\nAo longo da minha carreira, trabalhei em projetos para startups e empresas de diferentes segmentos, sempre prezando pela qualidade do código, organização, pontualidade e boa comunicação com o time. Acredito que tecnologia é sobre pessoas, por isso busco sempre entregar soluções que realmente fazem a diferença para o usuário final.",
      en: "I'm a developer specialized in React Native, building Android and iOS apps for over 5 years. I also work with React and Next.js for web, always focused on performance, usability and sustainable code.",
    },
    card1Title: { pt: "React Native", en: "React Native" },
    card1Desc: {
      pt: "Apps iOS e Android com arquitetura limpa, integrações e foco em experiência real do usuário.",
      en: "iOS and Android apps with clean architecture, integrations and focus on real user experience.",
    },
    card2Title: { pt: "React e Next.js", en: "React and Next.js" },
    card2Desc: {
      pt: "Aplicações web modernas com SEO, componentes reutilizáveis e alta manutenibilidade.",
      en: "Modern web applications with SEO, reusable components and high maintainability.",
    },
    talkBtn: { pt: "Falar sobre projeto", en: "Talk about a project" },
    viewProjectsBtn: { pt: "Ver projetos", en: "View projects" },
    downloadCvBtn: { pt: "Baixar currículo em PDF", en: "Download resume PDF" },
    availability: {
      pt: "Disponível para CLT, PJ, freelance e consultoria. Português (nativo) e inglês (intermediário).",
      en: "Available for full-time, contractor, freelance and consulting. Portuguese (native) and English (intermediate).",
    },
  },

  // Experience / Resume
  resume: {
    experienceTitle: { pt: "Minha Experiência", en: "My Experience" },
    educationTitle: { pt: "Formação", en: "Education" },
  },

  // Skills
  skills: {
    mobileSkills: { pt: "Habilidades Mobile", en: "Mobile Skills" },
    webSkills: { pt: "Habilidades Web", en: "Web Skills" },
    responsiveUI: { pt: "UI responsiva", en: "Responsive UI" },
    advanced: { pt: "Avançado", en: "Advanced" },
    solid: { pt: "Sólido", en: "Solid" },
  },

  // Portfolio
  portfolio: {
    subtitle: { pt: "Projetos em Destaque", en: "Featured Projects" },
    title: {
      pt: "Apps e interfaces que viraram produto",
      en: "Apps and interfaces that became products",
    },
    description: {
      pt: "Alguns trabalhos desenvolvidos com foco em conversão, performance e experiência de uso em mobile e web.",
      en: "Some projects developed with focus on conversion, performance and user experience on mobile and web.",
    },
    viewProject: { pt: "Ver projeto", en: "View project" },
    showAll: { pt: "Ver todos os projetos", en: "Show all projects" },
    showLess: { pt: "Ver menos", en: "Show less" },
    roleLabel: { pt: "Meu papel", en: "My role" },
    challengeLabel: { pt: "Desafio", en: "Challenge" },
    solutionLabel: { pt: "Solução", en: "Solution" },
    resultLabel: { pt: "Resultado", en: "Result" },
    ctaAfterProject: {
      pt: "Precisa de um aplicativo com integrações e arquitetura escalável? Vamos conversar.",
      en: "Need an app with integrations and scalable architecture? Let's talk.",
    },
    all: { pt: "Todos", en: "All" },
  },

  // Expertise
  expertise: {
    subtitle: { pt: "Minhas Especialidades", en: "My Expertise" },
    title: { pt: "Soluções mobile e web", en: "Mobile and web solutions" },
    titleLine2: {
      pt: "para produtos digitais",
      en: "for digital products",
    },
    description: {
      pt: "Atuo no ciclo completo de desenvolvimento para transformar ideias em produtos robustos, com foco em usabilidade, performance e evolução contínua.",
      en: "I work on the complete development cycle to transform ideas into robust products, focused on usability, performance and continuous evolution.",
    },
    item1Title: { pt: "Apps com React Native", en: "Apps with React Native" },
    item1Desc: {
      pt: "Aplicativos mobile para iOS e Android com foco em experiência do usuário, estabilidade e performance.",
      en: "Mobile apps for iOS and Android focused on user experience, stability and performance.",
    },
    item2Title: {
      pt: "Web com React e Next.js",
      en: "Web with React and Next.js",
    },
    item2Desc: {
      pt: "Interfaces modernas, rápidas e escaláveis para produtos digitais com SEO e ótima experiência em múltiplos dispositivos.",
      en: "Modern, fast and scalable interfaces for digital products with SEO and great experience across devices.",
    },
    item3Title: {
      pt: "Integrações Fullstack",
      en: "Fullstack Integrations",
    },
    item3Desc: {
      pt: "Integração com APIs, autenticação e serviços como Firebase para transformar ideia em produto pronto para uso.",
      en: "API integration, authentication and services like Firebase to turn ideas into ready-to-use products.",
    },
  },

  // Tech Stack
  tech: {
    title: { pt: "Tecnologias", en: "Technologies" },
  },

  // Testimonials
  testimonials: {
    subtitle: { pt: "Depoimentos", en: "Testimonials" },
    title: {
      pt: "Parcerias com foco em resultado",
      en: "Partnerships focused on results",
    },
    description: {
      pt: "Feedback de clientes que confiaram no meu trabalho para tirar projetos do papel e evoluir produtos digitais com React Native, React e Next.js.",
      en: "Feedback from clients who trusted my work to bring projects to life and evolve digital products with React Native, React and Next.js.",
    },
  },

  // Contact
  contact: {
    title: { pt: "FALE COMIGO", en: "GET IN TOUCH" },
    name: { pt: "Seu nome", en: "Your name" },
    phone: { pt: "Telefone / WhatsApp", en: "Phone / WhatsApp" },
    email: { pt: "Seu e-mail", en: "Your email" },
    subject: { pt: "Assunto", en: "Subject" },
    message: {
      pt: "Conte um pouco sobre seu projeto",
      en: "Tell me about your project",
    },
    submit: { pt: "Enviar mensagem", en: "Send message" },
    sending: { pt: "Enviando...", en: "Sending..." },
    whatsappAlt: {
      pt: "Prefere falar diretamente? Envie uma mensagem pelo WhatsApp.",
      en: "Prefer to talk directly? Send a message on WhatsApp.",
    },
    whatsappCta: { pt: "Abrir WhatsApp", en: "Open WhatsApp" },
    success: {
      pt: "Mensagem enviada com sucesso!",
      en: "Message sent successfully!",
    },
    errorEmail: {
      pt: "Informe um e-mail válido.",
      en: "Please enter a valid email.",
    },
    errorSend: {
      pt: "Não foi possível enviar agora. Tente novamente.",
      en: "Could not send now. Please try again.",
    },
    errorConfig: {
      pt: "O formulário ainda não está configurado. Use o WhatsApp para falar comigo.",
      en: "The form is not configured yet. Use WhatsApp to reach me.",
    },
    errorGeneric: {
      pt: "Ocorreu um erro ao enviar sua mensagem.",
      en: "An error occurred while sending your message.",
    },
  },

  a11y: {
    skipToContent: { pt: "Pular para o conteúdo", en: "Skip to content" },
    openMenu: { pt: "Abrir menu", en: "Open menu" },
    closeMenu: { pt: "Fechar menu", en: "Close menu" },
    openSidebar: { pt: "Abrir painel lateral", en: "Open sidebar" },
    closeSidebar: { pt: "Fechar painel lateral", en: "Close sidebar" },
    homeLink: { pt: "Voltar ao início", en: "Back to home" },
    linkedin: {
      pt: "LinkedIn de Cristiano Borges",
      en: "Cristiano Borges on LinkedIn",
    },
    github: {
      pt: "GitHub de Cristiano Borges",
      en: "Cristiano Borges on GitHub",
    },
    whatsapp: {
      pt: "WhatsApp de Cristiano Borges",
      en: "Cristiano Borges on WhatsApp",
    },
    email: {
      pt: "Enviar e-mail para Cristiano Borges",
      en: "Email Cristiano Borges",
    },
    toggleLanguage: {
      pt: "Alternar idioma",
      en: "Toggle language",
    },
  },

  // Footer
  footer: {
    quickLinks: { pt: "Links rápidos", en: "Quick Links" },
    contactTitle: { pt: "Contato", en: "Contact" },
    whatsapp: { pt: "WhatsApp", en: "WhatsApp" },
    emailLabel: { pt: "E-mail", en: "Email" },
    location: { pt: "Localização", en: "Location" },
    locationValue: {
      pt: "Atendimento remoto - Brasil",
      en: "Remote service - Brazil",
    },
    newsletter: { pt: "Vamos conversar?", en: "Let's talk?" },
    newsletterDesc: {
      pt: "Me envie seu e-mail e vamos falar sobre seu app ou sistema web.",
      en: "Send me your email and let's talk about your app or web system.",
    },
    emailPlaceholder: { pt: "Seu e-mail", en: "Your email" },
    description: {
      pt: "Desenvolvedor Mobile (React Native) com experiência em produtos Android/iOS e soluções web com React e Next.js.",
      en: "Mobile Developer (React Native) with experience in Android/iOS products and web solutions with React and Next.js.",
    },
    findMe: { pt: "me encontre em", en: "find me on" },
  },

  // Copyright
  copyright: {
    rights: {
      pt: "| Todos os direitos reservados",
      en: "| All rights reserved",
    },
    terms: {
      pt: "Termos de Uso",
      en: "Terms of Use",
    },
    privacy: {
      pt: "Política de Privacidade",
      en: "Privacy Policy",
    },
  },

  // Sidebar
  sidebar: {
    title: {
      pt: "Desenvolvedor Mobile (React Native) na BRQ Digital Solutions.",
      en: "Mobile Developer (React Native) at BRQ Digital Solutions.",
    },
    description: {
      pt: "Desenvolvo apps Android e iOS com foco em estabilidade, performance e experiência do usuário, além de soluções web com React e Next.js.",
      en: "I develop Android and iOS apps focused on stability, performance and user experience, plus web solutions with React and Next.js.",
    },
  },

  // Work History (for modal)
  workHistory: {
    period: { pt: "Período", en: "Period" },
    position: { pt: "Cargo", en: "Position" },
    currently: { pt: "Atualmente", en: "Currently" },
  },

  // Education resume items
  education: {
    english: { pt: "Inglês", en: "English" },
    analysisDev: {
      pt: "Análise e Desenvolvimento de Sistemas",
      en: "Systems Analysis and Development",
    },
  },

  // Resume items
  experienceItems: {
    seniorDev: {
      pt: "Desenvolvedor React Native Senior",
      en: "Senior React Native Developer",
    },
    devRN: {
      pt: "Desenvolvedor React Native",
      en: "React Native Developer",
    },
    devFrontend: {
      pt: "Desenvolvedor Front-end",
      en: "Front-end Developer",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(
  section: Record<string, { pt: string; en: string }>,
  key: string,
  lang: Language,
): string {
  return section[key]?.[lang] ?? section[key]?.pt ?? key;
}
