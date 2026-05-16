import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Terminal, 
  Activity, 
  Database, 
  ShieldCheck, 
  Bot, 
  Workflow, 
  CheckCircle2, 
  Search, 
  FileText,
  AlertCircle,
  Zap
} from "lucide-react";

const scenarios = [
  {
    role: "CEO",
    q1: "What is our organization’s health risk this quarter?",
    a1: "The overall health risk score is 72/100 (Elevated).\nMain drivers: 18% increase in chronic claims, low screening compliance in Operations.",
    q2: "What should we do in the next 90 days?",
    a2: "1. Launch targeted screening program.\n2. Activate chronic care interventions for high-risk cohorts.\n3. Deploy preventive engagement plan.",
    outputs: [
      { label: "Risk Score Card", status: "Generated", icon: Activity },
      { label: "90-Day Action Plan", status: "Active", icon: Workflow },
      { label: "HR Task Created", status: "Assigned", icon: CheckCircle2 },
      { label: "Executive Dashboard Updated", status: "Synced", icon: Database }
    ]
  },
  {
    role: "HR Director",
    q1: "How can we reduce claims without reducing employee benefits?",
    a1: "Implement a targeted wellness strategy focusing on preventive interventions for high-utilization segments.",
    q2: "Which groups should we focus on first?",
    a2: "1. Repeated pharmacy users (22% of claims).\n2. Frequent OPD users with unresolved diagnoses.\n3. Employees missing annual preventive screenings.",
    outputs: [
      { label: "Wellness Campaign", status: "Triggered", icon: Zap },
      { label: "At-Risk Cohort", status: "Segmented", icon: Search },
      { label: "Screening Workflow", status: "Initiated", icon: Workflow },
      { label: "Monitoring", status: "Enabled", icon: Activity }
    ]
  },
  {
    role: "CFO",
    q1: "What is our projected health cost exposure next quarter?",
    a1: "Projected cost exposure is $1.2M, tracking 8% above baseline. Major drivers: rising OPD utilization and uncontrolled pharmacy costs.",
    q2: "What should we do to control cost without hurting employee experience?",
    a2: "1. Enforce preferred provider routing.\n2. Implement pre-authorization checks for high-cost diagnostics.\n3. Enable teleconsult-first logic for routine care.",
    outputs: [
      { label: "Cost Forecast", status: "Generated", icon: Activity },
      { label: "Finance Alert", status: "Created", icon: AlertCircle },
      { label: "Cost Control Logic", status: "Deployed", icon: ShieldCheck },
      { label: "Approval Request", status: "Sent", icon: FileText }
    ]
  },
  {
    role: "Provider",
    q1: "Why was this patient partially approved?",
    a1: "The requested diagnostic is covered, but the prescribed medication falls under exclusion list B (Experimental Treatment).",
    q2: "What should we do next?",
    a2: "1. Proceed with diagnostic billing (Split Billing).\n2. Collect patient share for excluded medication.\n3. Route exception request only if medically justified.",
    outputs: [
      { label: "Eligibility Check", status: "Complete", icon: CheckCircle2 },
      { label: "Benefit Rule", status: "Applied", icon: ShieldCheck },
      { label: "POS Workflow", status: "Updated", icon: Workflow },
      { label: "Audit Log", status: "Recorded", icon: Database }
    ]
  },
  {
    role: "Employee",
    q1: "Why is my reimbursement claim on hold?",
    a1: "Your claim is pending due to a missing pharmacy invoice and an amount mismatch in the submitted prescription.",
    q2: "What should I upload to fix it?",
    a2: "Please upload:\n1. The detailed pharmacy invoice.\n2. Ensure the claimed amount matches the receipt.",
    outputs: [
      { label: "Claim Review", status: "Updated", icon: FileText },
      { label: "Missing Document Alert", status: "Sent", icon: AlertCircle },
      { label: "Revalidation Queue", status: "Triggered", icon: Workflow }
    ]
  },
  {
    role: "Claims Manager",
    q1: "Which claims should go to manual review today?",
    a1: "Flagged 42 claims. Reasons: duplicate risk, pricing anomalies, missing diagnosis codes, and suspicious billing patterns.",
    q2: "Which claims can be approved automatically?",
    a2: "Cleared 180 low-risk claims. Auto-approval criteria met. Human review boundary set at $500 threshold.",
    outputs: [
      { label: "Fraud Review Queue", status: "Populated", icon: AlertCircle },
      { label: "Auto Approval Queue", status: "Processed", icon: CheckCircle2 },
      { label: "Medical Review Queue", status: "Assigned", icon: Search },
      { label: "Audit Trail", status: "Created", icon: Database }
    ]
  }
];

const engineNodes = [
  "Context",
  "Knowledge",
  "Rules",
  "Agents",
  "Workflows",
  "Approval",
  "Monitoring",
  "Audit"
];

const TypewriterText = ({ text, onComplete, speed = 20 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <span className="whitespace-pre-line">{displayed}</span>;
};

const MatrixColumn = ({ active, xOffset }) => {
  const [chars, setChars] = useState([]);
  const [config] = useState(() => ({
    delay: Math.random() * 2,
    duration: 1.5 + Math.random() * 2.5,
    length: 10 + Math.floor(Math.random() * 15)
  }));

  useEffect(() => {
    setChars(Array.from({ length: config.length }).map(() => String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))));
  }, [config.length]);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setChars(prev => prev.map(c => Math.random() > 0.9 ? String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96)) : c));
    }, 150);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <motion.div
      initial={{ y: -500 }}
      animate={active ? { y: 800 } : { y: -500 }}
      transition={{
        duration: config.duration,
        repeat: active ? Infinity : 0,
        delay: active ? config.delay : 0,
        ease: "linear"
      }}
      className="absolute top-0 text-[#0048FF] font-mono text-[10px] leading-[10px] flex flex-col items-center mix-blend-screen"
      style={{ left: `${xOffset}%` }}
    >
      {chars.map((c, i) => (
        <span 
          key={i} 
          style={{ 
            opacity: 1 - (i / chars.length), 
            textShadow: i === 0 ? '0 0 8px #fff, 0 0 10px #0048FF' : 'none', 
            color: i === 0 ? '#fff' : '#0048FF',
            fontWeight: i === 0 ? 'bold' : 'normal'
          }}
        >
          {c}
        </span>
      ))}
    </motion.div>
  );
};

const MatrixRain = ({ active }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${active ? 'opacity-50' : 'opacity-0'}`}>
      {[...Array(50)].map((_, i) => (
        <MatrixColumn key={i} active={active} xOffset={(i / 50) * 100} />
      ))}
    </div>
  );
};

const MiniIpad = ({ children }) => (
  <div className="w-full h-full relative p-3 sm:p-4 bg-[#050505] rounded-[2.5rem] shadow-2xl border border-white/20 font-sans">
    <div className="relative bg-black rounded-[1.8rem] overflow-hidden w-full h-full border border-white/5 flex flex-col">
      <div className="absolute z-30 top-3 sm:top-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none">
         <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)] flex items-center justify-center">
            <div className="w-[3px] h-[3px] rounded-full bg-[#0048FF]/30" />
         </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.02] to-transparent z-20" />
      <div className="w-full h-full relative z-10 flex flex-col overflow-hidden bg-[#050508]">
        {children}
      </div>
    </div>
  </div>
);

export function DexaInMotion() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [phase, setPhase] = useState(0); // 0: reset, 1: Q1, 2: A1, 3: Q2, 4: A2, 5: Engine, 6: Outputs, 7: Wait
  const [activeEngineNode, setActiveEngineNode] = useState(-1);

  const scenario = scenarios[scenarioIndex];

  useEffect(() => {
    // Start sequence
    if (phase === 0) {
      const t = setTimeout(() => setPhase(1), 800);
      return () => clearTimeout(t);
    }

    // Engine Flow
    if (phase === 5) {
      let nodeIdx = 0;
      setActiveEngineNode(0);
      const interval = setInterval(() => {
        nodeIdx++;
        if (nodeIdx >= engineNodes.length) {
          clearInterval(interval);
          setActiveEngineNode(-1);
          setPhase(6); // Move to outputs
        } else {
          setActiveEngineNode(nodeIdx);
        }
      }, 400); // speed of engine pulse
      return () => clearInterval(interval);
    }

    // Wait and transition to next scenario
    if (phase === 7) {
      const t = setTimeout(() => {
        setPhase(0);
        setScenarioIndex((prev) => (prev + 1) % scenarios.length);
      }, 5000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const advancePhase = (currentPhase, delay = 600) => {
    setTimeout(() => setPhase(currentPhase + 1), delay);
  };

  return (
    <section className="bg-[#05050A] py-24 md:py-32 relative overflow-hidden font-sans border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#0048FF]/[0.02] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0048FF]/5 via-[#05050A]/20 to-[#05050A]" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="inline-block text-[10px] uppercase tracking-[0.3em] font-black text-[#0048FF] bg-[#0048FF]/10 px-4 py-1.5 rounded-full mb-6 border border-[#0048FF]/20">
            See Dexa in Motion
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            The Intelligence Engine of Mentor Global
          </h2>
          <p className="mt-4 text-base text-[#8A8A93] max-w-2xl mx-auto">
            DEXA is not just a chat layer. It is the intelligence engine that understands context, applies rules, connects systems, routes workflows, and guides action.
          </p>
        </div>

        {/* 3-Column Theatre Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[600px] relative">
          
          {/* Left Panel: Conversation */}
          <div className="lg:col-span-4 flex flex-col h-full relative z-10">
            {/* Active Glow */}
            <div className={`absolute -inset-10 bg-[#0048FF]/20 blur-3xl rounded-full transition-opacity duration-1000 pointer-events-none -z-10 ${phase > 0 && phase < 5 ? 'opacity-60' : 'opacity-0'}`} />
            
            <MiniIpad>
              <div className="h-12 border-b border-white/5 flex items-center px-4 bg-white/[0.02] relative z-10">
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-[#0048FF] shadow-[0_0_10px_rgba(0,72,255,0.5)]" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Live Interaction
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 overflow-y-auto space-y-6 scrollbar-hide relative z-10">
                {/* Q1 */}
                {phase >= 1 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-end">
                    <div className="flex items-center gap-2 mb-1.5 px-1">
                      <span className="text-[9px] font-bold text-[#8A8A93] uppercase tracking-wider">{scenario.role}</span>
                      <User className="w-3 h-3 text-[#8A8A93]" />
                    </div>
                    <div className="bg-[#11111F] border border-white/10 rounded-lg rounded-tr-none px-4 py-3 max-w-[85%]">
                      <p className="text-xs text-white/90 leading-relaxed">
                        {phase === 1 ? <TypewriterText text={scenario.q1} onComplete={() => advancePhase(1, 400)} /> : scenario.q1}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* A1 */}
                {phase >= 2 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-1.5 px-1">
                      <Bot className="w-3 h-3 text-[#0048FF]" />
                      <span className="text-[9px] font-bold text-[#0048FF] uppercase tracking-wider">DEXA Core</span>
                    </div>
                    <div className="bg-[#0048FF]/10 border border-[#0048FF]/20 rounded-lg rounded-tl-none px-4 py-3 max-w-[90%]">
                      <p className="text-xs text-white/80 leading-relaxed">
                        {phase === 2 ? <TypewriterText text={scenario.a1} onComplete={() => advancePhase(2, 800)} speed={15} /> : scenario.a1}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Q2 */}
                {phase >= 3 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-end mt-4">
                    <div className="flex items-center gap-2 mb-1.5 px-1">
                      <span className="text-[9px] font-bold text-[#8A8A93] uppercase tracking-wider">{scenario.role}</span>
                      <User className="w-3 h-3 text-[#8A8A93]" />
                    </div>
                    <div className="bg-[#11111F] border border-white/10 rounded-lg rounded-tr-none px-4 py-3 max-w-[85%]">
                      <p className="text-xs text-white/90 leading-relaxed">
                        {phase === 3 ? <TypewriterText text={scenario.q2} onComplete={() => advancePhase(3, 400)} /> : scenario.q2}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* A2 */}
                {phase >= 4 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-start mt-4">
                    <div className="flex items-center gap-2 mb-1.5 px-1">
                      <Bot className="w-3 h-3 text-[#0048FF]" />
                      <span className="text-[9px] font-bold text-[#0048FF] uppercase tracking-wider">DEXA Core</span>
                    </div>
                    <div className="bg-[#0048FF]/10 border border-[#0048FF]/20 rounded-lg rounded-tl-none px-4 py-3 max-w-[90%]">
                      <p className="text-xs text-white/80 leading-relaxed">
                        {phase === 4 ? <TypewriterText text={scenario.a2} onComplete={() => advancePhase(4, 1000)} speed={15} /> : scenario.a2}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
              {/* Typing indicator placeholder */}
              <div className="h-10 px-5 flex items-center border-t border-white/5 relative z-10">
                 {phase >= 1 && phase < 4 && phase % 2 !== 0 && (
                   <div className="flex gap-1 items-center opacity-50">
                     <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                     <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse delay-75" />
                     <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse delay-150" />
                   </div>
                 )}
              </div>
            </MiniIpad>
          </div>

          {/* Center Panel: Governance Engine */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-12 rounded-[2.5rem] border border-white/[0.05] bg-gradient-to-b from-[#0a0a14] to-[#05050A] shadow-[inset_0_0_80px_rgba(0,72,255,0.03)] overflow-hidden z-10">
            
            {/* Ambient Backend Effects */}
            <div className="absolute inset-0 z-0 flex flex-col justify-between opacity-30 pointer-events-none">
               {/* Vertical Server Rack Lines */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_100%]" />
               
               {/* Horizontal Scanning Beams */}
               {[...Array(20)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ 
                      x: [Math.random() * -100, Math.random() * 200, Math.random() * -100], 
                      opacity: [0, 0.8, 0] 
                    }}
                    transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
                    className="h-[1px] w-[50%] bg-gradient-to-r from-transparent via-[#0048FF] to-transparent absolute"
                    style={{ top: `${(i / 20) * 100}%`, left: '25%' }}
                  />
               ))}
            </div>

            {/* Matrix Rain Effect (Active during Governance phase) */}
            <MatrixRain active={phase >= 5} />

            {/* Central Glow Pulse */}
            <div className={`absolute inset-0 bg-[#0048FF]/5 blur-3xl rounded-full transition-opacity duration-700 pointer-events-none ${phase === 5 ? 'opacity-100' : 'opacity-0'}`} />

            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0048FF] mb-8 text-center absolute top-6 w-full z-10 flex items-center justify-center gap-2">
              <Database className="w-3 h-3" /> Governance Engine
            </h3>
            
            <div className="relative w-full max-w-[280px] flex flex-col items-center mt-6">
              {/* Connecting vertical line (Background faint track) */}
              <div className="absolute top-0 bottom-0 w-px bg-white/5 left-1/2 -translate-x-1/2 z-0" />

              {engineNodes.map((node, i) => {
                const isActive = phase === 5 && activeEngineNode === i;
                const isPassed = phase > 5 || (phase === 5 && activeEngineNode > i);
                const isLineActive = phase > 5 || (phase === 5 && activeEngineNode >= i + 1);
                
                return (
                  <div key={node} className="relative w-full flex justify-center mb-6 last:mb-0">
                    
                    {/* The curved connecting line to the next node */}
                    {i < engineNodes.length - 1 && (
                      <div 
                        className={`absolute top-1/2 w-8 ${
                          i % 2 === 0 
                            ? "right-[calc(50%+94px)] border-l-2 border-t-2 border-b-2 rounded-l-2xl" 
                            : "left-[calc(50%+94px)] border-r-2 border-t-2 border-b-2 rounded-r-2xl"
                        } z-0 transition-all duration-300 ${
                          isLineActive ? "drop-shadow-[0_0_8px_rgba(0,72,255,0.8)]" : ""
                        }`}
                        style={{ 
                          height: 'calc(100% + 24px)',
                          borderColor: isLineActive ? '#0048FF' : 'rgba(255,255,255,0.05)'
                        }}
                      />
                    )}
                    <motion.div 
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        borderColor: isActive ? "rgba(0, 72, 255, 0.8)" : isPassed ? "rgba(0, 72, 255, 0.3)" : "rgba(255, 255, 255, 0.05)",
                        backgroundColor: isActive ? "rgba(0, 72, 255, 0.15)" : isPassed ? "rgba(0, 72, 255, 0.05)" : "rgba(17, 17, 31, 0.6)",
                        boxShadow: isActive ? "0 0 20px rgba(0, 72, 255, 0.4)" : "none"
                      }}
                      className="w-[200px] py-3 px-5 rounded-lg border backdrop-blur-md flex items-center justify-between transition-all duration-300 relative overflow-hidden"
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0048FF]/20 to-transparent animate-pulse" />
                      )}
                      <span className={`text-[11px] font-bold tracking-widest uppercase transition-colors relative z-10
                        ${isActive ? "text-white" : isPassed ? "text-[#0048FF]" : "text-[#8A8A93]"}`}
                      >
                        {node}
                      </span>
                      <div className="relative z-10 flex items-center">
                        {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-[#0048FF]" />}
                        {isActive && <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />}
                        {!isActive && !isPassed && <div className="w-1.5 h-1.5 rounded-full bg-white/10" />}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Governed Action Outputs */}
          <div className="lg:col-span-4 flex flex-col h-full relative z-10">
            {/* Active Glow */}
            <div className={`absolute -inset-10 bg-[#0048FF]/20 blur-3xl rounded-full transition-opacity duration-1000 pointer-events-none -z-10 ${phase === 6 ? 'opacity-60' : 'opacity-0'}`} />
            <MiniIpad>
              <div className="h-12 border-b border-white/5 flex items-center px-4 bg-white/[0.02] relative z-10">
                 <div className="flex items-center gap-2 mt-2">
                   <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      Governed Actions
                   </span>
                 </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center space-y-4 relative z-10">
                <AnimatePresence>
                  {phase >= 6 && scenario.outputs.map((output, i) => {
                    const Icon = output.icon;
                    return (
                      <motion.div
                        key={output.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        onAnimationComplete={() => {
                          if (i === scenario.outputs.length - 1 && phase === 6) {
                             advancePhase(6, 1000); // Trigger wait phase
                          }
                        }}
                        className="bg-[#11111F] border border-white/10 rounded-lg p-4 flex items-center justify-between group hover:border-[#0048FF]/40 hover:bg-[#0048FF]/5 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-[#0048FF]">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white">{output.label}</span>
                            <span className="text-[10px] text-[#8A8A93] uppercase tracking-widest">{output.status}</span>
                          </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#0048FF]/40 group-hover:bg-[#0048FF] shadow-[0_0_8px_rgba(0,72,255,0)] group-hover:shadow-[0_0_8px_rgba(0,72,255,0.6)] transition-all" />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </MiniIpad>
          </div>

        </div>
      </div>
    </section>
  );
}
