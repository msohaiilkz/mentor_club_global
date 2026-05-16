import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "../../components/shared/ScrollReveal";
import {
  insuranceProblems,
  insuranceRails,
  insuranceCompanyTypes,
  insuranceLines,
  insuranceStakeholders,
  insuranceJourneys,
  insuranceModules,
  brokerModules,
  reinsuranceRails,
  serviceCenterItems,
  dexaInsuranceCapabilities,
  dexaInsuranceScenarios,
  insuranceArchitectureLayers,
  insuranceDeploymentModels,
  insuranceUseCases,
  insuranceOutcomes,
} from "../../data/insurance";
import { ChatSimulation } from "../../components/shared/ChatSimulation";
import { MacbookMockup } from "../../components/shared/MacbookMockup";
import { IpadMockup } from "../../components/shared/IpadMockup";
import insuranceImg from "../../assets/Insurance Infrastructure.png";

function Hero() {
  return (
    <section
      data-testid="ins-hero"
      className="relative bg-[#11111F] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.05] blur-[140px]" />
      <div className="relative max-w-[1720px] mx-auto px-6 md:px-12">
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-sm text-[#8A8A93] hover:text-[#0048FF] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> All Solutions
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow mb-6">Insurance Infrastructure</p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white tracking-tighter leading-[1.05]">
                Insurance Infrastructure for Insurers, Reinsurers, Brokers,
                MGAs, TPAs, and Embedded Partners
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-8 hero-desc">
                Deploy connected insurance rails for product setup, quote
                journeys, underwriting, policy administration, reinsurance,
                broker operations, claims, renewals, service centers, embedded
                distribution, commissions, and DEXA powered intelligence.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#8A8A93]/70 max-w-xl">
                Mentor Global does not build isolated insurance tools. It builds
                the infrastructure that connects the insurance value chain from
                product to policy, claim, service, settlement, reinsurance, and
                renewal.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  data-testid="ins-hero-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
                >
                  Build Insurance Infrastructure{" "}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/dexa"
                  data-testid="ins-hero-dexa-cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                >
                  Explore DEXA Intelligence
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
                  src={insuranceImg}
                  alt="Insurance Infrastructure Dashboard"
                  className="w-full h-full object-cover object-left-top"
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
    <section data-testid="ins-problem" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">The Problem</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Insurance is not slow because people are slow. It is slow because
            the rails are fragmented.
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[#11111F]/10">
          {insuranceProblems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div className="bg-white p-6 card-hover h-full">
                <span className="text-[#0048FF] text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
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
      data-testid="ins-stack"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Infrastructure Stack</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            One Insurance Infrastructure Stack. Multiple Connected Rails.
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-[1px]">
          {insuranceRails.map((rail, idx) => (
            <ScrollReveal key={rail.name} delay={idx * 0.04}>
              <div className="bg-[#11111F] border border-white/10 p-5 md:p-7">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-56 shrink-0">
                    <span className="text-[#0048FF] text-xs font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">
                      {rail.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {rail.items.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] text-[#8A8A93] px-2.5 py-1 border border-white/10 hover:border-[#0048FF]/30 transition-colors"
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
    <section data-testid="ins-rails-visual" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">Connected Rails</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-16">
            From disconnected insurance workflows to one operating
            infrastructure layer
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto w-72 md:w-96 py-6 bg-[#11111F] text-white text-center mb-8">
            <p className="text-sm font-bold">Mentor Insurance Infrastructure</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-[#11111F]/10 border border-[#11111F]/10">
            {insuranceRails.map((rail, i) => (
              <div
                key={rail.name}
                className="p-5 md:p-6 text-center bg-white card-hover flex flex-col items-center justify-center min-h-[100px]"
              >
                <div className="w-2 h-2 bg-[#0048FF] mx-auto mb-3" />
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#11111F] leading-tight">
                  {rail.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
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

function InsuranceCompaniesSection() {
  return (
    <section
      data-testid="ins-companies"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Insurance and Reinsurance</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Built for insurance companies and reinsurance companies
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-white/10">
          {insuranceCompanyTypes.map((type, idx) => (
            <ScrollReveal key={type.name} delay={idx * 0.08}>
              <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                <h3 className="text-lg font-bold text-white mb-5">
                  {type.name}
                </h3>
                <div className="space-y-2">
                  {type.items.map((item) => (
                    <p
                      key={item}
                      className="text-xs text-[#8A8A93] flex items-start gap-2"
                    >
                      <span className="text-[#0048FF] mt-0.5 text-[10px]">
                        &#9632;
                      </span>{" "}
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

function InsuranceLinesSection() {
  return (
    <section data-testid="ins-lines" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Insurance Lines</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
            Across all major insurance and reinsurance verticals
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {insuranceLines.map((group, idx) => (
            <ScrollReveal key={group.group} delay={idx * 0.05}>
              <div className="border border-[#11111F]/10 p-5 md:p-6 card-hover h-full">
                <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#0048FF] mb-4">
                  {group.group}
                </p>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <p key={item} className="text-sm text-[#11111F]">
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

function WhoItServes() {
  return (
    <section
      data-testid="ins-stakeholders"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Stakeholders</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Built for every stakeholder in the insurance value chain
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10">
          {insuranceStakeholders.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 0.03}>
              <div className="bg-[#11111F] p-5 md:p-6 card-hover-dark h-full">
                <h3 className="text-sm font-bold text-white mb-3">{s.name}</h3>
                <p className="text-[11px] text-[#8A8A93] mb-2">
                  <span className="text-[#0048FF] font-bold">Pain:</span>{" "}
                  {s.pain}
                </p>
                <p className="text-[11px] text-[#8A8A93]">
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

function StakeholderJourneys() {
  return (
    <section data-testid="ins-journeys" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Stakeholder Journeys</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Insurance infrastructure becomes real when each stakeholder has a
            clear journey
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-4">
          {insuranceJourneys.map((j, idx) => (
            <ScrollReveal key={j.role} delay={idx * 0.04}>
              <div className="border border-[#11111F]/10 p-5 md:p-7 card-hover">
                <h3 className="text-base font-bold text-[#11111F] mb-4">
                  {j.role}
                </h3>
                <div className="flex flex-wrap items-center gap-1.5">
                  {j.steps.map((step, i) => (
                    <span key={step} className="flex items-center gap-1.5">
                      <span className="text-xs px-2.5 py-1 bg-[#11111F]/[0.03] border border-[#11111F]/10 text-[#11111F] font-medium">
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
      data-testid="ins-modules"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Core Modules</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Modular infrastructure for insurance operations
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {insuranceModules.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.03}>
              <div className="bg-[#11111F] p-5 md:p-7 card-hover-dark h-full">
                <span className="text-[#0048FF] text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold text-white mt-2 mb-2">
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

function BrokerSection() {
  return (
    <section data-testid="ins-broker" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Broker Infrastructure</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Brokers need operating infrastructure, not just a website
          </h2>
          <p className="mt-6 section-desc max-w-3xl">
            Insurance brokers manage relationships, risk discovery, submissions,
            carrier communication, policy servicing, claims assistance,
            renewals, commissions, and client trust.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[1px] bg-[#11111F]/10">
          {brokerModules.map((mod, i) => (
            <ScrollReveal key={mod} delay={i * 0.02}>
              <div className="bg-white p-4 md:p-5 card-hover h-full">
                <p className="text-xs text-[#11111F] font-medium">{mod}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReinsuranceSection() {
  return (
    <section
      data-testid="ins-reinsurance"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Reinsurance Infrastructure</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Reinsurance infrastructure for cedents, reinsurers, and reinsurance
            brokers
          </h2>
          <p className="mt-6 text-base text-[#8A8A93] max-w-3xl leading-relaxed">
            Insurance companies use reinsurance to manage risk, optimize
            capital, and support underwriting capacity. Reinsurance workflows
            need structured placement, treaty management, facultative
            submissions, bordereaux, claims recovery, accounting, settlement,
            and portfolio reporting.
          </p>
        </ScrollReveal>
        <div className="mt-12 space-y-[1px]">
          {reinsuranceRails.map((rail, idx) => (
            <ScrollReveal key={rail.name} delay={idx * 0.04}>
              <div className="bg-[#11111F] border border-white/10 p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8">
                  <div className="md:w-64 shrink-0">
                    <h3 className="text-sm font-bold text-white">
                      {rail.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {rail.items.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] text-[#8A8A93] px-2.5 py-1 border border-white/10"
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

function ServiceCenterSection() {
  return (
    <section
      data-testid="ins-service-center"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Digital Service Center</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl">
            Self service insurance operations for customers, brokers, and
            partners
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-px bg-[#11111F]/10 border border-[#11111F]/10">
          {serviceCenterItems.map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.02}>
              <div className="bg-white p-5 card-hover h-full text-center flex flex-col items-center justify-center min-h-[110px]">
                <div className="w-6 h-6 border border-[#0048FF]/20 flex items-center justify-center mx-auto mb-3">
                  <div className="w-1.5 h-1.5 bg-[#0048FF]" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#11111F] leading-tight">
                  {item}
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
    <section
      data-testid="ins-dexa"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 blue-glow-subtle" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">DEXA Intelligence</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            DEXA is the intelligence layer inside insurance infrastructure
          </h2>
          <p className="mt-6 text-base text-[#8A8A93] max-w-3xl leading-relaxed">
            DEXA turns insurance infrastructure from a workflow system into a
            guided operating layer. DEXA does not replace underwriters. DEXA
            does not replace brokers. DEXA does not replace claims handlers.
            DEXA does not make unsupported legal or coverage guarantees. DEXA
            operates inside approved product rules, policy data, underwriting
            logic, service workflows, claims status, document data, reinsurance
            workflows, user permissions, and escalation boundaries.
          </p>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {dexaInsuranceCapabilities.map((cap, i) => (
            <ScrollReveal key={cap.role} delay={i * 0.05}>
              <div className="bg-[#11111F] p-6 card-hover-dark h-full">
                <p className="text-sm font-bold text-[#0048FF] mb-4">
                  {cap.role}
                </p>
                <div className="space-y-2">
                  {cap.items.map((item) => (
                    <p key={item} className="text-xs text-[#8A8A93]">
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
      data-testid="ins-dexa-scenarios"
      className="bg-[#0B0B14] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0048FF]/[0.02]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">DEXA in Action</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
            From insurance complexity to governed next action
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative mt-8">
            <MacbookMockup>
              <ChatSimulation scenarios={dexaInsuranceScenarios} />
            </MacbookMockup>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">
                Governed Insurance Reasoning
              </h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">
                DEXA verifies policy rules, coverage limits, and underwriting guidelines before recommending any insurance action.
              </p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">
                Infrastructure Integration
              </h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">
                DEXA operates directly inside your insurance rails, linking to policy systems, claims engines, and reinsurance ledgers.
              </p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-white mb-2">
                Human in the Loop
              </h3>
              <p className="text-xs text-[#8A8A93] leading-relaxed">
                Complex underwriting referrals and claims exceptions are routed to specialist teams with full diagnostic context.
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
      data-testid="ins-architecture"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Architecture</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Built as insurance infrastructure, not a collection of screens
          </h2>
        </ScrollReveal>
        <div className="mt-16 border border-white/10">
          {insuranceArchitectureLayers.map((layer, idx) => (
            <ScrollReveal key={layer.name} delay={idx * 0.03}>
              <div
                className={`grid grid-cols-1 md:grid-cols-12 ${idx > 0 ? "border-t border-white/10" : ""}`}
              >
                <div className="md:col-span-3 p-4 md:p-5 border-b md:border-b-0 md:border-r border-white/10 flex items-center">
                  <div>
                    <span className="text-[#0048FF] text-xs font-bold">
                      L{idx + 1}
                    </span>
                    <p className="text-xs font-bold text-white mt-1">
                      {layer.name}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-9 p-4 md:p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] px-2 py-0.5 border border-white/10 text-[#8A8A93]"
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
    <section data-testid="ins-deployment" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Deployment</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
            Deploy insurance infrastructure according to your operating model
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#11111F]/10">
          {insuranceDeploymentModels.map((d, i) => (
            <ScrollReveal key={d.name} delay={i * 0.04}>
              <div className="bg-white p-6 md:p-8 card-hover h-full">
                <h3 className="text-sm font-bold text-[#11111F] mb-3">
                  {d.name}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
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
      data-testid="ins-use-cases"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Use Cases</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Insurance infrastructure that can power multiple business models
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10">
          {insuranceUseCases.map((uc, i) => (
            <ScrollReveal key={uc.name} delay={i * 0.03}>
              <div className="bg-[#11111F] p-5 md:p-7 card-hover-dark h-full">
                <h3 className="text-sm font-bold text-white mb-3">{uc.name}</h3>
                <div className="space-y-1 text-[11px] text-[#8A8A93]">
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
    <section data-testid="ins-outcomes" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Outcomes</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
            What insurance infrastructure should deliver
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#11111F]/10">
          {insuranceOutcomes.map((o, i) => (
            <ScrollReveal key={o} delay={i * 0.03}>
              <div className="bg-white p-5 card-hover h-full">
                <div className="w-6 h-6 border border-[#0048FF]/30 flex items-center justify-center mb-3">
                  <div className="w-1.5 h-1.5 bg-[#0048FF]" />
                </div>
                <p className="text-sm text-[#11111F] font-medium">{o}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-xs text-[#666666]/60 max-w-3xl">
            Designed to improve workflow visibility, reduce manual coordination,
            support faster product configuration, improve customer service
            tracking, and strengthen governance. These do not represent
            unsupported guarantees.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      data-testid="ins-final-cta"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0048FF]/[0.05] blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl mx-auto">
            Build insurance infrastructure that connects products, policies,
            claims, reinsurance, brokers, partners, and intelligence
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-base text-[#8A8A93] max-w-2xl mx-auto leading-relaxed">
            Mentor Global helps organizations move from fragmented insurance
            operations to connected infrastructure powered by portals, APIs,
            workflows, underwriting tools, policy systems, reinsurance
            workflows, claims engines, service centers, and DEXA intelligence.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="ins-final-build-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Build Insurance Infrastructure <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="ins-final-talk-cta"
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

export default function InsuranceInfrastructure() {
  return (
    <main data-testid="insurance-infrastructure-page">
      <Hero />
      <ProblemSection />
      <InfrastructureStack />
      <ConnectedRailsVisual />
      <InsuranceCompaniesSection />
      <InsuranceLinesSection />
      <WhoItServes />
      <StakeholderJourneys />
      <CoreModules />
      <BrokerSection />
      <ReinsuranceSection />
      <ServiceCenterSection />
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
