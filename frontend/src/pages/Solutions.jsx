import { Link } from "react-router-dom";
import { ArrowRight, Shield, Building2, Zap, Brain, Globe } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { solutionPillars } from "../data/content";
import { motion } from "framer-motion";
import { MacbookMockup } from "../components/shared/MacbookMockup";

const pillarIcons = {
  "healthcare-infrastructure": Shield,
  "insurance-infrastructure": Building2,
  "fintech-infrastructure": Zap,
  "ai-infrastructure": Brain,
  "company-operating-infrastructure": Globe,
};

export default function Solutions() {
  return (
    <main data-testid="solutions-page">
      {/* Premium Dark Hero */}
      <section className="relative bg-[#05050A] pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/3 -right-[20%] w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] lg:w-[800px] lg:h-[800px] bg-[#0048FF]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side: Text Content */}
            <div>
              <ScrollReveal>
                <p className="eyebrow mb-6 font-bold text-primary">SOLUTIONS</p>
                <h1 className="text-[38px] sm:text-[35px] md:text-[48px] lg:text-[54px] xl:text-[54px] font-bold text-white tracking-tighter leading-[1.05]">
                  Infrastructure for Healthcare, Insurance, Fintech, AI, and
                  Operating Systems
                </h1>
                <p className="mt-8 hero-desc">
                  Mentor Global helps organizations launch, automate, finance,
                  insure, and operate digital ecosystems through modular, API
                  first, multi tenant, white labelled infrastructure.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#solutions-list"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0048FF] text-white font-medium hover:bg-[#0030CC] transition-colors rounded-sm"
                  >
                    Explore Solutions <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 text-white border border-white/10 font-medium hover:bg-white/10 transition-colors rounded-sm"
                  >
                    Partner With Mentor Global
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side: Futuristic Infrastructure Visual */}
            <ScrollReveal delay={0.3}>
              <MacbookMockup>
                <div className="absolute inset-0 pt-6 flex items-center justify-center bg-[#05050A] overflow-hidden">
                  {/* Background: Perspective Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                      backgroundImage: `linear-gradient(#0048FF 1px, transparent 1px), linear-gradient(90deg, #0048FF 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                      perspective: "1000px",
                      transform:
                        "perspective(600px) rotateX(60deg) translateY(-80px)",
                      maskImage:
                        "radial-gradient(circle at 50% 50%, black, transparent 85%)",
                    }}
                  />

                  {/* Ambient Core Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#0048FF]/15 rounded-full blur-[100px] animate-pulse" />

                  {/* Visual Container */}
                  <div className="relative w-[450px] h-[450px] scale-[0.6] xs:scale-[0.7] sm:scale-[0.85] md:scale-[0.95] lg:scale-100 flex items-center justify-center">
                    {/* Rotating Architecture Rings */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute w-[380px] h-[380px] rounded-full border border-[#0048FF]/10 border-dashed"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 75,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute w-[300px] h-[300px] rounded-full border border-[#0048FF]/5"
                    />

                    {/* Central Core Module */}
                    <div className="relative z-50">
                      <div className="w-24 h-24 rounded-2xl bg-[#0a0a1a] border border-[#0048FF]/40 flex items-center justify-center shadow-[0_0_60px_rgba(0,72,255,0.25)] backdrop-blur-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0048FF]/20 to-transparent opacity-50" />
                        <div className="relative flex flex-col items-center">
                          <Brain className="w-9 h-9 text-[#0048FF] mb-1" />
                          <span className="text-[10px] font-bold text-white tracking-[0.25em]">
                            DeXa
                          </span>
                        </div>
                        {/* Scanning Effect */}
                        <motion.div
                          animate={{ top: ["-100%", "100%"] }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute left-0 right-0 h-[2px] bg-[#0048FF]/40 blur-sm"
                        />
                      </div>
                    </div>

                    {/* Nodes & Connecting Infrastructure */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                      <defs>
                        <filter id="glow-effect">
                          <feGaussianBlur stdDeviation="2" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {[
                        {
                          icon: Shield,
                          label: "Healthcare",
                          angle: -90,
                          id: "health",
                        },
                        {
                          icon: Building2,
                          label: "Insurance",
                          angle: -18,
                          id: "insure",
                        },
                        {
                          icon: Zap,
                          label: "Fintech",
                          angle: 54,
                          id: "fintech",
                        },
                        { icon: Brain, label: "AI", angle: 126, id: "ai" },
                        { icon: Globe, label: "OS", angle: 198, id: "os" },
                      ].map((node, i) => {
                        const radius = 160;
                        const x =
                          225 + Math.cos((node.angle * Math.PI) / 180) * radius;
                        const y =
                          225 + Math.sin((node.angle * Math.PI) / 180) * radius;
                        const pathD = `M 225 225 L ${x} ${y}`;

                        return (
                          <g key={node.id}>
                            {/* Path Line */}
                            <path
                              d={pathD}
                              stroke="#0048FF"
                              strokeWidth="1"
                              strokeOpacity="0.15"
                              fill="none"
                              strokeDasharray="4 6"
                            />

                            {/* Animated Data Packets */}
                            <motion.circle
                              r="2"
                              fill="#fff"
                              filter="url(#glow-effect)"
                            >
                              <animateMotion
                                dur={`${2.5 + i * 0.4}s`}
                                repeatCount="indefinite"
                                path={pathD}
                              />
                            </motion.circle>

                            {/* Node Icon Component */}
                            <foreignObject
                              x={x - 45}
                              y={y - 45}
                              width="90"
                              height="90"
                            >
                              <div className="w-full h-full flex flex-col items-center justify-center group">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className="w-14 h-14 rounded-xl bg-[#11111F]/90 border border-[#0048FF]/20 flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:border-[#0048FF]/50 group-hover:shadow-[0_0_25px_rgba(0,72,255,0.2)]"
                                >
                                  <node.icon className="w-6 h-6 text-[#0048FF]" />
                                </motion.div>
                                <span className="mt-3 text-[10px] font-bold text-[#8A8A93] uppercase tracking-[0.2em]">
                                  {node.label}
                                </span>
                              </div>
                            </foreignObject>
                          </g>
                        );
                      })}
                    </svg>

                    {/* HUD Status Elements */}
                    <div className="absolute top-0 left-0 p-6 border-l border-t border-[#0048FF]/20 rounded-tl-2xl pointer-events-none opacity-40">
                      <div className="text-[9px] font-mono text-[#0048FF] tracking-tighter">
                        INFRA_OS_LOADED
                      </div>
                      <div className="flex gap-1.5 mt-2">
                        {[1, 2, 3, 4, 5].map((b) => (
                          <motion.div
                            key={b}
                            animate={{ scaleY: [1, 1.5, 1] }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: b * 0.1,
                            }}
                            className="w-1 h-3 bg-[#0048FF]/40 rounded-full origin-bottom"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 p-6 border-r border-b border-[#0048FF]/20 rounded-br-2xl pointer-events-none opacity-40">
                      <div className="text-[9px] font-mono text-right text-[#0048FF]">
                        SYNC_LATENCY: 8ms
                      </div>
                      <div className="text-[9px] font-mono text-right text-white/40 mt-1 uppercase tracking-widest">
                        Global Cluster Active
                      </div>
                    </div>
                  </div>

                  {/* Subtle Scanlines Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
                      backgroundSize: "100% 2px, 3px 100%",
                    }}
                  />
                </div>
              </MacbookMockup>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="bg-white pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="border border-[#11111F]/10">
            {solutionPillars.map((pillar, i) => {
              const Icon = pillarIcons[pillar.slug];
              return (
                <ScrollReveal key={pillar.slug} delay={i * 0.08}>
                  <Link
                    to={`/solutions/${pillar.slug}`}
                    className={`block group relative transition-all duration-500 hover:bg-[#0048FF]/[0.03] ${i > 0 ? "border-t border-[#11111F]/10" : ""
                      }`}
                  >
                    {/* Hover Accent Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0048FF] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      {/* Number + Icon */}
                      <div className="lg:col-span-1 p-6 lg:p-8 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-4 border-b lg:border-b-0 lg:border-r border-[#11111F]/10 transition-colors duration-500 group-hover:border-[#0048FF]/20">
                        <span className="text-base font-bold text-[#0048FF] transition-transform duration-500 group-hover:scale-110">
                          0{i + 1}
                        </span>
                        <Icon
                          className="w-5 h-5 text-[#11111F]/40 transition-colors duration-500 group-hover:text-[#0048FF]"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-7 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#11111F]/10 transition-colors duration-500 group-hover:border-[#0048FF]/20">
                        <h2 className="text-[var(--fs-3xl)] font-bold text-[#0048FF] tracking-tight text-xl mb-3">
                          {pillar.title}
                        </h2>
                        <p className="text-base text-[#666666] leading-relaxed mb-4">
                          {pillar.shortDesc}
                        </p>
                        <div className="mb-4">
                          <p className="text-base uppercase tracking-[0.15em] font-bold text-[#11111F]/40 mb-2">
                            Who it serves
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {pillar.whoServes.map((who) => (
                              <span
                                key={who}
                                className="text-base px-3 py-1 border border-[#11111F]/10 text-[#666666]"
                              >
                                {who}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-base text-[#666666] leading-relaxed">
                          <span className="text-[#0048FF] font-semibold">
                            DeXa:{" "}
                          </span>
                          {pillar.DeXaRole}
                        </p>
                      </div>

                      {/* Modules + CTA */}
                      <div className="lg:col-span-4 p-6 lg:p-8 flex flex-col justify-between">
                        <div>
                          <p className="text-base uppercase tracking-[0.15em] font-bold text-[#11111F]/40 mb-3">
                            Key Modules
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {(pillar.modules || []).slice(0, 6).map((mod) => (
                              <span
                                key={mod}
                                className="text-base text-[#666666] after:content-[','] last:after:content-['']"
                              >
                                {mod}
                              </span>
                            ))}
                            {(pillar.modules || []).length > 6 && (
                              <span className="text-base text-[#0048FF] font-medium">
                                +{pillar.modules.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-2 text-base font-semibold text-[#0048FF] group-hover:translate-x-2 transition-transform duration-500">
                          Explore {pillar.title}{" "}
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
