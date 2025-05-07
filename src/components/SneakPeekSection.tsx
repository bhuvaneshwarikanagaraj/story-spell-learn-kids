
import React from 'react';
import { BookOpen, SpellCheck, BookText } from "lucide-react";
import StoryPhoneMockup from './activities/StoryPhoneMockup';
import SpellingPhoneMockup from './activities/SpellingPhoneMockup';
import DiaryPhoneMockup from './activities/DiaryPhoneMockup';
import ActivityTabs from './activities/ActivityTabs';
import { ActivityType } from './activities/types';

const SneakPeekSection = () => {
  const activities: ActivityType[] = [
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
        
        <ActivityTabs activities={activities} />
        
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
