import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const skillSectionsData = [
  {
    title: { pt: "Habilidades Mobile", en: "Mobile Skills" },
    skills: [
      {
        name: "React Native",
        level: "advanced" as const,
        detail: {
          pt: "Arquitetura, módulos nativos, publicação, CI/CD e performance",
          en: "Architecture, native modules, publishing, CI/CD and performance",
        },
      },
      {
        name: "Expo",
        level: "advanced" as const,
        detail: {
          pt: "Fluxos de build, OTA updates e entrega contínua",
          en: "Build flows, OTA updates and continuous delivery",
        },
      },
      {
        name: "TypeScript",
        level: "advanced" as const,
        detail: {
          pt: "Tipagem segura, contratos de API e manutenção em escala",
          en: "Safe typing, API contracts and maintainability at scale",
        },
      },
      {
        name: "Firebase",
        level: "solid" as const,
        detail: {
          pt: "Auth, Firestore, Cloud Functions e monitoramento",
          en: "Auth, Firestore, Cloud Functions and monitoring",
        },
      },
    ],
  },
  {
    title: { pt: "Habilidades Web", en: "Web Skills" },
    skills: [
      {
        name: "React",
        level: "advanced" as const,
        detail: {
          pt: "Interfaces modernas, estado e componentes reutilizáveis",
          en: "Modern interfaces, state and reusable components",
        },
      },
      {
        name: "Next.js",
        level: "advanced" as const,
        detail: {
          pt: "SSR/SSG, SEO e performance em produtos web",
          en: "SSR/SSG, SEO and performance for web products",
        },
      },
      {
        name: "Node.js",
        level: "solid" as const,
        detail: {
          pt: "APIs, integrações e suporte fullstack",
          en: "APIs, integrations and fullstack support",
        },
      },
      {
        name: { pt: "UI responsiva", en: "Responsive UI" },
        level: "advanced" as const,
        detail: {
          pt: "Layout adaptável, acessibilidade e consistência visual",
          en: "Adaptive layout, accessibility and visual consistency",
        },
      },
    ],
  },
];

export default function Skills({
  parentClass = "tmp-skill-area tmp-section-gapTop",
}) {
  const { lang } = useLanguage();
  const t = translations.skills;

  return (
    <section className={parentClass} id="skills">
      <div className="container">
        <div className="row g-5">
          {skillSectionsData.map((section, sectionIndex) => (
            <div className="col-lg-6" key={sectionIndex}>
              <div className="progress-wrapper">
                <div className="content">
                  <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                    {section.title[lang]}
                    <span>
                      <img
                        loading="lazy"
                        alt=""
                        aria-hidden="true"
                        src="/portfolio/assets/images/custom-line/custom-line.png"
                        width={81}
                        height={6}
                      />
                    </span>
                  </h2>
                  <ul className="skill-level-list">
                    {section.skills.map((skill, skillIndex) => {
                      const skillName =
                        typeof skill.name === "string"
                          ? skill.name
                          : skill.name[lang];
                      const levelLabel =
                        skill.level === "advanced"
                          ? t.advanced[lang]
                          : t.solid[lang];

                      return (
                        <li className="skill-level-item" key={skillIndex}>
                          <div className="skill-level-item__head">
                            <p className="skill-level-item__name">{skillName}</p>
                            <span className="skill-level-item__badge">
                              {levelLabel}
                            </span>
                          </div>
                          <p className="skill-level-item__detail">
                            {skill.detail[lang]}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
