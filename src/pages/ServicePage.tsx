import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import QuoteForm from "@/components/site/QuoteForm";
import Seo from "@/components/site/Seo";
import { getProject } from "@/content/projects";
import { getServiceBySlug, services } from "@/content/services";
import { faqEntities, personJsonLd } from "@/lib/schema";
import { alternatePath, langFromPath } from "@/lib/i18n-path";
import { paths, projectPath, servicePath } from "@/lib/paths";
import { track } from "@/lib/analytics";
import { useEffect } from "react";

export default function ServicePage() {
  const { slug = "" } = useParams();
  const location = useLocation();
  const lang = langFromPath(location.pathname);
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) track("view_service", { service_id: service.id });
  }, [service]);

  if (!service) return <Navigate to={paths.services[lang]} replace />;

  return (
    <>
      <Seo
        title={service.seoTitle[lang]}
        description={service.description[lang]}
        path={location.pathname}
        lang={lang}
        altPath={alternatePath(location.pathname)}
        jsonLd={[
          personJsonLd(),
          {
            "@type": "Service",
            name: service.h1[lang],
            description: service.description[lang],
            provider: { "@id": "https://cristianovieira1.github.io/portfolio/#person" },
          },
          { "@type": "FAQPage", mainEntity: faqEntities(service.faqs, lang) },
        ]}
      />
      <main id="main" className="page-main">
        <section className="page-hero">
          <p className="eyebrow">
            <span />
            {service.eyebrow[lang]}
          </p>
          <h1>{service.h1[lang]}</h1>
          <p className="page-lead">{service.lead[lang]}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to={paths.quote[lang]}>
              {lang === "pt" ? "Solicitar orçamento" : "Request a quote"}
            </Link>
            <Link className="text-link" to={paths.services[lang]}>
              {lang === "pt" ? "Todos os serviços" : "All services"}
            </Link>
          </div>
        </section>
        <section className="page-block">
          <h2>{lang === "pt" ? "O problema que esse serviço resolve" : "The problem this service solves"}</h2>
          <p>{service.problem[lang]}</p>
        </section>
        <section className="page-block">
          <h2>{lang === "pt" ? "Benefícios" : "Benefits"}</h2>
          <div className="card-grid">
            {service.benefits.map((item) => (
              <article key={item.title.pt}>
                <h3>{item.title[lang]}</h3>
                <p>{item.text[lang]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="page-block">
          <h2>{lang === "pt" ? "Entregáveis" : "Deliverables"}</h2>
          <ul className="plain-list">
            {service.deliverables.map((item) => (
              <li key={item.pt}>{item[lang]}</li>
            ))}
          </ul>
        </section>
        <section className="page-block">
          <h2>{lang === "pt" ? "Tecnologias" : "Technologies"}</h2>
          <ul className="tag-list">
            {service.technologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {service.relatedProjectIds.length > 0 && (
          <section className="page-block">
            <h2>{lang === "pt" ? "Projetos relacionados" : "Related work"}</h2>
            <div className="card-grid">
              {service.relatedProjectIds.map((id) => {
                const project = getProject(id);
                if (!project) return null;
                return (
                  <article key={id}>
                    <h3>{project.title}</h3>
                    <p>{project.lead[lang]}</p>
                    <Link to={projectPath(project.slug, lang)}>
                      {lang === "pt" ? "Ver case" : "Read case"}
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        )}
        <section className="page-block">
          <h2>FAQ</h2>
          <div className="faq-list page-faq">
            {service.faqs.map((item) => (
              <details key={item.q.pt}>
                <summary>{item.q[lang]}</summary>
                <p>{item.a[lang]}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="page-block">
          <h2>{lang === "pt" ? "Outros serviços" : "Other services"}</h2>
          <ul className="plain-list">
            {services
              .filter((item) => item.id !== service.id)
              .map((item) => (
                <li key={item.id}>
                  <Link to={servicePath(item.slug, lang)}>{item.h1[lang]}</Link>
                </li>
              ))}
          </ul>
        </section>
        <section className="page-block quote-block">
          <h2>{lang === "pt" ? "Pedir orçamento deste serviço" : "Request a quote for this service"}</h2>
          <QuoteForm lang={lang} />
        </section>
      </main>
    </>
  );
}
