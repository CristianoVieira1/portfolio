import { portfolioItems } from "@/data/portfolio";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

type PortfolioItem = (typeof portfolioItems)[number];

const portfolioDetails: Record<string, { pt: string; en: string }> = {
  "colombo-bank": {
    pt: "Aplicativo bancário mobile com foco em navegação intuitiva, componentes reutilizáveis e evolução contínua da base de código.",
    en: "Mobile banking app focused on intuitive navigation, reusable components, and continuous codebase evolution.",
  },
  "gazin-bank": {
    pt: "Projeto com integrações de APIs e fluxos financeiros, priorizando estabilidade, clareza de interface e performance em produção.",
    en: "Project with API integrations and financial flows, prioritizing stability, interface clarity, and production performance.",
  },
  "fbv-2023": {
    pt: "Aplicação mobile construída com atenção à experiência do usuário, consistência visual e entregas rápidas para validar produto.",
    en: "Mobile app built with attention to user experience, visual consistency, and fast deliveries to validate the product.",
  },
  "sistema-siga": {
    pt: "Solução com frente mobile e web para operação do negócio, com estrutura preparada para escalar funcionalidades e integrações.",
    en: "Solution with mobile and web fronts for business operations, structured to scale features and integrations.",
  },
  "parceiro-da-construcao": {
    pt: "Plataforma mobile com foco em usabilidade e retenção, organizada para crescimento do produto com manutenção sustentável.",
    en: "Mobile platform focused on usability and retention, organized for product growth with sustainable maintenance.",
  },
  "otica-house": {
    pt: "Projeto web para e-commerce com experiência de compra mais fluida, performance consistente e evolução orientada a resultados.",
    en: "Web e-commerce project with a smoother purchase flow, consistent performance, and results-driven evolution.",
  },
};

export default function Portofolio() {
  const { lang } = useLanguage();
  const t = translations.portfolio;

  const [activeCategory, setActiveCategory] = useState(lang === "pt" ? "Todos" : "All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = lang === "pt"
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
          item.categories.includes(activeCategory)
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
    ? portfolioDetails[selectedProject.slug]?.[lang] ??
      (lang === "pt"
        ? "Projeto entregue com foco em performance, experiência de uso e evolução sustentável do produto."
        : "Project delivered with a focus on performance, user experience, and sustainable product evolution.")
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
                                  <span className="tag-item portfolio-tag-pill">{tag}</span>
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
                            <span className="btn-text">{t.viewProject[lang]}</span>
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
                <h3 id="portfolio-top-modal-title" className="portfolio-top-modal__title">
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
                      <span key={category} className="portfolio-top-modal__chip is-category">
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
