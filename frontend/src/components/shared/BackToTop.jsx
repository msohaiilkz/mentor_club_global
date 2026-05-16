import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrolled > 50);

      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = height > 0 ? (scrolled / height) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Force visible for testing if you want, but let's try with pageYOffset
  if (!isVisible) return null;

  return (
    <div
      id="back-to-top"
      className="fixed bottom-8 right-6 z-[999999] flex flex-col items-center group active:scale-95 transition-all duration-300 ease-out"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ cursor: 'pointer', pointerEvents: 'auto' }}
    >
      {/* Scroll Percentage Badge */}
      <div className="mb-2 bg-[#0048FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full tabular-nums shadow-lg border border-white/20 transform group-hover:scale-110 transition-transform duration-300">
        {Math.round(scrollProgress)}%
      </div>

      <div className="relative flex flex-col items-center">
        {/* Main Button Circle */}
        <div className="w-10 h-10 rounded-full bg-white dark:bg-[#11111F] text-[#0048FF] flex items-center justify-center shadow-xl border border-black/5 dark:border-white/10 z-10 group-hover:bg-[#0048FF] group-hover:text-white transition-all duration-300">
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </div>

        {/* Progress Vertical Bar */}
        <div className="w-1.5 h-16 bg-gray-100 dark:bg-white/5 rounded-full -mt-2 overflow-hidden relative border border-black/5 dark:border-white/5 shadow-inner">
          <div 
            className="absolute top-0 left-0 w-full bg-[#0048FF] transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
