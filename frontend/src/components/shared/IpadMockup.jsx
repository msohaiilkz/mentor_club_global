import React from "react";

/**
 * IpadMockup Component — cross-platform responsive iPad frame wrapper.
 *
 * iOS Safari fix: border-radius + overflow:hidden combo fails to clip children
 * on iOS without an explicit GPU compositing hint. We use isolation:isolate +
 * transform:translateZ(0) to force a new stacking context so the clip works.
 */
export function IpadMockup({
  children,
  className = "",
  orientation = "landscape",
  aspect,
}) {
  const isLandscape = orientation === "landscape";
  const aspectRatio = aspect || (isLandscape ? "aspect-[4/3]" : "aspect-[3/4]");

  return (
    <div className={`relative w-full mx-auto ${className}`}>
      {/* Outer iPad Frame
          — isolation:isolate creates a new stacking context (iOS fix)
          — transform:translateZ(0) promotes to GPU layer so border-radius clips correctly */}
      <div
        className={`relative z-10 bg-[#050505] rounded-[2.5rem] p-3 sm:p-4 shadow-2xl border border-white/20 ${aspectRatio}`}
        style={{
          isolation: "isolate",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          overflow: "hidden",
        }}
      >
        {/* Inner Bezel
            — same GPU compositing trick for inner rounded clip */}
        <div
          className="relative bg-black rounded-[1.8rem] w-full h-full border border-white/5"
          style={{
            overflow: "hidden",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
          }}
        >
          {/* Front Camera Dot */}
          <div
            className={`absolute z-30 ${
              isLandscape
                ? "left-3 sm:left-4 top-1/2 -translate-y-1/2"
                : "top-3 sm:top-4 left-1/2 -translate-x-1/2"
            } flex flex-col items-center justify-center`}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)] flex items-center justify-center">
              <div className="w-[3px] h-[3px] rounded-full bg-[#0048FF]/30" />
            </div>
          </div>

          {/* Content Area */}
          <div
            className="w-full h-full relative z-10 bg-[#050508]"
            style={{ overflow: "hidden" }}
          >
            {children}
          </div>

          {/* Screen Glare — pointer-events:none so it never blocks touch */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.02] to-transparent z-20" />
        </div>
      </div>

      {/* Ambient shadow under device */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-black/90 blur-2xl -z-10 rounded-full pointer-events-none" />
    </div>
  );
}
