import { AnimatePresence, MotionConfig, motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

type Lang = "pt" | "en";
type Localized = { pt: string; en: string };

const BASE = import.meta.env.BASE_URL;
const WHATSAPP =
  "https://wa.me/5551998884446?text=Ol%C3%A1%20Cristiano%2C%20tenho%20um%20projeto%20e%20gostaria%20de%20conversar";
const EMAIL = "mailto:cristianovieirati@gmail.com?subject=Novo%20projeto%20digital";

const copy = {
  nav: {
    work: { pt: "Projetos", en: "Work" },
    services: { pt: "Serviços", en: "Services" },
    process: { pt: "Processo", en: "Process" },
    about: { pt: "Sobre", en: "About" },
    contact: { pt: "Iniciar projeto", en: "Start a project" },
  },
  hero: {
    eyebrow: {
      pt: "React Native sênior · Freelancer & PJ remoto",
      en: "Senior React Native · Remote freelance & contract",
    },
    titleA: { pt: "Apps que parecem", en: "Apps that feel" },
    titleB: { pt: "o próximo passo.", en: "one step ahead." },
    description: {
      pt: "Eu projeto e desenvolvo experiências mobile para empresas que precisam transformar uma ideia, um produto travado ou um roadmap ambicioso em software rápido, estável e pronto para crescer.",
      en: "I design and build mobile experiences for companies that need to turn an idea, a stalled product or an ambitious roadmap into fast, stable software ready to grow.",
    },
    primary: { pt: "Falar sobre o projeto", en: "Discuss your project" },
    secondary: { pt: "Explorar projetos", en: "Explore selected work" },
    availability: { pt: "Disponível para novos projetos", en: "Available for new projects" },
  },
  proof: {
    lead: {
      pt: "Experiência de produto aplicada a desafios reais",
      en: "Product experience applied to real-world challenges",
    },
    items: [
      { value: "6+", label: { pt: "anos criando produtos", en: "years building products" } },
      { value: "iOS + Android", label: { pt: "uma base, duas plataformas", en: "one codebase, two platforms" } },
      { value: "12", label: { pt: "produtos no portfólio", en: "products in the portfolio" } },
      { value: "Remoto", label: { pt: "atendimento em todo o Brasil", en: "available across Brazil" } },
    ],
  },
};

const projects = [
  {
    id: "vibra",
    index: "01",
    title: "Mais Negócio Vibra",
    type: { pt: "Aplicativo corporativo", en: "Enterprise mobile app" },
    description: {
      pt: "Evolução de um produto mobile de larga escala que conecta clientes à operação da Vibra Energia — pedidos, preços e entregas em uma jornada única.",
      en: "Evolution of a large-scale mobile product connecting customers to Vibra Energia operations — orders, prices and deliveries in one journey.",
    },
    role: { pt: "Evolução, arquitetura e performance", en: "Evolution, architecture and performance" },
    tags: ["React Native", "TypeScript", "REST APIs", "CI/CD"],
    image: `${BASE}assets/images/gallery/vibra.webp`,
    color: "#b8ff3d",
  },
  {
    id: "colombo",
    index: "02",
    title: "Colombo Bank",
    type: { pt: "Fintech mobile", en: "Mobile fintech" },
    description: {
      pt: "Experiência bancária para acompanhar cartão, limite e faturas com clareza, segurança e navegação pensada para o uso cotidiano.",
      en: "A banking experience for tracking cards, limits and statements with clarity, security and everyday usability.",
    },
    role: { pt: "Interface e integrações mobile", en: "Mobile interface and integrations" },
    tags: ["React Native", "Styled Components", "APIs"],
    image: `${BASE}assets/images/gallery/colombo.webp`,
    color: "#ff8a25",
  },
  {
    id: "parceiro",
    index: "03",
    title: "Parceiro da Construção",
    type: { pt: "Edtech mobile", en: "Mobile edtech" },
    description: {
      pt: "Plataforma educacional criada de ponta a ponta para levar trilhas, cursos e aprendizado prático a profissionais da construção.",
      en: "An end-to-end learning platform bringing courses, learning paths and practical content to construction professionals.",
    },
    role: { pt: "Produto completo, do conceito à entrega", en: "Full product, from concept to delivery" },
    tags: ["React Native", "Firebase", "UX"],
    image: `${BASE}assets/images/gallery/pdc.webp`,
    color: "#8d71ff",
  },
  {
    id: "jobtto",
    index: "04",
    title: "Jobtto",
    type: { pt: "Marketplace mobile + web", en: "Mobile + web marketplace" },
    description: {
      pt: "Ecossistema digital para conectar demandas e profissionais, com experiência consistente entre aplicativo e plataforma web responsiva.",
      en: "A digital ecosystem connecting demand with professionals through a consistent mobile and responsive web experience.",
    },
    role: { pt: "Mobile, web e integração de APIs", en: "Mobile, web and API integration" },
    tags: ["React Native", "React", "Performance"],
    image: `${BASE}assets/images/gallery/jobtto-mobile.webp`,
    color: "#31ddd2",
  },
];

const services = [
  {
    number: "01",
    title: { pt: "App do zero", en: "New mobile product" },
    description: {
      pt: "Da definição técnica ao lançamento: arquitetura, interfaces, autenticação, integrações, testes e preparação para as lojas.",
      en: "From technical definition to launch: architecture, interfaces, authentication, integrations, testing and store readiness.",
    },
    outcome: { pt: "Ideia → produto utilizável", en: "Idea → usable product" },
  },
  {
    number: "02",
    title: { pt: "Evolução de produto", en: "Product evolution" },
    description: {
      pt: "Novas features, correção de gargalos, refatoração e ganho de estabilidade para apps que já estão em produção.",
      en: "New features, bottleneck removal, refactoring and stability improvements for apps already in production.",
    },
    outcome: { pt: "Roadmap → entregas consistentes", en: "Roadmap → consistent delivery" },
  },
  {
    number: "03",
    title: { pt: "Squad sob demanda", en: "On-demand senior support" },
    description: {
      pt: "Reforço sênior para destravar um time, organizar a base técnica e acelerar uma entrega crítica sem aumentar a estrutura fixa.",
      en: "Senior support to unblock a team, improve the technical foundation and speed up critical delivery without permanent overhead.",
    },
    outcome: { pt: "Gargalo → velocidade com qualidade", en: "Bottleneck → quality at speed" },
  },
  {
    number: "04",
    title: { pt: "Web que completa o produto", en: "Web that completes the product" },
    description: {
      pt: "Dashboards, portais e experiências com React e Next.js quando o negócio precisa ir além do aplicativo.",
      en: "Dashboards, portals and React/Next.js experiences when the business needs to go beyond the app.",
    },
    outcome: { pt: "Mobile + web, uma experiência", en: "Mobile + web, one experience" },
  },
];

const process = [
  {
    number: "01",
    title: { pt: "Imersão", en: "Discover" },
    text: { pt: "Objetivo, usuário, contexto técnico, prazo e riscos ficam claros antes do primeiro sprint.", en: "Goals, users, technical context, timing and risks are made clear before the first sprint." },
  },
  {
    number: "02",
    title: { pt: "Direção", en: "Define" },
    text: { pt: "Organizo o escopo em entregas que geram valor e proponho a arquitetura adequada ao momento do produto.", en: "I shape the scope into valuable deliveries and propose architecture appropriate to the product stage." },
  },
  {
    number: "03",
    title: { pt: "Construção", en: "Build" },
    text: { pt: "Desenvolvimento com ciclos visíveis, comunicação direta e demonstrações frequentes — sem caixa-preta.", en: "Development in visible cycles, direct communication and frequent demos — no black box." },
  },
  {
    number: "04",
    title: { pt: "Entrega & evolução", en: "Ship & evolve" },
    text: { pt: "Validação, publicação e acompanhamento para transformar lançamento em produto sustentável.", en: "Validation, release and follow-up to turn a launch into a sustainable product." },
  },
];

const faqs = [
  {
    q: { pt: "Que tipo de projeto faz mais sentido?", en: "What kind of project is the best fit?" },
    a: { pt: "Produtos mobile novos, apps em produção que precisam evoluir e times que necessitam de apoio sênior em React Native. Também assumo frentes web em React e Next.js conectadas ao produto.", en: "New mobile products, production apps that need to evolve and teams needing senior React Native support. I also handle React and Next.js work connected to the product." },
  },
  {
    q: { pt: "Você trabalha por projeto ou por hora?", en: "Do you work per project or hourly?" },
    a: { pt: "Os dois formatos são possíveis. Escopos fechados funcionam bem para entregas definidas; hora ou pacote mensal costuma ser melhor para evolução contínua e reforço de time.", en: "Both are possible. Fixed scopes work for defined deliveries; hourly or monthly retainers work better for continuous evolution and team support." },
  },
  {
    q: { pt: "É possível começar por um MVP?", en: "Can we start with an MVP?" },
    a: { pt: "Sim. O trabalho começa separando o que valida a proposta de valor do que pode esperar, para lançar uma primeira versão útil sem criar uma base descartável.", en: "Yes. We separate what validates the value proposition from what can wait, launching a useful first version without creating a disposable foundation." },
  },
  {
    q: { pt: "Como você entra em um app que já existe?", en: "How do you join an existing app?" },
    a: { pt: "Faço uma leitura inicial do código, dependências, fluxo de publicação e pontos de risco. A partir daí, proponho uma sequência segura entre correções, melhorias estruturais e novas features.", en: "I review the codebase, dependencies, release flow and risk areas, then propose a safe sequence across fixes, structural improvements and features." },
  },
  {
    q: { pt: "Como começamos?", en: "How do we start?" },
    a: { pt: "Envie uma mensagem com o objetivo do produto, estágio atual e prazo desejado. Eu retorno para alinhar contexto e próximos passos de forma direta.", en: "Send a message with the product goal, current stage and desired timeline. I’ll get back to align on context and next steps directly." },
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const sectionSequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const maskedReveal: Variants = {
  hidden: { opacity: 0, y: 46, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] },
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionIntro({ kicker, title, text, lang }: { kicker: Localized; title: Localized; text?: Localized; lang: Lang }) {
  return (
    <motion.div className="section-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={sectionSequence}>
      <motion.span className="eyebrow" variants={reveal}><span />{kicker[lang]}</motion.span>
      <motion.h2 variants={maskedReveal}>{title[lang]}</motion.h2>
      {text && <motion.p variants={reveal} transition={{ duration: 0.65 }}>{text[lang]}</motion.p>}
    </motion.div>
  );
}

function ProjectStory({ project, lang }: { project: (typeof projects)[number]; lang: Lang }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [55, -55]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-1.5, 0, 1.5]);

  return (
    <article ref={ref} className="project-story" style={{ "--project-accent": project.color } as CSSProperties}>
      <motion.div className="project-copy" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal} transition={{ duration: 0.7 }}>
        <div className="project-meta"><span>{project.index}</span><span>{project.type[lang]}</span></div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description[lang]}</p>
        <div className="project-role"><span>{lang === "pt" ? "Atuação" : "Role"}</span><strong>{project.role[lang]}</strong></div>
        <ul className="tag-list" aria-label={lang === "pt" ? "Tecnologias" : "Technologies"}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </motion.div>
      <motion.div className="project-visual" aria-label={`${project.title} — ${project.type[lang]}`} initial={{ opacity: 0, y: 65, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.22 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
        <div className="project-grid" aria-hidden="true" />
        <motion.div className="device-frame" style={{ y: imageY, rotate }}>
          <div className="device-top"><span /><span /><span /></div>
          <img src={project.image} alt={`Telas do projeto ${project.title}`} loading="lazy" width="1200" height="980" />
        </motion.div>
        <span className="project-watermark" aria-hidden="true">{project.index}</span>
      </motion.div>
    </article>
  );
}

export default function PortfolioV2() {
  const [lang, setLang] = useState<Lang>(() => localStorage.getItem("portfolio-lang") === "en" ? "en" : "pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.22 });
  const pageTitle = useMemo(() => lang === "pt" ? "Cristiano Borges — Desenvolvedor React Native Sênior para projetos" : "Cristiano Borges — Senior React Native Developer for projects", [lang]);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = pageTitle;
    localStorage.setItem("portfolio-lang", lang);
  }, [lang, pageTitle]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navigate = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
    <div className="portfolio-v2">
      <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} aria-hidden="true" />
      <a href="#main" className="skip-link">{lang === "pt" ? "Ir para o conteúdo" : "Skip to content"}</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Cristiano Borges — início"><span>CB</span><i /></a>
        <nav className="desktop-nav" aria-label={lang === "pt" ? "Navegação principal" : "Main navigation"}>
          <a href="#projetos">{copy.nav.work[lang]}</a>
          <a href="#servicos">{copy.nav.services[lang]}</a>
          <a href="#processo">{copy.nav.process[lang]}</a>
          <a href="#sobre">{copy.nav.about[lang]}</a>
        </nav>
        <div className="header-actions">
          <button className="lang-button" onClick={() => setLang(lang === "pt" ? "en" : "pt")} aria-label={lang === "pt" ? "Mudar para inglês" : "Switch to Portuguese"}>{lang === "pt" ? "EN" : "PT"}</button>
          <a className="header-cta" href={WHATSAPP} target="_blank" rel="noreferrer">{copy.nav.contact[lang]} <Arrow /></a>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label={lang === "pt" ? "Abrir menu" : "Open menu"}><span /><span /></button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button onClick={() => setMenuOpen(false)} aria-label={lang === "pt" ? "Fechar menu" : "Close menu"}>×</button>
            <nav>
              {[["#projetos", copy.nav.work], ["#servicos", copy.nav.services], ["#processo", copy.nav.process], ["#sobre", copy.nav.about]] .map(([href, label], index) => (
                <motion.a key={href as string} href={href as string} onClick={navigate} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.07 }}><span>0{index + 1}</span>{(label as Localized)[lang]}</motion.a>
              ))}
            </nav>
            <a href={WHATSAPP} className="button button-primary" target="_blank" rel="noreferrer">{copy.hero.primary[lang]} <Arrow /></a>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.11 } } }}>
            <motion.div className="availability" variants={reveal}><span />{copy.hero.eyebrow[lang]}</motion.div>
            <h1><motion.span variants={reveal}>{copy.hero.titleA[lang]}</motion.span><motion.em variants={reveal}>{copy.hero.titleB[lang]}</motion.em></h1>
            <motion.p variants={reveal}>{copy.hero.description[lang]}</motion.p>
            <motion.div className="hero-actions" variants={reveal}>
              <a href={WHATSAPP} className="button button-primary" target="_blank" rel="noreferrer">{copy.hero.primary[lang]} <Arrow /></a>
              <a href="#projetos" className="text-link">{copy.hero.secondary[lang]} <span aria-hidden="true">↓</span></a>
            </motion.div>
          </motion.div>

          <motion.div className="hero-stage" initial={{ opacity: 0, scale: 0.92, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}>
            <div className="stage-glow" aria-hidden="true" />
            <motion.div className="device-art device-jobtto" animate={{ y: [0, -8, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}>
              <img src={`${BASE}assets/images/devices/jobtto-samsung.png`} alt="Aplicativo Jobtto exibido em um Samsung Galaxy Note20" width="890" height="1883" loading="eager" decoding="async" />
            </motion.div>
            <motion.div className="device-art device-colombo" animate={{ y: [0, 8, 0] }} transition={{ duration: 7.3, repeat: Infinity, ease: "easeInOut" }}>
              <img src={`${BASE}assets/images/devices/colombo-iphone.png`} alt="Aplicativo Colombo Bank exibido em um iPhone 13" width="887" height="1354" fetchPriority="high" decoding="async" />
            </motion.div>
            <div className="code-chip chip-one"><span>01</span>Product thinking</div>
            <div className="code-chip chip-two"><span>02</span>Native feel</div>
            <div className="code-chip chip-three"><span>03</span>Built to scale</div>
          </motion.div>

          <div className="hero-footer">
            <span>{copy.hero.availability[lang]} <i /></span>
            <span>React Native · React · Next.js</span>
            <span>Scroll ↓</span>
          </div>
        </section>

        <section className="proof-bar" aria-label={copy.proof.lead[lang]}>
          <p>{copy.proof.lead[lang]}</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={sectionSequence}>{copy.proof.items.map((item) => <motion.article key={item.value} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}><strong>{item.value}</strong><span>{item.label[lang]}</span></motion.article>)}</motion.div>
        </section>

        <section className="projects-section section-shell" id="projetos">
          <SectionIntro lang={lang} kicker={{ pt: "Trabalhos selecionados", en: "Selected work" }} title={{ pt: "Produtos feitos para o mundo real.", en: "Products built for the real world." }} text={{ pt: "Não são apenas telas bonitas. São experiências pensadas para operações, pessoas e negócios que dependem do mobile todos os dias.", en: "Not just beautiful screens. Experiences designed for operations, people and businesses that depend on mobile every day." }} />
          <div className="project-list">{projects.map((project) => <ProjectStory key={project.id} project={project} lang={lang} />)}</div>
          <motion.a className="more-work" href={`https://github.com/CristianoVieira1`} target="_blank" rel="noreferrer" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <span>{lang === "pt" ? "Ver presença técnica" : "See technical presence"}</span><strong>GitHub</strong><Arrow />
          </motion.a>
        </section>

        <section className="services-section section-shell" id="servicos">
          <SectionIntro lang={lang} kicker={{ pt: "Como posso ajudar", en: "How I can help" }} title={{ pt: "Do problema técnico ao impacto no produto.", en: "From technical challenge to product impact." }} />
          <div className="service-list">
            {services.map((service, index) => (
              <motion.article key={service.number} initial={{ opacity: 0, x: index % 2 === 0 ? -48 : 48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.38 }} transition={{ duration: 0.7, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}>
                <span className="service-number">{service.number}</span><h3>{service.title[lang]}</h3><p>{service.description[lang]}</p><strong>{service.outcome[lang]} <Arrow /></strong>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="manifesto-section">
          <motion.div className="manifesto-image" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }}>
            <motion.div className="portrait-halo" aria-hidden="true" initial={{ scale: 0.72, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }} />
            <motion.img src={`${BASE}assets/images/banner/banner-user-image-two.webp`} alt="Cristiano Borges, desenvolvedor React Native sênior" loading="lazy" width="888" height="1422" initial={{ y: 75, scale: 1.06 }} whileInView={{ y: 0, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} />
            <span className="portrait-caption">Cristiano Borges<br />Senior product developer</span>
          </motion.div>
          <motion.div className="manifesto-copy" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={reveal}>
            <span className="eyebrow"><span />{lang === "pt" ? "O jeito de trabalhar" : "The way I work"}</span>
            <blockquote>{lang === "pt" ? "Código é parte da entrega. Clareza, autonomia e senso de produto são o que fazem um projeto avançar." : "Code is part of the delivery. Clarity, ownership and product sense are what move a project forward."}</blockquote>
            <p>{lang === "pt" ? "Atuo há mais de seis anos entre produtos financeiros, operações em campo, educação e marketplaces. Essa bagagem ajuda a tomar decisões técnicas sem perder de vista quem usa e quem investe no produto." : "For over six years I have worked across financial products, field operations, education and marketplaces. That experience helps me make technical decisions without losing sight of users and business owners."}</p>
            <div className="manifesto-points"><span>→ {lang === "pt" ? "Comunicação direta" : "Direct communication"}</span><span>→ {lang === "pt" ? "Visão de produto" : "Product mindset"}</span><span>→ {lang === "pt" ? "Engenharia sustentável" : "Sustainable engineering"}</span></div>
          </motion.div>
        </section>

        <section className="process-section section-shell" id="processo">
          <SectionIntro lang={lang} kicker={{ pt: "Processo", en: "Process" }} title={{ pt: "Um caminho claro entre conversa e entrega.", en: "A clear path from conversation to delivery." }} text={{ pt: "Projetos andam melhor quando decisões, prioridades e progresso são visíveis para todos.", en: "Projects move better when decisions, priorities and progress are visible to everyone." }} />
          <ol className="process-grid">{process.map((step, index) => <motion.li key={step.number} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: index * 0.09 }}><span>{step.number}</span><h3>{step.title[lang]}</h3><p>{step.text[lang]}</p></motion.li>)}</ol>
        </section>

        <section className="stack-section" id="sobre">
          <div className="stack-marquee" aria-hidden="true"><div>React Native · TypeScript · Expo · React · Next.js · Firebase · APIs · CI/CD · React Native · TypeScript · Expo · React · Next.js · Firebase · APIs · CI/CD ·</div></div>
          <div className="stack-inner section-shell">
            <SectionIntro lang={lang} kicker={{ pt: "Base técnica", en: "Technical foundation" }} title={{ pt: "Tecnologia escolhida pelo contexto, não pela moda.", en: "Technology chosen for context, not trends." }} />
            <motion.div className="stack-columns" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionSequence}>
              <motion.div variants={maskedReveal}><span>Mobile</span><strong>React Native</strong><strong>Expo</strong><strong>iOS & Android</strong><strong>Native APIs</strong></motion.div>
              <motion.div variants={maskedReveal}><span>Frontend</span><strong>React</strong><strong>Next.js</strong><strong>TypeScript</strong><strong>Design systems</strong></motion.div>
              <motion.div variants={maskedReveal}><span>Produto & entrega</span><strong>REST APIs</strong><strong>Firebase</strong><strong>CI/CD</strong><strong>Performance</strong></motion.div>
            </motion.div>
          </div>
        </section>

        <section className="faq-section section-shell" id="faq">
          <SectionIntro lang={lang} kicker={{ pt: "Perguntas frequentes", en: "Frequently asked" }} title={{ pt: "Antes de começarmos.", en: "Before we start." }} />
          <motion.div className="faq-list" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={sectionSequence}>{faqs.map((item, index) => <motion.details key={item.q.pt} variants={{ hidden: { opacity: 0, x: 34 }, visible: { opacity: 1, x: 0, transition: { duration: 0.58, ease: [0.16, 1, 0.3, 1] } } }}><summary><span>0{index + 1}</span>{item.q[lang]}<i>+</i></summary><p>{item.a[lang]}</p></motion.details>)}</motion.div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-glow" aria-hidden="true" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={reveal}>
            <span className="eyebrow"><span />{lang === "pt" ? "Seu próximo produto" : "Your next product"}</span>
            <h2>{lang === "pt" ? <>Tem uma ideia ou um produto<br /><em>pedindo o próximo passo?</em></> : <>Have an idea or a product<br /><em>ready for its next step?</em></>}</h2>
            <p>{lang === "pt" ? "Conte brevemente o que você quer construir, melhorar ou destravar. Eu respondo com perguntas objetivas e um próximo passo possível." : "Tell me briefly what you want to build, improve or unblock. I’ll reply with focused questions and a practical next step."}</p>
            <div className="contact-actions"><a className="button button-light" href={WHATSAPP} target="_blank" rel="noreferrer">{lang === "pt" ? "Conversar no WhatsApp" : "Talk on WhatsApp"} <Arrow /></a><a className="text-link" href={EMAIL}>{lang === "pt" ? "Prefiro enviar um e-mail" : "I prefer email"} <Arrow /></a></div>
          </motion.div>
          <footer>
            <a className="brand brand-light" href="#home"><span>CB</span><i /></a>
            <p>React Native senior developer<br />React · Next.js · Mobile products</p>
            <div><a href="https://www.linkedin.com/in/cristianobv" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://github.com/CristianoVieira1" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href={EMAIL}>Email <Arrow /></a></div>
            <small>© {new Date().getFullYear()} Cristiano Borges. {lang === "pt" ? "Atendimento remoto — Brasil." : "Remote services — Brazil."}</small>
          </footer>
        </section>
      </main>
    </div>
    </MotionConfig>
  );
}
