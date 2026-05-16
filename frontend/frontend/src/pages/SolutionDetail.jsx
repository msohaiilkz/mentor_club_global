import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { solutionPillars } from "../data/content";

const solutionImages = {
  "healthcare-infrastructure": "https://images.unsplash.com/photo-1666886573301-b5d526cfd518?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=700",
  "insurance-infrastructure": "https://images.unsplash.com/photo-1765046255462-198d49d07dd1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=700",
  "fintech-infrastructure": "https://images.unsplash.com/photo-1675390479077-8faec43d1055?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=700",
  "ai-infrastructure": "https://images.unsplash.com/photo-1653549893012-b8b4fbe97630?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=700",
  "company-operating-infrastructure": "https://images.unsplash.com/photo-1598270174567-c38899618e28?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=700"
};

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutionPillars.find((s) => s.slug === slug);
  const currentIndex = solutionPillars.findIndex((s) => s.slug === slug);
  const nextSolution = solutionPillars[(currentIndex + 1) % solutionPillars.length];

  if (!solution) return <Navigate to="/solutions" />;

  return (
    <main data-testid={`solution-${slug}-page`}>
      {/* Hero */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-[1720px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <Link
              to="/solutions"
              data-testid="back-to-solutions"
              className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#0048FF] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> All Solutions
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="eyebrow mb-4">{solution.title}</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#11111F] tracking-tighter leading-[1.05]">
                  {solution.heroHeadline}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-8 hero-desc">
                  {solution.heroSubtext}
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="left">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={solutionImages[slug] || solutionImages["healthcare-infrastructure"]}
                  alt={solution.title}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who It Serves */}
      <section className="bg-white pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#11111F]/40 mb-4">Who it serves</p>
            <div className="flex flex-wrap gap-3">
              {solution.whoServes.map((who) => (
                <span key={who} className="px-4 py-2 border border-[#11111F]/10 text-sm text-[#11111F] font-medium">
                  {who}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.03] blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Modules</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mb-16">
              Core Infrastructure Modules
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
            {solution.modules.map((mod, i) => (
              <ScrollReveal key={mod} delay={i * 0.05}>
                <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                  <span className="text-[#0048FF] text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-base font-medium text-white">{mod}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Lines (only for insurance) */}
      {solution.insuranceLines && (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <p className="eyebrow mb-4">Insurance Lines</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-12">
                Across All Insurance Verticals
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-[#11111F]/10">
              {solution.insuranceLines.map((line, i) => (
                <ScrollReveal key={line} delay={i * 0.05}>
                  <div className={`p-5 md:p-6 text-sm font-medium text-[#11111F] card-hover
                    ${(i + 1) % 4 !== 0 ? "border-r border-[#11111F]/10" : ""}
                    border-b border-[#11111F]/10`}
                  >
                    {line}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Center (only for insurance) */}
      {solution.serviceCenter && (
        <section className="bg-[#11111F] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <p className="eyebrow mb-4">Digital Service Center</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
                Self-Service Insurance Operations
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10">
              {solution.serviceCenter.map((item, i) => (
                <ScrollReveal key={item} delay={i * 0.05}>
                  <div className="bg-[#11111F] p-6 card-hover-dark h-full">
                    <p className="text-sm font-medium text-white">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DEXA Intelligence (only for insurance) */}
      {solution.dexaIntelligence && (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <p className="eyebrow mb-4">DEXA Intelligence</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-12">
                AI-Powered Insurance Intelligence
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#11111F]/10">
              {solution.dexaIntelligence.map((item, i) => (
                <ScrollReveal key={item} delay={i * 0.05}>
                  <div className={`p-6 md:p-8 card-hover h-full
                    ${(i + 1) % 4 !== 0 ? "border-r border-[#11111F]/10" : ""}
                    ${i < solution.dexaIntelligence.length - 4 ? "border-b border-[#11111F]/10" : ""}`}
                  >
                    <span className="text-[#0048FF] text-xs font-bold mr-2">//</span>
                    <span className="text-sm font-medium text-[#11111F]">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AI Layers (only for AI infrastructure) */}
      {solution.layers && (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <p className="eyebrow mb-4">Architecture</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-12">
                DEXA Intelligence Layers
              </h2>
            </ScrollReveal>
            <div className="border border-[#11111F]/10">
              {solution.layers.map((layer, i) => (
                <ScrollReveal key={layer.name} delay={i * 0.08}>
                  <div className={`grid grid-cols-1 md:grid-cols-12 ${i > 0 ? "border-t border-[#11111F]/10" : ""}`}>
                    <div className="md:col-span-1 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#11111F]/10">
                      <span className="text-xs font-bold text-[#0048FF]">0{i + 1}</span>
                    </div>
                    <div className="md:col-span-4 p-6 border-b md:border-b-0 md:border-r border-[#11111F]/10">
                      <p className="text-base font-semibold text-[#11111F]">{layer.name}</p>
                    </div>
                    <div className="md:col-span-7 p-6">
                      <p className="text-sm text-[#666666] leading-relaxed">{layer.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Agent Pods (only for AI infrastructure) */}
      {solution.agentPods && (
        <section className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 blue-glow" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <p className="eyebrow mb-4">Agent Pods</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
                Agentic AI Pods
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
              {solution.agentPods.map((pod, i) => (
                <ScrollReveal key={pod} delay={i * 0.05}>
                  <div className="bg-[#11111F] p-6 md:p-8 card-hover-dark h-full">
                    <div className="w-8 h-8 border border-[#0048FF]/30 flex items-center justify-center mb-4">
                      <div className="w-2 h-2 bg-[#0048FF]" />
                    </div>
                    <p className="text-sm font-medium text-white">{pod}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Growth OS (only for company-operating-infrastructure) */}
      {solution.growthOS && (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <p className="eyebrow mb-4">Growth OS</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-4">
                {solution.growthOS.headline}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-12 flex flex-wrap items-center gap-0 border border-[#11111F]/10">
                {solution.growthOS.flow.map((step, i) => (
                  <div
                    key={step}
                    className={`flex-1 min-w-[140px] p-5 md:p-6 text-center ${i < solution.growthOS.flow.length - 1 ? "border-r border-[#11111F]/10" : ""}`}
                  >
                    <span className="text-[#0048FF] text-xs font-bold block mb-2">{i + 1}</span>
                    <p className="text-sm font-medium text-[#11111F]">{step}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* DEXA Role */}
      <section className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 blue-glow-subtle" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">DEXA Intelligence</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mb-6">
              DEXA Across {solution.title}
            </h2>
            <p className="section-desc-dark max-w-2xl">{solution.dexaRole}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              to="/dexa"
              data-testid="solution-dexa-link"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0048FF] hover:text-white transition-colors"
            >
              Explore DEXA <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual Concepts */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p className="eyebrow mb-4">Platform Visuals</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight mb-12">
              What the Infrastructure Looks Like
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.visuals.map((visual, i) => (
              <ScrollReveal key={visual} delay={i * 0.05}>
                <div className="group border border-[#11111F]/10 overflow-hidden card-hover">
                  <div className="relative w-full h-40 bg-gradient-to-br from-[#11111F]/[0.04] via-[#0048FF]/[0.03] to-[#11111F]/[0.02] flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 border border-[#0048FF]/20 flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#0048FF]/30 group-hover:bg-[#0048FF] transition-colors" />
                      </div>
                      <div className="w-16 h-[2px] bg-[#0048FF]/10" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-medium text-[#11111F]">{visual}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next Solution */}
      <section className="bg-[#11111F] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A8A93] mb-2">Next Solution</p>
            <p className="text-xl md:text-2xl font-bold text-white">{nextSolution.title}</p>
          </div>
          <Link
            to={`/solutions/${nextSolution.slug}`}
            data-testid="next-solution-link"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0048FF] text-white text-sm font-semibold hover:bg-[#0030CC] transition-colors"
          >
            Explore <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
