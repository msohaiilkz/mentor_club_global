import React, { useMemo } from "react";
import {
  Shield,
  Building2,
  Zap,
  Brain,
  Globe,
  Cpu,
  FileText,
  Activity,
  Layers,
} from "lucide-react";

// const floatingCards = [
//   { id: "healthcare", label: "Healthcare", icon: Shield, top: "15%", left: "10%", delay: "0s" },
//   { id: "insurance", label: "Insurance", icon: Building2, top: "25%", left: "40%", delay: "1s" },
//   { id: "fintech", label: "Fintech", icon: Zap, top: "10%", left: "70%", delay: "0.5s" },
//   { id: "ai", label: "AI", icon: Brain, top: "45%", left: "15%", delay: "1.5s" },
//   { id: "os", label: "Mentor OS", icon: Globe, top: "40%", left: "80%", delay: "0.8s" },
//   { id: "dexa", label: "DEXA", icon: Cpu, top: "55%", left: "50%", delay: "2s" },
// ];

export const EcosystemVisual = () => {
  const numRays = 40;
  const rays = useMemo(() => {
    return Array.from({ length: numRays }).map((_, i) => {
      // Angle spanning from left to top to right (180 to 0 degrees, relative to the globe center)
      const angle = 180 + i * (90 / numRays) + Math.random() * 10; // spread from left to top
      // Wait, globe is at bottom right, so rays go up and left.
      // angle from 180 (left) to 270 (top).
      const spreadAngle = 180 + i * (100 / numRays);
      const rad = (spreadAngle * Math.PI) / 180;

      const length = 400 + Math.random() * 400; // varying ray lengths
      const strokeWidth = 0.5 + Math.random() * 1.5;
      const opacity = 0.2 + Math.random() * 0.6;

      return {
        id: i,
        angle: spreadAngle,
        rad,
        length,
        strokeWidth,
        opacity,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
      };
    });
  }, [numRays]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
      {/* Light Rays */}
      <svg
        className="absolute bottom-[-100px] right-[-100px] w-[800px] h-[800px] overflow-visible"
        viewBox="0 0 800 800"
      >
        <defs>
          <linearGradient id="ray-grad" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0048FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0048FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <filter id="ray-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform="translate(600, 600)">
          {rays.map((ray) => {
            const x2 = ray.length * Math.cos(ray.rad);
            const y2 = ray.length * Math.sin(ray.rad);
            return (
              <g key={ray.id}>
                {/* Ray Line */}
                <line
                  x1="0"
                  y1="0"
                  x2={x2}
                  y2={y2}
                  stroke="url(#ray-grad)"
                  strokeWidth={ray.strokeWidth}
                  opacity={ray.opacity}
                />
                {/* Energy Particle */}
                <circle r="2" fill="#fff" filter="url(#ray-glow)">
                  <animateMotion
                    dur={`${ray.duration}s`}
                    repeatCount="indefinite"
                    begin={`${ray.delay}s`}
                    path={`M 0 0 L ${x2} ${y2}`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur={`${ray.duration}s`}
                    repeatCount="indefinite"
                    begin={`${ray.delay}s`}
                  />
                </circle>
              </g>
            );
          })}
        </g>
      </svg>

      {/* The Globe */}
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[#05050A] shadow-[0_0_100px_rgba(0,72,255,0.15)_inset] border border-white/5 flex items-center justify-center overflow-hidden">
        {/* Globe Surface / Texture / Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0048FF]/20 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]" />
        {/* A subtle grid overlay to make it look techy */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            transform: "perspective(500px) rotateX(60deg) scale(2)",
            transformOrigin: "top center",
            opacity: 0.3,
          }}
        />
        {/* Glowing edge */}
        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#0048FF]/30 to-transparent blur-3xl opacity-50" />
      </div>

      {/* Floating UI Cards */}
    </div>
  );
};
