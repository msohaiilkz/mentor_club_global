import React from "react";

/**
 * IpadMockup Component
 *
 * A high-fidelity, responsive iPad mockup wrapper.
 * Wrap any component to display it inside a premium tablet frame.
 */
export function IpadMockup({
  children,
  className = "",
  orientation = "landscape",
  aspect,
}) {
  const isLandscape = orientation === "landscape";

  // Outer frame dimensions
  const aspectRatio = aspect || (isLandscape ? "aspect-[4/3]" : "aspect-[3/4]");

  return (
    <div className={`relative w-full mx-auto ${className}`}>
      {/* Outer iPad Frame */}
      <div
        className={`relative z-10 bg-[#050505] rounded-[2.5rem] p-3 sm:p-4 shadow-2xl border border-white/20 overflow-hidden ${aspectRatio}`}
      >
        {/* Inner Bezel */}
        <div className="relative bg-black rounded-[1.8rem] overflow-hidden w-full h-full border border-white/5">
          {/* Front Camera Notch / Lens */}
          <div
            className={`absolute z-30 ${isLandscape ? "left-3 sm:left-4 top-1/2 -translate-y-1/2" : "top-3 sm:top-4 left-1/2 -translate-x-1/2"} flex flex-col items-center justify-center`}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)] flex items-center justify-center">
              <div className="w-[3px] h-[3px] rounded-full bg-[#0048FF]/30" />
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full h-full relative z-10 overflow-auto scrollbar-hide bg-[#050508]">
            {children}
          </div>

          {/* Screen Glare/Reflections */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.02] to-transparent z-20" />
        </div>
      </div>

      {/* Subtle bottom shadow/ambient occlusion */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-black/90 blur-2xl -z-10 rounded-full" />
    </div>
  );
}
