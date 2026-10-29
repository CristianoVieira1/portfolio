import { Link, useLocation } from "react-router-dom";
import Seo from "@/components/site/Seo";
import { indexes } from "@/content/copy";
import { services } from "@/content/services";
import { personJsonLd } from "@/lib/schema";
import { alternatePath, langFromPath } from "@/lib/i18n-path";
import { paths, servicePath } from "@/lib/paths";

export default function ServicesIndexPage() {
  const location = useLocation();
  const lang = langFromPath(location.pathname);

  return (
    <>
      <Seo
        title={indexes.services.seoTitle[lang]}
        description={indexes.services.description[lang]}
        path={location.pathname}
        lang={lang}
        altPath={alternatePath(location.pathname)}
        jsonLd={[personJsonLd()]}
      />
      <main id="main" className="page-main">
        <section className="page-hero">
          <h1>{indexes.services.h1[lang]}</h1>
          <p className="page-lead">{indexes.services.lead[lang]}</p>
        </section>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.id}>
              <p className="eyebrow">
                <span />
                {service.eyebrow[lang]}
              </p>
              <h2>{service.h1[lang]}</h2>
              <p>{service.lead[lang]}</p>
              <Link to={servicePath(service.slug, lang)}>
                {lang === "pt" ? "Abrir serviço" : "Open service"}
              </Link>
            </article>
          ))}
        </div>
        <p>
          <Link className="button button-primary" to={paths.quote[lang]}>
            {lang === "pt" ? "Solicitar orçamento" : "Request a quote"}
          </Link>
        </p>
      </main>
    </>
  );
}
