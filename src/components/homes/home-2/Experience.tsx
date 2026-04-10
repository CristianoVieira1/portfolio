import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const resumeItemsData = [
  {
    duration: { pt: "junho de 2024 - Atual", en: "June 2024 - Present" },
    title: { pt: "Desenvolvedor React Native Senior", en: "Senior React Native Developer" },
    institute: { pt: "BRQ Digital Solutions (alocado na Vibra Energia)", en: "BRQ Digital Solutions (allocated at Vibra Energia)" },
  },
  {
    duration: { pt: "novembro de 2023 - junho de 2024", en: "November 2023 - June 2024" },
    title: { pt: "Desenvolvedor React Native", en: "React Native Developer" },
    institute: { pt: "Pontotel", en: "Pontotel" },
  },
  {
    duration: { pt: "agosto de 2023 - fevereiro de 2024", en: "August 2023 - February 2024" },
    title: { pt: "React Native Developer", en: "React Native Developer" },
    institute: { pt: "Parceiro da Construção (Freelancer)", en: "Parceiro da Construção (Freelancer)" },
  },
  {
    duration: { pt: "agosto de 2021 - setembro de 2023", en: "August 2021 - September 2023" },
    title: { pt: "Desenvolvedor React Native", en: "React Native Developer" },
    institute: { pt: "Digital Business", en: "Digital Business" },
  },
  {
    duration: { pt: "novembro de 2020 - agosto de 2021", en: "November 2020 - August 2021" },
    title: { pt: "React Native Developer", en: "React Native Developer" },
    institute: { pt: "Velty", en: "Velty" },
  },
  {
    duration: { pt: "abril de 2019 - novembro de 2020", en: "April 2019 - November 2020" },
    title: { pt: "Desenvolvedor Front-end", en: "Front-end Developer" },
    institute: { pt: "BASE", en: "BASE" },
    isLast: true,
  },
];

const educationItemsData = [
  {
    duration: { pt: "setembro de 2025 - novembro de 2026", en: "September 2025 - November 2026" },
    title: { pt: "Inglês", en: "English" },
    institute: { pt: "Wizard by Pearson", en: "Wizard by Pearson" },
  },
  {
    duration: { pt: "dezembro de 2021 - dezembro de 2023", en: "December 2021 - December 2023" },
    title: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" },
    institute: { pt: "UniRitter", en: "UniRitter" },
    isLast: true,
  },
];

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations.resume;

  return (
    <section className="resume-section tmp-section-gapTop" id="resume-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header mb--50 tmp-scroll-trigger tmp-fade-in animation-order-1">
              <h2 className="section-title">
                <i className="fa-regular fa-award" /> {t.experienceTitle[lang]}
              </h2>
            </div>
            <div className="resume-widget">
              {resumeItemsData.map((item, index) => (
                <div
                  key={index}
                  className={`resume-single tmp-scroll-trigger tmp-fade-in animation-order-${
                    index + 1
                  } ${item.isLast ? "mb--0" : ""}`}
                >
                  <div className="time">
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15" />
                    {item.duration[lang]}
                  </div>
                  <h3 className="resume-title">{item.title[lang]}</h3>
                  <div className="institute">{item.institute[lang]}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-header mb--50 tmp-scroll-trigger tmp-fade-in animation-order-1">
              <h2 className="section-title">
                <i className="fa-regular fa-graduation-cap" /> {t.educationTitle[lang]}
              </h2>
            </div>
            <div className="resume-widget">
              {educationItemsData.map((item, index) => (
                <div
                  key={index}
                  className={`resume-single tmp-scroll-trigger tmp-fade-in animation-order-${
                    index + 1
                  } ${item.isLast ? "mb--0" : ""}`}
                >
                  <div className="time">
                    <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15" />
                    {item.duration[lang]}
                  </div>
                  <h3 className="resume-title">{item.title[lang]}</h3>
                  <div className="institute">{item.institute[lang]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
