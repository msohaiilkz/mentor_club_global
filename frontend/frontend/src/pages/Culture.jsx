import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Crosshair,
  Brain,
  Zap,
  Users,
  Quote,
} from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import {
  cultureHero,
  culturePillars,
  behaviorNodes,
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

const NAVY = "#0a0a15";
const NEAR_BLACK = "#11111F";
const BLUE = "#0048FF";
const INDIGO = "#6366F1";

/* =================== SECTION 1: HERO + CULTURE OS =================== */

function Hero() {
  // 9 behavior nodes arranged in a ring around the central pillars
  return (
    <section
      data-testid="culture-hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${NAVY} 0%, #050510 100%)`,
      }}
    >
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[170px]"
        style={{ background: "rgba(99,102,241,0.10)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px]"
        style={{ background: "rgba(0,72,255,0.10)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="eyebrow mb-6 font-bold" style={{ color: INDIGO }}>
                {cultureHero.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tighter leading-[1.05]">
                {cultureHero.headline}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="mt-8 text-lg text-[#8A8A93] max-w-2xl leading-relaxed">
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
                className="mt-8 text-base md:text-lg font-semibold leading-relaxed max-w-xl"
                style={{ color: INDIGO }}
              >
                {cultureHero.strongStatement}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.32}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  data-testid="culture-hero-careers"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-semibold transition-all hover:translate-y-[-1px]"
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                >
                  Talk to Our Team
                </Link>
                <Link
                  to="/contact"
                  data-testid="culture-hero-partner"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                >
                  Partner With Mentor Global
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Culture OS visual */}
          <ScrollReveal delay={0.2} direction="left" className="lg:col-span-5">
            <div
              className="relative border border-white/10 p-6 backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                boxShadow:
                  "0 0 0 1px rgba(99,102,241,0.10) inset, 0 30px 80px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    background: INDIGO,
                    boxShadow: `0 0 10px ${INDIGO}`,
                  }}
                />
                <span
                  className="text-[10px] uppercase tracking-[0.2em] font-bold"
                  style={{ color: INDIGO }}
                >
                  Mentor Global Culture OS
                </span>
                <span className="text-[10px] text-white/40 ml-auto font-mono">
                  ACTIVE
                </span>
              </div>

              {/* Center glow + pillars */}
              <div className="relative">
                <div
                  className="border p-4 mb-3 text-center"
                  style={{
                    borderColor: "rgba(0,72,255,0.45)",
                    background:
                      "linear-gradient(135deg, rgba(0,72,255,0.10) 0%, rgba(99,102,241,0.06) 100%)",
                    boxShadow: "0 0 30px rgba(99,102,241,0.18)",
                  }}
                >
                  <p
                    className="text-[9px] uppercase tracking-[0.25em] font-bold mb-1"
                    style={{ color: INDIGO }}
                  >
                    Center · OS Core
                  </p>
                  <p className="text-base text-white font-bold">
                    Mentor Global Culture OS
                  </p>
                </div>

                {/* 3 pillars */}
                <div className="grid grid-cols-3 gap-1.5 mb-4">
                  {culturePillars.map((p, i) => (
                    <div
                      key={p}
                      className="border p-2.5 text-center transition-colors hover:border-[#6366F1]/40"
                      style={{
                        borderColor:
                          i === 2
                            ? "rgba(99,102,241,0.4)"
                            : "rgba(255,255,255,0.1)",
                        background:
                          i === 2
                            ? "linear-gradient(135deg, rgba(99,102,241,0.10), rgba(0,72,255,0.04))"
                            : "linear-gradient(160deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                      }}
                    >
                      <p
                        className="text-[9px] uppercase tracking-[0.1em] font-bold mb-1"
                        style={{ color: i === 2 ? INDIGO : BLUE }}
                      >
                        Pillar {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="text-[10px] text-white font-semibold leading-tight">
                        {p}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 9 behavior nodes */}
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2 font-bold">
                  Behaviors
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {behaviorNodes.map((b) => (
                    <span
                      key={b}
                      className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-white/80 hover:border-[#6366F1]/40 transition-colors"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
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
                        color: i === 4 ? INDIGO : BLUE,
                        opacity: 0.7,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-base md:text-lg font-bold text-[#11111F]">
                        {l.label}
                      </p>
                      <p className="text-sm text-[#666666] leading-relaxed mt-1">
                        {l.desc}
                      </p>
                    </div>
                    {i < cultureOSLayers.length - 1 && (
                      <ArrowRight
                        className="w-4 h-4 hidden md:block flex-shrink-0"
                        style={{ color: `${INDIGO}80` }}
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
          <p className="eyebrow mb-4 font-bold" style={{ color: INDIGO }}>
            Our Core Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
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
                      ? "rgba(99,102,241,0.4)"
                      : "rgba(255,255,255,0.10)",
                    background: isAI
                      ? "linear-gradient(135deg, rgba(99,102,241,0.10) 0%, rgba(0,72,255,0.06) 100%)"
                      : "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    boxShadow: isAI
                      ? "0 0 40px rgba(99,102,241,0.18)"
                      : undefined,
                  }}
                >
                  <div className="flex items-center justify-between mb-7">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold"
                      style={{
                        background: isAI
                          ? "rgba(99,102,241,0.15)"
                          : "rgba(0,72,255,0.10)",
                        color: isAI ? INDIGO : BLUE,
                      }}
                    >
                      Pillar {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="w-5 h-5"
                      style={{ color: isAI ? INDIGO : BLUE }}
                    />
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            AI First Execution. Human First Responsibility.
          </h2>
          <p className="mt-8 text-base md:text-lg text-[#666666] max-w-3xl leading-relaxed">
            At Mentor Global, AI first does not mean human last.
          </p>
        </ScrollReveal>

        {/* AI vs Human paired statements */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#11111F]/10 border border-[#11111F]/10">
            {aiFirstPairs.map((pair) => (
              <div key={pair[0]} className="bg-white p-6">
                <p
                  className="text-sm md:text-base font-semibold"
                  style={{ color: INDIGO }}
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

        <ScrollReveal delay={0.18}>
          <p className="mt-12 text-base md:text-lg text-[#11111F] leading-relaxed max-w-4xl">
            We use AI to improve speed, quality, insight, documentation,
            service, decision support, and execution discipline. We do not use
            AI to avoid thinking. We use AI to think better.
          </p>
        </ScrollReveal>

        {/* What AI First Means */}
        <ScrollReveal delay={0.22}>
          <div className="mt-16">
            <p
              className="text-[11px] uppercase tracking-[0.25em] font-bold mb-6"
              style={{ color: INDIGO }}
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
                    className="text-[10px] font-mono font-bold"
                    style={{ color: INDIGO }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs md:text-sm text-[#11111F] font-medium">
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
                  className="text-[10px] uppercase tracking-[0.25em] font-bold"
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
              <div className="hidden md:block w-[2px] h-12 bg-gradient-to-b from-[#0048FF] to-[#6366F1]" />
              <div
                className="px-4 py-4 text-center w-full max-w-[180px] text-white"
                style={{
                  background: `linear-gradient(135deg, ${BLUE} 0%, ${INDIGO} 100%)`,
                  boxShadow: "0 0 30px rgba(99,102,241,0.25)",
                }}
              >
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold mb-1 text-white/80">
                  Execution Layer
                </p>
                <p className="text-sm font-bold text-white leading-tight">
                  Mentor Execution System
                </p>
              </div>
              <div className="hidden md:block w-[2px] h-12 bg-gradient-to-b from-[#6366F1] to-[#0048FF]" />
            </div>

            <div
              className="md:col-span-5 border p-7"
              style={{
                borderColor: `${INDIGO}40`,
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(0,72,255,0.04) 100%)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Sparkles className="w-5 h-5" style={{ color: INDIGO }} />
                <p
                  className="text-[10px] uppercase tracking-[0.25em] font-bold"
                  style={{ color: INDIGO }}
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
                    <span style={{ color: INDIGO }} className="flex-shrink-0">
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
          <p className="eyebrow mb-4 font-bold" style={{ color: INDIGO }}>
            Culture In Action
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            How Our Culture Shows Up in Daily Work
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cultureInActionCards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.04}>
              <div
                className="group h-full border border-white/10 p-7 backdrop-blur-md transition-all duration-300 hover:border-[#6366F1]/40 hover:translate-y-[-2px]"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-sm font-bold font-mono"
                    style={{ color: INDIGO }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Zap className="w-4 h-4" style={{ color: `${BLUE}80` }} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
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
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${INDIGO} 1px, transparent 1px), linear-gradient(90deg, ${INDIGO} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4 font-bold" style={{ color: INDIGO }}>
            What Culture Is Not
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.05]">
            Culture Is Not Perks
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-10 text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
            We do not confuse perks with culture.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl">
          {cultureIsNot.map((line, i) => (
            <ScrollReveal key={line} delay={0.15 + i * 0.04}>
              <div className="flex items-center gap-3 text-white/60 line-through decoration-[#6366F1]/40">
                <span className="text-xs font-mono" style={{ color: INDIGO }}>
                  ×
                </span>
                <span className="text-base md:text-lg">{line}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="mt-10 text-base md:text-lg text-[#8A8A93] leading-relaxed max-w-3xl">
            Those things create moments. They do not create standards.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.34}>
          <p className="mt-6 text-base md:text-lg text-white leading-relaxed max-w-3xl">
            Culture is how people behave when things are difficult.
          </p>
        </ScrollReveal>

        <div className="mt-10 max-w-3xl space-y-3">
          {cultureIsActuallyAbout.map((line, i) => (
            <ScrollReveal key={line} delay={0.38 + i * 0.03}>
              <div className="flex items-center gap-3 text-white/85">
                <span style={{ color: INDIGO }} className="flex-shrink-0">
                  ▸
                </span>
                <span className="text-base">{line}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <p className="mt-12 text-base md:text-lg text-[#8A8A93] leading-relaxed max-w-3xl">
            That is where real culture lives.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.7}>
          <div
            className="mt-16 border p-8 md:p-12"
            style={{
              borderColor: "rgba(99,102,241,0.4)",
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(0,72,255,0.04) 100%)",
            }}
          >
            <p
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: "white" }}
            >
              Perks create moments.{" "}
              <span style={{ color: INDIGO }}>Standards create culture.</span>
            </p>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            A Place to Learn, Lead, and Build
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ScrollReveal delay={0.1} className="lg:col-span-6 space-y-5">
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

          <ScrollReveal delay={0.15} className="lg:col-span-6">
            <p
              className="text-[11px] uppercase tracking-[0.25em] font-bold mb-5"
              style={{ color: INDIGO }}
            >
              Growth Happens Through
            </p>
            <ul className="space-y-2.5 border border-[#11111F]/10 bg-[#f8f8f9] p-6">
              {growthHappensThrough.map((g) => (
                <li
                  key={g}
                  className="flex gap-3 text-sm md:text-base text-[#11111F] leading-relaxed"
                >
                  <span style={{ color: INDIGO }} className="flex-shrink-0">
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
              className="text-[11px] uppercase tracking-[0.25em] font-bold mb-8"
              style={{ color: INDIGO }}
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
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4"
                    style={{
                      background:
                        i === growthPathway.length - 1
                          ? `linear-gradient(135deg, ${INDIGO}, ${BLUE})`
                          : NEAR_BLACK,
                      boxShadow:
                        i === growthPathway.length - 1
                          ? "0 0 20px rgba(99,102,241,0.35)"
                          : undefined,
                    }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-base font-bold text-[#11111F] leading-tight">
                    {s.step}
                  </p>
                  <p className="mt-2 text-xs text-[#666666] leading-relaxed">
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
          <p className="eyebrow mb-4 font-bold" style={{ color: INDIGO }}>
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
                  <span style={{ color: INDIGO }} className="flex-shrink-0">
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
                borderLeft: `3px solid ${INDIGO}`,
                background: "rgba(99,102,241,0.04)",
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
              className="text-[11px] uppercase tracking-[0.25em] font-bold mb-5"
              style={{ color: INDIGO }}
            >
              The Client Value Flow
            </p>
            <div className="space-y-2">
              {clientFlow.map((step, i) => (
                <div key={step}>
                  <div
                    className="border p-4 backdrop-blur-md flex items-center gap-4 transition-colors hover:border-[#6366F1]/40"
                    style={{
                      borderColor:
                        i === clientFlow.length - 1
                          ? "rgba(99,102,241,0.4)"
                          : "rgba(255,255,255,0.10)",
                      background:
                        i === clientFlow.length - 1
                          ? "linear-gradient(135deg, rgba(99,102,241,0.10), rgba(0,72,255,0.04))"
                          : "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    }}
                  >
                    <span
                      className="text-xs font-mono font-bold w-6 flex-shrink-0"
                      style={{ color: INDIGO }}
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
                        style={{ color: `${INDIGO}80` }}
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
            <div className="space-y-1.5">
              {[
                "Different markets.",
                "Different regulations.",
                "Different teams.",
                "Different time zones.",
              ].map((l) => (
                <p key={l} className="text-base text-[#666666]">
                  {l}
                </p>
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
                  className="bg-white px-3.5 py-2.5 text-xs md:text-sm text-[#11111F] font-medium flex items-center gap-2 hover:bg-[#f8f8f9] transition-colors"
                >
                  <span
                    className="text-[9px] font-mono"
                    style={{ color: INDIGO }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Global network visual — kept dark as a contrasting boxed visual */}
          <ScrollReveal delay={0.18} className="lg:col-span-6">
            <div
              className="relative border border-[#11111F]/10 aspect-[5/4] overflow-hidden"
              style={{
                background: `linear-gradient(160deg, ${NAVY} 0%, #050510 100%)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `linear-gradient(${INDIGO} 1px, transparent 1px), linear-gradient(90deg, ${INDIGO} 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />
              <p
                className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.2em] font-bold"
                style={{ color: INDIGO }}
              >
                Global Network · Culture Layer
              </p>

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {nodes.flatMap((a, i) =>
                  nodes
                    .slice(i + 1)
                    .map((b) => (
                      <line
                        key={`${a.label}-${b.label}`}
                        x1={a.x}
                        y1={a.y}
                        x2={b.x}
                        y2={b.y}
                        stroke="rgba(99,102,241,0.18)"
                        strokeWidth="0.18"
                      />
                    )),
                )}
              </svg>

              {nodes.map((n) => (
                <div
                  key={n.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: INDIGO,
                      boxShadow: `0 0 12px ${INDIGO}`,
                    }}
                  />
                </div>
              ))}

              <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2">
                <div
                  className="border px-4 py-3 backdrop-blur-md"
                  style={{
                    borderColor: "rgba(99,102,241,0.4)",
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.10), rgba(0,72,255,0.06))",
                  }}
                >
                  <p
                    className="text-[9px] uppercase tracking-[0.2em] font-bold mb-1 text-center"
                    style={{ color: INDIGO }}
                  >
                    Three Culture Pillars
                  </p>
                  <p className="text-[10px] text-white text-center font-semibold leading-tight">
                    Value · Growth · AI First
                  </p>
                </div>
              </div>

              <p className="absolute bottom-5 right-5 text-[10px] uppercase tracking-[0.15em] text-white/40 font-mono">
                One Global Mind
              </p>
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
          <p className="eyebrow mb-4 font-bold" style={{ color: INDIGO }}>
            Leadership Commitment
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            Built From the Top. Lived by Everyone.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 max-w-3xl space-y-4">
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
                  <span style={{ color: INDIGO }} className="flex-shrink-0">
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {leadershipStandards.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <div
                className="group h-full border border-white/10 p-7 backdrop-blur-md transition-all duration-300 hover:border-[#6366F1]/40 hover:translate-y-[-2px]"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold"
                    style={{
                      background: "rgba(99,102,241,0.12)",
                      color: INDIGO,
                    }}
                  >
                    Standard {String(i + 1).padStart(2, "0")}
                  </span>
                  <ShieldCheck
                    className="w-4 h-4"
                    style={{ color: `${INDIGO}80` }}
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
        style={{
          backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[200px]"
        style={{ background: "rgba(0,72,255,0.10)" }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4 font-bold" style={{ color: INDIGO }}>
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

        <div className="mt-14 space-y-4 md:space-y-5">
          {mentorWayClosingLines.map((line, i) => (
            <ScrollReveal key={line} delay={0.2 + i * 0.06}>
              <p
                className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
                  i === mentorWayClosingLines.length - 1 ? "" : ""
                }`}
                style={{
                  color:
                    i === mentorWayClosingLines.length - 1 ? INDIGO : "white",
                }}
              >
                {line}
              </p>
            </ScrollReveal>
          ))}
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full blur-[200px]"
        style={{ background: "rgba(99,102,241,0.12)" }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-[#6366F1]/15" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="eyebrow font-bold mb-4" style={{ color: INDIGO }}>
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all hover:translate-y-[-1px]"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Talk to Our Team
            </Link>
            <Link
              to="/contact"
              data-testid="culture-cta-partner"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Partner With Mentor Global
            </Link>
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
