import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Crosshair,
  Brain,
  Zap,
  Users,
  XCircle,
} from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import {
  cultureHero,
  cultureOSLayers,
  threePillars,
  aiFirstPairs,
  aiFirstItems,
  humanIntelligence,
  artificialIntelligence,
  cultureInActionCards,
  cultureIsNot,
  cultureIsActuallyAbout,
  growthHappensThrough,
  growthPathway,
  clientCultureFeels,
  clientFlow,
  globalStandards,
  leadershipStandards,
  mentorWayClosingLines,
} from "../data/culture";

import groupprople1 from "../assets/groupprople1.jpg";
import groupprople2 from "../assets/groupprople2.jpeg";
import groupprople3 from "../assets/groupprople3.jpeg";
import groupprople4 from "../assets/groupprople4.jpeg";
import groupprople from "../assets/groupprople.jpeg";
import potraitgroup from "../assets/potraitgroup.jpeg";
const NAVY = "#0a0a15";
const NEAR_BLACK = "#11111F";
const BLUE = "#0048FF";
const PRIMARY = "#0048FF";

/* ============================ COMPONENTS ============================ */

function CircularImageCluster() {
  const images = [groupprople1, groupprople2, groupprople3, groupprople4];

  return (
    <div className="relative w-full aspect-square max-w-[850px] mx-auto flex items-center justify-center scale-90 sm:scale-100">
      {/* Deep Atmosphere Glows - Static or slow transition instead of pulse */}
      <div className="absolute w-[90%] h-[90%] rounded-full bg-[#0048FF]/5 blur-[140px] opacity-60" />
      <div className="absolute w-[60%] h-[60%] rounded-full bg-[#0048FF]/10 blur-[100px] opacity-40" />

      {/* Multiple Rotating Architecture Rings */}
      <div className="absolute w-[100%] h-[100%] rounded-full border border-dashed border-[#0048FF]/10 animate-[spin_120s_linear_infinite] opacity-30" />
      <div className="absolute w-[90%] h-[90%] rounded-full border border-[#0048FF]/5 animate-[spin_80s_linear_infinite_reverse]" />
      <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-[#0048FF]/20 animate-[spin_60s_linear_infinite]" />

      {/* Central Core - Responsive Scaling */}
      <div className="absolute w-32 h-32 xs:w-40 xs:h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-[#0048FF]/10 border-4 border-[#0048FF]/40 flex items-center justify-center backdrop-blur-3xl z-30 overflow-hidden shadow-[0_0_80px_rgba(0,72,255,0.3)] transition-all duration-700 hover:scale-105 group/core">
        <img
          src={groupprople}
          alt="Mentor Global Team"
          className="w-full h-full object-cover scale-110 transition-transform duration-1000 group-hover/core:scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0048FF]/40 via-transparent to-transparent opacity-60" />

        {/* Radar Line Effect - Slowed down */}
        <div className="absolute inset-0 border-t border-[#0048FF]/30 animate-[spin_6s_linear_infinite] origin-center opacity-40" />

        {/* Interactive Halo Glow */}
        <div className="absolute inset-[-20%] rounded-full bg-transparent group-hover/core:bg-[#0048FF]/5 blur-3xl transition-all duration-700" />
      </div>

      {/* Small Floating Particles - Static positions or very slow float */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-[#0048FF]/40 shadow-[0_0_8px_#0048FF]"
          style={{
            left: `${50 + 47 * Math.cos((i * 30 * Math.PI) / 180)}%`,
            top: `${50 + 47 * Math.sin((i * 30 * Math.PI) / 180)}%`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Orbital Images - Responsive impact */}
      {images.map((img, i) => {
        const angle = i * 90 * (Math.PI / 180);
        // Reduce radius on mobile to keep images within bounds
        const radius =
          typeof window !== "undefined" && window.innerWidth < 640 ? 37 : 40;
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);

        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 group z-40"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animation: `orbitalFloat ${8 + i}s ease-in-out infinite alternate`,
            }}
          >
            {/* Structural Connection */}
            <div
              className="absolute top-1/2 left-1/2 w-32 md:w-48 h-[1px] bg-gradient-to-r from-[#0048FF]/20 to-transparent origin-left -z-10 blur-[0.5px] opacity-20 group-hover:opacity-100 transition-opacity duration-700"
              style={{ transform: `rotate(${180 + i * 90}deg)` }}
            />

            <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-[2px] md:border-[4px] border-white/20 group-hover:border-[#0048FF] group-hover:scale-110 transition-all duration-700 shadow-xl group-hover:shadow-[0_0_40px_rgba(0,72,255,0.4)]">
              <img
                src={img}
                alt={`Culture ${i + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
              />
              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0048FF]/20 to-transparent mix-blend-overlay group-hover:opacity-0 transition-opacity" />

              {/* Internal Glow Ring */}
              <div className="absolute inset-0 rounded-full ring-[2px] md:ring-[6px] ring-inset ring-white/5 group-hover:ring-[#0048FF]/30 transition-all duration-700" />
            </div>

            {/* Hover Glow Path */}
            <div
              className="absolute top-1/2 left-1/2 w-24 md:w-40 h-[2px] md:h-[4px] bg-gradient-to-r from-[#0048FF] to-transparent origin-left -z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-[2px]"
              style={{ transform: `rotate(${180 + i * 90}deg)` }}
            />

            {/* Tech Label - Responsive Visibility */}
            <div className="absolute -bottom-6 md:bottom-[-32px] left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 hidden xs:flex flex-col items-center gap-1">
              <div className="w-[1px] h-2 md:h-4 bg-gradient-to-t from-[#0048FF] to-transparent" />
              <span className="text-[8px] md:text-[11px] font-bold tracking-widest text-[#0048FF] uppercase bg-black/90 px-2 py-1 md:px-3 md:py-1.5 rounded-sm border border-[#0048FF]/30 backdrop-blur-xl">
                NODE_0{i + 1}
              </span>
            </div>
          </div>
        );
      })}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes orbitalFloat {
          0% { transform: translate(-50%, -50%) translate(0, 0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate(10px, -10px) rotate(2deg); }
          100% { transform: translate(-50%, -50%) translate(-5px, 5px) rotate(-1deg); }
        }
      `,
        }}
      />
    </div>
  );
}

/* =================== SECTION 1: HERO + CULTURE OS =================== */

function Hero() {
  // 9 behavior nodes arranged in a ring around the central pillars
  return (
    <section
      data-testid="culture-hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32"
      style={{
        background: `#0a0a15`,
      }}
    >
      {/* Premium Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            // backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, transparent 0%, #0a0a15 80%)`,
          }}
        />
      </div>

      {/* Dynamic Background Glows — contained so they don't bleed outside section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full blur-[180px] opacity-40"
          style={{
            background: `radial-gradient(circle, ${BLUE} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full blur-[160px] opacity-30"
          style={{
            background: `radial-gradient(circle, ${BLUE} 0%, transparent 70%)`,
          }}
        />
      </div>
      <div className="relative max-w-[1720px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="eyebrow mb-6 font-bold text-primary">
                {cultureHero.eyebrow}
              </p>
              {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0048FF]/10 border border-[#0048FF]/20 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0048FF] animate-pulse" />
              </div> */}
              <h1 className="text-[32px] xs:text-[38px] sm:text-[44px] md:text-[54px] lg:text-[64px] font-bold text-white tracking-tighter leading-[1.1] flex flex-col gap-2">
                {cultureHero.headline.split(". ").map((part, index) => (
                  <span key={index} className="block relative w-fit">
                    {part}
                    {index < 2 ? "." : ""}
                    {index === 2 && (
                      <span
                        className="absolute -bottom-2 right-0 h-[3px] md:h-[4px] bg-[#0048FF] rounded-full animate-underline-smooth"
                        style={{ boxShadow: "0 0 20px rgba(0,72,255,0.6)" }}
                      />
                    )}
                  </span>
                ))}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="mt-6 text-base md:text-lg text-[#8A8A93] max-w-2xl leading-relaxed">
                {cultureHero.supporting1}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <p className="mt-4 text-base text-[#8A8A93] max-w-2xl leading-relaxed">
                {cultureHero.supporting2}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <p
                className="mt-8 text-base md:text-xl font-semibold leading-relaxed max-w-xl"
                style={{ color: BLUE }}
              >
                {cultureHero.strongStatement}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.32}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  data-testid="culture-hero-careers"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-semibold transition-all hover:translate-y-[-1px]"
                  style={{
                    background: BLUE,
                    boxShadow: "0 6px 32px rgba(0,72,255,0.4)",
                  }}
                >
                  Explore Careers <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  data-testid="culture-hero-talk"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                >
                  Talk to Our Team
                </Link>
                {/* <Link
                  to="/contact"
                  data-testid="culture-hero-partner"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                >
                  Partner With Mentor Global
                </Link> */}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Circular Image Cluster */}
          <ScrollReveal delay={0.2} direction="left" className="lg:col-span-5">
            <CircularImageCluster />
          </ScrollReveal>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes smoothPingPong {
          0% { transform: scaleX(0); transform-origin: right; }
          25% { transform: scaleX(1); transform-origin: right; }
          25.001% { transform: scaleX(1); transform-origin: left; }
          50% { transform: scaleX(0); transform-origin: left; }
          75% { transform: scaleX(1); transform-origin: left; }
          75.001% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        .animate-underline-smooth {
          animation: smoothPingPong 4s ease-in-out infinite;
          width: 100%;
          transform: scaleX(0);
        }
      `,
        }}
      />
    </section>
  );
}

/* =================== SECTION 2: CULTURE OPERATING SYSTEM =================== */

function CultureOS() {
  return (
    <section
      data-testid="culture-os"
      className="py-24 md:py-32 border-b border-[#11111F]/5"
      style={{ background: "white" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Culture Operating System</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Culture Is the Operating System Behind Execution
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ScrollReveal delay={0.1} className="lg:col-span-6">
            <div className="space-y-5">
              <p className="text-base md:text-lg text-[#11111F] leading-relaxed">
                Every company has a culture. Some design it intentionally.
                Others inherit it by accident.
              </p>
              <p className="text-base text-[#666666] leading-relaxed">
                At Mentor Global, culture must be deliberate. It must be visible
                in behavior, clear in expectations, and experienced by both
                clients and team members.
              </p>
              <p className="text-base text-[#666666] leading-relaxed">
                Culture is not what we write on a wall. Culture is what we
                repeatedly do when the work becomes difficult.
              </p>
              <p className="text-base text-[#666666] leading-relaxed">
                It shows up in how leaders lead, how teams solve problems, how
                clients are served, how feedback is given, how mistakes are
                handled, how AI is used, how decisions are made, and how
                accountability is enforced.
              </p>
            </div>
          </ScrollReveal>

          {/* Layered visual */}
          <ScrollReveal delay={0.15} className="lg:col-span-6">
            <div className="border border-[#11111F]/10">
              {cultureOSLayers.map((l, i) => (
                <div
                  key={l.label}
                  className={`p-5 bg-white transition-all hover:bg-[#f8f8f9] ${
                    i !== cultureOSLayers.length - 1
                      ? "border-b border-[#11111F]/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-2xl font-bold font-mono w-10 flex-shrink-0"
                      style={{
                        color: BLUE,
                        opacity: 0.7,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-base md:text-lg font-bold text-[#11111F]">
                        {l.label}
                      </p>
                      <p className="text-base text-[#666666] leading-relaxed mt-1">
                        {l.desc}
                      </p>
                    </div>
                    {i < cultureOSLayers.length - 1 && (
                      <ArrowRight
                        className="w-4 h-4 hidden md:block flex-shrink-0"
                        style={{ color: `${BLUE}80` }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* =================== SECTION 3: THREE PILLARS =================== */

function ThreePillars() {
  const icons = [Crosshair, Users, Sparkles];
  return (
    <section
      data-testid="culture-pillars"
      className="py-24 md:py-32"
      style={{ background: NAVY }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4 font-bold" style={{ color: BLUE }}>
            Our Core Philosophy
          </p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            Three Pillars Shape How Mentor Global Works
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {threePillars.map((p, i) => {
            const Icon = icons[i];
            const isAI = p.aiAccent;
            return (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div
                  className="group h-full border p-8 backdrop-blur-md transition-all duration-300 hover:translate-y-[-3px]"
                  style={{
                    borderColor: isAI
                      ? "rgba(0,72,255,0.4)"
                      : "rgba(255,255,255,0.10)",
                    background: isAI
                      ? "linear-gradient(135deg, rgba(0,72,255,0.10) 0%, rgba(0,72,255,0.06) 100%)"
                      : "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    boxShadow: isAI
                      ? "0 0 40px rgba(0,72,255,0.18)"
                      : undefined,
                  }}
                >
                  <div className="flex items-center justify-between mb-7">
                    <span
                      className="px-3 py-1 text-sm uppercase tracking-[0.2em] font-bold"
                      style={{
                        color: BLUE,
                      }}
                    >
                      Pillar {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="w-5 h-5" style={{ color: BLUE }} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =================== SECTION 4: AI FIRST EXECUTION =================== */

function AIFirstExecution() {
  return (
    <section
      data-testid="culture-ai-first"
      className="relative py-24 md:py-32 overflow-hidden border-y border-[#11111F]/5"
      style={{ background: "#f8f8f9" }}
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">AI First Execution</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            AI First. Human Responsibility.
          </h2>
          <p className="mt-8 text-base md:text-lg text-[#666666] max-w-3xl leading-relaxed">
            At Mentor Global, AI first does not mean human last.
          </p>
        </ScrollReveal>
        <div className="mt-12">
          {/* AI vs Human paired statements */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#11111F]/10 border border-[#11111F]/10">
              {aiFirstPairs.map((pair) => (
                <div key={pair[0]} className="bg-white p-6">
                  <p
                    className="text-sm md:text-base font-semibold"
                    style={{ color: BLUE }}
                  >
                    {pair[0]}
                  </p>
                  <p className="mt-2 text-sm md:text-base text-[#11111F]">
                    {pair[1]}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* What AI First Means */}
        <ScrollReveal delay={0.22}>
          <div className="mt-16">
            <p
              className="text-base uppercase tracking-[0.25em] font-bold mb-6"
              style={{ color: BLUE }}
            >
              What AI First Means at Mentor Global
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10 border border-[#11111F]/10">
              {aiFirstItems.map((item, i) => (
                <div
                  key={item}
                  className="bg-white px-4 py-4 flex items-center gap-3 hover:bg-[#f8f8f9] transition-colors"
                >
                  <span
                    className="text-base font-mono font-bold"
                    style={{ color: BLUE }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-[#11111F] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Human / Mentor / AI split */}
        <ScrollReveal delay={0.28}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            <div className="md:col-span-5 border border-[#11111F]/10 bg-white p-7">
              <div className="flex items-center gap-3 mb-5">
                <Brain className="w-5 h-5" style={{ color: BLUE }} />
                <p
                  className="text-base uppercase tracking-[0.25em] font-bold"
                  style={{ color: BLUE }}
                >
                  Human Intelligence
                </p>
              </div>
              <ul className="space-y-2">
                {humanIntelligence.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-sm md:text-base text-[#11111F] leading-relaxed"
                  >
                    <span style={{ color: BLUE }} className="flex-shrink-0">
                      ▸
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 flex md:flex-col items-center justify-center">
              <div className="hidden md:block w-[2px] h-12 bg-gradient-to-b from-[#0048FF] to-[#0048FF]/40" />
              <div
                className="px-4 py-4 text-center w-full max-w-[180px] text-white"
                style={{
                  background: `linear-gradient(135deg, ${BLUE} 0%, #0030CC 100%)`,
                  boxShadow: "0 0 30px rgba(0,72,255,0.25)",
                }}
              >
                <p className="text-sm uppercase tracking-[0.2em] font-bold mb-1 text-white/80">
                  Execution Layer
                </p>
                <p className="text-base font-bold text-white leading-tight">
                  Mentor Execution System
                </p>
              </div>
              <div className="hidden md:block w-[2px] h-12 bg-gradient-to-b from-[#0048FF]/40 to-[#0048FF]" />
            </div>

            <div
              className="md:col-span-5 border p-7"
              style={{
                borderColor: `rgba(0,72,255,0.4)`,
                background:
                  "linear-gradient(135deg, rgba(0,72,255,0.08) 0%, rgba(0,72,255,0.04) 100%)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Sparkles className="w-5 h-5" style={{ color: BLUE }} />
                <p
                  className="text-base uppercase tracking-[0.25em] font-bold"
                  style={{ color: BLUE }}
                >
                  Artificial Intelligence
                </p>
              </div>
              <ul className="space-y-2">
                {artificialIntelligence.map((a) => (
                  <li
                    key={a}
                    className="flex gap-3 text-sm md:text-base text-[#11111F] leading-relaxed"
                  >
                    <span style={{ color: BLUE }} className="flex-shrink-0">
                      ▸
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* =================== SECTION 5: CULTURE IN ACTION =================== */

function CultureInAction() {
  return (
    <section
      data-testid="culture-in-action"
      className="py-24 md:py-32"
      style={{ background: NAVY }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4 font-bold" style={{ color: BLUE }}>
            Culture In Action
          </p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            How Our Culture Shows Up in Daily Work
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cultureInActionCards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.04}>
              <div
                className="group h-full border border-white/10 p-7 backdrop-blur-md transition-all duration-300 hover:border-[#0048FF]/40 hover:translate-y-[-2px]"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-base font-bold font-mono"
                    style={{ color: BLUE }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Zap className="w-4 h-4" style={{ color: `${BLUE}80` }} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-base text-white/65 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================== SECTION 6: WHAT CULTURE IS NOT =================== */

function WhatCultureIsNot() {
  return (
    <section
      data-testid="culture-is-not"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: NEAR_BLACK }}
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4 font-bold" style={{ color: BLUE }}>
            What Culture Is Not
          </p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            Culture Is Not Perks. <br className="hidden md:block" />
            Standards Create Culture.
          </h2>
        </ScrollReveal>

        {/* Side-by-Side Comparison Grid */}
        <div className="mt-20 relative">
          {/* Subtle Atmosphere Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0048FF]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-white/10 border border-white/10 overflow-hidden relative z-10">
            {/* THE MISCONCEPTION */}
            <ScrollReveal className="bg-[#0A0A15] p-10 md:p-14 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-10 text-white/30">
                <XCircle className="w-5 h-5" />
                <h3 className="text-base font-mono uppercase tracking-[0.4em] font-bold">
                  The Misconception
                </h3>
              </div>
              <div className="space-y-6 flex-grow">
                {cultureIsNot.map((line) => (
                  <div
                    key={line}
                    className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#0048FF]" />
                    <p className="text-base md:text-lg text-white line-through decoration-[#0048FF]/30">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-sm font-bold uppercase text-[#8A8A93] leading-relaxed">
                  Those things create moments. They do not create standards.
                </p>
              </div>
            </ScrollReveal>

            {/* REAL CULTURE */}
            <ScrollReveal
              delay={0.1}
              className="bg-[#0D0D1A] p-10 md:p-14 h-full relative overflow-hidden group/reality flex flex-col"
            >
              {/* Light Sweep Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0048FF]/5 to-transparent opacity-0 group-hover/reality:opacity-100 transition-opacity duration-1000" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10 text-[#0048FF]">
                  <ShieldCheck className="w-5 h-5 animate-pulse" />
                  <h3 className="text-base font-mono uppercase tracking-[0.4em] font-bold">
                    Real Culture
                  </h3>
                </div>
                <div className="space-y-6 flex-grow">
                  {cultureIsActuallyAbout.map((line, i) => (
                    <div key={line} className="flex items-center gap-5 group">
                      <span className="text-[10px] font-mono text-[#0048FF]/40 group-hover:text-[#0048FF] transition-colors">
                        0{i + 1}
                      </span>
                      <p className="text-base md:text-lg text-white font-medium group-hover:translate-x-1 transition-all duration-300">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
                <p className="text-sm text-[#0048FF] font-bold uppercase tracking-[0.2em] leading-relaxed">
                  Culture is how people behave when things are difficult.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* SUMMARY CALLOUT */}
        <ScrollReveal delay={0.3}>
          <div
            className="mt-6 p-8 md:p-10 text-center"
            // style={{
            //   borderColor: "rgba(0,72,255,0.25)",
            //   background:
            //     "linear-gradient(135deg, rgba(0,72,255,0.08) 0%, rgba(0,72,255,0.03) 100%)",
            // }}
          >
            {/* <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(0,72,255,0.15),transparent)]" /> */}
            <div className="">
              <p className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-white">
                Perks create moments.
                <span style={{ color: BLUE }}> Standards create culture.</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* =================== SECTION 7: EMPLOYEE GROWTH =================== */

function EmployeeGrowth() {
  return (
    <section
      data-testid="culture-growth"
      className="py-24 md:py-32 border-y border-[#11111F]/5"
      style={{ background: "white" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Employee Growth</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            A Place to Learn, Lead, and Build
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1} className="space-y-5">
            <p className="text-base md:text-lg text-[#11111F] leading-relaxed">
              Mentor Global should be a place where people do not remain the
              same.
            </p>
            <p className="text-base text-[#666666] leading-relaxed">
              We want people who think like builders, not task runners. People
              who want to understand the business, use technology intelligently,
              solve real problems, and contribute beyond job descriptions.
            </p>
            <p className="text-base text-[#666666] leading-relaxed">
              Growth at Mentor Global means learning through responsibility,
              feedback, exposure, execution, and innovation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p
              className="text-base uppercase tracking-[0.25em] font-bold mb-5"
              style={{ color: BLUE }}
            >
              Growth Happens Through
            </p>
            <ul className="space-y-2.5 border border-[#11111F]/10 bg-[#f8f8f9] p-6">
              {growthHappensThrough.map((g) => (
                <li
                  key={g}
                  className="flex gap-3 text-sm md:text-base text-[#11111F] leading-relaxed"
                >
                  <span style={{ color: PRIMARY }} className="flex-shrink-0">
                    ▸
                  </span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* Growth pathway */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20">
            <p
              className="text-base uppercase tracking-[0.25em] font-bold mb-8"
              style={{ color: BLUE }}
            >
              Growth Pathway
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[1px] bg-[#11111F]/10 border border-[#11111F]/10">
              {growthPathway.map((s, i) => (
                <div
                  key={s.step}
                  className="bg-white p-5 relative transition-all hover:bg-[#f8f8f9]"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base mb-4"
                    style={{
                      background:
                        i === growthPathway.length - 1
                          ? `linear-gradient(135deg, ${BLUE}, #0030CC)`
                          : NEAR_BLACK,
                      boxShadow:
                        i === growthPathway.length - 1
                          ? "0 0 20px rgba(0,72,255,0.35)"
                          : undefined,
                    }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-base font-bold text-[#11111F] leading-tight">
                    {s.step}
                  </p>
                  <p className="mt-2 text-base text-[#666666] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* =================== SECTION 8: CLIENT VALUE =================== */

function ClientValue() {
  return (
    <section
      data-testid="culture-client-value"
      className="py-24 md:py-32"
      style={{ background: NEAR_BLACK }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4 font-bold" style={{ color: BLUE }}>
            Client Value
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            The Culture Our Clients Feel
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ScrollReveal delay={0.1} className="lg:col-span-7 space-y-5">
            <p className="text-base md:text-lg text-white leading-relaxed">
              Clients may not see our internal meetings, tools, dashboards, or
              discussions. But they feel our culture through our work.
            </p>
            <ul className="space-y-3 mt-2">
              {clientCultureFeels.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 text-sm md:text-base text-white/85 leading-relaxed"
                >
                  <span style={{ color: PRIMARY }} className="flex-shrink-0">
                    ▸
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-[#8A8A93] leading-relaxed pt-4">
              Our internal culture directly shapes client value.
            </p>
            <div
              className="mt-6 pl-6 py-4"
              style={{
                borderLeft: `3px solid ${BLUE}`,
                background: "rgba(0,72,255,0.04)",
              }}
            >
              <p className="text-base md:text-lg text-white leading-relaxed">
                Better culture creates better execution. Better execution
                creates better trust. Better trust creates long term
                partnerships.
              </p>
            </div>
          </ScrollReveal>

          {/* Client flow */}
          <ScrollReveal delay={0.18} className="lg:col-span-5">
            <p
              className="text-sm uppercase tracking-[0.25em] font-bold mb-5"
              style={{ color: PRIMARY }}
            >
              The Client Value Flow
            </p>
            <div className="space-y-2">
              {clientFlow.map((step, i) => (
                <div key={step}>
                  <div
                    className="border p-4 backdrop-blur-md flex items-center gap-4 transition-colors hover:border-[#0048FF]/40"
                    style={{
                      borderColor:
                        i === clientFlow.length - 1
                          ? "rgba(0,72,255,0.4)"
                          : "rgba(255,255,255,0.10)",
                      background:
                        i === clientFlow.length - 1
                          ? "linear-gradient(135deg, rgba(0,72,255,0.10), rgba(0,72,255,0.04))"
                          : "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    }}
                  >
                    <span
                      className="text-sm font-mono font-bold w-6 flex-shrink-0"
                      style={{ color: PRIMARY }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm md:text-base font-semibold text-white">
                      {step}
                    </span>
                  </div>
                  {i < clientFlow.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowRight
                        className="w-4 h-4 rotate-90"
                        style={{ color: `${BLUE}80` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* =================== SECTION 9: GLOBAL CULTURE =================== */

function GlobalCulture() {
  // 6 abstract regional nodes (no city names — BRD requires no cities)
  const nodes = [
    { label: "Region A", x: 18, y: 35 },
    { label: "Region B", x: 38, y: 22 },
    { label: "Region C", x: 60, y: 30 },
    { label: "Region D", x: 78, y: 48 },
    { label: "Region E", x: 28, y: 68 },
    { label: "Region F", x: 68, y: 72 },
  ];
  return (
    <section
      data-testid="culture-global"
      className="relative py-24 md:py-32 overflow-hidden border-y border-[#11111F]/5"
      style={{ background: "#f8f8f9" }}
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Global Culture</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Different Markets. One Global Mind.
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ScrollReveal delay={0.1} className="lg:col-span-6 space-y-4">
            <p className="text-base md:text-lg text-[#11111F] leading-relaxed">
              Mentor Global is building across multiple markets, regions, and
              future global geographies.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {[
                "Different markets",
                "Different regulations",
                "Different teams",
                "Different time zones",
              ].map((l, i, arr) => (
                <div key={l} className="flex items-center gap-4">
                  <span className="text-base text-[#666666]">{l}</span>
                  {i < arr.length - 1 && (
                    <div className="w-1 h-1 rounded-full bg-[#0048FF]/30" />
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-1.5 pt-2">
              {["But one mission.", "One purpose.", "One global mind."].map(
                (l) => (
                  <p
                    key={l}
                    className="text-base md:text-lg text-[#11111F] font-semibold"
                  >
                    {l}
                  </p>
                ),
              )}
            </div>
            <p className="text-base text-[#666666] leading-relaxed pt-4">
              Wherever Mentor Global operates, the standards remain the same.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-[1px] bg-[#11111F]/10 border border-[#11111F]/10">
              {globalStandards.map((s, i) => (
                <div
                  key={s}
                  className="bg-white px-3.5 py-2.5 text-sm md:text-base text-[#11111F] font-medium flex items-center gap-2 hover:bg-[#f8f8f9] transition-colors"
                >
                  <span className="text-xs font-mono" style={{ color: BLUE }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Global network visual — enhanced with motion and premium aesthetics */}
          <ScrollReveal delay={0.18} className="lg:col-span-6">
            <div
              className="relative border border-[#11111F]/10 aspect-[5/4] overflow-hidden group shadow-2xl"
              style={{
                background: `linear-gradient(160deg, ${NAVY} 0%, #050510 100%)`,
              }}
            >
              {/* Animated background grid scanning effect */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,72,255,0.08),transparent_70%)]" />

              <p
                className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] font-bold z-20"
                style={{ color: PRIMARY }}
              >
                Global Network · Culture Layer
              </p>

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={BLUE} stopOpacity="0" />
                    <stop offset="50%" stopColor={BLUE} stopOpacity="0.5" />
                    <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
                  </linearGradient>
                </defs>
                {nodes.flatMap((a, i) =>
                  nodes.slice(i + 1).map((b) => (
                    <g key={`${a.label}-${b.label}`}>
                      <line
                        x1={a.x}
                        y1={a.y}
                        x2={b.x}
                        y2={b.y}
                        stroke="rgba(0,72,255,0.1)"
                        strokeWidth="0.15"
                      />
                      <motion.line
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: Math.random() * 5,
                        }}
                        x1={a.x}
                        y1={a.y}
                        x2={b.x}
                        y2={b.y}
                        stroke={BLUE}
                        strokeWidth="0.3"
                        strokeDasharray="1 10"
                      />
                    </g>
                  )),
                )}
              </svg>

              {nodes.map((n, i) => (
                <div
                  key={n.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full relative z-10"
                      style={{
                        background: BLUE,
                        boxShadow: `0 0 15px ${BLUE}`,
                      }}
                    />
                    <motion.div
                      animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="absolute inset-0 rounded-full"
                      style={{ background: BLUE }}
                    />
                  </motion.div>
                </div>
              ))}

              <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="border border-white/10 px-6 py-4 backdrop-blur-xl bg-black/40 relative overflow-hidden group"
                >
                  {/* Subtle light sweep effect */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                  />

                  <p
                    className="text-[10px] uppercase tracking-[0.25em] font-bold mb-2 text-center"
                    style={{ color: PRIMARY }}
                  >
                    Three Culture Pillars
                  </p>
                  <p className="text-[15px] text-white text-center font-bold tracking-tight leading-tight">
                    Value · Growth · AI First
                  </p>

                  <div className="mt-3 flex justify-center gap-1.5">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className="w-1 h-1 rounded-full bg-[#0048FF]/40"
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-6 right-6 flex items-center gap-3 z-20">
                <div className="flex flex-col items-end">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono mb-0.5">
                    Operational Status
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#0048FF] font-bold font-mono">
                    Synchronized
                  </p>
                </div>
                <div className="w-1 h-8 bg-[#0048FF]/20" />
                <p className="text-sm uppercase tracking-[0.15em] text-white/40 font-mono">
                  One Global Mind
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* =================== SECTION 10: LEADERSHIP COMMITMENT =================== */

function LeadershipCommitment() {
  return (
    <section
      data-testid="culture-leadership"
      className="py-24 md:py-32"
      style={{ background: NEAR_BLACK }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4 font-bold" style={{ color: BLUE }}>
            Leadership Commitment
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            Built From the Top. Lived by Everyone.
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-4">
              <p className="text-base md:text-lg text-white leading-relaxed">
                Culture cannot be delegated to HR.
              </p>
              <p className="text-base text-[#8A8A93] leading-relaxed">
                Leadership must model it first.
              </p>
              <div className="space-y-2 pt-4">
                {[
                  "If we want ownership, leaders must show ownership.",
                  "If we want transparency, leaders must communicate openly.",
                  "If we want innovation, leaders must create room for experimentation.",
                  "If we want AI first execution, leaders must use AI responsibly themselves.",
                  "If we want trust, leaders must act in ways that earn it.",
                ].map((l) => (
                  <p
                    key={l}
                    className="text-base text-white/85 leading-relaxed flex gap-3"
                  >
                    <span style={{ color: PRIMARY }} className="flex-shrink-0">
                      ▸
                    </span>
                    <span>{l}</span>
                  </p>
                ))}
              </div>
              <p className="text-base text-[#8A8A93] leading-relaxed pt-4">
                At Mentor Global, culture becomes real when leadership standards
                and team behavior move in the same direction.
              </p>
            </div>
          </ScrollReveal>

          {/* Team Portrait */}
          <ScrollReveal delay={0.18} className="lg:col-span-5">
            <div className="relative max-w-[460px] mx-auto lg:mx-0">
              <div className="aspect-[3/4] overflow-hidden relative ring-1 ring-white/10 group">
                <img
                  src={potraitgroup}
                  alt="Mentor Global Leadership Team"
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-[#0048FF]/20 transition-all duration-700" />
              </div>
              {/* Accent line */}
              <div
                className="absolute -bottom-3 left-0 w-16 h-[3px]"
                style={{ background: BLUE }}
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {leadershipStandards.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <div
                className="group h-full border border-white/10 p-7 backdrop-blur-md transition-all duration-300 hover:border-[#0048FF]/40 hover:translate-y-[-2px]"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-sm uppercase tracking-[0.2em] font-bold"
                    style={{
                      // background: "rgba(0,72,255,0.12)",
                      color: BLUE,
                    }}
                  >
                    Standard {String(i + 1).padStart(2, "0")}
                  </span>
                  <ShieldCheck
                    className="w-4 h-4"
                    style={{ color: `${BLUE}` }}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================== SECTION 11: THE MENTOR WAY =================== */

function TheMentorWay() {
  return (
    <section
      data-testid="culture-mentor-way"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: NAVY }}
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        // style={{
        //   backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`,
        //   backgroundSize: "60px 60px",
        // }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] lg:w-[900px] lg:h-[900px] rounded-full blur-[200px]"
        style={{ background: "rgba(0,72,255,0.10)" }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4 font-bold" style={{ color: BLUE }}>
            The Mentor Way
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            A New Operating System for How We Think, Build, Serve, and Grow
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 max-w-3xl space-y-4">
            <p className="text-base md:text-lg text-white leading-relaxed">
              Mentor Global is building more than a company.
            </p>
            <p className="text-base text-[#8A8A93] leading-relaxed">
              We are building a culture where clients receive value, employees
              experience growth, and AI becomes part of how we execute with
              speed, clarity, discipline, and responsibility.
            </p>
            <p className="text-base text-[#8A8A93] leading-relaxed">
              This is how Mentor Global will scale.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentorWayClosingLines.map((line, i) => {
            const isLast = i === mentorWayClosingLines.length - 1;
            return (
              <ScrollReveal
                key={line}
                delay={0.1 + i * 0.06}
                className={isLast ? "md:col-span-2" : ""}
              >
                <div
                  className={`p-10 h-full group transition-all duration-500 border border-white/10 hover:border-[#0048FF]/30 backdrop-blur-md flex flex-col
                    ${isLast ? "items-center justify-center text-center" : ""}`}
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  }}
                >
                  <div
                    className={`flex items-center mb-8 ${isLast ? "justify-center gap-6" : "justify-between w-full"}`}
                  >
                    <span className="text-sm font-mono text-[#0048FF] uppercase tracking-[0.3em] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`h-1.5 rounded-full bg-[#0048FF]/20 group-hover:bg-[#0048FF] transition-all duration-500 ${isLast ? "w-12" : "w-1.5"}`}
                    />
                  </div>
                  <h3
                    className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-center transition-colors duration-300
                      ${isLast ? "text-[#0048FF]" : "text-white"}`}
                  >
                    {line}
                  </h3>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =================== SECTION 12: FINAL CTA =================== */

function FinalCTA() {
  return (
    <section
      data-testid="culture-final-cta"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: NEAR_BLACK }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[700px] sm:h-[700px] lg:w-[1100px] lg:h-[1100px] rounded-full blur-[200px]"
        style={{ background: "rgba(0,72,255,0.12)" }}
      />
      {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] lg:w-[700px] lg:h-[700px] rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px] rounded-full border border-[#0048FF]/15" /> */}

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="eyebrow font-bold mb-4" style={{ color: BLUE }}>
            Join Mentor Global
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.05]">
            Join a Culture Built on Purpose, Performance, Growth, and
            Intelligence
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p className="mt-8 text-base md:text-lg text-[#8A8A93] max-w-3xl mx-auto leading-relaxed">
            If you want to build systems, solve meaningful problems, grow with
            responsibility, and work inside an AI first execution culture,
            Mentor Global is the place to build.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="culture-cta-careers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold transition-all hover:translate-y-[-1px]"
              style={{
                background: BLUE,
                boxShadow: "0 8px 30px rgba(0,72,255,0.4)",
              }}
            >
              Explore Careers <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="culture-cta-talk"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Talk to Our Team
            </Link>
            {/* <Link
              to="/contact"
              data-testid="culture-cta-partner"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Partner With Mentor Global
            </Link> */}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============================ PAGE ============================ */

export default function Culture() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      "Culture at Mentor Global | Value for Clients, Growth for Employees, AI First Execution";
    let meta = document.querySelector('meta[name="description"]');
    let created = false;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
      created = true;
    }
    const prevDesc = meta.getAttribute("content");
    meta.setAttribute(
      "content",
      "Discover Mentor Global's culture built on client value, employee growth, AI first execution, human responsibility, accountability, and global infrastructure ambition.",
    );
    return () => {
      document.title = prevTitle;
      if (created) meta.remove();
      else if (prevDesc !== null) meta.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <main data-testid="culture-page">
      <Hero />
      <CultureOS />
      <ThreePillars />
      <AIFirstExecution />
      <CultureInAction />
      <WhatCultureIsNot />
      <EmployeeGrowth />
      <ClientValue />
      <GlobalCulture />
      <LeadershipCommitment />
      <TheMentorWay />
      <FinalCTA />
    </main>
  );
}
