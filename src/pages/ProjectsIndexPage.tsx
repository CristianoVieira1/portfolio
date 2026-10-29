import { Link, useLocation } from "react-router-dom";
import Seo from "@/components/site/Seo";
import { indexes } from "@/content/copy";
import { projects } from "@/content/projects";
import { asset } from "@/content/site";
import { personJsonLd } from "@/lib/schema";
import { alternatePath, langFromPath } from "@/lib/i18n-path";
import { projectPath } from "@/lib/paths";

export default function ProjectsIndexPage() {
  const location = useLocation();
  const lang = langFromPath(location.pathname);

  return (
    <>
      <Seo
        title={indexes.projects.seoTitle[lang]}
        description={indexes.projects.description[lang]}
        path={location.pathname}
        lang={lang}
        altPath={alternatePath(location.pathname)}
        jsonLd={[personJsonLd()]}
      />
      <main id="main" className="page-main">
        <section className="page-hero">
          <h1>{indexes.projects.h1[lang]}</h1>
          <p className="page-lead">{indexes.projects.lead[lang]}</p>
        </section>
        <div className="project-index">
          {projects.map((project) => (
            <article key={project.id}>
              <img
                src={asset(project.images[0].src)}
                alt={project.images[0].alt[lang]}
                width={project.images[0].width}
                height={project.images[0].height}
                loading="lazy"
              />
              <div>
                <p>{project.type[lang]}</p>
                <h2>{project.title}</h2>
                <p>{project.lead[lang]}</p>
                <Link to={projectPath(project.slug, lang)}>
                  {lang === "pt" ? "Ler case" : "Read case"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
