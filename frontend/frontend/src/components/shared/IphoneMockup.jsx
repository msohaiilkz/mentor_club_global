import React from "react";

/**
 * IphoneMockup Component
 * 
 * A high-fidelity, responsive iPhone mockup wrapper.
 * Wrap any component (like ChatSimulation) to display it inside a premium smartphone frame.
 * Consistent with the project's boxy, industrial aesthetic.
 */
export function IphoneMockup({ children, className = "" }) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: "320px", height: "650px" }}>
      {/* Outer Frame */}
      <div className="absolute inset-0 bg-[#050505] rounded-[3rem] p-3 shadow-2xl border border-white/10 overflow-hidden">
        {/* Inner Bezel / Screen */}
        <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden border border-white/5">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black z-30 rounded-full flex items-center justify-center gap-2 border border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
            <div className="w-1 h-1 rounded-full bg-[#0048FF]/20" />
          </div>
          
          {/* Content Area */}
          <div className="w-full h-full relative z-10 overflow-hidden bg-[#050508]">
            {children}
          </div>

          {/* Screen Glare/Reflections */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.02] to-transparent z-20" />
        </div>
      </div>

      {/* Buttons */}
      {/* Power Button */}
      <div className="absolute top-40 -right-[2px] w-[3px] h-16 bg-gradient-to-b from-white/10 to-transparent border-y border-l border-white/10 rounded-l-sm" />
      
      {/* Volume Buttons */}
      <div className="absolute top-32 -left-[2px] w-[3px] h-12 bg-gradient-to-b from-white/10 to-transparent border-y border-r border-white/10 rounded-r-sm" />
      <div className="absolute top-48 -left-[2px] w-[3px] h-12 bg-gradient-to-b from-white/10 to-transparent border-y border-r border-white/10 rounded-r-sm" />

      {/* Surface Reflection / Underglow */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-[#0048FF]/5 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
}
