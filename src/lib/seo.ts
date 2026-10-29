import { PERSON, absoluteUrl } from "../content/site";
import { withTrailingSlash } from "./paths";

export type SeoInput = {
  title: string;
  description: string;
  path: string;
  lang: "pt" | "en";
  altPath: string;
  image?: string;
  jsonLd?: unknown[];
};

function setAttr(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function upsertLink(rel: string, hreflang: string | undefined, href: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    if (hreflang) el.hreflang = hreflang;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function applySeo({ title, description, path, lang, altPath, image, jsonLd }: SeoInput) {
  const url = absoluteUrl(withTrailingSlash(path === "/" ? "/" : path));
  const altUrl = absoluteUrl(withTrailingSlash(altPath === "/" ? "/" : altPath));
  const ptUrl = lang === "pt" ? url : altUrl;
  const enUrl = lang === "en" ? url : altUrl;
  const share = image ?? PERSON.shareImage;
  const locale = lang === "pt" ? "pt_BR" : "en_US";

  document.title = title;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  setAttr('meta[name="description"]', "content", description);
  setAttr('meta[property="og:title"]', "content", title);
  setAttr('meta[property="og:description"]', "content", description);
  setAttr('meta[property="og:url"]', "content", url);
  setAttr('meta[property="og:locale"]', "content", locale);
  setAttr('meta[property="og:image"]', "content", share);
  setAttr('meta[property="og:image:secure_url"]', "content", share);
  setAttr('meta[name="twitter:title"]', "content", title);
  setAttr('meta[name="twitter:description"]', "content", description);
  setAttr('meta[name="twitter:image"]', "content", share);

  upsertLink("canonical", undefined, url);
  upsertLink("alternate", "pt-BR", ptUrl);
  upsertLink("alternate", "en", enUrl);
  upsertLink("alternate", "x-default", ptUrl);

  const existing = document.getElementById("page-jsonld");
  if (existing) existing.remove();
  if (jsonLd?.length) {
    const script = document.createElement("script");
    script.id = "page-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": jsonLd,
    });
    document.head.appendChild(script);
  }
}

export { faqEntities, personJsonLd, serviceBusinessJsonLd } from "./schema";
