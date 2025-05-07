import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import ActivityCard from './ActivityCard';
import { ActivityType } from './types';

interface ActivityTabsProps {
  activities: ActivityType[];
}

const ActivityTabs: React.FC<ActivityTabsProps> = ({ activities }) => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(activities[0]?.id || '');

  // Auto-advance tab every 3 seconds
  useEffect(() => {
    const idx = activities.findIndex(a => a.id === activeTab);
    const nextIdx = (idx + 1) % activities.length;
    const timer = setTimeout(() => {
      setActiveTab(activities[nextIdx].id);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeTab, activities]);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className={`${isMobile ? "max-w-xs" : "max-w-6xl"} mx-auto px-4`}>
      <TabsList className="flex justify-center space-x-8 mb-16 p-2 bg-kids-blue-100/50 rounded-xl relative z-20">
        {activities.map((activity) => (
          <TabsTrigger 
            key={activity.id} 
            value={activity.id} 
            className="data-[state=active]:bg-kids-violet-400 data-[state=active]:text-white rounded-lg py-3 px-6 text-sm font-medium transition-all duration-200 hover:bg-kids-violet-100"
          >
            <span className={isMobile ? "hidden" : "inline"}>{activity.title}</span>
            <span className={isMobile ? "inline-flex items-center" : "hidden"}>
              {activity.icon}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      
      {activities.map((activity) => (
        <TabsContent key={activity.id} value={activity.id} className="space-y-6">
          <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "md:grid-cols-2 gap-12"} items-center`}>
            {!isMobile && (
              <ActivityCard 
                title={activity.title} 
                description={
                  activity.id === 'spelling' ? 'They fix spellings inside the story.' :
                  activity.id === 'synonyms' ? 'They choose answers—and learn why they fit.' :
                  activity.id === 'stories' ? 'Here, kids don’t read. They live.' :
                  activity.id === 'diary' ? 'They write notes. They reflect. They learn—without even realizing they’re learning.' :
                  activity.description
                }
                id={activity.id} 
                isMobile={false}
              />
            )}
            <div className={`animate-float ${isMobile ? "order-first" : ""}`}>
              {activity.image}
            </div>
            {isMobile && (
              <ActivityCard 
                title={activity.title} 
                description={
                  activity.id === 'spelling' ? 'They fix spellings inside the story.' :
                  activity.id === 'synonyms' ? 'They choose answers—and learn why they fit.' :
                  activity.id === 'stories' ? 'Here, kids don’t read. They live.' :
                  activity.id === 'diary' ? 'They write notes. They reflect. They learn—without even realizing they’re learning.' :
                  activity.description
                }
                id={activity.id} 
                isMobile={true}
              />
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ActivityTabs;
