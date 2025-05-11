import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const phoneMql = window.matchMedia('(max-width: 480px)');
    const onChange = () => setIsPhone(phoneMql.matches);
    phoneMql.addEventListener('change', onChange);
    setIsPhone(phoneMql.matches);
    return () => phoneMql.removeEventListener('change', onChange);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav className="bg-white/80 backdrop-blur-md py-4 px-6 md:px-10 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-kids-violet-400" />
          <span className="font-display font-bold text-2xl text-kids-violet-500">word<span className="text-kids-blue-400">360</span></span>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#join" className="font-medium hover:text-kids-violet-400 transition-colors">Join</a>
          <a href="#sneak-peek" className="font-medium hover:text-kids-violet-400 transition-colors">Sneak Peek</a>
          <a href="#testimonials" className="font-medium hover:text-kids-violet-400 transition-colors">Testimonials</a>
          <Button className="btn-primary">Get Started</Button>
        </div>
        
        <div className="md:hidden">
          {isMobile && !isPhone && (
            <Button variant="ghost" size="sm" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          )}
        </div>
      </div>
      {/* Full-screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-kids-blue-100 via-white to-kids-violet-100 backdrop-blur-xl animate-fade-in border border-kids-violet-200 rounded-2xl m-2 shadow-lg">
          <button
            className="absolute top-6 right-6 text-kids-violet-400 hover:text-kids-violet-600 rounded-full p-2 transition-colors bg-white/70 shadow"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
          <nav className="flex flex-col items-center space-y-6 mt-10">
            <a href="#join" className="font-semibold text-lg text-kids-violet-500 hover:text-kids-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Join</a>
            <a href="#sneak-peek" className="font-semibold text-lg text-kids-violet-500 hover:text-kids-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Sneak Peek</a>
            <a href="#testimonials" className="font-semibold text-lg text-kids-violet-500 hover:text-kids-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#join" className="w-full flex justify-center mt-2" onClick={() => setMenuOpen(false)}>
              <Button className="btn-primary w-40 text-base py-2">Get Started</Button>
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
