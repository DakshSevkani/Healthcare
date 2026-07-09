'use client';

import React, { useEffect, useRef } from 'react';
import { Heart, Brain, Activity, ArrowRight, ShieldCheck, Sparkles, Milestone } from 'lucide-react';

export function FeaturedDepartments() {
  const containerRef = useRef<HTMLDivElement>(null);

  const departments = [
    {
      id: "cardiology",
      icon: <Heart className="text-blue-600" size={24} />,
      title: "Cardiology",
      description: "Advanced cardiac diagnostics, interventional procedures, and preventive heart wellness.",
      points: [
        "24/7 Cardiac Cath Lab",
        "ECG, Echo & TMT",
        "Top interventional cardiologists"
      ],
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "neurology",
      icon: <Brain className="text-blue-600" size={24} />,
      title: "Neurology",
      description: "Comprehensive brain, spine & nerve care — stroke management, epilepsy surgery & rehab.",
      points: [
        "Advanced Neuro-Imaging",
        "Stroke Recovery Unit",
        "Robotic Neuro Rehab"
      ],
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: "orthopedics",
      icon: <Activity className="text-blue-600" size={24} />,
      title: "Orthopedics",
      description: "Joint replacement, sports medicine, trauma surgery & minimally invasive procedures.",
      points: [
        "Knee & Hip Replacement",
        "Sports Injury Clinic",
        "Digital 3D Navigation"
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
    },
    {
      id: "oncology",
      icon: <Sparkles className="text-blue-600" size={24} />,
      title: "Oncology",
      description: "Precision oncology, chemotherapy, immunotherapy and compassionate palliative support.",
      points: [
        "Molecular Profiling",
        "Day Care Chemotherapy",
        "Psycho-oncology Support"
      ],
      image: "https://salvavidaspharma.com/wp-content/uploads/2022/08/What-is-Oncology.webp"
    },
    {
      id: "maternity",
      icon: <Milestone className="text-blue-600" size={24} />,
      title: "Maternity",
      description: "Holistic pregnancy care, high-risk obstetrics, state of the art delivery suites & NICU.",
      points: [
        "24/7 Labor Epidural",
        "Antenatal Classes",
        "Luxury Mother & Baby Suites"
      ],
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.scroll-animate-row');
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-16');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="w-full py-16 md:py-24 px-6 lg:px-16 bg-white overflow-hidden">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        
        {/* Section Main Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            We Care for Patients Across Various <br /> Departments and Services.
          </h2>
        </div>

        <div className="space-y-24">
          {departments.map((dept) => (
            <div 
              key={dept.id}
              className="scroll-animate-row grid grid-cols-1 md:grid-cols-12 gap-0 relative items-center opacity-0 translate-y-16 transition-all duration-700 ease-out"
            > 
              <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl md:col-span-5 z-20 md:mr-[-40px] relative">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    {dept.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">{dept.title}</h3>
                </div>

                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  {dept.description}
                </p>
                <ul className="space-y-3.5">
                  {dept.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-700 font-medium">
                      <ShieldCheck className="text-blue-500 shrink-0" size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            
              <div className="md:col-span-7 h-72 md:h-[380px] w-full rounded-3xl overflow-hidden relative z-10 shadow-lg mt-4 md:mt-0">
                <img 
                  src={dept.image} 
                  alt={dept.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-neutral-950/5" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}