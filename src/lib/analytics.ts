type EventParams = Record<string, string | number | boolean | undefined>;

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

const CONSENT_KEY = "portfolio-analytics-consent";
export type Consent = "granted" | "denied" | "unknown";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? "";

export function analyticsConfigured() {
  return Boolean(MEASUREMENT_ID) && !MEASUREMENT_ID.startsWith("your_");
}

export function readConsent(): Consent {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {
    /* storage unavailable */
  }
  return "unknown";
}

export function storeConsent(value: Exclude<Consent, "unknown">) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable */
  }
  if (value === "granted") ensureAnalytics();
}

let loaded = false;

export function ensureAnalytics() {
  if (!analyticsConfigured() || loaded || readConsent() !== "granted") return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.appendChild(script);
}

export function track(eventName: string, params: EventParams = {}) {
  if (readConsent() !== "granted" || !analyticsConfigured()) return;
  ensureAnalytics();
  const clean = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );
  window.gtag?.("event", eventName, clean);
}

export function trackPageView(path: string, title: string, lang: string) {
  track("page_view", {
    page_path: path,
    page_title: title,
    language: lang,
  });
}
