import { useId } from "react";

type NeonLogoProps = {
  text?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
  showRing?: boolean;
  pulseDuration?: number;
  spinDuration?: number;
};

export default function NeonLogo({
  text = "<Cristiano />",
  size = "md",
  className = "",
  animated = true,
  showRing = true,
  pulseDuration = 2,
  spinDuration = 4,
}: NeonLogoProps) {
  const rawId = useId();
  const gradientId = `ring-grad-${rawId.replace(/:/g, "")}`;

  return (
    <div
      className={`neon-logo neon-logo--${size} ${animated ? "is-animated" : ""} ${className}`.trim()}
    >
      <div
        className="neon-logo__text"
        style={{ animationDuration: `${pulseDuration}s` }}
      >
        {text}
      </div>

      {showRing && (
        <div className="neon-logo__ring" aria-hidden="true">
          <svg
            viewBox="0 0 200 200"
            style={{ animationDuration: `${spinDuration}s` }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  stopColor="hsl(var(--neon-purple))"
                  stopOpacity="0.6"
                />
                <stop
                  offset="50%"
                  stopColor="hsl(var(--neon-blue))"
                  stopOpacity="0.3"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(var(--neon-green))"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="1"
              strokeDasharray="8 12"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
