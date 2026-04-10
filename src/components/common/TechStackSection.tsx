import SplitText from "./SplitText";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const techs = [
  { name: "React Native", icon: "⚛️", color: "primary" },
  { name: "TypeScript", icon: "🔷", color: "secondary" },
  { name: "Firebase", icon: "🔥", color: "accent" },
  { name: "GraphQL", icon: "◈", color: "primary" },
  { name: "Expo", icon: "📱", color: "secondary" },
  { name: "Redux", icon: "🔄", color: "accent" },
  { name: "Node.js", icon: "🟢", color: "accent" },
  { name: "Git", icon: "🔀", color: "primary" },
];

const TechCard = ({ tech, index, isVisible }: { tech: typeof techs[0]; index: number; isVisible: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const glowColor = tech.color === "primary" ? "var(--neon-purple)" : tech.color === "secondary" ? "var(--neon-blue)" : "var(--neon-green)";

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`tech-card glass gradient-border ${
        tech.color === "primary" ? "tech-card--primary" :
        tech.color === "secondary" ? "tech-card--secondary" :
        "tech-card--accent"
      }`}
      style={isVisible ? { animation: `fade-in-up 0.5s ease-out ${0.1 + index * 0.08}s both` } : { opacity: 0 }}
    >
      <div
        className="tech-card-cursor-glow"
        style={{
          left: `${glow.x}%`,
          top: `${glow.y}%`,
          background: `radial-gradient(circle, hsl(${glowColor} / 0.15), transparent 70%)`,
        }}
      />
      <div className="tech-card-icon">
        {tech.icon}
      </div>
      <div className="tech-card-name">{tech.name}</div>
    </div>
  );
};

const TechStackSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech" className="tech-stack-section">
      <div className="tech-stack-bg" />
      <div className="tech-stack-line" />

      <div ref={ref} className="container tech-stack-container">
        <h2 className="tech-stack-title">
          <SplitText text={translations.tech.title[lang]} className="gradient-text" />
        </h2>

        <div className="tech-stack-grid">
          {techs.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
