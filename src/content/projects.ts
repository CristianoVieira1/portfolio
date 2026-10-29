import type { Faq, Localized } from "./types";

export type ProjectContent = {
  id: string;
  slug: Localized;
  title: string;
  seoTitle: Localized;
  description: Localized;
  type: Localized;
  eyebrow: Localized;
  lead: Localized;
  problem: Localized;
  participation: Localized;
  solution: Localized;
  impact: Localized;
  confidential: boolean;
  featured: boolean;
  technologies: string[];
  images: { src: string; alt: Localized; width: number; height: number }[];
  relatedServiceIds: string[];
  faqs: Faq[];
};

const confidentialNote: Localized = {
  pt: "A descrição cobre responsabilidade e tipo de produto. Detalhes internos, dados de clientes e métricas não públicas permanecem omitidos.",
  en: "The write-up covers responsibility and product type. Internal details, customer data and non-public metrics stay omitted.",
};

export const projects: ProjectContent[] = [
  {
    id: "jobtto",
    slug: { pt: "jobtto", en: "jobtto" },
    title: "Jobtto",
    seoTitle: {
      pt: "Jobtto — marketplace de serviços | Cristiano Borges",
      en: "Jobtto — services marketplace | Cristiano Borges",
    },
    description: {
      pt: "Case de marketplace de serviços com aplicativo e web: cadastro, contratação e uma experiência consistente entre canais. React Native e React.",
      en: "Services marketplace case with mobile and web: sign-up, hiring and a consistent experience across channels. React Native and React.",
    },
    type: { pt: "Marketplace mobile + web", en: "Mobile + web marketplace" },
    eyebrow: { pt: "Produto ponta a ponta", en: "End-to-end product" },
    lead: {
      pt: "Plataforma para conectar demanda e profissionais, com a mesma lógica de produto no aplicativo e no site.",
      en: "A platform that connects demand and professionals, with the same product logic on the app and the website.",
    },
    problem: {
      pt: "Um marketplace só funciona quando cadastro, busca, contratação e acompanhamento existem nos dois lados — quem pede o serviço e quem executa. O desafio era manter essa jornada coerente no mobile e na web, sem tratar um canal como versão reduzida do outro.",
      en: "A marketplace only works when sign-up, search, hiring and follow-up exist on both sides — the person requesting the service and the person delivering it. The challenge was keeping that journey coherent on mobile and web, without treating one channel as a reduced copy of the other.",
    },
    participation: {
      pt: "Atuei no aplicativo React Native e na interface web em React, incluindo navegação, integração com APIs e a consistência das jornadas principais entre os canais.",
      en: "I worked on the React Native app and the React web interface, including navigation, API integration and consistency of the main journeys across channels.",
    },
    solution: {
      pt: "A base foi uma arquitetura modular, estados de carregamento e erro visíveis, e componentes reutilizáveis. O mobile cobre o uso no dia a dia; a web cobre consultas e fluxos que pedem tela maior, sem divergir a regra de negócio.",
      en: "The foundation was a modular architecture, visible loading and error states, and reusable components. Mobile covers day-to-day use; the web covers lookups and flows that need a larger screen, without splitting the business rules.",
    },
    impact: {
      pt: "O resultado é um produto que demonstra engenharia de marketplace — não só uma landing. Cadastro, contratação e presença web/mobile ficam no mesmo sistema de produto.",
      en: "The result is a product that demonstrates marketplace engineering — not just a landing page. Sign-up, hiring and web/mobile presence sit in the same product system.",
    },
    confidential: false,
    featured: true,
    technologies: ["React Native", "React", "TypeScript", "REST APIs"],
    images: [
      {
        src: "assets/images/gallery/jobtto-mobile.webp",
        alt: { pt: "Telas do aplicativo Jobtto", en: "Screens from the Jobtto app" },
        width: 1920,
        height: 1572,
      },
      {
        src: "assets/images/gallery/jobtto-web.webp",
        alt: { pt: "Interface web do Jobtto", en: "Jobtto web interface" },
        width: 1972,
        height: 1177,
      },
    ],
    relatedServiceIds: ["apps", "saas", "systems"],
    faqs: [
      {
        q: { pt: "Jobtto é só um aplicativo?", en: "Is Jobtto only an app?" },
        a: { pt: "Não. O produto tem aplicativo e web, com jornadas que precisam conversar. É um exemplo de produto com mais de um canal, não de uma tela isolada.", en: "No. The product has an app and a website, with journeys that have to talk to each other. It is an example of a multi-channel product, not an isolated screen." },
      },
    ],
  },
  {
    id: "vibra",
    slug: { pt: "mais-negocio-vibra", en: "mais-negocio-vibra" },
    title: "Mais Negócio Vibra",
    seoTitle: {
      pt: "Mais Negócio Vibra — app corporativo | Cristiano Borges",
      en: "Mais Negócio Vibra — corporate app | Cristiano Borges",
    },
    description: {
      pt: "Evolução de aplicativo corporativo de larga escala para operação em campo: estabilidade, performance e integrações internas.",
      en: "Evolution of a large-scale corporate app for field operations: stability, performance and internal integrations.",
    },
    type: { pt: "Aplicativo corporativo", en: "Enterprise mobile app" },
    eyebrow: { pt: "Operação em campo", en: "Field operations" },
    lead: {
      pt: "Produto mobile usado na operação da Vibra Energia, em evolução contínua por um time alocado.",
      en: "A mobile product used in Vibra Energia operations, under continuous evolution by an allocated team.",
    },
    problem: {
      pt: "Um aplicativo corporativo em produção precisa absorver novas entregas sem quebrar a rotina de quem usa no campo. O trabalho está em estabilidade, performance e integração com serviços internos — não em um lançamento único.",
      en: "A corporate app in production has to absorb new deliveries without breaking the routine of people using it in the field. The work is stability, performance and internal service integration — not a one-off launch.",
    },
    participation: {
      pt: "Como desenvolvedor React Native sênior (BRQ, alocado na Vibra Energia), atuo na evolução do produto: jornadas, arquitetura, performance e integrações com APIs internas.",
      en: "As a senior React Native developer (BRQ, allocated at Vibra Energia), I work on product evolution: journeys, architecture, performance and internal API integrations.",
    },
    solution: {
      pt: "Melhorias contínuas de arquitetura, tratamento de falhas e atenção às jornadas mais usadas. O critério é o app continuar utilizável enquanto o roadmap anda.",
      en: "Continuous architecture improvements, failure handling and attention to the most used journeys. The criterion is that the app stays usable while the roadmap moves.",
    },
    impact: {
      pt: `${confidentialNote.pt} O que posso afirmar: o produto segue em uso operacional e a atuação é de evolução em produção, não de um protótipo.`,
      en: `${confidentialNote.en} What I can state: the product remains in operational use and the work is production evolution, not a prototype.`,
    },
    confidential: true,
    featured: true,
    technologies: ["React Native", "TypeScript", "REST APIs", "CI/CD"],
    images: [
      {
        src: "assets/images/gallery/vibra.webp",
        alt: { pt: "Telas do aplicativo Mais Negócio Vibra", en: "Screens from the Mais Negócio Vibra app" },
        width: 1948,
        height: 1350,
      },
    ],
    relatedServiceIds: ["react-native", "apps", "consulting"],
    faqs: [
      {
        q: { pt: "Você pode detalhar regras internas da Vibra?", en: "Can you detail Vibra's internal rules?" },
        a: { pt: "Não. Informações corporativas confidenciais não entram neste case. A página descreve o tipo de produto e a minha responsabilidade.", en: "No. Confidential corporate information is not in this case. The page describes the product type and my responsibility." },
      },
    ],
  },
  {
    id: "colombo",
    slug: { pt: "colombo-bank", en: "colombo-bank" },
    title: "Colombo Bank",
    seoTitle: {
      pt: "Colombo Bank — fintech mobile | Cristiano Borges",
      en: "Colombo Bank — mobile fintech | Cristiano Borges",
    },
    description: {
      pt: "Experiência em produto financeiro mobile: jornadas de cartão, limite e faturas com interface clara e integrações.",
      en: "Experience on a mobile financial product: card, limit and statement journeys with a clear interface and integrations.",
    },
    type: { pt: "Fintech mobile", en: "Mobile fintech" },
    eyebrow: { pt: "Produto financeiro", en: "Financial product" },
    lead: {
      pt: "Aplicativo bancário para acompanhar cartão, limite e faturas no uso cotidiano.",
      en: "A banking app for tracking cards, limits and statements in everyday use.",
    },
    problem: {
      pt: "Jornadas financeiras pedem clareza, previsibilidade e cuidado com erros. Conexão instável e variedade de aparelhos aumentam o risco de o usuário perder confiança no meio do fluxo.",
      en: "Financial journeys need clarity, predictability and careful error handling. Unstable connections and device variety increase the risk of the user losing trust mid-flow.",
    },
    participation: {
      pt: "Desenvolvimento das jornadas de autenticação, consulta e fluxos principais em React Native, com organização de estado e componentes reutilizáveis.",
      en: "Development of authentication, inquiry and core journeys in React Native, with structured state and reusable components.",
    },
    solution: {
      pt: "Componentes reutilizáveis, tratamento centralizado de erros e atenção à consistência das telas críticas. A interface prioriza leitura e confirmação, não efeito visual.",
      en: "Reusable components, centralized error handling and consistency on critical screens. The interface prioritizes reading and confirmation, not visual effect.",
    },
    impact: {
      pt: `${confidentialNote.pt} O case serve para mostrar experiência em produto financeiro mobile, sem números de carteira ou volume de transações.`,
      en: `${confidentialNote.en} This case shows experience on a mobile financial product, without portfolio figures or transaction volume.`,
    },
    confidential: true,
    featured: true,
    technologies: ["React Native", "Styled Components", "APIs"],
    images: [
      {
        src: "assets/images/gallery/colombo.webp",
        alt: { pt: "Telas do aplicativo Colombo Bank", en: "Screens from the Colombo Bank app" },
        width: 1400,
        height: 1400,
      },
    ],
    relatedServiceIds: ["react-native", "apps"],
    faqs: [],
  },
  {
    id: "gazin",
    slug: { pt: "gazin-bank", en: "gazin-bank" },
    title: "Gazin Bank",
    seoTitle: {
      pt: "Gazin Bank — app financeiro | Cristiano Borges",
      en: "Gazin Bank — financial app | Cristiano Borges",
    },
    description: {
      pt: "Produto financeiro mobile com fluxos transacionais, PIX e integrações de API. Experiência profissional em fintech.",
      en: "Mobile financial product with transactional flows, PIX and API integrations. Professional fintech experience.",
    },
    type: { pt: "Fintech mobile", en: "Mobile fintech" },
    eyebrow: { pt: "Fluxos transacionais", en: "Transactional flows" },
    lead: {
      pt: "Aplicativo financeiro com operações que dependem de APIs e de um feedback claro para o usuário.",
      en: "A financial app with operations that depend on APIs and clear feedback for the user.",
    },
    problem: {
      pt: "Operações sensíveis falham na percepção do usuário quando o erro da API aparece cru ou o fluxo não explica o próximo passo. O trabalho era tornar transações compreensíveis e a integração previsível.",
      en: "Sensitive operations fail in the user's perception when an API error shows up raw or the flow does not explain the next step. The work was making transactions understandable and the integration predictable.",
    },
    participation: {
      pt: "Implementação de fluxos transacionais, telas de operação e integrações em React Native.",
      en: "Implementation of transactional flows, operation screens and integrations in React Native.",
    },
    solution: {
      pt: "Separação da camada de integração, feedbacks de erro consistentes e fluxos guiados. PIX e demais operações seguem o mesmo critério: estado visível, falha tratada, próximo passo claro.",
      en: "A separated integration layer, consistent error feedback and guided flows. PIX and other operations follow the same criterion: visible state, handled failure, clear next step.",
    },
    impact: {
      pt: `${confidentialNote.pt} Não publico volume de PIX, base de clientes ou indicadores internos.`,
      en: `${confidentialNote.en} I do not publish PIX volume, customer base or internal indicators.`,
    },
    confidential: true,
    featured: true,
    technologies: ["React Native", "PIX", "APIs"],
    images: [
      {
        src: "assets/images/gallery/gazinBank.webp",
        alt: { pt: "Telas do aplicativo Gazin Bank", en: "Screens from the Gazin Bank app" },
        width: 1400,
        height: 1400,
      },
    ],
    relatedServiceIds: ["react-native", "apps", "consulting"],
    faqs: [],
  },
  {
    id: "parceiro",
    slug: { pt: "parceiro-da-construcao", en: "parceiro-da-construcao" },
    title: "Parceiro da Construção",
    seoTitle: {
      pt: "Parceiro da Construção — edtech mobile | Cristiano Borges",
      en: "Parceiro da Construção — mobile edtech | Cristiano Borges",
    },
    description: {
      pt: "Plataforma educacional mobile criada da concepção à entrega, com trilhas, cursos e Firebase.",
      en: "Educational mobile platform built from concept to delivery, with learning paths, courses and Firebase.",
    },
    type: { pt: "Edtech mobile", en: "Mobile edtech" },
    eyebrow: { pt: "Produto completo", en: "Full product" },
    lead: {
      pt: "Aplicativo educacional para profissionais da construção, com conteúdo e jornadas de aprendizado.",
      en: "An educational app for construction professionals, with content and learning journeys.",
    },
    problem: {
      pt: "O produto precisava nascer utilizável: navegação, conteúdo e uma base que pudesse ganhar módulos depois. Sem isso, a primeira versão vira um protótipo difícil de manter.",
      en: "The product had to ship usable: navigation, content and a foundation that could gain modules later. Without that, the first version becomes a prototype that is hard to maintain.",
    },
    participation: {
      pt: "Desenvolvimento freelancer da plataforma mobile, da concepção à entrega, incluindo módulos de navegação, conteúdo e experiência.",
      en: "Freelance development of the mobile platform, from concept to delivery, including navigation, content and experience modules.",
    },
    solution: {
      pt: "React Native com Firebase, arquitetura modular e fluxos pensados para uso recorrente. A usabilidade entrou no mesmo recorte das telas, não como um polimento final.",
      en: "React Native with Firebase, a modular architecture and flows designed for recurring use. Usability was part of the same slice as the screens, not a final polish.",
    },
    impact: {
      pt: "Produto entregue como plataforma educacional mobile, com base possível de evoluir. Não há métricas públicas de retenção neste case.",
      en: "A product delivered as a mobile learning platform, with a foundation that can evolve. There are no public retention metrics in this case.",
    },
    confidential: false,
    featured: false,
    technologies: ["React Native", "Firebase", "UX"],
    images: [
      {
        src: "assets/images/gallery/pdc.webp",
        alt: { pt: "Telas do app Parceiro da Construção", en: "Screens from the Parceiro da Construção app" },
        width: 1400,
        height: 1400,
      },
    ],
    relatedServiceIds: ["apps", "react-native"],
    faqs: [],
  },
  {
    id: "pontotel",
    slug: { pt: "bateponto-pontotel", en: "pontotel" },
    title: "Bateponto Pontotel",
    seoTitle: {
      pt: "Pontotel — ponto digital com biometria | Cristiano Borges",
      en: "Pontotel — biometric time tracking | Cristiano Borges",
    },
    description: {
      pt: "Aplicativo de ponto digital com biometria, geolocalização e suporte offline para marcações confiáveis.",
      en: "Digital time-tracking app with biometrics, geolocation and offline support for reliable check-ins.",
    },
    type: { pt: "Sistema operacional mobile", en: "Operational mobile system" },
    eyebrow: { pt: "Operação crítica", en: "Critical operations" },
    lead: {
      pt: "App de ponto usado no dia a dia, onde a marcação precisa funcionar mesmo com conexão ruim.",
      en: "A time-tracking app used every day, where check-in has to work even with a poor connection.",
    },
    problem: {
      pt: "Ponto digital falha quando a marcação depende de rede estável ou quando biometria e localização não conversam com o fluxo principal. O risco é operacional: o registro deixa de ser confiável.",
      en: "Digital time tracking fails when check-in depends on a stable network or when biometrics and location do not talk to the main flow. The risk is operational: the record stops being trustworthy.",
    },
    participation: {
      pt: "Manutenção e evolução de marcações, autenticação e jornadas críticas, incluindo correção de falhas e suporte offline.",
      en: "Maintenance and evolution of check-ins, authentication and critical journeys, including fixes and offline support.",
    },
    solution: {
      pt: "Suporte offline, biometria, geolocalização e correção de bugs críticos. O critério de qualidade era a marcação chegar certa, não a quantidade de telas novas.",
      en: "Offline support, biometrics, geolocation and critical bug fixes. The quality criterion was a correct check-in, not the number of new screens.",
    },
    impact: {
      pt: "Jornadas de ponto mais estáveis no uso diário. Indicadores internos de adesão não são publicados aqui.",
      en: "More stable time-tracking journeys in daily use. Internal adoption indicators are not published here.",
    },
    confidential: false,
    featured: false,
    technologies: ["React Native", "Biometria", "Geolocalização", "Offline-first"],
    images: [
      {
        src: "assets/images/gallery/pontotel.webp",
        alt: { pt: "Telas do aplicativo de ponto digital Pontotel", en: "Screens from the Pontotel time-tracking app" },
        width: 965,
        height: 769,
      },
    ],
    relatedServiceIds: ["systems", "react-native", "consulting"],
    faqs: [],
  },
  {
    id: "topotronics",
    slug: { pt: "topotronics", en: "topotronics" },
    title: "Topotronics",
    seoTitle: {
      pt: "Topotronics — SaaS mobile com assinatura | Cristiano Borges",
      en: "Topotronics — mobile SaaS with subscriptions | Cristiano Borges",
    },
    description: {
      pt: "Aplicativo de cálculos de engenharia publicado nas lojas, com Firebase e cobrança recorrente via Asaas.",
      en: "Engineering calculation app published on the stores, with Firebase and recurring billing via Asaas.",
    },
    type: { pt: "SaaS mobile", en: "Mobile SaaS" },
    eyebrow: { pt: "Produto próprio", en: "Independent product" },
    lead: {
      pt: "App independente para cálculos de engenharia de estradas, com conta, publicação e assinatura.",
      en: "An independent app for road engineering calculations, with accounts, store release and subscriptions.",
    },
    problem: {
      pt: "O produto precisava ser mais do que uma calculadora: precisão, publicação nas lojas e um fluxo de assinatura que o usuário consegue completar. Como produto solo, manutenção e cobrança entram no mesmo desenho.",
      en: "The product had to be more than a calculator: precision, store release and a subscription flow the user can complete. As a solo product, maintenance and billing are part of the same design.",
    },
    participation: {
      pt: "Desenvolvimento ponta a ponta: aplicativo, Firebase, assinaturas com Asaas e publicação nas lojas.",
      en: "End-to-end development: app, Firebase, Asaas subscriptions and store publishing.",
    },
    solution: {
      pt: "React Native com Firebase no backend e Asaas para pagamento recorrente. Estados de assinatura e acesso fazem parte do produto, não de um extra posterior.",
      en: "React Native with Firebase on the backend and Asaas for recurring payment. Subscription and access states are part of the product, not a later extra.",
    },
    impact: {
      pt: "Produto publicado e em manutenção contínua, com fluxo de assinatura operacional. Não informo faturamento nem número de assinantes.",
      en: "A published product under continuous maintenance, with an operational subscription flow. I do not disclose revenue or subscriber counts.",
    },
    confidential: false,
    featured: false,
    technologies: ["React Native", "Firebase", "Asaas"],
    images: [
      {
        src: "assets/images/gallery/topotronics.webp",
        alt: { pt: "Aplicativo Topotronics para cálculos de engenharia", en: "Topotronics app for engineering calculations" },
        width: 800,
        height: 800,
      },
    ],
    relatedServiceIds: ["saas", "apps"],
    faqs: [
      {
        q: { pt: "A cobrança usa qual provedor?", en: "Which billing provider does it use?" },
        a: { pt: "Asaas, para assinatura recorrente. Outros projetos podem usar o provedor que a empresa já contratou.", en: "Asaas, for recurring subscriptions. Other projects can use the provider the company already contracted." },
      },
    ],
  },
  {
    id: "siga",
    slug: { pt: "sistema-siga", en: "siga-system" },
    title: "Sistema SIGA",
    seoTitle: {
      pt: "Sistema SIGA — mobile e web | Cristiano Borges",
      en: "SIGA system — mobile and web | Cristiano Borges",
    },
    description: {
      pt: "Sistema com interfaces mobile e web para operação do negócio, com coerência entre canais.",
      en: "A system with mobile and web interfaces for business operations, with consistency across channels.",
    },
    type: { pt: "Sistema web + mobile", en: "Web + mobile system" },
    eyebrow: { pt: "Operação do negócio", en: "Business operations" },
    lead: {
      pt: "Sistema usado na operação, com presença em aplicativo e web.",
      en: "A system used in operations, with both an app and a web presence.",
    },
    problem: {
      pt: "Quando mobile e web divergem, o time operacional trabalha em dois produtos. O desafio era manter coerência e uma estrutura que aceitasse novas funções sem recomeçar cada canal.",
      en: "When mobile and web diverge, the operations team is working in two products. The challenge was keeping consistency and a structure that could accept new functions without restarting each channel.",
    },
    participation: {
      pt: "Desenvolvimento de interfaces mobile e web e estruturação para evolução conjunta.",
      en: "Development of mobile and web interfaces and structure for joint evolution.",
    },
    solution: {
      pt: "React Native e React, componentes compartilhados onde faziam sentido e integração entre canais.",
      en: "React Native and React, shared components where they made sense, and integration between channels.",
    },
    impact: {
      pt: "Base preparada para novas funcionalidades. Não há métricas públicas de uso neste case.",
      en: "A foundation ready for new features. There are no public usage metrics in this case.",
    },
    confidential: false,
    featured: false,
    technologies: ["React Native", "React", "Web"],
    images: [
      {
        src: "assets/images/gallery/siga.webp",
        alt: { pt: "Interface do Sistema SIGA em mobile e web", en: "SIGA system interface on mobile and web" },
        width: 1400,
        height: 1400,
      },
    ],
    relatedServiceIds: ["systems", "apps"],
    faqs: [],
  },
  {
    id: "otica",
    slug: { pt: "otica-house", en: "otica-house" },
    title: "Ótica House",
    seoTitle: {
      pt: "Ótica House — e-commerce | Cristiano Borges",
      en: "Ótica House — e-commerce | Cristiano Borges",
    },
    description: {
      pt: "Loja online em VTEX com jornadas de catálogo, navegação e compra.",
      en: "Online store on VTEX with catalog, browsing and purchase journeys.",
    },
    type: { pt: "E-commerce web", en: "Web e-commerce" },
    eyebrow: { pt: "Loja profissional", en: "Professional store" },
    lead: {
      pt: "E-commerce web focado em catálogo, clareza do funil e a plataforma VTEX.",
      en: "Web e-commerce focused on catalog, funnel clarity and the VTEX platform.",
    },
    problem: {
      pt: "Uma loja precisa equilibrar vitrine, performance e um funil que o cliente entende. Plataforma pronta não elimina o trabalho de jornada e interface.",
      en: "A store has to balance showcase, performance and a funnel the customer understands. A ready-made platform does not remove journey and interface work.",
    },
    participation: {
      pt: "Desenvolvimento frontend e evolução de fluxos de navegação e compra.",
      en: "Frontend development and evolution of browsing and purchase flows.",
    },
    solution: {
      pt: "Interfaces na VTEX, organização de componentes e atenção ao funil de compra.",
      en: "VTEX interfaces, component organization and attention to the purchase funnel.",
    },
    impact: {
      pt: "Loja operacional com jornadas de navegação e compra. Taxa de conversão não é publicada aqui.",
      en: "An operational store with browsing and purchase journeys. Conversion rate is not published here.",
    },
    confidential: false,
    featured: false,
    technologies: ["React", "VTEX", "E-commerce"],
    images: [
      {
        src: "assets/images/gallery/house.webp",
        alt: { pt: "Loja online Ótica House", en: "Ótica House online store" },
        width: 1400,
        height: 1400,
      },
    ],
    relatedServiceIds: ["sites", "systems"],
    faqs: [],
  },
];

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug.pt === slug || project.slug.en === slug);
}

export function featuredProjects() {
  return projects.filter((project) => project.featured);
}
