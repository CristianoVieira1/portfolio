import { motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { homeCopy, homeFaqs } from "@/content/copy";
import { featuredProjects } from "@/content/projects";
import { services } from "@/content/services";
import { asset } from "@/content/site";
import type { Lang, Localized } from "@/content/types";
import QuoteForm from "@/components/site/QuoteForm";
import Seo from "@/components/site/Seo";
import { faqEntities, personJsonLd, serviceBusinessJsonLd } from "@/lib/schema";
import { alternatePath, langFromPath } from "@/lib/i18n-path";
import { paths, projectPath, servicePath } from "@/lib/paths";
import { track } from "@/lib/analytics";

const BASE = import.meta.env.BASE_URL;

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const sectionSequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const maskedReveal: Variants = {
  hidden: { opacity: 0, y: 46, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] },
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionIntro({
  kicker,
  title,
  text,
  lang,
}: {
  kicker: Localized;
  title: Localized;
  text?: Localized;
  lang: Lang;
}) {
  return (
    <motion.div
      className="section-intro"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={sectionSequence}
    >
      <motion.span className="eyebrow" variants={reveal}>
        <span />
        {kicker[lang]}
      </motion.span>
      <motion.h2 variants={maskedReveal}>{title[lang]}</motion.h2>
      {text && (
        <motion.p variants={reveal} transition={{ duration: 0.65 }}>
          {text[lang]}
        </motion.p>
      )}
    </motion.div>
  );
}

function ProjectStory({
  project,
  lang,
  index,
}: {
  project: ReturnType<typeof featuredProjects>[number];
  lang: Lang;
  index: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [55, -55]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-1.5, 0, 1.5]);
  const image = project.images[0];

  return (
    <article ref={ref} className="project-story" style={{ "--project-accent": "#31ddd2" } as CSSProperties}>
      <motion.div
        className="project-copy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={reveal}
        transition={{ duration: 0.7 }}
      >
        <div className="project-meta">
          <span>{index}</span>
          <span>{project.type[lang]}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.lead[lang]}</p>
        <div className="project-role">
          <span>{homeCopy.projects.role[lang]}</span>
          <strong>{project.participation[lang]}</strong>
        </div>
        <ul className="tag-list" aria-label={lang === "pt" ? "Tecnologias" : "Technologies"}>
          {project.technologies.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <Link className="text-link" to={projectPath(project.slug, lang)} style={{ marginTop: 24 }}>
          {homeCopy.projects.caseCta[lang]} <Arrow />
        </Link>
      </motion.div>
      <motion.div
        className="project-visual"
        aria-label={`${project.title} — ${project.type[lang]}`}
        initial={{ opacity: 0, y: 65, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="project-grid" aria-hidden="true" />
        <motion.div className="device-frame" style={{ y: imageY, rotate }}>
          <div className="device-top">
            <span />
            <span />
            <span />
          </div>
          <img
            src={`${BASE}${image.src}`}
            alt={image.alt[lang]}
            loading="lazy"
            width={image.width}
            height={image.height}
          />
        </motion.div>
        <span className="project-watermark" aria-hidden="true">
          {index}
        </span>
      </motion.div>
    </article>
  );
}

export default function HomePage() {
  const location = useLocation();
  const lang = langFromPath(location.pathname);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.22 });
  const copy = homeCopy;
  const featured = featuredProjects();

  return (
    <>
      <Seo
        title={
          lang === "pt"
            ? "Cristiano Borges — Desenvolvimento de software sob medida"
            : "Cristiano Borges — Custom software development"
        }
        description={
          lang === "pt"
            ? "Desenvolvimento de aplicativos, sites profissionais, sistemas web e SaaS. Engenheiro de software sênior em Porto Alegre, com atendimento remoto em todo o Brasil."
            : "Development of apps, professional websites, web systems and SaaS. Senior software engineer in Porto Alegre, working remotely across Brazil."
        }
        path={location.pathname}
        lang={lang}
        altPath={alternatePath(location.pathname)}
        jsonLd={[
          personJsonLd(),
          serviceBusinessJsonLd(),
          { "@type": "FAQPage", mainEntity: faqEntities(homeFaqs, lang) },
        ]}
      />
      <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} aria-hidden="true" />
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.11 } } }}
          >
            <motion.div className="availability" variants={reveal}>
              <span />
              {copy.hero.eyebrow[lang]}
            </motion.div>
            <h1>
              <motion.span variants={reveal}>{copy.hero.titleA[lang]}</motion.span>
              <motion.em variants={reveal}>{copy.hero.titleB[lang]}</motion.em>
            </h1>
            <motion.p className="hero-lead" variants={reveal}>
              {copy.hero.lead[lang]}
            </motion.p>
            <motion.p variants={reveal}>{copy.hero.description[lang]}</motion.p>
            <motion.div className="hero-actions" variants={reveal}>
              <Link to={paths.quote[lang]} className="button button-primary">
                {copy.hero.primary[lang]} <Arrow />
              </Link>
              <a href="#projetos" className="text-link">
                {copy.hero.secondary[lang]} <span aria-hidden="true">↓</span>
              </a>
            </motion.div>
            <motion.div className="hero-chips" variants={reveal}>
              {copy.hero.chips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </motion.div>
            <motion.div variants={reveal}>
              <Link className="recruiter-link" to={paths.career[lang]}>
                {copy.hero.recruiter[lang]} <Arrow />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-stage"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="stage-glow" aria-hidden="true" />
            <motion.div
              className="device-art device-jobtto"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={`${BASE}assets/images/devices/jobtto-samsung.webp`}
                alt="Aplicativo Jobtto em um smartphone"
                width="890"
                height="1883"
                loading="eager"
                decoding="async"
              />
            </motion.div>
            <motion.div
              className="device-art device-colombo"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7.3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={`${BASE}assets/images/devices/colombo-iphone.webp`}
                alt="Aplicativo Colombo Bank em um iPhone"
                width="887"
                height="1354"
                fetchPriority="high"
                decoding="async"
              />
            </motion.div>
            <div className="code-chip chip-one">
              <span>01</span>Apps
            </div>
            <div className="code-chip chip-two">
              <span>02</span>Web & SaaS
            </div>
            <div className="code-chip chip-three">
              <span>03</span>Sistemas
            </div>
          </motion.div>

          <div className="hero-footer">
            <span>
              {copy.hero.availability[lang]} <i />
            </span>
            <span>React Native · React · Next.js · Angular</span>
            <span>Scroll ↓</span>
          </div>
        </section>

        <section className="proof-bar" aria-label={copy.proof.lead[lang]}>
          <p>{copy.proof.lead[lang]}</p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={sectionSequence}
          >
            {copy.proof.items.map((item) => (
              <motion.article
                key={item.value}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              >
                <strong>{item.value}</strong>
                <span>{item.label[lang]}</span>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="journeys-section section-shell" id="jornadas">
          <SectionIntro lang={lang} kicker={copy.journeys.kicker} title={copy.journeys.title} />
          <div className="journey-grid">
            <article>
              <h3>{copy.journeys.hire.title[lang]}</h3>
              <p>{copy.journeys.hire.text[lang]}</p>
              <Link className="button button-primary" to={paths.services[lang]}>
                {copy.journeys.hire.cta[lang]}
              </Link>
            </article>
            <article>
              <h3>{copy.journeys.recruiter.title[lang]}</h3>
              <p>{copy.journeys.recruiter.text[lang]}</p>
              <Link className="button button-ghost" to={paths.career[lang]}>
                {copy.journeys.recruiter.cta[lang]}
              </Link>
            </article>
          </div>
        </section>

        <section className="projects-section section-shell" id="projetos">
          <SectionIntro lang={lang} kicker={copy.projects.kicker} title={copy.projects.title} text={copy.projects.text} />
          <div className="project-list">
            {featured.map((project, index) => (
              <ProjectStory
                key={project.id}
                project={project}
                lang={lang}
                index={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
          <Link className="more-work" to={paths.projects[lang]}>
            <span>{copy.projects.all[lang]}</span>
            <strong>{lang === "pt" ? "Cases" : "Cases"}</strong>
            <Arrow />
          </Link>
        </section>

        <section className="services-section section-shell" id="servicos">
          <SectionIntro lang={lang} kicker={copy.services.kicker} title={copy.services.title} text={copy.services.text} />
          <div className="service-list">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -48 : 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.38 }}
                transition={{ duration: 0.7, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.h1[lang]}</h3>
                <p>{service.lead[lang]}</p>
                <Link
                  to={servicePath(service.slug, lang)}
                  onClick={() => track("view_service", { service_id: service.id, source: "home" })}
                >
                  {copy.services.cta[lang]} <Arrow />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="process-section section-shell" id="processo">
          <SectionIntro lang={lang} kicker={copy.process.kicker} title={copy.process.title} text={copy.process.text} />
          <ol className="process-grid">
            {copy.process.steps.map((step, index) => (
              <motion.li
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{ delay: index * 0.09 }}
              >
                <span>{step.number}</span>
                <h3>{step.title[lang]}</h3>
                <p>{step.text[lang]}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        <section className="manifesto-section" id="sobre">
          <motion.div
            className="manifesto-image"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="portrait-halo"
              aria-hidden="true"
              initial={{ scale: 0.72, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.img
              src={asset("assets/images/banner/banner-user-image-two.webp")}
              alt="Cristiano Borges, engenheiro de software sênior"
              loading="lazy"
              width="888"
              height="1422"
              initial={{ y: 75, scale: 1.06 }}
              whileInView={{ y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
            <span className="portrait-caption">
              Cristiano Borges Vieira
              <br />
              Senior software engineer
            </span>
          </motion.div>
          <motion.div
            className="manifesto-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={reveal}
          >
            <span className="eyebrow">
              <span />
              {copy.about.kicker[lang]}
            </span>
            <blockquote>{copy.about.quote[lang]}</blockquote>
            <p>{copy.about.text[lang]}</p>
            <div className="manifesto-points">
              {copy.about.points[lang].map((point) => (
                <span key={point}>→ {point}</span>
              ))}
            </div>
            <Link className="text-link" to={paths.career[lang]} style={{ marginTop: 28, width: "max-content" }}>
              {copy.about.careerCta[lang]} <Arrow />
            </Link>
          </motion.div>
        </section>

        <section className="faq-section section-shell" id="faq">
          <SectionIntro lang={lang} kicker={copy.faq.kicker} title={copy.faq.title} />
          <motion.div
            className="faq-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={sectionSequence}
          >
            {homeFaqs.map((item, index) => (
              <motion.details
                key={item.q.pt}
                variants={{
                  hidden: { opacity: 0, x: 34 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.58, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <summary>
                  <span>0{index + 1}</span>
                  {item.q[lang]}
                  <i>+</i>
                </summary>
                <p>{item.a[lang]}</p>
              </motion.details>
            ))}
          </motion.div>
        </section>

        <section className="contact-section quote-home" id="contato">
          <div className="contact-glow" aria-hidden="true" />
          <div className="quote-home-inner">
            <span className="eyebrow">
              <span />
              {copy.contact.kicker[lang]}
            </span>
            <h2>{copy.contact.title[lang]}</h2>
            <p>{copy.contact.text[lang]}</p>
            <QuoteForm lang={lang} />
          </div>
        </section>
      </main>
    </>
  );
}
