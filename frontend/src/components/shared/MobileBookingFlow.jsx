import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Search, 
  Star, 
  CheckCircle2, 
  Building2, 
  Mic, 
  Calendar, 
  ChevronDown, 
  Check, 
  Clock, 
  ShieldCheck, 
  Paperclip,
  X,
  MousePointer2
} from "lucide-react";

const Screen1 = () => (
  <div className="w-full h-full bg-[#F8F9FB] flex flex-col font-sans">
    <div className="bg-white px-4 py-4 flex items-center gap-3">
      <ArrowLeft className="w-5 h-5 text-gray-800" />
      <h1 className="text-[17px] font-bold text-gray-900">Angiography</h1>
    </div>
    
    <div className="p-4 flex-1 overflow-y-auto pb-20">
      <div className="inline-block px-3 py-1 bg-gray-200 rounded-md text-xs font-medium text-gray-700 mb-3">
        Cardiology
      </div>
      <p className="text-gray-600 text-[13px] leading-relaxed mb-6">
        A procedure using X-ray imaging and a special dye to see the heart's blood vessels. It usually requires a few hours of observation post-procedure before discharge.
      </p>

      <h2 className="text-[15px] font-bold text-gray-900 mb-3">Available at</h2>

      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm mb-3">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-gray-900 text-[15px]">AKU Hospital</h3>
              <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Panel
              </span>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-gray-500">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium text-gray-700">4.9</span>
              <span>(120 reviews)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-gray-900 text-[14px]">PKR 60,000 - 85,000</div>
            <div className="text-green-600 text-[10px] font-bold flex items-center justify-end gap-1 mt-0.5">
              <CheckCircle2 className="w-3 h-3" /> Discounts apply
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1.5 text-gray-500 text-[12px]">
            <Building2 className="w-4 h-4" />
            <span>available at 3 branches</span>
          </div>
          <button className="bg-[#0048FF] text-white px-4 py-2 rounded-lg text-[13px] font-medium" id="btn-select-aku">
            Select provider
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-gray-900 text-[15px]">South City Hospital</h3>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-gray-500">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium text-gray-700">4.9</span>
              <span>(120 reviews)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-gray-900 text-[14px]">PKR 40,000 - 75,000</div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-gray-500 text-[12px]">Stadium road, Karachi</div>
          <button className="bg-[#0048FF] text-white px-4 py-2 rounded-lg text-[13px] font-medium">
            Select provider
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Screen2 = () => (
  <div className="w-full h-full bg-[#F8F9FB] flex flex-col font-sans">
    <div className="bg-white px-4 py-4 flex items-center gap-3 border-b border-gray-100">
      <ArrowLeft className="w-5 h-5 text-gray-800" />
      <h1 className="text-[17px] font-bold text-gray-900">Available Packages</h1>
    </div>
    
    <div className="bg-white px-4 py-3">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search by doctor or branch" 
          className="w-full bg-gray-100 rounded-xl py-2.5 pl-9 pr-4 text-[13px] outline-none"
        />
      </div>
      <div className="flex gap-2 mt-3">
        <button className="border border-gray-200 rounded-lg px-3 py-1.5 text-[12px] font-medium flex items-center gap-1">
          Doctor <ChevronDown className="w-3 h-3" />
        </button>
        <button className="border border-gray-200 rounded-lg px-3 py-1.5 text-[12px] font-medium flex items-center gap-1">
          Branch <ChevronDown className="w-3 h-3" />
        </button>
      </div>
    </div>

    <div className="p-4 flex-1 overflow-y-auto space-y-3 pb-20">
      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex justify-between items-center">
        <div>
          <div className="font-medium text-gray-900 text-[14px]">Dr. Amir Ahmed</div>
          <div className="text-gray-500 text-[12px]">Karimabad branch</div>
        </div>
        <div className="text-right">
          <div className="text-[#0048FF] font-medium text-[14px]">PKR 85,000</div>
          <div className="text-gray-400 text-[10px]">Est. price</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex justify-between items-center cursor-pointer" id="btn-any-doctor">
        <div>
          <div className="font-medium text-gray-900 text-[14px] flex items-center gap-1.5">
            Any Doctor <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
          </div>
          <div className="text-gray-500 text-[12px]">Karimabad branch</div>
        </div>
        <div className="text-right">
          <div className="text-[#0048FF] font-medium text-[14px]">PKR 60,000</div>
          <div className="text-gray-400 text-[10px]">Est. price</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex justify-between items-center">
        <div>
          <div className="font-medium text-gray-900 text-[14px] flex items-center gap-1.5">
            Dr. Majid Khan <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
          </div>
          <div className="text-gray-500 text-[12px]">Stadium road branch</div>
        </div>
        <div className="text-right">
          <div className="text-[#0048FF] font-medium text-[14px]">PKR 65,000</div>
          <div className="text-gray-400 text-[10px]">Est. price</div>
        </div>
      </div>
    </div>
  </div>
);

const Screen3 = () => (
  <div className="w-full h-full bg-[#F8F9FB] flex flex-col font-sans relative">
    <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-gray-100">
      <ArrowLeft className="w-5 h-5 text-gray-800" />
      <div>
        <h1 className="text-[16px] font-bold text-gray-900 leading-tight">Booking Details</h1>
        <p className="text-[#0048FF] text-[10px] font-bold uppercase tracking-wide">Angiography @ AKU Hospital</p>
      </div>
    </div>
    
    <div className="p-4 flex-1 overflow-y-auto pb-32">
      <label className="block text-[13px] font-bold text-gray-700 mb-2">Who is this surgery for?</label>
      <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 mb-5 flex justify-between items-center">
        <span className="text-[14px] text-gray-900">Ali Khan (Self)</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>

      <label className="block text-[13px] font-bold text-gray-700 mb-2">Preferred date / range</label>
      <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 mb-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#0048FF]" />
          <span className="text-[14px] text-gray-900">03/11/2026 - 23/11/2026</span>
        </div>
        <div className="flex flex-col gap-0.5">
           <ChevronDown className="w-3 h-3 text-gray-400 rotate-180" />
           <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <label className="flex items-center gap-1.5 text-[12px] font-bold text-gray-600 uppercase tracking-wide">
          <Paperclip className="w-3.5 h-3.5" /> Attachments (Optional)
        </label>
        <span className="text-[#0048FF] text-[13px] font-medium">Add</span>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0048FF]/10 flex items-center justify-center">
              <Mic className="w-5 h-5 text-[#0048FF]" />
            </div>
            <div>
              <div className="font-bold text-[14px] text-gray-900">Audio note</div>
              <div className="text-[11px] text-gray-500">Recorded on Oct 24</div>
            </div>
          </div>
          <X className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="relative h-1.5 bg-gray-200 rounded-full mb-2">
          <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-[#0048FF] rounded-full"></div>
          <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-[2px] border-[#0048FF] rounded-full shadow-sm"></div>
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 font-medium">
          <span>1:46</span>
          <span>3:32</span>
        </div>
      </div>
    </div>

    {/* Bottom Sticky Bar */}
    <div className="absolute bottom-0 left-0 right-0 bg-[#F8F9FB] p-4 border-t border-gray-200">
      <div className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center mb-3">
        <div>
          <div className="font-medium text-gray-900 text-[14px] flex items-center gap-1.5">
            Any Doctor <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
          </div>
          <div className="text-gray-500 text-[12px]">Karimabad branch</div>
        </div>
        <div className="text-right">
          <div className="text-[#0048FF] font-medium text-[15px]">PKR 60,000</div>
          <div className="text-red-500 text-[9px] line-through">PKR 65,000</div>
          <div className="text-gray-400 text-[9px]">Est. price</div>
        </div>
      </div>
      <button className="w-full bg-[#0048FF] text-white py-3.5 rounded-xl font-bold text-[15px]" id="btn-submit">
        Submit Request
      </button>
    </div>
  </div>
);

const Screen4 = () => (
  <div className="w-full h-full bg-white flex flex-col font-sans p-6">
    <div className="flex-1 flex flex-col items-center justify-center text-center mt-10">
      <div className="w-24 h-24 bg-[#007A53] rounded-full flex items-center justify-center mb-6">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Check className="w-6 h-6 text-[#007A53] stroke-[3]" />
        </div>
      </div>
      
      <h1 className="text-2xl font-black text-gray-900 mb-3">Request Submitted!</h1>
      <p className="text-[14px] text-gray-600 leading-relaxed mb-8">
        Your surgery booking request (# PR-123242) for <span className="font-bold text-gray-900">Angiography</span> at <span className="font-bold text-gray-900">Aga Khan University Hospital</span> has been sent.
      </p>

      <div className="w-full bg-[#F5F5F7] rounded-2xl p-4 text-left space-y-4">
        <div className="flex gap-3">
          <Clock className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
          <p className="text-[13px] text-gray-600">The hospital admissions desk is reviewing your details.</p>
        </div>
        <div className="h-px w-full bg-gray-200"></div>
        <div className="flex gap-3">
          <ShieldCheck className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
          <p className="text-[13px] text-gray-600">Insurance pre-authorization (GoP) will be initiated after hospital review.</p>
        </div>
      </div>
    </div>

    <button className="w-full border border-gray-300 text-gray-900 py-3.5 rounded-xl font-bold text-[14px] mb-4">
      Back to Dashboard
    </button>
  </div>
);

// Coordinates for cursor animation relative to a 320x640 frame
const cursorPath = [
  { step: 0, screen: 0, x: 160, y: 500, click: false, wait: 1000 }, // Start neutral
  { step: 1, screen: 0, x: 250, y: 310, click: true, wait: 500 }, // Move to AKU Select Button and click
  { step: 2, screen: 1, x: 160, y: 400, click: false, wait: 600 }, // Switch screen, move center
  { step: 3, screen: 1, x: 160, y: 280, click: true, wait: 500 }, // Click Any Doctor
  { step: 4, screen: 2, x: 160, y: 400, click: false, wait: 800 }, // Switch screen, center
  { step: 5, screen: 2, x: 160, y: 580, click: true, wait: 500 }, // Click Submit Request
  { step: 6, screen: 3, x: 160, y: 400, click: false, wait: 3000 }, // Success, wait
];

export function MobileBookingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [clickScale, setClickScale] = useState(1);

  useEffect(() => {
    let isSubscribed = true;
    
    const runSequence = async () => {
      while (isSubscribed) {
        for (let i = 0; i < cursorPath.length; i++) {
          if (!isSubscribed) break;
          setCurrentStep(i);
          
          if (cursorPath[i].click) {
            // Wait for movement to finish
            await new Promise(r => setTimeout(r, 600));
            // Simulate click down
            setClickScale(0.8);
            await new Promise(r => setTimeout(r, 150));
            // Simulate click up
            setClickScale(1);
            await new Promise(r => setTimeout(r, cursorPath[i].wait));
          } else {
            await new Promise(r => setTimeout(r, cursorPath[i].wait));
          }
        }
        // Reset after success
        setCurrentStep(0);
      }
    };

    runSequence();

    return () => {
      isSubscribed = false;
    };
  }, []);

  const path = cursorPath[currentStep];
  const screenIndex = path.screen;

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Seamless App Integration</h2>
        <p className="text-gray-500 mt-2">Watch the automated booking flow</p>
      </div>

      <div className="relative w-full max-w-[320px] aspect-[1/2] bg-black rounded-[40px] p-2 shadow-2xl border-4 border-gray-800">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-50"></div>
        
        {/* Screen Container */}
        <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
          <AnimatePresence mode="wait">
            {screenIndex === 0 && (
              <motion.div 
                key="screen0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Screen1 />
              </motion.div>
            )}
            {screenIndex === 1 && (
              <motion.div 
                key="screen1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Screen2 />
              </motion.div>
            )}
            {screenIndex === 2 && (
              <motion.div 
                key="screen2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Screen3 />
              </motion.div>
            )}
            {screenIndex === 3 && (
              <motion.div 
                key="screen3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Screen4 />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fake Animated Cursor */}
          <motion.div
            className="absolute z-50 pointer-events-none"
            animate={{ 
              x: path.x, 
              y: path.y,
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
    </div>
  );
}
