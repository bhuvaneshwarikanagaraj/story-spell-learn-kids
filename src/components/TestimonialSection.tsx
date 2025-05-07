import React from 'react';
import { Card } from '@/components/ui/card';
import { User, Smile, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Government School Principal, Coimbatore',
    avatar: <User className="h-8 w-8 text-kids-green-500" />,
    quote: 'Many of our students face difficulties with listening, reading, and spelling. These basic skills are so important, but often lacking in rural and government school environments. A platform like this can really help children learn better by making education more engaging and accessible.',
    bg: 'bg-gradient-to-br from-kids-green-100 to-kids-blue-100'
  },
  {
    name: 'Arunika (Student)',
    avatar: <Smile className="h-8 w-8 text-kids-violet-500" />,
    quote: "I used to get spellings wrong a lot, but now I like fixing them because it's part of the story!",
    bg: 'bg-gradient-to-br from-kids-violet-100 to-kids-green-100'
  }
];

const TestimonialSection = () => (
  <section id="testimonials" className="section-padding bg-gradient-to-br from-kids-blue-50 to-kids-violet-50 px-6">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">What Parents & Kids Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, idx) => (
          <Card key={idx} className={`p-8 rounded-xl shadow-xl border-2 border-kids-violet-100 flex flex-col items-center text-center gap-4 card-hover ${t.bg}`}>
            <div>{t.avatar}</div>
            <div className="font-bold text-lg text-kids-violet-700 drop-shadow-sm">{t.name}</div>
            <div className="italic text-gray-700 text-base text-justify">“{t.quote}”</div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection; 