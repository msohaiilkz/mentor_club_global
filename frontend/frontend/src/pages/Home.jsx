import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  Globe,
  Shield,
  Brain,
  Building2,
} from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { AnimatedCounter } from "../components/shared/AnimatedCounter";
import {
  solutionPillars,
  scaleMetrics,
  scaleDisclaimer,
  globalPresence,
  globalFootprint,
} from "../data/content";
import { EcosystemVisual } from "../components/shared/EcosystemVisual";
import { ArchitectureDiagram } from "../components/shared/ArchitectureDiagram";
import { IpadMockup } from "../components/shared/IpadMockup";
import { motion } from "framer-motion";
import { Globe as CobeGlobeComponent } from "../components/shared/CobeGlobe";
const pillarIcons = {
  "healthcare-infrastructure": Shield,
  "insurance-infrastructure": Building2,
  "fintech-infrastructure": Zap,
  "ai-infrastructure": Brain,
  "company-operating-infrastructure": Globe,
};

function Hero() {
  const bottomCards = [
    {
      label: "Healthcare Infrastructure",
      title: "Builds digital rails for providers, payers, and care ecosystems",
    },
    {
      label: "Insurance Infrastructure",
      title: "Enables claims, benefits, approvals, and policy orchestration",
    },
    {
      label: "Fintech Infrastructure",
      title: "Powers wallets, payments, financing, and embedded transactions",
    },
    {
      label: "AI Infrastructure",
      title:
        "Activates intelligent automation, agentic workflows, and orchestration",
    },
    {
      label: "Mentor OS",
      title:
        "Provides the operating backbone for infrastructure deployment and scale",
    },
  ];

  return (
    <section
      data-testid="home-hero"
      className="relative min-h-screen flex flex-col justify-center bg-[#05050A] overflow-hidden"
    >
      {/* Right - Full Bleed Visual */}
      <EcosystemVisual />

      <div className="relative max-w-[1720px] mx-auto px-6 md:px-12 w-full z-10 pt-32 pb-48 lg:pt-0 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left - Text */}
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="mb-2 mt-4 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-primary">
                GLOBAL HEALTH FINTECH INFRASTRUCTURE
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white tracking-tight leading-[1.05]">
                The Infrastructure Behind the Future of Health Fintech
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 hero-desc">
                Mentor Global builds the systems that power healthcare,
                insurance, fintech, AI, and company operating infrastructure
                across markets.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mt-4 text-sm text-[#8A8A93]/70">
                We do not build isolated products. We build the infrastructure
                that lets ecosystems launch, operate, automate, insure, finance,
                and scale.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/solutions"
                  data-testid="hero-explore-solutions"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
                >
                  Explore Solutions <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  data-testid="hero-partner-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                >
                  Partner With Mentor Global
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side spacer for grid layout */}
          <div className="hidden lg:block pointer-events-none"></div>
        </div>
      </div>

      {/* Bottom Content Rail */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t border-white/10 bg-[#0A0A0F]/90 backdrop-blur-xl">
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 flex overflow-x-auto hide-scrollbar scroll-smooth">
          {bottomCards.map((card, i) => (
            <Link
              key={i}
              to={`/solutions`}
              className="flex-1 min-w-[260px] p-6 lg:p-8 border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors group cursor-pointer flex flex-col justify-start"
            >
              <div className="w-8 h-[2px] bg-[#0048FF] mb-5 group-hover:w-12 transition-all duration-300" />
              <p className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#8A8A93] mb-3 group-hover:text-white/70 transition-colors">
                {card.label}
              </p>
              <h4 className="text-sm font-medium text-white/80 leading-relaxed group-hover:text-white transition-colors">
                {card.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Positioning() {
  const layers = [
    {
      label: "Holding Layer",
      desc: "Defines strategy, expansion, partnerships, and capital allocation.",
    },
    {
      label: "Infrastructure Layer",
      desc: "Healthcare, Insurance, Fintech, AI, and Mentor OS ecosystems.",
    },
    {
      label: "Technology Layer",
      desc: "Mentor Innovation builds the shared technology backbone.",
    },
    {
      label: "Intelligence Layer",
      desc: "DEXA powers intelligent workflows, orchestration, monitoring, and decision support.",
    },
    {
      label: "Market Execution Layer",
      desc: "Operational rollout across Pakistan, UAE, and the US.",
    },
  ];

  return (
    <section
      data-testid="home-positioning"
      className="bg-[#FAFAFA] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Content */}
          <div className="max-w-xl">
            <ScrollReveal>
              <p className="eyebrow mb-4">Structure</p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.1]">
                Built as a Global Infrastructure Holding Company
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 section-desc">
                Mentor Global is structured to build, own, deploy, and scale
                infrastructure across regulated markets. As a global holding
                company, it connects strategy, technology, intelligence, and
                market execution to power healthcare, insurance, fintech, AI,
                and operating system infrastructure across Pakistan, UAE, and
                the US.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Side: Architecture Ecosystem */}
          <ScrollReveal delay={0.15}>
            <div className="w-full relative px-2 md:px-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0048FF]/5 blur-[100px] rounded-full pointer-events-none" />
              <IpadMockup orientation="portrait" className="max-w-[480px]">
                <div className="w-full h-full bg-white relative flex flex-col items-center justify-center py-12 px-4 md:px-6 overflow-y-auto scrollbar-hide">
                  <ArchitectureDiagram />
                </div>
              </IpadMockup>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Layers Grid */}
        <div className="mt-20 lg:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-[#11111F]/10 bg-white">
          {layers.map((layer, i) => (
            <ScrollReveal key={layer.label} delay={i * 0.1}>
              <div
                className={`p-6 md:p-8 card-hover h-full
                  ${i < layers.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#11111F]/10" : ""}
                `}
              >
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0048FF] mb-3">
                  0{i + 1}
                </p>
                <h3 className="text-base font-bold text-[#11111F] mb-2 leading-tight">
                  {layer.label}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    { area: "Healthcare", issue: "Healthcare access is fragmented" },
    {
      area: "Insurance",
      issue: "Insurance workflows are slow and paper heavy",
    },
    {
      area: "Fintech",
      issue: "Financial rails are disconnected from service delivery",
    },
    {
      area: "Operations",
      issue: "Companies still run on spreadsheets and manual trackers",
    },
    { area: "AI", issue: "AI is often isolated from real operations" },
    { area: "Data", issue: "Data does not flow across systems" },
    { area: "Payments", issue: "Claims and payments remain delayed" },
    { area: "Leadership", issue: "Leadership visibility is weak" },
  ];

  return (
    <section
      data-testid="home-problem"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">The Problem</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">
            Large industries are still running on broken systems
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 section-desc-dark max-w-2xl">
            Healthcare, insurance, fintech, and business operations remain
            fragmented, manual, slow, and disconnected.
          </p>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {problems.map((p, i) => (
            <ScrollReveal key={p.area} delay={i * 0.06}>
              <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                <p className="text-[#0048FF] text-sm font-bold mb-3">
                  {p.area}
                </p>
                <p className="text-sm text-[#8A8A93] leading-relaxed">
                  {p.issue}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-base text-white/60">
              This is not a surface problem.
            </p>
            <p className="text-lg font-bold text-white mt-1">
              It is an <span className="text-[#0048FF]">infrastructure</span>{" "}
              problem.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section data-testid="home-pillars" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Solutions</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Five Infrastructure Pillars. One Global Architecture.
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#11111F]/10">
          {solutionPillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.slug];
            return (
              <ScrollReveal key={pillar.slug} delay={i * 0.08}>
                <Link
                  to={`/solutions/${pillar.slug}`}
                  data-testid={`pillar-${pillar.slug}`}
                  className={`block p-8 md:p-10 card-hover h-full
                    ${i < solutionPillars.length - 1 ? "border-b lg:border-b border-[#11111F]/10" : ""}
                    ${i % 3 !== 2 ? "lg:border-r border-[#11111F]/10" : ""}`}
                >
                  <Icon
                    className="w-6 h-6 text-[#0048FF] mb-5"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-bold text-[#11111F] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed mb-6">
                    {pillar.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0048FF]">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DexaSection() {
  return (
    <section
      data-testid="home-dexa"
      className="relative bg-[#11111F] py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 blue-glow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.04] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Intelligence Engine</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            DEXA Makes Infrastructure Think, Guide, and Act
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-6 section-desc-dark max-w-2xl">
            DEXA is the intelligence processing engine across Mentor Global. It
            understands context, reasons across systems, coordinates workflows,
            monitors execution, and powers intelligent operations across
            healthcare, insurance, fintech, HealthRails, Mentor OS, and white
            labelled client platforms.
          </p>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10">
          {[
            { label: "Context", desc: "Understands user and system context" },
            { label: "Routing", desc: "Routes workflows to the right process" },
            { label: "Coordination", desc: "Coordinates specialized AI pods" },
            {
              label: "Operations",
              desc: "Supports claims, policy, wallet, and operating workflows",
            },
            {
              label: "Monitoring",
              desc: "Monitors execution and detects gaps",
            },
            {
              label: "Governance",
              desc: "Escalates when human approval is required and creates audit ready intelligence",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.08}>
              <div className="bg-[#11111F] p-8 card-hover-dark h-full">
                <p className="text-[#0048FF] text-sm font-bold mb-2">
                  {item.label}
                </p>
                <p className="text-sm text-[#8A8A93] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              to="/dexa"
              data-testid="home-dexa-cta"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0048FF] hover:text-white transition-colors"
            >
              Explore DEXA <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function InnovationSection() {
  const capabilities = [
    "Customized software",
    "API first platforms",
    "Multi tenant SaaS",
    "White labelled solutions",
    "Full code enabled systems",
    "Portals and apps",
    "Dashboards",
    "Workflow engines",
  ];

  return (
    <section
      data-testid="home-innovation"
      className="bg-white py-24 md:py-32 relative overflow-hidden border-t border-[#11111F]/5"
    >
      {/* Background glow effects - slightly adjusted for white bg */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0048FF]/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#8A2BE2]/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Editorial Content */}
          <div className="max-w-xl">
            <ScrollReveal>
              <p className="mb-4 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-[#0048FF]">
                Technology Engine
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.1]">
                Mentor Innovation Builds the Technology Backbone
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-6 section-desc">
                Mentor Innovation does not only build software. It builds the
                operating backbone that powers healthcare, insurance, fintech,
                AI, and enterprise systems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-10 border-l-2 border-[#0048FF] pl-6 bg-gradient-to-r from-[#0048FF]/[0.02] to-transparent py-4">
                <p className="text-sm text-[#11111F]/80 font-medium leading-relaxed space-y-2">
                  <span className="block text-[#11111F]">
                    Build on Mentor infrastructure.
                  </span>
                  <span className="block">Launch as your own brand.</span>
                  <span className="block">
                    Operate with your own workflows.
                  </span>
                  <span className="block">
                    Scale with our technology backbone.
                  </span>
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="mt-12 grid grid-cols-2 gap-y-4 gap-x-6">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[#0048FF] text-[10px] font-bold">
                      //
                    </span>
                    <span className="text-sm font-medium text-[#11111F]/80">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Dark Module Cards & System Architecture */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-[480px] mx-auto w-full">
              <IpadMockup orientation="portrait">
                <div className="relative w-full h-full flex items-center justify-center bg-[#0A0A0F] overflow-hidden min-h-[500px]">
                  {/* Background Grid Pattern */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Central Core Glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#0048FF]/20 rounded-full blur-[100px]"
                  />

                  {/* Architecture Stack */}
                  <div className="relative z-10 flex flex-col justify-center gap-4 w-[85%] sm:w-[80%] max-w-[400px] h-full py-8 mx-auto">
                    {/* Top Level Apps */}
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex gap-4 w-full"
                    >
                      <div className="flex-1 p-3 sm:p-4 bg-[#11111F]/90 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#0048FF]/50 transition-colors flex items-center justify-center shadow-lg group">
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
                          Portals & Apps
                        </span>
                      </div>
                      <div className="flex-1 p-3 sm:p-4 bg-[#11111F]/90 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#0048FF]/50 transition-colors flex items-center justify-center shadow-lg group">
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
                          Dashboards
                        </span>
                      </div>
                    </motion.div>

                    {/* Connector Line with animated data dot */}
                    <div className="flex justify-center -my-2 relative z-0">
                      <div className="w-px h-6 bg-gradient-to-b from-[#0048FF]/40 to-transparent relative overflow-hidden">
                        <motion.div
                          animate={{ y: [-24, 24] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-full h-1/2 bg-white blur-[1px]"
                        />
                      </div>
                    </div>

                    {/* Middle Tier - APIs & SaaS */}
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 6,
                        delay: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-full p-5 bg-[#11111F]/90 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#0048FF]/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)] group relative overflow-hidden z-10"
                    >
                      <div className="absolute left-0 top-0 w-1 h-full bg-[#0048FF] opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div className="flex justify-between items-center px-2 sm:px-4">
                        <span className="text-xs sm:text-sm font-bold text-white">
                          API First Platforms
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-[#0048FF] font-mono border border-[#0048FF]/30 px-2 py-1 rounded bg-[#0048FF]/5">
                          JSON/REST
                        </span>
                      </div>
                      <div className="w-full h-px bg-white/5 my-4 relative overflow-hidden">
                        <motion.div
                          animate={{ x: [-200, 400] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-[#0048FF] to-transparent"
                        />
                      </div>
                      <div className="flex justify-between items-center px-2 sm:px-4">
                        <span className="text-xs sm:text-sm font-bold text-white">
                          Multi-tenant SaaS
                        </span>
                        <div className="flex gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981] animate-pulse" />
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981] animate-pulse delay-75" />
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981] animate-pulse delay-150" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Connector Line with animated data dot */}
                    <div className="flex justify-center -my-2 relative z-0">
                      <div className="w-px h-6 bg-gradient-to-b from-[#0048FF]/40 to-[#8A2BE2]/40 relative overflow-hidden">
                        <motion.div
                          animate={{ y: [-24, 24] }}
                          transition={{
                            duration: 2.5,
                            delay: 0.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-full h-1/2 bg-white blur-[1px]"
                        />
                      </div>
                    </div>

                    {/* Core Engine Layer */}
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{
                        duration: 7,
                        delay: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-full p-4 sm:p-5 bg-gradient-to-br from-[#11111F] to-[#0A0A0F] border border-[#0048FF]/40 rounded-xl shadow-[0_0_40px_rgba(0,72,255,0.15)] relative overflow-hidden z-10"
                    >
                      <motion.div
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute right-0 top-0 w-32 h-32 bg-[#8A2BE2]/20 blur-[50px] pointer-events-none"
                      />
                      <span className="text-[10px] uppercase tracking-widest text-[#0048FF] font-bold mb-3 block px-1">
                        Core Architecture
                      </span>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="bg-white/5 border border-white/5 rounded pl-3 pr-2 py-2 flex items-center justify-between hover:bg-white/10 transition-colors cursor-default">
                          <span className="text-[10px] sm:text-[11px] font-medium text-white/80">
                            Workflow Engines
                          </span>
                          <Zap className="w-3 h-3 text-[#0048FF]" />
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded pl-3 pr-2 py-2 flex items-center justify-between hover:bg-white/10 transition-colors cursor-default">
                          <span className="text-[10px] sm:text-[11px] font-medium text-white/80">
                            Full Code Systems
                          </span>
                          <Brain className="w-3 h-3 text-[#8A2BE2]" />
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded pl-3 pr-2 py-2 flex items-center justify-between col-span-2 hover:bg-white/10 transition-colors cursor-default">
                          <span className="text-[10px] sm:text-[11px] font-medium text-white/80">
                            White Labelled Solutions & Custom Software
                          </span>
                          <Globe className="w-3 h-3 text-[#0048FF]" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Bottom Base */}
                    <div className="flex justify-center mt-3">
                      <div className="w-2/3 h-3 border-t border-[#0048FF]/30 rounded-[100%] shadow-[0_-5px_15px_rgba(0,72,255,0.1)]" />
                    </div>
                  </div>
                </div>
              </IpadMockup>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ScaleSection() {
  return (
    <section
      data-testid="home-scale"
      className="relative bg-[#11111F] py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0048FF]/[0.04] blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0048FF]/[0.03] blur-[120px] rounded-full" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Scale</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">
            Operating Infrastructure at Global Scale
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 section-desc-dark max-w-2xl">
            These numbers represent platforms, partners, and client ecosystems
            running on or connected through Mentor infrastructure, including
            direct and indirect reach.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {scaleMetrics.map((metric, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="bg-[#11111F] p-8 md:p-10 h-full">
                <p className="text-3xl md:text-4xl font-bold text-white counter-number">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </p>
                <p className="mt-3 text-sm text-[#8A8A93] leading-relaxed">
                  {metric.label}
                </p>
                {metric.sub && (
                  <p className="mt-1 text-xs text-[#8A8A93]/60">{metric.sub}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.6}>
            <div className="bg-[#11111F] p-8 md:p-10 flex items-center h-full">
              <p className="text-sm text-[#0048FF] font-semibold leading-relaxed">
                Asia, Middle East, Africa, and US Technology client footprint
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5}>
          <p className="mt-8 text-xs text-[#8A8A93]/50 max-w-3xl leading-relaxed">
            {scaleDisclaimer}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
          <div className="mt-12 text-center">
            <p className="text-base text-white/60">
              This is not theoretical infrastructure.
            </p>
            <p className="text-lg font-bold text-white mt-1">
              This is infrastructure running across ecosystems.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function GlobalPresenceSection() {
  const globeMarkers = [
    { location: [1.3521, 103.8198], size: 0.08, id: "sg", label: "Singapore" },
    { location: [30.3753, 69.3451], size: 0.08, id: "pk", label: "Pakistan" },
    { location: [23.4241, 53.8478], size: 0.08, id: "ae", label: "UAE" },
    {
      location: [37.0902, -95.7129],
      size: 0.08,
      id: "us",
      label: "United States",
    },
  ];

  return (
    <section
      data-testid="home-global"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Content & Data */}
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-4">Global Presence</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-4 leading-[1.1]">
                Built in Singapore.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mb-12 section-desc">
                Validated in Pakistan. Expanding Through UAE and the US. Serving
                Global Technology Clients.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {globalPresence.map((g, i) => (
                <ScrollReveal key={g.location} delay={i * 0.1}>
                  <div className="p-6 md:p-8 border border-[#11111F]/10 card-hover h-full bg-[#FAFAFA]">
                    <p className="text-[#0048FF] text-2xl font-bold mb-2">
                      {g.location}
                    </p>
                    <p className="text-sm text-[#666666] leading-relaxed">
                      {g.role}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="mt-8 p-6 border border-[#11111F]/10 bg-[#FAFAFA]">
                <p className="text-sm text-[#666666] font-medium">
                  {globalFootprint}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Interactive Globe */}
          <ScrollReveal delay={0.2}>
            <div className="w-full aspect-square relative flex items-center justify-center">
              <CobeGlobeComponent
                markers={globeMarkers}
                dark={0}
                className="w-full h-full max-w-[600px] mx-auto cursor-grab active:cursor-grabbing"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      data-testid="home-final-cta"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.05] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
            Build on infrastructure designed for global health fintech systems.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solutions"
              data-testid="final-explore-solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="final-partner-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Partner With Us <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main data-testid="home-page">
      <Hero />
      <Positioning />
      <Problem />
      <Pillars />
      <DexaSection />
      <InnovationSection />
      <ScaleSection />
      <GlobalPresenceSection />
      <FinalCTA />
    </main>
  );
}
