import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Shield,
  Activity,
  CreditCard,
  Wallet,
  Landmark,
  Repeat,
  FileCheck,
  Layers,
  Eye,
  Cpu,
  Zap,
  DollarSign,
  Building2,
  Users as UsersIcon,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import { ScrollReveal } from "../../components/shared/ScrollReveal";
import {
  fintechProblems,
  fintechRails,
  fintechStakeholders,
  fintechJourneys,
  fintechModules,
  walletCapabilities,
  cardCapabilities,
  healthcareUseCases,
  insuranceUseCases,
  dexaFinanceCapabilities,
  dexaFinanceScenarios,
  fintechArchitectureLayers,
  fintechDeploymentModels,
  fintechUseCases,
  fintechOutcomes,
} from "../../data/fintech";
import { ChatSimulation } from "../../components/shared/ChatSimulation";
import { MacbookMockup } from "../../components/shared/MacbookMockup";
import { IpadMockup } from "../../components/shared/IpadMockup";

const INDIGO = "#6366F1";
const BLUE = "#0048FF";

const MoneyMovementArchitecture = () => {
  const [hoveredRail, setHoveredRail] = useState(null);
  const [activeFlow, setActiveFlow] = useState(0);

  // Auto-cycle through some flows to show movement
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const sources = [
    { id: "employers", label: "Employers", icon: Building2 },
    { id: "insurers", label: "Insurers", icon: Shield },
    { id: "tpas", label: "TPAs", icon: Layers },
    { id: "partners", label: "Embedded Partners", icon: HeartHandshake },
    { id: "finance", label: "Finance Teams", icon: Briefcase },
  ];

  const destinations = [
    { id: "employees", label: "Employees", icon: UsersIcon },
    { id: "providers", label: "Providers", icon: Activity },
    { id: "policyholders", label: "Policyholders", icon: Shield },
    { id: "suppliers", label: "Suppliers", icon: Building2 },
    { id: "brokers", label: "Brokers", icon: UsersIcon },
    { id: "embedded", label: "Partners", icon: HeartHandshake },
  ];

  const rails = [
    {
      id: "wallet",
      label: "Wallet Rail",
      icon: Wallet,
      detail: {
        title: "Employee wallet funding",
        desc: "Benefit balance, approved spending, transaction history.",
      },
    },
    {
      id: "card",
      label: "Card Rail",
      icon: CreditCard,
      detail: {
        title: "Mentor Card",
        desc: "Spend controls, merchant rules, transaction limits.",
      },
    },
    {
      id: "qr",
      label: "QR Payment Rail",
      icon: Zap,
      detail: {
        title: "QR Payments",
        desc: "Instant checkout, merchant settlement, digital receipts.",
      },
    },
    {
      id: "payroll",
      label: "Payroll Rail",
      icon: Landmark,
      detail: {
        title: "Salary & Advance",
        desc: "Payroll deductions, employer funding, reimbursements.",
      },
    },
    {
      id: "expense",
      label: "Expense Rail",
      icon: DollarSign,
      detail: {
        title: "Expense Management",
        desc: "Approval workflows, receipt capture, ledger posting.",
      },
    },
    {
      id: "credit",
      label: "Credit Rail",
      icon: FileCheck,
      detail: {
        title: "Health Credit",
        desc: "Provider receivables, working capital, credit scoring.",
      },
    },
    {
      id: "settlement",
      label: "Settlement Rail",
      icon: Repeat,
      detail: {
        title: "Settlement Engine",
        desc: "Multi-market clearing, bank transfers, payment cycles.",
      },
    },
    {
      id: "reconciliation",
      label: "Reconciliation Rail",
      icon: Eye,
      detail: {
        title: "Auto-Reconciliation",
        desc: "Matched transactions, anomaly detection, audit logs.",
      },
    },
  ];

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center font-sans">
      {/* Background visual glow behind iPad */}
      <div className="absolute inset-0 bg-[#0048FF]/5 blur-[120px] rounded-full scale-75" />

      {/* iPad Mockup Wrapping the Architecture Visual */}
      <IpadMockup
        orientation="landscape"
        className="w-full max-w-[850px] mt-12"
      >
        <div className="relative w-full h-full bg-[#080810] flex items-center justify-center p-4 overflow-hidden">
          {/* Internal Grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Integrated DEXA System Bar */}
          <div className="absolute top-0 inset-x-0 h-14 border-b border-[#6366F1]/20 bg-[#0A0A14] flex items-center justify-between px-6 z-[40]">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-[#6366F1]/30 flex items-center justify-center bg-[#6366F1]/10">
                <Cpu className="w-4 h-4 text-[#6366F1]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black tracking-[0.2em] text-[#6366F1] uppercase">
                  DEXA Intelligence
                </span>
                <span className="text-[8px] text-[#8A8A93] -mt-0.5 uppercase tracking-tighter">
                  Financial OS Governance
                </span>
              </div>
            </div>

            {/* Live Diagnostic Ticker */}
            <div className="flex-1 max-w-md mx-8 h-6 bg-black/40 border border-white/5 flex items-center px-3 overflow-hidden">
              <div className="flex gap-8 whitespace-nowrap animate-ticker">
                {[
                  "Settlement Cleared",
                  "Audit Log Updated",
                  "Anomaly Check: Pass",
                  "Approval Queue: 0 Pending",
                  "Network Latency: 12ms",
                  "Risk Engine: Stable",
                ].map((msg, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#6366F1]" />
                    <span className="text-[8px] font-mono text-[#8A8A93] uppercase">
                      {msg}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#6366F1] animate-pulse" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider">
                    System Active
                  </span>
                </div>
                <span className="text-[7px] text-[#8A8A93] uppercase font-mono">
                  v3.0.4.FIN
                </span>
              </div>
            </div>
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
            @keyframes ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-ticker {
              animation: ticker 25s linear infinite;
              display: flex;
            }
          `,
            }}
          />

          {/* Money Movement Grid - Integrated Dashboard Layout */}
          <div className="grid grid-cols-12 gap-6 w-full px-8 items-center relative z-10 mt-12 mb-10 h-[calc(100%-100px)]">
            {/* Sources - Left */}
            <div className="col-span-3 flex flex-col gap-2.5">
              <p className="text-[8px] uppercase tracking-[0.2em] text-[#8A8A93] font-bold mb-1">
                Money Sources
              </p>
              {sources.map((s) => (
                <div
                  key={s.id}
                  className="bg-white/[0.04] border border-white/10 p-2 flex items-center gap-2.5 group hover:border-[#0048FF]/40 transition-all"
                >
                  <div className="w-6 h-6 border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:bg-[#0048FF]/10 transition-all">
                    <s.icon className="w-3 h-3 text-[#8A8A93] group-hover:text-[#0048FF]" />
                  </div>
                  <span className="text-[9px] font-medium text-white/50 group-hover:text-white transition-all">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Center Node - Mentor Fintech Core */}
            <div className="col-span-6 relative flex flex-col items-center">
              {/* Connection Lines from Sources */}
              <div className="absolute -left-full w-full h-full pointer-events-none z-0">
                <motion.div
                  animate={{ x: [0, 400], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-1/4 left-0 w-2.5 h-0.5 bg-[#0048FF] shadow-[0_0_12px_#0048FF]"
                />
                <motion.div
                  animate={{ x: [0, 400], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 1,
                    ease: "linear",
                  }}
                  className="absolute top-1/2 left-0 w-2.5 h-0.5 bg-[#6366F1] shadow-[0_0_12px_#6366F1]"
                />
              </div>

              <div className="w-full max-w-[280px] bg-[#11111F] border border-[#0048FF]/40 p-6 rounded-none relative z-10 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0048FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-center">
                  <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center bg-[#0048FF]/15 border border-[#0048FF]/30">
                    <Landmark className="w-5 h-5 text-[#0048FF]" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight uppercase leading-tight">
                    Mentor Fintech Core
                  </h3>
                  <p className="text-[8px] text-[#8A8A93] mt-1.5 tracking-[0.1em] uppercase">
                    Wallets · Payments · Ledgers · Settlement · Intelligence
                  </p>

                  <div className="mt-6 grid grid-cols-4 gap-1.5">
                    {rails.map((rail) => (
                      <motion.div
                        key={rail.id}
                        onHoverStart={() => setHoveredRail(rail)}
                        onHoverEnd={() => setHoveredRail(null)}
                        className={`aspect-square border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${hoveredRail?.id === rail.id ? "bg-[#0048FF]/20 border-[#0048FF]/60" : "bg-white/[0.03] border-white/10"}`}
                      >
                        <rail.icon
                          className={`w-3 ${hoveredRail?.id === rail.id ? "text-[#0048FF]" : "text-white/40"}`}
                        />
                        <span className="text-[7px] font-bold text-white/50 uppercase tracking-tighter">
                          {rail.label.split(" ")[0]}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connection Lines to Destinations */}
              <div className="absolute -right-full w-full h-full pointer-events-none z-0">
                <motion.div
                  animate={{ x: [0, 400], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "linear",
                  }}
                  className="absolute top-1/3 left-0 w-2.5 h-0.5 bg-[#0048FF] shadow-[0_0_12px_#0048FF]"
                />
                <motion.div
                  animate={{ x: [0, 400], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 1.5,
                    ease: "linear",
                  }}
                  className="absolute bottom-1/4 left-0 w-2.5 h-0.5 bg-[#6366F1] shadow-[0_0_12px_#6366F1]"
                />
              </div>
            </div>

            {/* Destinations - Right */}
            <div className="col-span-3 flex flex-col gap-2.5">
              <p className="text-[8px] uppercase tracking-[0.2em] text-[#8A8A93] font-bold mb-1 text-right">
                Money Destinations
              </p>
              {destinations.map((d) => (
                <div
                  key={d.id}
                  className="bg-white/[0.04] border border-white/10 p-2 flex items-center justify-end gap-2.5 group hover:border-[#0048FF]/40 transition-all text-right"
                >
                  <span className="text-[9px] font-medium text-white/50 group-hover:text-white transition-all">
                    {d.label}
                  </span>
                  <div className="w-6 h-6 border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:bg-[#0048FF]/10 transition-all">
                    <d.icon className="w-3 h-3 text-[#8A8A93] group-hover:text-[#0048FF]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Integrated System Status Bar */}
          <div className="absolute bottom-0 inset-x-0 h-10 border-t border-white/5 bg-black/80 backdrop-blur-md flex items-center justify-between px-6 z-[40]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-[7px] text-[#8A8A93] uppercase tracking-[0.15em] font-black">
                  Governance Network
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-3 text-[9px] font-mono">
                {hoveredRail ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-[#6366F1] font-bold">
                      Active Rail:
                    </span>
                    <span className="text-white font-bold">
                      {hoveredRail.label}
                    </span>
                    <span className="text-[#8A8A93] opacity-60">
                      | {hoveredRail.detail.desc}
                    </span>
                  </motion.div>
                ) : (
                  <span className="text-[#8A8A93] animate-pulse">
                    Awaiting System Selection...
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-[7px] text-[#8A8A93] uppercase tracking-widest font-bold">
                  Processed
                </span>
                <span className="text-[9px] text-white font-mono">$1.2B+</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[7px] text-[#8A8A93] uppercase tracking-widest font-bold">
                  Node
                </span>
                <span className="text-[9px] text-[#6366F1] font-mono">
                  FIN-01
                </span>
              </div>
            </div>
          </div>
        </div>
      </IpadMockup>
    </div>
  );
};

function Hero() {
  return (
    <section
      data-testid="fin-hero"
      className="relative bg-[#11111F] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background visual flair */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#0048FF]/[0.05] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#6366F1]/[0.03] blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1720px] mx-auto px-6 md:px-12">
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-sm text-[#8A8A93] hover:text-[#0048FF] transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
          Back to All Solutions
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-6 font-bold tracking-[0.2em] text-[#0048FF]">
                FINTECH INFRASTRUCTURE
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white tracking-tighter leading-[1.05] max-w-xl">
                Fintech Infrastructure for the Movement of Money
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-8 hero-desc">
                Mentor Global builds the financial rails that connect wallets,
                cards, QR payments, payroll, expenses, credit, provider
                receivables, insurance collections, claim disbursements,
                settlement, reconciliation, and embedded finance through one
                governed infrastructure layer.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-6 text-sm sm:text-base text-[#8A8A93] max-w-xl leading-relaxed">
                Mentor Global does not build isolated payment screens. It builds
                financial infrastructure that connects money movement with
                rules, workflows, ledgers, approvals, reporting, and DEXA
                powered intelligence.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="mt-12 flex flex-col sm:flex-row gap-5">
                <Link
                  to="/contact"
                  data-testid="fin-hero-cta"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0048FF] text-white font-bold hover:bg-[#0030CC] transition-all hover:translate-y-[-2px] shadow-[0_10px_30px_rgba(0,72,255,0.3)]"
                >
                  Build Fintech Infrastructure{" "}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/dexa"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white font-bold hover:bg-white/5 transition-all hover:translate-y-[-2px]"
                >
                  Explore DEXA Financial Intelligence
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="left" className="relative">
            <MoneyMovementArchitecture />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section data-testid="fin-problem" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">The Problem</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Financial systems fail when money moves faster than the
            infrastructure behind it.
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {fintechProblems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.03}>
              <div className="bg-white p-5 md:p-6 card-hover h-full">
                <span className="text-[#0048FF] text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm text-[#11111F] font-medium leading-relaxed">
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
      data-testid="fin-stack"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Infrastructure Stack</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            One fintech infrastructure stack. Multiple connected money rails.
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-[1px]">
          {fintechRails.map((rail, idx) => (
            <ScrollReveal key={rail.name} delay={idx * 0.03}>
              <div className="bg-[#11111F] border border-white/10 p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                  <div className="md:w-52 shrink-0">
                    <span className="text-[#0048FF] text-xs font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1">
                      {rail.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {rail.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] text-[#8A8A93] px-2 py-1 border border-white/10 hover:border-[#0048FF]/30 transition-colors"
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
    <section data-testid="fin-rails-visual" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">Connected Money Rails</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-16">
            From disconnected money movement to one financial operating layer
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto w-72 md:w-96 py-5 bg-[#11111F] text-white text-center mb-6">
            <p className="text-sm font-bold">Mentor Fintech Infrastructure</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-px bg-[#11111F]/10 border border-[#11111F]/10">
            {fintechRails.map((rail, i) => (
              <div
                key={rail.name}
                className="p-5 md:p-6 text-center bg-white card-hover flex flex-col items-center justify-center min-h-[100px]"
              >
                <div className="w-2 h-2 bg-[#0048FF] mx-auto mb-3" />
                <p className="text-[10px] font-black uppercase tracking-widest text-[#11111F] leading-tight">
                  {rail.name.replace(" Rail", "")}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="text-xs text-[#666666]">Powered by</span>
            <span className="text-xs font-bold text-[#0048FF]">
              Mentor Innovation
            </span>
            <span className="text-xs text-[#666666]">and</span>
            <span className="text-xs font-bold text-[#0048FF]">DEXA</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhoItServes() {
  return (
    <section
      data-testid="fin-stakeholders"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Stakeholders</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Built for organizations managing complex money flows
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10">
          {fintechStakeholders.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.03}>
              <div className="bg-[#11111F] p-5 card-hover-dark h-full">
                <h3 className="text-xs font-bold text-white mb-2">{s.name}</h3>
                <p className="text-[10px] text-[#8A8A93] mb-1.5">
                  <span className="text-[#0048FF] font-bold">Pain:</span>{" "}
                  {s.pain}
                </p>
                <p className="text-[10px] text-[#8A8A93]">
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

function MoneyJourneys() {
  return (
    <section data-testid="fin-journeys" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Money Journeys</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Financial infrastructure becomes real when every money journey is
            visible
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-4">
          {fintechJourneys.map((j, idx) => (
            <ScrollReveal key={j.role} delay={idx * 0.04}>
              <div className="border border-[#11111F]/10 p-5 md:p-6 card-hover">
                <h3 className="text-sm font-bold text-[#11111F] mb-3">
                  {j.role}
                </h3>
                <div className="flex flex-wrap items-center gap-1.5">
                  {j.steps.map((step, i) => (
                    <span key={step} className="flex items-center gap-1">
                      <span className="text-[11px] px-2 py-1 bg-[#11111F]/[0.03] border border-[#11111F]/10 text-[#11111F] font-medium">
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
      data-testid="fin-modules"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Core Modules</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Modular infrastructure for financial operations
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {fintechModules.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.02}>
              <div className="bg-[#11111F] p-5 md:p-6 card-hover-dark h-full">
                <span className="text-[#0048FF] text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold text-white mt-1.5 mb-2">
                  {m.name}
                </h3>
                <p className="text-[11px] text-[#8A8A93] leading-relaxed">
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

function WalletSection() {
  return (
    <section data-testid="fin-wallet" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Mentor Wallet</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Mentor Wallet, a financial access layer for health fintech
            ecosystems
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-[#11111F]/10">
              {walletCapabilities.map((cap) => (
                <div key={cap} className="bg-white p-4 card-hover">
                  <p className="text-xs text-[#11111F] font-medium">{cap}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="border border-[#11111F]/10 p-6 bg-[#11111F]/[0.02]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-[#11111F]">
                  Mentor Wallet
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-[#0048FF]/10 text-[#0048FF] font-bold">
                  Active
                </span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-xs text-[#666666]">
                    Available Balance
                  </span>
                  <span className="text-lg font-bold text-[#11111F]">
                    PKR 45,000
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#666666]">Health Benefit</span>
                  <span className="text-sm font-bold text-[#0048FF]">
                    PKR 32,000
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#666666]">Expense Wallet</span>
                  <span className="text-sm font-bold text-[#11111F]">
                    PKR 8,000
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#666666]">Payroll Wallet</span>
                  <span className="text-sm font-bold text-[#11111F]">
                    PKR 5,000
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="text-xs py-2 bg-[#0048FF] text-white font-medium">
                  QR Pay
                </button>
                <button className="text-xs py-2 border border-[#11111F]/20 text-[#11111F] font-medium">
                  Mentor Card
                </button>
              </div>
              <div className="mt-4 p-3 border border-[#0048FF]/20 bg-[#0048FF]/5">
                <p className="text-[10px] text-[#0048FF] font-bold mb-1">
                  DEXA
                </p>
                <p className="text-[10px] text-[#666666]">
                  Your OPD benefit has PKR 12,000 remaining this month.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function CardSection() {
  return (
    <section data-testid="fin-card" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Mentor Card</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Mentor Card, controlled spending for benefits, expenses, and
            payments
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-white/10">
              {cardCapabilities.map((cap) => (
                <div key={cap} className="bg-[#11111F] p-4 card-hover-dark">
                  <p className="text-xs text-white/80 font-medium">{cap}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-gradient-to-br from-[#11111F] to-[#0048FF]/20 border border-[#0048FF]/30 p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[10px] font-bold text-[#0048FF]">
                MENTOR
              </div>
              <div className="mb-12">
                <div className="w-10 h-7 border border-white/30 rounded-sm" />
              </div>
              <p className="text-white/60 text-xs tracking-[0.3em] mb-1">
                **** **** **** 4291
              </p>
              <p className="text-white text-sm font-bold">
                Health Benefit Card
              </p>
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-white/40">Balance</p>
                  <p className="text-white font-bold">PKR 32,000</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/40">Limit</p>
                  <p className="text-white/80 text-sm">PKR 50,000</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function HealthcareUseCasesSection() {
  return (
    <section
      data-testid="fin-healthcare-use-cases"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Healthcare Fintech</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Financial infrastructure for healthcare access and administration
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#11111F]/10">
          {healthcareUseCases.map((uc, i) => (
            <ScrollReveal key={uc.name} delay={i * 0.03}>
              <div className="bg-white p-5 card-hover h-full">
                <h3 className="text-sm font-bold text-[#11111F] mb-2">
                  {uc.name}
                </h3>
                <div className="space-y-1 text-[11px] text-[#666666]">
                  <p>
                    <span className="text-[#0048FF] font-bold">Who:</span>{" "}
                    {uc.who}
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

function InsuranceUseCasesSection() {
  return (
    <section
      data-testid="fin-insurance-use-cases"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Insurance Fintech</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Financial infrastructure for insurance collections, payouts, and
            commissions
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {insuranceUseCases.map((uc, i) => (
            <ScrollReveal key={uc.name} delay={i * 0.03}>
              <div className="bg-[#11111F] p-5 card-hover-dark h-full">
                <h3 className="text-xs font-bold text-white mb-2">{uc.name}</h3>
                <div className="space-y-1 text-[10px] text-[#8A8A93]">
                  <p>
                    <span className="text-[#0048FF] font-bold">Who:</span>{" "}
                    {uc.who}
                  </p>
                  <p>
                    <span className="text-[#0048FF] font-bold">Rail:</span>{" "}
                    {uc.rail}
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

function DexaIntelligence() {
  return (
    <section data-testid="fin-dexa" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">DEXA Intelligence</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            DEXA is the intelligence layer inside financial infrastructure
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 section-desc max-w-3xl">
            DEXA turns financial infrastructure from a transaction system into a
            guided operating layer. DEXA does not approve payments
            independently. DEXA does not bypass finance controls. DEXA does not
            replace finance teams. DEXA does not make unsupported lending
            decisions. DEXA operates inside approved rules, limits, workflows,
            permissions, finance logic, credit rules, payroll rules, expense
            rules, settlement rules, and escalation boundaries.
          </p>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[#11111F]/10">
          {dexaFinanceCapabilities.map((cap, i) => (
            <ScrollReveal key={cap.role} delay={i * 0.05}>
              <div className="bg-white p-5 card-hover h-full">
                <p className="text-sm font-bold text-[#0048FF] mb-3">
                  {cap.role}
                </p>
                <div className="space-y-1.5">
                  {cap.items.map((item) => (
                    <p key={item} className="text-[11px] text-[#666666]">
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
      data-testid="fin-dexa-scenarios"
      className="bg-[#0B0B14] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0048FF]/[0.02]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">DEXA in Action</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
            From financial confusion to governed next action
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative mt-8">
            <MacbookMockup>
              <ChatSimulation scenarios={dexaFinanceScenarios} />
            </MacbookMockup>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">
                Governed Financial Reasoning
              </h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">
                DEXA verifies wallet balances, settlement schedules, and expense
                policies before recommending any financial action.
              </p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">
                Infrastructure Integration
              </h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">
                DEXA operates directly inside your financial rails, linking to
                ledgers, payroll files, and reconciliation engines.
              </p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">
                Human in the Loop
              </h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">
                Critical financial exceptions are routed to finance managers and
                controllers with full diagnostic context.
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
    <section data-testid="fin-architecture" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Architecture</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Built as financial infrastructure, not payment screens
          </h2>
        </ScrollReveal>
        <div className="mt-16 border border-[#11111F]/10">
          {fintechArchitectureLayers.map((layer, idx) => (
            <ScrollReveal key={layer.name} delay={idx * 0.03}>
              <div
                className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-[#11111F]/10" : ""}`}
              >
                <div className="md:col-span-3 p-4 md:p-5 border-b md:border-b-0 md:border-r border-[#11111F]/10 flex items-center">
                  <div>
                    <span className="text-[#0048FF] text-xs font-bold">
                      L{idx + 1}
                    </span>
                    <p className="text-xs font-bold text-[#11111F] mt-0.5">
                      {layer.name}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-9 p-4 md:p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] px-2 py-0.5 border border-[#11111F]/10 text-[#666666]"
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
      data-testid="fin-deployment"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Deployment</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Deploy fintech infrastructure according to your operating model
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10">
          {fintechDeploymentModels.map((d, i) => (
            <ScrollReveal key={d.name} delay={i * 0.03}>
              <div className="bg-[#11111F] p-5 card-hover-dark h-full">
                <h3 className="text-xs font-bold text-white mb-2">{d.name}</h3>
                <p className="text-[10px] text-[#8A8A93] leading-relaxed">
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
    <section data-testid="fin-use-cases" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Use Cases</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Fintech infrastructure that can power multiple business models
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#11111F]/10">
          {fintechUseCases.map((uc, i) => (
            <ScrollReveal key={uc.name} delay={i * 0.02}>
              <div className="bg-white p-5 card-hover h-full">
                <h3 className="text-sm font-bold text-[#11111F] mb-2">
                  {uc.name}
                </h3>
                <div className="space-y-1 text-[11px] text-[#666666]">
                  <p>
                    <span className="text-[#0048FF] font-bold">Who:</span>{" "}
                    {uc.who}
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
    <section data-testid="fin-outcomes" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Outcomes</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            What fintech infrastructure should deliver
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {fintechOutcomes.map((o, i) => (
            <ScrollReveal key={o} delay={i * 0.03}>
              <div className="bg-[#11111F] p-5 card-hover-dark h-full">
                <div className="w-5 h-5 border border-[#0048FF]/30 flex items-center justify-center mb-2">
                  <div className="w-1.5 h-1.5 bg-[#0048FF]" />
                </div>
                <p className="text-sm text-white font-medium">{o}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-xs text-[#8A8A93]/50 max-w-3xl">
            Designed to improve visibility, support faster reconciliation,
            reduce manual finance coordination, strengthen governance, and
            support embedded finance deployment. These do not represent
            unsupported guarantees.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section data-testid="fin-final-cta" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl mx-auto">
            Build fintech infrastructure that connects wallets, cards, payroll,
            expenses, payments, credit, settlement, and intelligence
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">
            Mentor Global helps organizations move from disconnected financial
            workflows to connected fintech infrastructure powered by Mentor
            Wallet, Mentor Card, QR payments, payroll rails, expense controls,
            ledgers, settlements, reconciliation, credit workflows, embedded
            APIs, and DEXA financial intelligence.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="fin-final-build-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Build Fintech Infrastructure <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="fin-final-talk-cta"
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

export default function FintechInfrastructure() {
  return (
    <main data-testid="fintech-infrastructure-page">
      <Hero />
      <ProblemSection />
      <InfrastructureStack />
      <ConnectedRailsVisual />
      <WhoItServes />
      <MoneyJourneys />
      <CoreModules />
      <WalletSection />
      <CardSection />
      <HealthcareUseCasesSection />
      <InsuranceUseCasesSection />
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
