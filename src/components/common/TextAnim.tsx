import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function TextAnim() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const { lang } = useLanguage();

  const text = translations.textAnim.text[lang];
  const highlights = translations.textAnim.highlightWords[lang];

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Build text with highlighted spans
    let html: string = text;
    highlights.forEach((word: string) => {
      html = html.replace(word, `<span>${word}</span>`);
    });
    el.innerHTML = html;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Wrap each word in a span for animation
          const words = el.innerHTML.split(/(\s+)/);
          el.innerHTML = words
            .map((w) => {
              if (/^\s+$/.test(w)) return w;
              return `<span class="text-anim-word" style="display:inline-block">${w}</span>`;
            })
            .join("");

          const wordEls = el.querySelectorAll(".text-anim-word");

          gsap.set(wordEls, { opacity: 0, y: 20 });
          gsap.to(wordEls, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.03,
          });

          observer.unobserve(el);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [lang, text, highlights]);

  return (
    <div className="about-content-area">
      <div className="container tmp-section-gap">
        <div className="text-para-doc-wrap">
          <h2
            ref={textRef}
            className={`text-para-documents tmp-scroll-trigger tmp-fade-in inv-title-animation-wrap animation-order-1 ${
              lang === "pt" ? "text-para-documents--gray-white" : ""
            }`}
          >
            {text}
          </h2>

          <div className="right-bg-text-para">
            <img
              loading="lazy"
              alt="Right background"
              src="/portfolio/assets/images/banner/right-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
          <div className="left-bg-text-para">
            <img
              loading="lazy"
              alt="Left background"
              src="/portfolio/assets/images/banner/left-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
