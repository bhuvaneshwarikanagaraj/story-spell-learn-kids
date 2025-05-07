
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, BookText, Play, Star } from "lucide-react";

const BenefitsSection = () => {
  const kidBenefits = [
    {
      icon: <Play className="h-8 w-8 text-kids-blue-400" />,
      title: "Interactive Storytelling",
      description: "Engage with exciting stories where progress depends on reading comprehension and active participation."
    },
    {
      icon: <BookText className="h-8 w-8 text-kids-violet-400" />,
      title: "Contextual Learning",
      description: "Learn new vocabulary and spelling in the context of fun adventures, making retention easier and more natural."
    },
    {
      icon: <Star className="h-8 w-8 text-kids-green-400" />,
      title: "Creative Expression",
      description: "Write diary entries after each story segment to reinforce learning and develop writing skills."
    }
  ];
  
  const parentBenefits = [
    {
      icon: <Award className="h-8 w-8 text-kids-blue-400" />,
      title: "Measurable Progress",
      description: "Track your child's reading and writing development through saved diary entries and completion records."
    },
    {
      icon: <Star className="h-8 w-8 text-kids-violet-400" />,
      title: "Educational Standards",
      description: "Content aligned with educational standards for grades 5-10, supporting classroom learning."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-kids-green-400" />,
      title: "Independent Learning",
      description: "Self-paced learning that builds confidence and reduces the need for constant supervision."
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-white px-6">
      <div className="container mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Benefits for Everyone</h2>
          <p className="text-gray-700 text-lg">Our interactive stories do more than entertain—they provide tangible educational benefits for both children and parents.</p>
        </div>
        
        <div className="space-y-12 md:space-y-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-kids-violet-400">For Kids</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {kidBenefits.map((benefit, index) => (
                <Card key={index} className="card-hover border-2 border-kids-blue-100">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-kids-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-kids-blue-500">{benefit.title}</h4>
                    <p className="text-gray-700">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-kids-blue-400">For Parents & Educators</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {parentBenefits.map((benefit, index) => (
                <Card key={index} className="card-hover border-2 border-kids-violet-100">
                  <CardContent className="pt-6">
                    <div className="mb-4 bg-kids-violet-100 w-16 h-16 rounded-full flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-kids-violet-500">{benefit.title}</h4>
                    <p className="text-gray-700">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
