import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
}

const SplitText = ({
  text,
  className = "",
  as: Tag = "span",
  delay = 0,
  stagger = 0.03,
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setIsVisible(false);

    let observer: IntersectionObserver;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
        },
        { threshold: 0.01 },
      );
      observer.observe(el);
    }, 100);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [text]);

  return (
    <Tag ref={ref as any} className={`inline ${className}`}>
      {words.map((word, wi) => (
        <span
          key={`${text}-${wi}`}
          className="inline-block overflow-hidden"
          style={{ marginRight: "0.25em" }}
        >
          <span
            className="inline-block transition-all duration-700 ease-out"
            style={
              isVisible
                ? {
                    transform: "translateY(0)",
                    opacity: 1,
                    transitionDelay: `${delay + wi * stagger}s`,
                  }
                : {
                    transform: "translateY(100%)",
                    opacity: 0,
                  }
            }
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
