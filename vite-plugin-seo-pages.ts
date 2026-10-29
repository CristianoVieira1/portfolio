import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { absoluteUrl } from "./src/content/site";
import { getStaticPages, sitemapXml, type StaticPage } from "./src/lib/static-pages";
import { withTrailingSlash } from "./src/lib/paths";

function replaceTag(html: string, pattern: RegExp, replacement: string) {
  return pattern.test(html) ? html.replace(pattern, replacement) : `${replacement}\n${html}`;
}

function inject(html: string, page: StaticPage) {
  const url = absoluteUrl(withTrailingSlash(page.path === "/" ? "/" : page.path));
  const altUrl = absoluteUrl(withTrailingSlash(page.altPath === "/" ? "/" : page.altPath));
  const ptUrl = page.lang === "pt" ? url : altUrl;
  const enUrl = page.lang === "en" ? url : altUrl;
  const locale = page.lang === "pt" ? "pt_BR" : "en_US";
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": page.jsonLd,
  });

  let next = html;
  next = next.replace(/<html lang="[^"]*">/, `<html lang="${page.lang === "pt" ? "pt-BR" : "en"}">`);
  next = next.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);
  next = replaceTag(
    next,
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeAttr(page.description)}" />`,
  );
  next = replaceTag(next, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  next = next.replace(
    /<link rel="alternate" hreflang="pt-BR" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="pt-BR" href="${ptUrl}" />`,
  );
  next = next.replace(
    /<link rel="alternate" hreflang="en" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
  );
  next = next.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="x-default" href="${ptUrl}" />`,
  );
  next = next.replace(/<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${locale}" />`);
  next = next.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  next = next.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttr(page.title)}" />`);
  next = next.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeAttr(page.description)}" />`,
  );
  next = next.replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeAttr(page.title)}" />`);
  next = next.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${escapeAttr(page.description)}" />`,
  );
  next = next.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${json}</script>`,
  );
  next = next.replace(
    /<noscript>[\s\S]*?<\/noscript>/,
    `<noscript><main>${page.noscript}</main></noscript>`,
  );
  return next;
}

function escapeAttr(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

export function seoPagesPlugin(): Plugin {
  let outDir = "dist";

  return {
    name: "seo-pages",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const indexPath = path.join(outDir, "index.html");
      if (!fs.existsSync(indexPath)) return;
      const template = fs.readFileSync(indexPath, "utf8");
      const pages = getStaticPages();

      for (const page of pages) {
        const rendered = inject(template, page);
        const dest =
          page.path === "/"
            ? indexPath
            : path.join(outDir, page.path.replace(/^\//, ""), "index.html");
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, rendered);
      }

      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemapXml(pages));
      fs.writeFileSync(path.join(outDir, "404.html"), template);
      fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
    },
  };
}
