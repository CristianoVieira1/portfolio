import { careerCopy, homeCopy, homeFaqs, indexes, quoteSeo } from "../content/copy";
import { experience } from "../content/experience";
import { projects } from "../content/projects";
import { services } from "../content/services";
import { PERSON, SITE_ORIGIN, SITE_URL, absoluteUrl } from "../content/site";
import type { Faq, Lang } from "../content/types";
import { faqEntities, personJsonLd, serviceBusinessJsonLd } from "./schema";
import { projectPath, servicePath, withTrailingSlash } from "./paths";

export type StaticPage = {
  path: string;
  lang: Lang;
  altPath: string;
  title: string;
  description: string;
  noscript: string;
  jsonLd: unknown[];
};

const homeTitle: Record<Lang, string> = {
  pt: "Cristiano Borges — Desenvolvimento de software sob medida",
  en: "Cristiano Borges — Custom software development",
};

const homeDescription: Record<Lang, string> = {
  pt: "Desenvolvimento de aplicativos, sites profissionais, sistemas web e SaaS. Engenheiro de software sênior em Porto Alegre, com atendimento remoto em todo o Brasil.",
  en: "Development of apps, professional websites, web systems and SaaS. Senior software engineer in Porto Alegre, working remotely across Brazil.",
};

function faqsToNoscript(faqs: Faq[], lang: Lang) {
  return faqs
    .map((item) => `<h3>${escapeHtml(item.q[lang])}</h3><p>${escapeHtml(item.a[lang])}</p>`)
    .join("");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function contactLinks(lang: Lang) {
  const quote = lang === "en" ? "/en/quote/" : "/orcamento/";
  return `<p><a href="${SITE_URL}${quote}">${lang === "en" ? "Request a quote" : "Solicitar orçamento"}</a> · <a href="https://wa.me/${PERSON.whatsapp}">WhatsApp</a> · <a href="mailto:${PERSON.email}">E-mail</a></p>`;
}

function websiteJsonLd(lang: Lang) {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: homeTitle[lang],
    inLanguage: lang === "pt" ? "pt-BR" : "en",
    publisher: { "@id": `${SITE_URL}/#person` },
  };
}

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(withTrailingSlash(item.path)),
    })),
  };
}

export function getStaticPages(): StaticPage[] {
  const pages: StaticPage[] = [];

  (["pt", "en"] as Lang[]).forEach((lang) => {
    const homePath = lang === "en" ? "/en" : "/";
    const altHome = lang === "en" ? "/" : "/en";
    pages.push({
      path: homePath,
      lang,
      altPath: altHome,
      title: homeTitle[lang],
      description: homeDescription[lang],
      jsonLd: [
        websiteJsonLd(lang),
        personJsonLd(),
        serviceBusinessJsonLd(),
        {
          "@type": "FAQPage",
          "@id": `${SITE_URL}/#faq`,
          mainEntity: faqEntities(homeFaqs, lang),
        },
      ],
      noscript: `
        <h1>${escapeHtml(homeCopy.hero.titleA[lang])} ${escapeHtml(homeCopy.hero.titleB[lang])}</h1>
        <p>${escapeHtml(homeCopy.hero.lead[lang])}</p>
        <p>${escapeHtml(homeCopy.hero.description[lang])}</p>
        <h2>${escapeHtml(homeCopy.services.title[lang])}</h2>
        <ul>${services.map((service) => `<li><a href="${absoluteUrl(withTrailingSlash(servicePath(service.slug, lang)))}">${escapeHtml(service.h1[lang])}</a> — ${escapeHtml(service.lead[lang])}</li>`).join("")}</ul>
        <h2>${escapeHtml(homeCopy.projects.title[lang])}</h2>
        <ul>${projects.map((project) => `<li><a href="${absoluteUrl(withTrailingSlash(projectPath(project.slug, lang)))}">${escapeHtml(project.title)}</a> — ${escapeHtml(project.lead[lang])}</li>`).join("")}</ul>
        <h2>${escapeHtml(homeCopy.faq.title[lang])}</h2>
        ${faqsToNoscript(homeFaqs, lang)}
        ${contactLinks(lang)}
      `,
    });

    const servicesPath = lang === "en" ? "/en/services" : "/servicos";
    pages.push({
      path: servicesPath,
      lang,
      altPath: lang === "en" ? "/servicos" : "/en/services",
      title: indexes.services.seoTitle[lang],
      description: indexes.services.description[lang],
      jsonLd: [
        personJsonLd(),
        breadcrumb([
          { name: lang === "pt" ? "Início" : "Home", path: homePath },
          { name: indexes.services.h1[lang], path: servicesPath },
        ]),
      ],
      noscript: `
        <h1>${escapeHtml(indexes.services.h1[lang])}</h1>
        <p>${escapeHtml(indexes.services.lead[lang])}</p>
        <ul>${services.map((service) => `<li><a href="${absoluteUrl(withTrailingSlash(servicePath(service.slug, lang)))}">${escapeHtml(service.h1[lang])}</a></li>`).join("")}</ul>
        ${contactLinks(lang)}
      `,
    });

    services.forEach((service) => {
      const path = servicePath(service.slug, lang);
      const altPath = servicePath(service.slug, lang === "pt" ? "en" : "pt");
      pages.push({
        path,
        lang,
        altPath,
        title: service.seoTitle[lang],
        description: service.description[lang],
        jsonLd: [
          {
            "@type": "Service",
            name: service.h1[lang],
            description: service.description[lang],
            provider: { "@id": `${SITE_URL}/#person` },
            areaServed: { "@type": "Country", name: "Brasil" },
            url: absoluteUrl(withTrailingSlash(path)),
          },
          {
            "@type": "FAQPage",
            mainEntity: faqEntities(service.faqs, lang),
          },
          breadcrumb([
            { name: lang === "pt" ? "Início" : "Home", path: homePath },
            { name: indexes.services.h1[lang], path: servicesPath },
            { name: service.h1[lang], path },
          ]),
        ],
        noscript: `
          <h1>${escapeHtml(service.h1[lang])}</h1>
          <p>${escapeHtml(service.lead[lang])}</p>
          <p>${escapeHtml(service.problem[lang])}</p>
          <h2>${lang === "pt" ? "Benefícios" : "Benefits"}</h2>
          ${service.benefits.map((item) => `<h3>${escapeHtml(item.title[lang])}</h3><p>${escapeHtml(item.text[lang])}</p>`).join("")}
          <h2>${lang === "pt" ? "Entregáveis" : "Deliverables"}</h2>
          <ul>${service.deliverables.map((item) => `<li>${escapeHtml(item[lang])}</li>`).join("")}</ul>
          <h2>FAQ</h2>
          ${faqsToNoscript(service.faqs, lang)}
          ${contactLinks(lang)}
        `,
      });
    });

    const projectsPath = lang === "en" ? "/en/projects" : "/projetos";
    pages.push({
      path: projectsPath,
      lang,
      altPath: lang === "en" ? "/projetos" : "/en/projects",
      title: indexes.projects.seoTitle[lang],
      description: indexes.projects.description[lang],
      jsonLd: [
        personJsonLd(),
        breadcrumb([
          { name: lang === "pt" ? "Início" : "Home", path: homePath },
          { name: indexes.projects.h1[lang], path: projectsPath },
        ]),
      ],
      noscript: `
        <h1>${escapeHtml(indexes.projects.h1[lang])}</h1>
        <p>${escapeHtml(indexes.projects.lead[lang])}</p>
        <ul>${projects.map((project) => `<li><a href="${absoluteUrl(withTrailingSlash(projectPath(project.slug, lang)))}">${escapeHtml(project.title)}</a></li>`).join("")}</ul>
        ${contactLinks(lang)}
      `,
    });

    projects.forEach((project) => {
      const path = projectPath(project.slug, lang);
      const altPath = projectPath(project.slug, lang === "pt" ? "en" : "pt");
      pages.push({
        path,
        lang,
        altPath,
        title: project.seoTitle[lang],
        description: project.description[lang],
        jsonLd: [
          {
            "@type": "CreativeWork",
            name: project.title,
            description: project.description[lang],
            creator: { "@id": `${SITE_URL}/#person` },
            url: absoluteUrl(withTrailingSlash(path)),
          },
          breadcrumb([
            { name: lang === "pt" ? "Início" : "Home", path: homePath },
            { name: indexes.projects.h1[lang], path: projectsPath },
            { name: project.title, path },
          ]),
        ],
        noscript: `
          <h1>${escapeHtml(project.title)}</h1>
          <p>${escapeHtml(project.lead[lang])}</p>
          <h2>${lang === "pt" ? "Problema" : "Problem"}</h2>
          <p>${escapeHtml(project.problem[lang])}</p>
          <h2>${lang === "pt" ? "Participação" : "Role"}</h2>
          <p>${escapeHtml(project.participation[lang])}</p>
          <h2>${lang === "pt" ? "Solução" : "Solution"}</h2>
          <p>${escapeHtml(project.solution[lang])}</p>
          <h2>${lang === "pt" ? "Impacto" : "Impact"}</h2>
          <p>${escapeHtml(project.impact[lang])}</p>
          ${contactLinks(lang)}
        `,
      });
    });

    const careerPath = lang === "en" ? "/en/career" : "/carreira";
    pages.push({
      path: careerPath,
      lang,
      altPath: lang === "en" ? "/carreira" : "/en/career",
      title: careerCopy.seoTitle[lang],
      description: careerCopy.description[lang],
      jsonLd: [
        personJsonLd(),
        breadcrumb([
          { name: lang === "pt" ? "Início" : "Home", path: homePath },
          { name: careerCopy.h1[lang], path: careerPath },
        ]),
      ],
      noscript: `
        <h1>${escapeHtml(careerCopy.h1[lang])}</h1>
        <p>${escapeHtml(careerCopy.lead[lang])}</p>
        <h2>${escapeHtml(careerCopy.experience[lang])}</h2>
        ${experience.map((item) => `<h3>${escapeHtml(item.title[lang])} — ${escapeHtml(item.institute[lang])}</h3><p>${escapeHtml(item.duration[lang])}</p><p>${escapeHtml(item.description[lang])}</p>`).join("")}
        <p><a href="${SITE_ORIGIN}${PERSON.cvPath}" download="${PERSON.cvFileName}">${escapeHtml(careerCopy.cv[lang])}</a></p>
        ${contactLinks(lang)}
      `,
    });

    const quotePath = lang === "en" ? "/en/quote" : "/orcamento";
    pages.push({
      path: quotePath,
      lang,
      altPath: lang === "en" ? "/orcamento" : "/en/quote",
      title: quoteSeo.seoTitle[lang],
      description: quoteSeo.description[lang],
      jsonLd: [
        personJsonLd(),
        breadcrumb([
          { name: lang === "pt" ? "Início" : "Home", path: homePath },
          { name: quoteSeo.seoTitle[lang], path: quotePath },
        ]),
      ],
      noscript: `
        <h1>${escapeHtml(quoteCopyTitle(lang))}</h1>
        <p>${escapeHtml(quoteSeo.description[lang])}</p>
        ${contactLinks(lang)}
      `,
    });
  });

  return pages;
}

function quoteCopyTitle(lang: Lang) {
  return lang === "en" ? "Request a quote" : "Solicitar orçamento";
}

export function sitemapXml(pages: StaticPage[]) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map((page) => {
      const loc = absoluteUrl(withTrailingSlash(page.path === "/" ? "/" : page.path));
      const priority = page.path === "/" || page.path === "/en" ? "1.0" : page.path.includes("servicos") || page.path.includes("services") ? "0.8" : "0.7";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
