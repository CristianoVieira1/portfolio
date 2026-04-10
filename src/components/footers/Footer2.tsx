import { Link } from "react-router-dom";
import NeonLogo from "../common/NeonLogo";
import ScrollTop from "../common/ScrollTop";
import MobileMenu from "../headers/MobileMenu";
import MobileMenuOnepage from "../headers/MobileMenuOnepage";
import Sidebar from "../headers/Sidebar";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function Footer2() {
  const { lang } = useLanguage();
  const t = translations.footer;
  const nav = translations.nav;

  const links = [
    { href: "#home", label: nav.home[lang] },
    { href: "#about", label: nav.about[lang] },
    { href: "#resume-section", label: nav.experience[lang] },
    { href: "#portfolio", label: nav.portfolio[lang] },
    { href: "#contacts", label: nav.contact[lang] },
  ];

  return (
    <>
      <footer className="footer-area footer-style-two-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-two">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link to={`/`}>
                      <NeonLogo size="sm" className="neon-header-logo" />
                    </Link>
                  </div>
                  <p className="description">{t.description[lang]}</p>
                  <div className="social-link footer">
                    <a href="https://www.linkedin.com/in/cristianobv" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://github.com/CristianoVieira1" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-github" />
                    </a>
                    <a href="https://wa.me/5551998884446" target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                    <a href="mailto:cristianovieirati@gmail.com">
                      <i className="fa-light fa-envelope" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="quick-link-wrap">
                  <h5 className="ft-title">{t.quickLinks[lang]}</h5>
                  <ul className="ft-link tmp-scroll-trigger dark-content animation-order-1 tmp-link-animation">
                    {links.map((item, index) => (
                      <li key={index}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                  <ul className="ft-link tmp-scroll-trigger light-content2 animation-order-1 tmp-link-animation">
                    {links.map((item, index) => (
                      <li key={index}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">{t.contactTitle[lang]}</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <a href="https://wa.me/5551998884446">+55 51 99888-4446</a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      {t.locationValue[lang]}
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="mailto:cristianovieirati@gmail.com">cristianovieirati@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="newslatter tmp-scroll-trigger animation-order-1">
                  <h3 className="title">{t.newsletter[lang]}</h3>
                  <p className="para">{t.newsletterDesc[lang]}</p>
                  <form onSubmit={(e) => e.preventDefault()} className="newsletter-form-1">
                    <input type="email" placeholder={t.emailPlaceholder[lang]} />
                    <span>
                      <a href="mailto:cristianovieirati@gmail.com" className="form-icon">
                        <i className="fa-solid fa-arrow-right" />
                      </a>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>{" "}
      <ScrollTop />
      <Sidebar />
      <MobileMenu />
      <MobileMenuOnepage />
    </>
  );
}
