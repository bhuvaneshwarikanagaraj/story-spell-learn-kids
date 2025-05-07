import React from 'react';
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kids-violet-500 text-white py-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-display font-bold text-xl">Kids Can Read</span>
            </div>
          </div>
          
          <div className="flex flex-col items-start">
            <h5 className="font-bold mb-4 text-kids-blue-200">Navigation</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-kids-blue-200 transition-colors">Home</a></li>
              <li><a href="#sneak-peek" className="hover:text-kids-blue-200 transition-colors">Sneak Peek</a></li>
              <li><a href="#join" className="hover:text-kids-blue-200 transition-colors">Join Now</a></li>
              <li><a href="#testimonials" className="hover:text-kids-blue-200 transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-start">
            <h5 className="font-bold mb-4 text-kids-blue-200">Resources</h5>
            <ul className="space-y-2">
              <li><a className="hover:text-kids-blue-200 transition-colors cursor-pointer">Help Center</a></li>
              <li><a className="hover:text-kids-blue-200 transition-colors cursor-pointer">Privacy Policy</a></li>
              <li><a className="hover:text-kids-blue-200 transition-colors cursor-pointer">Terms of Service</a></li>
              <li><a href="mailto:bhuvaneshwarii026@gmail.com" className="hover:text-kids-blue-200 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-kids-violet-400 text-center text-sm text-kids-violet-200">
          <p>© 2025 Kids Can Read. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;