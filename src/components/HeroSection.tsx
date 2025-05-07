
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageIcon } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 px-6 flex flex-col justify-center bg-gradient-to-br from-white via-kids-blue-100 to-kids-violet-100">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text">Read the story.</span><br />
            <span className="text-kids-blue-400">Play the game.</span><br />
            <span className="text-kids-violet-400">Master words.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700">
            An immersive visual novel that teaches spelling, reading, and writing through engaging stories children love.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button className="btn-primary flex items-center space-x-2">
              <span>Start Learning Adventure</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-kids-blue-300 text-kids-blue-500 hover:bg-kids-blue-100">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-600 pt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-8 h-8 rounded-full bg-kids-violet-200 border-2 border-white flex items-center justify-center text-xs font-bold text-kids-violet-500">
                  {item}
                </div>
              ))}
            </div>
            <span>Trusted by over 5,000 parents & educators</span>
          </div>
        </div>
        
        <div className="relative animate-float">
          <PhoneMockup 
            title="Kids Can Read - Story Adventure"
            image="https://images.unsplash.com/photo-1518288774672-b94e808873ff?q=80&w=600&h=400&auto=format&fit=crop"
            imageAlt="Colorful illustration for kids"
            bgGradient="from-kids-blue-100 to-kids-violet-100"
          >
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-kids-violet-500 font-medium mb-2">Princess Aria:</p>
              <p>"Welcome to the Crystal Kingdom! We need your help to find the magic spell book."</p>
              <div className="mt-4 bg-kids-blue-100 p-2 rounded flex">
                <span className="font-bold mr-2">Spell:</span>
                <div className="flex space-x-1">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-kids-blue-400">M</div>
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-kids-blue-400">A</div>
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-kids-blue-400">G</div>
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center font-bold text-kids-blue-400">I</div>
                  <div className="w-6 h-6 bg-white rounded border-2 border-dashed border-kids-blue-400"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button className="bg-kids-green-400 hover:bg-kids-green-500 text-white">Continue</Button>
            </div>
          </PhoneMockup>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-kids-blue-300 rounded-full opacity-20 filter blur-xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-kids-violet-300 rounded-full opacity-20 filter blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
