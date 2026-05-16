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
        <div className="absolute top-1/4 -right-[20%] w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] lg:w-[800px] lg:h-[800px] bg-[#0048FF]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side: Text Content */}
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0048FF] animate-pulse" />
                  <span className="text-sm sm:text-base font-bold tracking-widest uppercase text-white/80">
                    SOLUTIONS
                  </span>
                </div>
                <h1 className="text-[var(--fs-hero)] font-bold text-white tracking-tighter leading-[1.05]">
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
                <div className="relative w-full h-full flex items-center justify-center bg-[#05050A] overflow-hidden min-h-[400px] sm:min-h-[500px]">
                  {/* Background Grid Pattern */}
                  <div
                    className="absolute inset-0"
                    style={{
                      // backgroundImage:
                      //   "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />

                  {/* Scalable Container for Mobile Responsiveness */}
                  <div className="relative w-[300px] h-[300px] scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 flex items-center justify-center">
                    {/* Central Core Glow */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#0048FF]/20 rounded-full blur-[80px] pointer-events-none"
                    />

                    {/* Central Node */}
                    <div className="relative z-20 flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-24 h-24 rounded-full border border-[#0048FF]/30 border-t-[#0048FF] absolute"
                      />
                      <div className="w-16 h-16 rounded-full bg-[#11111F] border border-[#0048FF]/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,72,255,0.4)]">
                        <span className="text-[#0048FF] font-bold text-sm tracking-wider">
                          CORE
                        </span>
                      </div>
                    </div>

                    {/* Connecting Lines (SVG) with Animated Data Packets */}
                    <svg
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none"
                      style={{ zIndex: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="line-glow"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#0048FF"
                            stopOpacity="0.4"
                          />
                          <stop
                            offset="100%"
                            stopColor="#8A2BE2"
                            stopOpacity="0.1"
                          />
                        </linearGradient>
                      </defs>
                      <g stroke="url(#line-glow)" strokeWidth="1.5" fill="none">
                        {[-90, -18, 54, 126, 198].map((angle, i) => {
                          const x =
                            150 + Math.cos((angle * Math.PI) / 180) * 130;
                          const y =
                            150 + Math.sin((angle * Math.PI) / 180) * 130;
                          return (
                            <g key={i}>
                              <line
                                x1="150"
                                y1="150"
                                x2={x}
                                y2={y}
                                strokeDasharray="4 4"
                              />
                              <motion.circle
                                r="2"
                                fill="#fff"
                                initial={{ cx: 150, cy: 150, opacity: 0 }}
                                animate={{
                                  cx: [150, x],
                                  cy: [150, y],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.4,
                                  ease: "linear",
                                }}
                                style={{
                                  filter: "drop-shadow(0 0 4px #0048FF)",
                                }}
                              />
                            </g>
                          );
                        })}
                      </g>
                    </svg>

                    {/* Surrounding Nodes */}
                    {[
                      {
                        icon: Shield,
                        label: "Healthcare",
                        angle: -90,
                        radius: 130,
                      },
                      {
                        icon: Building2,
                        label: "Insurance",
                        angle: -18,
                        radius: 130,
                      },
                      { icon: Zap, label: "Fintech", angle: 54, radius: 130 },
                      { icon: Brain, label: "AI", angle: 126, radius: 130 },
                      { icon: Globe, label: "OS", angle: 198, radius: 130 },
                    ].map((node, i) => {
                      const x =
                        Math.cos((node.angle * Math.PI) / 180) * node.radius;
                      const y =
                        Math.sin((node.angle * Math.PI) / 180) * node.radius;
                      const Icon = node.icon;

                      return (
                        <motion.div
                          key={node.label}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1, x, y }}
                          transition={{
                            delay: 0.5 + i * 0.1,
                            duration: 0.8,
                            type: "spring",
                          }}
                          className="absolute top-1/2 left-1/2 -ml-8 -mt-8 w-16 h-16 flex flex-col items-center justify-center z-10"
                        >
                          <motion.div
                            animate={{ y: [-4, 4, -4] }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: i * 0.2,
                              ease: "easeInOut",
                            }}
                            className="flex flex-col items-center"
                          >
                            <motion.div
                              whileHover={{
                                scale: 1.15,
                                boxShadow: "0 0 20px rgba(0, 72, 255, 0.4)",
                                borderColor: "rgba(0, 72, 255, 0.8)",
                              }}
                              className="w-10 h-10 rounded-lg bg-[#11111F]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-colors cursor-pointer shadow-lg relative group"
                            >
                              <Icon className="w-4 h-4 text-white/80 group-hover:text-[#0048FF] transition-colors" />
                              <div className="absolute inset-0 bg-[#0048FF]/0 group-hover:bg-[#0048FF]/10 rounded-lg transition-colors" />
                            </motion.div>
                            <span className="mt-2 text-sm font-bold tracking-widest uppercase text-white/60 whitespace-nowrap">
                              {node.label}
                            </span>
                          </motion.div>
                        </motion.div>
                      );
                    })}

                    {/* Micro-labels floating around */}
                    {[
                      { text: "API-first", top: "-10%", left: "-10%" },
                      { text: "Multi-tenant", top: "0%", right: "-20%" },
                      { text: "White-labelled", bottom: "-0%", left: "-15%" },
                      { text: "Modular", bottom: "-5%", right: "-10%" },
                      { text: "Scalable Systems", top: "45%", right: "-25%" },
                    ].map((label, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 4,
                          delay: i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute z-0 hidden sm:block"
                        style={{
                          top: label.top,
                          left: label.left,
                          right: label.right,
                          bottom: label.bottom,
                        }}
                      >
                        <div className="px-2 py-1 bg-white/[0.03] border border-white/5 rounded text-sm font-mono text-[#0048FF]/80 whitespace-nowrap backdrop-blur-sm">
                          {label.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
                  <div
                    className={`${i > 0 ? "border-t border-[#11111F]/10" : ""}`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      {/* Number + Icon */}
                      <div className="lg:col-span-1 p-6 lg:p-8 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-4 border-b lg:border-b-0 lg:border-r border-[#11111F]/10">
                        <span className="text-base font-bold text-[#0048FF]">
                          0{i + 1}
                        </span>
                        <Icon
                          className="w-5 h-5 text-[#11111F]/40"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-7 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#11111F]/10">
                        <h2 className="text-[var(--fs-3xl)] font-bold text-[#11111F] tracking-tight mb-3">
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
                            DEXA:{" "}
                          </span>
                          {pillar.dexaRole}
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
                        <Link
                          to={`/solutions/${pillar.slug}`}
                          data-testid={`solution-card-${pillar.slug}`}
                          className="inline-flex items-center gap-2 text-base font-semibold text-[#0048FF] hover:text-[#0030CC] transition-colors"
                        >
                          Explore {pillar.title}{" "}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
