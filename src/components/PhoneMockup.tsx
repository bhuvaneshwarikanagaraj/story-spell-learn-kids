
import React from 'react';
import { ImageIcon } from "lucide-react";

interface PhoneMockupProps {
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  bgGradient?: string;
  showEmptyImagePlaceholder?: boolean;
  title?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  children,
  image,
  imageAlt = "App screen image",
  bgGradient = "from-kids-blue-100 to-kids-violet-100",
  showEmptyImagePlaceholder = false,
  title = "Kids Can Read App"
}) => {
  return (
    <div className="relative mx-auto">
      {/* Phone frame */}
      <div className="w-[280px] h-[560px] bg-gray-800 rounded-[36px] p-3 shadow-xl">
        {/* Phone screen */}
        <div className={`w-full h-full bg-gradient-to-br ${bgGradient} rounded-[28px] overflow-hidden relative`}>
          {/* Status bar */}
          <div className="h-8 w-full bg-black/10 flex items-center justify-between px-4">
            <span className="text-[10px] text-gray-700 font-medium">9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            </div>
          </div>
          
          {/* App content */}
          <div className="p-4 space-y-4">
            {title && (
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold">{title}</h3>
              </div>
            )}
            
            {/* Image section */}
            {(image || showEmptyImagePlaceholder) && (
              <div className="h-[180px] bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {image ? (
                  <img 
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
                    <ImageIcon className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-xs text-gray-500">Image placeholder</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Custom content */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
