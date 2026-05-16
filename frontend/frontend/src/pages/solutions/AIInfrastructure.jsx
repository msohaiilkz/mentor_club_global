import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "../../components/shared/ScrollReveal";
import { DexaHeroChat } from "../../components/shared/DexaHeroChat";
import { ChatSimulation } from "../../components/shared/ChatSimulation";
import { MacbookMockup } from "../../components/shared/MacbookMockup";
import { aiProblems, aiRails, dexaPrinciples, dexaPipeline, dexaLayers, dexaPillars, agentGroups, governanceCapabilities, approvalQueues, aiScenarios, aiArchitectureLayers, aiDeploymentModels, aiUseCases, aiOutcomes } from "../../data/ai-infrastructure";

function Hero() {
  return (
    <section data-testid="ai-hero" className="relative bg-[#0B0B14] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[#0048FF]/[0.08] blur-[160px]" />
      <div className="relative max-w-[1720px] mx-auto px-6 md:px-12">
        <Link to="/solutions" className="inline-flex items-center gap-2 text-sm text-[#8A8A93] hover:text-[#0048FF] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> All Solutions
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-6">AI Infrastructure</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white tracking-tighter leading-[1.05]">
                AI Infrastructure Powered by DEXA
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-8 hero-desc">
                Deploy governed intelligence infrastructure that understands context, connects to systems, coordinates agents, routes workflows, monitors execution, and powers decision support across healthcare, insurance, fintech, HealthRails, Mentor OS, and client platforms.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#8A8A93]/70 max-w-xl">
                Mentor Global does not add AI as a surface feature. It builds governed intelligence infrastructure that connects knowledge, rules, workflows, agents, APIs, approvals, and auditability into one operating layer.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" data-testid="ai-hero-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#0048FF]/20">
                  Build AI Infrastructure <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/dexa" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                  Explore DEXA
                </Link>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="left">
            <div className="relative h-[650px]">
              <div className="absolute -inset-10 bg-[#0048FF]/20 blur-[100px] rounded-full opacity-30 animate-pulse" />
              <DexaHeroChat />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section data-testid="ai-problem" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">The Problem</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">Most AI fails because it is disconnected from operations.</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {aiProblems.map((p, i) => (<ScrollReveal key={i} delay={i * 0.03}><div className="bg-white p-5 md:p-6 card-hover h-full"><span className="text-[#0048FF] text-xs font-bold">{String(i+1).padStart(2,"0")}</span><p className="mt-2 text-sm text-[#11111F] font-medium leading-relaxed">{p}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function InfrastructureStack() {
  return (
    <section data-testid="ai-stack" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.04] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Infrastructure Stack</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">One AI infrastructure stack. Multiple intelligence rails.</h2></ScrollReveal>
        <div className="mt-16 space-y-[1px]">
          {aiRails.map((rail, idx) => (<ScrollReveal key={rail.name} delay={idx * 0.03}><div className="bg-[#11111F] border border-white/10 p-4 md:p-6"><div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6"><div className="md:w-48 shrink-0"><span className="text-[#0048FF] text-xs font-bold">{String(idx+1).padStart(2,"0")}</span><h3 className="text-sm font-bold text-white mt-1">{rail.name}</h3></div><div className="flex flex-wrap gap-1.5">{rail.items.map((item) => (<span key={item} className="text-[10px] text-[#8A8A93] px-2 py-1 border border-white/10 hover:border-[#0048FF]/30 transition-colors">{item}</span>))}</div></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function ConnectedRailsVisual() {
  return (
    <section data-testid="ai-rails-visual" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal><p className="eyebrow mb-4">Connected Intelligence</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-16">From isolated AI tools to one governed intelligence layer</h2></ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto w-64 md:w-80 py-5 bg-[#11111F] text-white text-center mb-6"><p className="text-sm font-bold">DEXA Intelligence Engine</p></div>
          <div className="grid grid-cols-2 md:grid-cols-5 border border-[#11111F]/10">
            {aiRails.map((rail) => (<div key={rail.name} className="p-3 md:p-4 text-center card-hover border-r border-b border-[#11111F]/10"><div className="w-2 h-2 bg-[#0048FF] mx-auto mb-2" /><p className="text-[9px] md:text-[10px] font-bold text-[#11111F]">{rail.name.replace(" Rail","")}</p></div>))}
          </div>
          <p className="mt-5 text-xs text-[#666666]">Powered by <span className="font-bold text-[#0048FF]">Mentor Innovation</span>. Deployed through <span className="font-bold text-[#11111F]">Mentor Global</span> infrastructure.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function DexaEngine() {
  return (
    <section data-testid="ai-dexa-engine" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 blue-glow-subtle" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Intelligence Engine</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">DEXA is the intelligence processing engine inside Mentor Global</h2></ScrollReveal>
        <ScrollReveal delay={0.1}><p className="mt-6 text-base text-[#8A8A93] max-w-3xl leading-relaxed">DEXA receives structured and unstructured inputs, understands user and system context, retrieves approved knowledge, applies rules, coordinates agents, routes workflows, triggers approved actions, monitors execution, and escalates to humans when required.</p></ScrollReveal>
        <div className="mt-12"><ScrollReveal delay={0.15}><p className="text-xs uppercase tracking-[0.2em] font-bold text-[#0048FF] mb-4">Operating Principles</p><div className="grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-white/10">{dexaPrinciples.map((p, i) => (<div key={p} className="bg-[#11111F] p-4 card-hover-dark"><p className="text-[11px] text-white/80">{p}</p></div>))}</div></ScrollReveal></div>
        <div className="mt-12"><ScrollReveal delay={0.2}><p className="text-xs uppercase tracking-[0.2em] font-bold text-[#0048FF] mb-4">Processing Pipeline</p><div className="flex flex-wrap items-center gap-1">{dexaPipeline.map((step, i) => (<span key={step} className="flex items-center gap-1"><span className="text-[10px] px-3 py-1.5 bg-white/5 border border-white/10 text-white font-medium">{step}</span>{i < dexaPipeline.length - 1 && <ChevronRight className="w-3 h-3 text-[#0048FF]" />}</span>))}</div></ScrollReveal></div>
      </div>
    </section>
  );
}

function FunctionalArchitecture() {
  return (
    <section data-testid="ai-functional-layers" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Functional Architecture</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">Six layers of DEXA intelligence</h2></ScrollReveal>
        <div className="mt-16 border border-[#11111F]/10">
          {dexaLayers.map((layer, idx) => (<ScrollReveal key={layer.name} delay={idx * 0.05}><div className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-[#11111F]/10" : ""}`}><div className="md:col-span-4 p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#11111F]/10"><span className="text-[#0048FF] text-xs font-bold">L{idx+1}</span><p className="text-sm font-bold text-[#11111F] mt-1">{layer.name}</p></div><div className="md:col-span-8 p-5 md:p-6"><p className="text-xs text-[#666666] leading-relaxed">{layer.desc}</p></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function DexaAcrossPillars() {
  return (
    <section data-testid="ai-pillars" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Across Pillars</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">One intelligence engine across healthcare, insurance, fintech, HealthRails, and Mentor OS</h2></ScrollReveal>
        <div className="mt-16 space-y-[1px]">
          {dexaPillars.map((pillar, idx) => (<ScrollReveal key={pillar.name} delay={idx * 0.05}><div className="bg-[#11111F] border border-white/10 p-5 md:p-7"><div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8"><div className="md:w-60 shrink-0"><h3 className="text-sm font-bold text-white">{pillar.name}</h3></div><div className="flex flex-wrap gap-1.5">{pillar.items.map((item) => (<span key={item} className="text-[10px] text-[#8A8A93] px-2.5 py-1 border border-white/10">{item}</span>))}</div></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function AgenticPods() {
  return (
    <section data-testid="ai-agents" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Agentic AI</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">Agentic AI pods coordinated by DEXA</h2></ScrollReveal>
        <div className="mt-16 space-y-12">
          {agentGroups.map((group, gIdx) => (<ScrollReveal key={group.group} delay={gIdx * 0.08}><div><p className="text-xs uppercase tracking-[0.2em] font-bold text-[#0048FF] mb-4">{group.group}</p><div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#11111F]/10">{group.agents.map((agent) => (<div key={agent.name} className="bg-white p-5 md:p-6 card-hover"><div className="w-8 h-8 border border-[#0048FF]/20 flex items-center justify-center mb-3"><div className="w-2 h-2 bg-[#0048FF]" /></div><h4 className="text-sm font-bold text-[#11111F] mb-2">{agent.name}</h4><p className="text-[11px] text-[#666666] leading-relaxed">{agent.desc}</p></div>))}</div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function GovernanceSection() {
  return (
    <section data-testid="ai-governance" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Governance</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Governed AI, not uncontrolled automation</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[1px] bg-white/10">
          {governanceCapabilities.map((cap, i) => (<ScrollReveal key={cap} delay={i * 0.02}><div className="bg-[#11111F] p-4 card-hover-dark"><p className="text-[11px] text-white/80 font-medium">{cap}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function HumanApproval() {
  return (
    <section data-testid="ai-approval" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Human Control</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">Human control where it matters</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {approvalQueues.map((q, i) => (<ScrollReveal key={q} delay={i * 0.02}><div className="bg-white p-4 md:p-5 card-hover h-full"><div className="flex items-center gap-2 mb-2"><div className="w-1.5 h-1.5 bg-amber-400" /><span className="text-[10px] text-[#666666]">Pending</span></div><p className="text-xs text-[#11111F] font-medium">{q}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function DexaScenarios() {
  return (
    <section data-testid="ai-scenarios" className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 blue-glow-subtle" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">DEXA in Action</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
            From confusion to governed next action
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="relative mt-8">
            <MacbookMockup>
              <ChatSimulation scenarios={aiScenarios} />
            </MacbookMockup>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">Multi-Scenario Exploration</h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">Observe how DEXA handles operational scenarios across healthcare, insurance, fintech, and more.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">Governed Reasoning</h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">DEXA verifies permissions, retrieves approved knowledge, and applies business rules before responding.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">Actionable Intelligence</h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">Every response concludes with governed next actions, routing users directly into approved workflows.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section data-testid="ai-architecture" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Architecture</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">Built as AI infrastructure, not a chatbot layer</h2></ScrollReveal>
        <div className="mt-16 border border-[#11111F]/10">
          {aiArchitectureLayers.map((layer, idx) => (<ScrollReveal key={layer.name} delay={idx * 0.03}><div className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-[#11111F]/10" : ""}`}><div className="md:col-span-3 p-4 md:p-5 border-b md:border-b-0 md:border-r border-[#11111F]/10"><span className="text-[#0048FF] text-xs font-bold">L{idx+1}</span><p className="text-xs font-bold text-[#11111F] mt-0.5">{layer.name}</p></div><div className="md:col-span-9 p-4 md:p-5"><div className="flex flex-wrap gap-1.5">{layer.items.map((item) => (<span key={item} className="text-[10px] px-2 py-0.5 border border-[#11111F]/10 text-[#666666]">{item}</span>))}</div></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function DeploymentModels() {
  return (
    <section data-testid="ai-deployment" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Deployment</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Deploy AI infrastructure according to your operating model</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10">
          {aiDeploymentModels.map((d, i) => (<ScrollReveal key={d.name} delay={i * 0.03}><div className="bg-[#11111F] p-5 card-hover-dark h-full"><h3 className="text-xs font-bold text-white mb-2">{d.name}</h3><p className="text-[10px] text-[#8A8A93] leading-relaxed">{d.desc}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section data-testid="ai-use-cases" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Use Cases</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">AI infrastructure that can power multiple operating models</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#11111F]/10">
          {aiUseCases.map((uc, i) => (<ScrollReveal key={uc.name} delay={i * 0.02}><div className="bg-white p-5 card-hover h-full"><h3 className="text-sm font-bold text-[#11111F] mb-2">{uc.name}</h3><div className="space-y-1 text-[11px] text-[#666666]"><p><span className="text-[#0048FF] font-bold">Who:</span> {uc.who}</p><p><span className="text-[#0048FF] font-bold">Problem:</span> {uc.problem}</p><p><span className="text-[#0048FF] font-bold">Rail:</span> {uc.rail}</p><p><span className="text-[#0048FF] font-bold">Approval:</span> {uc.approval}</p></div></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section data-testid="ai-outcomes" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal><p className="eyebrow mb-4">Outcomes</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">What AI infrastructure should deliver</h2></ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {aiOutcomes.map((o, i) => (<ScrollReveal key={o} delay={i * 0.02}><div className="bg-[#11111F] p-5 card-hover-dark h-full"><div className="w-5 h-5 border border-[#0048FF]/30 flex items-center justify-center mb-2"><div className="w-1.5 h-1.5 bg-[#0048FF]" /></div><p className="text-sm text-white font-medium">{o}</p></div></ScrollReveal>))}
        </div>
        <ScrollReveal delay={0.3}><p className="mt-8 text-xs text-[#8A8A93]/50 max-w-3xl">Designed to improve operational visibility, support faster workflow routing, reduce repetitive manual coordination, strengthen governance, and support human controlled automation. These do not represent unsupported claims.</p></ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section data-testid="ai-final-cta" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl mx-auto">Build AI infrastructure that connects knowledge, rules, agents, workflows, approvals, and intelligence</h2></ScrollReveal>
        <ScrollReveal delay={0.1}><p className="mt-6 text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">Mentor Global helps organizations move from isolated AI tools to governed intelligence infrastructure powered by DEXA, agent orchestration, RAG, rules engines, human approval gates, monitoring, audit logs, APIs, and workflow automation.</p></ScrollReveal>
        <ScrollReveal delay={0.2}><div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"><Link to="/contact" data-testid="ai-final-build-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors">Build AI Infrastructure <ArrowRight className="w-5 h-5" /></Link><Link to="/dexa" data-testid="ai-final-dexa-cta" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#11111F]/20 text-[#11111F] font-semibold hover:bg-[#11111F]/5 transition-colors">Explore DEXA <ArrowRight className="w-5 h-5" /></Link></div></ScrollReveal>
      </div>
    </section>
  );
}

export default function AIInfrastructure() {
  return (
    <main data-testid="ai-infrastructure-page">
      <Hero />
      <ProblemSection />
      <InfrastructureStack />
      <ConnectedRailsVisual />
      <DexaEngine />
      <FunctionalArchitecture />
      <DexaAcrossPillars />
      <AgenticPods />
      <GovernanceSection />
      <HumanApproval />
      <DexaScenarios />
      <Architecture />
      <DeploymentModels />
      <UseCasesSection />
      <OutcomesSection />
      <FinalCTA />
    </main>
  );
}
