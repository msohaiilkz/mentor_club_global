import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Building2,
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
} from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { DexaHeroChat } from "../components/shared/DexaHeroChat";
import { ChatSimulation } from "../components/shared/ChatSimulation";
import { DexaInMotion } from "../components/shared/DexaInMotion";
import { MacbookMockup } from "../components/shared/MacbookMockup";
import { IpadMockup } from "../components/shared/IpadMockup";
import {
  dexaProblems,
  dexaWhatIs,
  dexaWhatIsNot,
  dexaThinkingChain,
  dexaOperatingStages,
  dexaPillarPanels,
  dexaChannels,
  dexaInterfaceTypes,
  dexaIntelligenceLayers,
  dexaAgentGroups,
  governanceCards,
  approvalQueues,
  dexaFullScenarios,
  dexaArchitectureLayers,
  dexaDeploymentModels,
  dexaUseCases,
  dexaOutcomes,
} from "../data/dexa-page";

function Hero() {
  return (
    <section
      data-testid="dexa-hero"
      className="relative bg-[#0B0B14] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/3 w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#0048FF]/[0.08] blur-[160px]" />
      <div className="relative max-w-[1720px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-6">Intelligence Processing Engine</p>
              <h1 className="text-[38px] sm:text-[35px] md:text-[48px] lg:text-[54px] xl:text-[54px] font-bold text-white tracking-tighter leading-[1.05]">
                DEXA, The Intelligence Processing Engine Behind Mentor Global
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-8 hero-desc max-w-2xl text-lg md:text-xl">
                DEXA understands context, retrieves approved knowledge, applies
                rules, coordinates agents, triggers workflows, requests human
                approval, monitors execution, and turns healthcare, insurance,
                fintech, AI, and company operating infrastructure into
                intelligent systems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 text-base text-white/50 max-w-xl italic">
                DEXA is not the chat window. DEXA is the intelligence layer
                behind the action.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  data-testid="dexa-hero-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#0048FF]/20"
                >
                  Explore DEXA <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#dexa-video"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                >
                  Watch DEXA in Action
                </a>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="left">
            <div className="relative h-[420px] sm:h-[520px] lg:h-[650px]">
              <DexaHeroChat />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function WhatDexaIs() {
  return (
    <section data-testid="dexa-what-is" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">What DEXA Is</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight max-w-4xl">
            DEXA is the intelligence layer behind the action
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 section-desc max-w-3xl">
            DEXA receives information from people, portals, apps, documents,
            workflows, APIs, dashboards, and system events. It understands the
            meaning of that information, checks the user's role, retrieves
            approved knowledge, applies business rules, reasons over the
            context, and produces the next best action.
          </p>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {dexaWhatIs.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.04}>
              <div className="bg-white p-5 md:p-6 card-hover h-full">
                <span className="text-[#0048FF] text-base font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-[#11111F] mt-2 mb-2">
                  {c.title}
                </h3>
                <p className="text-base text-[#666666] leading-relaxed">
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

function WhatDexaIsNot() {
  return (
    <section
      data-testid="dexa-what-is-not"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">What DEXA Is Not</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight">
            DEXA is bigger than a chatbot
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {dexaWhatIsNot.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.05}>
              <div className="bg-[#11111F] p-6 card-hover-dark h-full">
                <h3 className="text-xl font-bold text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-base text-[#8A8A93] leading-relaxed">
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

function ProblemSection() {
  return (
    <section data-testid="dexa-problems" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">The Problem</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight max-w-4xl">
            Infrastructure without intelligence still depends on humans to
            connect the dots
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#11111F]/10">
          {dexaProblems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.03}>
              <div className="bg-white p-5 card-hover h-full">
                <span className="text-[#0048FF] text-base font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-lg text-[#11111F] font-medium leading-relaxed">
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

function HowDexaThinks() {
  return (
    <section
      data-testid="dexa-thinking"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 blue-glow-subtle" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Processing Chain</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight">
            How DEXA turns a question into governed action
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-1.5">
            {dexaThinkingChain.map((step, i) => (
              <span key={step} className="flex items-center gap-1.5">
                <span className="text-base px-3 py-2 bg-white/5 border border-white/10 text-white font-medium">
                  {step}
                </span>
                {i < dexaThinkingChain.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-[#0048FF]" />
                )}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function OperatingModel() {
  return (
    <section
      data-testid="dexa-operating-model"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Operating Model</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight">
            From information to action
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {dexaOperatingStages.map((s, i) => (
            <ScrollReveal key={s.stage} delay={i * 0.08}>
              <div className="bg-white p-6 md:p-8 card-hover h-full">
                <span className="text-[#0048FF] text-3xl font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-bold text-[#11111F] mt-3 mb-3">
                  {s.stage}
                </h3>
                <p className="text-base text-[#666666] leading-relaxed">
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

function DexaAcrossPillars() {
  return (
    <section
      data-testid="dexa-pillars"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#0048FF]/[0.04] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Across Infrastructure</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight max-w-4xl">
            One intelligence engine across five infrastructure layers
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-6">
          {dexaPillarPanels.map((pillar, idx) => (
            <ScrollReveal key={pillar.name} delay={idx * 0.05}>
              <div className="border border-white/10 p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  {pillar.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.items.map((item) => (
                        <span
                          key={item}
                          className="text-base text-[#8A8A93] px-2.5 py-1 border border-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border border-[#0048FF]/20 bg-[#0048FF]/5 p-4">
                    <p className="text-sm text-[#0048FF] font-bold mb-1">
                      Example
                    </p>
                    <p className="text-base text-white/70 italic mb-2">
                      {pillar.example.question}
                    </p>
                    <p className="text-base text-[#8A8A93]">
                      {pillar.example.context}
                    </p>
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

const terminalSequences = [
  // Sequence 1: Boot & System Ready
  { text: "> Initializing DEXA Engine v3.0...", type: "action" },
  {
    text: "  [Thinking] I need to establish secure websocket connections to all active portals...",
    type: "thought",
  },
  { text: "[OK] connected: portal.mentor.global", type: "success" },
  { text: "[OK] connected: employee.app", type: "success" },
  { text: "[OK] connected: provider.terminal", type: "success" },
  {
    text: "  [Thinking] Context loaded. Now allocating resources to agentic pods...",
    type: "thought",
  },
  { text: "> Synchronizing 24 active Agentic Pods...", type: "action" },
  { text: "[OK] Pods synchronized and ready.", type: "success" },
  {
    text: "  [Thinking] Before accepting payloads, I must enforce RBAC and governance rules...",
    type: "thought",
  },
  { text: "> Configuring governance policies...", type: "action" },
  { text: "[SECURE] human-in-the-loop active", type: "success" },
  { text: "> System Ready. Awaiting payload.", type: "prompt" },

  // Sequence 2: Processing a Claim
  {
    text: "> Incoming Payload: [Type: Pre-Auth] [Source: Employee App]",
    type: "action",
  },
  {
    text: "  [Thinking] Checking employee eligibility and analyzing policy coverage...",
    type: "thought",
  },
  { text: "> Querying Policy Rules Engine...", type: "action" },
  {
    text: "[OK] Coverage verified. Outpatient deductible met.",
    type: "success",
  },
  {
    text: "  [Thinking] I need to route this to the nearest Tier-1 provider network.",
    type: "thought",
  },
  { text: "> Pinging provider APIs for availability...", type: "action" },
  { text: "[OK] Match found: City General Hospital.", type: "success" },
  { text: "> Generating authorization token...", type: "action" },
  { text: "[SECURE] Auth Token 8492-X routed to user.", type: "success" },
  { text: "> Transaction Complete. Awaiting payload.", type: "prompt" },

  // Sequence 3: Analyzing Risk
  {
    text: "> Incoming Payload: [Type: Risk Analysis] [Source: CFO Dashboard]",
    type: "action",
  },
  {
    text: "  [Thinking] Gathering utilization variance data for Q3...",
    type: "thought",
  },
  {
    text: "> Executing analytical query on Mentor Data Lake...",
    type: "action",
  },
  { text: "[OK] 14,203 claims processed in 0.4s", type: "success" },
  {
    text: "  [Thinking] Anomalies detected in unbundled billing from 3 specific clinics.",
    type: "thought",
  },
  { text: "> Flagging clinics for TPA medical review...", type: "action" },
  {
    text: "[SECURE] Added to human-in-the-loop review queue.",
    type: "success",
  },
  {
    text: "  [Thinking] Generating summary insight for CFO...",
    type: "thought",
  },
  { text: "> Streaming dashboard widget updates...", type: "action" },
  { text: "> Transaction Complete. Awaiting payload.", type: "prompt" },
];

function DexaCodeTerminal() {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const currentLine =
      terminalSequences[currentLineIndex % terminalSequences.length];

    if (currentCharIndex < currentLine.text.length) {
      const timer = setTimeout(
        () => {
          setCurrentCharIndex((prev) => prev + 1);
        },
        Math.random() * 15 + 10,
      );
      return () => clearTimeout(timer);
    } else {
      const isPrompt = currentLine.type === "prompt";
      const isThought = currentLine.type === "thought";

      const timer = setTimeout(
        () => {
          setLines((prev) => {
            const newLines = [...prev, currentLine];
            // Keep only the last 35 lines to prevent DOM bloat
            if (newLines.length > 35)
              return newLines.slice(newLines.length - 35);
            return newLines;
          });
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        },
        isPrompt ? 2500 : isThought ? 800 : 400,
      ); // Pause longer on prompts

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight;
      });
    }
  }, [lines, currentCharIndex]);

  const getStyleForType = (type) => {
    switch (type) {
      case "prompt":
        return "text-white font-semibold mb-4 mt-2"; // Added margin for separation
      case "thought":
        return "text-[#8A8A93] italic";
      case "action":
        return "text-[#0048FF]";
      case "success":
        return "text-[#00E5FF]";
      default:
        return "text-[#0048FF]";
    }
  };

  const activeLine =
    terminalSequences[currentLineIndex % terminalSequences.length];

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-[#0048FF] rounded-[2rem] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
      <div className="w-72 h-80 rounded-[2rem] bg-[#050508] border border-[#0048FF]/30 shadow-[0_0_50px_rgba(0,72,255,0.15)] flex flex-col relative overflow-hidden">
        {/* Terminal Header */}
        <div className="h-12 border-b border-white/5 flex items-center px-6 bg-white/[0.02] shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-4 text-sm text-white/40 font-mono tracking-widest uppercase">
            dexa_reasoning_engine
          </span>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-6 font-mono text-sm leading-relaxed relative flex flex-col min-h-0">
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto scrollbar-hide space-y-2 pb-4"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%)",
            }}
          >
            <div className="h-2" />
            {lines.map((line, i) => (
              <div key={i} className={getStyleForType(line.type)}>
                {line.text}
              </div>
            ))}

            <div
              className={`flex items-center ${getStyleForType(activeLine.type)}`}
            >
              <span>{activeLine.text.substring(0, currentCharIndex)}</span>
              <span className="inline-block w-1.5 h-3 bg-[#0048FF] ml-1 animate-pulse shrink-0" />
            </div>

            <div className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

const channelsData = [
  {
    name: "Website DEXA",
    useCase:
      "Helps visitors explore solutions, understand offerings, and route inquiries.",
    tag: "Visitor",
    icon: Globe,
    position: "left",
  },
  {
    name: "Corporate Portal DEXA",
    useCase:
      "Helps HR and leadership understand claims, utilization, employee risk, and benefit strategy.",
    tag: "HR",
    icon: Building2,
    position: "left",
  },
  {
    name: "Employee App DEXA",
    useCase:
      "Guides employees on benefits, eligibility, claims, care access, and reimbursements.",
    tag: "Employee",
    icon: Smartphone,
    position: "left",
  },
  {
    name: "Provider Portal DEXA",
    useCase:
      "Assists providers with approvals, eligibility, billing rules, POS queries, and service workflows.",
    tag: "Provider",
    icon: Stethoscope,
    position: "left",
  },
  {
    name: "Insurance Portal DEXA",
    useCase:
      "Supports underwriting, policy logic, claims review, exclusions, and renewals.",
    tag: "Insurer",
    icon: ShieldCheck,
    position: "right",
  },
  {
    name: "Finance Portal DEXA",
    useCase:
      "Helps with settlements, reconciliation, reimbursements, payment flows, and cost visibility.",
    tag: "Finance",
    icon: PieChart,
    position: "right",
  },
  {
    name: "Operating System DEXA",
    useCase:
      "Supports internal teams with tasks, workflows, approvals, monitoring, and execution.",
    tag: "Operations",
    icon: Command,
    position: "right",
  },
  {
    name: "Admin Console DEXA",
    useCase:
      "Enables governance, permissions, configuration, audit trails, and platform control.",
    tag: "Admin",
    icon: Settings,
    position: "right",
  },
];

const interfaceSurfaces = [
  {
    id: "conversational",
    title: "Conversational Surface",
    desc: "Ask, clarify, explain, and guide.",
    icon: Globe,
    preview: (
      <div className="p-4 bg-[#0A0A0F] rounded-xl border border-white/5 w-full space-y-3">
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-white/10 shrink-0" />
          <div className="bg-white/5 rounded-2xl rounded-tl-none p-2 border border-white/10">
            <p className="text-sm text-white/80 leading-tight italic">
              "What is our organization's health risk this quarter?"
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="bg-[#0048FF]/10 rounded-2xl rounded-tr-none p-2 border border-[#0048FF]/20 max-w-[80%]">
            <p className="text-sm text-[#00E5FF] leading-tight">
              Health risk score is 72/100. Drivers: hypertension indicators,
              chronic medication use, low screening participation.
            </p>
          </div>
          <div className="w-6 h-6 rounded-full bg-[#0048FF]/20 shrink-0 flex items-center justify-center border border-[#0048FF]/30">
            <Cpu className="w-3 h-3 text-[#0048FF]" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "workflow",
    title: "Workflow Surface",
    desc: "Move users through claims, onboarding, approvals, benefit setup, and service journeys.",
    icon: Command,
    preview: (
      <div className="p-4 bg-[#0A0A0F] rounded-xl border border-white/5 w-full space-y-2">
        {[
          { label: "Claim submitted", status: "complete" },
          { label: "Validation", status: "complete" },
          { label: "Medical review", status: "active" },
          { label: "Approval", status: "pending" },
          { label: "Settlement", status: "pending" },
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${step.status === "complete" ? "bg-[#00E5FF]" : step.status === "active" ? "bg-[#0048FF] animate-pulse" : "bg-white/10"}`}
            />
            <span
              className={`text-base ${step.status === "pending" ? "text-white/20" : "text-white/70"}`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "decision",
    title: "Decision Surface",
    desc: "Recommend, score, flag, prioritize, and suggest the next best action.",
    icon: ShieldCheck,
    preview: (
      <div className="p-4 bg-[#0A0A0F] rounded-xl border border-white/5 w-full space-y-3">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-sm text-white/40 uppercase tracking-wider">
            Recommendation
          </span>
          <span className="text-sm font-bold text-[#00E5FF]">
            High Confidence
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/5 p-2 rounded-lg border border-white/10">
            <p className="text-sm text-white/40 mb-1">Risk Level</p>
            <p className="text-base text-amber-400 font-bold">
              Moderate High
            </p>
          </div>
          <div className="bg-white/5 p-2 rounded-lg border border-white/10">
            <p className="text-sm text-white/40 mb-1">Confidence</p>
            <p className="text-base text-white/80 font-bold">94%</p>
          </div>
        </div>
        <div className="bg-[#0048FF]/10 p-2 rounded-lg border border-[#0048FF]/20">
          <p className="text-sm text-[#0048FF] font-bold mb-1 uppercase tracking-wider">
            Next Action
          </p>
          <p className="text-base text-white font-medium">
            Launch 90-day preventive screening program
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "document",
    title: "Document Surface",
    desc: "Read, extract, validate, summarize, and classify claims, invoices, KYC, policies, and medical documents.",
    icon: Smartphone,
    preview: (
      <div className="p-4 bg-[#0A0A0F] rounded-xl border border-white/5 w-full relative overflow-hidden h-full">
        <div className="absolute inset-x-0 top-0 h-px bg-[#0048FF] shadow-[0_0_10px_#0048FF] animate-scan z-20" />
        <div className="space-y-2 relative z-10">
          <div className="flex items-center gap-2 text-sm text-[#00E5FF]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> Invoice
            uploaded
          </div>
          <div className="flex items-center gap-2 text-sm text-[#00E5FF]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />{" "}
            Prescription detected
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" /> Amount
            extracted
          </div>
          <div className="flex items-center gap-2 text-sm text-amber-400">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Mismatch
            flagged
          </div>
          <div className="flex items-center gap-2 text-sm text-white/30">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" /> Policy rule
            checked
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "dashboard",
    title: "Dashboard Surface",
    desc: "Reveal patterns, health risks, cost trends, utilization, alerts, and executive insights.",
    icon: PieChart,
    preview: (
      <div className="p-4 bg-[#0A0A0F] rounded-xl border border-white/5 w-full grid grid-cols-2 gap-3 h-full items-center">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-white/40 uppercase mb-0.5">
              Health Score
            </p>
            <p className="text-lg font-bold text-[#00E5FF]">72</p>
          </div>
          <div>
            <p className="text-sm text-white/40 uppercase mb-0.5">
              Claims Trend
            </p>
            <p className="text-base font-bold text-red-400">+14%</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-white/40 uppercase mb-0.5">
              High Risk
            </p>
            <p className="text-base font-bold text-white">18%</p>
          </div>
          <div>
            <p className="text-sm text-white/40 uppercase mb-0.5">
              Top Driver
            </p>
            <p className="text-base text-white/80 leading-tight">
              Chronic OPD
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "action",
    title: "Action Surface",
    desc: "Trigger tasks, route approvals, generate reports, notify users, create tickets, and update workflows.",
    icon: Settings,
    preview: (
      <div className="p-4 bg-[#0A0A0F] rounded-xl border border-white/5 w-full space-y-2 max-h-[140px] overflow-y-auto scrollbar-custom">
        {[
          "Create HR task",
          "Route for approval",
          "Generate report",
          "Notify employee",
          "Log audit trail",
        ].map((action, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white/[0.03] border border-white/10 p-1.5 rounded hover:bg-[#0048FF]/10 hover:border-[#0048FF]/30 transition-colors group/btn cursor-pointer"
          >
            <span className="text-base text-white/60 group-hover/btn:text-white transition-colors">
              {action}
            </span>
            <ArrowRight className="w-3 h-3 text-white/20 group-hover/btn:text-[#0048FF] transition-colors" />
          </div>
        ))}
      </div>
    ),
  },
];

const intelligenceTrailSteps = [
  "Question",
  "Context",
  "Knowledge",
  "Rules",
  "Workflow",
  "Approval",
  "Audit",
  "Action",
];

const commandPrompts = [
  {
    text: "Show employee health risk by department",
    surfaces: ["dashboard", "decision"],
  },
  {
    text: "Draft a wellness strategy for HR",
    surfaces: ["conversational", "decision"],
  },
  {
    text: "Check this claim for policy compliance",
    surfaces: ["document", "decision", "workflow", "action"],
  },
  {
    text: "Summarize provider performance",
    surfaces: ["dashboard", "conversational"],
  },
  {
    text: "Create a CEO health intelligence report",
    surfaces: ["dashboard", "document", "conversational"],
  },
  { text: "Route this approval to finance", surfaces: ["workflow", "action"] },
  {
    text: "Analyze hospital utilization trends",
    surfaces: ["dashboard", "decision"],
  },
  {
    text: "Verify insurance eligibility for patient",
    surfaces: ["document", "workflow"],
  },
];

function IntelligenceCursorTheatre() {
  const [activeSurface, setActiveSurface] = useState(null);
  const [activePrompt, setActivePrompt] = useState(null);
  const [trailIndex, setTrailIndex] = useState(-1);
  const cursorRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (activePrompt) {
      setTrailIndex(-1);
      let i = 0;
      const interval = setInterval(() => {
        if (i < intelligenceTrailSteps.length) {
          setTrailIndex(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    } else {
      setTrailIndex(-1);
    }
  }, [activePrompt]);

  const handlePromptClick = (prompt) => {
    if (activePrompt?.text === prompt.text) {
      setActivePrompt(null);
      setActiveSurface(null);
    } else {
      setActivePrompt(prompt);
      setActiveSurface(prompt.surfaces[0]); // Target first surface
    }
  };

  return (
    <div className="relative pt-24 border-t border-white/10" ref={containerRef}>
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .scrollbar-custom::-webkit-scrollbar {
          height: 3px;
          width: 3px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: rgba(0, 72, 255, 0.3);
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 72, 255, 0.5);
        }
      `}</style>
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-[#0048FF] mb-4">
            INTELLIGENCE CURSOR
          </p>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            DEXA is the living cursor of Mentor Global
          </h3>
          <p className="text-[#8A8A93] leading-relaxed">
            It does not wait inside a chat box. DEXA moves across every screen,
            reads context, opens the right workflow, applies rules, and guides
            users toward the next best action.
          </p>
        </div>
      </ScrollReveal>

      {/* Compact Command Triggers - REMOVED INPUT BAR */}
      <div className="max-w-6xl mx-auto mb-20">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {commandPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handlePromptClick(p)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] transition-all border ${activePrompt?.text === p.text ? "bg-[#0048FF] border-[#0048FF] text-white shadow-[0_0_20px_rgba(0,72,255,0.4)]" : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white hover:border-white/30"}`}
              >
                {p.text}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Surface Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {/* Animated Cursor Orb */}
        <AnimatePresence>
          {activeSurface && (
            <motion.div
              layoutId="dexa-cursor"
              className="absolute z-30 pointer-events-none"
              initial={false}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              style={{
                top: "50%",
                left: "50%",
                width: 40,
                height: 40,
                margin: -20,
              }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-[#0048FF] rounded-full blur-[20px] animate-pulse" />
                <div className="absolute inset-0 bg-[#0048FF] rounded-full border-2 border-white/40 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#0048FF]/10 rounded-full blur-[40px]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {interfaceSurfaces.map((surface, idx) => {
          const isActive =
            activeSurface === surface.id ||
            (activePrompt && activePrompt.surfaces.includes(surface.id));

          return (
            <ScrollReveal key={surface.id} delay={idx * 0.05}>
              <motion.div
                onMouseEnter={() =>
                  !activePrompt && setActiveSurface(surface.id)
                }
                onMouseLeave={() => !activePrompt && setActiveSurface(null)}
                animate={{
                  scale: isActive ? 1.02 : 1,
                  borderColor: isActive
                    ? "rgba(0, 72, 255, 0.4)"
                    : "rgba(255, 255, 255, 0.1)",
                  opacity: activeSurface && !isActive ? 0.3 : 1,
                }}
                className={`relative group bg-[#0A0A0F] border rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 cursor-pointer ${isActive ? "shadow-[0_0_50px_rgba(0,72,255,0.15)]" : ""}`}
              >
                {/* Surface Header */}
                <div className="p-8 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? "bg-[#0048FF]/20 text-[#00E5FF]" : "bg-white/5 text-white/40"}`}
                    >
                      <surface.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {surface.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#8A8A93] leading-relaxed mb-6">
                    {surface.desc}
                  </p>
                </div>

                {/* Preview Window */}
                <div className="mt-auto p-4 bg-white/[0.02] border-t border-white/5">
                  <div
                    className="w-full transition-all duration-700 overflow-hidden"
                    style={{ maxHeight: isActive ? "300px" : "120px" }}
                  >
                    <div
                      className={`${isActive ? "opacity-100" : "opacity-40 filter blur-[1px]"} transition-all duration-700`}
                    >
                      {surface.preview}
                    </div>
                  </div>
                </div>

                {/* Activation Glow */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#0048FF]/5 to-transparent pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Governed Action Trail */}
      <div className="mb-24">
        <ScrollReveal>
          <div className="text-center mb-4">
            <p className="text-sm uppercase tracking-[0.3em] font-bold text-white/40">
              Governed Action Trail
            </p>
          </div>
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 md:gap-0 md:flex-nowrap items-center bg-[#0A0A0F] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0048FF]/5 to-transparent" />

            {intelligenceTrailSteps.map((step, i) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center gap-3 relative z-10 flex-1 min-w-[80px]">
                  <motion.div
                    animate={{
                      scale: trailIndex >= i ? 1.1 : 1,
                      backgroundColor:
                        trailIndex >= i ? "#0048FF" : "rgba(255,255,255,0.05)",
                      boxShadow:
                        trailIndex >= i
                          ? "0 0 15px rgba(0,72,255,0.5)"
                          : "none",
                    }}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-colors duration-300"
                  >
                    <span
                      className={`text-sm font-bold ${trailIndex >= i ? "text-white" : "text-white/20"}`}
                    >
                      {i + 1}
                    </span>
                  </motion.div>
                  <span
                    className={`text-[10px] uppercase tracking-widest font-bold transition-colors duration-300 ${trailIndex >= i ? "text-[#00E5FF]" : "text-white/20"}`}
                  >
                    {step}
                  </span>
                </div>
                {i < intelligenceTrailSteps.length - 1 && (
                  <div className="hidden md:block w-full h-px bg-white/5 relative flex-1">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: trailIndex > i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#0048FF] to-[#00E5FF] origin-left"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function DexaChannelsSection() {
  return (
    <section
      data-testid="dexa-channels"
      className="bg-[#050508] py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[560px] sm:h-[560px] lg:w-[800px] lg:h-[800px] bg-[#0048FF]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.3em] font-bold text-[#0048FF] mb-4">
              CHANNELS
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              DEXA Lives Inside Every Workflow
            </h2>
            <p className="text-[#8A8A93] leading-relaxed">
              DEXA appears across websites, portals, apps, dashboards,
              documents, approvals, and operating systems—giving every user the
              right intelligence at the right moment.
            </p>
          </ScrollReveal>
        </div>

        {/* Ecosystem Visual */}
        <div className="relative mt-16 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-6 lg:pr-16 relative z-10">
              {channelsData
                .filter((c) => c.position === "left")
                .map((ch, i) => (
                  <ScrollReveal key={ch.name} delay={i * 0.1}>
                    <div className="relative group/card">
                      <div className="bg-[#0A0A0F] border border-white/10 rounded-2xl p-5 hover:border-[#0048FF]/40 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,72,255,0.1)] relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/card:bg-[#0048FF]/10 group-hover/card:text-[#0048FF] text-white/60 transition-colors">
                            <ch.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-bold text-white">
                                {ch.name}
                              </h3>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/60 font-medium uppercase tracking-wider">
                                {ch.tag}
                              </span>
                            </div>
                            <p className="text-xs text-[#8A8A93] leading-relaxed">
                              {ch.useCase}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Connector line */}
                      <div className="hidden lg:block absolute top-1/2 -right-16 w-16 h-px bg-gradient-to-r from-white/10 to-[#0048FF]/40 group-hover/card:from-[#0048FF]/30 group-hover/card:to-[#0048FF]/80 transition-colors z-0" />
                    </div>
                  </ScrollReveal>
                ))}
            </div>

            {/* Center Node */}
            <div className="relative flex justify-center py-16 lg:py-0 z-20">
              <ScrollReveal delay={0.2}>
                <DexaCodeTerminal />
              </ScrollReveal>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 lg:pl-16 relative z-10">
              {channelsData
                .filter((c) => c.position === "right")
                .map((ch, i) => (
                  <ScrollReveal key={ch.name} delay={i * 0.1}>
                    <div className="relative group/card">
                      {/* Connector line */}
                      <div className="hidden lg:block absolute top-1/2 -left-16 w-16 h-px bg-gradient-to-l from-white/10 to-[#0048FF]/40 group-hover/card:from-[#0048FF]/30 group-hover/card:to-[#0048FF]/80 transition-colors z-0" />

                      <div className="bg-[#0A0A0F] border border-white/10 rounded-2xl p-5 hover:border-[#0048FF]/40 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,72,255,0.1)] relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/card:bg-[#0048FF]/10 group-hover/card:text-[#0048FF] text-white/60 transition-colors">
                            <ch.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-bold text-white">
                                {ch.name}
                              </h3>
                              <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-white/60 font-medium uppercase tracking-wider">
                                {ch.tag}
                              </span>
                            </div>
                            <p className="text-xs text-[#8A8A93] leading-relaxed">
                              {ch.useCase}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </div>

        {/* Part 3 - Intelligence Cursor Theatre */}
        <IntelligenceCursorTheatre />
      </div>
    </section>
  );
}

function IntelligenceLayers() {
  return (
    <section data-testid="dexa-layers" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Intelligence Stack</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            The intelligence stack behind DEXA
          </h2>
        </ScrollReveal>
        <div className="mt-16 border border-white/10">
          {dexaIntelligenceLayers.map((layer, idx) => (
            <ScrollReveal key={layer.name} delay={idx * 0.04}>
              <div
                className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-white/10" : ""}`}
              >
                <div className="md:col-span-4 p-5 border-b md:border-b-0 md:border-r border-white/10">
                  <span className="text-[#0048FF] text-sm font-bold">
                    L{idx + 1}
                  </span>
                  <p className="text-sm font-bold text-white mt-1">
                    {layer.name}
                  </p>
                </div>
                <div className="md:col-span-8 p-5">
                  <p className="text-sm text-[#8A8A93] leading-relaxed">
                    {layer.desc}
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

function AgenticPods() {
  return (
    <section data-testid="dexa-agents" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Agentic AI</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
            Specialist AI pods coordinated by DEXA
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-10">
          {dexaAgentGroups.map((group, gIdx) => (
            <ScrollReveal key={group.group} delay={gIdx * 0.06}>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#0048FF] mb-4">
                  {group.group}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#11111F]/10">
                  {group.agents.map((agent) => (
                    <div key={agent.name} className="bg-white p-5 card-hover">
                      <div className="w-8 h-8 border border-[#0048FF]/20 flex items-center justify-center mb-3">
                        <div className="w-2 h-2 bg-[#0048FF]" />
                      </div>
                      <h4 className="text-sm font-bold text-[#11111F] mb-2">
                        {agent.name}
                      </h4>
                      <p className="text-xs text-[#666666] leading-relaxed">
                        {agent.desc}
                      </p>
                    </div>
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

function GovernanceSection() {
  return (
    <section
      data-testid="dexa-governance"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Governance and Trust</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            DEXA acts only when knowledge, rules, permissions, and approvals
            allow it
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/10">
          {governanceCards.map((cap, i) => (
            <ScrollReveal key={cap} delay={i * 0.02}>
              <div className="bg-[#11111F] p-4 md:p-5 card-hover-dark">
                <p className="text-sm text-white/80 font-medium">{cap}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HumanApproval() {
  return (
    <section data-testid="dexa-approval" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Human Control</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
            Human control where decisions matter
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-[1px] bg-[#11111F]/10">
          {approvalQueues.map((q, i) => (
            <ScrollReveal key={q} delay={i * 0.02}>
              <div className="bg-white p-4 card-hover h-full">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-1.5 h-1.5 bg-amber-400" />
                  <span className="text-[10px] text-[#666666]">Pending</span>
                </div>
                <p className="text-xs text-[#11111F] font-medium">{q}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RealScenarios() {
  return (
    <section
      data-testid="dexa-scenarios"
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
                Use the navigation controls in the chat header to explore how
                DEXA handles different operational scenarios across healthcare,
                insurance, and more.
              </p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">
                Governed Reasoning
              </h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">
                Observe the "Active Checks" phase where DEXA verifies
                permissions, retrieves knowledge, and applies business rules
                before responding.
              </p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">
                Actionable Intelligence
              </h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">
                Every response concludes with governed next actions, routing
                users directly into approved workflows or requesting human
                approval.
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
    <section
      data-testid="dexa-architecture"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Architecture</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight max-w-4xl">
            Built as an intelligence processing engine, not a chat layer
          </h2>
        </ScrollReveal>
        <div className="mt-16 border border-[#11111F]/10">
          {dexaArchitectureLayers.map((layer, idx) => (
            <ScrollReveal key={layer.name} delay={idx * 0.02}>
              <div
                className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-[#11111F]/10" : ""}`}
              >
                <div className="md:col-span-4 p-4 border-b md:border-b-0 md:border-r border-[#11111F]/10">
                  <span className="text-[#0048FF] text-sm font-bold">
                    L{idx + 1}
                  </span>
                  <p className="text-sm font-bold text-[#11111F] mt-0.5">
                    {layer.name}
                  </p>
                </div>
                <div className="md:col-span-8 p-4">
                  <div className="flex flex-wrap gap-1">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-2 py-0.5 border border-[#11111F]/10 text-[#666666]"
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

function UseCasesSection() {
  return (
    <section
      data-testid="dexa-use-cases"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Use Cases</p>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight max-w-4xl">
            DEXA use cases across Mentor Global infrastructure
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {dexaUseCases.map((uc, i) => (
            <ScrollReveal key={uc.name} delay={i * 0.02}>
              <div className="bg-[#11111F] p-4 card-hover-dark h-full">
                <h3 className="text-base font-bold text-white mb-1.5">
                  {uc.name}
                </h3>
                <div className="space-y-0.5 text-sm text-[#8A8A93]">
                  <p>
                    <span className="text-[#0048FF]">Who:</span> {uc.who}
                  </p>
                  <p>
                    <span className="text-[#0048FF]">Action:</span> {uc.action}
                  </p>
                  <p>
                    <span className="text-[#0048FF]">Approval:</span>{" "}
                    {uc.approval}
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
  const [activeZone, setActiveZone] = useState(null);

  const zones = [
    {
      id: "guidance",
      title: "Guidance & Experience",
      icon: Compass,
      color: "#0048FF",
      status: "ACTIVE",
      outcomes: [
        "Better user guidance",
        "Lower repetitive support load",
        "Cleaner requirement discovery",
        "Better human escalation",
      ],
    },
    {
      id: "workflow",
      title: "Workflow & Operations",
      icon: Workflow,
      color: "#8A2BE2",
      status: "ORCHESTRATED",
      outcomes: [
        "Faster workflow routing",
        "More consistent execution",
        "Faster issue detection",
        "Better operational summaries",
      ],
    },
    {
      id: "intelligence",
      title: "Intelligence & Visibility",
      icon: Eye,
      color: "#00C2FF",
      status: "MONITORED",
      outcomes: [
        "Better decision support",
        "Better cross-system visibility",
        "More reliable knowledge access",
        "More intelligent infrastructure",
      ],
    },
    {
      id: "governance",
      title: "Governance & Trust",
      icon: ShieldCheck,
      color: "#10B981",
      status: "GOVERNED",
      outcomes: [
        "Stronger governance",
        "Better auditability",
        "Better action discipline",
        "Stronger enterprise trust",
      ],
    },
  ];

  return (
    <section
      data-testid="dexa-outcomes"
      className="bg-white py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Outcomes Content */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0048FF]/5 border border-[#0048FF]/10 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0048FF] animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#0048FF]">
                  OUTCOMES
                </span>
              </div>
              <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#11111F] tracking-tight leading-[1.1] mb-8">
                What DEXA should deliver
              </h2>
              <p className="section-desc max-w-xl mb-12">
                DEXA improves how organizations guide users, route workflows,
                make decisions, govern actions, and operate across systems with
                greater intelligence, consistency, and trust.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {zones.map((zone, idx) => (
                <ScrollReveal key={zone.id} delay={idx * 0.05}>
                  <div
                    className={`p-6 border border-[#11111F]/10 rounded-sm transition-all duration-300 hover:shadow-md hover:border-[#0048FF]/30 ${
                      activeZone === zone.id ? "bg-[#FAFAFA]" : ""
                    }`}
                    onMouseEnter={() => setActiveZone(zone.id)}
                    onMouseLeave={() => setActiveZone(null)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center bg-[#FAFAFA] border border-[#11111F]/5"
                        style={{
                          backgroundColor:
                            activeZone === zone.id ? `${zone.color}10` : "",
                        }}
                      >
                        <zone.icon
                          className="w-4 h-4 transition-colors"
                          style={{
                            color: activeZone === zone.id ? zone.color : "#444",
                          }}
                        />
                      </div>
                      <h3 className="text-sm font-bold text-[#11111F]">
                        {zone.title}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {zone.outcomes.slice(0, 4).map((outcome, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div
                            className="w-1 h-1 rounded-full mt-1.5 shrink-0 transition-colors"
                            style={{
                              backgroundColor:
                                activeZone === zone.id ? zone.color : "#DDD",
                            }}
                          />
                          <span className="text-sm text-[#666666] leading-relaxed group-hover:text-[#11111F] transition-colors">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          {/* Right Side: High-Fidelity Animated System Visual - iPad Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <ScrollReveal delay={0.2} direction="left" className="w-full">
              <IpadMockup orientation="landscape" className="max-w-2xl lg:mr-0 lg:ml-auto">
                <div className="relative w-full h-full bg-[#05050A] overflow-hidden min-h-[400px] flex items-center justify-center">
                  {/* Background Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />

                  {/* Live Data Orchestrator Visual */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center scale-75 md:scale-90">
                      {/* Outer Orbiting Data Nodes - Enhanced */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 20 + i * 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 pointer-events-none"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: i * 0.4,
                            }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0048FF] shadow-[0_0_15px_#0048FF]"
                          />
                        </motion.div>
                      ))}

                      {/* Central Processing Core - Glass Architecture */}
                      <div className="relative z-10 w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-2xl bg-white/5 shadow-[0_0_60px_rgba(0,72,255,0.25)]">
                        <motion.div
                          animate={{
                            rotate: -360,
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-3 border-t-2 border-white/10 rounded-full"
                        />
                        <motion.div
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-8 border-b-2 border-[#0048FF]/20 rounded-full border-dashed"
                        />

                        <div className="flex flex-col items-center">
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <Cpu className="w-10 h-10 text-[#0048FF] mb-3" />
                          </motion.div>
                          <span className="text-xs font-bold text-white tracking-[0.3em] uppercase mb-1">
                            DEXA
                          </span>
                          <span className="text-xs font-bold text-white/40 tracking-[0.2em] uppercase">
                            System Active
                          </span>
                        </div>
                      </div>

                      {/* SVG Decision Threads - Enhanced Complexity */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <defs>
                          <linearGradient
                            id="beam-gradient-ipad"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#0048FF"
                              stopOpacity="0"
                            />
                            <stop
                              offset="50%"
                              stopColor="#0048FF"
                              stopOpacity="0.6"
                            />
                            <stop
                              offset="100%"
                              stopColor="#0048FF"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                          <g
                            key={i}
                            transform={`rotate(${angle}, ${128 * 1.5}, ${128 * 1.5})`}
                          >
                            <motion.line
                              x1={128 * 1.5}
                              y1={128 * 1.5}
                              x2={280 * 1.5}
                              y2={128 * 1.5}
                              stroke="url(#beam-gradient-ipad)"
                              strokeWidth="1.5"
                              animate={{
                                strokeDashoffset: [0, -300],
                                opacity: [0, 0.5, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                              strokeDasharray="60 240"
                            />
                          </g>
                        ))}
                      </svg>

                      {/* Dynamic Label Callouts */}
                      <div className="absolute top-0 right-0 p-6 space-y-4">
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0048FF] animate-pulse" />
                          <span className="text-[8px] font-mono text-white/60 tracking-wider">
                            NODE_SYNC: OK
                          </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                          <span className="text-[8px] font-mono text-white/60 tracking-wider">
                            TRUST_LEVEL: MAX
                          </span>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="text-left">
                          <p className="text-xs font-bold text-[#0048FF] uppercase tracking-[0.3em] mb-1">
                            Real-time Analysis
                          </p>
                          <p className="text-xs font-mono text-white/20 uppercase tracking-widest leading-relaxed">
                            Processing infrastructure events...
                            <br />
                            Applying governance rules...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Telemetry Corner */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <div className="bg-black/40 backdrop-blur-md border border-white/5 p-3 rounded-sm">
                      <p className="text-xs font-mono text-white/30 mb-1 uppercase">
                        Core Operations
                      </p>
                      <div className="flex gap-4">
                        <div>
                          <p className="text-xs text-white/20 uppercase">
                            Latency
                          </p>
                          <p className="text-sm font-mono text-[#0048FF]">
                            12.4ms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </IpadMockup>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      data-testid="dexa-final-cta"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#0048FF]/[0.05] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-white tracking-tight max-w-3xl mx-auto">
            Turn infrastructure into intelligence
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-base text-[#8A8A93] max-w-2xl mx-auto leading-relaxed">
            DEXA helps Mentor Global infrastructure understand context, retrieve
            approved knowledge, apply rules, coordinate agents, trigger
            workflows, monitor execution, and guide users toward governed next
            actions.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="dexa-final-build-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Build With DEXA <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="dexa-final-talk-cta"
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

export default function DexaPage() {
  return (
    <main data-testid="dexa-page">
      <Hero />
      <DexaInMotion />
      <WhatDexaIs />
      <WhatDexaIsNot />
      <ProblemSection />
      <HowDexaThinks />
      <OperatingModel />
      <DexaAcrossPillars />
      <DexaChannelsSection />
      <IntelligenceLayers />
      <AgenticPods />
      <GovernanceSection />
      <HumanApproval />
      <RealScenarios />
      <Architecture />
      <UseCasesSection />
      <OutcomesSection />
      <FinalCTA />
    </main>
  );
}
