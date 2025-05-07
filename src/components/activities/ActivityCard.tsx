
import React from 'react';
import { Card } from "@/components/ui/card";

interface ActivityCardProps {
  title: string;
  description: string;
  id: string;
  isMobile: boolean;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, description, id, isMobile }) => {
  const getSkillText = (activityId: string) => {
    switch(activityId) {
      case "stories":
        return "reading comprehension and decision-making skills";
      case "spelling":
        return "spelling accuracy and pattern recognition";
      default:
        return "writing skills and creative expression";
    }
  };

  if (isMobile) {
    return (
      <div>
        <h3 className="text-xl font-bold mb-2 text-kids-violet-500">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <Card className="bg-white/80 backdrop-blur p-3 border-l-4 border-kids-violet-400">
          <p className="italic text-gray-600 text-xs">
            "This activity helps children develop {getSkillText(id)}."
          </p>
          <p className="mt-1 font-medium text-right text-xs">— Education Specialist</p>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-3 text-kids-violet-500">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <Card className="bg-white/80 backdrop-blur p-4 border-l-4 border-kids-violet-400">
        <p className="italic text-gray-600">
          "This activity helps children develop {getSkillText(id)}."
        </p>
        <p className="mt-2 font-medium text-right">— Education Specialist</p>
      </Card>
    </div>
  );
};

export default ActivityCard;
