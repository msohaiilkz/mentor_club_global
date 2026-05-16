import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Cpu,
  Users,
  CheckSquare,
  Layers,
  UserPlus,
  GraduationCap,
  Wallet,
  FileCheck,
  BarChart3,
  Activity,
  Zap,
  TrendingUp,
  FileText,
  AlertCircle,
  Briefcase,
} from "lucide-react";
import { ScrollReveal } from "../../components/shared/ScrollReveal";
import { ChatSimulation } from "../../components/shared/ChatSimulation";
import { MacbookMockup } from "../../components/shared/MacbookMockup";
import { IpadMockup } from "../../components/shared/IpadMockup";
import dashboardImg from "../../assets/dashboard.png";
import {
  osProblems,
  osRails,
  osStakeholders,
  osJourneys,
  osModules,
  growthOSFlow,
  dexaOSCapabilities,
  dexaOSScenarios,
  osArchitectureLayers,
  osDeploymentModels,
  osUseCases,
  osOutcomes,
} from "../../data/company-os";

function Hero() {
  return (
    <section
      data-testid="os-hero"
      className="relative bg-[#0B0B14] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background visual flair */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#0048FF]/[0.05] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#8B5CF6]/[0.03] blur-[140px] pointer-events-none" />

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
                COMPANY OPERATING INFRASTRUCTURE
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white tracking-tighter leading-[1.05] max-w-xl">
                Company Operating Infrastructure for Execution, Growth,
                Intelligence, Finance, and Control
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-8 hero-desc">
                Deploy one AI enabled operating system that connects revenue,
                teams, tasks, projects, HR, training, finance, Growth OS,
                leadership visibility, and DEXA intelligence into one execution
                environment.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-6 text-base text-[#8A8A93] max-w-xl leading-relaxed">
                Mentor OS replaces fragmented CRMs, spreadsheets, manual
                trackers, disconnected HR tools, finance systems, training
                files, and informal reporting with one structured operating
                infrastructure.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-12 flex flex-col sm:flex-row gap-5">
                <Link
                  to="/contact"
                  data-testid="os-hero-cta"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0048FF] text-white font-bold hover:bg-[#0030CC] transition-all hover:translate-y-[-2px] shadow-[0_10px_30px_rgba(0,72,255,0.3)]"
                >
                  Build Your Operating Infrastructure{" "}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="#growth-os"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white font-bold hover:bg-white/5 transition-all hover:translate-y-[-2px]"
                >
                  Explore Growth OS
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="left">
            <IpadMockup
              orientation="landscape"
              aspect="aspect-[17/10]"
              className="w-full max-w-[850px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
            >
              <div className="relative w-full h-full bg-white overflow-hidden">
                <img
                  src={dashboardImg}
                  alt="Mentor OS Dashboard"
                  className="w-fit h-fit object-cover"
                  style={{ objectPosition: "64% top" }}
                />
              </div>
            </IpadMockup>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section data-testid="os-problem" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Companies do not fail only because of strategy. They fail because
            execution is invisible.
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {osProblems.map((p, i) => (
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
      data-testid="os-stack"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Operating Stack</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            One company operating stack. Multiple execution rails.
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-[1px]">
          {osRails.map((rail, idx) => (
            <ScrollReveal key={rail.name} delay={idx * 0.02}>
              <div className="bg-[#11111F] border border-white/10 p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                  <div className="md:w-48 shrink-0">
                    <span className="text-[#0048FF] text-xs font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xs font-bold text-white mt-1">
                      {rail.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {rail.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] text-[#8A8A93] px-2 py-0.5 border border-white/10"
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

function ConnectedLoop() {
  const loopSteps = [
    "Strategy",
    "Targets",
    "Leads",
    "Opportunities",
    "Revenue",
    "Onboarding",
    "Execution",
    "Delivery",
    "Finance",
    "Intelligence",
    "Growth",
    "Leadership decision",
  ];
  return (
    <section data-testid="os-loop" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">Operating Loop</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-16">
            From strategy to execution to financial truth
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto w-48 md:w-64 py-4 bg-[#11111F] text-white text-center mb-6">
            <p className="text-sm font-bold">Mentor OS</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-1">
            {loopSteps.map((step, i) => (
              <span key={step} className="flex items-center gap-1">
                <span className="text-[10px] px-2.5 py-1.5 border border-[#11111F]/10 text-[#11111F] font-medium bg-white">
                  {step}
                </span>
                {i < loopSteps.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-[#0048FF]" />
                )}
              </span>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#666666]">
            Powered by{" "}
            <span className="font-bold text-[#0048FF]">Mentor Innovation</span>{" "}
            and <span className="font-bold text-[#0048FF]">DEXA</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhoItServes() {
  return (
    <section
      data-testid="os-stakeholders"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Who It Serves</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Built for forward looking companies that need system driven
            execution
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10">
          {osStakeholders.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.03}>
              <div className="bg-[#11111F] p-5 card-hover-dark h-full">
                <h3 className="text-xs font-bold text-white mb-2">{s.name}</h3>
                <p className="text-[10px] text-[#8A8A93] mb-1">
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

function Journeys() {
  return (
    <section data-testid="os-journeys" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Stakeholder Journeys</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Company operating infrastructure becomes real when every user has a
            clear journey
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-4">
          {osJourneys.map((j, idx) => (
            <ScrollReveal key={j.role} delay={idx * 0.04}>
              <div className="border border-[#11111F]/10 p-5 md:p-6 card-hover">
                <h3 className="text-sm font-bold text-[#11111F] mb-3">
                  {j.role}
                </h3>
                <div className="flex flex-wrap items-center gap-1">
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
      data-testid="os-modules"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Core Modules</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Modular infrastructure for company operations
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10">
          {osModules.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.02}>
              <div className="bg-[#11111F] p-5 md:p-6 card-hover-dark h-full">
                <span className="text-[#0048FF] text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold text-white mt-1 mb-2">
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

function GrowthOS() {
  return (
    <section
      data-testid="os-growth"
      id="growth-os"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Growth OS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Turn personal ambition into measurable company growth
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 section-desc max-w-3xl">
            Growth OS converts employee goals into performance math. It helps
            employees understand what they must produce to earn more, grow
            faster, get promoted, or achieve a tangible personal goal.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal delay={0.15}>
            <div className="border border-[#11111F]/10">
              {growthOSFlow.map((step, i) => (
                <div
                  key={step}
                  className={`p-4 flex items-center gap-3 ${i > 0 ? "border-t border-[#11111F]/10" : ""}`}
                >
                  <span className="text-[#0048FF] text-xs font-bold w-6">
                    {i + 1}
                  </span>
                  <p className="text-xs text-[#11111F] font-medium">{step}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="border border-[#11111F]/10 p-6 bg-[#11111F]/[0.02]">
              <p className="text-xs font-bold text-[#0048FF] mb-3">
                Sample Scenario
              </p>
              <p className="text-sm font-bold text-[#11111F] mb-4">
                Employee goal: I want to earn extra 100,000 this quarter.
              </p>
              <div className="space-y-2 text-xs text-[#666666]">
                <p>
                  <span className="font-bold text-[#11111F]">
                    Required margin:
                  </span>{" "}
                  1,000,000
                </p>
                <p>
                  <span className="font-bold text-[#11111F]">
                    Required sales:
                  </span>{" "}
                  10,000,000
                </p>
                <p>
                  <span className="font-bold text-[#11111F]">
                    Required meetings:
                  </span>{" "}
                  50
                </p>
                <p>
                  <span className="font-bold text-[#11111F]">
                    Required calls:
                  </span>{" "}
                  200
                </p>
                <p>
                  <span className="font-bold text-[#11111F]">
                    Daily action plan:
                  </span>{" "}
                  10 calls, 3 follow ups, 1 meeting target
                </p>
                <p>
                  <span className="font-bold text-[#0048FF]">AI coaching:</span>{" "}
                  focus on warm opportunities and improve proposal follow up
                  rate
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function DexaIntelligence() {
  return (
    <section
      data-testid="os-dexa"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 blue-glow-subtle" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">DEXA Intelligence</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            DEXA is the intelligence layer inside Mentor OS
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10">
          {dexaOSCapabilities.map((cap, i) => (
            <ScrollReveal key={cap.role} delay={i * 0.05}>
              <div className="bg-[#11111F] p-5 card-hover-dark h-full">
                <p className="text-sm font-bold text-[#0048FF] mb-3">
                  {cap.role}
                </p>
                <div className="space-y-1.5">
                  {cap.items.map((item) => (
                    <p key={item} className="text-[11px] text-[#8A8A93]">
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
      data-testid="os-scenarios"
      className="bg-[#0B0B14] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0048FF]/[0.02]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">DEXA in Action</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
            From operating confusion to governed next action
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative mt-8">
            <MacbookMockup>
              <ChatSimulation scenarios={dexaOSScenarios} />
            </MacbookMockup>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section
      data-testid="os-architecture"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Architecture</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Built as company operating infrastructure, not disconnected business
            software
          </h2>
        </ScrollReveal>
        <div className="mt-16 border border-white/10">
          {osArchitectureLayers.map((layer, idx) => (
            <ScrollReveal key={layer.name} delay={idx * 0.03}>
              <div
                className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-white/10" : ""}`}
              >
                <div className="md:col-span-3 p-4 border-b md:border-b-0 md:border-r border-white/10">
                  <span className="text-[#0048FF] text-xs font-bold">
                    L{idx + 1}
                  </span>
                  <p className="text-xs font-bold text-white mt-0.5">
                    {layer.name}
                  </p>
                </div>
                <div className="md:col-span-9 p-4">
                  <div className="flex flex-wrap gap-1">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] px-2 py-0.5 border border-white/10 text-[#8A8A93]"
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
    <section data-testid="os-deployment" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Deployment</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
            Deploy company operating infrastructure according to your operating
            model
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {osDeploymentModels.map((d, i) => (
            <ScrollReveal key={d.name} delay={i * 0.02}>
              <div className="bg-white p-5 card-hover h-full">
                <h3 className="text-xs font-bold text-[#11111F] mb-2">
                  {d.name}
                </h3>
                <p className="text-[10px] text-[#666666] leading-relaxed">
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
    <section
      data-testid="os-use-cases"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Use Cases</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Company operating infrastructure that can power multiple business
            models
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10">
          {osUseCases.map((uc, i) => (
            <ScrollReveal key={uc.name} delay={i * 0.02}>
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
    <section data-testid="os-outcomes" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Outcomes</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
            What company operating infrastructure should deliver
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {osOutcomes.map((o, i) => (
            <ScrollReveal key={o} delay={i * 0.02}>
              <div className="bg-white p-5 card-hover h-full">
                <div className="w-5 h-5 border border-[#0048FF]/30 flex items-center justify-center mb-2">
                  <div className="w-1.5 h-1.5 bg-[#0048FF]" />
                </div>
                <p className="text-sm text-[#11111F] font-medium">{o}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-xs text-[#666666]/60 max-w-3xl">
            Designed to improve visibility, support execution discipline, reduce
            manual reporting dependency, strengthen governance, and support
            system driven performance. These do not represent unsupported
            claims.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      data-testid="os-final-cta"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.05] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl mx-auto">
            Build operating infrastructure that connects strategy, execution,
            people, finance, growth, and intelligence
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-base text-[#8A8A93] max-w-2xl mx-auto leading-relaxed">
            Mentor Global helps companies move from fragmented tools and manual
            reporting to one AI enabled operating infrastructure powered by CRM,
            PRM, task execution, Team App, Work Intelligence, Training, HR,
            Finance ERP, Growth OS, integrations, governance, and DEXA
            leadership intelligence.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="os-final-build-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Build Your Operating Infrastructure{" "}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="os-final-talk-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Talk to Mentor Global <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function CompanyOperatingInfrastructure() {
  return (
    <main data-testid="company-operating-infrastructure-page">
      <Hero />
      <ProblemSection />
      <InfrastructureStack />
      <ConnectedLoop />
      <WhoItServes />
      <Journeys />
      <CoreModules />
      <GrowthOS />
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
