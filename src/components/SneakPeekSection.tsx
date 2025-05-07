import React from 'react';
import { BookOpen, SpellCheck, BookText, BookMarked } from "lucide-react";
import StoryPhoneMockup from './activities/StoryPhoneMockup';
import SpellingPhoneMockup from './activities/SpellingPhoneMockup';
import DiaryPhoneMockup from './activities/DiaryPhoneMockup';
import SynonymsPhoneMockup from './activities/SynonymsPhoneMockup';
import ActivityTabs from './activities/ActivityTabs';
import { ActivityType } from './activities/types';

const SneakPeekSection = () => {
  const activities: ActivityType[] = [
    {
      id: "stories",
      title: "Interactive Story",
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
      id: "synonyms",
      title: "Word Match Challenge",
      description: "Expand vocabulary by learning words with similar meanings.",
      icon: <BookMarked className="h-5 w-5 mr-2" />,
      image: <SynonymsPhoneMockup />
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
    <section id="sneak-peek" className="section-padding bg-kids-blue-100 px-6 py-20 overflow-hidden">
      <div className="container mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in">Here, kids don't read. They live.</h2>
          <p className="text-gray-700 text-lg animate-fade-in-up">Here, it's not text-heavy. It's cinematic. They drive the story.</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md mx-auto">
            {/* Decorative background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-kids-violet-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-kids-blue-200 rounded-full blur-3xl opacity-20 animate-pulse delay-150"></div>
            
            {/* Activity tabs with centered phone */}
            <ActivityTabs activities={activities} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SneakPeekSection;
