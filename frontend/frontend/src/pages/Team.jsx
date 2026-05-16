import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Linkedin,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import {
  founderQuote,
  philosophyCards,
  architectureDomains,
  founderFeature,
  boardProfiles,
  executiveLeaders,
  dexaProfile,
  leaderProfiles,
  operatingModelFlow,
  matrixRows,
  matrixColumns,
  ownershipMatrix,
  credibilityCards,
  governanceDisclaimer,
  futurePlaceholders,
} from "../data/leadership";

/* ---------- helpers ---------- */

function PhotoFrame({ src, alt, name, size = "md", virtual = false }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const sizeMap = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-40 h-40",
    xl: "w-full aspect-square max-w-[420px]",
  };

  if (virtual) {
    return (
      <div
        className={`${sizeMap[size]} relative bg-[#0a0a15] border border-[#0048FF]/30 overflow-hidden flex items-center justify-center`}
      >
        {/* DEXA Intelligence Core — abstract */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0048FF]/10 via-transparent to-[#0048FF]/5" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-[#0048FF]/20 blur-[40px]" />
        <div className="relative w-[55%] h-[55%] rounded-full border border-[#0048FF]/40 flex items-center justify-center">
          <div className="absolute inset-[15%] rounded-full border border-[#0048FF]/30" />
          <div className="absolute inset-[30%] rounded-full border border-[#0048FF]/50" />
          <div className="w-[22%] h-[22%] bg-[#0048FF] rounded-full shadow-[0_0_40px_#0048FF]" />
        </div>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#0048FF] rounded-full"
            style={{
              left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
              top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
            }}
          />
        ))}
        <span className="absolute bottom-2 left-2 text-[9px] uppercase tracking-[0.2em] text-[#0048FF] font-bold">
          DEXA Intelligence Core
        </span>
      </div>
    );
  }

  if (src) {
    return (
      <div className={`${sizeMap[size]} relative bg-[#0a0a15] overflow-hidden`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0048FF]/10 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className={`${sizeMap[size]} relative bg-[#11111F] flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0048FF]/5 to-transparent" />
      <span className="relative text-2xl font-bold text-white/40 tracking-wider">
        {initials}
      </span>
      <span className="absolute bottom-1.5 left-1.5 text-[8px] uppercase tracking-[0.15em] text-white/40 font-bold">
        Photo Coming Soon
      </span>
    </div>
  );
}

function LinkedInButton({ url, testId }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        data-testid={testId}
        className="inline-flex items-center gap-2 px-4 py-2 border border-[#11111F]/15 text-[#11111F] text-xs font-semibold hover:bg-[#11111F] hover:text-white transition-colors"
      >
        <Linkedin className="w-3.5 h-3.5" /> View LinkedIn
      </a>
    );
  }
  return (
    <span
      data-testid={testId}
      className="inline-flex items-center gap-2 px-4 py-2 border border-dashed border-[#11111F]/20 text-[#666666] text-xs font-semibold"
    >
      <Linkedin className="w-3.5 h-3.5" /> LinkedIn Coming Soon
    </span>
  );
}

/* ---------- SECTION 1: HERO ---------- */

function Hero() {
  return (
    <section
      data-testid="team-hero"
      className="relative bg-[#11111F] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#0048FF]/[0.07] blur-[160px]" />
      <div className="relative max-w-[1720px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="eyebrow mb-6 text-[#0048FF]">Leadership Architects</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tighter leading-[1.02]">
                The Architects Building Global Health Fintech Infrastructure
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="mt-8 text-lg text-[#8A8A93] max-w-2xl leading-relaxed">
                Mentor Global is led by operators, builders, product thinkers,
                technology architects, healthcare leaders, finance strategists,
                governance experts, and DEXA, the intelligence layer that
                connects the system.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <p className="mt-4 text-sm text-white/50 max-w-2xl leading-relaxed">
                The leadership team behind Mentor Global is designed like the
                company itself: structured, cross functional, infrastructure
                focused, and built for global scale.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.28}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#architects"
                  data-testid="team-hero-cta-primary"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
                >
                  Meet the Architects <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/"
                  data-testid="team-hero-cta-secondary"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                >
                  Explore Mentor Global
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Architecture composition visual */}
          <ScrollReveal delay={0.2} direction="left" className="lg:col-span-5">
            <div className="border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 bg-[#0048FF] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0048FF]">
                  Leadership Architecture
                </span>
                <span className="text-[10px] text-[#8A8A93] ml-auto">
                  Active
                </span>
              </div>

              {/* Dr. Ali as center */}
              <div className="border border-[#0048FF]/30 bg-[#0048FF]/5 p-3 mb-3">
                <p className="text-[9px] uppercase tracking-[0.15em] text-[#0048FF] font-bold mb-1">
                  Founder · Board · Group CEO
                </p>
                <p className="text-sm text-white font-bold">
                  Dr. Ali Azeem Rajwani
                </p>
                <p className="text-[10px] text-white/60 mt-1">
                  Vision, Healthcare Ecosystem & Group Architecture
                </p>
              </div>

              {/* Human architects 2x2 + 2x1 */}
              <div className="grid grid-cols-2 gap-1.5">
                {architectureDomains.slice(1, 7).map((a) => (
                  <div
                    key={a.name}
                    className="border border-white/10 bg-white/[0.02] p-2.5 hover:border-[#0048FF]/30 transition-colors"
                  >
                    <p className="text-[9px] uppercase tracking-[0.1em] text-[#0048FF] font-bold mb-1">
                      {a.short}
                    </p>
                    <p className="text-[11px] text-white font-semibold leading-tight">
                      {a.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* DEXA virtual */}
              <div className="mt-3 border border-[#0048FF]/20 bg-[#0048FF]/[0.04] p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#0048FF]/50 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-[#0048FF] rounded-full" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#0048FF] font-bold">
                    Virtual Intelligence Layer
                  </p>
                  <p className="text-[11px] text-white font-semibold">
                    DEXA · AI Intelligence Architecture
                  </p>
                </div>
              </div>

              {/* Infrastructure nodes */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-2 font-bold">
                  Infrastructure Nodes
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Healthcare",
                    "Insurance",
                    "Fintech",
                    "AI",
                    "Company OS",
                  ].map((n) => (
                    <span
                      key={n}
                      className="text-[9px] px-2 py-0.5 border border-white/10 text-white/70"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.35}>
          <p className="mt-14 text-xs uppercase tracking-[0.25em] text-white/30 font-bold border-t border-white/10 pt-8">
            This team is building infrastructure, not managing departments.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 2: FOUNDER QUOTE ---------- */

function FounderQuote() {
  return (
    <section
      data-testid="team-founder-quote"
      className="relative bg-[#0a0a15] py-24 md:py-32 overflow-hidden"
    >
      {/* subtle infrastructure grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0048FF 1px, transparent 1px), linear-gradient(90deg, #0048FF 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow text-[#0048FF] mb-4">Founder Declaration</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-12">
            The founder's declaration
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          <ScrollReveal delay={0.1} className="md:col-span-4">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-[#0048FF]" />
              <PhotoFrame
                src={founderFeature.photo}
                alt={founderFeature.name}
                name={founderFeature.name}
                size="xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18} className="md:col-span-8">
            <Quote className="w-10 h-10 text-[#0048FF]/30 mb-6" />
            <blockquote className="text-2xl md:text-3xl lg:text-[34px] font-semibold text-white leading-[1.3] tracking-tight">
              “{founderQuote.text}”
            </blockquote>
            <div className="mt-10 flex items-center gap-4 pt-8 border-t border-white/10">
              <div>
                <p className="text-base font-bold text-white italic">
                  — {founderQuote.author}
                </p>
                <p className="text-sm text-[#8A8A93] mt-1">{founderQuote.role}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 3: PHILOSOPHY ---------- */

function LeadershipPhilosophy() {
  return (
    <section
      data-testid="team-philosophy"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="eyebrow mb-4">Leadership Philosophy</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05]">
                Built by Operators. Designed for Scale.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="mt-8 text-base text-[#666666] leading-relaxed">
                Mentor Global is led by people who understand that
                infrastructure is not built through ideas alone. It is built
                through execution, systems, product discipline, technology
                depth, healthcare experience, financial governance, and
                responsible intelligence.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#11111F]/10">
            {philosophyCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <div className="bg-white p-7 h-full border-t border-[#0048FF] border-t-2">
                  <span className="text-[#0048FF] text-xs font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold text-[#11111F] mt-3 mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 4: ARCHITECTURE MAP ---------- */

function ArchitectureMap() {
  // 8 nodes arranged around central Mentor Global hub
  const radius = 240;
  return (
    <section
      data-testid="team-architecture-map"
      className="bg-[#11111F] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow text-[#0048FF] mb-4">
            Leadership Architecture Map
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            Seven human architects. One virtual intelligence officer. One
            infrastructure mission.
          </h2>
        </ScrollReveal>

        {/* Desktop circular map */}
        <ScrollReveal delay={0.15}>
          <div className="hidden lg:flex justify-center mt-20">
            <div
              className="relative"
              style={{ width: radius * 2 + 220, height: radius * 2 + 60 }}
            >
              {/* Concentric rings */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                style={{ width: radius * 2, height: radius * 2 }}
              />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0048FF]/20"
                style={{ width: radius * 1.2, height: radius * 1.2 }}
              />

              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-[#0048FF] flex flex-col items-center justify-center text-center px-3">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/70 font-bold">
                  Center
                </p>
                <p className="text-base font-bold text-white mt-1 leading-tight">
                  Mentor Global
                </p>
                <p className="text-[10px] text-white/70 mt-2 leading-tight">
                  Infrastructure Mission
                </p>
              </div>

              {/* Nodes */}
              {architectureDomains.map((a, i) => {
                const angle = (i * (2 * Math.PI)) / architectureDomains.length - Math.PI / 2;
                const cx = radius * Math.cos(angle);
                const cy = radius * Math.sin(angle);
                const isDexa = a.name === "DEXA";
                return (
                  <div
                    key={a.name}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${cx}px)`,
                      top: `calc(50% + ${cy}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className={`w-[170px] border p-3 text-center ${
                        isDexa
                          ? "border-[#0048FF]/40 bg-[#0048FF]/10"
                          : "border-white/15 bg-white/[0.03]"
                      }`}
                    >
                      <p className="text-[9px] uppercase tracking-[0.15em] text-[#0048FF] font-bold mb-1">
                        {a.short}
                      </p>
                      <p className="text-[11px] font-bold text-white leading-tight">
                        {a.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile/tablet list */}
        <div className="lg:hidden mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10">
          {architectureDomains.map((a) => {
            const isDexa = a.name === "DEXA";
            return (
              <div
                key={a.name}
                className={`p-5 ${
                  isDexa
                    ? "bg-[#0048FF]/10 border-l-2 border-l-[#0048FF]"
                    : "bg-[#11111F]"
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#0048FF] font-bold mb-2">
                  {a.short}
                </p>
                <p className="text-base font-bold text-white mb-1">{a.name}</p>
                <p className="text-xs text-white/60 leading-relaxed">
                  {a.domain}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 5: FOUNDER FEATURE ---------- */

function FounderFeature() {
  return (
    <section
      data-testid="team-founder-feature"
      id="architects"
      className="bg-white py-24 md:py-32 border-t border-b border-[#11111F]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Founder Feature</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Dr. Ali Azeem Rajwani
          </h2>
          <p className="mt-3 text-base text-[#0048FF] font-semibold">
            {founderFeature.title}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Photo + tags */}
          <ScrollReveal className="lg:col-span-5" delay={0.1}>
            <PhotoFrame
              src={founderFeature.photo}
              alt={founderFeature.name}
              name={founderFeature.name}
              size="xl"
            />
            <div className="mt-6 border border-[#11111F]/10 p-5 bg-[#f8f8f9]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#0048FF] font-bold mb-2">
                Architecture Domain
              </p>
              <p className="text-sm font-bold text-[#11111F] leading-snug">
                {founderFeature.architectureDomain}
              </p>
              <div className="mt-5 pt-5 border-t border-[#11111F]/10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#666666] font-bold mb-3">
                  Infrastructure Pillars
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {founderFeature.pillars.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] px-2.5 py-1 border border-[#0048FF]/30 text-[#0048FF] font-semibold"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-[#11111F]/10 flex flex-wrap gap-2">
                <LinkedInButton url={founderFeature.linkedin} testId="founder-linkedin" />
                <a
                  href="#founder-profile"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0048FF] text-white text-xs font-semibold hover:bg-[#0030CC] transition-colors"
                  data-testid="founder-read-profile"
                >
                  Read Founder Profile <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal className="lg:col-span-7" delay={0.15}>
            <div id="founder-profile">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#0048FF] font-bold mb-4">
                Profile Summary
              </p>
              <p className="text-base md:text-lg text-[#11111F] leading-relaxed">
                {founderFeature.summary}
              </p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#0048FF] font-bold mb-4">
                    Experience
                  </p>
                  <ul className="space-y-3">
                    {founderFeature.experience.map((e) => (
                      <li
                        key={e}
                        className="flex gap-3 text-sm text-[#11111F] leading-relaxed"
                      >
                        <span className="text-[#0048FF] font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#0048FF] font-bold mb-4">
                    What he is building for Mentor Global
                  </p>
                  <ul className="space-y-3">
                    {founderFeature.building.map((e) => (
                      <li
                        key={e}
                        className="flex gap-3 text-sm text-[#11111F] leading-relaxed"
                      >
                        <span className="text-[#0048FF] font-bold flex-shrink-0">
                          ▸
                        </span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-l-2 border-[#0048FF] pl-6 py-2">
                <p className="text-base md:text-lg text-[#11111F] italic leading-relaxed">
                  “{founderQuote.text}”
                </p>
                <p className="mt-4 text-sm font-bold text-[#11111F]">
                  — {founderQuote.author}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: BOARD LEADERSHIP ---------- */

function BoardLeadership() {
  return (
    <section
      data-testid="team-board"
      className="bg-[#f8f8f9] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Board Leadership</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Board leadership built for vision, execution, enterprise scale, and
            governance
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#11111F]/10 border border-[#11111F]/10">
          {boardProfiles.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.08}>
              <div className="bg-white p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0048FF] font-bold">
                    Board Director
                  </span>
                  <span className="text-xs text-[#666666] font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#11111F] leading-snug">
                  {p.name}
                </h3>
                <p className="text-xs text-[#0048FF] font-semibold mt-1 mb-6">
                  {p.title}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#666666] font-bold mb-3">
                  Board Role
                </p>
                <ul className="space-y-2">
                  {p.role.map((r) => (
                    <li
                      key={r}
                      className="flex gap-2 text-sm text-[#11111F] leading-relaxed"
                    >
                      <span className="text-[#0048FF] flex-shrink-0">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 7: EXECUTIVE LEADERSHIP ---------- */

function ExecutiveLeadership() {
  return (
    <section
      data-testid="team-executive"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Executive Leadership</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Executive leadership across product, technology, health operations,
            finance, and governance
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[#11111F]/10 border border-[#11111F]/10">
          {executiveLeaders.map((l, i) => (
            <ScrollReveal key={l.name} delay={i * 0.06}>
              <div
                className={`p-6 h-full ${
                  l.virtual ? "bg-[#11111F] text-white" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-[9px] uppercase tracking-[0.2em] font-bold ${
                      l.virtual ? "text-[#0048FF]" : "text-[#0048FF]"
                    }`}
                  >
                    {l.virtual ? "Virtual Layer" : "Executive"}
                  </span>
                  <span
                    className={`text-xs font-mono ${
                      l.virtual ? "text-white/40" : "text-[#666666]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className={`text-base font-bold leading-snug ${
                    l.virtual ? "text-white" : "text-[#11111F]"
                  }`}
                >
                  {l.name}
                </h3>
                <p
                  className={`text-xs font-semibold mt-2 leading-snug ${
                    l.virtual ? "text-[#0048FF]" : "text-[#0048FF]"
                  }`}
                >
                  {l.title}
                </p>
                {l.subtitle && (
                  <p className="text-[11px] text-white/60 mt-1 italic">
                    {l.subtitle}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 8: DEXA VIRTUAL INTELLIGENCE OFFICER ---------- */

function DexaSection() {
  return (
    <section
      data-testid="team-dexa"
      className="bg-[#0a0a15] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.08] blur-[160px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow text-[#0048FF] mb-4">
            DEXA · Virtual Intelligence Officer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            {dexaProfile.name}, {dexaProfile.title}
          </h2>
          <p className="text-lg text-[#0048FF] mt-3 font-semibold">
            {dexaProfile.subtitle}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <ScrollReveal className="lg:col-span-5" delay={0.1}>
            <PhotoFrame
              src={null}
              alt="DEXA Intelligence Core"
              name="DEXA"
              size="xl"
              virtual
            />
            <div className="mt-6 border border-white/10 p-5 bg-white/[0.02]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#0048FF] font-bold mb-2">
                Architecture Domain
              </p>
              <p className="text-sm font-bold text-white leading-snug">
                {dexaProfile.architectureDomain}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.15}>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#0048FF] font-bold mb-4">
              Profile Summary
            </p>
            <p className="text-base md:text-lg text-white leading-relaxed">
              {dexaProfile.summary}
            </p>
            <p className="mt-4 text-sm text-[#8A8A93] leading-relaxed italic">
              {dexaProfile.distinction}
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#0048FF] font-bold mb-4">
                  Experience — Deployed Across
                </p>
                <ul className="space-y-2.5">
                  {dexaProfile.experience.map((e) => (
                    <li
                      key={e}
                      className="flex gap-3 text-sm text-white/85 leading-relaxed"
                    >
                      <span className="text-[#0048FF] flex-shrink-0">▸</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#0048FF] font-bold mb-4">
                  What DEXA is building for Mentor Global
                </p>
                <ul className="space-y-2.5">
                  {dexaProfile.building.map((e) => (
                    <li
                      key={e}
                      className="flex gap-3 text-sm text-white/85 leading-relaxed"
                    >
                      <span className="text-[#0048FF] flex-shrink-0">▸</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border border-[#0048FF]/30 bg-[#0048FF]/[0.05] p-6">
              <div className="flex items-start gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#0048FF] flex-shrink-0 mt-0.5" />
                <p className="text-xs uppercase tracking-[0.2em] text-[#0048FF] font-bold">
                  Governance Positioning
                </p>
              </div>
              <ul className="space-y-2">
                {dexaProfile.governance.map((g) => (
                  <li key={g} className="text-sm text-white/85 leading-relaxed">
                    — {g}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-l-2 border-[#0048FF] pl-6 py-2">
              <p className="text-xl md:text-2xl text-white italic leading-relaxed">
                “{dexaProfile.quote}”
              </p>
              <p className="mt-3 text-sm font-bold text-[#0048FF]">— DEXA</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 9: INDIVIDUAL LEADER PROFILE CARDS ---------- */

function LeaderCard({ leader, index }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      data-testid={`leader-card-${leader.id}`}
      className="border border-[#11111F]/10 bg-white hover:border-[#0048FF]/30 transition-colors group"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
        {/* Photo */}
        <div className="md:col-span-2 relative bg-[#0a0a15] min-h-[320px] md:min-h-[420px]">
          <PhotoFrame
            src={leader.photo}
            alt={leader.name}
            name={leader.name}
            size="xl"
          />
          <div className="absolute top-4 left-4 bg-[#0048FF] px-3 py-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white font-bold">
              {String(index + 1).padStart(2, "0")} · Architect
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3 p-7 md:p-9 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-[#11111F] leading-tight">
            {leader.name}
          </h3>
          <p className="text-sm text-[#0048FF] font-semibold mt-2 leading-snug">
            {leader.title}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 self-start border border-[#0048FF]/30 px-3 py-1">
            <span className="w-1 h-1 bg-[#0048FF] rounded-full" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#0048FF] font-bold">
              {leader.architectureDomain}
            </span>
          </div>

          <p className="mt-6 text-sm text-[#11111F] leading-relaxed">
            {leader.summary}
          </p>

          {expanded && (
            <div className="mt-6 border-t border-[#11111F]/10 pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#0048FF] font-bold mb-3">
                  Experience
                </p>
                <ul className="space-y-2">
                  {leader.experience.map((e) => (
                    <li
                      key={e}
                      className="flex gap-2 text-sm text-[#11111F] leading-relaxed"
                    >
                      <span className="text-[#0048FF] flex-shrink-0">▸</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#0048FF] font-bold mb-3">
                  What they are building for Mentor Global
                </p>
                <ul className="space-y-2">
                  {leader.building.map((e) => (
                    <li
                      key={e}
                      className="flex gap-2 text-sm text-[#11111F] leading-relaxed"
                    >
                      <span className="text-[#0048FF] flex-shrink-0">▸</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#0048FF] font-bold mb-3">
                  Infrastructure Pillars
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {leader.pillars.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] px-2.5 py-1 border border-[#0048FF]/30 text-[#0048FF] font-semibold"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 border-l-2 border-[#0048FF] pl-4">
            <p className="text-sm md:text-base text-[#11111F] italic leading-relaxed">
              “{leader.quote}”
            </p>
            <p className="mt-2 text-xs font-bold text-[#11111F]">
              — {leader.name}
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-[#11111F]/10 flex flex-wrap gap-2">
            <LinkedInButton url={leader.linkedin} testId={`linkedin-${leader.id}`} />
            <button
              data-testid={`expand-${leader.id}`}
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0048FF] text-white text-xs font-semibold hover:bg-[#0030CC] transition-colors"
            >
              {expanded ? "Show Less" : "Read Full Profile"}
              {expanded ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeaderProfiles() {
  return (
    <section
      data-testid="team-profiles"
      className="bg-[#f8f8f9] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Individual Leader Profiles</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            The architects behind each infrastructure layer
          </h2>
        </ScrollReveal>

        <div className="mt-16 space-y-[1px] bg-[#11111F]/10">
          {leaderProfiles.map((leader, i) => (
            <ScrollReveal key={leader.id} delay={i * 0.05}>
              <LeaderCard leader={leader} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 10: OPERATING MODEL ---------- */

function OperatingModel() {
  return (
    <section
      data-testid="team-operating-model"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow text-[#0048FF] mb-4">
            Leadership Operating Model
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            How the leadership team works as one system
          </h2>
        </ScrollReveal>

        <div className="mt-16 border border-white/10">
          {operatingModelFlow.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.04}>
              <div
                className={`grid grid-cols-12 items-center border-b border-white/10 last:border-b-0 hover:bg-white/[0.02] transition-colors ${
                  i === operatingModelFlow.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div className="col-span-2 md:col-span-1 bg-[#0048FF]/5 border-r border-white/10 p-5 text-center">
                  <span className="text-lg md:text-2xl font-bold text-[#0048FF] font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-4 md:col-span-3 border-r border-white/10 p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#0048FF] font-bold mb-1">
                    Stage
                  </p>
                  <p className="text-sm md:text-base font-bold text-white leading-snug">
                    {s.label}
                  </p>
                </div>
                <div className="col-span-6 md:col-span-8 p-5">
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {s.leader}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 11: INFRASTRUCTURE OWNERSHIP MATRIX ---------- */

function OwnershipMatrix() {
  return (
    <section
      data-testid="team-ownership-matrix"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Infrastructure Ownership Matrix</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Leadership ownership across Mentor Global infrastructure
          </h2>
          <p className="mt-6 text-base text-[#666666] max-w-3xl leading-relaxed">
            Each row maps a layer of Mentor Global infrastructure to the
            architects responsible across vision, operations, enterprise scale,
            product, technology, health operations, finance and governance, and
            AI intelligence.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-14 border border-[#11111F]/10 overflow-x-auto">
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="bg-[#11111F] text-white">
                  <th className="text-left px-5 py-4 text-[10px] uppercase tracking-[0.2em] font-bold border-r border-white/10">
                    Infrastructure Layer
                  </th>
                  {matrixColumns.map((c) => (
                    <th
                      key={c}
                      className="text-center px-3 py-4 text-[10px] uppercase tracking-[0.15em] font-bold border-r border-white/10 last:border-r-0"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrixRows.map((row, ri) => {
                  const cells = ownershipMatrix[row] || [];
                  return (
                    <tr
                      key={row}
                      className={`border-t border-[#11111F]/10 ${
                        ri % 2 === 0 ? "bg-white" : "bg-[#f8f8f9]"
                      }`}
                    >
                      <td className="px-5 py-4 text-sm font-bold text-[#11111F] border-r border-[#11111F]/10">
                        {row}
                      </td>
                      {matrixColumns.map((col, ci) => {
                        const v = cells[ci];
                        const empty = !v || v === "—";
                        return (
                          <td
                            key={col}
                            className="text-center px-3 py-4 border-r border-[#11111F]/10 last:border-r-0"
                          >
                            {empty ? (
                              <span className="text-[#11111F]/20 text-xs">—</span>
                            ) : (
                              <span
                                className={`inline-block px-2 py-0.5 text-[10px] font-bold ${
                                  v === "DEXA"
                                    ? "bg-[#0048FF]/10 text-[#0048FF] border border-[#0048FF]/30"
                                    : "bg-[#11111F]/5 text-[#11111F]"
                                }`}
                              >
                                {v}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-[11px] text-[#666666] italic">
            Ali = Dr. Ali Azeem Rajwani · Navroz = Navroz Mansiya · Rafique =
            Rafique Awan · Jawwad = Jawwad Razvi · Khubaib = Syed Khubaib Hikmat
            · Sarmad = Sarmad Siddiqui · Ovais = Ovais Khan · DEXA = Virtual
            Intelligence Layer.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 12: BUILDER CREDIBILITY ---------- */

function BuilderCredibility() {
  return (
    <section
      data-testid="team-credibility"
      className="bg-[#f8f8f9] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Builder Credibility</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Built by people who have operated real systems
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10 border border-[#11111F]/10">
          {credibilityCards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.05}>
              <div className="bg-white p-6 h-full card-hover">
                <span className="text-[#0048FF] text-xs font-bold font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold text-[#11111F] mt-3 mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 13: GOVERNANCE NOTE ---------- */

function GovernanceNote() {
  return (
    <section
      data-testid="team-governance-note"
      className="bg-[#11111F] py-20 md:py-24"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="border border-[#0048FF]/30 bg-[#0048FF]/[0.04] p-8 md:p-10">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-[#0048FF] flex-shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#0048FF] font-bold mb-2">
                  Governance Note
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug mb-5">
                  DEXA is intelligence, not a statutory officer
                </h3>
                <p className="text-sm md:text-base text-white/85 leading-relaxed">
                  {governanceDisclaimer}
                </p>
                <p className="mt-4 text-sm text-[#8A8A93] leading-relaxed italic">
                  DEXA is included as a virtual leadership identity to represent
                  the intelligence layer inside Mentor Global. It supports
                  leadership. It does not replace leadership.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 14: EXTENDED LEADERSHIP / FUTURE ADVISORS ---------- */

function FutureAdvisors() {
  return (
    <section
      data-testid="team-future-advisors"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Extended Leadership</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Built to scale with advisors, country leaders, and domain councils
          </h2>
        </ScrollReveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10 border border-[#11111F]/10">
          {futurePlaceholders.map((f, i) => (
            <ScrollReveal key={f} delay={i * 0.04}>
              <div className="bg-white p-6 h-full border-t-2 border-t-[#0048FF]/20 hover:border-t-[#0048FF] transition-colors">
                <span className="text-[#0048FF]/60 text-xs font-bold font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold text-[#11111F] mt-3 mb-2 leading-snug">
                  {f}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#666666] font-bold">
                  Invitations Opening Soon
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 15: FINAL CTA ---------- */

function FinalCTA() {
  return (
    <section
      data-testid="team-final-cta"
      className="relative bg-[#0a0a15] py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#0048FF]/[0.08] blur-[180px]" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="eyebrow text-[#0048FF] mb-4">Partner with Leadership</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.05]">
            Partner with the architects building global health fintech
            infrastructure
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p className="mt-8 text-base md:text-lg text-[#8A8A93] max-w-3xl mx-auto leading-relaxed">
            Mentor Global brings together healthcare experience, technology
            architecture, product strategy, operational discipline, financial
            governance, enterprise scale, and AI intelligence to build the
            infrastructure beneath the next generation of companies.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="team-cta-partner"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Partner With Mentor Global <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/solutions"
              data-testid="team-cta-explore"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Explore Infrastructure
            </Link>
            <Link
              to="/contact"
              data-testid="team-cta-contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Contact Leadership
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */

export default function Team() {
  return (
    <main data-testid="team-page">
      <Hero />
      <FounderQuote />
      <LeadershipPhilosophy />
      <ArchitectureMap />
      <FounderFeature />
      <BoardLeadership />
      <ExecutiveLeadership />
      <DexaSection />
      <LeaderProfiles />
      <OperatingModel />
      <OwnershipMatrix />
      <BuilderCredibility />
      <GovernanceNote />
      <FutureAdvisors />
      <FinalCTA />
    </main>
  );
}
