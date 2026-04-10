import { useEffect, useMemo, useState } from "react";

type Particle = {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  color: string;
};

const NEON_COLORS = ["#9f6bff", "#3ea7ff", "#34d399"];

export default function AnimatedHeroBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 30 }, (_, id) => ({
      id,
      size: 1 + Math.random() * 3,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      color: NEON_COLORS[id % NEON_COLORS.length],
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const progress = Math.min(currentScroll / (window.innerHeight * 1.2), 1);
      setScrollY(currentScroll);
      setScrollProgress(progress);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-animated-bg" aria-hidden="true">
      <div
        className="hero-blob hero-blob-purple"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollProgress * 0.3})`,
          opacity: 1 - scrollProgress * 0.3,
        }}
      />
      <div
        className="hero-blob hero-blob-blue"
        style={{
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollProgress * 0.2})`,
          opacity: 1 - scrollProgress * 0.25,
        }}
      />
      <div
        className="hero-blob hero-blob-green"
        style={{
          transform: `translateY(${scrollY * 0.7}px) scale(${1 + scrollProgress * 0.4})`,
          opacity: 1 - scrollProgress * 0.35,
        }}
      />

      <div
        className="hero-neon-orb hero-neon-orb-left"
        style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
      />
      <div
        className="hero-neon-orb hero-neon-orb-right"
        style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
      />
      <div
        className="hero-neon-orb hero-neon-orb-center"
        style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}
      />

      <div
        className="hero-grid-layer"
        style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}
      />

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="hero-particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            background: particle.color,
          }}
        />
      ))}

    </div>
  );
}
