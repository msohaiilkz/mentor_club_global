import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Quote,
  Sparkles,
  Network,
  Users,
} from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { IpadMockup } from "../components/shared/IpadMockup";
import { MatrixRain } from "../components/shared/MatrixRain";
import teamGroupTest from "../assets/team-group-test.png";
import teamBgTest from "../assets/team-group-test-1.jpg";
import groupPhoto from "../assets/group2.jpeg";
import {
  founderDeclaration,
  founderQuote,
  philosophyCards,
  architectureDomains,
  founderFeature,
  boardProfiles,
  executiveLeaders,
  dexaProfile,
  leaderProfiles,
  operatingModelFlow,
  ownershipMatrix,
  matrixRows,
  matrixColumns,
  credibilityCards,
  governanceDisclaimer,
  futurePlaceholders,
} from "../data/leadership";

/* ====================================================================
   Shared visual primitives
   - Glass card style: thin border, subtle inner gradient, soft glow on hover
   - Indigo/violet accent (#6366F1) used alongside Mentor blue (#0048FF)
   ==================================================================== */

const NAVY = "#0a0a15";
const NEAR_BLACK = "#11111F";
const BLUE = "#0048FF";
const INDIGO = "#6366F1";

/* Premium dark avatar — used when professional photo unavailable.
   Same visual identity for every leader, no "Photo Coming Soon" text. */
function PremiumAvatar({ name, square = false }) {
  const initials = name
    .split(" ")
    .filter((w) => !w.endsWith("."))
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className={`relative w-full ${
        square ? "aspect-square" : "h-full"
      } overflow-hidden rounded-none`}
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, #1a1a2e 0%, #0a0a15 60%, #000 100%)",
      }}
    >
      {/* indigo glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 70% 80%, rgba(99,102,241,0.18) 0%, transparent 55%)",
        }}
      />
      {/* mentor blue glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 25% 75%, rgba(0,72,255,0.20) 0%, transparent 55%)",
        }}
      />
      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* monogram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-7xl md:text-8xl font-bold tracking-tighter"
          style={{
            color: "rgba(255,255,255,0.08)",
            WebkitTextStroke: "1px rgba(99,102,241,0.4)",
          }}
        >
          {initials}
        </span>
      </div>
      {/* corner mark */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div
          className="w-1.5 h-1.5 rounded-none"
          style={{ background: INDIGO, boxShadow: `0 0 12px ${INDIGO}` }}
        />
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-bold">
          Architect Identity
        </span>
      </div>
      <div className="absolute bottom-4 right-4 text-[9px] uppercase tracking-[0.15em] text-white/30 font-mono">
        MNTR-LEAD
      </div>
    </div>
  );
}

function LeaderPhoto({ photo, name, square = false }) {
  if (photo) {
    return (
      <div
        className={`relative w-full ${
          square ? "aspect-square" : "h-full"
        } overflow-hidden rounded-none bg-[#0a0a15]`}
      >
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover object-center transition-all duration-500"
          // style={{ filter: "grayscale(0.85) contrast(1.05)" }}
        />
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(160deg, rgba(0,72,255,0.10) 0%, rgba(0,0,0,0) 35%, rgba(99,102,241,0.10) 100%)",
            mixBlendMode: "screen",
          }}
        />
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-none" /> */}
      </div>
    );
  }
  return <PremiumAvatar name={name} square={square} />;
}

/* DEXA intelligence core — abstract, glowing, orbital */
function DexaCore({ size = "lg" }) {
  const sizeMap = {
    md: "w-48 h-48",
    lg: "w-full aspect-square max-w-[440px]",
  };
  return (
    <div
      className={`${sizeMap[size]} relative rounded-none overflow-hidden`}
      style={{
        background:
          "radial-gradient(ellipse at center, #0a0a25 0%, #050510 70%, #000 100%)",
      }}
    >
      {/* outer indigo halo */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 60%)",
        }}
      />

      {/* orbit rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[78%] rounded-full border border-[#0048FF]/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] h-[58%] rounded-full border border-[#6366F1]/15"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38%] h-[38%] rounded-full border border-[#0048FF]/20"
      />

      {/* core pulse */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] h-[22%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #6366F1 0%, #0048FF 50%, transparent 85%)",
          boxShadow:
            "0 0 60px rgba(99,102,241,0.4), 0 0 120px rgba(0,72,255,0.3)",
        }}
      />

      {/* orbital nodes */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i * (Math.PI * 2)) / 6;
        return (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div
              className="absolute w-2 h-2 rounded-none"
              style={{
                left: `${50 + 39 * Math.cos(a)}%`,
                top: `${50 + 39 * Math.sin(a)}%`,
                transform: "translate(-50%,-50%)",
                background: i % 2 === 0 ? BLUE : INDIGO,
                boxShadow: `0 0 10px ${i % 2 === 0 ? BLUE : INDIGO}`,
              }}
            />
          </motion.div>
        );
      })}

      {/* Floating data particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1.2, 0],
            x: [0, (Math.random() - 0.5) * 320],
            y: [0, (Math.random() - 0.5) * 320],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
          className="absolute left-1/2 top-1/2 w-[1.5px] h-[1.5px] rounded-none bg-white"
        />
      ))}

      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div
          className="w-1.5 h-1.5 rounded-none animate-pulse"
          style={{ background: INDIGO, boxShadow: `0 0 12px ${INDIGO}` }}
        />
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 font-bold">
          DEXA Intelligence Core
        </span>
      </div>
      <div className="absolute bottom-4 right-4 text-[9px] uppercase tracking-[0.15em] text-white/40 font-mono">
        AI · Governed
      </div>
    </div>
  );
}

/* ========================== SECTION 1: HERO ========================== */

function Hero() {
  return (
    <section
      data-testid="team-hero"
      className="relative bg-[#0B0B14] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-white/5"
    >
      {/* Structural Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          // backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[170px]"
        style={{ background: "rgba(99,102,241,0.10)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px]"
        style={{ background: "rgba(0,72,255,0.10)" }}
      />
      <div className="relative max-w-[1720px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-6">
            <ScrollReveal>
              <p className="eyebrow mb-6 font-bold text-primary">
                Leadership Architects
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white tracking-tighter leading-[1.05]">
                The Architects Building Global Health Fintech Infrastructure
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="mt-8 hero-desc max-w-2xl">
                Mentor Global is led by operators, builders, product thinkers,
                technology architects, healthcare leaders, finance strategists,
                governance experts, and DEXA, the intelligence layer that
                connects the system.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <p className="mt-4 text-sm text-white/50 max-w-2xl leading-relaxed">
                The leadership team behind Mentor Global is designed like the
                company itself: structured, cross functional, infrastructure
                focused, and built for global scale.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.28}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#architects"
                  data-testid="team-hero-cta-primary"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold transition-all hover:translate-y-[-1px]"
                  style={{
                    background: BLUE,
                    boxShadow: "0 6px 32px rgba(0,72,255,0.4)",
                  }}
                >
                  Meet the Architects <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/"
                  data-testid="team-hero-cta-secondary"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                >
                  Explore Mentor Global
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Leadership Architecture Console */}
          <ScrollReveal delay={0.2} direction="left" className="lg:col-span-6">
            <IpadMockup
              orientation="landscape"
              aspect="aspect-[16/10]"
              className="max-w-[720px] lg:max-w-none"
            >
              {/* TEST IMAGE - BEGIN */}
              <div className="w-full h-full relative overflow-hidden bg-[#050510] flex items-end justify-center px-4 md:px-0">
                {/* Internal Background Image */}
                <div
                  className="absolute inset-0 z-0 opacity-15"
                  style={{
                    backgroundImage: `url(${teamBgTest})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mixBlendMode: "luminosity",
                  }}
                />

                <MatrixRain color="#6366F1" opacity={0.3} fontSize={16} />

                {/* Overlay Text from Image */}
                <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20 max-w-[80%] text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight uppercase">
                    Empowering Businesses.
                  </h2>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight uppercase text-primary">
                    Delivering Solutions.
                  </h2>
                  <div className="w-20 h-[1px] bg-white/30 my-4" />
                  <p className="text-[10px] sm:text-xs md:text-sm text-white/80 font-bold uppercase tracking-[0.15em] leading-relaxed">
                    Strategy. Technology. Growth.
                    <br />
                    All Under One Roof.
                  </p>
                </div>

                <img
                  src={teamGroupTest}
                  alt="Team Leadership"
                  className="w-full h-full object-contain object-bottom relative z-10"
                />
              </div>
              {/* TEST IMAGE - END */}

              {/* 
              ORIGINAL CONSOLE CODE - PRESERVED FOR LATER
              <div
                className="relative h-full p-5 sm:p-7 overflow-hidden flex flex-col"
                style={{
                  background:
                    "linear-gradient(160deg, #0a0a15 0%, #050510 100%)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-2 h-2 rounded-none animate-pulse"
                    style={{
                      background: INDIGO,
                      boxShadow: `0 0 10px ${INDIGO}`,
                    }}
                  />
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] font-bold"
                    style={{ color: INDIGO }}
                  >
                    Leadership Architecture Console
                  </span>
                  <span className="text-[10px] text-white/40 ml-auto font-mono">
                    ACTIVE
                  </span>
                </div>

                <div
                  className="rounded-none border p-4 mb-4 text-center"
                  style={{
                    borderColor: "rgba(0,72,255,0.4)",
                    background:
                      "linear-gradient(135deg, rgba(0,72,255,0.08) 0%, rgba(99,102,241,0.05) 100%)",
                  }}
                >
                  <p
                    className="text-[9px] uppercase tracking-[0.25em] font-bold mb-1"
                    style={{ color: INDIGO }}
                  >
                    Center · Holding
                  </p>
                  <p className="text-base text-white font-bold">Mentor Global</p>
                  <p className="text-[11px] text-white/90 font-semibold mt-1">
                    Dr. Ali Azeem Rajwani
                  </p>
                  <p className="text-[9px] text-white/40 mt-1 uppercase tracking-wider">
                    Infrastructure Mission
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {architectureDomains.slice(1, 7).map((a) => (
                    <div
                      key={a.name}
                      className="rounded-none border border-white/10 p-3 hover:border-[#6366F1]/40 transition-colors"
                      style={{
                        background:
                          "linear-gradient(160deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                      }}
                    >
                      <p
                        className="text-[8px] uppercase tracking-[0.1em] font-bold mb-1"
                        style={{ color: BLUE }}
                      >
                        {a.short}
                      </p>
                      <p className="text-[11px] text-white font-semibold leading-tight">
                        {a.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-4 rounded-none p-3 flex items-center gap-3 border"
                  style={{
                    borderColor: "rgba(99,102,241,0.4)",
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(0,72,255,0.04) 100%)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-none flex items-center justify-center flex-shrink-0 border"
                    style={{ borderColor: "rgba(99,102,241,0.5)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-none"
                      style={{
                        background: INDIGO,
                        boxShadow: `0 0 8px ${INDIGO}`,
                      }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-[9px] uppercase tracking-[0.2em] font-bold"
                      style={{ color: INDIGO }}
                    >
                      Virtual Intelligence Layer
                    </p>
                    <p className="text-xs text-white font-semibold">
                      DEXA · AI Intelligence
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Healthcare",
                      "Insurance",
                      "Fintech",
                      "AI",
                      "Company OS",
                    ].map((n) => (
                      <span
                        key={n}
                        className="text-[8px] px-2 py-1 rounded-none border border-white/10 text-white/60 font-bold uppercase tracking-wider"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              */}
            </IpadMockup>
          </ScrollReveal>
        </div>

        {/* <ScrollReveal delay={0.35}>
          <p className="mt-14 text-xs uppercase tracking-[0.3em] text-white/30 font-bold border-t border-white/10 pt-8">
            This team is building infrastructure, not managing departments.
          </p>
        </ScrollReveal> */}
      </div>
    </section>
  );
}

/* ===================== SECTION 2: FOUNDER DECLARATION ===================== */

// function FounderDeclarationSection() {
//   return (
//     <section
//       data-testid="team-founder-declaration"
//       className="relative py-28 md:py-36 overflow-hidden border-b border-white/5"
//       style={{ background: NAVY }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`,
//           backgroundSize: "80px 80px",
//         }}
//       />
//       <div
//         className="absolute -top-20 right-0 w-[700px] h-[700px] rounded-none blur-[200px]"
//         style={{ background: "rgba(99,102,241,0.08)" }}
//       />
//       <div className="relative max-w-7xl mx-auto px-6 md:px-12">
//         <ScrollReveal>
//           <p className="eyebrow mb-4 font-bold" style={{ color: INDIGO }}>
//             Founder Declaration
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-16">
//             The Founder's Declaration
//           </h2>
//         </ScrollReveal>

//         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
//           <ScrollReveal delay={0.1} className="md:col-span-5">
//             <div className="relative">
//               {/* Vertical Accent Border */}
//               <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-[#0048FF]" />

//               <div className="aspect-[4/5] max-w-[460px] overflow-hidden bg-[#0a0a15] relative ring-1 ring-white/10">
//                 <img
//                   src={founderFeature.photo}
//                   alt={founderFeature.name}
//                   className="w-full h-full object-cover transition-all duration-700"
//                   // style={{ filter: "grayscale(1) contrast(1.1)" }}
//                 />
//                 <div
//                   className="absolute inset-0 pointer-events-none"
//                   style={{
//                     background:
//                       "linear-gradient(160deg, rgba(0,72,255,0.18) 0%, transparent 50%, rgba(99,102,241,0.18) 100%)",
//                     mixBlendMode: "screen",
//                   }}
//                 />
//               </div>
//             </div>
//           </ScrollReveal>

//           <ScrollReveal delay={0.18} className="md:col-span-7">
//             <Quote
//               className="w-12 h-12 mb-8"
//               style={{ color: "rgba(99,102,241,0.4)" }}
//             />
//             <blockquote className="text-2xl md:text-3xl lg:text-[36px] font-semibold text-white leading-[1.3] tracking-tight">
//               “{founderQuote.text}”
//             </blockquote>
//             <div className="mt-12 pt-8 border-t border-white/10">
//               <p className="text-base font-bold text-white">
//                 — {founderQuote.author}
//               </p>
//               <p className="text-sm text-[#8A8A93] mt-1">{founderQuote.role}</p>
//             </div>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// }

/* ==================== SECTION 3: LEADERSHIP PHILOSOPHY ==================== */

function LeadershipPhilosophy() {
  return (
    <section
      data-testid="team-philosophy"
      className="py-24 md:py-32"
      style={{ background: "white" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="eyebrow mb-4 font-bold" style={{ color: BLUE }}>
                Leadership Philosophy
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05]">
                Built by Operators. Designed for Scale.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="mt-8 text-base text-[#666666] leading-relaxed">
                Mentor Global is led by people who understand that
                infrastructure is not built through ideas alone. It is built
                through execution, systems, product discipline, technology
                depth, healthcare experience, financial governance, and
                responsible intelligence.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4">
            {philosophyCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <div
                  className="group rounded-none border border-[#11111F]/10 p-7 h-full transition-all duration-300 hover:border-[#0048FF]/40 hover:translate-y-[-2px]"
                  style={{
                    background: "#f8f8f9",
                  }}
                >
                  <span
                    className="text-xs font-bold font-mono"
                    style={{ color: BLUE }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-[#11111F] mt-4 mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== SECTION 4: ARCHITECTURE MAP ===================== */

function ArchitectureMap() {
  const radius = 250;
  return (
    <section
      data-testid="team-architecture-map"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #0a0a15 0%, #11111F 100%)`,
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[200px]"
        style={{ background: "rgba(99,102,241,0.10)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4 font-bold text-primary">
            Leadership Architecture Map
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            Ten Human Architects. One Virtual Intelligence Officer. One
            Infrastructure Mission.
          </h2>
        </ScrollReveal>

        {/* Team Group Photo */}
        <ScrollReveal delay={0.1}>
          <div className="mt-14 mb-12 relative overflow-hidden rounded-none border border-white/10 max-w-5xl mx-auto px-4 sm:px-0">
            <div className="relative">
              <img
                src={groupPhoto}
                alt="Mentor Global Leadership Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a15]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </ScrollReveal>

        {/* Desktop circular map */}
        <ScrollReveal delay={0.15}>
          <div className="hidden lg:flex justify-center mt-20">
            <div
              className="relative"
              style={{ width: radius * 2 + 260, height: radius * 2 + 80 }}
            >
              {/* Concentric rings - slow rotation */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                style={{
                  width: radius * 2 + 80,
                  height: radius * 2 + 80,
                  animation: "orbitSpin 90s linear infinite reverse",
                }}
              />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  animation: "orbitSpin 120s linear infinite",
                }}
              />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6366F1]/20"
                style={{
                  width: radius * 1.2,
                  height: radius * 1.2,
                  animation: "orbitSpin 80s linear infinite reverse",
                }}
              />

              {/* Glowing center hub - stays fixed */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-none flex flex-col items-center justify-center text-center px-4 z-10"
                style={{
                  background: `radial-gradient(circle, ${BLUE} 0%, ${INDIGO} 100%)`,
                  boxShadow:
                    "0 0 40px rgba(99,102,241,0.5), 0 0 80px rgba(0,72,255,0.4)",
                }}
              >
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/80 font-bold">
                  Center
                </p>
                <p className="text-base font-bold text-white mt-1 leading-tight">
                  Mentor Global
                </p>
                <p className="text-[10px] text-white/80 mt-2 leading-tight">
                  Infrastructure Mission
                </p>
              </div>

              {/* Orbital Animation Keyframes */}
              <style>{`
                @keyframes orbitSpin {
                  from { transform: translate(-50%, -50%) rotate(0deg); }
                  to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes orbitSpinNodes {
                  from { transform: translate(-50%, -50%) rotate(0deg); }
                  to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes counterSpin {
                  from { transform: translate(-50%, -50%) rotate(0deg); }
                  to { transform: translate(-50%, -50%) rotate(-360deg); }
                }
              `}</style>

              {/* Rotating Nodes Container */}
              <div
                className="absolute left-1/2 top-1/2"
                style={{
                  width: radius * 2 + 260,
                  height: radius * 2 + 80,
                  animation: "orbitSpinNodes 60s linear infinite",
                }}
              >
                {/* Nodes */}
                {architectureDomains.map((a, i) => {
                  const angle =
                    (i * (2 * Math.PI)) / architectureDomains.length -
                    Math.PI / 2;
                  const cx = radius * Math.cos(angle);
                  const cy = radius * Math.sin(angle);
                  const isDexa = a.virtual;
                  return (
                    <div
                      key={a.name}
                      className="absolute group"
                      style={{
                        left: `calc(50% + ${cx}px)`,
                        top: `calc(50% + ${cy}px)`,
                        animation: "counterSpin 60s linear infinite",
                      }}
                    >
                      <div
                        className="w-[185px] rounded-none border p-3 text-center backdrop-blur-md transition-all duration-300 hover:translate-y-[-2px]"
                        style={{
                          borderColor: isDexa
                            ? "rgba(99,102,241,0.5)"
                            : "rgba(255,255,255,0.12)",
                          background: isDexa
                            ? "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(0,72,255,0.06) 100%)"
                            : "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                          boxShadow: isDexa
                            ? "0 0 20px rgba(99,102,241,0.25)"
                            : undefined,
                        }}
                      >
                        <p
                          className="text-[9px] uppercase tracking-[0.15em] font-bold mb-1"
                          style={{ color: isDexa ? INDIGO : BLUE }}
                        >
                          {a.domain}
                        </p>
                        <p className="text-[12px] font-bold text-white leading-tight">
                          {a.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile/tablet grid */}
        <div className="lg:hidden mt-14 grid grid-cols-1 md:grid-cols-2 gap-3">
          {architectureDomains.map((a) => {
            const isDexa = a.virtual;
            return (
              <div
                key={a.name}
                className="rounded-none border p-5"
                style={{
                  borderColor: isDexa
                    ? "rgba(99,102,241,0.5)"
                    : "rgba(255,255,255,0.1)",
                  background: isDexa
                    ? "linear-gradient(135deg, rgba(99,102,241,0.10) 0%, rgba(0,72,255,0.04) 100%)"
                    : "rgba(255,255,255,0.02)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2"
                  style={{ color: isDexa ? INDIGO : BLUE }}
                >
                  {a.domain}
                </p>
                <p className="text-base font-bold text-white">{a.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ====================== SECTION 5: FOUNDER FEATURE ====================== */

function FounderFeatureSection() {
  return (
    <section
      data-testid="team-founder-feature"
      id="architects"
      className="py-24 md:py-32"
      style={{ background: "white" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Founder Feature</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05]">
            {founderFeature.name}
          </h2>
          <p className="mt-3 text-base font-semibold" style={{ color: BLUE }}>
            {founderFeature.title}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left */}
          <ScrollReveal className="lg:col-span-5" delay={0.1}>
            <div className="aspect-[4/5] max-w-[460px]">
              <LeaderPhoto
                photo={founderFeature.photo}
                name={founderFeature.name}
              />
            </div>
            <div className="mt-6 rounded-none border border-[#11111F]/10 p-6 bg-[#f8f8f9]">
              <p
                className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2"
                style={{ color: BLUE }}
              >
                Architecture Domain
              </p>
              <p className="text-sm font-bold text-[#11111F] leading-snug">
                {founderFeature.architectureDomain}
              </p>

              <div className="mt-5 pt-5 border-t border-[#11111F]/10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#666666] font-bold mb-3">
                  Infrastructure Pillars
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {founderFeature.pillars.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] px-2.5 py-1 rounded-none font-semibold"
                      style={{
                        border: `1px solid ${BLUE}40`,
                        color: BLUE,
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-[#11111F]/10">
                <a
                  href="#founder-profile"
                  data-testid="founder-read-profile"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  style={{ background: BLUE }}
                >
                  Read Founder Profile <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal className="lg:col-span-7" delay={0.15}>
            <div id="founder-profile">
              <p
                className="text-[11px] uppercase tracking-[0.25em] font-bold mb-4"
                style={{ color: BLUE }}
              >
                Profile Summary
              </p>
              <div className="space-y-4 text-base md:text-lg text-[#11111F] leading-relaxed">
                {Array.isArray(founderFeature.summary) ? (
                  founderFeature.summary.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
                ) : (
                  <p>{founderFeature.summary}</p>
                )}
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.25em] font-bold mb-4"
                    style={{ color: BLUE }}
                  >
                    Experience
                  </p>
                  <ul className="space-y-3">
                    {founderFeature.experience.map((e) => (
                      <li
                        key={e}
                        className="flex gap-3 text-sm text-[#11111F] leading-relaxed"
                      >
                        <span
                          className="flex-shrink-0 font-bold"
                          style={{ color: BLUE }}
                        >
                          ▸
                        </span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.25em] font-bold mb-4"
                    style={{ color: BLUE }}
                  >
                    What he is building for Mentor Global
                  </p>
                  <ul className="space-y-3">
                    {founderFeature.building.map((e) => (
                      <li
                        key={e}
                        className="flex gap-3 text-sm text-[#11111F] leading-relaxed"
                      >
                        <span
                          className="flex-shrink-0 font-bold"
                          style={{ color: BLUE }}
                        >
                          ▸
                        </span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="mt-10 rounded-none p-7 border-l-4"
                style={{
                  background: "#f8f8f9",
                  borderLeftColor: BLUE,
                }}
              >
                <Quote
                  className="w-7 h-7 mb-4"
                  style={{ color: `${BLUE}40` }}
                />
                <p className="text-base md:text-lg text-[#11111F] italic leading-relaxed">
                  “{founderQuote.text}”
                </p>
                <p className="mt-4 text-sm font-bold text-[#11111F]">
                  — {founderQuote.author}
                </p>
                <p className="text-[10px] text-[#8A8A93] uppercase tracking-widest mt-1">
                  {founderQuote.role}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ====================== SECTION 6: BOARD LEADERSHIP ====================== */

// function BoardLeadershipSection() {
//   return (
//     <section
//       data-testid="team-board"
//       className="py-24 md:py-32"
//       style={{ background: "#f8f8f9" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <ScrollReveal>
//           <p className="eyebrow mb-4">Board Leadership</p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
//             Board Leadership Built for Vision, Execution, Enterprise Scale, and
//             Governance
//           </h2>
//         </ScrollReveal>

//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {boardProfiles.map((p, i) => (
//             <ScrollReveal key={p.name} delay={i * 0.08}>
//               <div
//                 className="group h-full rounded-none border border-[#11111F]/10 bg-white p-8 transition-all duration-300 hover:border-[#0048FF]/40 hover:translate-y-[-2px]"
//                 style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.02)" }}
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <span
//                     className="px-3 py-1 rounded-none text-[10px] uppercase tracking-[0.2em] font-bold"
//                     style={{
//                       background: "rgba(0,72,255,0.08)",
//                       color: BLUE,
//                     }}
//                   >
//                     Board Director
//                   </span>
//                   <span className="text-xs text-[#666666] font-mono">
//                     {String(i + 1).padStart(2, "0")}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-bold text-[#11111F] leading-snug">
//                   {p.name}
//                 </h3>
//                 <p
//                   className="text-xs font-semibold mt-1.5 mb-6"
//                   style={{ color: BLUE }}
//                 >
//                   {p.title}
//                 </p>

//                 <p className="text-[10px] uppercase tracking-[0.2em] text-[#666666] font-bold mb-3">
//                   Board Role
//                 </p>
//                 <ul className="space-y-2">
//                   {p.role.map((r) => (
//                     <li
//                       key={r}
//                       className="flex gap-2 text-sm text-[#11111F] leading-relaxed"
//                     >
//                       <span
//                         className="flex-shrink-0 font-bold"
//                         style={{ color: BLUE }}
//                       >
//                         •
//                       </span>
//                       <span>{r}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ====================== SECTION 7: EXECUTIVE LEADERSHIP ====================== */

// function ExecutiveLeadershipSection() {
//   return (
//     <section
//       data-testid="team-executive"
//       className="py-24 md:py-32"
//       style={{ background: NEAR_BLACK }}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <ScrollReveal>
//           <p className="eyebrow mb-4 font-bold" style={{ color: INDIGO }}>
//             Executive Leadership
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
//             Executive Leadership Across Product, Technology, Health Operations,
//             Finance, and Governance
//           </h2>
//         </ScrollReveal>

//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {executiveLeaders
//             .filter((l) => !l.virtual)
//             .map((l, i) => (
//               <ScrollReveal key={l.name} delay={i * 0.06}>
//                 <div
//                   className="group h-full rounded-none border border-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#6366F1]/40 hover:translate-y-[-2px]"
//                   style={{
//                     background:
//                       "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
//                   }}
//                 >
//                   <div className="flex items-center justify-between mb-5">
//                     <span
//                       className="text-[9px] uppercase tracking-[0.2em] font-bold"
//                       style={{ color: BLUE }}
//                     >
//                       Executive
//                     </span>
//                     <span className="text-xs font-mono text-white/40">
//                       {String(i + 1).padStart(2, "0")}
//                     </span>
//                   </div>
//                   <h3 className="text-base font-bold text-white leading-snug">
//                     {l.name}
//                   </h3>
//                   <p
//                     className="text-xs font-semibold mt-2 leading-snug"
//                     style={{ color: BLUE }}
//                   >
//                     {l.title}
//                   </p>
//                   {l.subtitle && (
//                     <p className="mt-1 text-[10px] text-white/50 italic">
//                       {l.subtitle}
//                     </p>
//                   )}
//                 </div>
//               </ScrollReveal>
//             ))}
//         </div>

//         {/* DEXA — visually distinct */}
//         <ScrollReveal delay={0.15}>
//           <div
//             className="mt-6 rounded-none p-7 md:p-9 backdrop-blur-md border"
//             style={{
//               borderColor: "rgba(99,102,241,0.4)",
//               background:
//                 "linear-gradient(135deg, rgba(99,102,241,0.10) 0%, rgba(0,72,255,0.05) 50%, rgba(99,102,241,0.08) 100%)",
//               boxShadow: "0 0 60px rgba(99,102,241,0.15)",
//             }}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
//               <div className="md:col-span-2 flex justify-center">
//                 <DexaCore size="md" />
//               </div>
//               <div className="md:col-span-10">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div
//                     className="w-2 h-2 rounded-none animate-pulse"
//                     style={{
//                       background: INDIGO,
//                       boxShadow: `0 0 10px ${INDIGO}`,
//                     }}
//                   />
//                   <span
//                     className="text-[10px] uppercase tracking-[0.25em] font-bold"
//                     style={{ color: INDIGO }}
//                   >
//                     Virtual Intelligence Layer
//                   </span>
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
//                   DEXA, Group Chief AI Intelligence Officer
//                 </h3>
//                 <p
//                   className="mt-2 text-sm font-semibold"
//                   style={{ color: INDIGO }}
//                 >
//                   AI Intelligence, Workflow Reasoning and Decision Support
//                   Architecture
//                 </p>
//                 <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-3xl">
//                   Connects intelligence, workflows, insight, context,
//                   monitoring, and governance across the Mentor Global
//                   infrastructure.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// }

/* ===================== SECTION 8: DEXA PROFILE SECTION ===================== */

function DexaProfileSection() {
  return (
    <section
      data-testid="team-dexa"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: NAVY }}
    >
      {/* Background Intelligence layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <MatrixRain />
      </div>

      {/* Structural Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(${INDIGO} 1px, transparent 1px), linear-gradient(90deg, ${INDIGO} 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-none blur-[180px]"
        style={{ background: "rgba(99,102,241,1)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow font-bold mb-4 text-primary">
            DEXA, Virtual Intelligence Officer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            DEXA, Group Chief AI Intelligence Officer
          </h2>
          <p className="mt-3 text-lg font-semibold text-primary">
            {dexaProfile.subtitle}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <ScrollReveal className="lg:col-span-5" delay={0.1}>
            <DexaCore size="lg" />
            <div
              className="mt-6 rounded-none border p-6 backdrop-blur-md"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-primary">
                Architecture Domain
              </p>
              <p className="text-sm font-bold text-white leading-snug">
                {dexaProfile.architectureDomain}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.15}>
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold mb-4 text-primary">
              Profile Summary
            </p>
            <p className="text-base md:text-lg text-white leading-relaxed">
              {dexaProfile.summary}
            </p>
            <div className="mt-6">
              <p className="text-sm text-[#8A8A93] leading-relaxed">
                {dexaProfile.distinction}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] font-bold mb-4 text-primary">
                  Experience deployed across
                </p>
                <ul className="space-y-2.5">
                  {dexaProfile.experience.map((e) => (
                    <li
                      key={e}
                      className="flex gap-3 text-sm text-white/85 leading-relaxed"
                    >
                      <span className="flex-shrink-0 text-primary">▸</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] font-bold mb-4 text-primary">
                  What DEXA is building for Mentor Global
                </p>
                <ul className="space-y-2.5">
                  {dexaProfile.building.map((e) => (
                    <li
                      key={e}
                      className="flex gap-3 text-sm text-white/85 leading-relaxed"
                    >
                      <span className="flex-shrink-0 text-primary">▸</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="mt-10 rounded-none border p-7 backdrop-blur-md"
              style={{
                borderColor: "rgba(99,102,241,0.4)",
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(0,72,255,0.04) 100%)",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary">
                  Governance Positioning
                </p>
              </div>
              <ul className="space-y-2">
                {dexaProfile.governance.map((g) => (
                  <li key={g} className="text-sm text-white/85 leading-relaxed">
                    — {g}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="mt-8 rounded-none pl-7 py-5"
              style={{
                borderLeft: `3px solid ${INDIGO}`,
                background: "rgba(99,102,241,0.04)",
              }}
            >
              <p className="text-xl md:text-2xl text-white italic leading-relaxed">
                “{dexaProfile.quote}”
              </p>
              <p className="mt-3 text-sm font-bold text-primary">— DEXA</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* =============== SECTION 9: INDIVIDUAL LEADER PROFILES (alternating) =============== */

function LeaderProfile({ leader, index }) {
  const [expanded, setExpanded] = useState(false);
  const isReversed = index % 2 === 1;
  return (
    <div
      data-testid={`leader-card-${leader.id}`}
      className="rounded-3xl border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#6366F1]/40"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Photo */}
        <div
          className={`lg:col-span-5 p-6 lg:p-8 ${
            isReversed ? "lg:order-2" : ""
          }`}
        >
          <div className="aspect-[4/5] w-full">
            <LeaderPhoto photo={leader.photo} name={leader.name} />
          </div>
          <div className="mt-5 flex items-center gap-3">
            <span
              className="px-3 py-1 rounded-none text-[10px] uppercase tracking-[0.2em] font-bold"
              style={{
                background: "rgba(99,102,241,0.12)",
                color: INDIGO,
              }}
            >
              Architect {index + 1}
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-white/50">
              {leader.architectureDomain.split(",")[0]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          className={`lg:col-span-7 p-7 lg:p-10 flex flex-col ${
            isReversed ? "lg:order-1" : ""
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {leader.name}
          </h3>
          <p
            className="text-sm font-semibold mt-2 leading-snug"
            style={{ color: BLUE }}
          >
            {leader.title}
          </p>
          <div
            className="mt-4 inline-flex items-center gap-2 self-start rounded-none px-3.5 py-1.5"
            style={{
              border: `1px solid ${INDIGO}40`,
              background: "rgba(99,102,241,0.06)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-none text-primary">▸</span>
            <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-primary">
              {leader.architectureDomain}
            </span>
          </div>

          <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed">
            {leader.summary}
          </p>

          {expanded && (
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p
                  className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3"
                  style={{ color: BLUE }}
                >
                  Experience highlights
                </p>
                <ul className="space-y-2">
                  {leader.experience.map((e) => (
                    <li
                      key={e}
                      className="flex gap-2 text-sm text-white/80 leading-relaxed"
                    >
                      <span className="flex-shrink-0" style={{ color: BLUE }}>
                        ▸
                      </span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3"
                  style={{ color: BLUE }}
                >
                  What he is building
                </p>
                <ul className="space-y-2">
                  {leader.building.map((e) => (
                    <li
                      key={e}
                      className="flex gap-2 text-sm text-white/80 leading-relaxed"
                    >
                      <span className="flex-shrink-0" style={{ color: BLUE }}>
                        ▸
                      </span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div
            className="mt-7 rounded-none pl-5 py-3"
            style={{
              borderLeft: `2px solid ${BLUE}`,
              background: "rgba(0,72,255,0.04)",
            }}
          >
            <p className="text-sm md:text-base text-white italic leading-relaxed">
              “{leader.quote}”
            </p>
            <p className="mt-2 text-xs font-bold text-white/80">
              — {leader.name}
            </p>
          </div>

          <div className="mt-7 pt-5 border-t border-white/10 flex">
            <button
              data-testid={`expand-${leader.id}`}
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-none text-white text-xs font-semibold transition-all hover:translate-y-[-1px]"
              style={{
                background: BLUE,
                boxShadow: "0 4px 18px rgba(0,72,255,0.35)",
              }}
            >
              {expanded ? "Show Less" : "Read Full Profile"}
              {expanded ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeaderProfilesSection() {
  return (
    <section
      data-testid="team-profiles"
      className="py-24 md:py-32"
      style={{ background: NEAR_BLACK }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4 font-bold text-primary">
            Individual Leader Profiles
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
            The Architects Behind Each Infrastructure Layer
          </h2>
        </ScrollReveal>

        <div className="mt-16 space-y-8">
          {leaderProfiles.map((leader, i) => (
            <ScrollReveal key={leader.id} delay={i * 0.04}>
              <LeaderProfile leader={leader} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== SECTION 10: LEADERSHIP OPERATING MODEL ============== */

// function OperatingModelSection() {
//   return (
//     <section
//       data-testid="team-operating-model"
//       className="py-24 md:py-32 relative overflow-hidden"
//       style={{
//         background: `linear-gradient(180deg, ${NEAR_BLACK} 0%, ${NAVY} 100%)`,
//       }}
//     >
//       <div
//         className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-none blur-[180px]"
//         style={{ background: "rgba(99,102,241,0.08)" }}
//       />
//       <div className="relative max-w-7xl mx-auto px-6 md:px-12">
//         <ScrollReveal>
//           <p className="eyebrow mb-4 font-bold" style={{ color: INDIGO }}>
//             Leadership Operating Model
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl">
//             How the Leadership Team Works as One System
//           </h2>
//         </ScrollReveal>

//         <div className="mt-16 rounded-none border border-white/10 backdrop-blur-md overflow-hidden">
//           {operatingModelFlow.map((s, i) => (
//             <ScrollReveal key={s.stage} delay={i * 0.03}>
//               <div
//                 className={`grid grid-cols-12 items-center transition-colors hover:bg-white/[0.02] ${
//                   i !== operatingModelFlow.length - 1
//                     ? "border-b border-white/10"
//                     : ""
//                 }`}
//               >
//                 <div
//                   className="col-span-2 md:col-span-1 p-5 text-center"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, rgba(0,72,255,0.10) 0%, rgba(99,102,241,0.06) 100%)",
//                   }}
//                 >
//                   <span
//                     className="text-lg md:text-2xl font-bold font-mono"
//                     style={{ color: INDIGO }}
//                   >
//                     {String(i + 1).padStart(2, "0")}
//                   </span>
//                 </div>
//                 <div className="col-span-4 md:col-span-3 p-5 border-r border-white/10">
//                   <p
//                     className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1"
//                     style={{ color: INDIGO }}
//                   >
//                     Stage
//                   </p>
//                   <p className="text-sm md:text-base font-bold text-white leading-snug">
//                     {s.stage}
//                   </p>
//                   <span
//                     className="mt-2 inline-block text-[10px] px-2 py-0.5 rounded-none font-bold"
//                     style={{
//                       background: "rgba(0,72,255,0.10)",
//                       color: BLUE,
//                     }}
//                   >
//                     {s.leader}
//                   </span>
//                 </div>
//                 <div className="col-span-6 md:col-span-8 p-5">
//                   <p className="text-sm md:text-base text-white/75 leading-relaxed">
//                     {s.desc}
//                   </p>
//                 </div>
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ============== SECTION 11: INFRASTRUCTURE OWNERSHIP MAP ============== */

// function OwnershipMap() {
//   return (
//     <section
//       data-testid="team-ownership-map"
//       className="py-24 md:py-32"
//       style={{ background: "white" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <ScrollReveal>
//           <p className="eyebrow mb-4">Infrastructure Ownership Map</p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
//             Leadership Ownership Across Mentor Global Infrastructure
//           </h2>
//           <p className="mt-6 text-base text-[#666666] max-w-3xl leading-relaxed">
//             Each infrastructure layer is owned by a combination of vision,
//             operations, enterprise scale, product, technology, health
//             operations, finance and governance, and AI intelligence.
//           </p>
//         </ScrollReveal>

//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {matrixRows.map((row, i) => (
//             <ScrollReveal key={row} delay={i * 0.06}>
//               <div
//                 className="group h-full rounded-none border border-[#11111F]/10 bg-white p-7 transition-all duration-300 hover:border-[#0048FF]/40 hover:translate-y-[-2px]"
//                 style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.02)" }}
//               >
//                 <div className="flex items-center justify-between mb-5">
//                   <span
//                     className="px-3 py-1 rounded-none text-[10px] uppercase tracking-[0.2em] font-bold"
//                     style={{
//                       background: "rgba(0,72,255,0.08)",
//                       color: BLUE,
//                     }}
//                   >
//                     Layer {String(i + 1).padStart(2, "0")}
//                   </span>
//                   <Network className="w-4 h-4" style={{ color: `${BLUE}60` }} />
//                 </div>
//                 <h3 className="text-lg md:text-xl font-bold text-[#11111F] leading-snug mb-5">
//                   {row}
//                 </h3>
//                 <p className="text-[10px] uppercase tracking-[0.2em] text-[#666666] font-bold mb-3">
//                   Architecture Owners
//                 </p>
//                 <div className="flex flex-wrap gap-1.5">
//                   {(ownershipMatrix[row] || []).map((leader, idx) => {
//                     if (leader === "—") return null;
//                     const isDexa = leader === "DEXA";
//                     return (
//                       <span
//                         key={idx}
//                         className="text-[10px] px-2.5 py-1 rounded-none font-semibold transition-colors"
//                         style={
//                           isDexa
//                             ? {
//                                 background: "rgba(99,102,241,0.10)",
//                                 color: INDIGO,
//                                 border: `1px solid ${INDIGO}40`,
//                               }
//                             : {
//                                 background: "rgba(17,17,31,0.04)",
//                                 color: NEAR_BLACK,
//                                 border: "1px solid rgba(17,17,31,0.08)",
//                               }
//                         }
//                       >
//                         {matrixColumns[idx]}: {leader}
//                       </span>
//                     );
//                   })}
//                 </div>
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ============== SECTION 12: BUILDER CREDIBILITY ============== */

function BuilderCredibility() {
  return (
    <section
      data-testid="team-credibility"
      className="py-24 md:py-32"
      style={{ background: "#f8f8f9" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Builder Credibility</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Built by People Who Have Operated Real Systems
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {credibilityCards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.04}>
              <div
                className="group h-full rounded-none border border-[#11111F]/10 bg-white p-6 transition-all duration-300 hover:border-[#0048FF]/40 hover:translate-y-[-2px]"
                style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.02)" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-bold font-mono"
                    style={{ color: BLUE }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="w-1.5 h-1.5 rounded-none"
                    style={{ background: BLUE }}
                  />
                </div>
                <h3 className="text-sm md:text-base font-bold text-[#11111F] mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs md:text-sm text-[#666666] leading-relaxed">
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

/* ============== SECTION 13: GOVERNANCE NOTE ABOUT DEXA ============== */

function GovernanceNote() {
  return (
    <section
      data-testid="team-governance-note"
      className="py-20 md:py-24"
      style={{ background: NEAR_BLACK }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div
            className="rounded-none border p-8 md:p-10 backdrop-blur-md"
            style={{
              borderColor: "rgba(99,102,241,0.4)",
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(0,72,255,0.04) 100%)",
            }}
          >
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 flex-shrink-0 text-primary" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] font-bold mb-2 text-primary">
                  Governance Note
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug mb-5">
                  DEXA is intelligence, not statutory authority
                </h3>
                <p className="text-sm md:text-base text-white/85 leading-relaxed">
                  {governanceDisclaimer}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============== SECTION 14: EXTENDED LEADERSHIP MODEL ============== */

function ExtendedLeadershipModel() {
  return (
    <section
      data-testid="team-extended-leadership"
      className="py-24 md:py-32"
      style={{ background: "white" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Extended Leadership</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#11111F] tracking-tight leading-[1.05] max-w-4xl">
            Built to Scale With Advisors, Country Leaders, and Domain Councils
          </h2>
          <p className="mt-6 text-base text-[#666666] max-w-3xl leading-relaxed">
            Mentor Global is supported by specialized leadership bodies that
            provide domain depth, market insight, and governance oversight as we
            scale global infrastructure.
          </p>
        </ScrollReveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {futurePlaceholders.map((f, i) => (
            <ScrollReveal key={f} delay={i * 0.04}>
              <div
                className="group rounded-none border border-[#11111F]/10 bg-[#f8f8f9] p-6 text-center transition-all duration-300 hover:border-[#0048FF]/40 hover:bg-white hover:translate-y-[-2px]"
                style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.02)" }}
              >
                <div className="w-10 h-10 rounded-none bg-white border border-[#11111F]/5 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-4 h-4 text-[#0048FF]/60" />
                </div>
                <h3 className="text-xs md:text-sm font-bold text-[#11111F] leading-snug">
                  {f}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== SECTION 15: FINAL CTA ============== */

function FinalCTA() {
  return (
    <section
      data-testid="team-final-cta"
      className="relative py-24 md:py-36 overflow-hidden border-t border-white/5"
      style={{ background: NAVY }}
    >
      {/* structural grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(${INDIGO} 1px, transparent 1px), linear-gradient(90deg, ${INDIGO} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full blur-[200px]"
        style={{ background: "rgba(99,102,241,0.10)" }}
      />
      {/* orbital rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-[#6366F1]/15" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="eyebrow font-bold mb-4 text-primary">
            Partner With Leadership
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.05]">
            Partner With the Architects Building Global Health Fintech
            Infrastructure
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p className="mt-8 text-base md:text-lg text-[#8A8A93] max-w-3xl mx-auto leading-relaxed">
            Mentor Global is building the infrastructure beneath healthcare,
            insurance, fintech, AI, and operating systems. We partner with
            investors, institutions, technology partners, healthcare providers,
            insurers, employers, and market leaders who want to build on the
            rails of the future.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="team-cta-partner"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold transition-all hover:translate-y-[-1px]"
              style={{
                background: BLUE,
                boxShadow: "0 8px 30px rgba(0,72,255,0.4)",
              }}
            >
              Partner With Mentor Global <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/solutions"
              data-testid="team-cta-explore"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Explore Infrastructure
            </Link>
            <Link
              to="/contact"
              data-testid="team-cta-contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Contact Leadership
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============================ PAGE ============================ */

export default function Team() {
  return (
    <main data-testid="team-page">
      <Hero />
      {/* <FounderDeclarationSection /> */}
      <LeadershipPhilosophy />
      <ArchitectureMap />
      <FounderFeatureSection />
      {/* <BoardLeadershipSection /> */}
      {/* <ExecutiveLeadershipSection /> */}
      <DexaProfileSection />
      <LeaderProfilesSection />
      {/* <OperatingModelSection /> */}
      {/* <OwnershipMap /> */}
      <BuilderCredibility />
      <GovernanceNote />
      <ExtendedLeadershipModel />
      <FinalCTA />
    </main>
  );
}
