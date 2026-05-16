import React from 'react';
import { ImageClickFlow } from '../components/shared/ImageClickFlow';

// Import the user's actual images
import img1 from '../assets/mobile flow/1.png';
import img2 from '../assets/mobile flow/2.png';
import img3 from '../assets/mobile flow/3.png';
import img4 from '../assets/mobile flow/4.png';
import img5 from '../assets/mobile flow/5.png';
import img6 from '../assets/mobile flow/6.png';

const TestMobileFlow = () => {
  return (
    <div className="bg-[#05050A] min-h-screen pt-24 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Interactive Flow Simulation</h2>
        <p className="text-gray-400 mt-2 max-w-lg mx-auto">
          Precision-mapped to click exactly on your UI buttons.
        </p>
      </div>

      <ImageClickFlow 
        images={[img1, img2, img3, img4, img5, img6]}
        cursorPath={[
          // Image 1: Angiography
          // Hover up from bottom, then click "Select provider" on AKU Hospital card
          { imageIndex: 0, x: 160, y: 500, click: false, wait: 800 },
          { imageIndex: 0, x: 250, y: 420, click: true, wait: 500 },
          
          // Image 2: Packages
          // Move and click the "Any Doctor" card
          { imageIndex: 1, x: 160, y: 390, click: true, wait: 600 },
          
          // Image 3: Booking Details (Top)
          // Move to the "Audio Note" play button and simulate click
          { imageIndex: 2, x: 160, y: 400, click: false, wait: 600 },
          { imageIndex: 2, x: 70, y: 380, click: true, wait: 1200 },
          
          // Image 4: Booking Details (Bottom)
          // Move down to the "Submit Request" button
          { imageIndex: 3, x: 160, y: 600, click: true, wait: 600 },
          
          // Image 5: Request Submitted (Success)
          // Read success screen, then click "Back to Dashboard"
          { imageIndex: 4, x: 160, y: 400, click: false, wait: 1500 },
          { imageIndex: 4, x: 160, y: 580, click: true, wait: 600 },

          // Image 6: Dashboard
          // Wait at center before looping back
          { imageIndex: 5, x: 160, y: 320, click: false, wait: 3000 }
        ]}
      />
    </div>
  );
};

export default TestMobileFlow;
