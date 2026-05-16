import React from "react";
import { motion } from "framer-motion";

/**
 * MacbookMockup Component
 * 
 * A high-fidelity, responsive MacBook mockup wrapper.
 * Wrap any component (like ChatSimulation) to display it inside a premium laptop frame.
 */
export function MacbookMockup({ children, className = "" }) {
  return (
    <div className={`relative w-full max-w-5xl mx-auto ${className}`}>
      {/* Laptop Screen / Lid */}
      <div className="relative z-10 bg-[#050505] rounded-[2rem] p-2 sm:p-3 shadow-2xl border border-white/10 overflow-hidden">
        {/* Inner Bezel */}
        <div className="relative bg-black rounded-[1.4rem] overflow-hidden border border-white/5 aspect-[16/10]">
          {/* Top Camera Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black z-30 rounded-b-xl flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
            <div className="w-1 h-1 rounded-full bg-[#0048FF]/20" />
          </div>
          
          {/* Content Area */}
          <div className="w-full h-full relative z-10 overflow-auto scrollbar-hide bg-[#050508]">
            {children}
          </div>

          {/* Screen Glare/Reflections */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.02] to-transparent z-20" />
        </div>
      </div>

      {/* Laptop Base (Keyboard area) */}
      <div className="relative -mt-1 z-0">
        {/* The Hinge (Connects lid to base) */}
        <div className="h-2 w-[94%] mx-auto bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border-x border-white/10 rounded-t-sm" />
        
        {/* Main Chassis Body - Slightly wider than the lid for realism */}
        <div className="relative h-7 sm:h-9 w-[103%] -left-[1.5%] bg-gradient-to-b from-[#1E1E1E] via-[#2a2a2a] to-[#050505] rounded-b-[2.5rem] border-x border-b border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Top Surface Highlight / Edge Reflection */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          
          {/* Trackpad / Thumb Cutout - Refined with more depth */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-3 sm:h-4 bg-[#0a0a0a] rounded-b-3xl border-x border-b border-white/10 shadow-[inset_0_-2px_8px_rgba(0,0,0,0.8)]" />
          
          {/* Subtle metallic texture/grain */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/brushed-alum.png")' }} />
        </div>
        
        {/* Bottom Feet / Lift (Visible shadows) */}
        <div className="absolute -bottom-1 left-[10%] right-[10%] h-1.5 bg-black/80 blur-[3px] rounded-full" />
        
        {/* Large Ambient Occlusion Shadow */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[94%] h-10 bg-black/90 blur-3xl -z-10 rounded-full" />
      </div>

      {/* Surface Reflection / Underglow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[100%] h-40 bg-[#0048FF]/5 blur-[140px] rounded-full pointer-events-none" />
    </div>
  );
}
