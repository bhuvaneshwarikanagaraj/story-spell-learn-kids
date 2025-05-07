import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TabletMockup } from "@/components/TabletMockup";
import mainImage from './activities/main.jpg';

const HeroSection = () => {
  // Alternate between 'Read' and 'Play'
  const [verb, setVerb] = useState<'Read' | 'Play'>('Read');
  useEffect(() => {
    const interval = setInterval(() => {
      setVerb((prev) => prev === 'Read' ? 'Play' : 'Read');
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to #join section
  const handleStartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll to #sneak-peek section
  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const sneakPeekSection = document.getElementById('sneak-peek');
    if (sneakPeekSection) {
      sneakPeekSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-24 px-6 flex flex-col justify-center bg-gradient-to-br from-kids-violet-800 via-kids-violet-700 to-kids-blue-900">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text transition-all duration-500">
              <span className="inline-block transition-all duration-500" key={verb}>{verb}</span> the story
            </span><br />
            <span className="text-kids-violet-400">Master words.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700">
          An adventure so fun, they forget it's educational.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button className="btn-primary flex items-center space-x-2" onClick={handleStartClick}>
              <span>Start Learning Adventure</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-kids-blue-300 text-kids-blue-500 hover:bg-kids-blue-100" onClick={handleLearnMoreClick}>
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
            <span>Trusted by parents & educators</span>
          </div>
        </div>  
        
        <div className="relative animate-float">
          <TabletMockup 
            image={mainImage}
            imageAlt="Main hero mockup"
          />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-kids-blue-300 rounded-full opacity-20 filter blur-xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-kids-violet-300 rounded-full opacity-20 filter blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
