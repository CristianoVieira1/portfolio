import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const WHATSAPP_URL =
  "https://wa.me/5551998884446?text=Ol%C3%A1%20Cristiano%2C%20quero%20tirar%20um%20projeto%20do%20papel";

export default function ProjectCta() {
  const { lang } = useLanguage();
  const t = translations.projectCta;

  return (
    <section className="project-cta-area" id="projeto">
      <div className="container">
        <div className="project-cta-panel">
          <div className="project-cta-copy">
            <span className="project-cta-eyebrow">{t.eyebrow[lang]}</span>
            <h2 className="project-cta-title">{t.title[lang]}</h2>
            <p className="project-cta-description">{t.description[lang]}</p>
          </div>
          <div className="project-cta-actions">
            <a
              className="project-cta-whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              <span>{t.whatsapp[lang]}</span>
            </a>
            <a className="project-cta-secondary" href="#contacts">
              {t.form[lang]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
