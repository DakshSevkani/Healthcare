'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Activity } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center px-6 lg:px-16 overflow-hidden bg-neutral-900">
      
      <div className="absolute ">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Healthcare Clinic Background"
          className="w-full h-full object-cover opacity-35"
        />
      </div>
      <div className="max-w-7xl w-full mx-auto items-center z-10 ">
        <div className="flex flex-col space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full w-fit backdrop-blur-sm">
            <Activity size={14} />
            <span>Top-Rated Medical Studio</span>
          </div>
          
          <h1 className="text-8xl font-bold text-white tracking-tight">
            Your Health, <br />
            <span className="text-blue-400">Our Total Priority.</span>
          </h1>
          
          <p className="text-neutral-300 text-base md:text-lg max-w-xl">
            Experience world-class, personalized medical care without the long wait times. Our board-certified specialists utilize state-of-the-art diagnostics to put your wellness first.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200"
            >
              <Calendar size={16} />
              <span>Book Appointment Now</span>
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto text-center border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm px-6 py-3.5 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Explore Specialties
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}