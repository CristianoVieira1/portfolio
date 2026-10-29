import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { ui } from "@/content/copy";
import { PERSON } from "@/content/site";
import { analyticsConfigured, ensureAnalytics, readConsent, storeConsent, track } from "@/lib/analytics";
import { alternatePath, langFromPath } from "@/lib/i18n-path";
import { paths } from "@/lib/paths";
import { mailtoUrl, plainWhatsappUrl } from "@/lib/quote";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function SiteLayout() {
  const location = useLocation();
  const lang = langFromPath(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [consent, setConsent] = useState(readConsent);
  const isHome = location.pathname === "/" || location.pathname === "/en";
  const isQuote = location.pathname.endsWith("/orcamento") || location.pathname.endsWith("/quote");

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (consent === "granted") ensureAnalytics();
  }, [consent]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const processTo = { pathname: paths.home[lang], hash: "processo" };
  const nav = [
    { to: paths.projects[lang], label: ui.nav.work[lang], hash: false },
    { to: paths.services[lang], label: ui.nav.services[lang], hash: false },
    { to: processTo, label: ui.nav.process[lang], hash: true },
    { to: paths.career[lang], label: ui.nav.career[lang], hash: false },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className={`portfolio-v2 site-shell ${isHome ? "is-home" : "is-inner"}`}>
        <ScrollRestoration />
        <a href="#main" className="skip-link">
          {ui.skip[lang]}
        </a>
        <header className={`site-header ${isHome ? "" : "is-solid"}`}>
          <Link className="brand" to={paths.home[lang]} aria-label={ui.brandAria[lang]}>
            <span>CB</span>
            <i />
          </Link>
          <nav className="desktop-nav" aria-label={ui.navAria[lang]}>
            {nav.map((item) =>
              item.hash ? (
                <Link key={item.label} to={item.to}>
                  {item.label}
                </Link>
              ) : (
                <NavLink key={item.label} to={item.to as string}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
          <div className="header-actions">
            <Link className="lang-button" to={alternatePath(location.pathname)} aria-label={ui.langToEn[lang]}>
              {lang === "pt" ? "EN" : "PT"}
            </Link>
            <Link className="header-cta" to={paths.quote[lang]}>
              {ui.nav.quote[lang]} <Arrow />
            </Link>
            <button className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label={ui.openMenu[lang]}>
              <span />
              <span />
            </button>
          </div>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label={ui.closeMenu[lang]}>
                ×
              </button>
              <nav>
                {nav.map((item, index) => (
                  <motion.div key={item.label} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.07 }}>
                    <Link to={item.to} onClick={() => setMenuOpen(false)}>
                      <span>0{index + 1}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link to={paths.quote[lang]} className="button button-primary" onClick={() => setMenuOpen(false)}>
                {ui.nav.quote[lang]} <Arrow />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <Outlet context={{ lang }} />

        {!isQuote && (
          <Link className="sticky-cta" to={paths.quote[lang]}>
            {ui.stickyCta[lang]}
          </Link>
        )}

        {consent === "unknown" && analyticsConfigured() && (
          <div className="consent-bar" role="dialog" aria-label="Analytics">
            <p>{ui.consent.text[lang]}</p>
            <div>
              <button
                type="button"
                className="button button-primary"
                onClick={() => {
                  storeConsent("granted");
                  setConsent("granted");
                }}
              >
                {ui.consent.accept[lang]}
              </button>
              <button
                type="button"
                className="button button-ghost"
                onClick={() => {
                  storeConsent("denied");
                  setConsent("denied");
                }}
              >
                {ui.consent.deny[lang]}
              </button>
            </div>
          </div>
        )}

        <footer className="site-footer">
          <Link className="brand brand-light" to={paths.home[lang]}>
            <span>CB</span>
            <i />
          </Link>
          <p>
            {lang === "pt"
              ? "Engenharia de software sob medida"
              : "Custom software engineering"}
            <br />
            React Native · React · Next.js · SaaS
          </p>
          <div>
            <a
              href={PERSON.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("click_linkedin", { source: "footer" })}
            >
              LinkedIn <Arrow />
            </a>
            <a href={PERSON.github} target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
            <a
              href={mailtoUrl(lang)}
              onClick={() => track("click_email", { source: "footer" })}
            >
              Email <Arrow />
            </a>
            <a
              href={plainWhatsappUrl(lang)}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("click_whatsapp", { source: "footer" })}
            >
              WhatsApp <Arrow />
            </a>
          </div>
          <small>
            © {new Date().getFullYear()} {PERSON.shortName}. {ui.footerRemote[lang]}
          </small>
        </footer>
      </div>
    </MotionConfig>
  );
}
