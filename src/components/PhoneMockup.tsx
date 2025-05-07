import React from 'react';
import { ImageIcon } from "lucide-react";

interface PhoneMockupProps {
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  image,
  imageAlt = "App screen image",
}) => {
  return (
    <div className="relative mx-auto transform hover:scale-105 transition-transform duration-300">
      {/* Phone frame */}
      <div className="w-[240px] h-[480px] bg-[#1C1C1E] rounded-[36px] p-2 shadow-2xl relative">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-b-[16px] z-20">
          <div className="absolute top-[8px] left-[50%] transform -translate-x-1/2 flex space-x-2">
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Side buttons */}
        <div className="absolute -left-1 top-[90px] w-[3px] h-[60px] bg-[#2A2A2C] rounded-l-lg"></div>
        <div className="absolute -right-1 top-[80px] w-[3px] h-[70px] bg-[#2A2A2C] rounded-r-lg"></div>
        <div className="absolute -right-1 top-[170px] w-[3px] h-[30px] bg-[#2A2A2C] rounded-r-lg"></div>
        
        {/* Phone screen */}
        <div className="w-full h-full rounded-[32px] overflow-hidden relative bg-gradient-to-br from-kids-blue-100 to-kids-violet-100">
          {image ? (
            <img 
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-[32px]"
              style={{ display: 'block' }}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-kids-blue-100 to-kids-violet-100">
              <ImageIcon className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-xs text-gray-500">Image placeholder</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Reflection effect */}
      <div className="absolute inset-0 rounded-[36px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};
