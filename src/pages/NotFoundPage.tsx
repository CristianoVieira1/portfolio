import { Link, useLocation } from "react-router-dom";
import { ui } from "@/content/copy";
import { langFromPath } from "@/lib/i18n-path";
import { paths } from "@/lib/paths";

export default function NotFoundPage() {
  const lang = langFromPath(useLocation().pathname);
  return (
    <main id="main" className="page-main">
      <section className="page-hero">
        <h1>{ui.notFound.title[lang]}</h1>
        <p className="page-lead">{ui.notFound.text[lang]}</p>
        <Link className="button button-primary" to={paths.home[lang]}>
          {ui.notFound.home[lang]}
        </Link>
      </section>
    </main>
  );
}
