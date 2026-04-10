import { useEffect, useState } from "react";
import NeonLogo from "./NeonLogo";

type LoadingScreenProps = {
  onComplete: () => void;
};

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");

  useEffect(() => {
    const start = Date.now();
    const duration = 2000;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - pct, 3);
      setProgress(Math.round(eased * 100));

      if (pct < 1) {
        requestAnimationFrame(tick);
      } else {
        setPhase("reveal");
        setTimeout(onComplete, 800);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <div className={`neon-loading-screen ${phase === "reveal" ? "is-reveal" : ""}`}>
      <NeonLogo size="lg" className="neon-loading-logo" />

      <div className="neon-loading-progress">
        <div className="neon-loading-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="neon-loading-percent">{progress}%</div>
    </div>
  );
}
