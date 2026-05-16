import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export function ImageClickFlow({ 
  images = [], 
  cursorPath = [], 
  width = 320, 
  height = 640 
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [clickScale, setClickScale] = useState(1);

  useEffect(() => {
    if (!cursorPath.length) return;
    let isSubscribed = true;
    
    const runSequence = async () => {
      while (isSubscribed) {
        for (let i = 0; i < cursorPath.length; i++) {
          if (!isSubscribed) break;
          setCurrentStep(i);
          
          const path = cursorPath[i];
          
          if (path.click) {
            // Wait for cursor to reach the destination
            await new Promise(r => setTimeout(r, 600));
            // Simulate click down
            setClickScale(0.8);
            await new Promise(r => setTimeout(r, 150));
            // Simulate click up
            setClickScale(1);
            await new Promise(r => setTimeout(r, path.wait || 1000));
          } else {
            // Just move and wait
            await new Promise(r => setTimeout(r, path.wait || 1000));
          }
        }
        // Reset sequence
        setCurrentStep(0);
      }
    };

    runSequence();

    return () => {
      isSubscribed = false;
    };
  }, [cursorPath]);

  if (!images.length || !cursorPath.length) return null;

  const currentPath = cursorPath[currentStep];
  const activeImage = images[currentPath.imageIndex];

  return (
    <div 
      className="relative bg-black rounded-[40px] p-2 shadow-2xl border-4 border-gray-800 shrink-0"
      style={{ width: width + 16, height: height + 16 }} // +16px to account for the border/padding thickness
    >
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-50"></div>
      
      {/* Screen Container */}
      <div className="w-full h-full bg-gray-100 rounded-[32px] overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentPath.imageIndex}
            src={activeImage}
            alt="App Screen"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full object-contain object-center bg-white"
          />
        </AnimatePresence>

        {/* Fake Animated Cursor */}
        <motion.div
          className="absolute z-50 pointer-events-none"
          animate={{ 
            x: currentPath.x, 
            y: currentPath.y,
            scale: clickScale
          }}
          transition={{
            x: { type: "spring", stiffness: 60, damping: 15 },
            y: { type: "spring", stiffness: 60, damping: 15 },
            scale: { duration: 0.1 }
          }}
        >
          <div className="relative">
            <MousePointer2 className="w-8 h-8 text-black fill-white drop-shadow-md -rotate-12" />
            {clickScale < 1 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black/20 rounded-full animate-ping" />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
