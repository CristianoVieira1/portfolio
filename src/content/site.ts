export const SITE_ORIGIN = "https://cristianovieira1.github.io";
export const BASE_PATH = "/portfolio";
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

export const PERSON = {
  name: "Cristiano Borges Vieira",
  shortName: "Cristiano Borges",
  email: "cristianovieirati@gmail.com",
  phoneDisplay: "+55 51 99888-4446",
  phoneE164: "+5551998884446",
  whatsapp: "5551998884446",
  linkedin: "https://www.linkedin.com/in/cristianobv",
  github: "https://github.com/CristianoVieira1",
  city: "Porto Alegre",
  region: "Rio Grande do Sul",
  country: "Brasil",
  cvFileName: "Cristiano-Borges-React-Native.pdf",
  cvPath: `${BASE_PATH}/Cristiano-Borges-React-Native.pdf`,
  portrait: `${BASE_PATH}/assets/images/banner/banner-user-image-two.webp`,
  shareImage: `${SITE_URL}/share-v2.png`,
};

export function routeTo(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function absoluteUrl(path: string) {
  if (path === "/") return `${SITE_URL}/`;
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return `${SITE_URL}${normalized}`;
}

export function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  const withLead = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLead.length > 1 && withLead.endsWith("/")
    ? withLead.slice(0, -1)
    : withLead;
}

export function asset(file: string) {
  return `${BASE_PATH}/${file.replace(/^\//, "")}`;
}
