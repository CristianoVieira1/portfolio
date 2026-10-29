import { Link, useLocation } from "react-router-dom";
import type { MouseEvent } from "react";
import Seo from "@/components/site/Seo";
import { careerCopy } from "@/content/copy";
import { education, experience } from "@/content/experience";
import { PERSON } from "@/content/site";
import { personJsonLd } from "@/lib/schema";
import { alternatePath, langFromPath } from "@/lib/i18n-path";
import { paths } from "@/lib/paths";

async function downloadCv(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  const response = await fetch(PERSON.cvPath);
  if (!response.ok) return;
  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = PERSON.cvFileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

export default function CareerPage() {
  const location = useLocation();
  const lang = langFromPath(location.pathname);

  return (
    <>
      <Seo
        title={careerCopy.seoTitle[lang]}
        description={careerCopy.description[lang]}
        path={location.pathname}
        lang={lang}
        altPath={alternatePath(location.pathname)}
        jsonLd={[personJsonLd()]}
      />
      <main id="main" className="page-main">
        <section className="page-hero">
          <h1>{careerCopy.h1[lang]}</h1>
          <p className="page-lead">{careerCopy.lead[lang]}</p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={PERSON.cvPath}
              download={PERSON.cvFileName}
              onClick={downloadCv}
            >
              {careerCopy.cv[lang]}
            </a>
            <Link className="text-link" to={paths.quote[lang]}>
              {careerCopy.hireCta[lang]}
            </Link>
          </div>
        </section>
        <section className="page-block">
          <h2>{careerCopy.experience[lang]}</h2>
          <ol className="timeline">
            {experience.map((item) => (
              <li key={item.institute.pt}>
                <span>{item.duration[lang]}</span>
                <h3>{item.title[lang]}</h3>
                <strong>{item.institute[lang]}</strong>
                <p>{item.description[lang]}</p>
                <ul className="tag-list">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
        <section className="page-block">
          <h2>{careerCopy.education[lang]}</h2>
          <ol className="timeline">
            {education.map((item) => (
              <li key={item.title.pt}>
                <span>{item.duration[lang]}</span>
                <h3>{item.title[lang]}</h3>
                <strong>{item.institute[lang]}</strong>
                <p>{item.description[lang]}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}
