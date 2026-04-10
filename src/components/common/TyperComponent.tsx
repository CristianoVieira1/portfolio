import React, {
  useEffect,
  useRef,
  useState,
  type JSX,
  type RefObject,
} from "react";

interface TyperComponentProps {
  className?: string;
  strings?: string[];
}

const defaultStrings = ["Bank Account", "Web Payment", "Android & iOS"];

export default function TyperComponent({
  className = "theme-gradient",
  strings = defaultStrings,
}: TyperComponentProps): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const stringRefs = useRef<Array<RefObject<HTMLBRElement | null>>>([]);

  useEffect(() => {
    stringRefs.current = strings.map(
      (_, index) => stringRefs.current[index] ?? React.createRef<HTMLBRElement>()
    );
  }, [strings]);

  useEffect(() => {
    setActiveIndex((prev) => (strings.length > 0 ? prev % strings.length : 0));
  }, [strings.length]);

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    if (!wrapperEl) return;

    const observedTarget =
      (wrapperEl.closest(".rpp-banner-two-area") as HTMLElement | null) ??
      wrapperEl;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(observedTarget);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isHeroVisible) return;

    const updateWidth = () => {
      const activeEl = stringRefs.current[activeIndex]?.current;
      if (wrapperRef.current && activeEl) {
        wrapperRef.current.style.width = `${activeEl.scrollWidth}px`;
      }
    };

    const timeout = setTimeout(updateWidth, 10);
    window.addEventListener("resize", updateWidth);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateWidth);
    };
  }, [activeIndex, isHeroVisible]);

  useEffect(() => {
    if (!isHeroVisible || strings.length <= 1) return;

    let pendingTimeout: ReturnType<typeof setTimeout> | null = null;

    const interval = setInterval(() => {
      if (wrapperRef.current) wrapperRef.current.style.width = "0px";

      pendingTimeout = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % strings.length);
      }, 600);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (pendingTimeout) {
        clearTimeout(pendingTimeout);
      }
    };
  }, [isHeroVisible, strings.length]);

  return (
    <span ref={wrapperRef} className="cd-words-wrapper typeanimation">
      {strings.map((text, i) => (
        <b
          key={i}
          ref={stringRefs.current[i]}
          className={`${className} ${
            activeIndex === i ? "is-visible" : "is-hidden"
          }`}
        >
          {text}
        </b>
      ))}
    </span>
  );
}
