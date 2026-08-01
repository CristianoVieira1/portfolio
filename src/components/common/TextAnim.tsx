import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

function buildPhraseAwareWords(text: string, highlights: readonly string[]) {
  const sorted = [...highlights].sort((a, b) => b.length - a.length);
  const chunks = sorted.length
    ? text.split(
        new RegExp(
          `(${sorted
            .map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
            .join("|")})`,
          "gi",
        ),
      )
    : [text];

  const result: Array<
    | { key: string; type: "space"; value: string }
    | { key: string; type: "word"; value: string; highlight: boolean }
  > = [];

  chunks.forEach((chunk, chunkIndex) => {
    if (!chunk) return;

    const isHighlight = sorted.some(
      (item) => item.toLowerCase() === chunk.toLowerCase(),
    );

    if (isHighlight) {
      result.push({
        key: `highlight-${chunkIndex}`,
        type: "word",
        value: chunk,
        highlight: true,
      });
      return;
    }

    chunk.split(/(\s+)/).forEach((token, tokenIndex) => {
      if (!token) return;
      if (/^\s+$/.test(token)) {
        result.push({
          key: `space-${chunkIndex}-${tokenIndex}`,
          type: "space",
          value: token,
        });
        return;
      }
      result.push({
        key: `word-${chunkIndex}-${tokenIndex}`,
        type: "word",
        value: token,
        highlight: false,
      });
    });
  });

  return result;
}

export default function TextAnim() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const { lang } = useLanguage();
  const text = translations.textAnim.text[lang];
  const highlights = translations.textAnim.highlightWords[lang];
  const words = useMemo(
    () => buildPhraseAwareWords(text, highlights),
    [text, highlights],
  );

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const wordEls = el.querySelectorAll<HTMLElement>(".text-anim-word");
    gsap.killTweensOf(wordEls);
    gsap.set(wordEls, { opacity: 0, y: 18 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          gsap.to(wordEls, {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.02,
            overwrite: true,
          });

          observer.unobserve(el);
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(wordEls);
    };
  }, [words]);

  return (
    <div className="about-content-area">
      <div className="container tmp-section-gap">
        <div className="text-para-doc-wrap">
          <h2
            ref={textRef}
            className="text-para-documents text-para-documents--clean"
          >
            {words.map((item) =>
              item.type === "space" ? (
                <span key={item.key}>{item.value}</span>
              ) : (
                <span
                  key={item.key}
                  className={`text-anim-word${
                    item.highlight ? " text-anim-highlight" : ""
                  }`}
                >
                  {item.value}
                </span>
              ),
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}
