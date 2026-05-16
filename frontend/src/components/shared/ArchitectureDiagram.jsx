import React from "react";

export function ArchitectureDiagram() {
  return (
    <div className="relative z-10 flex flex-col items-center w-full py-2">
      {/* Level 1: Holding Company */}
      <div className="flex flex-col items-center group cursor-pointer">
        <p className="text-[10px] uppercase tracking-widest font-bold text-[#0048FF] mb-2 transition-colors">
          Holding Company Core
        </p>
        <div className="px-8 py-3 bg-[#11111F] border border-[#11111F] rounded-lg shadow-lg group-hover:shadow-[0_0_20px_rgba(0,72,255,0.3)] group-hover:border-[#0048FF] transition-all duration-300">
          <p className="text-sm font-bold text-white tracking-wide">
            Mentor Global
          </p>
        </div>
      </div>

      {/* Connection from Level 1 to Level 2 */}
      <div className="w-px h-6 bg-gradient-to-b from-[#11111F]/20 to-[#0048FF]/40 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#11111F]/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0048FF]/40" />
      </div>
      <div className="w-[60%] border-t border-[#0048FF]/40 relative"></div>
      <div className="w-[60%] flex justify-between relative">
        <div className="w-px h-4 bg-[#0048FF]/40 relative"></div>
        <div className="w-px h-4 bg-[#0048FF]/40 relative"></div>
      </div>

      {/* Level 2: Technology & Intelligence Engines */}
      <div className="flex justify-between w-[80%] -mt-1 gap-4">
        {/* Technology Engine */}
        <div className="flex flex-1 flex-col items-center group cursor-pointer">
          <div className="w-full bg-white border border-[#11111F]/10 rounded-lg p-3 shadow-sm group-hover:-translate-y-1 group-hover:border-[#0048FF]/50 group-hover:shadow-[0_8px_20px_rgba(0,72,255,0.08)] transition-all duration-300 flex flex-col items-center">
            <p className="text-[9px] uppercase tracking-wider font-bold text-[#8A8A93] mb-1 group-hover:text-[#0048FF] transition-colors text-center">
              Technology Engine
            </p>
            <p className="text-xs font-bold text-[#11111F] text-center">
              Mentor Innovation
            </p>
          </div>
        </div>
        {/* Intelligence Engine */}
        <div className="flex flex-1 flex-col items-center group cursor-pointer">
          <div className="w-full bg-white border border-[#11111F]/10 rounded-lg p-3 shadow-sm group-hover:-translate-y-1 group-hover:border-[#8A2BE2]/50 group-hover:shadow-[0_8px_20px_rgba(138,43,226,0.08)] transition-all duration-300 flex flex-col items-center">
            <p className="text-[9px] uppercase tracking-wider font-bold text-[#8A8A93] mb-1 group-hover:text-[#8A2BE2] transition-colors text-center">
              Intelligence Processing
            </p>
            <p className="text-xs font-bold text-[#11111F] text-center">DEXA</p>
          </div>
        </div>
      </div>

      {/* Connection from Level 2 to Level 3 */}
      <div className="w-full max-w-[80%] flex justify-center mt-2">
        {/* Center line dropping down, logically connecting from both engines to a central hub, or just a bar */}
        <div className="w-px h-4 bg-gradient-to-b from-[#0048FF]/30 to-[#0048FF]/30 relative" />
      </div>
      <div className="w-[85%] border-t border-[#0048FF]/30 relative flex justify-between">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-px h-4 bg-[#0048FF]/30" />
        ))}
      </div>

      {/* Level 3: Infrastructure Verticals */}
      <div className="flex justify-between w-[95%] -mt-1 gap-2">
        {["Healthcare", "Insurance", "Fintech", "AI", "Mentor OS"].map(
          (vertical, i) => (
            <div key={vertical} className="flex-1 group cursor-pointer">
              <div className="h-full bg-[#FAFAFA] border border-[#0048FF]/20 rounded p-2 flex flex-col items-center justify-center text-center group-hover:bg-[#0048FF] group-hover:border-[#0048FF] transition-all duration-300">
                <p className="text-[9px] md:text-[10px] font-semibold text-[#11111F] group-hover:text-white transition-colors leading-tight">
                  {vertical}
                  <span className="block opacity-60 text-[8px] mt-0.5">
                    Infra
                  </span>
                </p>
              </div>
            </div>
          ),
        )}
      </div>

      {/* Connection from Level 3 to Level 4 */}
      <div className="w-px h-4 bg-[#0048FF]/20 mt-1"></div>
      <div className="w-[70%] border-t border-[#0048FF]/20 relative flex justify-between">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-px h-4 bg-[#0048FF]/20" />
        ))}
      </div>

      {/* Level 4: Market Chapters & Companies */}
      <div className="flex justify-between w-[100%] -mt-1 gap-5">
        {[
          {
            name: "Pakistan",
            companies: ["Mentor Health", "Mentor TPA", "Mentor Innovation"],
          },
          { name: "UAE", companies: ["HealthRails", "MedPreneur"] },
          { name: "US", companies: ["InfraHealth"] },
        ].map((market) => (
          <div
            key={market.name}
            className="flex-1 flex flex-col items-center group cursor-default"
          >
            {/* Market Pill */}
            <div className="px-4 py-1.5 rounded-full border border-[#11111F]/10 bg-white text-[10px] md:text-xs font-bold text-[#11111F] shadow-sm group-hover:border-[#0048FF]/50 group-hover:shadow-md transition-all duration-300 z-10">
              {market.name}
            </div>

            {/* Connection line downwards */}
            <div className="w-px h-3 bg-[#11111F]/10 group-hover:bg-[#0048FF]/40 transition-colors duration-300" />

            {/* Companies List */}
            <div className="flex flex-col gap-1 w-full px-1">
              {market.companies.map((company, idx) => (
                <div
                  key={idx}
                  className="relative group/company bg-white border border-[#11111F]/5 rounded-sm px-2 py-1.5 flex items-center gap-1.5 hover:border-[#0048FF]/30 hover:shadow-[0_4px_10px_rgba(0,72,255,0.06)] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Left Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#11111F]/5 group-hover/company:bg-[#0048FF] transition-colors duration-300" />
                  
                  {/* Status Dot */}
                  <div className="w-1 h-1 rounded-full bg-[#0048FF]/20 group-hover/company:bg-[#0048FF] group-hover/company:shadow-[0_0_4px_rgba(0,72,255,0.6)] transition-all duration-300 flex-shrink-0" />
                  
                  <span className="text-[8px] md:text-[9px] font-semibold text-[#11111F]/80 group-hover/company:text-[#11111F] leading-tight text-left">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
