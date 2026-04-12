import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

const resumeItemsData = [
  {
    duration: { pt: "junho de 2024 - Atual", en: "June 2024 - Present" },
    title: {
      pt: "Desenvolvedor React Native Senior",
      en: "Senior React Native Developer",
    },
    institute: {
      pt: "BRQ Digital Solutions (alocado na Vibra Energia)",
      en: "BRQ Digital Solutions (allocated at Vibra Energia)",
    },
    description: {
      pt: "Atuação no desenvolvimento e evolução de aplicativo corporativo de larga escala, com foco em alta performance, estabilidade e integração com APIs internas. Responsável por melhorias contínuas, arquitetura e entrega de soluções que impactam diretamente a operação de equipes em campo.",
      en: "Working on the development and evolution of a large-scale corporate mobile app, focused on performance, stability, and internal API integration. Responsible for continuous improvements, architecture, and delivering solutions that directly impact field operations.",
    },
    tags: ["React Native", "TypeScript", "REST APIs", "CI/CD"],
    type: { pt: "CLT", en: "CLT" },
  },
  {
    duration: {
      pt: "novembro de 2023 - junho de 2024",
      en: "November 2023 - June 2024",
    },
    title: { pt: "Desenvolvedor React Native", en: "React Native Developer" },
    institute: { pt: "Pontotel", en: "Pontotel" },
    description: {
      pt: "Responsável pela manutenção e evolução de aplicativo de ponto digital com foco em estabilidade, correção de bugs críticos e implementação de novas funcionalidades, incluindo biometria, geolocalização e suporte offline.",
      en: "Responsible for maintaining and evolving a digital time-tracking app, focusing on stability, bug fixing, and implementing features such as biometrics, geolocation, and offline support.",
    },
    tags: ["React Native", "Offline-first", "Biometrics"],
    type: { pt: "CLT", en: "CLT" },
  },
  {
    duration: {
      pt: "agosto de 2023 - fevereiro de 2024",
      en: "August 2023 - February 2024",
    },
    title: { pt: "React Native Developer", en: "React Native Developer" },
    institute: {
      pt: "Parceiro da Construção (Freelancer)",
      en: "Parceiro da Construção (Freelancer)",
    },
    description: {
      pt: "Desenvolvimento completo de plataforma mobile educacional, desde a concepção até a entrega. Foco em usabilidade, arquitetura escalável e alinhamento contínuo com o cliente para garantir um produto final robusto e intuitivo.",
      en: "End-to-end development of a mobile educational platform, from conception to delivery, focused on usability, scalable architecture, and close client collaboration.",
    },
    tags: ["React Native", "Firebase", "UX"],
    type: { pt: "Freelancer", en: "Freelancer" },
  },
  {
    duration: {
      pt: "agosto de 2021 - setembro de 2023",
      en: "August 2021 - September 2023",
    },
    title: { pt: "Desenvolvedor React Native", en: "React Native Developer" },
    institute: { pt: "Digital Business", en: "Digital Business" },
    description: {
      pt: "Atuação no desenvolvimento de múltiplas aplicações mobile e web (banking, e-commerce e sistemas corporativos), com foco em arquitetura escalável, integração de APIs e criação de componentes reutilizáveis que aceleraram o desenvolvimento e garantiram consistência entre projetos.",
      en: "Worked on multiple mobile and web applications (banking, e-commerce, and enterprise systems), focusing on scalable architecture, API integration, and reusable components to speed up development and ensure consistency.",
    },
    tags: ["React Native", "React", "Node.js", "PostgreSQL"],
    type: { pt: "CLT", en: "CLT" },
  },
  {
    duration: {
      pt: "novembro de 2020 - agosto de 2021",
      en: "November 2020 - August 2021",
    },
    title: { pt: "React Native Developer", en: "React Native Developer" },
    institute: { pt: "Velty", en: "Velty" },
    description: {
      pt: "Desenvolvimento de aplicativos mobile de alto desempenho com foco em experiência do usuário, integração com APIs e otimização contínua. Atuação também em projetos de e-commerce (Vtex e Tray Corp), garantindo experiências de compra eficientes.",
      en: "Developed high-performance mobile apps focused on user experience, API integration, and continuous optimization. Also worked on e-commerce projects (Vtex and Tray Corp), ensuring efficient shopping experiences.",
    },
    tags: ["React Native", "Styled Components"],
    type: { pt: "CLT", en: "CLT" },
  },
  {
    duration: {
      pt: "abril de 2019 - novembro de 2020",
      en: "April 2019 - November 2020",
    },
    title: { pt: "Desenvolvedor Full-Stack", en: "Front-end Full-Stack" },
    institute: { pt: "BASE", en: "BASE" },
    description: {
      pt: "Desenvolvimento de interfaces web modernas com foco em performance, responsividade e conversão. Criação de aplicações com React, integração com APIs e otimização contínua da experiência do usuário.",
      en: "Developed modern web interfaces focused on performance, responsiveness, and conversion. Built applications with React, API integration, and continuous UX optimization.",
    },
    tags: ["React", "JavaScript", "SCSS", "WordPress"],
    type: { pt: "CLT", en: "CLT" },
  },
];

const educationItemsData = [
  {
    duration: {
      pt: "setembro de 2025 - novembro de 2026",
      en: "September 2025 - November 2026",
    },
    title: { pt: "Inglês", en: "English" },
    institute: { pt: "Wizard by Pearson", en: "Wizard by Pearson" },
    description: {
      pt: "Curso de inglês com foco em conversação e escrita profissional para o mercado de tecnologia.",
      en: "English course focused on conversation and professional writing for the tech industry.",
    },
    tags: ["English", "Communication"],
    type: { pt: "Formação", en: "Education" },
  },
  {
    duration: {
      pt: "2021 - 2023",
      en: "2021 - 2023",
    },
    title: {
      pt: "Análise e Desenvolvimento de Sistemas",
      en: "Systems Analysis and Development",
    },
    institute: { pt: "UniRitter", en: "UniRitter" },
    description: {
      pt: "Graduação tecnológica abrangendo engenharia de software, banco de dados, redes e programação.",
      en: "Technology degree covering software engineering, databases, networking, and programming.",
    },
    tags: ["Software Engineering", "Databases", "Algorithms"],
    type: { pt: "Formação", en: "Education" },
  },
];

type ItemData = (typeof resumeItemsData)[number];

/* ── Animated Card ── */
function ExperienceCard({
  item,
  index,
  lang,
  onClick,
}: {
  item: ItemData;
  index: number;
  lang: "pt" | "en";
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const rotateX = useSpring(0, { stiffness: 260, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 30 });

  const handleMove = (e: ReactMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowX.set(x);
    glowY.set(y);
    rotateX.set((y - 50) * -0.12);
    rotateY.set((x - 50) * 0.12);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const isActive = item.duration.en.includes("Present");

  return (
    <motion.div
      ref={ref}
      className="experience-card-premium"
      style={{ rotateX, rotateY, perspective: 800 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick();
      }}
    >
      {/* glow */}
      <motion.div
        className="experience-card-premium__glow"
        style={{
          background: `radial-gradient(420px circle at ${glowX.get()}% ${glowY.get()}%, hsl(var(--primary) / 0.12), transparent 60%)`,
        }}
      />

      {/* status dot */}
      {isActive && (
        <span className="experience-card-premium__live">
          <span className="experience-card-premium__live-dot" />
        </span>
      )}

      {/* type badge */}
      <span className="experience-card-premium__type">{item.type[lang]}</span>

      {/* content */}
      <span className="experience-card-premium__duration">
        {item.duration[lang]}
      </span>
      <h3 className="experience-card-premium__title">{item.title[lang]}</h3>
      <p className="experience-card-premium__institute">
        {item.institute[lang]}
      </p>

      {/* tags */}
      <div className="experience-card-premium__tags">
        {item.tags.map((tag) => (
          <span key={tag} className="experience-card-premium__tag">
            {tag}
          </span>
        ))}
      </div>

      {/* arrow */}
      <span className="experience-card-premium__arrow">
        <i className="fa-sharp fa-regular fa-arrow-up-right" />
      </span>
    </motion.div>
  );
}

/* ── Modal ── */
function ExperienceModal({
  item,
  lang,
  onClose,
}: {
  item: ItemData;
  lang: "pt" | "en";
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="exp-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="exp-modal-panel"
          initial={{ opacity: 0, y: -60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* decorative blobs */}
          <div className="exp-modal-blob exp-modal-blob--1" />
          <div className="exp-modal-blob exp-modal-blob--2" />

          <button
            type="button"
            className="exp-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="fa-light fa-xmark" />
          </button>

          <div className="exp-modal-body">
            {/* header */}
            <span className="exp-modal-badge">{item.type[lang]}</span>
            <motion.h3
              className="exp-modal-title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {item.title[lang]}
            </motion.h3>
            <motion.p
              className="exp-modal-institute"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              {item.institute[lang]}
            </motion.p>

            {/* stats */}
            <motion.div
              className="exp-modal-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="exp-modal-stat">
                <span className="exp-modal-stat__label">
                  {lang === "pt" ? "Período" : "Period"}
                </span>
                <span className="exp-modal-stat__value">
                  {item.duration[lang]}
                </span>
              </div>
              <div className="exp-modal-stat">
                <span className="exp-modal-stat__label">
                  {lang === "pt" ? "Cargo" : "Position"}
                </span>
                <span className="exp-modal-stat__value">
                  {item.title[lang]}
                </span>
              </div>
            </motion.div>

            {/* description */}
            <motion.p
              className="exp-modal-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              {item.description[lang]}
            </motion.p>

            {/* tech */}
            <motion.div
              className="exp-modal-tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4>{lang === "pt" ? "Tecnologias" : "Tech Stack"}</h4>
              <div className="exp-modal-tech__chips">
                {item.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="exp-modal-tech__chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.32 + i * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Main Section ── */
export default function Experience() {
  const { lang } = useLanguage();
  const t = translations.resume;
  const [selected, setSelected] = useState<ItemData | null>(null);

  return (
    <>
      <section
        className="resume-section tmp-section-gapTop"
        id="resume-section"
      >
        <div className="container">
          {/* Experience */}
          <div className="section-head mb--60">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">
                <i className="fa-regular fa-award" /> {t.experienceTitle[lang]}
              </span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              {lang === "pt"
                ? "Trajetória Profissional"
                : "Professional Journey"}
            </h2>
          </div>

          <div className="experience-grid-premium">
            {resumeItemsData.map((item, index) => (
              <ExperienceCard
                key={index}
                item={item}
                index={index}
                lang={lang}
                onClick={() => setSelected(item)}
              />
            ))}
          </div>

          {/* Education */}
          <div className="section-head mb--60 mt--80">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">
                <i className="fa-regular fa-graduation-cap" />{" "}
                {t.educationTitle[lang]}
              </span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              {lang === "pt" ? "Formação Acadêmica" : "Education"}
            </h2>
          </div>

          <div className="experience-grid-premium experience-grid-premium--edu">
            {educationItemsData.map((item, index) => (
              <ExperienceCard
                key={index}
                item={item}
                index={index}
                lang={lang}
                onClick={() => setSelected(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ExperienceModal
          item={selected}
          lang={lang}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
