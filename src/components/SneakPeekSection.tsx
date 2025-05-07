
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Image } from "lucide-react";

const SneakPeekSection = () => {
  const activities = [
    {
      id: "stories",
      title: "Interactive Stories",
      description: "Immersive narratives where children make choices that shape the story.",
      image: (
        <div className="bg-white rounded-lg shadow-lg border-8 border-white">
          <div className="bg-kids-violet-100 p-3 flex items-center space-x-2 rounded-t-md">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs font-medium text-gray-600">Story Reader</span>
          </div>
          <div className="p-4 bg-gradient-to-br from-kids-blue-100 to-kids-violet-100">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-kids-violet-500 font-medium mb-2">Captain Leo:</p>
                <p className="text-gray-700">"The treasure map says we need to solve the riddle before we can proceed. Can you help me?"</p>
              </div>
              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-kids-blue-300 text-white rounded-md hover:bg-kids-blue-400">Help find the riddle</button>
                <button className="px-4 py-2 bg-kids-violet-300 text-white rounded-md hover:bg-kids-violet-400">Look for another way</button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "spelling",
      title: "Spelling Activities",
      description: "Fun challenges that improve spelling through contextual learning.",
      image: (
        <div className="bg-white rounded-lg shadow-lg border-8 border-white">
          <div className="bg-kids-violet-100 p-3 flex items-center space-x-2 rounded-t-md">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs font-medium text-gray-600">Spell Master</span>
          </div>
          <div className="p-4 bg-gradient-to-br from-kids-green-100 to-kids-blue-100">
            <div className="space-y-4">
              <p className="font-medium text-center">Complete the magic word to open the castle door:</p>
              <div className="flex justify-center space-x-2">
                {["E", "N", "C", "H", "_", "_", "T"].map((letter, i) => (
                  <div key={i} className={`w-10 h-10 flex items-center justify-center rounded-md text-lg font-bold ${letter === "_" ? "border-2 border-dashed border-kids-violet-400" : "bg-white shadow-sm text-kids-violet-500"}`}>
                    {letter !== "_" && letter}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["A", "B", "N", "M", "E", "D"].map((option, i) => (
                  <div key={i} className="bg-white shadow hover:shadow-md p-2 rounded text-center cursor-pointer hover:bg-kids-violet-100 transition-colors">
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "diary",
      title: "Diary Writing",
      description: "Creative writing exercises that reinforce learning through reflection.",
      image: (
        <div className="bg-white rounded-lg shadow-lg border-8 border-white">
          <div className="bg-kids-violet-100 p-3 flex items-center space-x-2 rounded-t-md">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs font-medium text-gray-600">My Adventure Diary</span>
          </div>
          <div className="p-4 bg-gradient-to-br from-kids-violet-100 to-kids-green-100">
            <div className="space-y-3">
              <p className="font-medium">Today's Adventure:</p>
              <div className="bg-white p-3 rounded-md shadow-sm min-h-[100px] border border-gray-200">
                <p className="text-gray-500 italic">Write about your adventure with Captain Leo and the treasure hunt...</p>
              </div>
              <div className="flex justify-between">
                <button className="px-4 py-2 bg-kids-blue-300 text-white rounded-md hover:bg-kids-blue-400">Add Drawing</button>
                <button className="px-4 py-2 bg-kids-green-400 text-white rounded-md hover:bg-kids-green-500">Save Entry</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="sneak-peek" className="section-padding bg-kids-blue-100 px-6">
      <div className="container mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Sneak Peek at Activities</h2>
          <p className="text-gray-700 text-lg">Explore the different interactive learning activities that make reading and writing fun.</p>
        </div>
        
        <Tabs defaultValue="stories" className="max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            {activities.map((activity) => (
              <TabsTrigger key={activity.id} value={activity.id} className="data-[state=active]:bg-kids-violet-400 data-[state=active]:text-white">
                {activity.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {activities.map((activity) => (
            <TabsContent key={activity.id} value={activity.id} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
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
                <div className="animate-float">
                  {activity.image}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center pt-8">
          <p className="flex items-center justify-center text-kids-violet-500 font-medium">
            <Image className="mr-2 h-5 w-5" />
            <span>More activities are added regularly to keep learning fresh and exciting!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SneakPeekSection;
