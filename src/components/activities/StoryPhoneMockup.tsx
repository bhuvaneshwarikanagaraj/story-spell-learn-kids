
import React from 'react';
import { BookOpen, SpellCheck, BookText } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";

const StoryPhoneMockup = () => (
  <PhoneMockup
    title="Space Adventure: Chapter 3"
    bgGradient="from-kids-blue-100 to-kids-violet-100"
    image="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&h=300&auto=format&fit=crop"
    imageAlt="Space adventure scene"
  >
    <div className="bg-white p-3 rounded-lg shadow-sm">
      <p className="text-kids-violet-500 font-medium text-xs mb-1">Captain Leo:</p>
      <p className="text-gray-700 text-xs">The treasure map shows we need to solve the riddle before we can proceed. Can you help me?</p>
    </div>
    
    <div className="flex flex-col space-y-2">
      <button className="px-4 py-2 bg-kids-blue-300 text-white text-xs rounded-md hover:bg-kids-blue-400 transition">Help find the riddle</button>
      <button className="px-4 py-2 bg-kids-violet-300 text-white text-xs rounded-md hover:bg-kids-violet-400 transition">Look for another way</button>
    </div>
    
    {/* Bottom navigation */}
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-white flex items-center justify-around px-4 border-t border-gray-200">
      <div className="flex flex-col items-center">
        <div className="w-6 h-1 rounded-full bg-kids-violet-400 mb-1"></div>
        <BookOpen className="h-5 w-5 text-kids-violet-400" />
      </div>
      <SpellCheck className="h-5 w-5 text-gray-400" />
      <BookText className="h-5 w-5 text-gray-400" />
    </div>
  </PhoneMockup>
);

export default StoryPhoneMockup;
