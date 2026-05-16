import React from "react";

/**
 * PhoneMockup Component
 * 
 * A high-fidelity, responsive iPhone-style mockup.
 * Wrap any component to display it inside a premium mobile frame.
 */
export function PhoneMockup({ children, className = "" }) {
  return (
    <div className={`relative w-[280px] sm:w-[320px] mx-auto ${className}`}>
      {/* Outer Phone Frame */}
      <div className="relative z-10 bg-[#0A0A0A] rounded-[3.5rem] p-3 shadow-2xl border-[4px] border-[#1A1A1A] overflow-hidden aspect-[9/19]">
        {/* Antenna Lines / Side Buttons (Decorative) */}
        <div className="absolute top-24 -left-[2px] w-[2px] h-10 bg-[#2A2A2A] rounded-r-sm" />
        <div className="absolute top-40 -left-[2px] w-[2px] h-14 bg-[#2A2A2A] rounded-r-sm" />
        <div className="absolute top-32 -right-[2px] w-[2px] h-16 bg-[#2A2A2A] rounded-l-sm" />

        {/* Inner Screen */}
        <div className="relative bg-black rounded-[2.8rem] overflow-hidden w-full h-full border border-white/5">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black z-30 rounded-full flex items-center justify-end px-3 gap-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
             <div className="w-1 h-1 rounded-full bg-[#0048FF]/30" />
          </div>
          
          {/* Content Area */}
          <div className="w-full h-full relative z-10 overflow-hidden bg-[#050508]">
            {children}
          </div>

          {/* Screen Glare */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.03] to-transparent z-20" />
        </div>
      </div>

      {/* Subtle bottom shadow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/80 blur-3xl -z-10 rounded-full" />
    </div>
  );
}
