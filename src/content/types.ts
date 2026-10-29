export type Lang = "pt" | "en";

export type Localized = Record<Lang, string>;

export type Faq = {
  q: Localized;
  a: Localized;
};

export type PageKind =
  | "home"
  | "services-index"
  | "service"
  | "projects-index"
  | "project"
  | "career"
  | "quote";
