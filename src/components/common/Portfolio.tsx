import { useLanguage } from "@/context/LanguageContext";
import { portfolioItems } from "@/data/portfolio";
import { translations } from "@/i18n/translations";
import { useEffect, useMemo, useRef, useState } from "react";

type PortfolioItem = (typeof portfolioItems)[number];

type CaseStudy = {
  summary: { pt: string; en: string };
  role: { pt: string; en: string };
  challenge: { pt: string; en: string };
  solution: { pt: string; en: string };
  result: { pt: string; en: string };
};

const INITIAL_VISIBLE = 6;
const WHATSAPP_URL =
  "https://wa.me/5551998884446?text=Ol%C3%A1%20Cristiano%2C%20quero%20falar%20sobre%20um%20projeto";

const portfolioDetails: Record<string, CaseStudy> = {
  "colombo-bank": {
    summary: {
      pt: "Aplicativo bancário mobile com foco em jornadas financeiras claras e arquitetura preparada para evolução contínua.",
      en: "Mobile banking app focused on clear financial journeys and architecture ready for continuous evolution.",
    },
    role: {
      pt: "Desenvolvimento das jornadas de autenticação, consulta de saldo e fluxos principais em React Native.",
      en: "Built authentication, balance inquiry and core journeys in React Native.",
    },
    challenge: {
      pt: "Manter consistência das operações e da UX em conexões instáveis e em dispositivos variados.",
      en: "Keep operations and UX consistent on unstable connections and varied devices.",
    },
    solution: {
      pt: "Componentes reutilizáveis, tratamento centralizado de erros e organização de estado para jornadas críticas.",
      en: "Reusable components, centralized error handling and structured state for critical journeys.",
    },
    result: {
      pt: "Base estável para novas funcionalidades e experiência mais previsível nas jornadas principais.",
      en: "A stable foundation for new features and a more predictable experience in core journeys.",
    },
  },
  "gazin-bank": {
    summary: {
      pt: "Produto financeiro com integrações de APIs e fluxos transacionais orientados à disponibilidade.",
      en: "Financial product with API integrations and transactional flows oriented to availability.",
    },
    role: {
      pt: "Implementação de fluxos transacionais, integrações e telas de operação em React Native.",
      en: "Implemented transactional flows, integrations and operation screens in React Native.",
    },
    challenge: {
      pt: "Garantir clareza e confiabilidade em operações sensíveis com múltiplas dependências de API.",
      en: "Ensure clarity and reliability in sensitive operations with multiple API dependencies.",
    },
    solution: {
      pt: "Separação de camadas de integração, feedbacks de erro consistentes e fluxos guiados para o usuário.",
      en: "Separated integration layers, consistent error feedback and guided user flows.",
    },
    result: {
      pt: "Operações mais claras em produção e evolução mais segura das funcionalidades financeiras.",
      en: "Clearer operations in production and safer evolution of financial features.",
    },
  },
  "jobtto-mobile": {
    summary: {
      pt: "Aplicativo mobile em React Native com foco em performance, navegação fluida e integração com APIs.",
      en: "React Native mobile app focused on performance, smooth navigation and API integration.",
    },
    role: {
      pt: "Desenvolvimento das telas principais, navegação e integração com backend.",
      en: "Built main screens, navigation and backend integration.",
    },
    challenge: {
      pt: "Entregar uma experiência consistente sem sacrificar velocidade de carregamento e manutenção.",
      en: "Deliver a consistent experience without sacrificing load speed and maintainability.",
    },
    solution: {
      pt: "Arquitetura modular, componentes reutilizáveis e atenção a estados de carregamento e falha.",
      en: "Modular architecture, reusable components and careful loading/error states.",
    },
    result: {
      pt: "App mais estável para evolução contínua e navegação mais fluida para o usuário.",
      en: "A more stable app for continuous evolution and smoother navigation for users.",
    },
  },
  "jobtto-web": {
    summary: {
      pt: "Aplicação web em React com responsividade, performance e organização de código.",
      en: "React web app with responsiveness, performance and clean code organization.",
    },
    role: {
      pt: "Implementação de interfaces responsivas e estruturação do frontend.",
      en: "Implemented responsive interfaces and frontend structure.",
    },
    challenge: {
      pt: "Manter consistência visual e performance em diferentes resoluções.",
      en: "Keep visual consistency and performance across resolutions.",
    },
    solution: {
      pt: "Layout adaptável, componentes compartilhados e atenção a renderização e carregamento.",
      en: "Adaptive layout, shared components and attention to rendering and loading.",
    },
    result: {
      pt: "Interface mais fácil de manter e evoluir sem perder qualidade visual.",
      en: "An interface easier to maintain and evolve without losing visual quality.",
    },
  },
  "mais-negocio-vibra": {
    summary: {
      pt: "App corporativo da Vibra Energia para operação e gestão em campo.",
      en: "Vibra Energia corporate app for field operations and management.",
    },
    role: {
      pt: "Evolução do produto em React Native com foco em estabilidade, performance e integrações internas.",
      en: "Product evolution in React Native focused on stability, performance and internal integrations.",
    },
    challenge: {
      pt: "Suportar uso intenso em campo com estabilidade e integração a serviços internos.",
      en: "Support intensive field usage with stability and internal service integration.",
    },
    solution: {
      pt: "Melhorias contínuas de arquitetura, tratamento de falhas e otimização de jornadas críticas.",
      en: "Continuous architecture improvements, failure handling and optimization of critical journeys.",
    },
    result: {
      pt: "Produto mais confiável para operação diária e base para novas entregas.",
      en: "A more reliable product for daily operations and a base for new deliveries.",
    },
  },
  "fbv-2023": {
    summary: {
      pt: "Aplicação mobile voltada à validação rápida de produto com experiência centrada no usuário.",
      en: "Mobile app focused on rapid product validation with a user-centered experience.",
    },
    role: {
      pt: "Desenvolvimento das telas e fluxos principais com atenção à consistência visual.",
      en: "Built main screens and flows with attention to visual consistency.",
    },
    challenge: {
      pt: "Validar produto rapidamente sem abrir mão de usabilidade.",
      en: "Validate the product quickly without sacrificing usability.",
    },
    solution: {
      pt: "Iterações curtas, componentes reutilizáveis e navegação simples.",
      en: "Short iterations, reusable components and simple navigation.",
    },
    result: {
      pt: "Base funcional para feedback de usuários e evolução do produto.",
      en: "A functional base for user feedback and product evolution.",
    },
  },
  "sistema-siga": {
    summary: {
      pt: "Sistema com aplicações mobile e web para operação do negócio.",
      en: "System with mobile and web apps for business operations.",
    },
    role: {
      pt: "Desenvolvimento de interfaces mobile/web e estruturação para evolução conjunta.",
      en: "Built mobile/web interfaces and structure for joint evolution.",
    },
    challenge: {
      pt: "Manter coerência entre plataformas e preparar crescimento futuro.",
      en: "Keep consistency across platforms and prepare for future growth.",
    },
    solution: {
      pt: "Arquitetura escalável, componentes compartilhados e integração entre canais.",
      en: "Scalable architecture, shared components and cross-channel integration.",
    },
    result: {
      pt: "Produto preparado para novas funcionalidades e integrações.",
      en: "A product ready for new features and integrations.",
    },
  },
  "parceiro-da-construcao": {
    summary: {
      pt: "Plataforma mobile orientada a usabilidade e retenção, com conteúdo e jornadas de aprendizado.",
      en: "Mobile platform oriented to usability and retention, with content and learning journeys.",
    },
    role: {
      pt: "Implementação de módulos de navegação, conteúdo e experiência do usuário.",
      en: "Implemented navigation, content and user experience modules.",
    },
    challenge: {
      pt: "Facilitar retenção com uma experiência clara e manutenção contínua.",
      en: "Support retention with a clear experience and continuous maintenance.",
    },
    solution: {
      pt: "Arquitetura modular e fluxos pensados para uso recorrente.",
      en: "Modular architecture and flows designed for recurring use.",
    },
    result: {
      pt: "Produto mais fácil de expandir e manter ao longo do tempo.",
      en: "A product easier to expand and maintain over time.",
    },
  },
  "otica-house": {
    summary: {
      pt: "E-commerce web focado em experiência de compra, performance e conversão.",
      en: "Web e-commerce focused on shopping experience, performance and conversion.",
    },
    role: {
      pt: "Desenvolvimento frontend e evolução de fluxos de navegação e compra.",
      en: "Frontend development and evolution of browsing and purchase flows.",
    },
    challenge: {
      pt: "Equilibrar catálogo, performance e clareza no funil de compra.",
      en: "Balance catalog, performance and clarity in the purchase funnel.",
    },
    solution: {
      pt: "Otimização de interfaces, organização de componentes e atenção a conversão.",
      en: "Interface optimization, component organization and conversion focus.",
    },
    result: {
      pt: "Experiência de compra mais fluida e base para evolução contínua.",
      en: "A smoother shopping experience and a base for continuous evolution.",
    },
  },
  "apotiguar-ecommerce": {
    summary: {
      pt: "E-commerce na Tray Corp com checkout, logística e gestão de catálogo.",
      en: "E-commerce on Tray Corp with checkout, logistics and catalog management.",
    },
    role: {
      pt: "Implementação e ajuste de jornadas de compra e catálogo na plataforma.",
      en: "Implemented and tuned purchase and catalog journeys on the platform.",
    },
    challenge: {
      pt: "Entregar uma experiência de compra consistente com as regras da plataforma.",
      en: "Deliver a consistent shopping experience within platform constraints.",
    },
    solution: {
      pt: "Configuração e personalização de fluxos essenciais de e-commerce.",
      en: "Configuration and customization of essential e-commerce flows.",
    },
    result: {
      pt: "Loja operacional com navegação e checkout mais claros para o cliente.",
      en: "An operational store with clearer navigation and checkout for customers.",
    },
  },
  "bateponto-pontotel": {
    summary: {
      pt: "App de ponto digital com biometria, geolocalização e suporte offline.",
      en: "Digital time-tracking app with biometrics, geolocation and offline support.",
    },
    role: {
      pt: "Manutenção e evolução de marcações, autenticação e jornadas críticas do app.",
      en: "Maintained and evolved check-ins, authentication and critical app journeys.",
    },
    challenge: {
      pt: "Garantir confiabilidade das marcações mesmo com falhas de conexão.",
      en: "Ensure reliable check-ins even with connection failures.",
    },
    solution: {
      pt: "Suporte offline, biometria/geolocalização e correção de bugs críticos.",
      en: "Offline support, biometrics/geolocation and critical bug fixes.",
    },
    result: {
      pt: "Registro de ponto mais confiável e experiência mais estável no dia a dia.",
      en: "More reliable time tracking and a more stable day-to-day experience.",
    },
  },
  topotronics: {
    summary: {
      pt: "App independente para cálculos de engenharia de estradas, publicado nas lojas.",
      en: "Independent road engineering calculation app, published on the stores.",
    },
    role: {
      pt: "Desenvolvimento ponta a ponta: app, Firebase, assinaturas com Asaas e publicação.",
      en: "End-to-end development: app, Firebase, Asaas subscriptions and publishing.",
    },
    challenge: {
      pt: "Entregar precisão, cobrança recorrente e manutenção contínua como produto solo.",
      en: "Deliver precision, recurring billing and continuous maintenance as a solo product.",
    },
    solution: {
      pt: "React Native + Firebase no backend e Asaas para pagamentos recorrentes.",
      en: "React Native + Firebase backend and Asaas for recurring payments.",
    },
    result: {
      pt: "Produto publicado e em manutenção contínua, com fluxo de assinatura operacional.",
      en: "Published product under continuous maintenance, with an operational subscription flow.",
    },
  },
};

export default function Portofolio() {
  const { lang } = useLanguage();
  const t = translations.portfolio;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const [activeCategory, setActiveCategory] = useState(
    lang === "pt" ? "Todos" : "All",
  );
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null,
  );
  const [showAll, setShowAll] = useState(false);

  const categories =
    lang === "pt"
      ? ["Todos", "Mobile", "Web", "Frontend", "Fullstack"]
      : ["All", "Mobile", "Web", "Frontend", "Fullstack"];

  useEffect(() => {
    setActiveCategory(lang === "pt" ? "Todos" : "All");
    setShowAll(false);
  }, [lang]);

  useEffect(() => {
    if (!selectedProject) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      window.clearTimeout(focusTimer);
      previouslyFocusedRef.current?.focus();
    };
  }, [selectedProject]);

  const filtered = useMemo(() => {
    const allLabel = lang === "pt" ? "Todos" : "All";
    return activeCategory === allLabel
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.categories.includes(activeCategory),
        );
  }, [activeCategory, lang]);

  const visibleItems = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hasMore = filtered.length > INITIAL_VISIBLE;

  const openProjectModal = (item: PortfolioItem) => {
    setSelectedProject(item);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const modalCopy = {
    detailsTitle: lang === "pt" ? "Estudo de caso" : "Case study",
    techLabel: lang === "pt" ? "Tecnologias" : "Tech Stack",
    categoryLabel: lang === "pt" ? "Categorias" : "Categories",
    closeModal: lang === "pt" ? "Fechar modal" : "Close modal",
  };

  const selectedCase = selectedProject
    ? portfolioDetails[selectedProject.slug]
    : null;

  return (
    <section
      className="latest-portfolio-area custom-column-grid tmp-section-gap"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">{t.subtitle[lang]}</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            {t.title[lang]}
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            {t.description[lang]}
          </p>
        </div>
        <div className="latest-portfolio-tabs-area">
          <nav aria-label={lang === "pt" ? "Filtros de projetos" : "Project filters"}>
            <ul className="nav nav-tabs">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    className={`nav-link ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveCategory(category);
                      setShowAll(false);
                    }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="tab-content bg-blur-style-one">
            <div className="tab-pane fade show active">
              <div className="row">
                {visibleItems.map((item) => (
                  <div className="col-lg-6" key={item.id}>
                    <div
                      className={`latest-portfolio-card-style-two portfolio-modal-trigger image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
                      role="button"
                      tabIndex={0}
                      aria-label={`${t.viewProject[lang]}: ${item.title}`}
                      onClick={() => openProjectModal(item)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          openProjectModal(item);
                        }
                      }}
                    >
                      <div className="portfoli-card-img">
                        <div className="img-box v2">
                          <div className="portfolio-media-btn tmp-scroll-trigger tmp-zoom-in animation-order-1">
                            <img
                              loading="lazy"
                              className="w-100"
                              alt={item.imageAlt[lang]}
                              src={item.imageSrc}
                              width={item.width}
                              height={item.height}
                              onError={(event) => {
                                if (item.imageFallback) {
                                  event.currentTarget.src = item.imageFallback;
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <h3 className="portfolio-card-title">
                            <span className="portfolio-card-title-btn">
                              {item.title}
                            </span>
                          </h3>
                          <div className="tag-items">
                            <ul>
                              {item.tags.map((tag, index) => (
                                <li key={index}>
                                  <span className="tag-item portfolio-tag-pill">
                                    {tag}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="tmp-btn hover-icon-reverse radius-round btn-border btn-md portfolio-open-btn"
                          onClick={(event) => {
                            event.stopPropagation();
                            openProjectModal(item);
                          }}
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">
                              {t.viewProject[lang]}
                            </span>
                            <span className="btn-icon">
                              <i
                                className="fa-sharp fa-regular fa-arrow-right"
                                aria-hidden="true"
                              />
                            </span>
                            <span className="btn-icon">
                              <i
                                className="fa-sharp fa-regular fa-arrow-right"
                                aria-hidden="true"
                              />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="portfolio-show-more">
                  <button
                    type="button"
                    className="tmp-btn hover-icon-reverse radius-round btn-border"
                    onClick={() => setShowAll((prev) => !prev)}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">
                        {showAll ? t.showLess[lang] : t.showAll[lang]}
                      </span>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <div
          className="portfolio-top-modal is-open"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-top-modal-title"
          onClick={closeProjectModal}
        >
          <div className="portfolio-top-modal__backdrop" />
          <div
            className="portfolio-top-modal__panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="portfolio-top-modal__close"
              aria-label={modalCopy.closeModal}
              onClick={closeProjectModal}
            >
              <i className="fa-light fa-xmark" aria-hidden="true" />
            </button>

            <div className="portfolio-top-modal__content">
              <div className="portfolio-top-modal__image-side">
                <img
                  loading="lazy"
                  src={selectedProject.imageSrc}
                  alt={selectedProject.imageAlt[lang]}
                  width={selectedProject.width}
                  height={selectedProject.height}
                  onError={(event) => {
                    if (selectedProject.imageFallback) {
                      event.currentTarget.src = selectedProject.imageFallback;
                    }
                  }}
                />
              </div>

              <div className="portfolio-top-modal__text-side">
                <span className="portfolio-top-modal__eyebrow">
                  {modalCopy.detailsTitle}
                </span>
                <h3
                  id="portfolio-top-modal-title"
                  className="portfolio-top-modal__title"
                >
                  {selectedProject.title}
                </h3>
                <p className="portfolio-top-modal__description">
                  {selectedCase?.summary[lang]}
                </p>

                {selectedCase && (
                  <dl className="portfolio-case-study">
                    <div>
                      <dt>{t.roleLabel[lang]}</dt>
                      <dd>{selectedCase.role[lang]}</dd>
                    </div>
                    <div>
                      <dt>{t.challengeLabel[lang]}</dt>
                      <dd>{selectedCase.challenge[lang]}</dd>
                    </div>
                    <div>
                      <dt>{t.solutionLabel[lang]}</dt>
                      <dd>{selectedCase.solution[lang]}</dd>
                    </div>
                    <div>
                      <dt>{t.resultLabel[lang]}</dt>
                      <dd>{selectedCase.result[lang]}</dd>
                    </div>
                  </dl>
                )}

                <div className="portfolio-top-modal__meta">
                  <h4>{modalCopy.techLabel}</h4>
                  <div className="portfolio-top-modal__chips">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="portfolio-top-modal__chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="portfolio-top-modal__meta">
                  <h4>{modalCopy.categoryLabel}</h4>
                  <div className="portfolio-top-modal__chips">
                    {selectedProject.categories.map((category) => (
                      <span
                        key={category}
                        className="portfolio-top-modal__chip is-category"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="portfolio-modal-cta">
                  {t.ctaAfterProject[lang]}{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
