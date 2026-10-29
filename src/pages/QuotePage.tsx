import { useLocation } from "react-router-dom";
import QuoteForm from "@/components/site/QuoteForm";
import Seo from "@/components/site/Seo";
import { quoteCopy, quoteSeo } from "@/content/copy";
import { personJsonLd } from "@/lib/schema";
import { alternatePath, langFromPath } from "@/lib/i18n-path";
import { plainWhatsappUrl } from "@/lib/quote";
import { track } from "@/lib/analytics";

export default function QuotePage() {
  const location = useLocation();
  const lang = langFromPath(location.pathname);

  return (
    <>
      <Seo
        title={quoteSeo.seoTitle[lang]}
        description={quoteSeo.description[lang]}
        path={location.pathname}
        lang={lang}
        altPath={alternatePath(location.pathname)}
        jsonLd={[personJsonLd()]}
      />
      <main id="main" className="page-main">
        <section className="page-hero">
          <h1>{quoteCopy.title[lang]}</h1>
          <p className="page-lead">{quoteCopy.lead[lang]}</p>
          <a
            className="text-link"
            href={plainWhatsappUrl(lang)}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("click_whatsapp", { source: "quote_page" })}
          >
            WhatsApp
          </a>
        </section>
        <section className="page-block quote-block">
          <QuoteForm lang={lang} />
        </section>
      </main>
    </>
  );
}
