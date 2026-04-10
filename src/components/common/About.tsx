import OdometerComponent from "./OdometerComponent";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function About({ parentClass = "about-us-area" }) {
  const { lang } = useLanguage();
  const t = translations.about;

  return (
    <section className={parentClass} id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-left-content-wrap bg-vactor-one">
              <div className="years-of-experience-card tmp-scroll-trigger tmp-fade-in animation-order-1">
                <h2 className="counter card-title">
                  <OdometerComponent max={6} /> +
                </h2>
                <p className="card-para">{t.yearsExp[lang]}</p>
              </div>
              <div className="design-card tmp-scroll-trigger tmp-fade-in animation-order-2">
                <div className="design-card-img">
                  <div className="icon">
                    <i className="fa-sharp fa-thin fa-lock" />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">{t.projectsDelivered[lang]}</h3>
                  <p className="card-para">{t.projectsCount[lang]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-right-content-wrap">
              <div className="section-head text-align-left mb--50">
                <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="subtitle">{t.subtitle[lang]}</span>
                </div>
                <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                  {t.title[lang]} <br />
                  {t.titleLine2[lang]}
                </h2>
                <p className="description about-description-text tmp-scroll-trigger tmp-fade-in animation-order-3">
                  {t.description[lang]}
                </p>
              </div>
              <div className="about-us-section-card row g-5">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                    <div className="card-head">
                      <div className="logo-img">
                        <img
                          alt="logo"
                          loading="lazy"
                          src="/portfolio/assets/images/about/logo-1.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">{t.card1Title[lang]}</h3>
                    </div>
                    <p className="card-para">{t.card1Desc[lang]}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-5">
                    <div className="card-head">
                      <div className="logo-img">
                        <img
                          loading="lazy"
                          alt="logo"
                          src="/portfolio/assets/images/about/logo-2.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">{t.card2Title[lang]}</h3>
                    </div>
                    <p className="card-para">{t.card2Desc[lang]}</p>
                  </div>
                </div>
              </div>
              <div className="about-actions-row mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6">
                <a
                  className="about-projects-btn"
                  href="#portfolio"
                >
                  <span className="about-projects-btn__text">{t.viewProjectsBtn[lang]}</span>
                  <span className="about-projects-btn__icon" aria-hidden="true">
                    <i className="fa-regular fa-grid-2" />
                  </span>
                </a>
                <a
                  className="about-cv-link"
                  href="/portfolio/assets/pdf/CristianoBorges.pdf"
                  download="CristianoBorges.pdf"
                >
                  <span className="about-cv-link__text">{t.downloadCvBtn[lang]}</span>
                  <span className="about-cv-link__icon" aria-hidden="true">
                    <i className="fa-regular fa-download" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
