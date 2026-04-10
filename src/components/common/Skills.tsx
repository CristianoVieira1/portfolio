import { useLanguage } from "@/context/LanguageContext";

const skillSectionsData = [
  {
    title: { pt: "Habilidades Mobile", en: "Mobile Skills" },
    skills: [
      { name: "REACT NATIVE", percent: 95, duration: "0.5s", delay: ".3s" },
      { name: "EXPO", percent: 92, duration: "0.6s", delay: ".4s" },
      { name: "TYPESCRIPT", percent: 90, duration: "0.7s", delay: ".5s" },
      { name: "FIREBASE", percent: 88, duration: "0.8s", delay: ".6s" },
    ],
  },
  {
    title: { pt: "Habilidades Web", en: "Web Skills" },
    skills: [
      { name: "REACT", percent: 94, duration: "0.5s", delay: ".3s" },
      { name: "NEXT.JS", percent: 92, duration: "0.6s", delay: ".4s" },
      { name: "NODE.JS", percent: 84, duration: "0.7s", delay: ".5s" },
      {
        name: { pt: "UI RESPONSIVA", en: "RESPONSIVE UI" },
        percent: 90,
        duration: "0.8s",
        delay: ".6s",
      },
    ],
  },
];

export default function Skills({
  parentClass = "tmp-skill-area tmp-section-gapTop",
}) {
  const { lang } = useLanguage();

  return (
    <div className={parentClass}>
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
                        alt="custom-line"
                        src="/portfolio/assets/images/custom-line/custom-line.png"
                        width={81}
                        height={6}
                      />
                    </span>
                  </h2>
                  {section.skills.map((skill, skillIndex) => {
                    const skillName = typeof skill.name === "string" ? skill.name : skill.name[lang];
                    return (
                      <div className="progress-charts" key={skillIndex}>
                        <h6 className="heading heading-h6">{skillName}</h6>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft"
                            data-wow-duration={skill.duration}
                            data-wow-delay={skill.delay}
                            role="progressbar"
                            style={{
                              width: `${skill.percent}%`,
                              visibility: "visible",
                              animationDuration: skill.duration,
                              animationDelay: skill.delay,
                              animationName: "fadeInLeft",
                            }}
                            aria-valuenow={skill.percent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="percent-label">
                              {skill.percent}%
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
