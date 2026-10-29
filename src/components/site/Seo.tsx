import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applySeo, type SeoInput } from "@/lib/seo";
import { trackPageView } from "@/lib/analytics";

export default function Seo({ title, description, path, lang, altPath, image, jsonLd }: SeoInput) {
  const location = useLocation();
  const jsonKey = JSON.stringify(jsonLd ?? []);

  useEffect(() => {
    applySeo({ title, description, path, lang, altPath, image, jsonLd });
    trackPageView(location.pathname, title, lang);
    // jsonLd is represented by jsonKey
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, title, description, path, lang, altPath, image, jsonKey]);

  return null;
}
