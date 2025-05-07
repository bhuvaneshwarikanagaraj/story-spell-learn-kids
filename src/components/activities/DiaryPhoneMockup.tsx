
import React from 'react';
import { BookOpen, SpellCheck, BookText } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";

const DiaryPhoneMockup = () => (
  <PhoneMockup
    title="My Adventure Diary"
    bgGradient="from-kids-violet-100 to-kids-green-100"
  >
    <div className="flex items-center justify-between mb-2">
      <div className="bg-kids-violet-400 text-white text-[10px] px-2 py-1 rounded-full">Day 5</div>
    </div>
    
    <p className="font-medium text-xs">Today's Adventure:</p>
    <div className="bg-white p-3 rounded-md shadow-sm min-h-[180px] border border-gray-200 mt-2">
      <p className="text-gray-500 italic text-xs mb-2">Write about your adventure with Captain Leo and the treasure hunt...</p>
      <div className="border-b border-gray-200 mb-2"></div>
      <p className="text-xs text-gray-700">Today Captain Leo and I discovered a hidden cave behind the waterfall. Inside we found ancient symbols that might help us find the lost treasure. I think the symbols mean we should...</p>
    </div>
    
    <div className="flex justify-between mt-3">
      <button className="px-3 py-1.5 bg-kids-blue-300 text-white rounded-md hover:bg-kids-blue-400 text-xs">Add Drawing</button>
      <div className="flex space-x-1">
        <button className="p-1.5 bg-white rounded-md shadow-sm">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
          </svg>
        </button>
        <button className="px-3 py-1.5 bg-kids-green-400 text-white rounded-md hover:bg-kids-green-500 text-xs">Save</button>
      </div>
    </div>
    
    <div className="pt-2">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-600">Word Count: 38</p>
        <p className="text-[10px] text-kids-violet-500">New words learned: 3</p>
      </div>
    </div>
    
    {/* Bottom navigation */}
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-white flex items-center justify-around px-4 border-t border-gray-200">
      <BookOpen className="h-5 w-5 text-gray-400" />
      <SpellCheck className="h-5 w-5 text-gray-400" />
      <div className="flex flex-col items-center">
        <div className="w-6 h-1 rounded-full bg-kids-violet-400 mb-1"></div>
        <BookText className="h-5 w-5 text-kids-violet-400" />
      </div>
    </div>
  </PhoneMockup>
);

export default DiaryPhoneMockup;
