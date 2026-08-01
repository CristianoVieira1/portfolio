import { useLanguage } from "@/context/LanguageContext";
import { useModalUI } from "@/context/ModalUIContext";
import { translations } from "@/i18n/translations";
import NeonLogo from "../common/NeonLogo";

export default function Sidebar() {
  const { openModals, closeModal } = useModalUI();
  const { lang } = useLanguage();
  const t = translations.sidebar;
  const ft = translations.footer;
  const a11y = translations.a11y;

  return (
    <div className="d-none d-xl-block">
      <div
        className={`tmp-sidebar-area tmp_side_bar ${openModals.sidebar ? "tmp_side_bar_open" : ""}`}
      >
        <div className="inner">
          <div className="top-area">
            <a href="#home" className="logo" aria-label={a11y.homeLink[lang]}>
              <NeonLogo size="sm" className="neon-header-logo" />
            </a>
            <div className="close-icon-area">
              <button
                type="button"
                className="tmp-round-action-btn close_side_menu_active"
                onClick={() => closeModal("sidebar")}
                aria-label={a11y.closeSidebar[lang]}
              >
                <i className="fa-sharp fa-light fa-xmark" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="image-area-feature">
              <a href="#home" aria-label={a11y.homeLink[lang]}>
                <img
                  loading="lazy"
                  alt="Cristiano Borges"
                  src="/portfolio/share.png"
                  width={340}
                  height={196}
                />
              </a>
            </div>
            <h5 className="title mt--30">{t.title[lang]}</h5>
            <p className="disc">{t.description[lang]}</p>
            <div className="short-contact-area">
              <div className="single-contact">
                <i className="fa-solid fa-phone" aria-hidden="true" />
                <div className="information tmp-link-animation">
                  <span>{ft.whatsapp[lang]}</span>
                  <a href="https://wa.me/5551998884446" className="number">
                    +55 51 99888-4446
                  </a>
                </div>
              </div>
              <div className="single-contact">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                <div className="information tmp-link-animation">
                  <span>{ft.emailLabel[lang]}</span>
                  <a
                    href="mailto:cristianovieirati@gmail.com"
                    className="number"
                  >
                    cristianovieirati@gmail.com
                  </a>
                </div>
              </div>
              <div className="single-contact">
                <i
                  className="fa-solid fa-location-crosshairs"
                  aria-hidden="true"
                />
                <div className="information tmp-link-animation">
                  <span>{ft.location[lang]}</span>
                  <span className="number">{ft.locationValue[lang]}</span>
                </div>
              </div>
            </div>
            <div className="social-wrapper mt--20">
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
      <button
        type="button"
        className="overlay_close_side_menu close_side_menu_active"
        onClick={() => closeModal("sidebar")}
        aria-label={a11y.closeSidebar[lang]}
      />
    </div>
  );
}
