import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Cpu, ShieldCheck, Activity, Send, CheckCircle2, AlertTriangle, Play, Pause } from "lucide-react";

const threads = [
  {
    id: 1,
    title: "CEO Health Risk Review",
    role: "Group CEO",
    messages: [
      {
        type: "user",
        text: "DEXA, what is the health risk score of our organization this quarter?"
      },
      {
        type: "ai",
        text: "Your organization's current health risk score is 72 out of 100, classified as moderate to high risk. The main drivers are rising hypertension indicators, repeated pharmacy utilization for chronic medication, increased stress related consultations, and low preventive screening participation.",
        tags: [{ label: "Confidence: 94%", type: "confidence" }]
      },
      {
        type: "user",
        text: "Which departments are creating the highest risk and cost pressure?"
      },
      {
        type: "ai",
        text: "The highest risk concentration is coming from operations, sales, and customer support teams. These departments show higher outpatient visits, stress related consultations, and repeated pharmacy usage. Operations also shows a higher pattern of hypertension and diabetes related medication.\n\nRecommended focus:\n• Start with employees above age 35.\n• Prioritize departments with high absenteeism.\n• Target employees with repeated OPD and pharmacy claims.\n• Run screening before renewal season."
      },
      {
        type: "user",
        text: "What should we do in the next 90 days?"
      },
      {
        type: "ai",
        text: "I recommend a 90 day risk reduction plan.\n\nMonth 1: Run health risk assessments and biometric screenings.\nMonth 2: Launch hypertension, diabetes, obesity, and mental health programs.\nMonth 3: Route non urgent OPD cases through teleconsultation first and activate preventive care nudges.\n\nExpected impact:\n• Lower avoidable claims.\n• Earlier chronic disease detection.\n• Better employee satisfaction.\n• Improved visibility for HR and finance.",
        tags: [{ label: "Human review recommended before changing benefit design.", type: "warning" }]
      }
    ]
  },
  {
    id: 2,
    title: "HR Wellness Strategy",
    role: "HR Director",
    messages: [
      {
        type: "user",
        text: "DEXA, how can we reduce claims without reducing employee benefits?"
      },
      {
        type: "ai",
        text: "Do not cut benefits. Redirect them.\n\nYour data suggests that a small high risk employee group is driving most recurring OPD, pharmacy, and diagnostic utilization. The better strategy is preventive segmentation, not benefit reduction."
      },
      {
        type: "user",
        text: "Which employee groups should we focus on first?"
      },
      {
        type: "ai",
        text: "Focus on three groups first:\n\n• Employees with repeated pharmacy claims for chronic medication.\n• Employees with multiple OPD visits in the last 90 days.\n• Employees who have not completed preventive screening in the last 12 months.\n\nThese groups are more likely to generate avoidable claims if no intervention is made."
      },
      {
        type: "user",
        text: "Give me a practical wellness plan I can execute."
      },
      {
        type: "ai",
        text: "Recommended HR action plan:\n\n• Launch a digital health risk survey.\n• Schedule onsite screening for blood pressure, glucose, BMI, and cholesterol.\n• Offer teleconsultation first for non urgent OPD cases.\n• Run mental health support for high stress teams.\n• Send monthly preventive nudges through the employee app.\n• Track participation, risk movement, and claim reduction through the HR dashboard.\n\nI can convert this into a 90 day HR execution calendar.",
        tags: [{ label: "Execution ready", type: "success" }]
      }
    ]
  },
  {
    id: 3,
    title: "Employee Claim Support",
    role: "Employee",
    messages: [
      {
        type: "user",
        text: "DEXA, why is my reimbursement claim on hold?"
      },
      {
        type: "ai",
        text: "Your claim is on hold because two documents are missing:\n\n• Doctor prescription.\n• Original pharmacy invoice.\n\nI also found a mismatch between the uploaded bill amount and the amount entered in the claim form."
      },
      {
        type: "user",
        text: "What should I upload to fix it?"
      },
      {
        type: "ai",
        text: "Please upload:\n\n• A clear image of the doctor prescription.\n• The original pharmacy invoice with date, amount, and item details visible.\n• A corrected claim amount matching the invoice.\n\nAvoid cropped or edited images. The system will recheck the claim once the documents are uploaded.",
        tags: [{ label: "Upload action pending", type: "warning" }]
      },
      {
        type: "user",
        text: "How long will it take after I upload the documents?"
      },
      {
        type: "ai",
        text: "Once the missing documents are uploaded, your claim will move back to medical review.\n\nEstimated timeline:\n• Document validation: instant to 2 hours.\n• Medical review: 24 to 48 hours.\n• Final approval or query: based on policy rules and document clarity.\n\nI will notify you when the claim status changes."
      }
    ]
  },
  {
    id: 4,
    title: "Provider POS Eligibility",
    role: "Hospital Billing Officer",
    messages: [
      {
        type: "user",
        text: "DEXA, why was this patient partially approved at POS?"
      },
      {
        type: "ai",
        text: "The patient is eligible, but only part of the transaction matches the benefit rules.\n\nApproved:\n• Consultation.\n• Basic lab test.\n• Covered pharmacy items.\n\nNot approved:\n• Non covered supplement.\n• Service outside current OPD limit.\n• Item without mapped benefit code."
      },
      {
        type: "user",
        text: "Can we split the bill and process only the approved items?"
      },
      {
        type: "ai",
        text: "Yes. Split the bill into covered and non covered items.\n\n• Process the approved amount through Mentor eligibility.\n• Collect the non covered amount directly from the patient.\n• Request HR approval only if the employer allows benefit exceptions.\n\nThis will keep the transaction compliant and reduce claim rejection risk."
      },
      {
        type: "user",
        text: "What should we do if this happens again?"
      },
      {
        type: "ai",
        text: "Use the POS benefit check before final billing.\n\nRecommended workflow:\n• Enter patient ID or scan QR.\n• Verify benefit category.\n• Map each service to the approved benefit code.\n• Split non covered services before payment.\n• Generate a clean invoice after confirmation.\n\nThis reduces disputes, reversals, and billing delays.",
        tags: [{ label: "Workflow optimization", type: "success" }]
      }
    ]
  },
  {
    id: 5,
    title: "CFO Cost Forecast",
    role: "Chief Finance Officer",
    messages: [
      {
        type: "user",
        text: "DEXA, what is our projected health cost exposure for next quarter?"
      },
      {
        type: "ai",
        text: "Projected next quarter exposure is trending 14 percent higher than the current quarter.\n\nMain drivers:\n• Increase in inpatient admissions.\n• Higher maternity related utilization.\n• Repeat diagnostic testing among chronic patients.\n• Provider pricing variance in two hospital tiers.\n• Delayed preventive screening."
      },
      {
        type: "user",
        text: "Which cost areas should I watch most closely?"
      },
      {
        type: "ai",
        text: "Watch these areas first:\n\n• Inpatient admissions.\n• Maternity claims.\n• Repeat diagnostics.\n• Emergency conversions to IPD.\n• High variance providers.\n• Employees crossing utilization thresholds.\n\nThese areas have the highest probability of pushing the next quarter above budget.",
        tags: [{ label: "High financial impact", type: "warning" }]
      },
      {
        type: "user",
        text: "Give me a cost control plan that does not hurt employee experience."
      },
      {
        type: "ai",
        text: "Recommended cost control plan:\n\n• Introduce pre authorization checks for high cost procedures.\n• Promote preferred provider routing.\n• Run screening for chronic risk groups.\n• Create alerts for departments crossing utilization limits.\n• Review top 10 claim categories before renewal.\n• Use teleconsultation first for non urgent OPD cases.\n\nThis protects employee experience while reducing avoidable cost leakage.\n\nI can prepare a CFO dashboard with risk, utilization, claim trends, and projected exposure."
      }
    ]
  },
  {
    id: 6,
    title: "TPA Claim Audit",
    role: "TPA Claims Manager",
    messages: [
      {
        type: "user",
        text: "DEXA, which claims should go to manual review today?"
      },
      {
        type: "ai",
        text: "I found 17 claims that should be manually reviewed.\n\nPriority flags:\n• 4 possible duplicate submissions.\n• 3 invoices above provider benchmark.\n• 5 claims missing diagnosis or prescription link.\n• 2 claims with image modification risk.\n• 3 claims outside expected treatment pathway.",
        tags: [{ label: "Confidence: 91%", type: "confidence" }]
      },
      {
        type: "user",
        text: "Which claims can be approved automatically?"
      },
      {
        type: "ai",
        text: "Claims can be auto approved if they pass all checks:\n\n• Valid employee or policy eligibility.\n• Complete prescription and invoice.\n• Amount within benefit limit.\n• Provider category matched.\n• No duplicate document risk.\n• No pricing anomaly.\n• No exclusion under policy rules.\n\nI found 43 low risk claims that meet these conditions."
      },
      {
        type: "user",
        text: "What should the team do with the flagged claims?"
      },
      {
        type: "ai",
        text: "Recommended workflow:\n\n• Send duplicate risk claims to fraud review.\n• Send pricing variance claims to provider audit.\n• Ask employees for missing prescription or diagnosis documents.\n• Send treatment pathway mismatches to medical review.\n• Keep rejection decisions under human approval.",
        tags: [{ label: "Human review required before final rejection.", type: "warning" }]
      }
    ]
  }
];

export function DexaHeroChat() {
  const [activeThreadIndex, setActiveThreadIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [activeRoleTyping, setActiveRoleTyping] = useState(null); // 'user' | 'ai' | null
  const [typingText, setTypingText] = useState("");
  const scrollRef = useRef(null);

  const activeThread = threads[activeThreadIndex];

  // Engine cycle logic
  useEffect(() => {
    let isCancelled = false;
    let currentMsgIdx = 0;

    const playThread = async () => {
      setVisibleMessages([]);
      
      while (currentMsgIdx < activeThread.messages.length && !isCancelled) {
        const msg = activeThread.messages[currentMsgIdx];
        
        if (msg.type === "user") {
          // Simulate user typing in the input box
          setActiveRoleTyping("user");
          setTypingText("");
          
          for (let i = 0; i < msg.text.length; i++) {
            if (isCancelled) return;
            setTypingText(prev => prev + msg.text[i]);
            await new Promise(r => setTimeout(r, 15)); // Fast typing
          }
          
          await new Promise(r => setTimeout(r, 400)); // Pause before send
          if (isCancelled) return;
          
          setActiveRoleTyping(null);
          setVisibleMessages(prev => [...prev, msg]);
        } else {
          // Simulate AI "Thinking" and responding
          setActiveRoleTyping("ai");
          setTypingText("Thinking...");
          await new Promise(r => setTimeout(r, 1200)); // Processing time
          if (isCancelled) return;
          
          setActiveRoleTyping(null);
          setVisibleMessages(prev => [...prev, msg]);
        }
        
        currentMsgIdx++;
        
        // Wait before next message
        if (currentMsgIdx < activeThread.messages.length) {
          await new Promise(r => setTimeout(r, 1500));
        }
      }

      // Thread finished, wait and move to next thread
      if (!isCancelled) {
        await new Promise(r => setTimeout(r, 5000)); // 5 seconds to read final message
        if (!isCancelled) {
          setActiveThreadIndex((prev) => (prev + 1) % threads.length);
        }
      }
    };

    playThread();

    return () => {
      isCancelled = true;
    };
  }, [activeThreadIndex]);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages, typingText, activeRoleTyping]);

  return (
    <div className="w-full h-full relative p-2 sm:p-3 bg-[#050508] rounded-[2rem] shadow-2xl border border-white/10 font-sans overflow-hidden group">
      {/* Subtle ambient glow behind the mockup */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-[#0048FF]/20 to-purple-500/20 blur-[80px] -z-10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="relative bg-[#0A0A0F] rounded-[1.5rem] overflow-hidden w-full h-full border border-white/5 flex flex-col md:flex-row shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
        
        {/* Sidebar Tabs */}
        <div className="hidden md:flex flex-col w-64 bg-[#050508] border-r border-white/5 py-4 z-10 relative">
          <div className="px-5 mb-6 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-[#0048FF] to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(0,72,255,0.4)]">
              <Cpu className="w-3 h-3 text-white" />
            </div>
            <span className="text-white text-sm font-bold tracking-tight">DEXA Intelligence</span>
          </div>
          
          <div className="px-3 space-y-1 overflow-y-auto scrollbar-hide">
            {threads.map((thread, idx) => (
              <button
                key={thread.id}
                onClick={() => setActiveThreadIndex(idx)}
                className={`w-full text-left px-3 py-3 rounded-xl transition-all duration-300 flex flex-col gap-1 ${
                  idx === activeThreadIndex 
                    ? "bg-[#0048FF]/10 border border-[#0048FF]/30 shadow-[inset_0_0_20px_rgba(0,72,255,0.05)]" 
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <span className={`text-xs font-semibold ${idx === activeThreadIndex ? "text-[#0048FF]" : "text-white/70"}`}>
                  {thread.title}
                </span>
                <span className="text-[10px] text-white/40 flex items-center gap-1">
                  <User className="w-3 h-3" /> {thread.role}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col relative bg-gradient-to-b from-[#0A0A0F] to-[#050508]">
          {/* Header */}
          <header className="h-16 px-6 border-b border-white/5 flex items-center justify-between shrink-0 bg-white/[0.01] backdrop-blur-md z-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <User className="w-4 h-4 text-white/70" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">{activeThread.title}</h3>
                <span className="text-[10px] text-[#0048FF] font-medium tracking-wide uppercase">{activeThread.role}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-bold text-green-500 uppercase tracking-wider">Active</span>
              </div>
            </div>
          </header>

          {/* Messages Feed */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-hide relative z-10"
          >
            <AnimatePresence initial={false}>
              {visibleMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'} max-w-[90%] ${msg.type === 'user' ? 'ml-auto' : 'mr-auto'}`}
                >
                  <div className={`p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-br from-[#0048FF] to-[#0030CC] text-white rounded-tr-sm border border-white/10' 
                      : 'bg-[#11111A] text-white/90 rounded-tl-sm border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                  }`}>
                    <span className="whitespace-pre-line">{msg.text}</span>
                  </div>
                  
                  {/* Tags / Confidence / Compliance Badges */}
                  {msg.tags && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.tags.map((tag, idx) => (
                        <div key={idx} className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider border ${
                          tag.type === 'confidence' ? 'bg-[#0048FF]/10 text-[#0048FF] border-[#0048FF]/30' :
                          tag.type === 'warning' ? 'bg-amber-500/10 text-amber-500 border-amber-500/30' :
                          'bg-green-500/10 text-green-500 border-green-500/30'
                        }`}>
                          {tag.type === 'confidence' && <Activity className="w-3 h-3" />}
                          {tag.type === 'warning' && <AlertTriangle className="w-3 h-3" />}
                          {tag.type === 'success' && <CheckCircle2 className="w-3 h-3" />}
                          {tag.label}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* AI Processing Indicator */}
            {activeRoleTyping === "ai" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start max-w-[85%] mr-auto"
              >
                <div className="flex items-center gap-2 p-4 rounded-2xl bg-[#11111A] rounded-tl-sm border border-white/5">
                  <Cpu className="w-4 h-4 text-[#0048FF] animate-pulse" />
                  <span className="text-xs text-[#0048FF] font-medium tracking-wide">Processing logic...</span>
                </div>
              </motion.div>
            )}
            
            {/* Invisible div to force scroll to bottom */}
            <div className="h-4" />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/5 bg-[#0A0A0F] z-20">
            <div className="w-full bg-[#11111A] border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between shadow-inner">
              <div className="flex-1 flex items-center pr-4">
                {activeRoleTyping === "user" ? (
                  <span className="text-white/90 text-[13px] break-words">
                    {typingText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="inline-block w-1.5 h-3.5 ml-1 bg-[#0048FF] align-middle"
                    />
                  </span>
                ) : (
                  <span className="text-white/20 text-xs tracking-wide">
                    {activeRoleTyping === "ai" ? "DEXA is responding..." : "DEXA is managing this conversation..."}
                  </span>
                )}
              </div>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                activeRoleTyping === "user" ? "bg-[#0048FF]" : "bg-[#0048FF]/20"
              }`}>
                <Send className={`w-4 h-4 ${activeRoleTyping === "user" ? "text-white" : "text-[#0048FF]"}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
