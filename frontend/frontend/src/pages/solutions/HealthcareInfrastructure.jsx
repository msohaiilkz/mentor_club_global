import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Building2,
  Brain,
} from "lucide-react";
import { ScrollReveal } from "../../components/shared/ScrollReveal";
import {
  healthcareProblems,
  rails,
  stakeholders,
  journeys,
  modules,
  dexaCapabilities,
  dexaScenarios,
  architectureLayers,
  deploymentModels,
  useCases,
  outcomes,
} from "../../data/healthcare";
import { dexaFullScenarios } from "../../data/dexa-page";
import { ChatSimulation } from "../../components/shared/ChatSimulation";
import { MacbookMockup } from "../../components/shared/MacbookMockup";
import { DeviceEcosystem } from "../../components/shared/DeviceEcosystem";
import {
  Activity,
  BarChart3,
  Wallet,
  CheckCircle2,
  PlusSquare,
  UserCircle2,
  Stethoscope,
  ClipboardList,
  MessageSquare,
} from "lucide-react";

/* ---------------- Sub-components for Visuals ---------------- */

const HeroAnimationLoop = () => {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t + 100) % 8000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return { time };
};

const HealthcareDashboard = () => {
  const { time } = HeroAnimationLoop();

  const recommendations = [
    "Shift recurring OPD claims into preventive pathways.",
    "Increase panel provider usage to reduce leakage.",
    "Identify high cost cohorts for early intervention.",
    "Improve pharmacy policy controls to reduce spend.",
  ];

  return (
    <div className="w-full h-full p-6 md:p-8 flex flex-col bg-[#0A1128] relative overflow-hidden font-sans">
      {/* Header bar */}
      <div className="h-10 border-b border-white/5 flex items-center justify-between mb-6 pb-3 bg-black/40 backdrop-blur-md -mx-6 -mt-6 md:-mx-8 md:-mt-8 px-6 md:px-8">
        <span className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">
          Corporate Health Dashboard
        </span>
        <div className="flex items-center gap-4 text-white/20">
          <div className="w-20 h-1 bg-white/5 rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          {
            label: "Active Employees",
            value: "1,248",
            highlight: time > 3800 && time < 4200,
          },
          {
            label: "Claims in Review",
            value: "86",
            highlight: time > 3400 && time < 3800,
          },
          {
            label: "Available Pool Fund",
            value: "PKR 18.6M",
            highlight: time > 4200 && time < 4600,
          },
        ].map((kpi, i) => (
          <motion.div
            key={i}
            animate={{
              backgroundColor: kpi.highlight
                ? "rgba(0, 72, 255, 0.1)"
                : "rgba(255, 255, 255, 0.03)",
              borderColor: kpi.highlight
                ? "rgba(0, 72, 255, 0.3)"
                : "rgba(255, 255, 255, 0.05)",
            }}
            className="border p-4 rounded-2xl transition-all duration-500"
          >
            <p className="text-white/30 text-[8px] font-black uppercase tracking-widest">
              {kpi.label}
            </p>
            <p className="text-white text-lg font-black mt-1">{kpi.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* Graph */}
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <p className="text-white/40 text-[9px] font-black uppercase tracking-widest">
              Utilization Trend
            </p>
            <div className="flex gap-1">
              {[0, 1, 2].map((d) => (
                <div key={d} className="w-1 h-1 rounded-full bg-white/20" />
              ))}
            </div>
          </div>
          <div className="relative h-24 w-full">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 80 Q 50 60 100 70 T 200 40 T 300 55 T 400 20"
                fill="none"
                stroke={time > 3000 && time < 3400 ? "#60a5fa" : "#0048ff"}
                strokeWidth="3"
                strokeLinecap="round"
                animate={{
                  pathLength:
                    time > 1200 ? Math.min(1, (time - 1200) / 1800) : 0,
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.path
                d="M 0 80 Q 50 60 100 70 T 200 40 T 300 55 T 400 20 L 400 100 L 0 100 Z"
                fill="url(#gradient-hc-hero)"
                animate={{ opacity: time > 1200 ? 0.1 : 0 }}
              />
              <defs>
                <linearGradient
                  id="gradient-hc-hero"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0048ff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0048ff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex justify-between text-[7px] text-white/20 font-bold mt-2">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-lg bg-[#0048ff]/20 flex items-center justify-center">
              <Brain className="w-3 h-3 text-[#0048FF]" />
            </div>
            <p className="text-[#0048ff] text-[9px] font-black uppercase tracking-widest">
              AI Recommendation
            </p>
          </div>
          <div className="space-y-3">
            {recommendations.map((rec, i) => {
              const showAt = 2000 + i * 1000;
              return (
                <AnimatePresence key={i}>
                  {time > showAt && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[9px] text-white/60 leading-relaxed flex gap-2"
                    >
                      <span className="text-[#0048FF]">•</span> {rec}
                    </motion.p>
                  )}
                </AnimatePresence>
              );
            })}
            {time > 6000 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 pt-2 border-t border-white/5"
              >
                <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                <span className="text-[8px] text-[#10b981] font-bold uppercase tracking-widest">
                  Strategies Optimized
                </span>
              </motion.div>
            )}
          </div>
          {/* Typing cursor */}
          {time > 2000 && time < 5500 && (
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="absolute bottom-4 right-4 w-1 h-3 bg-[#0048ff]"
            />
          )}
        </div>
      </div>

      {/* System Wake Pulse */}
      <AnimatePresence>
        {time < 1200 && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none z-50"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const MentorHealthApp = () => {
  const { time } = HeroAnimationLoop();

  return (
    <div className="w-full h-full bg-[#0048FF] flex flex-col font-sans p-5 text-white relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mt-6">
        <div className="flex flex-col gap-1">
          <p className="text-white/60 text-[9px] font-bold">
            Available Balance
          </p>
          <p className="text-xl font-black mt-0.5 tracking-tight">
            <span className="text-[9px] mr-0.5">PKR</span>12,450
          </p>
        </div>
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-2 py-0.5 bg-white/20 rounded-full text-[7px] font-black uppercase tracking-widest border border-white/20"
        >
          Active
        </motion.div>
      </div>

      {/* Action Grid */}
      <div className="grid grid-cols-2 gap-2 my-5">
        {[
          { label: "Hospital", Icon: Building2, highlight: false },
          { label: "Doctor", Icon: UserCircle2, highlight: false },
          {
            label: "Lab Test",
            Icon: Activity,
            highlight: time > 4600 && time < 5200,
          },
          {
            label: "Pharmacy",
            Icon: PlusSquare,
            highlight: time > 4200 && time < 4600,
          },
        ].map((act, i) => (
          <motion.div
            key={i}
            animate={{
              scale: act.highlight ? 1.1 : 1,
              backgroundColor: act.highlight
                ? "rgba(255,255,255,0.3)"
                : "rgba(255,255,255,0.1)",
            }}
            className="bg-white/10 rounded-xl p-3 flex flex-col items-center gap-1.5 border border-white/10 transition-all duration-300"
          >
            <act.Icon className="w-5 h-5" />
            <span className="text-[8px] font-bold">{act.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 mt-auto mb-2">
        {[
          { label: "Submit Claim", highlight: false },
          {
            label: "Track Reimbursement",
            highlight: time > 5200 && time < 6600,
          },
          { label: "Ask Mentor AI", highlight: time > 6600 && time < 7800 },
        ].map((btn, i) => (
          <motion.div
            key={i}
            animate={{
              scale: btn.highlight ? 1.05 : 1,
              backgroundColor: btn.highlight
                ? "rgba(255,255,255,0.3)"
                : i === 2
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(255,255,255,0.1)",
              boxShadow: btn.highlight
                ? "0 0 20px rgba(255,255,255,0.2)"
                : "none",
            }}
            className="bg-white/10 rounded-lg py-3 px-3 text-center text-[9px] font-black uppercase tracking-widest border border-white/10 transition-all duration-500 cursor-pointer"
          >
            {btn.label}
          </motion.div>
        ))}
      </div>

      {/* Tracking signal */}
      {time > 5200 && time < 6600 && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "-500%" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/40 blur-sm pointer-events-none"
        />
      )}
    </div>
  );
};

function Hero() {
  // const proofCards = [
  //   {
  //     label: "Cost Optimization",
  //     value: "+30%",
  //     icon: <BarChart3 className="w-7 h-7 text-[#0048FF]" />,
  //     iconBg: "bg-[#0048FF]/10",
  //   },
  //   {
  //     label: "Claims Settled This Week",
  //     value: "42",
  //     icon: <CheckCircle2 className="w-7 h-7 text-[#10b981]" />,
  //     iconBg: "bg-[#10b981]/20",
  //   }
  // ];

  return (
    <section
      data-testid="hc-hero"
      className="relative bg-[#05050A] pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden"
    >
      <div className="absolute top-1/4 -right-[10%] w-[800px] h-[800px] bg-[#0048FF]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="relative max-w-[1720px] mx-auto px-6 md:px-12">
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-sm text-[#8A8A93] hover:text-[#0048FF] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> All Solutions
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0048FF] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/80">
                  HEALTHCARE INFRASTRUCTURE
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white tracking-tighter leading-[1.05]">
                Infrastructure for Access, Claims, Benefits, and Finance
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-8 hero-desc">
                Deploy connected healthcare rails for employers, providers,
                TPAs, and insurers through one intelligent, API-first
                infrastructure layer.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-all hover:scale-[1.02]"
                >
                  Build Infrastructure <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/dexa"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
                >
                  Explore DEXA Intelligence
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative">
            <ScrollReveal delay={0.2} direction="left">
              <DeviceEcosystem
                laptopContent={<HealthcareDashboard />}
                phoneContent={<MentorHealthApp />}
                // proofCards={proofCards}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section data-testid="hc-problem" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">The Problem</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Healthcare is not broken because people do not care. It is broken
            because the rails do not connect.
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {healthcareProblems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-white p-6 md:p-8 card-hover h-full">
                <span className="text-[#0048FF] text-xs font-bold">
                  0{i + 1}
                </span>
                <p className="mt-3 text-sm text-[#11111F] font-medium leading-relaxed">
                  {p}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfrastructureStack() {
  return (
    <section
      data-testid="hc-stack"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Infrastructure Stack</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            One Healthcare Infrastructure Stack. Multiple Connected Rails.
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-[1px]">
          {rails.map((rail, idx) => (
            <ScrollReveal key={rail.name} delay={idx * 0.05}>
              <div className="bg-[#11111F] border border-white/10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-48 shrink-0">
                    <span className="text-[#0048FF] text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      {rail.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {rail.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-[#8A8A93] px-3 py-1.5 border border-white/10 hover:border-[#0048FF]/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectedRailsVisual() {
  return (
    <section data-testid="hc-rails-visual" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">Connected Rails</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-16">
            Six Connected Rails. One Infrastructure.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="relative">
            {/* Central hub */}
            <div className="mx-auto w-64 md:w-80 py-6 bg-[#11111F] text-white text-center mb-8">
              <p className="text-sm font-bold">
                Mentor Healthcare Infrastructure
              </p>
            </div>
            {/* Rails grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#11111F]/10 border border-[#11111F]/10">
              {rails.map((rail, i) => (
                <div
                  key={rail.name}
                  className="p-6 md:p-8 text-center bg-white card-hover flex flex-col items-center justify-center min-h-[120px]"
                >
                  <div className="w-2 h-2 bg-[#0048FF] mb-4" />
                  <p className="text-xs font-black uppercase tracking-widest text-[#11111F] leading-tight">
                    {rail.name}
                  </p>
                </div>
              ))}
            </div>
            {/* Powered by */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="text-xs text-[#666666]">Powered by</span>
              <span className="text-xs font-bold text-[#0048FF]">
                Mentor Innovation
              </span>
              <span className="text-xs text-[#666666]">and</span>
              <span className="text-xs font-bold text-[#0048FF]">DEXA</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhoItServes() {
  return (
    <section
      data-testid="hc-stakeholders"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Stakeholders</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Built for every stakeholder in the healthcare value chain
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {stakeholders.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.05}>
              <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                <h3 className="text-base font-bold text-white mb-3">
                  {s.name}
                </h3>
                <p className="text-xs text-[#8A8A93] mb-3">
                  <span className="text-[#0048FF] font-bold">Pain:</span>{" "}
                  {s.pain}
                </p>
                <p className="text-xs text-[#8A8A93] mb-3">
                  <span className="text-[#0048FF] font-bold">
                    Infrastructure:
                  </span>{" "}
                  {s.infra}
                </p>
                <p className="text-xs text-[#8A8A93]">
                  <span className="text-[#0048FF] font-bold">Outcome:</span>{" "}
                  {s.outcome}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function UserJourneys() {
  return (
    <section data-testid="hc-journeys" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">User Journeys</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Healthcare infrastructure becomes real when every user has a clear
            journey
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-6">
          {journeys.map((j, idx) => (
            <ScrollReveal key={j.role} delay={idx * 0.05}>
              <div className="border border-[#11111F]/10 p-6 md:p-8 card-hover">
                <h3 className="text-lg font-bold text-[#11111F] mb-4">
                  {j.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  {j.steps.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="text-xs px-3 py-1.5 bg-[#11111F]/[0.03] border border-[#11111F]/10 text-[#11111F] font-medium">
                        {step}
                      </span>
                      {i < j.steps.length - 1 && (
                        <ChevronRight className="w-3 h-3 text-[#0048FF]" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreModules() {
  return (
    <section
      data-testid="hc-modules"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Core Modules</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Modular infrastructure for healthcare operations
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {modules.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.04}>
              <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                <span className="text-[#0048FF] text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold text-white mt-2 mb-3">
                  {m.name}
                </h3>
                <p className="text-xs text-[#8A8A93] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DexaIntelligence() {
  return (
    <section data-testid="hc-dexa" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">DEXA Intelligence</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            DEXA is the intelligence layer inside healthcare infrastructure
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 section-desc max-w-3xl">
            DEXA turns healthcare infrastructure from a workflow system into a
            guided operating layer. DEXA does not replace HR. DEXA does not
            replace claims officers. DEXA does not diagnose. DEXA does not
            answer from memory. DEXA operates inside approved rules, user
            permissions, benefit logic, claims logic, provider data, wallet
            data, health credit rules, escalation workflows, and audit
            boundaries.
          </p>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[#11111F]/10">
          {dexaCapabilities.map((cap, i) => (
            <ScrollReveal key={cap.role} delay={i * 0.05}>
              <div className="bg-white p-6 card-hover h-full">
                <p className="text-sm font-bold text-[#0048FF] mb-4">
                  {cap.role}
                </p>
                <div className="space-y-2">
                  {cap.items.map((item) => (
                    <p key={item} className="text-xs text-[#666666]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DexaScenarios() {
  return (
    <section
      data-testid="hc-dexa-scenarios"
      className="bg-[#0B0B14] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0048FF]/[0.02]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">DEXA in Action</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
            From confusion to governed next action
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative mt-8">
            <MacbookMockup>
              <ChatSimulation scenarios={dexaFullScenarios} />
            </MacbookMockup>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">
                Multi-Scenario Exploration
              </h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">
                Observe how DEXA handles operational scenarios across
                healthcare, insurance, fintech, and more.
              </p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">
                Governed Reasoning
              </h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">
                DEXA verifies permissions, retrieves approved knowledge, and
                applies business rules before responding.
              </p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">
                Actionable Intelligence
              </h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">
                Every response concludes with governed next actions, routing
                users directly into approved workflows.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section data-testid="hc-architecture" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Architecture</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Built as healthcare infrastructure, not a collection of screens
          </h2>
        </ScrollReveal>
        <div className="mt-16 border border-[#11111F]/10">
          {architectureLayers.map((layer, idx) => (
            <ScrollReveal key={layer.name} delay={idx * 0.04}>
              <div
                className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-[#11111F]/10" : ""}`}
              >
                <div className="md:col-span-3 p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#11111F]/10 flex items-center">
                  <div>
                    <span className="text-[#0048FF] text-xs font-bold">
                      L{idx + 1}
                    </span>
                    <p className="text-sm font-bold text-[#11111F] mt-1">
                      {layer.name}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-9 p-5 md:p-6">
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1 border border-[#11111F]/10 text-[#666666]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeploymentModels() {
  return (
    <section
      data-testid="hc-deployment"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Deployment</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Deploy it as infrastructure, not as a one size fits all product
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {deploymentModels.map((d, i) => (
            <ScrollReveal key={d.name} delay={i * 0.05}>
              <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                <h3 className="text-base font-bold text-white mb-3">
                  {d.name}
                </h3>
                <p className="text-xs text-[#8A8A93] leading-relaxed">
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

function UseCasesSection() {
  return (
    <section data-testid="hc-use-cases" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Use Cases</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Healthcare infrastructure that can power multiple business models
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#11111F]/10">
          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.name} delay={i * 0.04}>
              <div className="bg-white p-6 md:p-8 card-hover h-full">
                <h3 className="text-base font-bold text-[#11111F] mb-3">
                  {uc.name}
                </h3>
                <div className="space-y-1.5 text-xs text-[#666666]">
                  <p>
                    <span className="text-[#0048FF] font-bold">Who:</span>{" "}
                    {uc.who}
                  </p>
                  <p>
                    <span className="text-[#0048FF] font-bold">Pain:</span>{" "}
                    {uc.pain}
                  </p>
                  <p>
                    <span className="text-[#0048FF] font-bold">Rail:</span>{" "}
                    {uc.rail}
                  </p>
                  <p>
                    <span className="text-[#0048FF] font-bold">DEXA:</span>{" "}
                    {uc.dexa}
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

function OutcomesSection() {
  return (
    <section data-testid="hc-outcomes" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Outcomes</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            What healthcare infrastructure should deliver
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {outcomes.map((o, i) => (
            <ScrollReveal key={o} delay={i * 0.04}>
              <div className="bg-[#11111F] p-6 card-hover-dark h-full">
                <div className="w-6 h-6 border border-[#0048FF]/30 flex items-center justify-center mb-3">
                  <div className="w-1.5 h-1.5 bg-[#0048FF]" />
                </div>
                <p className="text-sm text-white font-medium">{o}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-xs text-[#8A8A93]/50 max-w-3xl">
            Outcomes are designed to reduce manual workload, improve visibility,
            and support cost governance. These do not represent unsupported
            guarantees.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section data-testid="hc-final-cta" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl mx-auto">
            Build healthcare infrastructure that connects care, claims,
            benefits, finance, and intelligence
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">
            Mentor Global helps organizations move from fragmented healthcare
            administration to connected infrastructure powered by portals, apps,
            APIs, workflows, wallets, provider networks, claims engines, and
            DEXA intelligence.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="hc-final-build-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Build Healthcare Infrastructure <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="hc-final-talk-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#11111F]/20 text-[#11111F] font-semibold hover:bg-[#11111F]/5 transition-colors"
            >
              Talk to Mentor Global <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function HealthcareInfrastructure() {
  return (
    <main data-testid="healthcare-infrastructure-page">
      <Hero />
      <ProblemSection />
      <InfrastructureStack />
      <ConnectedRailsVisual />
      <WhoItServes />
      <UserJourneys />
      <CoreModules />
      <DexaIntelligence />
      <DexaScenarios />
      <Architecture />
      <DeploymentModels />
      <UseCasesSection />
      <OutcomesSection />
      <FinalCTA />
    </main>
  );
}
