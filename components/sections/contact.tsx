'use client';

import React, { useState } from 'react';
import { Clock, Video, ShieldCheck } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Medicine',
    doctor: 'Any Available Specialist',
    date: '',
    time: 'Morning Slot',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Compile data into a clean WhatsApp template message format
    const message = `Hi Hospil Clinic Team, I'd like to book an appointment:\n\n` +
                    `• *Name:* ${formData.name}\n` +
                    `• *Phone:* ${formData.phone}\n` +
                    `• *Email:* ${formData.email}\n` +
                    `• *Department:* ${formData.service}\n` +
                    `• *Doctor:* ${formData.doctor}\n` +
                    `• *Date:* ${formData.date}\n` +
                    `• *Preferred Time:* ${formData.time}\n` +
                    `• *Symptom Notes:* ${formData.notes || 'None'}`;
    
    // Encode text and redirect to the deep link API
    const whatsappUrl = `https://wa.me/9028213434?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: Selling Points & Image Frame */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
            Secure Your Healing Journey in Seconds
          </h2>
          
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
              <Clock className="text-blue-600 shrink-0" size={20} />
              <span>Same-day appointments available</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
              <Video className="text-blue-600 shrink-0" size={20} />
              <span>Video consult or in-clinic visit</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
              <ShieldCheck className="text-blue-600 shrink-0" size={20} />
              <span>Insurance & cashless options</span>
            </div>
          </div>

          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-neutral-100 mt-6">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
              alt="Medical Team Hospital Care"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Form Layout */}
        <div className="lg:col-span-7 bg-neutral-50 border border-neutral-100 p-6 md:p-8 rounded-3xl shadow-sm">
          <h3 className="text-2xl font-bold text-neutral-900 mb-1">Book an Appointment</h3>
          <p className="text-xs text-neutral-500 mb-6">Fill the details below — we'll confirm within 2hrs.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold text-neutral-700">Full Name</label>
              <input 
                type="text" required name="name" value={formData.name} onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Phone & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-neutral-700">Phone Number</label>
                <input 
                  type="tel" required name="phone" value={formData.phone} onChange={handleChange}
                  placeholder="Enter your phone"
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-neutral-700">Email Address</label>
                <input 
                  type="email" required name="email" value={formData.email} onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Service & Doctor Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-neutral-700">Service</label>
                <select 
                  name="service" value={formData.service} onChange={handleChange}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option>General Medicine</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Oncology</option>
                  <option>Maternity</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-neutral-700">Preferred Doctor</label>
                <select 
                  name="doctor" value={formData.doctor} onChange={handleChange}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option>Any Available Specialist</option>
                  <option>Dr. Alex Smith (Cardiology)</option>
                  <option>Dr. Jane Doe (Neurology)</option>
                </select>
              </div>
            </div>

            {/* Date & Time Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-neutral-700">Date</label>
                <input 
                  type="date" required name="date" value={formData.date} onChange={handleChange}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-neutral-700">Preferred Time</label>
                <select 
                  name="time" value={formData.time} onChange={handleChange}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option>Morning Slot (8:00 AM - 12:00 PM)</option>
                  <option>Afternoon Slot (12:00 PM - 4:00 PM)</option>
                  <option>Evening Slot (4:00 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold text-neutral-700">Additional Notes (optional)</label>
              <textarea 
                name="notes" rows={3} value={formData.notes} onChange={handleChange}
                placeholder="Describe your symptom here..."
                className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Submit Action Trigger Button */}
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-all duration-200 mt-2"
            >
              Confirm Appointment via WhatsApp →
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}