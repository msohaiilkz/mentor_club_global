import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { IphoneMockup } from "../components/shared/IphoneMockup";
import { ChatSimulation } from "../components/shared/ChatSimulation";
import { dexaFullScenarios } from "../data/dexa-page";

const dexaDomains = [
  { name: "Healthcare Infrastructure", items: ["Claims routing and triage", "Provider matching and recommendations", "Benefit optimization", "Health pool analytics", "Missing document identification", "Internal team support"] },
  { name: "Insurance Infrastructure", items: ["Quote intake and processing", "Broker guidance", "Underwriting summary", "Claims guidance", "Renewal prompts", "Coverage gap analysis", "Document validation", "Service center automation"] },
  { name: "Fintech Infrastructure", items: ["Wallet guidance", "Payment support", "Credit eligibility", "Settlement status", "Reconciliation exceptions", "Finance insights"] },
  { name: "HealthRails", items: ["Studio workflow control", "Compose orchestration", "Runtime supervision", "AI agent assignment", "Testing and deployment", "KYC and design operations"] },
  { name: "Mentor OS", items: ["Work Intelligence", "Daily employee guidance", "Leadership AI Window", "Productivity insights", "Task validation", "Project breakdown", "Training recommendations", "Growth OS coaching", "Finance summaries", "Operational exceptions"] }
];

const whatDexaIsNot = [
  "DEXA is not a chatbot.",
  "DEXA is not only an AI assistant.",
  "DEXA is not limited to HealthRails.",
];

const whatDexaIs = [
  "DEXA is the intelligence processing engine that helps platforms understand, reason, coordinate, monitor, and act.",
  "DEXA powers intelligent operations across healthcare, insurance, fintech, HealthRails, Mentor OS, and white labelled client platforms.",
  "DEXA combines agentic AI pods, domain knowledge, rules engines, and human approval gates into one orchestrated system."
];

const agentPods = [
  { name: "Intro Agent", desc: "First-touch intelligence for user onboarding and context gathering." },
  { name: "Recommendation Model", desc: "AI-driven recommendations for products, providers, and plans." },
  { name: "Technical Discovery Agent", desc: "Deep technical analysis for platform integration and architecture." },
  { name: "Full Stack Development Agent", desc: "AI-assisted development, code generation, and platform building." },
  { name: "Tester Deployer Agent", desc: "Automated testing, quality assurance, and deployment intelligence." },
  { name: "KYC Lawyer Agent", desc: "Compliance verification, regulatory checks, and legal document processing." },
  { name: "Digital Marketer Agent", desc: "Marketing intelligence, campaign optimization, and growth analytics." },
  { name: "Design Engine AI", desc: "UI/UX intelligence, design system management, and visual optimization." }
];

const governance = [
  { title: "Human Approval Gates", desc: "Critical decisions require human review and approval before execution." },
  { title: "Audit Trails", desc: "Every action, recommendation, and decision is logged and traceable." },
  { title: "Confidence Scoring", desc: "Each output includes a confidence score for transparency and trust." },
  { title: "Domain Boundaries", desc: "DEXA operates within defined domain boundaries and escalates edge cases." }
];

function DexaInAction() {
  return (
    <section data-testid="dexa-in-action" className="bg-[#0B0B14] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0048FF]/[0.02]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-6">DEXA in Action</p>
              <h2 className="text-[var(--fs-4xl)] font-bold text-white tracking-tight mb-8">
                Intelligent operations across every infrastructure layer
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg text-[#8A8A93] leading-relaxed max-w-xl">
                DEXA is not a surface layer interface. It is a governed processing engine that connects user intent with approved knowledge, deterministic rules, and agentic execution.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="mt-10 space-y-6">
                {[
                  { label: "Understand", desc: "Identifies role, intent, and system context." },
                  { label: "Reason", desc: "Applies rules and retrieves approved knowledge." },
                  { label: "Act", desc: "Coordinates agents and updates system states." },
                  { label: "Govern", desc: "Logs actions and escalates for human approval." }
                ].map((step, i) => (
                  <div key={step.label} className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-[#0048FF] mt-2 shrink-0" />
                    <div>
                      <p className="text-base font-bold text-white uppercase tracking-widest mb-1">{step.label}</p>
                      <p className="text-base text-[#8A8A93]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="left">
            <IphoneMockup>
              <ChatSimulation scenarios={dexaFullScenarios} />
            </IphoneMockup>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function Dexa() {
  return (
    <main data-testid="dexa-page">
      {/* Hero */}
      <section className="relative bg-[#11111F] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.1]"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 blue-glow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="eyebrow mb-6">Intelligence Engine</p>
                <h1 className="text-[var(--fs-hero)] font-bold text-white tracking-tighter leading-[1.05]">
                  DEXA, The Intelligence Processing Engine Behind Mentor Global
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-8 text-lg md:text-xl text-[#8A8A93] max-w-xl leading-relaxed">
                  DEXA powers intelligent operations across healthcare, insurance, fintech, HealthRails, Mentor OS, and white labelled client platforms.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.25} direction="left">
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1653549893012-b8b4fbe97630?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=700"
                  alt="AI intelligence processing"
                  className="w-full h-auto object-cover aspect-[4/3] opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11111F]/50 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What DEXA Is / Is Not */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#11111F]/10">
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#11111F]/10">
              <ScrollReveal>
                <p className="eyebrow mb-6">What DEXA Is Not</p>
                <div className="space-y-4">
                  {whatDexaIsNot.map((item) => (
                    <p key={item} className="text-base md:text-lg font-semibold text-[#11111F]/60">{item}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <div className="p-8 md:p-12">
              <ScrollReveal delay={0.1}>
                <p className="eyebrow mb-6">What DEXA Is</p>
                <div className="space-y-4">
                  {whatDexaIs.map((item) => (
                    <p key={item} className="text-base text-[#666666] leading-relaxed">{item}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* DEXA Across Domains */}
      <section className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 blue-glow-subtle" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Across Platforms</p>
            <h2 className="text-[var(--fs-4xl)] font-bold text-white tracking-tight max-w-3xl mb-16">
              DEXA Powers Every Layer of the Ecosystem
            </h2>
          </ScrollReveal>
          <div className="border border-white/10">
            {dexaDomains.map((domain, i) => (
              <ScrollReveal key={domain.name} delay={i * 0.08}>
                <div className={`grid grid-cols-1 md:grid-cols-12 ${i > 0 ? "border-t border-white/10" : ""}`}>
                  <div className="md:col-span-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10">
                    <p className="text-base font-semibold text-white">{domain.name}</p>
                  </div>
                  <div className="md:col-span-8 p-6 md:p-8">
                    <div className="flex flex-wrap gap-3">
                      {domain.items.map((item) => (
                        <span key={item} className="text-base text-[#8A8A93] px-3 py-1 border border-white/10">
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

      <DexaInAction />

      {/* Agent Pods */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* HealthRails Section */}
          <ScrollReveal>
            <p className="eyebrow mb-4">DEXA Across HealthRails</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#11111F] tracking-tight mb-4">
              DEXA Powers HealthRails Intelligence
            </h2>
            <p className="text-base text-[#666666] leading-relaxed max-w-3xl mb-12">
              HealthRails provides the platform architecture. DEXA provides the intelligence that operates it. DEXA controls Studio, Compose, and Runtime workflows, assigns work to specialized AI agents, and supervises testing, deployment, KYC, design, and marketing operations.
            </p>
          </ScrollReveal>

          {/* Mentor OS Section */}
          <ScrollReveal delay={0.1}>
            <p className="eyebrow mb-4">DEXA Across Mentor OS</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#11111F] tracking-tight mb-8">
              DEXA Powers Mentor OS Intelligence
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-[#11111F]/10 mb-20">
            {["Work Intelligence", "Daily employee guidance", "Leadership AI Window", "Productivity insights", "Task validation", "Project breakdown", "Training recommendations", "Growth OS coaching", "Finance summaries", "Operational exceptions"].map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.03}>
                <div className="bg-white p-4 md:p-5 card-hover h-full">
                  <p className="text-base text-[#11111F] font-medium">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Agent Pods */}
          <ScrollReveal>
            <p className="eyebrow mb-4">Agentic AI</p>
            <h2 className="text-[var(--fs-4xl)] font-bold text-[#11111F] tracking-tight mb-16">
              Agentic AI Pods
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
            {agentPods.map((pod, i) => (
              <ScrollReveal key={pod.name} delay={i * 0.05}>
                <div className="bg-white p-6 md:p-8 card-hover h-full">
                  <div className="w-10 h-10 border border-[#0048FF]/20 flex items-center justify-center mb-5">
                    <div className="w-3 h-3 bg-[#0048FF]" />
                  </div>
                  <h3 className="text-base font-bold text-[#11111F] mb-2">{pod.name}</h3>
                  <p className="text-base text-[#666666] leading-relaxed">{pod.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Governance</p>
            <h2 className="text-[var(--fs-4xl)] font-bold text-white tracking-tight mb-16">
              Built With Governance and Trust
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
            {governance.map((g, i) => (
              <ScrollReveal key={g.title} delay={i * 0.08}>
                <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                  <h3 className="text-base font-bold text-white mb-3">{g.title}</h3>
                  <p className="text-base text-[#8A8A93] leading-relaxed">{g.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-[var(--fs-display)] font-bold text-[#11111F] tracking-tight max-w-3xl mx-auto">
              Partner With DEXA Infrastructure
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                data-testid="dexa-partner-cta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
              >
                Partner With Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/solutions/ai-infrastructure"
                data-testid="dexa-ai-solutions-cta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#11111F]/20 text-[#11111F] font-semibold hover:bg-[#11111F]/5 transition-colors"
              >
                Explore AI Infrastructure <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
