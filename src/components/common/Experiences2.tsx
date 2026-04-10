import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const expertiseItemsData = [
  {
    icon: "/portfolio/assets/images/my-expertise/logo-4.svg",
    title: { pt: "Apps com React Native", en: "Apps with React Native" },
    percentage: "95%",
    counterValue: 95,
    description: {
      pt: "Aplicativos mobile para iOS e Android com foco em experiência do usuário, estabilidade e performance.",
      en: "Mobile apps for iOS and Android focused on user experience, stability and performance.",
    },
    animationOrder: 1,
  },
  {
    icon: "/portfolio/assets/images/my-expertise/logo-5.svg",
    title: { pt: "Web com React e Next.js", en: "Web with React and Next.js" },
    percentage: "92%",
    counterValue: 92,
    description: {
      pt: "Interfaces modernas, rápidas e escaláveis para produtos digitais com SEO e ótima experiência em múltiplos dispositivos.",
      en: "Modern, fast and scalable interfaces for digital products with SEO and great experience across devices.",
    },
    animationOrder: 2,
  },
  {
    icon: "/portfolio/assets/images/my-expertise/logo-6.svg",
    title: { pt: "Integrações Fullstack", en: "Fullstack Integrations" },
    percentage: "88%",
    counterValue: 88,
    description: {
      pt: "Integração com APIs, autenticação e serviços como Firebase para transformar ideia em produto pronto para uso.",
      en: "API integration, authentication and services like Firebase to turn ideas into ready-to-use products.",
    },
    animationOrder: 3,
  },
];

export default function Experiences2() {
  const { lang } = useLanguage();
  const t = translations.expertise;

  return (
    <section className="my-expertise-area tpm-custom-box-bg">
      <div className="container">
        <div className="header-top-inner">
          <div className="section-head text-align-left">
            <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">{t.subtitle[lang]}</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              {t.title[lang]} <br />
              {t.titleLine2[lang]}
            </h2>
          </div>
          <div className="discription-area tmp-scroll-trigger tmp-fade-in animation-order-3">
            <p className="description color-primary-3rd">
              {t.description[lang]}
            </p>
          </div>
        </div>
        <div className="services-widget v2">
          {expertiseItemsData.map((item, index) => (
            <div
              className={`service-item tmp-scroll-trigger tmp-fade-in ${
                index == 0 ? "current" : ""
              } animation-order-${item.animationOrder}`}
              key={index}
            >
              <div className="my-expertise-card-wrap">
                <div className="expertise-card-left">
                  <div className="expertise-card-logo">
                    <img
                      loading="lazy"
                      alt="logo"
                      src={item.icon}
                      width={45}
                      height={45}
                    />
                  </div>
                  <h3 className="title">{item.title[lang]}</h3>
                </div>
                <div
                  className="single-progress-circle sal-animate"
                  data-sal-delay={300}
                  data-sal="slide-up"
                  data-sal-duration={1000}
                >
                  <svg
                    className="radial-progress"
                    data-countervalue={item.counterValue}
                    viewBox="0 0 80 80"
                  >
                    <circle className="bar-static" cx={40} cy={40} r={35} />
                    <circle
                      className="bar--animated"
                      cx={40}
                      cy={40}
                      r={35}
                      style={{ strokeDashoffset: "131.947px" }}
                    />
                    <text
                      className="countervalue"
                      x="50%"
                      y="55%"
                      transform="matrix(0, 1, -1, 0, 80, 0)"
                    >
                      {item.percentage}
                    </text>
                  </svg>
                </div>
                <p className="para">{item.description[lang]}</p>
              </div>
              <button className="service-link modal-popup" />
            </div>
          ))}
          <div className="active-bg wow fadeInUp mleave" />
        </div>
      </div>
    </section>
  );
}
