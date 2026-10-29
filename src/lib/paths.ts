import type { Lang, Localized } from "../content/types";
import { BASE_PATH } from "../content/site";

export const paths = {
  home: { pt: "/", en: "/en" },
  services: { pt: "/servicos", en: "/en/services" },
  projects: { pt: "/projetos", en: "/en/projects" },
  career: { pt: "/carreira", en: "/en/career" },
  quote: { pt: "/orcamento", en: "/en/quote" },
} as const;

export function servicePath(slug: Localized, lang: Lang) {
  return lang === "en" ? `/en/services/${slug.en}` : `/servicos/${slug.pt}`;
}

export function projectPath(slug: Localized, lang: Lang) {
  return lang === "en" ? `/en/projects/${slug.en}` : `/projetos/${slug.pt}`;
}

export function localizedPath(map: Localized, lang: Lang) {
  return map[lang];
}

export function withTrailingSlash(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function langFromPath(pathname: string): Lang {
  const clean = pathname.replace(BASE_PATH, "") || "/";
  return clean === "/en" || clean.startsWith("/en/") ? "en" : "pt";
}

export function stripLang(pathname: string) {
  const clean = pathname.replace(new RegExp(`^${BASE_PATH}`), "") || "/";
  if (clean === "/en") return "/";
  if (clean.startsWith("/en/")) return clean.slice(3) || "/";
  return clean;
}
