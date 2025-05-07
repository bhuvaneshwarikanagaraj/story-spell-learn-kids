
import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md py-4 px-6 md:px-10 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-kids-violet-400" />
          <span className="font-display font-bold text-2xl text-kids-violet-500">Kids Can <span className="text-kids-blue-400">Read</span></span>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#benefits" className="font-medium hover:text-kids-violet-400 transition-colors">Benefits</a>
          <a href="#sneak-peek" className="font-medium hover:text-kids-violet-400 transition-colors">Sneak Peek</a>
          <a href="#join" className="font-medium hover:text-kids-violet-400 transition-colors">Join</a>
          <Button className="btn-primary">Get Started</Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
