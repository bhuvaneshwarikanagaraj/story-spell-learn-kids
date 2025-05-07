
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { BookOpen, SpellCheck, BookText, ImageIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { PhoneMockup } from "@/components/PhoneMockup";

// Create separate components for phone mockups to improve readability
const StoryPhoneMockup = () => (
  <div className="relative mx-auto">
    {/* Phone frame */}
    <div className="w-[280px] h-[560px] bg-gray-800 rounded-[36px] p-3 shadow-xl">
      {/* Phone screen */}
      <div className="w-full h-full bg-gradient-to-br from-kids-blue-100 to-kids-violet-100 rounded-[28px] overflow-hidden relative">
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
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold">Space Adventure: Chapter 3</h3>
            <div className="bg-kids-violet-400 text-white text-[10px] px-2 py-1 rounded-full">Level 6</div>
          </div>
          
          <div className="h-[180px] bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&h=300&auto=format&fit=crop" 
              alt="Space adventure scene" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-kids-violet-500 font-medium text-xs mb-1">Captain Leo:</p>
            <p className="text-gray-700 text-xs">The treasure map shows we need to solve the riddle before we can proceed. Can you help me?</p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <button className="px-4 py-2 bg-kids-blue-300 text-white text-xs rounded-md hover:bg-kids-blue-400 transition">Help find the riddle</button>
            <button className="px-4 py-2 bg-kids-violet-300 text-white text-xs rounded-md hover:bg-kids-violet-400 transition">Look for another way</button>
          </div>
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
      </div>
    </div>
  </div>
);

const SpellingPhoneMockup = () => (
  <div className="relative mx-auto">
    {/* Phone frame */}
    <div className="w-[280px] h-[560px] bg-gray-800 rounded-[36px] p-3 shadow-xl">
      {/* Phone screen */}
      <div className="w-full h-full bg-gradient-to-br from-kids-green-100 to-kids-blue-100 rounded-[28px] overflow-hidden relative">
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
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold">Spell Master</h3>
            <div className="bg-kids-green-400 text-white text-[10px] px-2 py-1 rounded-full">Level 3</div>
          </div>
          
          <div className="h-[100px] bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=400&h=200&auto=format&fit=crop" 
              alt="Magical castle" 
              className="w-full h-full object-cover"
            />
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
      </div>
    </div>
  </div>
);

const DiaryPhoneMockup = () => (
  <div className="relative mx-auto">
    {/* Phone frame */}
    <div className="w-[280px] h-[560px] bg-gray-800 rounded-[36px] p-3 shadow-xl">
      {/* Phone screen */}
      <div className="w-full h-full bg-gradient-to-br from-kids-violet-100 to-kids-green-100 rounded-[28px] overflow-hidden relative">
        {/* Status bar */}
        <div className="h-8 w-full bg-black/10 flex items-center justify-between px-4">
          <span className="text-[10px] text-gray-700 font-medium">9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          </div>
        </div>
        
        {/* App content */}
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold">My Adventure Diary</h3>
            <div className="bg-kids-violet-400 text-white text-[10px] px-2 py-1 rounded-full">Day 5</div>
          </div>
          
          <div className="h-[100px] bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551651653-c5186a1fbba2?q=80&w=400&h=200&auto=format&fit=crop" 
              alt="Treasure map and compass" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <p className="font-medium text-xs">Today's Adventure:</p>
          <div className="bg-white p-3 rounded-md shadow-sm min-h-[120px] border border-gray-200">
            <p className="text-gray-500 italic text-xs mb-2">Write about your adventure with Captain Leo and the treasure hunt...</p>
            <div className="border-b border-gray-200 mb-2"></div>
            <p className="text-xs text-gray-700">Today Captain Leo and I discovered a hidden cave behind the waterfall. Inside we found ancient symbols that might help us find the lost treasure. I think the symbols mean we should...</p>
          </div>
          
          <div className="flex justify-between">
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
      </div>
    </div>
  </div>
);

const SneakPeekSection = () => {
  const isMobile = useIsMobile();
  
  const activities = [
    {
      id: "stories",
      title: "Interactive Stories",
      description: "Immersive narratives where children make choices that shape the story.",
      icon: <BookOpen className="h-5 w-5 mr-2" />,
      image: <StoryPhoneMockup />
    },
    {
      id: "spelling",
      title: "Spelling Activities",
      description: "Fun challenges that improve spelling through contextual learning.",
      icon: <SpellCheck className="h-5 w-5 mr-2" />,
      image: <SpellingPhoneMockup />
    },
    {
      id: "diary",
      title: "Diary Writing",
      description: "Creative writing exercises that reinforce learning through reflection.",
      icon: <BookText className="h-5 w-5 mr-2" />,
      image: <DiaryPhoneMockup />
    }
  ];

  return (
    <section id="sneak-peek" className="section-padding bg-kids-blue-100 px-6 overflow-hidden">
      <div className="container mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Sneak Peek at Activities</h2>
          <p className="text-gray-700 text-lg">Explore the different interactive learning activities that make reading and writing fun.</p>
        </div>
        
        <Tabs defaultValue="stories" className={`${isMobile ? "max-w-xs" : "max-w-3xl"} mx-auto`}>
          <TabsList className="grid grid-cols-3 mb-8">
            {activities.map((activity) => (
              <TabsTrigger key={activity.id} value={activity.id} className="data-[state=active]:bg-kids-violet-400 data-[state=active]:text-white">
                <span className={isMobile ? "hidden" : "inline"}>{activity.title}</span>
                <span className={isMobile ? "inline-flex items-center" : "hidden"}>
                  {activity.icon}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {activities.map((activity) => (
            <TabsContent key={activity.id} value={activity.id} className="space-y-6">
              <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "md:grid-cols-2 gap-8"} items-center`}>
                {!isMobile && (
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-kids-violet-500">{activity.title}</h3>
                    <p className="text-gray-700 mb-6">{activity.description}</p>
                    <Card className="bg-white/80 backdrop-blur p-4 border-l-4 border-kids-violet-400">
                      <p className="italic text-gray-600">
                        "This activity helps children develop {activity.id === "stories" ? "reading comprehension and decision-making skills" : activity.id === "spelling" ? "spelling accuracy and pattern recognition" : "writing skills and creative expression"}."
                      </p>
                      <p className="mt-2 font-medium text-right">— Education Specialist</p>
                    </Card>
                  </div>
                )}
                <div className={`animate-float ${isMobile ? "order-first" : ""}`}>
                  {activity.image}
                </div>
                {isMobile && (
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-kids-violet-500">{activity.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{activity.description}</p>
                    <Card className="bg-white/80 backdrop-blur p-3 border-l-4 border-kids-violet-400">
                      <p className="italic text-gray-600 text-xs">
                        "This activity helps children develop {activity.id === "stories" ? "reading comprehension and decision-making skills" : activity.id === "spelling" ? "spelling accuracy and pattern recognition" : "writing skills and creative expression"}."
                      </p>
                      <p className="mt-1 font-medium text-right text-xs">— Education Specialist</p>
                    </Card>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center pt-8">
          <p className="flex items-center justify-center text-kids-violet-500 font-medium">
            <svg className="mr-2 h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>More activities are added regularly to keep learning fresh and exciting!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SneakPeekSection;
