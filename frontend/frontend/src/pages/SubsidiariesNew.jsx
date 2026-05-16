import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import {
  Globe,
  MapPin,
  Activity,
  ShieldCheck,
  Database,
  LayoutGrid,
  Users,
  LineChart,
  ArrowRight,
  ChevronRight,
  Cpu,
  Layers,
  Network,
} from "lucide-react";
import {
  subsidiaryCompanies,
  holdingLayerItems,
  infrastructureLayerItems,
  subsidiaryLayerItems,
  sharedBackboneComponents,
  scalingFlow,
  partnerPathways,
  governanceComponents,
  globalClientRegions,
} from "../data/subsidiaries-page";

const InfrastructureStack = () => {
  return (
    <div className="relative w-full aspect-square max-w-[700px] flex items-center justify-center perspective-[2000px]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#0048FF]/10 to-transparent blur-3xl opacity-50" />

      {/* Floating Stack of Layers */}
      <div className="relative w-[90%] h-[90%] preserve-3d">
        {/* Layer 1: HOLDING (TOP) */}
        <motion.div
          initial={{ y: 0, rotateX: 45, rotateZ: -15 }}
          animate={{
            y: [-15, 15, -15],
            rotateX: [44, 46, 44],
            rotateZ: [-14, -16, -14],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] left-0 w-full aspect-[2/1] z-[30]"
        >
          <div className="w-full h-full bg-white/[0.04] backdrop-blur-xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.4)] p-8 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0048FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative flex justify-between items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#0048FF] mb-2">
                  Layer 01
                </p>
                <p className="text-2xl font-bold text-white tracking-tight">
                  Mentor Global
                </p>
              </div>
              <ShieldCheck className="w-8 h-8 text-[#0048FF]" />
            </div>
            <div className="relative">
              <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mb-1">
                Portfolio Strategy
              </p>
              <div className="w-12 h-1 bg-[#0048FF]/50" />
            </div>
          </div>
        </motion.div>

        {/* Connector 1-2 */}
        <div
          className="absolute top-[25%] left-[50%] w-px h-[20%] bg-gradient-to-b from-[#0048FF] to-transparent z-[25] origin-top opacity-60"
          style={{ transform: "rotateX(45deg) rotateZ(-15deg)" }}
        />

        {/* Layer 2: INFRASTRUCTURE (MIDDLE) */}
        <motion.div
          initial={{ y: 0, rotateX: 45, rotateZ: -15 }}
          animate={{
            y: [15, -15, 15],
            rotateX: [46, 44, 46],
            rotateZ: [-16, -14, -16],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[5%] w-full aspect-[2/1] z-[20]"
        >
          <div className="w-full h-full bg-[#0048FF]/10 backdrop-blur-2xl border border-[#0048FF]/40 shadow-[0_30px_70px_rgba(0,72,255,0.2)] p-8 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0048FF]/30 to-transparent opacity-40" />
            <div className="relative flex justify-between items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#0048FF] mb-2">
                  Layer 02
                </p>
                <p className="text-2xl font-bold text-white tracking-tight">
                  Innovation + DEXA
                </p>
              </div>
              <Cpu className="w-8 h-8 text-[#0048FF] animate-pulse" />
            </div>
            <div className="relative flex gap-4">
              <span className="text-[10px] px-3 py-1.5 bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wider">
                Infrastructure Engine
              </span>
              <span className="text-[10px] px-3 py-1.5 bg-[#0048FF] text-white font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,72,255,0.5)]">
                AI Intelligence
              </span>
            </div>
          </div>
        </motion.div>

        {/* Connector 2-3 */}
        <div
          className="absolute top-[55%] left-[55%] w-px h-[25%] bg-gradient-to-b from-[#0048FF] to-transparent z-[15] opacity-40"
          style={{ transform: "rotateX(45deg) rotateZ(-15deg)" }}
        />

        {/* Layer 3: MARKETS (BOTTOM) */}
        <motion.div
          initial={{ y: 0, rotateX: 45, rotateZ: -15 }}
          animate={{
            y: [-8, 8, -8],
            rotateX: [44, 46, 44],
            rotateZ: [-14, -16, -14],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[65%] left-[10%] w-full aspect-[2/1] z-[10]"
        >
          <div className="w-full h-full bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "radial-gradient(#0048FF 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative flex justify-between items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#0048FF] mb-2">
                  Layer 03
                </p>
                <p className="text-2xl font-bold text-white tracking-tight">
                  Market Execution
                </p>
              </div>
              <Network className="w-8 h-8 text-white/20" />
            </div>
            <div className="relative flex gap-6 opacity-80">
              {["SINGAPORE", "PAKISTAN", "UAE", "USA"].map((code) => (
                <div key={code} className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-white/80 tracking-[0.2em]">
                    {code}
                  </span>
                  <div className="h-0.5 w-full bg-white/10 overflow-hidden">
                    <motion.div
                      animate={{ x: [-20, 40] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-full w-4 bg-[#0048FF]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Floating Nodes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[10%] left-[10%] w-2 h-2 rounded-full bg-[#0048FF] shadow-[0_0_15px_#0048FF]"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-[30%] right-[15%] w-1.5 h-1.5 rounded-full bg-white/40"
      />
    </div>
  );
};

function Hero() {
  return (
    <section
      data-testid="sub-hero"
      className="relative bg-[#11111F] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Cinematic Background Lights */}
      <div className="absolute top-1/4 -right-[10%] w-[1000px] h-[1000px] rounded-full bg-[#0048FF]/[0.06] blur-[180px] animate-pulse" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] rounded-full bg-[#0048FF]/[0.03] blur-[150px]" />

      <div className="relative max-w-[1720px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0048FF]/10 border border-[#0048FF]/20 mb-8">
                <Layers className="w-3.5 h-3.5 text-[#0048FF]" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#0048FF]">
                  Portfolio Architecture
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white tracking-tighter leading-[0.95] mb-8">
                A Global Portfolio of Health Fintech Infrastructure
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-xl text-[#8A8A93] max-w-xl leading-relaxed mb-6 font-medium">
                Mentor Global operates a structured group of specialized
                companies across markets, connected through one shared
                infrastructure backbone.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4 max-w-xl mb-12">
                <p className="text-sm text-[#8A8A93] leading-relaxed">
                  <span className="text-[#0048FF] font-bold mr-2">//</span>
                  Mentor Global is the holding layer. Subsidiaries execute
                  across regions and verticals.
                </p>
                <p className="text-sm text-[#8A8A93] leading-relaxed">
                  <span className="text-[#0048FF] font-bold mr-2">//</span>
                  Mentor Innovation builds the technology. DEXA powers
                  intelligence across every layer.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0048FF] text-white font-bold hover:bg-[#0030CC] transition-all transform hover:scale-[1.02] shadow-[0_10px_20px_rgba(0,72,255,0.3)] rounded-sm"
                >
                  Explore Portfolio <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white font-bold hover:bg-white/5 transition-colors rounded-sm"
                >
                  Partner With Us
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="left">
            <InfrastructureStack />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function GroupArchitecture() {
  return (
    <section data-testid="sub-architecture" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Group Architecture</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
            One Group. Multiple Engines of Execution.
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-[1px]">
          {[
            { name: "Holding Layer", items: holdingLayerItems },
            { name: "Infrastructure Layer", items: infrastructureLayerItems },
            { name: "Subsidiary Layer", items: subsidiaryLayerItems },
          ].map((layer, idx) => (
            <ScrollReveal key={layer.name} delay={idx * 0.08}>
              <div className="border border-[#11111F]/10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-48 shrink-0">
                    <span className="text-[#0048FF] text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[#11111F] mt-1">
                      {layer.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-[#666666] px-3 py-1.5 border border-[#11111F]/10"
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

// function PortfolioAtGlance() {
//   const statusColors = {
//     "Strategic HQ": "bg-[#0048FF]/10 text-[#0048FF]",
//     Operating: "bg-emerald-500/10 text-emerald-600",
//     Platform: "bg-purple-500/10 text-purple-600",
//     Expansion: "bg-amber-500/10 text-amber-600",
//     "Enterprise Scale Market": "bg-[#0048FF]/10 text-[#0048FF]",
//   };
//   return (
//     <section
//       data-testid="sub-portfolio"
//       id="portfolio"
//       className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
//     >
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
//       <div className="relative max-w-7xl mx-auto px-6 md:px-12">
//         <ScrollReveal>
//           <p className="eyebrow mb-4">Portfolio</p>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
//             The Mentor Global portfolio at a glance
//           </h2>
//         </ScrollReveal>
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {subsidiaryCompanies.map((company, i) => (
//             <ScrollReveal key={company.companyName} delay={i * 0.04}>
//               <div className="border border-white/10 p-6 card-hover-dark h-full flex flex-col">
//                 <div className="flex items-start justify-between mb-3">
//                   <h3 className="text-base font-bold text-white">
//                     {company.companyName}
//                   </h3>
//                   <span
//                     className={`text-[9px] px-2 py-0.5 font-bold ${statusColors[company.status] || "bg-white/10 text-[#8A8A93]"}`}
//                   >
//                     {company.status}
//                   </span>
//                 </div>
//                 <p className="text-[10px] text-[#0048FF] font-bold mb-2">
//                   {company.region}
//                 </p>
//                 <p className="text-xs text-[#8A8A93] mb-3 flex-1">
//                   {company.role}
//                 </p>
//                 <div className="flex flex-wrap gap-1 mb-4">
//                   {company.infrastructure.slice(0, 3).map((inf) => (
//                     <span
//                       key={inf}
//                       className="text-[9px] px-2 py-0.5 border border-white/10 text-[#8A8A93]"
//                     >
//                       {inf}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-2 mt-auto">
//                   <span className="text-[10px] px-3 py-1.5 border border-white/20 text-white/60 cursor-default">
//                     {company.websiteStatus === "coming_soon"
//                       ? "Website Coming Soon"
//                       : "Visit Website"}
//                   </span>
//                   <Link
//                     to="/contact"
//                     className="text-[10px] px-3 py-1.5 bg-[#0048FF]/10 border border-[#0048FF]/30 text-[#0048FF] font-medium"
//                   >
//                     Request Introduction
//                   </Link>
//                 </div>
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function RegionSection({ eyebrow, headline, body, companies }) {
  return (
    <div className="mb-0">
      <ScrollReveal>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h3 className="text-2xl md:text-3xl font-bold text-[#11111F] mb-2">
          {headline}
        </h3>
        {body && (
          <p className="text-sm text-[#666666] max-w-2xl mb-8">{body}</p>
        )}
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {companies.map((company, i) => (
          <ScrollReveal key={company.companyName} delay={i * 0.05}>
            <div className="border border-[#11111F]/10 p-6 card-hover h-full flex flex-col">
              <h4 className="text-lg font-bold text-[#11111F] mb-1">
                {company.companyName}
              </h4>
              <p className="text-xs text-[#0048FF] font-bold mb-3">
                {company.role}
              </p>
              <div className="mb-4 flex-1">
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#11111F]/40 mb-2">
                  What it does
                </p>
                <div className="space-y-1">
                  {company.capabilities.map((c) => (
                    <p
                      key={c}
                      className="text-[11px] text-[#666666] flex items-start gap-2"
                    >
                      <span className="text-[#0048FF] mt-0.5 text-[8px]">
                        &#9632;
                      </span>
                      {c}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#11111F]/40 mb-2">
                  Infrastructure
                </p>
                <div className="flex flex-wrap gap-1">
                  {company.infrastructure.map((inf) => (
                    <span
                      key={inf}
                      className="text-[9px] px-2 py-0.5 border border-[#11111F]/10 text-[#666666]"
                    >
                      {inf}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#11111F]/40 mb-2">
                  Serves
                </p>
                <div className="flex flex-wrap gap-1">
                  {company.serves.map((s) => (
                    <span key={s} className="text-[9px] text-[#666666]">
                      {s}
                      {company.serves.indexOf(s) < company.serves.length - 1
                        ? ","
                        : ""}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#11111F]/10">
                <span className="text-[10px] px-3 py-1.5 border border-[#11111F]/15 text-[#11111F]/60 cursor-default">
                  {company.websiteStatus === "coming_soon"
                    ? "Website Coming Soon"
                    : "Visit Website"}
                </span>
                <Link
                  to="/contact"
                  className="text-[10px] px-3 py-1.5 bg-[#0048FF] text-white font-medium"
                >
                  Request Introduction
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

function RegionSections() {
  const sg = subsidiaryCompanies.filter((c) => c.region === "Singapore");
  const pk = subsidiaryCompanies.filter((c) => c.region === "Pakistan");
  const ae = subsidiaryCompanies.filter(
    (c) => c.region === "United Arab Emirates",
  );
  const us = subsidiaryCompanies.filter((c) => c.region === "United States");
  return (
    <section data-testid="sub-regions" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        <RegionSection
          eyebrow="SG, SINGAPORE"
          headline="Singapore, Global Holding and Strategic Headquarters"
          body=""
          companies={sg}
        />
        <RegionSection
          eyebrow="PK, PAKISTAN"
          headline="Pakistan, Core Ecosystem and Validation Market"
          body="Pakistan is the core execution and validation market where Mentor Global's healthcare, TPA, provider network, claims, benefits, fintech, and technology infrastructure has been tested against real market complexity."
          companies={pk}
        />
        <RegionSection
          eyebrow="AE, UNITED ARAB EMIRATES"
          headline="United Arab Emirates, Regional Expansion and Financial Infrastructure Hub"
          body="The UAE is the GCC expansion hub for health fintech infrastructure, financial partnerships, healthcare entrepreneurship, white labelled deployment, and regional enterprise opportunities."
          companies={ae}
        />
        <RegionSection
          eyebrow="US, UNITED STATES"
          headline="United States, Enterprise Scale Infrastructure Market"
          body="The United States is the enterprise scale market for health fintech infrastructure, employer health programs, insurance infrastructure, fintech integration, and regulated market readiness."
          companies={us}
        />
      </div>
    </section>
  );
}

function GlobalClients() {
  return (
    <section
      data-testid="sub-global-clients"
      className="bg-[#11111F] py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0048FF]/[0.04] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Client Ecosystem</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Global Technology Client Ecosystem
          </h2>
          <p className="mt-4 text-base text-[#8A8A93] max-w-2xl">
            Beyond owned subsidiaries, Mentor Global's technology engine can
            power clients across Asia, the Middle East, Africa, and the United
            States.
          </p>
          <p className="mt-3 text-xs text-[#8A8A93]/60">
            Global technology clients are not subsidiaries. They are clients,
            partners, and deployment markets served through Mentor Innovation,
            DEXA, white labelled platforms, APIs, and custom infrastructure
            builds.
          </p>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {globalClientRegions.map((r, i) => (
            <ScrollReveal key={r.region} delay={i * 0.05}>
              <div className="bg-[#11111F] p-6 card-hover-dark h-full">
                <div className="w-3 h-3 bg-[#0048FF] mb-3" />
                <h3 className="text-base font-bold text-white mb-3">
                  {r.region}
                </h3>
                <div className="space-y-2 text-[11px] text-[#8A8A93]">
                  <p>
                    <span className="text-[#0048FF] font-bold">Clients:</span>{" "}
                    {r.clients}
                  </p>
                  <p>
                    <span className="text-[#0048FF] font-bold">Solutions:</span>{" "}
                    {r.solutions}
                  </p>
                  <p>
                    <span className="text-[#0048FF] font-bold">
                      Deployment:
                    </span>{" "}
                    {r.deployment}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="mt-4 inline-block text-[10px] px-3 py-1.5 bg-[#0048FF]/10 border border-[#0048FF]/30 text-[#0048FF] font-medium"
                >
                  Request Introduction
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SharedBackbone() {
  return (
    <section data-testid="sub-backbone" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Shared Infrastructure</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
            Different companies. One infrastructure backbone.
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-[1px] bg-[#11111F]/10">
          {sharedBackboneComponents.map((c, i) => (
            <ScrollReveal key={c} delay={i * 0.02}>
              <div className="bg-white p-4 card-hover h-full">
                <p className="text-[11px] text-[#11111F] font-medium">{c}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 border border-[#11111F]/10 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-[#11111F] text-white">
                <p className="text-xs font-bold">Mentor Global</p>
                <p className="text-[10px] text-[#8A8A93] mt-1">
                  Strategy + Governance
                </p>
              </div>
              <div className="p-4 bg-[#0048FF]/10 border border-[#0048FF]/20">
                <p className="text-xs font-bold text-[#0048FF]">
                  Mentor Innovation + DEXA
                </p>
                <p className="text-[10px] text-[#666666] mt-1">
                  Technology + Intelligence
                </p>
              </div>
              <div className="p-4 bg-[#11111F]/[0.03] border border-[#11111F]/10">
                <p className="text-xs font-bold text-[#11111F]">
                  Subsidiaries + Clients
                </p>
                <p className="text-[10px] text-[#666666] mt-1">
                  Market Execution
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function HowPortfolioScales() {
  return (
    <section data-testid="sub-scaling" className="bg-[#11111F] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Scaling Model</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Local execution. Global consistency.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-1.5">
            {scalingFlow.map((step, i) => (
              <span key={step} className="flex items-center gap-1.5">
                <span className="text-[10px] px-3 py-2 bg-white/5 border border-white/10 text-white font-medium">
                  {step}
                </span>
                {i < scalingFlow.length - 1 && (
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

function Partnerships() {
  return (
    <section data-testid="sub-partnerships" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Partnership Pathways</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight">
            Partner with the right company inside the Mentor Global ecosystem
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#11111F]/10">
          {partnerPathways.map((p, i) => (
            <ScrollReveal key={p.type} delay={i * 0.04}>
              <div className="bg-white p-5 md:p-6 card-hover h-full">
                <p className="text-sm font-bold text-[#0048FF] mb-2">
                  {p.type}
                </p>
                <p className="text-xs text-[#666666]">{p.connect}</p>
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
      data-testid="sub-governance"
      className="bg-[#11111F] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="eyebrow mb-4">Governance</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl">
            Built for regulated markets and responsible scale
          </h2>
          <p className="mt-4 text-sm text-[#8A8A93] max-w-2xl">
            Each subsidiary operates in its local market while following group
            level governance, brand architecture, technology standards, data
            controls, and compliance expectations.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-white/10">
          {governanceComponents.map((g, i) => (
            <ScrollReveal key={g} delay={i * 0.02}>
              <div className="bg-[#11111F] p-4 card-hover-dark">
                <p className="text-[11px] text-white/80 font-medium">{g}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-xs text-[#8A8A93]/50 max-w-2xl">
            Designed for regulated market deployment. Built with local
            regulatory adaptation. Governed through group level oversight.
            Configurable for market specific requirements.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section data-testid="sub-final-cta" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#11111F] tracking-tight max-w-4xl mx-auto">
            Build with the Mentor Global ecosystem
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 section-desc max-w-2xl mx-auto">
            Whether you are an investor, insurer, healthcare group, fintech,
            employer, broker, government program, or technology partner, Mentor
            Global provides a connected portfolio of companies built to deploy
            health fintech infrastructure across markets.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="sub-final-partner-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0048FF] text-white font-semibold hover:bg-[#0030CC] transition-colors"
            >
              Explore Partnership Opportunities{" "}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              data-testid="sub-final-contact-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#11111F]/20 text-[#11111F] font-semibold hover:bg-[#11111F]/5 transition-colors"
            >
              Contact Mentor Global <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function SubsidiariesPage() {
  return (
    <main data-testid="subsidiaries-page">
      <Hero />
      <GroupArchitecture />
      {/* <PortfolioAtGlance /> */}
      <RegionSections />
      <GlobalClients />
      <SharedBackbone />
      <HowPortfolioScales />
      <Partnerships />
      <GovernanceSection />
      <FinalCTA />
    </main>
  );
}
