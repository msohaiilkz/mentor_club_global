import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Bot,
  CheckCircle2,
  Loader2,
  Send,
  Sparkles,
  RefreshCw,
  Paperclip,
  Mic,
  ShieldCheck,
  ArrowRight,
  Globe,
  Lock,
  Cpu,
  Terminal,
  Activity,
  Layers,
} from "lucide-react";

/**
 * ChatSimulation Component
 *
 * A high-fidelity "industrial" simulation of the DEXA intelligence engine.
 * Features:
 * - Strictly boxy UI (no rounded corners)
 * - Real-time typing simulation in the input bar
 * - Simulated "send" action
 * - Auto-cycling through multiple operational scenarios
 * - Governance and processing status indicators
 */
export function ChatSimulation({ scenario: initialScenario, scenarios = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState(0); // 0: reset, 1: typing in input, 2: sending, 3: thinking, 4: streaming, 5: finished
  const [inputDisplayedText, setInputDisplayedText] = useState("");
  const [userFeedText, setUserFeedText] = useState("");
  const [aiDisplayedText, setAiDisplayedText] = useState("");
  const [showChecks, setShowChecks] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollRef = useRef(null);

  // Select the current scenario
  const currentScenario =
    scenarios.length > 0 ? scenarios[currentIndex] : initialScenario;
  const { domain, userRole, question, answer, actions, checks } =
    currentScenario || {};

  // Auto-cycle logic
  useEffect(() => {
    if (step === 5 && scenarios.length > 1) {
      const timer = setTimeout(() => {
        setIsChanging(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % scenarios.length);
          setIsChanging(false);
        }, 1000);
      }, 5000); // 5 seconds pause after completion
      return () => clearTimeout(timer);
    }
  }, [step, scenarios.length]);

  // Reset and Start sequence when scenario changes
  useEffect(() => {
    setStep(0);
    setInputDisplayedText("");
    setUserFeedText("");
    setAiDisplayedText("");
    setShowChecks(false);
    setIsAutoScrolling(true);

    const startTimer = setTimeout(() => {
      setStep(1); // Start typing in input
    }, 1200);

    return () => clearTimeout(startTimer);
  }, [currentIndex, currentScenario]);

  // Step 1: Handle User Typing into Input Bar
  useEffect(() => {
    if (step === 1 && !isChanging && question) {
      let index = 0;
      const interval = setInterval(() => {
        setInputDisplayedText(question.slice(0, index + 1));
        index++;
        if (index >= question.length) {
          clearInterval(interval);
          setTimeout(() => setStep(2), 600); // Wait then "send"
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [step, question, isChanging]);

  // Step 2: Handle "Send" Animation
  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => {
        setUserFeedText(question);
        setInputDisplayedText("");
        setStep(3); // Start Thinking
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [step, question]);

  // Step 3: Handle Thinking and Checks
  useEffect(() => {
    if (step === 3) {
      const checkTimer = setTimeout(() => {
        setShowChecks(true);
      }, 1000);

      const streamTimer = setTimeout(() => {
        setStep(4); // Start Streaming
      }, 3500);

      return () => {
        clearTimeout(checkTimer);
        clearTimeout(streamTimer);
      };
    }
  }, [step]);

  // Step 4: Handle AI Streaming
  useEffect(() => {
    if (step === 4 && answer) {
      let index = 0;
      const typeNext = () => {
        if (index < answer.length) {
          const speed = answer.length > 300 ? 10 : 20;
          setAiDisplayedText(answer.slice(0, index + 1));
          index++;
          setTimeout(typeNext, speed + Math.random() * 15);
        } else {
          setStep(5);
        }
      };
      const initialDelay = setTimeout(typeNext, 400);
      return () => clearTimeout(initialDelay);
    }
  }, [step, answer]);

  // Auto-scroll logic
  useEffect(() => {
    if (isAutoScrolling && scrollRef.current) {
      const scrollContainer = scrollRef.current;
      scrollContainer.scrollTo({
        top: scrollContainer.scrollHeight,
        behavior: step === 4 ? "auto" : "smooth",
      });
    }
  }, [step, userFeedText, aiDisplayedText, showChecks, isAutoScrolling]);

  const restart = () => {
    setIsChanging(true);
    setTimeout(() => {
      setStep(0);
      setInputDisplayedText("");
      setUserFeedText("");
      setAiDisplayedText("");
      setShowChecks(false);
      setIsChanging(false);
      setTimeout(() => setStep(1), 500);
    }, 500);
  };

  const renderText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong
            key={i}
            className="text-white font-bold border-b border-[#0048FF]/30"
          >
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  if (!currentScenario) return null;

  return (
    <div className="w-full h-full relative p-3 sm:p-4 bg-[#050505] rounded-[2.5rem] shadow-2xl border border-white/20 font-sans selection:bg-[#0048FF]/30">
      {/* Inner Bezel (Screen Area) */}
      <div className="relative bg-black rounded-[1.8rem] overflow-hidden w-full h-full border border-white/5 flex flex-col">
        {/* Front Camera Notch / Lens (Top Centered) */}
        <div className="absolute z-30 top-3 sm:top-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)] flex items-center justify-center">
            <div className="w-[3px] h-[3px] rounded-full bg-[#0048FF]/30" />
          </div>
        </div>

        {/* Screen Glare/Reflections */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.02] to-transparent z-20" />

        {/* Chat Content Area */}
        <div className="w-full h-full relative z-10 flex flex-col overflow-hidden bg-[#050508]">
          {/* Background Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Transition Overlay */}
          <AnimatePresence>
            {isChanging && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-[#050508] flex flex-col items-center justify-center gap-4"
              >
                <div className="w-12 h-12 border border-[#0048FF]/20 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#0048FF] animate-pulse" />
                </div>
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">
                  Reconfiguring Engine
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Top Navigation / Status Header */}
          <header className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-[#050508] relative z-10">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#0048FF] shadow-[0_0_10px_rgba(0,72,255,0.5)]" />
                <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">
                  DEXA {/*{domain}*/}
                </h3>
              </div>
              {/* <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6 opacity-30">
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">
              Cluster: MG-EU-01
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">
              Lat: 14ms
            </span>
          </div> */}
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3 py-1 border border-white/10 bg-white/[0.02] flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 ${step === 5 ? "bg-green-500" : "bg-amber-500 animate-pulse"}`}
                />
                <span className="text-[9px] text-white/40 font-black uppercase tracking-widest">
                  {step === 5 ? "IDLE" : "EXECUTING"}
                </span>
              </div>
              <button
                onClick={restart}
                className="w-8 h-8 flex items-center justify-center border border-white/10 hover:bg-white/5 transition-colors"
              >
                <RefreshCw className="w-3 h-3 text-white/40" />
              </button>
            </div>
          </header>

          {/* Main Chat Feed */}
          <div
            ref={scrollRef}
            onWheel={() => setIsAutoScrolling(false)}
            className="flex-1 overflow-y-auto px-6 py-8 space-y-10 scrollbar-hide relative z-0"
          >
            {/* User Message */}
            {userFeedText && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col items-end"
              >
                <div className="flex items-center gap-2 mb-2 px-1">
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">
                    {userRole}
                  </span>
                  <Terminal className="w-3 h-3 text-white/10" />
                </div>
                <div className="bg-white/[0.03] border border-white/10 p-4 max-w-[85%] text-right">
                  <p className="text-[13px] leading-relaxed text-white/80">
                    {userFeedText}
                  </p>
                </div>
              </motion.div>
            )}

            {/* AI Response */}
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col items-start"
              >
                <div className="flex items-center gap-2 mb-2 px-1">
                  <Cpu className="w-3 h-3 text-[#0048FF]" />
                  <span className="text-[9px] font-black text-[#0048FF] uppercase tracking-[0.3em]">
                    DEXA Engine Response
                  </span>
                </div>

                <div className="w-full bg-[#09090E] border border-white/10 p-6 relative overflow-hidden">
                  {/* Processing Indicators */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                        <div className="flex items-center gap-4">
                          <div className="flex gap-1.5">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  opacity: [0.3, 1, 0.3],
                                  height: ["4px", "12px", "4px"],
                                }}
                                transition={{
                                  duration: 0.8,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                                className="w-1 bg-[#0048FF]"
                              />
                            ))}
                          </div>
                          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">
                            Governed Reasoning Engine Active
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 px-3 py-1 bg-[#0048FF]/5 border border-[#0048FF]/20">
                            <span className="text-[8px] font-black text-white/30 uppercase">
                              Confidence
                            </span>
                            <span className="text-[10px] font-black text-[#0048FF]">
                              98.4%
                            </span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/5 border border-green-500/20">
                            <span className="text-[8px] font-black text-white/30 uppercase">
                              Gate
                            </span>
                            <span className="text-[10px] font-black text-green-500 uppercase">
                              Passed
                            </span>
                          </div>
                        </div>
                      </div>

                      {showChecks && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-6"
                        >
                          {(Array.isArray(checks)
                            ? checks
                            : checks?.split(", ")
                          )?.map((check, i) => (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              key={i}
                              className="flex items-center justify-between bg-white/[0.02] border border-white/5 px-4 py-2 group hover:border-[#0048FF]/30 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-1 h-1 bg-[#0048FF]/40 group-hover:bg-[#0048FF] transition-colors" />
                                <span className="text-[9px] text-white/40 font-black uppercase tracking-wider">
                                  {check.replace("DEXA checks ", "CHK_")}
                                </span>
                              </div>
                              <span className="text-[8px] font-black text-green-500/50 uppercase tracking-tighter">
                                OK
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Response Text */}
                  {step >= 4 && (
                    <div className="space-y-8">
                      <div className="text-[13px] leading-[1.8] text-white/90 whitespace-pre-wrap selection:bg-[#0048FF]">
                        {renderText(aiDisplayedText)}
                        {step === 4 && (
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity }}
                            className="inline-block w-2.5 h-4 ml-1.5 bg-[#0048FF] align-middle shadow-[0_0_8px_rgba(0,72,255,0.8)]"
                          />
                        )}
                      </div>

                      {/* Actions Area */}
                      {step === 5 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-8 border-t border-white/5"
                        >
                          <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mb-4">
                            Governed Next Actions
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {actions?.map((action, i) => (
                              <motion.button
                                key={i}
                                whileHover={{
                                  backgroundColor: "rgba(0,72,255,0.1)",
                                  borderColor: "rgba(0,72,255,0.4)",
                                }}
                                className="px-5 py-3 border border-white/10 bg-transparent text-[10px] font-black text-white/70 hover:text-white transition-all flex items-center gap-4 group"
                              >
                                {action}
                                <ArrowRight className="w-3 h-3 text-[#0048FF] group-hover:translate-x-1 transition-transform" />
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>

                {/* Compliance Footer */}
                {step === 5 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 flex flex-wrap gap-6 opacity-30 px-1"
                  >
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3" />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                        Governed Routing
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-3 h-3" />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                        End-to-End Encryption
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-3 h-3" />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                        Mg-Chain-Audit v1.4
                      </span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>

          {/* Simulated Industrial Input Bar */}
          <footer className="p-6 border-t border-white/10 bg-[#050508] relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="relative group/input">
                <div className="absolute -inset-[1px] bg-white/5 group-focus-within/input:bg-[#0048FF]/20 transition-colors" />
                <div className="relative bg-[#09090E] border border-white/10 flex items-stretch">
                  {/* Command Prefix */}
                  <div className="px-4 flex items-center border-r border-white/10 bg-white/[0.02]">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">
                      MG_CMD:
                    </span>
                  </div>

                  {/* Text Area */}
                  <div className="flex-1 px-5 py-4 min-h-[56px] flex items-center text-[13px] text-white/90">
                    {inputDisplayedText}
                    {step === 1 && (
                      <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="w-2 h-4 ml-1 bg-[#0048FF]"
                      />
                    )}
                    {step > 1 && !inputDisplayedText && (
                      <span className="text-white/10 font-bold uppercase tracking-[0.2em]">
                        Waiting for processing...
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center border-l border-white/10">
                    <button className="w-14 h-full flex items-center justify-center text-white/20 hover:text-white/40 transition-colors border-r border-white/10">
                      <Paperclip className="w-4 h-4" />
                    </button>
                    <motion.div
                      animate={
                        step === 2
                          ? {
                              scale: [1, 0.95, 1],
                              backgroundColor: [
                                "rgba(0,72,255,0.1)",
                                "rgba(0,72,255,0.8)",
                                "rgba(0,72,255,0.1)",
                              ],
                            }
                          : {}
                      }
                      className={`w-14 h-full flex items-center justify-center transition-all ${step === 2 ? "text-white" : "text-white/10"}`}
                    >
                      <Send
                        className={`w-4 h-4 ${step === 2 ? "fill-current" : ""}`}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Compliance & Security Tags */}
              <div className="mt-6 flex items-center justify-between opacity-20">
                <div className="flex items-center gap-6">
                  {["HIPAA", "SOC2 TYPE II", "GDPR", "ISO 27001"].map((tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      <span className="text-[8px] font-black tracking-[0.3em]">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-[8px] font-black tracking-[0.4em] text-white/40">
                  SECURE_TUNNEL_ESTABLISHED
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
