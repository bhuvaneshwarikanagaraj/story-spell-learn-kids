import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

import SneakPeekSection from '@/components/SneakPeekSection';
import TestimonialSection from '@/components/TestimonialSection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SneakPeekSection />
      <TestimonialSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
