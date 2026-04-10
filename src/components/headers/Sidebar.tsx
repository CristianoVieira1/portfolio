import { useModalUI } from "@/context/ModalUIContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function Sidebar() {
  const { openModals, closeModal } = useModalUI();
  const { lang } = useLanguage();
  const t = translations.sidebar;
  const ft = translations.footer;

  return (
    <div className="d-none d-xl-block">
      <div
        className={`tmp-sidebar-area tmp_side_bar ${openModals.sidebar ? "tmp_side_bar_open" : ""}`}
      >
        <div className="inner">
          <div className="top-area">
            <a href="index.html" className="logo">
              <img loading="lazy" className="logo-dark" alt="Cristiano Borges" src="/portfolio/assets/images/logo/white-logo-reeni.png" width={121} height={41} />
              <img loading="lazy" className="logo-white" alt="Cristiano Borges" src="/portfolio/assets/images/logo/logo-white.png" width={121} height={40} />
            </a>
            <div className="close-icon-area">
              <button className="tmp-round-action-btn close_side_menu_active" onClick={() => closeModal("sidebar")}>
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="image-area-feature">
              <a href="index.html">
                <img loading="lazy" alt="personal-logo" src="/portfolio/assets/images/logo/man.png" width={340} height={196} />
              </a>
            </div>
            <h5 className="title mt--30">{t.title[lang]}</h5>
            <p className="disc">{t.description[lang]}</p>
            <div className="short-contact-area">
              <div className="single-contact">
                <i className="fa-solid fa-phone" />
                <div className="information tmp-link-animation">
                  <span>{ft.whatsapp[lang]}</span>
                  <a href="https://wa.me/5551998884446" className="number">+55 51 99888-4446</a>
                </div>
              </div>
              <div className="single-contact">
                <i className="fa-solid fa-envelope" />
                <div className="information tmp-link-animation">
                  <span>{ft.emailLabel[lang]}</span>
                  <a href="mailto:cristianovieirati@gmail.com" className="number">cristianovieirati@gmail.com</a>
                </div>
              </div>
              <div className="single-contact">
                <i className="fa-solid fa-location-crosshairs" />
                <div className="information tmp-link-animation">
                  <span>{ft.location[lang]}</span>
                  <span className="number">{ft.locationValue[lang]}</span>
                </div>
              </div>
            </div>
            <div className="social-wrapper mt--20">
              <span className="subtitle">{ft.findMe[lang]}</span>
              <div className="social-link">
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
        </div>
      </div>
      <a className="overlay_close_side_menu close_side_menu_active" onClick={() => closeModal("sidebar")} href="#" />
    </div>
  );
}
