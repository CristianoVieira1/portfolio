import { useModalUI } from "@/context/ModalUIContext";
import { useEffect, useRef } from "react";
import OnepageNavMobile from "./OnepageNavMobile";

export default function MobileMenuOnepage() {
  const menuRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { openModals, closeModal } = useModalUI();
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
              <a href="index.html" className="logo-area">
                <img
                  loading="lazy"
                  className="logo-dark"
                  alt="Cristiano Borges"
                  src="/portfolio/assets/images/logo/white-logo-reeni.png"
                  width={121}
                  height={41}
                />
                <img
                  loading="lazy"
                  className="logo-white"
                  alt="Cristiano Borges"
                  src="/portfolio/assets/images/logo/logo-white.png"
                  width={121}
                  height={40}
                />
              </a>
            </div>
            <div className="close-menu">
              <button
                className="close-button tmp-round-action-btn"
                onClick={() => closeModal("mobileMenu2")}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <OnepageNavMobile />
          <div className="social-wrapper mt--40">
            <span className="subtitle">me encontre em</span>
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
          {/* social area end */}
        </div>
      </div>
    </div>
  );
}
