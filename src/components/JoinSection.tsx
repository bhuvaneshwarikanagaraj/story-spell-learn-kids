
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const JoinSection = () => {
  return (
    <section id="join" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-violet-green opacity-10 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-kids-violet-200">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Start Your Child's Learning Adventure</h2>
              <p className="text-gray-700 mb-6">
                Join thousands of families already using Kids Can Read to make learning fun and effective.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="rounded-full bg-kids-green-200 p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-kids-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>7-day free trial</span>
                </div>
                
                <div className="flex items-center">
                  <div className="rounded-full bg-kids-green-200 p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-kids-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Cancel anytime</span>
                </div>
                
                <div className="flex items-center">
                  <div className="rounded-full bg-kids-green-200 p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-kids-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Access to all stories and activities</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-kids-blue-100 to-kids-violet-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-kids-violet-500">Get Early Access</h3>
              
              <form className="space-y-4">
                <div>
                  <Input type="text" placeholder="Parent's Name" className="bg-white/80" />
                </div>
                
                <div>
                  <Input type="email" placeholder="Email Address" className="bg-white/80" />
                </div>
                
                <div>
                  <Input type="text" placeholder="Child's Age" className="bg-white/80" />
                </div>
                
                <Button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <span>Begin Free Trial</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
                
                <p className="text-xs text-center text-gray-600">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
