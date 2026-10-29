import type { Localized } from "./types";

export const ui = {
  skip: { pt: "Ir para o conteúdo", en: "Skip to content" },
  brandAria: { pt: "Cristiano Borges — início", en: "Cristiano Borges — home" },
  navAria: { pt: "Navegação principal", en: "Main navigation" },
  langToEn: { pt: "Mudar para inglês", en: "Switch to Portuguese" },
  openMenu: { pt: "Abrir menu", en: "Open menu" },
  closeMenu: { pt: "Fechar menu", en: "Close menu" },
  nav: {
    work: { pt: "Projetos", en: "Work" },
    services: { pt: "Serviços", en: "Services" },
    process: { pt: "Como funciona", en: "How it works" },
    career: { pt: "Carreira", en: "Career" },
    quote: { pt: "Solicitar orçamento", en: "Request a quote" },
  },
  stickyCta: { pt: "Orçamento", en: "Quote" },
  footerRemote: {
    pt: "Atendimento remoto — Porto Alegre, RS, e todo o Brasil.",
    en: "Remote delivery — Porto Alegre, Brazil, and nationwide.",
  },
  consent: {
    text: {
      pt: "Se você aceitar, o site poderá registrar eventos de página e de contato para eu entender o que funciona. Nada é enviado antes da sua escolha.",
      en: "If you accept, the site may record page and contact events so I can see what works. Nothing is sent before you choose.",
    },
    accept: { pt: "Aceitar analytics", en: "Accept analytics" },
    deny: { pt: "Recusar", en: "Decline" },
  },
  notFound: {
    title: { pt: "Página não encontrada", en: "Page not found" },
    text: {
      pt: "Esse endereço não existe neste site. Volte à página inicial, veja os serviços ou peça um orçamento.",
      en: "This address does not exist on this site. Go back home, browse services or request a quote.",
    },
    home: { pt: "Ir para o início", en: "Go to the homepage" },
  },
};

export const homeCopy = {
  hero: {
    eyebrow: {
      pt: "Engenharia de software · Porto Alegre e remoto no Brasil",
      en: "Software engineering · Porto Alegre and remote across Brazil",
    },
    titleA: { pt: "Desenvolvimento de software", en: "Custom software" },
    titleB: { pt: "sob medida.", en: "development." },
    lead: {
      pt: "Transformo suas ideias em aplicativos, sites e sistemas de alto nível.",
      en: "I turn your ideas into high-quality apps, websites and systems.",
    },
    description: {
      pt: "Desenvolvedor de software sênior especializado em criar produtos digitais escaláveis para empresas, startups e empreendedores. React Native, React, Next.js, Angular, TypeScript e integrações — com o foco em prazo, clareza e um produto que dá para usar.",
      en: "Senior software developer specialized in scalable digital products for companies, startups and founders. React Native, React, Next.js, Angular, TypeScript and integrations — with a focus on timeline, clarity and software people can actually use.",
    },
    primary: { pt: "Solicitar orçamento", en: "Request a quote" },
    secondary: { pt: "Conhecer projetos", en: "See selected work" },
    recruiter: { pt: "Sou recrutador — ver carreira", en: "I'm a recruiter — see career" },
    availability: { pt: "Disponível para novos projetos", en: "Available for new projects" },
    chips: ["React Native", "React & Next.js", "Sistemas SaaS"],
  },
  journeys: {
    kicker: { pt: "Por onde começar", en: "Where to start" },
    title: { pt: "Duas jornadas. Um mesmo critério de entrega.", en: "Two journeys. The same delivery standard." },
    hire: {
      title: { pt: "Quero contratar um serviço", en: "I want to hire a service" },
      text: {
        pt: "Aplicativos, sites, sistemas e SaaS. Você não precisa entender a stack para começar: o que importa é o problema, o prazo e o recorte da primeira entrega.",
        en: "Apps, websites, systems and SaaS. You do not need to understand the stack to start: what matters is the problem, the timeline and the first slice of delivery.",
      },
      cta: { pt: "Ver serviços e pedir orçamento", en: "See services and request a quote" },
    },
    recruiter: {
      title: { pt: "Sou recrutador", en: "I'm a recruiter" },
      text: {
        pt: "Experiência, stack e trajetória para quem avalia senioridade. Currículo, empresas e o tipo de produto em que atuei.",
        en: "Experience, stack and career path for anyone assessing seniority. Résumé, companies and the kind of product I have worked on.",
      },
      cta: { pt: "Ver experiência e CV", en: "See experience and CV" },
    },
  },
  proof: {
    lead: {
      pt: "Experiência de produto aplicada a desafios reais",
      en: "Product experience applied to real-world work",
    },
    items: [
      { value: "6+", label: { pt: "anos criando produtos", en: "years building products" } },
      { value: "Mobile + web", label: { pt: "apps, sites e sistemas", en: "apps, sites and systems" } },
      { value: "12", label: { pt: "produtos no portfólio", en: "products in the portfolio" } },
      { value: "Remoto", label: { pt: "Porto Alegre e todo o Brasil", en: "Porto Alegre and all of Brazil" } },
    ],
  },
  projects: {
    kicker: { pt: "Provas de produto", en: "Product proof" },
    title: { pt: "Sistemas reais, com contexto comercial.", en: "Real systems, with commercial context." },
    text: {
      pt: "Marketplace, operação em campo, fintech e SaaS. Cada case explica o problema, a minha participação e o que foi entregue — sem métricas inventadas.",
      en: "Marketplace, field operations, fintech and SaaS. Each case explains the problem, my role and what shipped — without invented metrics.",
    },
    all: { pt: "Ver todos os projetos", en: "See all projects" },
    role: { pt: "Participação", en: "Role" },
    caseCta: { pt: "Ver case", en: "Read case" },
  },
  services: {
    kicker: { pt: "O que você pode contratar", en: "What you can hire" },
    title: { pt: "Serviços de engenharia de software.", en: "Software engineering services." },
    text: {
      pt: "Do aplicativo ao sistema interno. A especialidade mais profunda é React Native; o comercial cobre web, SaaS e consultoria com a mesma responsabilidade de entrega.",
      en: "From the app to the internal system. The deepest specialty is React Native; commercially I also cover web, SaaS and consulting with the same delivery ownership.",
    },
    cta: { pt: "Abrir página do serviço", en: "Open service page" },
  },
  process: {
    kicker: { pt: "Contratação", en: "Hiring" },
    title: { pt: "Como um projeto entra na agenda.", en: "How a project gets onto the calendar." },
    text: {
      pt: "Você chega com um problema. Eu devolvo um recorte, um caminho e uma forma de acompanhar o que está sendo feito.",
      en: "You arrive with a problem. I return a slice, a path and a way to follow what is being built.",
    },
    steps: [
      {
        number: "01",
        title: { pt: "Conversa e recorte", en: "Conversation and slice" },
        text: { pt: "Objetivo, prazo, o que já existe e o que precisa existir na primeira versão utilizável.", en: "Goal, timeline, what already exists and what the first usable version must include." },
      },
      {
        number: "02",
        title: { pt: "Proposta", en: "Proposal" },
        text: { pt: "Escopo, formato (projeto, horas ou mensal) e o que fica de fora de propósito.", en: "Scope, format (project, hourly or retainer) and what is intentionally left out." },
      },
      {
        number: "03",
        title: { pt: "Construção visível", en: "Visible construction" },
        text: { pt: "Ciclos curtos, demonstrações e comunicação direta. Sem caixa-preta.", en: "Short cycles, demos and direct communication. No black box." },
      },
      {
        number: "04",
        title: { pt: "Entrega e evolução", en: "Delivery and evolution" },
        text: { pt: "Publicação, passagem de contexto e, se fizer sentido, continuidade.", en: "Release, handover and, if it makes sense, continuity." },
      },
    ],
  },
  about: {
    kicker: { pt: "Sobre", en: "About" },
    quote: {
      pt: "Código é parte da entrega. Clareza, autonomia e senso de produto são o que fazem um projeto avançar.",
      en: "Code is part of the delivery. Clarity, ownership and product sense are what move a project forward.",
    },
    text: {
      pt: "Sou Cristiano Borges Vieira, engenheiro de software sênior em Porto Alegre. Atuo com aplicações mobile, plataformas web, sistemas corporativos e produtos digitais. A especialidade mais longa é React Native; também entrego React, Next.js, Angular, TypeScript, Firebase e integrações.",
      en: "I am Cristiano Borges Vieira, a senior software engineer in Porto Alegre. I work on mobile apps, web platforms, corporate systems and digital products. The longest specialty is React Native; I also deliver React, Next.js, Angular, TypeScript, Firebase and integrations.",
    },
    points: {
      pt: ["Comunicação direta", "Visão de produto", "Engenharia sustentável"],
      en: ["Direct communication", "Product mindset", "Sustainable engineering"],
    },
    careerCta: { pt: "Experiência completa e currículo", en: "Full experience and résumé" },
  },
  faq: {
    kicker: { pt: "Perguntas frequentes", en: "Frequently asked" },
    title: { pt: "Antes de pedirmos um orçamento.", en: "Before we request a quote." },
  },
  contact: {
    kicker: { pt: "Orçamento", en: "Quote" },
    title: {
      pt: "Conte um pouco sobre o seu projeto.",
      en: "Tell me a little about your project.",
    },
    text: {
      pt: "Formulário ou WhatsApp. Quanto mais contexto, mais objetiva fica a primeira resposta.",
      en: "Form or WhatsApp. The more context, the more focused the first reply.",
    },
  },
};

export const homeFaqs: { q: Localized; a: Localized }[] = [
  {
    q: { pt: "Que tipo de projeto você assume?", en: "What kind of project do you take on?" },
    a: { pt: "Aplicativos iOS e Android, sites profissionais, sistemas web, SaaS e consultoria para modernizar o que já existe. React Native é a especialidade mais profunda; web e integrações entram quando o produto pede.", en: "iOS and Android apps, professional websites, web systems, SaaS and consulting to modernize what already exists. React Native is the deepest specialty; web and integrations come in when the product needs them." },
  },
  {
    q: { pt: "Eu preciso entender React Native para contratar?", en: "Do I need to understand React Native to hire you?" },
    a: { pt: "Não. Empresas contratam um resultado: um aplicativo, um site, um sistema ou um produto recorrente. A stack é ferramenta. Na conversa de orçamento falamos de problema, prazo e recorte.", en: "No. Companies hire an outcome: an app, a website, a system or a recurring product. The stack is a tool. In the quote conversation we talk about the problem, the timeline and the slice." },
  },
  {
    q: { pt: "Como funciona o orçamento?", en: "How does quoting work?" },
    a: { pt: "Você descreve o objetivo, o tipo de projeto e o prazo. Eu retorno com perguntas objetivas e uma proposta de recorte. Não há tabela pública de preço porque o esforço muda com o que já existe.", en: "You describe the goal, the project type and the timeline. I reply with focused questions and a proposed slice. There is no public price table because effort changes with what already exists." },
  },
  {
    q: { pt: "Você trabalha por projeto ou por período?", en: "Do you work per project or per period?" },
    a: { pt: "Os dois. Escopo fechado para entregas definidas; hora ou mensal para evolução e reforço de time.", en: "Both. Fixed scope for defined deliveries; hourly or monthly for evolution and team support." },
  },
  {
    q: { pt: "Atende só Porto Alegre?", en: "Do you only work in Porto Alegre?" },
    a: { pt: "Estou em Porto Alegre, no Rio Grande do Sul, e atendo remoto em todo o Brasil. Reuniões presenciais só quando o projeto pede e for viável.", en: "I am based in Porto Alegre, Rio Grande do Sul, and work remotely across Brazil. In-person meetings only when the project needs them and they are feasible." },
  },
];

export const quoteCopy = {
  title: { pt: "Solicitar orçamento", en: "Request a quote" },
  lead: {
    pt: "Descreva o que você precisa construir ou destravar. Eu respondo com perguntas objetivas e um próximo passo.",
    en: "Describe what you need to build or unblock. I reply with focused questions and a next step.",
  },
  name: { pt: "Nome", en: "Name" },
  email: { pt: "E-mail", en: "Email" },
  whatsapp: { pt: "WhatsApp", en: "WhatsApp" },
  projectType: { pt: "Tipo de projeto", en: "Project type" },
  budget: { pt: "Investimento aproximado (opcional)", en: "Approximate budget (optional)" },
  timeline: { pt: "Prazo desejado", en: "Desired timeline" },
  description: { pt: "Descrição do projeto", en: "Project description" },
  privacy: {
    pt: "Autorizo o contato sobre este orçamento por e-mail ou WhatsApp.",
    en: "I agree to be contacted about this quote by email or WhatsApp.",
  },
  submit: { pt: "Enviar orçamento", en: "Send quote request" },
  sending: { pt: "Enviando…", en: "Sending…" },
  whatsappSend: { pt: "Enviar pelo WhatsApp", en: "Send via WhatsApp" },
  success: {
    pt: "Recebi o pedido. Respondo em breve pelo canal que você indicou.",
    en: "I received the request. I will reply shortly on the channel you shared.",
  },
  errorEmail: { pt: "Informe um e-mail válido.", en: "Please enter a valid email." },
  errorConfig: {
    pt: "O envio por e-mail não está configurado neste ambiente. Use o WhatsApp — a mensagem já vai preenchida.",
    en: "Email sending is not configured in this environment. Use WhatsApp — the message is already filled in.",
  },
  errorSend: { pt: "Não foi possível enviar. Tente o WhatsApp.", en: "Could not send. Please try WhatsApp." },
  errorGeneric: { pt: "Algo falhou no envio. Tente novamente ou use o WhatsApp.", en: "Sending failed. Try again or use WhatsApp." },
  types: {
    pt: [
      "Aplicativo iOS/Android",
      "Site profissional",
      "Sistema web",
      "SaaS / produto digital",
      "React Native / reforço de time",
      "Consultoria e modernização",
      "Ainda não tenho certeza",
    ],
    en: [
      "iOS/Android app",
      "Professional website",
      "Web system",
      "SaaS / digital product",
      "React Native / team support",
      "Consulting and modernization",
      "Not sure yet",
    ],
  },
  budgets: {
    pt: ["A definir", "Até R$ 10 mil", "R$ 10–30 mil", "R$ 30–80 mil", "Acima de R$ 80 mil"],
    en: ["To be defined", "Up to BRL 10k", "BRL 10–30k", "BRL 30–80k", "Above BRL 80k"],
  },
  timelines: {
    pt: ["O quanto antes", "1 a 2 meses", "3 a 6 meses", "Sem prazo rígido"],
    en: ["As soon as possible", "1 to 2 months", "3 to 6 months", "No hard deadline"],
  },
};

export const careerCopy = {
  seoTitle: {
    pt: "Carreira e currículo | Cristiano Borges",
    en: "Career and résumé | Cristiano Borges",
  },
  description: {
    pt: "Experiência profissional de Cristiano Borges Vieira: React Native sênior, produtos financeiros, operação em campo, edtech e marketplaces. Currículo em PDF.",
    en: "Professional experience of Cristiano Borges Vieira: senior React Native, financial products, field operations, edtech and marketplaces. PDF résumé.",
  },
  h1: { pt: "Experiência, stack e carreira", en: "Experience, stack and career" },
  lead: {
    pt: "Esta página é para recrutadores e times de talentos. Clientes que querem contratar um serviço encontram orçamento e páginas de produto no restante do site.",
    en: "This page is for recruiters and talent teams. Clients who want to hire a service will find quotes and product pages elsewhere on the site.",
  },
  cv: { pt: "Baixar currículo em PDF", en: "Download PDF résumé" },
  experience: { pt: "Experiência profissional", en: "Professional experience" },
  education: { pt: "Formação", en: "Education" },
  hireCta: { pt: "Prefiro contratar um serviço", en: "I want to hire a service instead" },
};

export const indexes = {
  services: {
    seoTitle: {
      pt: "Serviços de desenvolvimento de software | Cristiano Borges",
      en: "Software development services | Cristiano Borges",
    },
    description: {
      pt: "Aplicativos, sites profissionais, sistemas web, SaaS, React Native e consultoria. Desenvolvimento sob medida a partir de Porto Alegre, com atendimento remoto no Brasil.",
      en: "Apps, professional websites, web systems, SaaS, React Native and consulting. Custom development from Porto Alegre, with remote delivery across Brazil.",
    },
    h1: { pt: "Serviços", en: "Services" },
    lead: {
      pt: "Escolha o tipo de entrega. Cada página explica problema, recorte, tecnologias e como pedir orçamento.",
      en: "Pick the type of delivery. Each page explains the problem, the slice, the technologies and how to request a quote.",
    },
  },
  projects: {
    seoTitle: {
      pt: "Projetos e cases | Cristiano Borges",
      en: "Projects and case studies | Cristiano Borges",
    },
    description: {
      pt: "Cases de aplicativos, marketplaces, fintech, SaaS e sistemas. Problema, participação e solução — sem métricas inventadas.",
      en: "Cases of apps, marketplaces, fintech, SaaS and systems. Problem, role and solution — without invented metrics.",
    },
    h1: { pt: "Projetos", en: "Projects" },
    lead: {
      pt: "Produtos em que atuei. Informações confidenciais de clientes corporativos não são publicadas.",
      en: "Products I have worked on. Confidential information from corporate clients is not published.",
    },
  },
};

export const quoteSeo = {
  seoTitle: {
    pt: "Solicitar orçamento | Cristiano Borges",
    en: "Request a quote | Cristiano Borges",
  },
  description: {
    pt: "Peça orçamento para aplicativo, site, sistema, SaaS ou consultoria. Formulário ou WhatsApp, com contexto suficiente para uma primeira conversa objetiva.",
    en: "Request a quote for an app, website, system, SaaS or consulting. Form or WhatsApp, with enough context for a focused first conversation.",
  },
};
