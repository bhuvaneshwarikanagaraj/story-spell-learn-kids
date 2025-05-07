import React from 'react';
import { ImageIcon } from "lucide-react";

interface TabletMockupProps {
  image?: string;
  imageAlt?: string;
}

export const TabletMockup: React.FC<TabletMockupProps> = ({
  image,
  imageAlt = "App screen image",
}) => {
  return (
    <div className="relative mx-auto animate-float w-full max-w-[400px] sm:max-w-[350px] md:max-w-[400px]">
      {/* Vibrant background blobs */}
      <div className="absolute -top-20 -left-24 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-br from-kids-blue-300 via-kids-blue-200 to-kids-violet-200 rounded-full blur-3xl opacity-60 animate-pulse z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-tr from-kids-violet-300 via-kids-violet-200 to-kids-blue-200 rounded-full blur-3xl opacity-60 animate-pulse delay-150 z-0"></div>
      {/* Tablet frame with vibrant gradient and glow */}
      <div className="relative w-full aspect-[5/7] bg-gradient-to-br from-kids-blue-400 via-kids-violet-300 to-kids-blue-200 rounded-[36px] p-2 sm:p-3 shadow-2xl border-4 border-white/80 flex items-center justify-center overflow-visible shadow-[0_8px_40px_0_rgba(100,149,237,0.25)]">
        {/* Glowing border */}
        <div className="absolute inset-0 rounded-[36px] pointer-events-none border-2 border-kids-violet-300/60 shadow-[0_0_60px_0_rgba(138,43,226,0.25)] z-10"></div>
        {/* Camera dot */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-7 h-2 flex items-center justify-center z-20">
          <div className="w-2 h-2 bg-kids-blue-400 rounded-full"></div>
        </div>
        {/* iPad status bar (theme colored) */}
        <div className="absolute top-6 sm:top-10 left-0 w-full flex items-center justify-between px-4 sm:px-8 z-20 text-xs font-display text-kids-violet-500 select-none">
          <span>9:41</span>
          <div className="flex items-center space-x-2">
            {/* WiFi icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-kids-blue-400"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
            {/* Battery icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-kids-violet-400"><rect x="2" y="7" width="18" height="10" rx="2" ry="2"/><line x1="22" y1="11" x2="22" y2="13"/></svg>
          </div>
        </div>
        {/* Tablet screen (app window) with white background */}
        <div className="w-full h-full rounded-[18px] overflow-hidden relative bg-white flex flex-col items-center justify-center shadow-inner pt-8 sm:pt-12 pb-8 sm:pb-10 px-2 sm:px-3 z-10 border-2 border-kids-blue-200">
          {image ? (
            <div className="w-full flex justify-center items-center h-full">
              <div className="aspect-[3/4] w-[95%] bg-white flex items-center justify-center rounded-[20px] shadow-lg overflow-hidden">
                <img 
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-contain rounded-[20px]"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-kids-blue-100 to-kids-violet-100">
              <ImageIcon className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-xs text-gray-500">Image placeholder</p>
            </div>
          )}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-2 rounded-full bg-gradient-to-r from-kids-blue-300 via-kids-violet-300 to-kids-blue-200 opacity-90 z-20 shadow-md"></div>
      </div>
      {/* Reflection effect */}
      <div className="absolute inset-0 rounded-[36px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-60"></div>
      </div>
    </div>
  );
}; 