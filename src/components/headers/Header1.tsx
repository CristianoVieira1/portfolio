import NeonLogo from "../common/NeonLogo";
import Nav1 from "./Nav1";

import { Link } from "react-router-dom";

import { useLanguage } from "@/context/LanguageContext";
import { useModalUI } from "@/context/ModalUIContext";
import { useEffect, useState } from "react";

export default function Header1() {
  const { openModal } = useModalUI();
  const { lang, toggleLanguage } = useLanguage();
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
                <Link to={`/`}>
                  <NeonLogo size="md" className="neon-header-logo" />
                </Link>
              </div>
              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <Nav1 />
              </nav>
              <div className="tmp-header-right" style={{ marginRight: '10px' }}>
                <div className="social-share-wrapper d-none d-md-block">
                  <div className="social-link">
                    <a
                      href="https://www.linkedin.com/in/cristianobv"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a
                      href="https://github.com/CristianoVieira1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github" />
                    </a>
                    <a
                      href="https://wa.me/5551998884446"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                    <a href="mailto:cristianovieirati@gmail.com">
                      <i className="fa-light fa-envelope" />
                    </a>
                  </div>
                </div>
                <button
                  className="lang-toggle-btn"
                  onClick={toggleLanguage}
                  title={
                    lang === "pt" ? "Switch to English" : "Mudar para Português"
                  }
                >
                  <span
                    className={`lang-option ${lang === "pt" ? "active" : ""}`}
                  >
                    PT
                  </span>
                  <span className="lang-separator">/</span>
                  <span
                    className={`lang-option ${lang === "en" ? "active" : ""}`}
                  >
                    EN
                  </span>
                </button>
                <div className="actions-area">
                  <div className="tmp-side-collups-area d-none d-xl-block">
                    <button
                      className="tmp-menu-bars tmp_button_active"
                      onClick={() => openModal("sidebar")}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      className="tmp-menu-bars humberger_menu_active"
                      onClick={() => openModal("mobileMenu1")}
                    >
                      <i className="fa-regular fa-bars-staggered" />
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
