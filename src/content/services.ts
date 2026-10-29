import type { Faq, Localized } from "./types";

export type ServiceContent = {
  id: string;
  slug: Localized;
  nav: Localized;
  seoTitle: Localized;
  description: Localized;
  h1: Localized;
  eyebrow: Localized;
  lead: Localized;
  problem: Localized;
  benefits: { title: Localized; text: Localized }[];
  deliverables: Localized[];
  technologies: string[];
  faqs: Faq[];
  relatedProjectIds: string[];
};

const remote: Localized = {
  pt: "Atendo a partir de Porto Alegre, no Rio Grande do Sul, e trabalho remoto com empresas em todo o Brasil.",
  en: "I am based in Porto Alegre, Rio Grande do Sul, and work remotely with companies across Brazil.",
};

export const services: ServiceContent[] = [
  {
    id: "apps",
    slug: { pt: "desenvolvimento-de-aplicativos", en: "mobile-app-development" },
    nav: { pt: "Aplicativos", en: "Mobile apps" },
    seoTitle: {
      pt: "Desenvolvimento de aplicativos iOS e Android | Cristiano Borges",
      en: "iOS and Android app development | Cristiano Borges",
    },
    description: {
      pt: "Desenvolvimento de aplicativos sob medida para iOS e Android. Do escopo ao lançamento, com React Native, integrações e uma base pronta para evoluir. Atendimento remoto a partir de Porto Alegre.",
      en: "Custom iOS and Android app development. From scope to release, with React Native, integrations and a foundation ready to evolve. Remote delivery from Porto Alegre, Brazil.",
    },
    h1: { pt: "Desenvolvimento de aplicativos", en: "Mobile app development" },
    eyebrow: { pt: "iOS e Android", en: "iOS and Android" },
    lead: {
      pt: "Aplicativos para empresas que precisam sair da ideia, destravar um produto ou colocar uma operação no bolso do cliente. O foco é um produto utilizável, estável e possível de evoluir.",
      en: "Apps for companies that need to leave the idea stage, unblock a product or put an operation in the customer's pocket. The focus is a usable, stable product that can evolve.",
    },
    problem: {
      pt: `Um aplicativo costuma falhar quando o escopo mistura validação com uma plataforma inteira, ou quando o código já em produção não acompanha o uso real. Eu entro para definir o que precisa existir agora, construir as jornadas principais e deixar integrações, publicação e manutenção em ordem. ${remote.pt}`,
      en: `An app usually stalls when the scope mixes validation with an entire platform, or when production code no longer matches real use. I define what must exist now, build the core journeys and leave integrations, release and maintenance in order. ${remote.en}`,
    },
    benefits: [
      { title: { pt: "Uma base, duas lojas", en: "One codebase, two stores" }, text: { pt: "iOS e Android a partir de uma base compartilhada quando isso reduz prazo e custo sem sacrificar a experiência.", en: "iOS and Android from a shared codebase when that reduces time and cost without sacrificing the experience." } },
      { title: { pt: "Escopo que cabe no momento", en: "Scope that fits the moment" }, text: { pt: "MVP, evolução ou reforço de time, com entregas que o negócio consegue usar e avaliar.", en: "MVP, evolution or team support, with deliveries the business can use and evaluate." } },
      { title: { pt: "Integrações reais", en: "Real integrations" }, text: { pt: "Autenticação, APIs, notificações, pagamentos e serviços que o produto precisa para funcionar fora do protótipo.", en: "Authentication, APIs, notifications, payments and the services a product needs beyond a prototype." } },
      { title: { pt: "Publicação acompanhada", en: "Release support" }, text: { pt: "Preparação para App Store e Google Play, com o fluxo de build e os cuidados de uma versão que vai para usuários reais.", en: "Preparation for the App Store and Google Play, including the build flow and the care a real release needs." } },
    ],
    deliverables: [
      { pt: "Leitura do objetivo, do usuário e das restrições técnicas", en: "Review of the goal, the user and the technical constraints" },
      { pt: "Arquitetura e escopo da primeira versão utilizável", en: "Architecture and scope of the first usable version" },
      { pt: "Interfaces e jornadas principais do aplicativo", en: "Main interfaces and user journeys" },
      { pt: "Integração com APIs, autenticação e serviços de terceiros", en: "Integration with APIs, authentication and third-party services" },
      { pt: "Build, testes das jornadas críticas e preparação das lojas", en: "Builds, critical-path checks and store preparation" },
      { pt: "Passagem de contexto para o time que vai manter o produto", en: "Handover for the team that will maintain the product" },
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "REST APIs"],
    faqs: [
      { q: { pt: "Dá para lançar primeiro um MVP?", en: "Can we launch an MVP first?" }, a: { pt: "Sim. A primeira versão cobre o que valida a operação ou a proposta de valor, sem tratar o restante do roadmap como se precisasse nascer junto.", en: "Yes. The first version covers what validates the operation or the value proposition, without forcing the rest of the roadmap to ship at once." } },
      { q: { pt: "Você assume um aplicativo que já existe?", en: "Can you take over an existing app?" }, a: { pt: "Sim. O início é uma leitura do código, das dependências, da publicação e dos pontos de risco. A partir disso, as entregas seguem uma ordem segura entre correção, estrutura e funcionalidades.", en: "Yes. I start by reading the code, dependencies, release process and risks. Deliveries then follow a safe order across fixes, structure and features." } },
      { q: { pt: "O aplicativo precisa de um site ou painel junto?", en: "Does the app need a site or admin panel too?" }, a: { pt: "Quando o negócio pede, o aplicativo pode nascer junto de um site, um painel ou um sistema web. Isso é definido no escopo, não como um extra surpresa.", en: "When the business needs it, the app can ship with a website, an admin panel or a web system. That is defined in the scope, not added as a surprise." } },
    ],
    relatedProjectIds: ["jobtto", "vibra", "parceiro"],
  },
  {
    id: "react-native",
    slug: { pt: "react-native", en: "react-native" },
    nav: { pt: "React Native", en: "React Native" },
    seoTitle: {
      pt: "Desenvolvedor React Native sênior | Cristiano Borges",
      en: "Senior React Native developer | Cristiano Borges",
    },
    description: {
      pt: "Desenvolvedor React Native sênior para novos aplicativos, evolução de apps em produção e reforço de times. TypeScript, Expo, APIs e publicação iOS/Android. Remoto, a partir de Porto Alegre.",
      en: "Senior React Native developer for new apps, production evolution and team support. TypeScript, Expo, APIs and iOS/Android release. Remote from Porto Alegre, Brazil.",
    },
    h1: { pt: "Desenvolvedor React Native", en: "React Native developer" },
    eyebrow: { pt: "Especialidade principal", en: "Core specialty" },
    lead: {
      pt: "React Native é a base com que mais entrego produtos mobile. Uso essa especialidade para tirar um app do papel, estabilizar um produto em produção ou reforçar um time sem aumentar a estrutura fixa.",
      en: "React Native is the stack I use most to ship mobile products. I use it to take an app from zero, stabilize a product in production or support a team without adding permanent headcount.",
    },
    problem: {
      pt: `Times procuram um desenvolvedor React Native quando o roadmap parou, a base ficou difícil de mudar ou o produto precisa de alguém que una interface, integração e publicação. Eu trabalho nesse intervalo: código, critério de produto e comunicação direta com quem decide. ${remote.pt}`,
      en: `Teams look for a React Native developer when the roadmap has stalled, the codebase is hard to change or the product needs someone who can connect interface, integration and release. I work in that space: code, product judgment and direct communication with decision makers. ${remote.en}`,
    },
    benefits: [
      { title: { pt: "Produto e código no mesmo lugar", en: "Product and code together" }, text: { pt: "As decisões técnicas consideram quem usa o aplicativo e o que o negócio precisa lançar agora.", en: "Technical decisions account for the people using the app and what the business needs to ship now." } },
      { title: { pt: "Produção, não só protótipo", en: "Production, not only prototypes" }, text: { pt: "Experiência com apps financeiros, operacionais, educacionais e de marketplace já em uso.", en: "Experience with financial, operational, educational and marketplace apps already in use." } },
      { title: { pt: "Entrada em código existente", en: "Joining an existing codebase" }, text: { pt: "Leitura da base, dos riscos e do fluxo de publicação antes de prometer uma sequência de entregas.", en: "A read of the codebase, the risks and the release flow before promising a delivery sequence." } },
      { title: { pt: "Contrato por escopo ou período", en: "Fixed scope or retainer" }, text: { pt: "Projeto fechado, horas ou apoio mensal, conforme a forma de trabalho do time.", en: "Fixed project, hourly work or monthly support, depending on how the team works." } },
    ],
    deliverables: [
      { pt: "Avaliação inicial de código, dependências e publicação", en: "Initial review of code, dependencies and release" },
      { pt: "Novas jornadas ou correção de fluxos críticos", en: "New journeys or fixes to critical flows" },
      { pt: "Organização de estado, navegação e integração com APIs", en: "State, navigation and API integration structure" },
      { pt: "Ajustes de performance e estabilidade nas telas mais usadas", en: "Performance and stability work on the most used screens" },
      { pt: "Apoio a builds, lojas e revisão de pull requests", en: "Support for builds, stores and pull request review" },
      { pt: "Registro do que foi feito para o time continuar", en: "A record of the work so the team can continue" },
    ],
    technologies: ["React Native", "TypeScript", "Expo", "Styled Components", "CI/CD"],
    faqs: [
      { q: { pt: "Você trabalha só com React Native?", en: "Do you only work with React Native?" }, a: { pt: "Não. React Native é a especialidade mais profunda, e também entrego sites, sistemas web, SaaS e integrações com React, Next.js, Angular, TypeScript e Firebase.", en: "No. React Native is the deepest specialty, and I also deliver websites, web systems, SaaS and integrations with React, Next.js, Angular, TypeScript and Firebase." } },
      { q: { pt: "Precisa ser Expo?", en: "Does it have to be Expo?" }, a: { pt: "Não. Expo acelera muitos produtos, mas um app já publicado em bare workflow continua sendo um projeto viável. A escolha segue o que já existe.", en: "No. Expo speeds up many products, but an app already published on the bare workflow is still a viable project. The choice follows what already exists." } },
      { q: { pt: "Como é o contato durante o trabalho?", en: "How do we communicate during the work?" }, a: { pt: "Comunicação direta, ciclos visíveis e demonstrações do que mudou. O canal principal é combinado no início: WhatsApp, e-mail ou as ferramentas do time.", en: "Direct communication, visible cycles and demos of what changed. The main channel is agreed at the start: WhatsApp, email or the team's tools." } },
    ],
    relatedProjectIds: ["vibra", "colombo", "gazin"],
  },
  {
    id: "sites",
    slug: { pt: "criacao-de-sites", en: "professional-websites" },
    nav: { pt: "Sites", en: "Websites" },
    seoTitle: {
      pt: "Criação de sites profissionais | Cristiano Borges",
      en: "Professional website design and development | Cristiano Borges",
    },
    description: {
      pt: "Criação de sites profissionais rápidos, claros e preparados para busca e contato. Para empresas, startups e especialistas que precisam apresentar uma oferta e receber pedidos. Remoto, Porto Alegre e Brasil.",
      en: "Professional websites that are fast, clear and ready for search and contact. For companies, startups and specialists who need to present an offer and receive inquiries. Remote across Brazil.",
    },
    h1: { pt: "Criação de sites profissionais", en: "Professional websites" },
    eyebrow: { pt: "Presença e captação", en: "Presence and inquiries" },
    lead: {
      pt: "Sites para quem precisa explicar uma oferta com clareza, aparecer melhor nas buscas e transformar visita em conversa. O visual acompanha o conteúdo, não o contrário.",
      en: "Websites for teams that need to explain an offer clearly, show up better in search and turn a visit into a conversation. The visual design follows the content.",
    },
    problem: {
      pt: `Um site profissional deixa de cumprir a função quando o visitante não entende o serviço, o contato está escondido ou a página depende demais de efeitos para dizer o essencial. Eu estruturo a mensagem, a hierarquia e a parte técnica para a página ser rápida, indexável e fácil de usar no celular. ${remote.pt}`,
      en: `A professional website fails when visitors cannot understand the service, contact is hidden or the page depends on effects to say something simple. I structure the message, the hierarchy and the technical layer so the page is fast, indexable and easy to use on a phone. ${remote.en}`,
    },
    benefits: [
      { title: { pt: "Mensagem antes da decoração", en: "Message before decoration" }, text: { pt: "A primeira tela diz o que você faz, para quem e como começar uma conversa.", en: "The first screen says what you do, who it is for and how to start a conversation." } },
      { title: { pt: "Base de SEO no HTML", en: "SEO in the HTML" }, text: { pt: "Título, descrição, heading, conteúdo e dados estruturados pensados para cada página, não só para a home.", en: "Title, description, heading, content and structured data considered for each page, not only the homepage." } },
      { title: { pt: "Contato sem fricção", en: "Contact without friction" }, text: { pt: "Formulário, WhatsApp ou e-mail no ponto em que a pessoa já entendeu a oferta.", en: "A form, WhatsApp or email at the point where the person already understands the offer." } },
      { title: { pt: "Celular como padrão", en: "Mobile as the default" }, text: { pt: "Leitura, botões e velocidade tratados a partir da tela pequena, onde a maior parte das visitas chega.", en: "Reading, buttons and speed designed from the small screen, where most visits arrive." } },
    ],
    deliverables: [
      { pt: "Estrutura de páginas e texto orientado à oferta", en: "Page structure and offer-oriented copy" },
      { pt: "Layout responsivo e identidade visual aplicada", en: "Responsive layout and applied visual identity" },
      { pt: "SEO técnico da página: título, descrição, heading e sitemap", en: "On-page technical SEO: title, description, heading and sitemap" },
      { pt: "Formulário ou canal de contato funcionando", en: "A working form or contact channel" },
      { pt: "Performance de imagens, fontes e carregamento inicial", en: "Image, font and initial-load performance" },
      { pt: "Publicação e orientação para a próxima iteração", en: "Launch and guidance for the next iteration" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Vite", "SEO técnico"],
    faqs: [
      { q: { pt: "O site pode crescer para um sistema?", en: "Can the website grow into a system?" }, a: { pt: "Sim, se isso estiver no horizonte. A primeira entrega pode ser o site comercial, com uma estrutura que não impeça um painel ou uma área logada depois.", en: "Yes, if that is on the horizon. The first delivery can be the commercial website, with a structure that does not block an admin panel or a logged-in area later." } },
      { q: { pt: "Você escreve o conteúdo?", en: "Do you write the content?" }, a: { pt: "Eu organizo a estrutura e proponho o texto a partir do que você sabe sobre o negócio. A revisão final da oferta fica com você, porque ninguém substitui o conhecimento do dono.", en: "I organize the structure and draft the copy from what you know about the business. You keep the final review of the offer, because nobody replaces the owner's knowledge." } },
      { q: { pt: "Site institucional entra nesse serviço?", en: "Does a company website fit this service?" }, a: { pt: "Sim. Sites institucionais, páginas de serviço e sites de captação entram aqui. Lojas e plataformas com regra de negócio mais pesada tendem a ir para sistemas ou SaaS.", en: "Yes. Company websites, service pages and lead-generation sites fit here. Stores and platforms with heavier business rules tend to fit web systems or SaaS." } },
    ],
    relatedProjectIds: ["otica", "jobtto"],
  },
  {
    id: "systems",
    slug: { pt: "desenvolvimento-de-sistemas", en: "web-systems" },
    nav: { pt: "Sistemas", en: "Web systems" },
    seoTitle: {
      pt: "Desenvolvimento de sistemas web | Cristiano Borges",
      en: "Custom web system development | Cristiano Borges",
    },
    description: {
      pt: "Desenvolvimento de sistemas web sob medida: painéis, portais e ferramentas internas para operar o negócio. React, Next.js, Angular, TypeScript e integrações. Remoto em todo o Brasil.",
      en: "Custom web systems: dashboards, portals and internal tools to run the business. React, Next.js, Angular, TypeScript and integrations. Remote across Brazil.",
    },
    h1: { pt: "Desenvolvimento de sistemas web", en: "Web system development" },
    eyebrow: { pt: "Operação e gestão", en: "Operations and management" },
    lead: {
      pt: "Sistemas para substituir planilha, e-mail e processo manual quando a operação já tem regra demais para uma página institucional. O critério é a rotina de quem usa, não um painel genérico.",
      en: "Systems that replace spreadsheets, email and manual process when the operation has outgrown a brochure website. The criterion is the routine of the people using it, not a generic dashboard.",
    },
    problem: {
      pt: `Empresas chegam com um fluxo espalhado entre planilhas, mensagens e sistemas que não conversam. Um sistema web bem definido concentra a operação: cadastro, permissões, status, integrações e um histórico que o time consegue consultar. Eu desenho esse recorte com você e entrego em partes que já entram no dia a dia. ${remote.pt}`,
      en: `Companies arrive with a flow spread across spreadsheets, messages and systems that do not talk to each other. A well-defined web system concentrates the operation: records, permissions, status, integrations and a history the team can consult. I shape that scope with you and deliver it in parts that enter daily work. ${remote.en}`,
    },
    benefits: [
      { title: { pt: "Fluxo antes da tela", en: "Workflow before screens" }, text: { pt: "O sistema nasce do processo real: quem faz o quê, o que muda de estado e onde estão os dados.", en: "The system starts from the real process: who does what, what changes state and where the data lives." } },
      { title: { pt: "Integração com o que já existe", en: "Integration with what already exists" }, text: { pt: "APIs, autenticação e serviços externos entram no desenho em vez de ficarem para um fase dois indefinida.", en: "APIs, authentication and external services are part of the design instead of an undefined later phase." } },
      { title: { pt: "Entregas utilizáveis", en: "Usable deliveries" }, text: { pt: "Cada etapa deixa uma parte do processo funcionando, para o time validar com uso real.", en: "Each stage leaves part of the process working, so the team can validate it with real use." } },
      { title: { pt: "Base para crescer", en: "A base that can grow" }, text: { pt: "Módulos, permissões e integrações organizados para o sistema não depender de um único arquivo gigante.", en: "Modules, permissions and integrations organized so the system does not depend on one giant file." } },
    ],
    deliverables: [
      { pt: "Mapa do processo e do primeiro recorte do sistema", en: "A map of the process and the first slice of the system" },
      { pt: "Autenticação, perfis e jornadas principais", en: "Authentication, roles and core journeys" },
      { pt: "Telas operacionais e regras de negócio acordadas", en: "Operational screens and the agreed business rules" },
      { pt: "Integrações com APIs e serviços já usados pela empresa", en: "Integrations with APIs and services the company already uses" },
      { pt: "Tratamento de erro, estados vazios e permissões", en: "Error handling, empty states and permissions" },
      { pt: "Documentação curta da arquitetura e do que ficou de fora", en: "A short architecture note and a record of what was left out" },
    ],
    technologies: ["React", "Next.js", "Angular", "TypeScript", "Firebase", "REST APIs"],
    faqs: [
      { q: { pt: "Sistema web e site são a mesma coisa?", en: "Are a web system and a website the same thing?" }, a: { pt: "Não. O site apresenta a empresa e capta contato. O sistema executa o trabalho: cadastros, pedidos, permissões, rotinas e integrações.", en: "No. A website presents the company and captures contact. A system runs the work: records, orders, permissions, routines and integrations." } },
      { q: { pt: "Dá para modernizar um sistema antigo?", en: "Can you modernize an old system?" }, a: { pt: "Sim. Esse trabalho também está na consultoria e modernização. A decisão entre reescrever, encapsular ou migrar por partes depende do risco e do que já está em uso.", en: "Yes. That work also lives under consulting and modernization. Rewriting, wrapping or migrating in parts depends on the risk and on what is already in use." } },
      { q: { pt: "Você faz o backend?", en: "Do you build the backend?" }, a: { pt: "Eu integro e, quando o escopo pede, implemento a camada necessária com as ferramentas do projeto, como Firebase ou APIs. Se já existe um backend, eu trabalho em cima dele.", en: "I integrate and, when the scope requires it, implement the layer the project needs with its tools, such as Firebase or APIs. If a backend already exists, I build on top of it." } },
    ],
    relatedProjectIds: ["siga", "pontotel", "jobtto"],
  },
  {
    id: "saas",
    slug: { pt: "desenvolvimento-saas", en: "saas-development" },
    nav: { pt: "SaaS", en: "SaaS" },
    seoTitle: {
      pt: "Desenvolvimento de SaaS | Cristiano Borges",
      en: "SaaS product development | Cristiano Borges",
    },
    description: {
      pt: "Desenvolvimento de SaaS e produtos digitais com assinatura, painel e aplicativo ou web. Da primeira versão utilizável à estrutura de cobrança e evolução. Atendimento remoto no Brasil.",
      en: "SaaS and digital product development with billing, a dashboard and a web or mobile app. From the first usable version to billing structure and evolution. Remote across Brazil.",
    },
    h1: { pt: "Desenvolvimento de SaaS", en: "SaaS development" },
    eyebrow: { pt: "Produto recorrente", en: "Recurring product" },
    lead: {
      pt: "Produtos SaaS para quem precisa transformar um serviço repetível em software: conta, permissão, cobrança e uma rotina que o cliente volta a usar.",
      en: "SaaS products for teams that need to turn a repeatable service into software: account, permission, billing and a routine the customer comes back to.",
    },
    problem: {
      pt: `Um SaaS não é um site com login. Ele precisa de conta, isolamento de dados, cobrança, estados de assinatura e um caminho claro para a primeira sessão útil. Eu ajudo a recortar essa primeira versão e a construir a base sem prometer uma plataforma infinita no primeiro mês. ${remote.pt}`,
      en: `A SaaS product is not a website with a login. It needs accounts, data isolation, billing, subscription states and a clear path to a useful first session. I help cut that first version and build the foundation without promising an infinite platform in month one. ${remote.en}`,
    },
    benefits: [
      { title: { pt: "Primeira versão que cobra ou valida", en: "A first version that charges or validates" }, text: { pt: "O recorte inicial inclui a sessão que prova o valor e, quando faz parte do modelo, o fluxo de assinatura.", en: "The initial slice includes the session that proves value and, when it is part of the model, the subscription flow." } },
      { title: { pt: "Web, mobile ou os dois", en: "Web, mobile or both" }, text: { pt: "O canal segue o uso: painel web, aplicativo ou os dois, sem duplicar regra sem necessidade.", en: "The channel follows the use: a web dashboard, an app or both, without duplicating rules unnecessarily." } },
      { title: { pt: "Cobrança como fluxo, não como detalhe", en: "Billing as a flow, not a detail" }, text: { pt: "Estados de pagamento, acesso e falha entram no desenho. No produto Topotronics, a assinatura usa Asaas.", en: "Payment, access and failure states are part of the design. In the Topotronics product, subscriptions use Asaas." } },
      { title: { pt: "Evolução depois do lançamento", en: "Evolution after launch" }, text: { pt: "A base fica preparada para novos módulos sem recomeçar o produto a cada ideia.", en: "The foundation stays ready for new modules without restarting the product for every idea." } },
    ],
    deliverables: [
      { pt: "Definição do usuário, da conta e da sessão principal", en: "Definition of the user, the account and the core session" },
      { pt: "Modelo de acesso e separação dos dados do cliente", en: "Access model and separation of customer data" },
      { pt: "Fluxo de assinatura ou validação comercial acordado", en: "The agreed subscription or commercial validation flow" },
      { pt: "Interface web e, se necessário, aplicativo", en: "Web interface and, if needed, a mobile app" },
      { pt: "Estados de erro, inadimplência e primeiro acesso", en: "Error, failed-payment and first-access states" },
      { pt: "Plano do que fica para as versões seguintes", en: "A plan for what waits for later versions" },
    ],
    technologies: ["React", "Next.js", "React Native", "TypeScript", "Firebase", "Asaas"],
    faqs: [
      { q: { pt: "Você cria o SaaS inteiro sozinho?", en: "Do you build the whole SaaS alone?" }, a: { pt: "Eu consigo tirar uma primeira versão do chão e evoluir o produto. Se o escopo exigir um time, eu entro como responsável técnico de uma frente ou indico o recorte que cabe em um especialista.", en: "I can take a first version live and evolve the product. If the scope needs a team, I join as the technical owner of a stream or define the slice that fits one specialist." } },
      { q: { pt: "Qual gateway de pagamento você usa?", en: "Which payment gateway do you use?" }, a: { pt: "Depende do que o negócio já tem. No Topotronics, a cobrança recorrente foi integrada com Asaas. Outros produtos podem usar o provedor que a empresa já contratou.", en: "It depends on what the business already has. In Topotronics, recurring billing was integrated with Asaas. Other products can use the provider the company already contracted." } },
      { q: { pt: "Em quanto tempo um SaaS fica pronto?", en: "How long does a SaaS take?" }, a: { pt: "Não há um prazo único. Uma primeira versão estreita pode caber em alguns ciclos; uma plataforma com vários perfis, não. O prazo sai do recorte, não de uma tabela genérica.", en: "There is no single timeline. A narrow first version can fit a few cycles; a platform with many roles cannot. The timeline comes from the scope, not from a generic table." } },
    ],
    relatedProjectIds: ["topotronics", "jobtto"],
  },
  {
    id: "consulting",
    slug: { pt: "consultoria-e-modernizacao", en: "consulting-and-modernization" },
    nav: { pt: "Consultoria", en: "Consulting" },
    seoTitle: {
      pt: "Consultoria e modernização de sistemas | Cristiano Borges",
      en: "Software consulting and system modernization | Cristiano Borges",
    },
    description: {
      pt: "Consultoria técnica para destravar entregas, modernizar sistemas e reforçar times de produto. Avaliação de código, arquitetura e um plano de evolução sem reescrever às cegas. Remoto no Brasil.",
      en: "Technical consulting to unblock delivery, modernize systems and support product teams. Code review, architecture and an evolution plan without a blind rewrite. Remote across Brazil.",
    },
    h1: { pt: "Consultoria e modernização de sistemas", en: "Consulting and system modernization" },
    eyebrow: { pt: "Critério técnico", en: "Technical judgment" },
    lead: {
      pt: "Para times que já têm software e precisam de clareza: o que corrigir, o que manter e o que não vale reescrever agora.",
      en: "For teams that already have software and need clarity: what to fix, what to keep and what is not worth rewriting now.",
    },
    problem: {
      pt: `Modernizar um sistema falha quando a primeira proposta é jogar tudo fora. Eu começo pelo uso real, pelo código e pelo caminho de publicação. O resultado é uma sequência: riscos, ganhos rápidos e as mudanças estruturais que realmente liberam o roadmap. ${remote.pt}`,
      en: `Modernizing a system fails when the first proposal is to throw everything away. I start from real use, the code and the release path. The result is a sequence: risks, quick gains and the structural changes that actually free the roadmap. ${remote.en}`,
    },
    benefits: [
      { title: { pt: "Diagnóstico antes da reforma", en: "Diagnosis before the rebuild" }, text: { pt: "Uma leitura honesta do que está frágil e do que pode continuar como está.", en: "An honest read of what is fragile and what can stay as it is." } },
      { title: { pt: "Plano que o time executa", en: "A plan the team can execute" }, text: { pt: "A consultoria pode parar no plano ou seguir com a implementação das primeiras entregas.", en: "Consulting can stop at the plan or continue into implementation of the first deliveries." } },
      { title: { pt: "Reforço sênior pontual", en: "Senior support when it is needed" }, text: { pt: "Entrada temporária para destravar uma entrega crítica sem contratar um time permanente.", en: "A temporary engagement to unblock a critical delivery without hiring a permanent team." } },
      { title: { pt: "Stack que você já tem", en: "The stack you already have" }, text: { pt: "React Native, React, Next.js, Angular, TypeScript e Firebase, conforme o sistema existente.", en: "React Native, React, Next.js, Angular, TypeScript and Firebase, following the system you already have." } },
    ],
    deliverables: [
      { pt: "Leitura de código, fluxo de publicação e riscos", en: "A read of the code, the release flow and the risks" },
      { pt: "Lista priorizada de correções e mudanças estruturais", en: "A prioritized list of fixes and structural changes" },
      { pt: "Recomendação do que não fazer agora", en: "A recommendation of what not to do now" },
      { pt: "Implementação das primeiras melhorias, se contratada", en: "Implementation of the first improvements, if contracted" },
      { pt: "Apoio a decisões de arquitetura com o time", en: "Support for architecture decisions with the team" },
      { pt: "Registro objetivo para quem continua o trabalho", en: "A concise record for whoever continues the work" },
    ],
    technologies: ["React Native", "React", "Next.js", "Angular", "TypeScript", "Firebase"],
    faqs: [
      { q: { pt: "Consultoria inclui código?", en: "Does consulting include code?" }, a: { pt: "Pode incluir. Há um formato só de diagnóstico e outro em que eu implemento as primeiras mudanças. Os dois são combinados antes de começar.", en: "It can. There is a diagnosis-only format and another where I implement the first changes. Both are agreed before the work starts." } },
      { q: { pt: "Você reescreve o sistema?", en: "Do you rewrite the system?" }, a: { pt: "Só quando a reescrita é mais segura do que evoluir o que existe. Na maior parte dos casos, a modernização acontece por partes, com o sistema atual ainda em uso.", en: "Only when a rewrite is safer than evolving what exists. In most cases, modernization happens in parts, while the current system stays in use." } },
      { q: { pt: "Serve para recrutadores?", en: "Is this for recruiters?" }, a: { pt: "Este serviço é para empresas que precisam de critério técnico. Recrutadores encontram experiência, stack e currículo na página de carreira.", en: "This service is for companies that need technical judgment. Recruiters will find experience, stack and a résumé on the career page." } },
    ],
    relatedProjectIds: ["vibra", "gazin", "pontotel"],
  },
];

export function getService(id: string) {
  return services.find((service) => service.id === id);
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug.pt === slug || service.slug.en === slug);
}
