import { useModalUI } from "@/context/ModalUIContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import { useEffect, useRef } from "react";
import NeonLogo from "../common/NeonLogo";
import OnepageNavMobile from "./OnepageNavMobile";

export default function MobileMenuOnepage() {
  const menuRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { openModals, closeModal } = useModalUI();
  const { lang } = useLanguage();
  const a11y = translations.a11y;
  const ft = translations.footer;

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;

      if (menuRef.current && menuRef.current.contains(target)) {
        if (innerRef.current && innerRef.current.contains(target)) {
          // Click inside innerRef — do nothing
        } else {
          closeModal("mobileMenu2");
        }
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [closeModal]);

  return (
    <div className="d-block d-xl-none">
      <div
        ref={menuRef}
        className={`tmp-popup-mobile-menu mobile-menu-onepage ${
          openModals.mobileMenu2 ? "active" : ""
        }`}
      >
        <div ref={innerRef} className="inner">
          <div className="header-top">
            <div className="logo">
              <a
                href="#home"
                className="logo-area"
                aria-label={a11y.homeLink[lang]}
                onClick={() => closeModal("mobileMenu2")}
              >
                <NeonLogo size="md" className="neon-header-logo" />
              </a>
            </div>
            <div className="close-menu">
              <button
                type="button"
                className="close-button tmp-round-action-btn"
                onClick={() => closeModal("mobileMenu2")}
                aria-label={a11y.closeMenu[lang]}
              >
                <i className="fa-sharp fa-light fa-xmark" aria-hidden="true" />
              </button>
            </div>
          </div>
          <OnepageNavMobile />
          <div className="social-wrapper mt--40">
            <span className="subtitle">{ft.findMe[lang]}</span>
            <div className="social-link">
              <a
                href="https://www.linkedin.com/in/cristianobv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={a11y.linkedin[lang]}
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
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
                href="https://wa.me/5551998884446"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={a11y.whatsapp[lang]}
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              </a>
              <a
                href="mailto:cristianovieirati@gmail.com"
                aria-label={a11y.email[lang]}
              >
                <i className="fa-light fa-envelope" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
