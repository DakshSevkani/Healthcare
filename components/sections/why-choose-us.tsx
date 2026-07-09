'use client';

import React from 'react';
import { ShieldCheck, Stethoscope, Award, Users } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="text-blue-600" size={28} />,
      title: "Certified Excellence",
      description: "Our clinic is fully accredited with international health standards, ensuring you receive premium treatment protocols."
    },
    {
      icon: <Stethoscope className="text-blue-600" size={28} />,
      title: "Advanced Technology",
      description: "We utilize cutting-edge diagnostic equipment and minimal-access laboratory screening tools for precise results."
    },
    {
      icon: <Users className="text-blue-600" size={28} />,
      title: "Expert Medical Team",
      description: "Our staff consists of board-certified medical specialists and practitioners with decades of combined experience."
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={28} />,
      title: "Patient-First Safety",
      description: "Your health records and physical treatment plans are secured with strict confidentiality and absolute care."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-neutral-100 p-6 rounded-2xl shadow-sm duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-100"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center duration-300 group-hover:bg-blue-600 group-hover:text-white">
                {React.cloneElement(item.icon, {
                  className: "transition-colors duration-300 group-hover:text-white"
                })}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}