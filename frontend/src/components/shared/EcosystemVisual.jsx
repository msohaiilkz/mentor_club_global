import React, { useMemo } from "react";

export const EcosystemVisual = () => {
  const numRays = 40;
  const rays = useMemo(() => {
    return Array.from({ length: numRays }).map((_, i) => {
      const spreadAngle = 180 + i * (100 / numRays);
      const rad = (spreadAngle * Math.PI) / 180;
      const length = 400 + (i % 7) * 57;
      const strokeWidth = 0.5 + (i % 3) * 0.75;
      const opacity = 0.2 + (i % 5) * 0.12;

      return {
        id: i,
        rad,
        length,
        strokeWidth,
        opacity,
        duration: 3 + (i % 4),
        delay: (i % 5) * 1.1,
        x2: length * Math.cos(rad),
        y2: length * Math.sin(rad),
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
      {/* Light Rays — static lines only, no SMIL animateMotion (broken on iOS Safari) */}
      <svg
        className="absolute bottom-[-60px] right-[-60px] w-[420px] h-[420px] sm:bottom-[-80px] sm:right-[-80px] sm:w-[560px] sm:h-[560px] lg:bottom-[-100px] lg:right-[-100px] lg:w-[800px] lg:h-[800px] overflow-visible"
        viewBox="0 0 800 800"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ray-grad" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0048FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0048FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g transform="translate(600, 600)">
          {rays.map((ray) => (
            <line
              key={ray.id}
              x1="0"
              y1="0"
              x2={ray.x2}
              y2={ray.y2}
              stroke="url(#ray-grad)"
              strokeWidth={ray.strokeWidth}
              opacity={ray.opacity}
            />
          ))}
        </g>
      </svg>

      {/* Globe sphere */}
      <div
        className="absolute bottom-[-90px] right-[-90px] w-[320px] h-[320px] sm:bottom-[-110px] sm:right-[-110px] sm:w-[420px] sm:h-[420px] md:bottom-[-150px] md:right-[-150px] md:w-[700px] md:h-[700px] rounded-full bg-[#05050A] shadow-[0_0_100px_rgba(0,72,255,0.15)_inset] border border-white/5 flex items-center justify-center"
        style={{
          overflow: "hidden",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0048FF]/20 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]" />
        {/* Grid overlay — perspective transform simplified for iOS GPU */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            transform: "perspective(500px) rotateX(55deg) scale(1.8)",
            WebkitTransform: "perspective(500px) rotateX(55deg) scale(1.8)",
            transformOrigin: "top center",
            willChange: "transform",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#0048FF]/30 to-transparent blur-3xl opacity-50" />
      </div>
    </div>
  );
};
