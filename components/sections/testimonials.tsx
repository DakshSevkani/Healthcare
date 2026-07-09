'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Cardiology Patient",
      text: "The care I received at Hospil was exceptional. The booking process via WhatsApp was incredibly seamless, and the cardiologists were deeply thorough with my heart wellness screenings.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "David Miller",
      role: "Family Medicine",
      text: "I highly recommend this clinic. There was zero wait time for my checkup, and the state-of-the-art diagnostic lab returned my results within a few hours. Absolutely top-tier healthcare.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Elena Rostova",
      role: "Neurology Patient",
      text: "The specialists here are world-class. They took the time to map out a personalized treatment plan for my chronic migraines and treated me with absolute care and confidentiality.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 px-6 lg:px-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight">
            Trusted by Thousands of Patients
          </p>
          <p className="text-neutral-500 text-sm md:text-base">
            See what our community has to say about our advanced care and dedicated medical team.
          </p>
        </div>

        {/* Testimonial Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white border border-neutral-200/60 p-8 rounded-3xl shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Corner Quote Accent Decorative Icon */}
              <Quote className="absolute top-6 right-6 text-neutral-100 h-12 w-12 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Five-Star Rating Block */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Review Narrative Content */}
                <p className="text-neutral-600 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Patient User ID Metadata Block */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-neutral-100 relative z-10">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-50"
                />
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">{review.name}</h4>
                  <p className="text-xs text-neutral-500">{review.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}