
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import ActivityCard from './ActivityCard';
import { ActivityType } from './types';

interface ActivityTabsProps {
  activities: ActivityType[];
}

const ActivityTabs: React.FC<ActivityTabsProps> = ({ activities }) => {
  const isMobile = useIsMobile();
  
  return (
    <Tabs defaultValue="stories" className={`${isMobile ? "max-w-xs" : "max-w-3xl"} mx-auto`}>
      <TabsList className="grid grid-cols-3 mb-8">
        {activities.map((activity) => (
          <TabsTrigger 
            key={activity.id} 
            value={activity.id} 
            className="data-[state=active]:bg-kids-violet-400 data-[state=active]:text-white"
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
          <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "md:grid-cols-2 gap-8"} items-center`}>
            {!isMobile && (
              <ActivityCard 
                title={activity.title} 
                description={activity.description} 
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
                description={activity.description} 
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
