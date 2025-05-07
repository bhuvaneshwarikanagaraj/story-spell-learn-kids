import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, X, Sparkles } from "lucide-react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Card } from "@/components/ui/card";

const firebaseConfig = {
  apiKey: "AIzaSyDO7cACg6BNA8KiYvMhoxonDxCSKBTgwiE",
  authDomain: "yevvolearn.firebaseapp.com",
  projectId: "yevvolearn",
  storageBucket: "yevvolearn.firebasestorage.app",
  messagingSenderId: "114822749369",
  appId: "1:114822749369:web:599d567dd36e3ce7870f68",
  measurementId: "G-9V2E5C1M9V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const JoinSection = () => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('registered')) {
      setAlreadyRegistered(true);
    }
  }, []);

  // Simple phone validation (10-15 digits, can start with +)
  const isValidPhone = (value: string) => {
    return /^\+?\d{10,15}$/.test(value.replace(/\s+/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    if (!isValidPhone(phone)) {
      setError('Please enter a valid phone number.');
      setLoading(false);
      return;
    }
    try {
      await addDoc(collection(db, 'appregister'), {
        parentName,
        phone,
        childAge,
        createdAt: new Date()
      });
      setSuccess(true);
      setShowModal(true);
      setParentName('');
      setPhone('');
      setChildAge('');
      localStorage.setItem('registered', 'true');
      setAlreadyRegistered(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id="join" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-violet-green opacity-10 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-kids-violet-200">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">We're Launching Soon!</h2>
              <p className="text-gray-700 mb-6">
                Register for early access and updates to our interactive platform for spelling, reading, and writing through stories and games.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-kids-blue-100 to-kids-violet-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-kids-violet-500">Register Now</h3>
              
              {alreadyRegistered ? (
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-kids-blue-100 to-kids-violet-100 p-8 rounded-xl shadow-lg border-2 border-kids-violet-200 animate-fade-in">
                  <svg className="mx-auto text-kids-green-400 mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4" /><circle cx="12" cy="12" r="10" /></svg>
                  <h4 className="text-2xl font-bold text-kids-violet-500 mb-2">You have already registered!</h4>
                  <p className="text-gray-700">Thank you for your interest. We'll be in touch soon.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Input type="text" placeholder="Parent's Name" className="bg-white/80" value={parentName} onChange={e => setParentName(e.target.value)} required />
                  </div>
                  
                  <div>
                    <Input type="tel" placeholder="Phone Number" className="bg-white/80" value={phone} onChange={e => setPhone(e.target.value)} required pattern="^\+?\d{10,15}$" />
                  </div>
                  
                  <div>
                    <Input type="text" placeholder="Child's Age" className="bg-white/80" value={childAge} onChange={e => setChildAge(e.target.value)} required />
                  </div>
                  
                  <Button className="w-full btn-primary flex items-center justify-center space-x-2" type="submit" disabled={loading}>
                    <span>Reach us</span>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  
                  {error && <p className="text-red-600 text-center text-sm">{error}</p>}
                  
                  <p className="text-xs text-center text-gray-600">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center border-2 border-kids-violet-200 relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-kids-violet-400 hover:text-kids-violet-600 rounded-full p-1 transition-colors"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center justify-center space-y-4">
              <svg className="mx-auto text-kids-green-400" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4" /><circle cx="12" cy="12" r="10" /></svg>
              <h4 className="text-2xl font-bold text-kids-violet-500">Thank you for registering!</h4>
              <p className="text-gray-700">We'll be in touch soon.</p>
              <Button className="btn-primary mt-2" onClick={handleCloseModal}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JoinSection;
