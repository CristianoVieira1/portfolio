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
  const playedRef = useRef(false);
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

    playedRef.current = false;
    const wordEls = el.querySelectorAll<HTMLElement>(".text-anim-word");
    gsap.killTweensOf(wordEls);

    const play = () => {
      if (playedRef.current || !wordEls.length) return;
      playedRef.current = true;
      gsap.fromTo(
        wordEls,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "back.out(1.7)",
          stagger: 0.03,
          overwrite: true,
        },
      );
    };

    gsap.set(wordEls, { opacity: 0, y: 22 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          play();
          observer.unobserve(el);
        });
      },
      { threshold: 0.15 },
    );

    // Wait for the loading screen to finish, then observe / play.
    const start = window.setTimeout(() => {
      observer.observe(el);
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
      if (inView) {
        play();
        observer.unobserve(el);
      }
    }, 2200);

    const fallback = window.setTimeout(() => {
      play();
    }, 3200);

    return () => {
      observer.disconnect();
      window.clearTimeout(start);
      window.clearTimeout(fallback);
      gsap.killTweensOf(wordEls);
    };
  }, [words]);

  return (
    <div className="about-content-area">
      <div className="container tmp-section-gap">
        <div className="text-para-doc-wrap">
          <h2
            ref={textRef}
            className="text-para-documents text-para-documents--clean tmp-scroll-trigger tmp-fade-in animation-order-1"
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

          <div className="right-bg-text-para" aria-hidden="true">
            <img
              loading="lazy"
              alt=""
              src="/portfolio/assets/images/banner/right-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
          <div className="left-bg-text-para" aria-hidden="true">
            <img
              loading="lazy"
              alt=""
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
