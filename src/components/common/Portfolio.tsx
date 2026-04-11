import { useLanguage } from "@/context/LanguageContext";
import { portfolioItems } from "@/data/portfolio";
import { translations } from "@/i18n/translations";
import { useEffect, useMemo, useState } from "react";

type PortfolioItem = (typeof portfolioItems)[number];

const portfolioDetails: Record<string, { pt: string; en: string }> = {
  "colombo-bank": {
    pt: "Aplicativo bancário mobile desenvolvido com foco em experiência do usuário, navegação intuitiva e arquitetura escalável, utilizando componentes reutilizáveis para garantir consistência e evolução contínua do produto.",
    en: "Mobile banking application built with a strong focus on user experience, intuitive navigation, and scalable architecture, leveraging reusable components to ensure consistency and continuous product evolution.",
  },

  "gazin-bank": {
    pt: "Projeto financeiro com integrações robustas de APIs e gestão de fluxos transacionais, priorizando alta disponibilidade, performance em produção e clareza na experiência do usuário.",
    en: "Financial project featuring robust API integrations and transactional flow management, prioritizing high availability, production performance, and clear user experience.",
  },

  "jobtto-mobile": {
    pt: "Aplicativo mobile desenvolvido em React Native com foco em performance, navegação fluida e experiência consistente, estruturado com boas práticas de arquitetura e integração com APIs.",
    en: "Mobile application built with React Native, focusing on performance, smooth navigation, and consistent user experience, structured with solid architectural practices and API integrations.",
  },

  "jobtto-web": {
    pt: "Aplicação web desenvolvida em React com foco em responsividade, performance e organização de código, garantindo escalabilidade e facilidade de manutenção.",
    en: "Web application built with React, focused on responsiveness, performance, and clean code organization, ensuring scalability and ease of maintenance.",
  },

  "mais-negocio-vibra": {
    pt: "Aplicativo corporativo da Vibra Energia voltado para gestão e operação de negócios, com foco em performance, integração com serviços internos e experiência otimizada para usuários em campo.",
    en: "Corporate application from Vibra Energia focused on business management and operations, emphasizing performance, integration with internal services, and an optimized experience for field users.",
  },

  "fbv-2023": {
    pt: "Aplicação mobile desenvolvida com foco em validação rápida de produto, garantindo consistência visual, fluidez na navegação e uma experiência centrada no usuário.",
    en: "Mobile application built with a focus on rapid product validation, ensuring visual consistency, smooth navigation, and a user-centered experience.",
  },

  "sistema-siga": {
    pt: "Sistema completo com aplicações mobile e web voltadas à operação do negócio, estruturado com arquitetura escalável para suportar crescimento, novas funcionalidades e integrações futuras.",
    en: "Full system with mobile and web applications designed for business operations, built on a scalable architecture to support growth, new features, and future integrations.",
  },

  "parceiro-da-construcao": {
    pt: "Plataforma mobile orientada à usabilidade e retenção de usuários, com arquitetura modular que facilita manutenção contínua e expansão do produto.",
    en: "Mobile platform focused on usability and user retention, featuring a modular architecture that supports continuous maintenance and product expansion.",
  },

  "otica-house": {
    pt: "E-commerce web desenvolvido para oferecer uma experiência de compra fluida, com foco em performance, conversão e evolução contínua baseada em métricas.",
    en: "Web e-commerce platform designed to deliver a smooth shopping experience, focusing on performance, conversion, and data-driven continuous improvement.",
  },
  "apotiguar-ecommerce": {
    pt: "E-commerce desenvolvido na plataforma Tray Corp, com foco em performance, navegação otimizada e gestão eficiente de catálogo, integrando funcionalidades essenciais como checkout, logística e controle de pedidos para garantir uma experiência de compra consistente.",
    en: "E-commerce built on the Tray Corp platform, focused on performance, optimized navigation, and efficient catalog management, integrating essential features such as checkout, logistics, and order management to ensure a consistent shopping experience.",
  },
  "bateponto-pontotel": {
    pt: "Aplicativo mobile para registro de ponto digital desenvolvido com foco em praticidade, segurança e confiabilidade, permitindo marcações rápidas, controle de jornada em tempo real e funcionamento offline, com recursos avançados como autenticação por biometria e geolocalização.",
    en: "Mobile application for digital time tracking designed with a focus on usability, security, and reliability, enabling fast check-ins, real-time work hour tracking, and offline functionality, with advanced features such as biometric and geolocation authentication.",
  },
};
export default function Portofolio() {
  const { lang } = useLanguage();
  const t = translations.portfolio;

  const [activeCategory, setActiveCategory] = useState(
    lang === "pt" ? "Todos" : "All",
  );
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null,
  );

  const categories =
    lang === "pt"
      ? ["Todos", "Mobile", "Web", "Frontend", "Fullstack"]
      : ["All", "Mobile", "Web", "Frontend", "Fullstack"];

  useEffect(() => {
    setActiveCategory(lang === "pt" ? "Todos" : "All");
  }, [lang]);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
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

  const openProjectModal = (item: PortfolioItem) => {
    setSelectedProject(item);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const modalCopy = {
    detailsTitle: lang === "pt" ? "Detalhes do Projeto" : "Project Details",
    techLabel: lang === "pt" ? "Tecnologias" : "Tech Stack",
    categoryLabel: lang === "pt" ? "Categorias" : "Categories",
    closeModal: lang === "pt" ? "Fechar modal" : "Close modal",
  };

  const selectedProjectDescription = selectedProject
    ? (portfolioDetails[selectedProject.slug]?.[lang] ??
      (lang === "pt"
        ? "Projeto entregue com foco em performance, experiência de uso e evolução sustentável do produto."
        : "Project delivered with a focus on performance, user experience, and sustainable product evolution."))
    : "";

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
          <nav>
            <ul className="nav nav-tabs">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={`nav-link ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
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
                {filtered.map((item) => (
                  <div className="col-lg-6" key={item.id}>
                    <div
                      className={`latest-portfolio-card-style-two portfolio-modal-trigger image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
                      role="button"
                      tabIndex={0}
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
                          <button
                            type="button"
                            className="portfolio-media-btn tmp-scroll-trigger tmp-zoom-in animation-order-1"
                            onClick={() => openProjectModal(item)}
                          >
                            <img
                              loading="lazy"
                              className="w-100"
                              alt="Thumbnail"
                              src={item.imageSrc}
                              width={item.width}
                              height={item.height}
                            />
                          </button>
                        </div>
                      </div>
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <h3 className="portfolio-card-title">
                            <button
                              type="button"
                              className="portfolio-card-title-btn"
                              onClick={() => openProjectModal(item)}
                            >
                              {item.title}
                            </button>
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
                          onClick={() => openProjectModal(item)}
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">
                              {t.viewProject[lang]}
                            </span>
                            <span className="btn-icon">
                              <i className="fa-sharp fa-regular fa-arrow-right" />
                            </span>
                            <span className="btn-icon">
                              <i className="fa-sharp fa-regular fa-arrow-right" />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
              type="button"
              className="portfolio-top-modal__close"
              aria-label={modalCopy.closeModal}
              onClick={closeProjectModal}
            >
              <i className="fa-light fa-xmark" />
            </button>

            <div className="portfolio-top-modal__content">
              <div className="portfolio-top-modal__image-side">
                <img
                  loading="lazy"
                  src={selectedProject.imageSrc}
                  alt={selectedProject.title}
                  width={selectedProject.width}
                  height={selectedProject.height}
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
                  {selectedProjectDescription}
                </p>

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
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
