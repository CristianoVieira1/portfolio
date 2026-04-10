import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function Copyright() {
  const { lang } = useLanguage();
  const t = translations.copyright;

  return (
    <div className="copyright-area-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-wrapper">
              <p className="copy-right-para tmp-link-animation">
                ©{" "}
                <a
                  href="https://github.com/CristianoVieira1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cristiano Borges {new Date().getFullYear()}
                </a>{" "}
                {t.rights[lang]}
              </p>{" "}
              <ul className="tmp-link-animation dark-content">
                <li>
                  <a href="#contacts">{translations.nav.contact[lang]}</a>
                </li>
              </ul>
              <ul className="tmp-link-animation light-content">
                <li>
                  <a href="#contacts">{translations.nav.contact[lang]}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
