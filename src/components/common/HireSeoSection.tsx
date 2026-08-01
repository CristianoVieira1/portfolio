import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const WHATSAPP_URL =
  "https://wa.me/5551998884446?text=Ol%C3%A1%20Cristiano%2C%20quero%20contratar%20um%20desenvolvedor%20React%20Native";

export default function HireSeoSection() {
  const { lang } = useLanguage();
  const t = translations.hire;

  return (
    <section className="hire-seo-area tmp-section-gapTop" id="servicos">
      <div className="container">
        <div className="section-head mb--50">
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

        <div className="hire-services-grid">
          {t.services.map((service) => (
            <article key={service.title.pt} className="hire-service-item">
              <h3>{service.title[lang]}</h3>
              <p>{service.description[lang]}</p>
            </article>
          ))}
        </div>

        <div className="hire-faq-wrap" id="faq">
          <h2 className="hire-faq-title">{t.faqTitle[lang]}</h2>
          <div className="hire-faq-list">
            {t.faqs.map((item) => (
              <details key={item.question.pt} className="hire-faq-item">
                <summary>{item.question[lang]}</summary>
                <p>{item.answer[lang]}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="hire-cta-row">
          <a
            className="tmp-btn hover-icon-reverse radius-round"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-reverse-wrapper">
              <span className="btn-text">{t.cta[lang]}</span>
              <span className="btn-icon">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              </span>
              <span className="btn-icon">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
