import { Link } from "react-router-dom";
import {
  ArrowRight,
  Quote,
  Check,
  X,
  MapPin,
  Network,
  Layers,
  Users,
  Smartphone,
  Stethoscope,
  ShieldCheck,
  PieChart,
  Command,
  Settings,
  Cpu,
  Search,
  Compass,
  Eye,
  Workflow,
  Globe,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { IpadMockup } from "../components/shared/IpadMockup";
import { motion } from "framer-motion";
import {
  aboutHero,
  founderQuote1,
  founderQuote2,
  whoWeAreLayers,
  whatWeBuildCards,
  productVsInfra,
  operatingModelLayers,
  regions,
  expansionTimeline,
  philosophyPillars,
  beliefManifesto,
  valuesCards,
  differentiators,
} from "../data/about-page";
import Ali from "../assets/dr ali main.jpeg";
/* ---------------- Section 1: Hero ---------------- */
const NAVY = "#0a0a15";
const NEAR_BLACK = "#11111F";
const BLUE = "#0048FF";
const INDIGO = "#6366F1";
function Hero() {
  return (
    <section
      data-testid="about-hero"
      className="relative bg-[#11111F] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="absolute top-1/4 right-1/4 w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#0048FF]/[0.07] blur-[160px]" />
      <div className="relative max-w-[1720px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0048FF]/10 border border-[#0048FF]/20 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0048FF] animate-pulse" />
                <span className="text-sm sm:text-base font-bold tracking-widest uppercase text-[#0048FF]">
                  {aboutHero.eyebrow}
                </span>
              </div>
              <h1 className="text-[38px] sm:text-[35px] md:text-[48px] lg:text-[54px] xl:text-[54px] font-bold text-white tracking-tighter leading-[1.05]">
                {aboutHero.headline}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="mt-8 hero-desc max-w-2xl">
                {aboutHero.subheadline}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <p className="mt-4 text-base text-white/50 max-w-2xl leading-relaxed">
                {aboutHero.supporting}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.28}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-all duration-300 shadow-[0_10px_20px_rgba(0,72,255,0.2)]"
                >
                  {aboutHero.primaryCTA} <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                >
                  {aboutHero.secondaryCTA}
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Infrastructure Dashboard inside iPad */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <ScrollReveal delay={0.2} direction="left" className="w-full">
              <IpadMockup
                orientation="landscape"
                className="max-w-2xl lg:ml-auto"
              >
                <div className="relative w-full h-full bg-[#05050A] overflow-hidden flex flex-col p-6 md:p-7">
                  {/* Compact Header */}
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0048FF] animate-pulse shadow-[0_0_8px_#0048FF]" />
                      <span className="text-sm md:text-base uppercase tracking-[0.3em] font-extrabold text-[#0048FF]">
                        Infrastructure OS v4.0
                      </span>
                    </div>
                    <span className="text-sm text-[#0048FF] font-black tracking-widest uppercase px-1.5 py-0.5 rounded-sm bg-[#0048FF]/10 border border-[#0048FF]/20">
                      Layer 00
                    </span>
                  </div>

                  {/* Holding Company Box - Slimmer */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative border border-[#0048FF]/30 bg-[#0048FF]/5 p-5 mb-4 text-center group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0048FF]/5 to-transparent opacity-50" />
                    <p className="relative text-xs uppercase tracking-[0.4em] text-[#0048FF]/60 font-black mb-1.5">
                      Infrastructure OS
                    </p>
                    <p className="relative text-xl md:text-2xl text-white font-extrabold tracking-tight">
                      Mentor Global
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0048FF]/40 to-transparent" />
                  </motion.div>

                  {/* Infrastructure Pillars Grid - Compact */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
                    {aboutHero.pillars.map((p, i) => (
                      <motion.div
                        key={p}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.04 }}
                        className="border border-white/10 bg-white/[0.02] p-2.5 text-center transition-all hover:border-[#0048FF]/40 hover:bg-[#0048FF]/5"
                      >
                        <p className="text-sm md:text-base text-white/70 font-bold leading-tight uppercase tracking-tighter">
                          {p.replace(" Infrastructure", "")}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Powered By Bar - Slimmer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative text-center text-sm md:text-base uppercase tracking-[0.25em] text-[#0048FF] font-black border border-[#0048FF]/15 bg-[#0048FF]/[0.05] py-2.5 mb-6"
                  >
                    Powered by Mentor Innovation & DEXA
                  </motion.div>

                  {/* Global Markers - Dense Grid to fit all 5 */}
                  <div className="flex-1 min-h-0">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/20 mb-4 font-black flex items-center gap-2">
                      <span className="w-6 h-[1px] bg-white/10" />
                      Operational Hubs
                      <span className="flex-1 h-[1px] bg-white/10" />
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 px-1 overflow-visible">
                      {aboutHero.globalMarkers.map((g, i) => (
                        <motion.div
                          key={g.location}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.04 }}
                          className="flex items-center gap-3 p-2 border border-white/5 bg-white/[0.01] rounded-sm group transition-all hover:border-[#0048FF]/30 hover:bg-white/[0.03]"
                        >
                          <div className="relative shrink-0 w-7 h-7 border border-white/10 bg-[#0048FF]/5 flex items-center justify-center rounded-sm transition-colors group-hover:border-[#0048FF]/40">
                            <MapPin className="w-3 h-3 text-[#0048FF]" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-sm text-white font-extrabold tracking-tight truncate">
                              {g.location}
                            </span>
                            <span className="text-sm text-white/30 font-bold uppercase tracking-widest truncate leading-none mt-1">
                              {g.role}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Compact Glows */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#0048FF]/10 blur-[80px] rounded-full pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#0048FF]/5 blur-[80px] rounded-full pointer-events-none" />
                </div>
              </IpadMockup>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 2: Founder Thesis ---------------- */

function FounderThesis() {
  return (
    <section
      data-testid="team-founder-declaration"
      className="relative py-28 md:py-36 overflow-hidden border-b border-white/5"
      style={{ background: NAVY }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute -top-20 right-0 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[700px] lg:h-[700px] rounded-none blur-[200px]"
        style={{ background: "rgba(99,102,241,0.08)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4 font-bold" style={{ color: INDIGO }}>
            A Vision for the Infrastructure Age{" "}
          </p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight mb-16">
            The Founder's Declaration
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <ScrollReveal delay={0.1} className="md:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] max-w-[460px] overflow-hidden bg-[#0a0a15] relative ring-1 ring-white/10">
                <img
                  src={Ali}
                  alt=""
                  className="w-full h-full object-cover transition-all duration-700"
                  // style={{ filter: "grayscale(1) contrast(1.1)" }}
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18} className="md:col-span-7">
            <Quote
              className="w-12 h-12 mb-8"
              style={{ color: "rgba(99,102,241,0.4)" }}
            />
            <blockquote className="text-[var(--fs-2xl)] font-semibold text-white leading-[1.4] tracking-tight">
              <p>
                We are not building Mentor Global to win a place in today’s
                market. We are building the foundation for the markets that must
                come next.
              </p>
              <p className="mt-6 text-white">
                A world where healthcare becomes accessible, finance moves with
                trust, insurance becomes intelligent, companies operate through
                connected systems, and innovation is no longer limited by
                geography, complexity, or legacy infrastructure
              </p>
            </blockquote>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-base font-bold text-white">
                — Dr. Ali Rajwani
              </p>
              <p className="text-sm text-[#8A8A93] mt-1">
                Founder, Board Director and Group CEO, Mentor Global
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 3: Who We Are ---------------- */

function WhoWeAre() {
  return (
    <section data-testid="about-who-we-are" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="eyebrow mb-4">Who We Are</p>
              <h2 className="text-[var(--fs-4xl)] font-bold text-[#11111F] tracking-tight leading-[1.05]">
                Who We Are
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.1}>
              <p className="text-base md:text-lg text-[#11111F] leading-relaxed">
                Mentor Global is a global health fintech infrastructure holding
                company. We build the systems that allow healthcare, insurance,
                fintech, AI, and company operating infrastructure to work as one
                connected ecosystem.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base text-[#666666] leading-relaxed">
                Our role is not to build isolated products. Our role is to build
                the rails that help companies launch, operate, automate, insure,
                finance, govern, and scale across markets.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                Mentor Global operates through a holding company model, with
                Singapore as the strategic structure, Pakistan as a core
                operating and validation market, and operational chapters in the
                UAE and the United States. Our subsidiaries and market chapters
                execute locally, while Mentor Innovation builds the technology
                engine and DEXA powers intelligence across the infrastructure.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Three layer visual */}
        <ScrollReveal delay={0.25}>
          <div className="mt-20 border border-[#11111F]/10">
            {whoWeAreLayers.map((l, i) => (
              <div
                key={l.label}
                className={`grid grid-cols-12 items-center ${
                  i !== whoWeAreLayers.length - 1
                    ? "border-b border-[#11111F]/10"
                    : ""
                }`}
              >
                <div className="col-span-2 md:col-span-1 bg-[#0048FF] p-5 md:p-6 text-center">
                  <span className="text-lg md:text-2xl font-bold text-white font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-4 p-5 md:p-7 border-r border-[#11111F]/10">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#0048FF] font-bold mb-1">
                    0{i + 1}
                  </p>
                  <p className="text-base md:text-lg font-bold text-[#11111F] leading-snug">
                    {l.org}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-7 p-5 md:p-7 border-t md:border-t-0 border-[#11111F]/10">
                  <p className="text-base md:text-lg text-[#666666] leading-relaxed">
                    {l.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------------- Section 4: What We Build ---------------- */

function WhatWeBuild() {
  return (
    <section
      data-testid="about-what-we-build"
      className="bg-[#f8f8f9] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">What We Build</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Five infrastructure layers. One connected global architecture.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#11111F]/10 border border-[#11111F]/10">
          {whatWeBuildCards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.06}>
              <div
                className={`bg-white p-7 md:p-8 h-full card-hover ${
                  i === 4 ? "lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#0048FF] text-sm font-bold font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Layers className="w-4 h-4 text-[#0048FF]/40" />
                </div>
                <h3 className="text-xl font-bold text-[#11111F] mb-4 leading-snug">
                  {c.title}
                </h3>
                <p className="text-base text-[#666666] leading-relaxed">
                  {c.copy}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 5: Why Infrastructure Matters ---------------- */

function WhyInfrastructure() {
  return (
    <section
      data-testid="about-why-infrastructure"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow text-[#0048FF] mb-4">
            Why Infrastructure Matters
          </p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            Products solve moments. Infrastructure changes systems.
          </h2>
          <div className="mt-8 max-w-3xl space-y-4">
            <p className="section-desc-dark">
              Products can solve one problem. Infrastructure can power thousands
              of companies.
            </p>
            <p className="text-base text-[#8A8A93] leading-relaxed">
              A product may help one organization improve one workflow.
              Infrastructure creates the rails that many organizations can build
              on, integrate with, and scale through. Mentor Global is built on
              that belief.
            </p>
            <p className="text-base text-[#8A8A93] leading-relaxed">
              We are not trying to own every service. We are building the
              foundation that allows healthcare, insurance, fintech, AI, and
              operating systems to work together.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
          <ScrollReveal>
            <div className="bg-[#11111F] p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-white/40" />
                </div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/40 font-bold">
                  Product Thinking
                </p>
              </div>
              <ul className="space-y-3">
                {productVsInfra.product.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-base md:text-lg text-white/60 leading-relaxed"
                  >
                    <span className="text-white/30 flex-shrink-0">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-[#0048FF]/[0.05] p-8 md:p-10 h-full border-l-0 md:border-l-2 border-[#0048FF]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#0048FF]/20 border border-[#0048FF]/40 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#0048FF]" />
                </div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#0048FF] font-bold">
                  Infrastructure Thinking
                </p>
              </div>
              <ul className="space-y-3">
                {productVsInfra.infrastructure.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-base md:text-lg text-white leading-relaxed font-semibold"
                  >
                    <span className="text-[#0048FF] flex-shrink-0">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 6: Operating Model ---------------- */

function OperatingModel() {
  return (
    <section
      data-testid="about-operating-model"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Our Operating Model</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            How Mentor Global Operates
          </h2>
          <p className="mt-6 section-desc max-w-3xl">
            Holding strategy. Technology engine. Intelligence layer. Local
            execution.
          </p>
        </ScrollReveal>

        <div className="mt-16 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0048FF] via-[#0048FF]/30 to-[#0048FF]" />

          <div className="space-y-[1px] bg-[#11111F]/10">
            {operatingModelLayers.map((l, i) => (
              <ScrollReveal key={l.layer} delay={i * 0.08}>
                <div
                  className={`grid grid-cols-12 gap-0 items-stretch bg-white ${
                    i % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`col-span-12 md:col-span-4 ${
                      i % 2 === 0
                        ? "bg-[#11111F] text-white"
                        : "bg-[#0048FF] text-white md:order-2"
                    } p-8 flex flex-col justify-center`}
                  >
                    <p className="text-sm uppercase tracking-[0.2em] font-bold mb-2 opacity-70">
                      Layer {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="text-xl md:text-2xl font-bold leading-tight">
                      {l.layer}
                    </p>
                  </div>
                  <div
                    className={`col-span-12 md:col-span-8 p-8 flex items-center ${
                      i % 2 === 0 ? "" : "md:order-1"
                    }`}
                  >
                    <p className="text-base md:text-lg text-[#666666] leading-relaxed">
                      {l.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 7: Global Presence ---------------- */

function GlobalPresence() {
  return (
    <section
      data-testid="about-global-presence"
      className="bg-[#0a0a15] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/4 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#0048FF]/[0.08] blur-[160px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow text-[#0048FF] mb-4">Global Presence</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            Global Presence With Operational Chapters
          </h2>
          <p className="mt-6 section-desc-dark max-w-3xl">
            Mentor Global is structured for global expansion. The group combines
            Singapore based holding strategy, Pakistan based market validation,
            operational UAE and US chapters, and a growing global technology
            client ecosystem.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10 border border-white/10">
          {regions.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 0.06}>
              <div className="bg-[#11111F] p-6 h-full hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center justify-between mb-5">
                  <MapPin className="w-4 h-4 text-[#0048FF]" />
                  <span className="text-sm font-mono text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-tight">
                  {r.name}
                </h3>
                <p className="text-sm uppercase tracking-[0.15em] text-[#0048FF] font-bold mb-4">
                  {r.role}
                </p>
                <p className="text-base text-white/60 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 8: UAE and US Chapters ---------------- */

function ChaptersOperational() {
  return (
    <section data-testid="about-chapters" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Operational Chapters</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            UAE and US Chapters Are Operational
          </h2>
          <div className="mt-8 max-w-4xl space-y-4">
            <p className="text-base md:text-lg text-[#11111F] leading-relaxed">
              Mentor Global has moved beyond planning and entered active
              international execution. The UAE and US chapters are operational,
              giving the group a stronger foundation for regional expansion,
              enterprise partnerships, platform deployment, and global health
              fintech infrastructure growth.
            </p>
            <p className="text-base text-[#666666] leading-relaxed">
              The UAE chapter positions Mentor Global closer to GCC healthcare,
              insurance, fintech, and enterprise opportunities. The US chapter
              gives the group access to one of the world's most advanced and
              complex healthcare, insurance, employer benefits, and technology
              markets.
            </p>
            <p className="text-base text-[#666666] leading-relaxed">
              Together, these chapters strengthen Mentor Global's transition
              from a Pakistan validated infrastructure ecosystem into a global
              platform group.
            </p>
          </div>
        </ScrollReveal>

        {/* Expansion timeline */}
        <ScrollReveal delay={0.15}>
          <div className="mt-20">
            <p className="text-sm uppercase tracking-[0.25em] text-[#0048FF] font-bold mb-8">
              Expansion Timeline
            </p>
            <div className="relative">
              {/* Desktop horizontal timeline */}
              <div className="hidden md:block">
                <div className="absolute top-5 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#0048FF] via-[#0048FF]/40 to-[#0048FF]" />
                <div className="grid grid-cols-5 gap-4">
                  {expansionTimeline.map((s, i) => (
                    <div
                      key={s.step}
                      className="relative flex flex-col items-center"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base relative z-10 ${
                          i === expansionTimeline.length - 1
                            ? "bg-[#0048FF] shadow-[0_0_30px_#0048FF]"
                            : "bg-[#11111F]"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <p className="mt-6 text-sm font-bold text-[#11111F] text-center leading-snug">
                        {s.step}
                      </p>
                      <span
                        className={`mt-2 text-xs uppercase tracking-[0.15em] font-bold ${
                          i < 4 ? "text-[#0048FF]" : "text-[#666666]"
                        }`}
                      >
                        {i < 4 ? "Active" : "Expanding"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Mobile vertical timeline */}
              <div className="md:hidden space-y-4">
                {expansionTimeline.map((s, i) => (
                  <div
                    key={s.step}
                    className="flex items-center gap-4 border border-[#11111F]/10 p-4"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0 ${
                        i === expansionTimeline.length - 1
                          ? "bg-[#0048FF]"
                          : "bg-[#11111F]"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm font-bold text-[#11111F] leading-snug">
                      {s.step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------------- Section 9: Mentor Innovation & DEXA Backbone ---------------- */

function BackboneSection() {
  return (
    <section
      data-testid="about-backbone"
      className="bg-[#f8f8f9] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Backbone</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Technology Built by Mentor Innovation. Intelligence Powered by DEXA.
          </h2>
          <div className="mt-8 max-w-4xl space-y-4">
            <p className="text-base md:text-lg text-[#11111F] leading-relaxed">
              Mentor Global's infrastructure is powered by two critical layers.
            </p>
            <p className="text-base text-[#666666] leading-relaxed">
              Mentor Innovation is the technology engine. It builds the
              platforms, APIs, portals, apps, workflows, SaaS, PaaS, and white
              labelled systems that allow the group and its partners to deploy
              infrastructure across markets.
            </p>
            <p className="text-base text-[#666666] leading-relaxed">
              DEXA is the intelligence processing engine. It makes the
              infrastructure more guided, responsive, explainable, and governed
              by connecting knowledge, rules, workflows, agents, monitoring, and
              human approval.
            </p>
          </div>
        </ScrollReveal>

        {/* Backbone diagram */}
        <ScrollReveal delay={0.15}>
          <div className="mt-16 border border-[#11111F]/10 bg-white p-8 md:p-12">
            {/* Top: Mentor Global */}
            <div className="flex justify-center">
              <div className="border-2 border-[#0048FF] bg-[#0048FF]/5 px-6 sm:px-10 py-5 text-center w-full max-w-[260px]">
                <p className="text-sm uppercase tracking-[0.25em] text-[#0048FF] font-bold mb-1">
                  Technology Engine
                </p>
                <p className="text-xl font-bold text-[#11111F]">
                  Mentor Global
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-[2px] h-10 bg-[#0048FF]" />
            </div>

            {/* Middle: Innovation + DEXA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="border border-[#0048FF]/40 bg-[#11111F] text-white p-6 text-center">
                <Network className="w-5 h-5 text-[#0048FF] mx-auto mb-3" />
                <p className="text-sm uppercase tracking-[0.2em] text-[#0048FF] font-bold mb-1">
                  Technology Engine
                </p>
                <p className="text-lg font-bold">Mentor Innovation</p>
              </div>
              <div className="border border-[#0048FF]/40 bg-[#0048FF] text-white p-6 text-center">
                <Sparkles className="w-5 h-5 text-white mx-auto mb-3" />
                <p className="text-sm uppercase tracking-[0.2em] text-white/70 font-bold mb-1">
                  Intelligence Processing Engine
                </p>
                <p className="text-lg font-bold">DEXA</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-[2px] h-10 bg-[#0048FF]" />
            </div>

            {/* Bottom: 5 pillars */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
              {[
                "Healthcare",
                "Insurance",
                "Fintech",
                "AI",
                "Company Operating",
              ].map((p) => (
                <div
                  key={p}
                  className="border border-[#11111F]/15 bg-[#f8f8f9] p-4 text-center hover:border-[#0048FF]/40 transition-colors"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#0048FF] font-bold mb-1">
                    Infrastructure
                  </p>
                  <p className="text-sm font-bold text-[#11111F] leading-tight">
                    {p}
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

/* ---------------- Section 10: Our Philosophy ---------------- */

function Philosophy() {
  return (
    <section
      data-testid="about-philosophy"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow text-[#0048FF] mb-4">Our Philosophy</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            Value for Our Clients. Growth for Our Employees.
          </h2>
          <div className="mt-8 max-w-4xl space-y-4">
            <p className="section-desc-dark">
              Mentor Global is built on a dual philosophy.
            </p>
            <p className="text-base text-[#8A8A93] leading-relaxed">
              We create value for our clients by helping them launch faster,
              operate smarter, reduce friction, improve visibility, and build on
              infrastructure instead of starting from zero.
            </p>
            <p className="text-base text-[#8A8A93] leading-relaxed">
              We create growth for our employees by giving them ownership,
              learning, systems, performance clarity, leadership exposure, and
              the opportunity to grow with the company as the infrastructure
              scales.
            </p>
            <p className="text-base text-[#8A8A93] leading-relaxed">
              This philosophy shapes how we build products, serve partners,
              design operating systems, reward performance, and develop people.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
          <ScrollReveal>
            <div className="bg-[#0048FF]/[0.05] p-8 md:p-10 h-full border-l-2 border-[#0048FF]">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-5 h-5 text-[#0048FF]" />
                <p className="text-sm uppercase tracking-[0.25em] text-[#0048FF] font-bold">
                  Group Governance
                </p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {philosophyPillars.clients.title}
              </h3>
              <ul className="space-y-3">
                {philosophyPillars.clients.items.map((i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base text-white/85 leading-relaxed"
                  >
                    <span className="text-[#0048FF] font-bold flex-shrink-0">
                      ▸
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-[#11111F] p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-5 h-5 text-[#0048FF]" />
                <p className="text-sm uppercase tracking-[0.25em] text-[#0048FF] font-bold">
                  Pillar 02
                </p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {philosophyPillars.employees.title}
              </h3>
              <ul className="space-y-3">
                {philosophyPillars.employees.items.map((i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base text-white/85 leading-relaxed"
                  >
                    <span className="text-[#0048FF] font-bold flex-shrink-0">
                      ▸
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 11: Our Belief ---------------- */

function Belief() {
  return (
    <section data-testid="about-belief" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-6">Our Belief</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            The Systems We Connect
          </h2>
        </ScrollReveal>
        <div className="mt-14 space-y-6 md:space-y-8">
          {beliefManifesto.map((line, i) => (
            <ScrollReveal key={line} delay={i * 0.05}>
              <p
                className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
                  i === beliefManifesto.length - 1
                    ? "text-[#0048FF]"
                    : "text-[#11111F]"
                }`}
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

/* ---------------- Section 12: Our Values ---------------- */

function Values() {
  return (
    <section data-testid="about-values" className="bg-[#f8f8f9] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Our Values</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            What Drives Us
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10 border border-[#11111F]/10">
          {valuesCards.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.05}>
              <div
                className={`bg-white p-7 h-full card-hover border-t-2 ${
                  i === 0 ? "border-t-[#0048FF]" : "border-t-transparent"
                } ${i === valuesCards.length - 1 ? "lg:col-span-1" : ""}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#0048FF] text-sm font-bold font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-[#0048FF]/30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#0048FF] rounded-full" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#11111F] mb-3 leading-snug">
                  {v.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 13: Built by Operators ---------------- */

function BuiltByOperators() {
  return (
    <section
      data-testid="about-built-by-operators"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border border-[#11111F]/10 bg-[#f8f8f9] p-10 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal className="lg:col-span-7">
              <p className="eyebrow mb-4">Built by Operators</p>
              <h2 className="text-[var(--fs-4xl)] font-bold text-[#11111F] tracking-tight leading-[1.05]">
                Built by Operators, Architects, and Builders
              </h2>
              <p className="mt-8 text-base md:text-lg text-[#11111F] leading-relaxed">
                Mentor Global is built by people who have operated hospitals,
                built health companies, managed claims, scaled provider
                networks, designed products, structured finance, deployed
                technology, and governed regulated businesses.
              </p>
              <p className="mt-4 text-base text-[#666666] leading-relaxed">
                This matters because infrastructure cannot be imagined from a
                slide deck. It must be built from operational truth.
              </p>
              <div className="mt-10">
                <Link
                  to="/team"
                  data-testid="about-meet-leadership"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
                >
                  Meet the Leadership Architects{" "}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal className="lg:col-span-5" delay={0.15}>
              <div className="border border-[#11111F]/10 bg-white p-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm uppercase tracking-[0.2em] text-[#0048FF] font-bold">
                    System Core
                  </span>
                  <span className="text-sm text-[#666666]">Live</span>
                </div>
                <div className="space-y-2">
                  {[
                    "Hospitals operated",
                    "Health companies built",
                    "Claims managed",
                    "Provider networks scaled",
                    "Products designed",
                    "Finance structured",
                    "Technology deployed",
                    "Regulated businesses governed",
                  ].map((node, i) => (
                    <div
                      key={node}
                      className="flex items-center gap-3 border border-[#11111F]/10 p-2.5"
                    >
                      <span className="w-5 h-5 bg-[#0048FF]/10 border border-[#0048FF]/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#0048FF]" />
                      </span>
                      <span className="text-sm font-semibold text-[#11111F]">
                        {node}
                      </span>
                      <span className="ml-auto text-[10px] text-[#0048FF] font-bold font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 14: What Makes Mentor Global Different ---------------- */

function Differentiators() {
  return (
    <section
      data-testid="about-differentiators"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow text-[#0048FF] mb-4">Differentiators</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            What Makes Mentor Global Different
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
          {differentiators.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 0.06}>
              <div className="bg-[#11111F] p-7 h-full hover:bg-white/[0.02] transition-colors group">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#0048FF] text-sm font-bold font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-6 h-[2px] bg-[#0048FF] group-hover:w-12 transition-all duration-300" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug">
                  {d.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 15: Future We Are Building ---------------- */

function FutureBuilding() {
  return (
    <section
      data-testid="about-future"
      className="relative bg-[#0a0a15] py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/3 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[700px] lg:h-[700px] rounded-full bg-[#0048FF]/[0.08] blur-[180px]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow text-[#0048FF] mb-4">The Future</p>
          <h2 className="text-[var(--fs-hero)] font-bold text-white tracking-tight leading-[1.02] max-w-4xl">
            The Future Will Be Built on Intelligent Infrastructure
          </h2>
          <div className="mt-10 max-w-3xl space-y-5">
            <p className="text-base md:text-lg text-white/85 leading-relaxed">
              We believe the next generation of companies will not be built from
              scratch. They will be built on intelligent infrastructure.
            </p>
            <p className="text-base text-[#8A8A93] leading-relaxed">
              Mentor Global exists to create that foundation, so healthcare
              companies, insurers, fintechs, providers, employers, governments,
              entrepreneurs, and enterprise partners can move faster, scale
              smarter, and build systems people can trust.
            </p>
            <p className="text-base text-[#8A8A93] leading-relaxed">
              Our ambition is not only to grow Mentor Global. Our ambition is to
              help thousands of companies build on infrastructure that makes
              access easier, finance smarter, intelligence governed, and
              execution more disciplined.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-16 border-l-2 border-[#0048FF] pl-8 md:pl-10 py-4">
            <Quote className="w-8 h-8 text-[#0048FF]/40 mb-5" />
            <blockquote className="text-xl md:text-2xl lg:text-[28px] font-semibold text-white italic leading-[1.3] tracking-tight">
              “{founderQuote2.text}”
            </blockquote>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-base font-bold text-white">
                — {founderQuote2.author}
              </p>
              <p className="text-sm text-[#8A8A93] mt-1">
                {founderQuote2.role}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------------- Section 16: Final CTA ---------------- */

function FinalCTA() {
  return (
    <section data-testid="about-final-cta" className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">Build With Mentor Global</p>
          <h2 className="text-[var(--fs-hero)] font-bold text-[#11111F] tracking-tighter leading-[1.05]">
            Build on infrastructure designed for global health fintech systems.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p className="mt-8 section-desc max-w-3xl mx-auto">
            Partner with Mentor Global to build, deploy, and scale
            infrastructure across healthcare, insurance, fintech, AI, and
            company operating systems.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solutions"
              data-testid="about-cta-explore"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="about-cta-partner"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#11111F]/15 text-[#11111F] font-semibold hover:bg-[#11111F] hover:text-white transition-colors"
            >
              Partner With Us
            </Link>
            <Link
              to="/team"
              data-testid="about-cta-leadership"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#11111F]/15 text-[#11111F] font-semibold hover:bg-[#11111F] hover:text-white transition-colors"
            >
              Meet the Leadership Architects
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------------- PAGE ---------------- */

export default function About() {
  return (
    <main data-testid="about-page">
      <Hero />
      <FounderThesis />
      <WhoWeAre />
      <WhatWeBuild />
      <WhyInfrastructure />
      <OperatingModel />
      <GlobalPresence />
      <ChaptersOperational />
      <BackboneSection />
      <Philosophy />
      <Belief />
      <Values />
      <BuiltByOperators />
      <Differentiators />
      <FutureBuilding />
      <FinalCTA />
    </main>
  );
}
