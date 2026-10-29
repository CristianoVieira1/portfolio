import { getProjectBySlug } from "../content/projects";
import { getServiceBySlug } from "../content/services";
import { paths } from "./paths";
import type { Lang } from "../content/types";

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

export function alternatePath(pathname: string): string {
  const lang = langFromPath(pathname);
  const target: Lang = lang === "pt" ? "en" : "pt";
  const normalized = pathname.replace(/\/$/, "") || "/";

  if (normalized === "/" || normalized === "/en") return paths.home[target];

  const serviceMatch = normalized.match(/^\/(?:en\/services|servicos)\/([^/]+)$/);
  if (serviceMatch) {
    const service = getServiceBySlug(serviceMatch[1]);
    if (service) return target === "en" ? `/en/services/${service.slug.en}` : `/servicos/${service.slug.pt}`;
  }

  const projectMatch = normalized.match(/^\/(?:en\/projects|projetos)\/([^/]+)$/);
  if (projectMatch) {
    const project = getProjectBySlug(projectMatch[1]);
    if (project) return target === "en" ? `/en/projects/${project.slug.en}` : `/projetos/${project.slug.pt}`;
  }

  const map: Record<string, string> = {
    "/servicos": paths.services.en,
    "/en/services": paths.services.pt,
    "/projetos": paths.projects.en,
    "/en/projects": paths.projects.pt,
    "/carreira": paths.career.en,
    "/en/career": paths.career.pt,
    "/orcamento": paths.quote.en,
    "/en/quote": paths.quote.pt,
  };

  return map[normalized] ?? paths.home[target];
}
