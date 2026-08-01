import { useEffect } from "react";

type MetaProps = {
  meta: {
    title: string;
    description?: string;
  };
};

export default function MetaComponent({ meta }: MetaProps) {
  useEffect(() => {
    document.title = meta.title;

    if (meta.description) {
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute("content", meta.description);
      }

      const ogDescription = document.querySelector(
        'meta[property="og:description"]',
      );
      if (ogDescription) {
        ogDescription.setAttribute("content", meta.description);
      }

      const twitterDescription = document.querySelector(
        'meta[name="twitter:description"]',
      );
      if (twitterDescription) {
        twitterDescription.setAttribute("content", meta.description);
      }
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", meta.title);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", meta.title);
    }
  }, [meta.title, meta.description]);

  return null;
}
