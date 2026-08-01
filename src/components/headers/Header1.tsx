import NeonLogo from "../common/NeonLogo";
import Nav1 from "./Nav1";

import { useLanguage } from "@/context/LanguageContext";
import { useModalUI } from "@/context/ModalUIContext";
import { translations } from "@/i18n/translations";
import { useEffect, useState } from "react";

export default function Header1() {
  const { openModal } = useModalUI();
  const { lang, toggleLanguage } = useLanguage();
  const a11y = translations.a11y;
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 150);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`tmp-header-area-start header-one header--sticky header--transparent ${
        isSticky ? "sticky" : ""
      } `}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
              <div className="logo">
                <a href="#home" aria-label={a11y.homeLink[lang]}>
                  <NeonLogo size="md" className="neon-header-logo" />
                </a>
              </div>
              <nav
                className="tmp-mainmenu-nav d-none d-xl-block"
                aria-label={lang === "pt" ? "Menu principal" : "Main menu"}
              >
                <Nav1 />
              </nav>
              <div className="tmp-header-right">
                <div className="social-share-wrapper d-none d-md-block">
                  <div className="social-link">
                    <a
                      href="https://www.linkedin.com/in/cristianobv"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={a11y.linkedin[lang]}
                    >
                      <i
                        className="fa-brands fa-linkedin-in"
                        aria-hidden="true"
                      />
                    </a>
                    <a
                      href="https://github.com/CristianoVieira1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={a11y.github[lang]}
                    >
                      <i className="fa-brands fa-github" aria-hidden="true" />
                    </a>
                    <a
                      className="header-whatsapp-highlight"
                      href="https://wa.me/5551998884446?text=Ol%C3%A1%20Cristiano%2C%20quero%20tirar%20um%20projeto%20do%20papel"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={a11y.whatsapp[lang]}
                      title={translations.nav.project[lang]}
                    >
                      <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                      <span className="header-whatsapp-highlight__label">
                        WhatsApp
                      </span>
                    </a>
                    <a
                      href="mailto:cristianovieirati@gmail.com"
                      aria-label={a11y.email[lang]}
                    >
                      <i className="fa-light fa-envelope" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <button
                  className="lang-toggle-btn"
                  onClick={toggleLanguage}
                  type="button"
                  aria-label={a11y.toggleLanguage[lang]}
                  title={
                    lang === "pt" ? "Switch to English" : "Mudar para Português"
                  }
                >
                  <span
                    className={`lang-option ${lang === "pt" ? "active" : ""}`}
                  >
                    PT
                  </span>
                  <span className="lang-separator" aria-hidden="true">
                    /
                  </span>
                  <span
                    className={`lang-option ${lang === "en" ? "active" : ""}`}
                  >
                    EN
                  </span>
                </button>
                <div className="actions-area">
                  <div className="tmp-side-collups-area d-none d-xl-block">
                    <button
                      type="button"
                      className="tmp-menu-bars tmp_button_active"
                      onClick={() => openModal("sidebar")}
                      aria-label={a11y.openSidebar[lang]}
                    >
                      <i
                        className="fa-regular fa-bars-staggered"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      type="button"
                      className="tmp-menu-bars humberger_menu_active"
                      onClick={() => openModal("mobileMenu1")}
                      aria-label={a11y.openMenu[lang]}
                    >
                      <i
                        className="fa-regular fa-bars-staggered"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
