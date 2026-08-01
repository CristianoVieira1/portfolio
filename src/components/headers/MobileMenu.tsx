import { useLanguage } from "@/context/LanguageContext";
import { useModalUI } from "@/context/ModalUIContext";
import { translations } from "@/i18n/translations";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NeonLogo from "../common/NeonLogo";

export default function MobileMenu() {
  const { openModals, closeModal } = useModalUI();
  const { pathname } = useLocation();
  const { lang } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [activeParent, setActiveParent] = useState(-1);
  const nav = translations.nav;
  const ft = translations.footer;

  const menuItems = [
    {
      label: nav.home[lang],
      href: "#home",
      isLink: false,
      hasDropdown: false,
      submenu: [] as { href: string; label: string }[],
    },
    {
      label: nav.about[lang],
      href: "#about",
      isLink: false,
      hasDropdown: false,
      submenu: [] as { href: string; label: string }[],
    },
    {
      label: nav.experience[lang],
      href: "#resume-section",
      isLink: false,
      hasDropdown: false,
      submenu: [] as { href: string; label: string }[],
    },
    {
      label: nav.portfolio[lang],
      href: "#portfolio",
      isLink: false,
      hasDropdown: false,
      submenu: [] as { href: string; label: string }[],
    },
    {
      label: nav.contact[lang],
      href: "#contacts",
      isLink: false,
      hasDropdown: false,
      submenu: [] as { href: string; label: string }[],
    },
  ];

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current &&
        menuRef.current.contains(target) &&
        innerRef.current &&
        !innerRef.current.contains(target)
      ) {
        closeModal("mobileMenu1");
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [closeModal]);

  return (
    <div className="d-block d-xl-none">
      <div
        ref={menuRef}
        className={`tmp-popup-mobile-menu ${openModals.mobileMenu1 ? "active" : ""}`}
      >
        <div ref={innerRef} className="inner">
          <div className="header-top">
            <div className="logo">
              <a
                href="#home"
                className="logo-area"
                aria-label={translations.a11y.homeLink[lang]}
                onClick={() => closeModal("mobileMenu1")}
              >
                <NeonLogo size="md" className="neon-header-logo" />
              </a>
            </div>
            <div className="close-menu">
              <button
                type="button"
                className="close-button tmp-round-action-btn"
                onClick={() => closeModal("mobileMenu1")}
                aria-label={translations.a11y.closeMenu[lang]}
              >
                <i className="fa-sharp fa-light fa-xmark" aria-hidden="true" />
              </button>
            </div>
          </div>
          <ul className="tmp-mainmenu">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${item.hasDropdown ? "has-dropdown" : ""} ${
                  item.submenu?.some(
                    (elm) => elm.href.split("/")[1] == pathname.split("/")[1],
                  )
                    ? "menu-item-open"
                    : ""
                }`}
              >
                {item.isLink ? (
                  <Link
                    className={`${item.href.split("/")[1] == pathname.split("/")[1] ? "active" : ""}`}
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => {
                      if (item.hasDropdown) {
                        setActiveParent((pre) => (pre == index ? -1 : index));
                      } else {
                        closeModal("mobileMenu1");
                      }
                    }}
                    className={activeParent == index ? "open" : ""}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <i className="fa-regular fa-chevron-down" />
                    )}
                  </a>
                )}
                {item.hasDropdown && (
                  <ul
                    className="submenu"
                    style={{
                      display: activeParent == index ? "block" : "none",
                    }}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          className={`${subItem.href.split("/")[1] == pathname.split("/")[1] ? "active" : ""}`}
                          to={subItem.href}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="social-wrapper mt--40">
            <span className="subtitle">{ft.findMe[lang]}</span>
            <div className="social-link">
              <a
                href="https://www.linkedin.com/in/cristianobv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translations.a11y.linkedin[lang]}
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/CristianoVieira1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translations.a11y.github[lang]}
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/5551998884446"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translations.a11y.whatsapp[lang]}
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              </a>
              <a
                href="mailto:cristianovieirati@gmail.com"
                aria-label={translations.a11y.email[lang]}
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
