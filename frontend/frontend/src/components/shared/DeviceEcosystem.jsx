import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MacbookMockup } from "./MacbookMockup";

/**
 * IphoneFrame — A minimal, high-fidelity iPhone mockup.
 */
function IphoneFrame({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative bg-[#0A0A0A] rounded-[2.8rem] p-[6px] shadow-2xl border-[3px] border-[#1A1A1A] overflow-hidden aspect-[9/19]">
        <div className="relative bg-black rounded-[2.4rem] overflow-hidden w-full h-full border border-white/5">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black z-30 rounded-full flex items-center justify-end px-2.5 gap-1">
            <div className="w-1 h-1 rounded-full bg-[#1a1a1a]" />
            <div className="w-[3px] h-[3px] rounded-full bg-[#0048FF]/30" />
          </div>
          <div className="w-full h-full relative z-10 overflow-hidden">
            {children}
          </div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.03] to-transparent z-20" />
        </div>
      </div>
    </div>
  );
}

/**
 * DeviceEcosystem Component
 *
 * Laptop centered as dominant visual, phone tilted overlapping from bottom-left,
 * floating proof cards on both sides. Matches Mentor Health hero layout.
 */
export function DeviceEcosystem({
  laptopContent,
  phoneContent,
  proofCards = [],
  className = "",
}) {
  return (
    <div className={`relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center ${className}`}>
      {/* Laptop — centered, dominant */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-[800px]"
      >
        <MacbookMockup className="shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
          {laptopContent}
        </MacbookMockup>
      </motion.div>

      {/* Phone — tilted, overlapping from bottom-left, adjusted for mobile to prevent overflow */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -12 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-[2%] left-0 sm:-left-[5%] xl:-left-[2%] z-30 w-[120px] sm:w-[170px] xl:w-[210px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
      >
        <IphoneFrame>
          {phoneContent}
        </IphoneFrame>
      </motion.div>

      {/* Left Proof Card — white bg, floats up/down */}
      {proofCards.length > 0 && proofCards[0] && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute left-[-8%] xl:left-[2%] top-[15%] z-40 hidden xl:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white flex items-center gap-4 min-w-[220px]"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${proofCards[0].iconBg || "bg-[#0048FF]/10"}`}>
              {proofCards[0].icon}
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-black/40 font-bold">
                {proofCards[0].label}
              </p>
              <h4 className="text-2xl font-black text-[#0048FF]">
                {proofCards[0].value}
              </h4>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Right Proof Card — dark bg, floats with offset rhythm */}
      {proofCards.length > 1 && proofCards[1] && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute right-[-5%] xl:right-[2%] top-[5%] z-40 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="bg-[#11111f] p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 flex items-center gap-4 min-w-[240px]"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${proofCards[1].iconBg || "bg-[#10b981]/20"}`}>
              {proofCards[1].icon}
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">
                {proofCards[1].label}
              </p>
              <h4 className="text-2xl font-black text-white">
                {proofCards[1].value}
              </h4>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
