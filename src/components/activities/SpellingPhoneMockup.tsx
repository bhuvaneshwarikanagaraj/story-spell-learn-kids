
import React from 'react';
import { BookOpen, SpellCheck, BookText } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";

const SpellingPhoneMockup = () => (
  <PhoneMockup
    title="Spell Master"
    bgGradient="from-kids-green-100 to-kids-blue-100"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="bg-kids-green-400 text-white text-[10px] px-2 py-1 rounded-full">Level 3</div>
    </div>
    
    <div className="p-3 bg-white/70 backdrop-blur-sm rounded-lg">
      <p className="font-medium text-xs text-center mb-3">Complete the magic word to open the castle door:</p>
      <div className="flex justify-center space-x-2 mb-4">
        {["E", "N", "C", "H", "_", "_", "T"].map((letter, i) => (
          <div key={i} className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-bold ${letter === "_" ? "border-2 border-dashed border-kids-violet-400" : "bg-white shadow-sm text-kids-violet-500"}`}>
            {letter !== "_" && letter}
          </div>
        ))}
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-2">
      {["A", "B", "N", "M", "E", "D"].map((option, i) => (
        <div key={i} className="bg-white shadow hover:shadow-md p-2 rounded text-center text-sm cursor-pointer hover:bg-kids-violet-100 transition-colors">
          {option}
        </div>
      ))}
    </div>
    
    <div className="flex justify-between items-center mt-6">
      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-kids-violet-100 text-kids-violet-500 flex items-center justify-center text-xs font-bold">3</div>
        <div className="ml-2">
          <p className="text-[10px] text-gray-600">Words Left</p>
          <p className="text-xs font-medium">Progress: 7/10</p>
        </div>
      </div>
      <button className="bg-kids-green-400 text-white text-xs px-3 py-1.5 rounded-md">Check</button>
    </div>
    
    {/* Bottom navigation */}
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-white flex items-center justify-around px-4 border-t border-gray-200">
      <BookOpen className="h-5 w-5 text-gray-400" />
      <div className="flex flex-col items-center">
        <div className="w-6 h-1 rounded-full bg-kids-violet-400 mb-1"></div>
        <SpellCheck className="h-5 w-5 text-kids-violet-400" />
      </div>
      <BookText className="h-5 w-5 text-gray-400" />
    </div>
  </PhoneMockup>
);

export default SpellingPhoneMockup;
