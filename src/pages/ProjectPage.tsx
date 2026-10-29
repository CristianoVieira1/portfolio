import { useEffect } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import QuoteForm from "@/components/site/QuoteForm";
import Seo from "@/components/site/Seo";
import { getProjectBySlug } from "@/content/projects";
import { getService } from "@/content/services";
import { asset } from "@/content/site";
import { personJsonLd } from "@/lib/schema";
import { alternatePath, langFromPath } from "@/lib/i18n-path";
import { paths, servicePath } from "@/lib/paths";
import { track } from "@/lib/analytics";

export default function ProjectPage() {
  const { slug = "" } = useParams();
  const location = useLocation();
  const lang = langFromPath(location.pathname);
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) track("view_project", { project_id: project.id });
  }, [project]);

  if (!project) return <Navigate to={paths.projects[lang]} replace />;

  return (
    <>
      <Seo
        title={project.seoTitle[lang]}
        description={project.description[lang]}
        path={location.pathname}
        lang={lang}
        altPath={alternatePath(location.pathname)}
        jsonLd={[
          personJsonLd(),
          {
            "@type": "CreativeWork",
            name: project.title,
            description: project.description[lang],
          },
        ]}
      />
      <main id="main" className="page-main">
        <section className="page-hero">
          <p className="eyebrow">
            <span />
            {project.eyebrow[lang]}
          </p>
          <h1>{project.title}</h1>
          <p className="page-lead">{project.lead[lang]}</p>
          <ul className="tag-list">
            {project.technologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <div className="case-gallery">
          {project.images.map((image) => (
            <img
              key={image.src}
              src={asset(image.src)}
              alt={image.alt[lang]}
              width={image.width}
              height={image.height}
              loading="lazy"
            />
          ))}
        </div>
        <section className="page-block">
          <h2>{lang === "pt" ? "Problema" : "Problem"}</h2>
          <p>{project.problem[lang]}</p>
        </section>
        <section className="page-block">
          <h2>{lang === "pt" ? "Minha participação" : "My role"}</h2>
          <p>{project.participation[lang]}</p>
        </section>
        <section className="page-block">
          <h2>{lang === "pt" ? "Solução" : "Solution"}</h2>
          <p>{project.solution[lang]}</p>
        </section>
        <section className="page-block">
          <h2>{lang === "pt" ? "Impacto" : "Impact"}</h2>
          <p>{project.impact[lang]}</p>
          {project.confidential && (
            <p className="confidential-note">
              {lang === "pt"
                ? "Case com restrição de confidencialidade corporativa."
                : "Case with corporate confidentiality constraints."}
            </p>
          )}
        </section>
        {project.relatedServiceIds.length > 0 && (
          <section className="page-block">
            <h2>{lang === "pt" ? "Serviços relacionados" : "Related services"}</h2>
            <ul className="plain-list">
              {project.relatedServiceIds.map((id) => {
                const service = getService(id);
                if (!service) return null;
                return (
                  <li key={id}>
                    <Link to={servicePath(service.slug, lang)}>{service.h1[lang]}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
        <p>
          <Link className="text-link" to={paths.projects[lang]}>
            {lang === "pt" ? "Todos os projetos" : "All projects"}
          </Link>
        </p>
        <section className="page-block quote-block">
          <h2>{lang === "pt" ? "Quer um produto nessa linha?" : "Want a product in this direction?"}</h2>
          <QuoteForm lang={lang} />
        </section>
      </main>
    </>
  );
}
