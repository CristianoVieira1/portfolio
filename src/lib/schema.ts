import { PERSON, SITE_ORIGIN, SITE_URL } from "../content/site";
import type { Faq, Lang } from "../content/types";

export function faqEntities(faqs: Faq[], lang: Lang) {
  return faqs.map((item) => ({
    "@type": "Question",
    name: item.q[lang],
    acceptedAnswer: { "@type": "Answer", text: item.a[lang] },
  }));
}

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.name,
    url: `${SITE_URL}/`,
    image: `${SITE_ORIGIN}${PERSON.portrait}`,
    jobTitle: "Engenheiro de software sênior",
    description:
      "Desenvolvedor sênior de aplicativos, sites, sistemas web e SaaS. React Native, React, Next.js, Angular e TypeScript.",
    email: `mailto:${PERSON.email}`,
    telephone: PERSON.phoneE164,
    address: {
      "@type": "PostalAddress",
      addressLocality: PERSON.city,
      addressRegion: PERSON.region,
      addressCountry: "BR",
    },
    sameAs: [PERSON.linkedin, PERSON.github],
    knowsAbout: [
      "React Native",
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "Firebase",
      "SaaS",
      "Software engineering",
    ],
    knowsLanguage: ["pt-BR", "en"],
  };
}

export function serviceBusinessJsonLd() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: "Cristiano Borges — Engenharia de software",
    url: `${SITE_URL}/`,
    description:
      "Desenvolvimento sob medida de aplicativos, sites profissionais, sistemas web, SaaS e consultoria técnica.",
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: [
      { "@type": "City", name: "Porto Alegre" },
      { "@type": "State", name: "Rio Grande do Sul" },
      { "@type": "Country", name: "Brasil" },
    ],
    availableLanguage: ["Portuguese", "English"],
    serviceType: [
      "Desenvolvimento de aplicativos",
      "Criação de sites profissionais",
      "Desenvolvimento de sistemas web",
      "Desenvolvimento de SaaS",
      "Desenvolvimento React Native",
      "Consultoria e modernização de sistemas",
    ],
  };
}
