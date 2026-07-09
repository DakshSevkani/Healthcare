'use client';

import React from 'react';
import { Activity, HeartPulse, Globe, MessageSquare, Share2 } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-950 text-neutral-400 pt-16 pb-8 px-6 lg:px-16 border-t border-t-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand/Logo Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <HeartPulse size={18} className="text-white" />
              </div>
              <span>Hospil<span className="text-blue-500">.</span></span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-neutral-500">
              Providing premium, personalized healthcare services combined with top-tier medical experts and cutting-edge diagnostics.
            </p>
            {/* Clean Premium Brand Logo Interaction Block */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-all" title="Facebook">
                <FaFacebookF size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-all" title="Instagram">
                <FaInstagram size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-all" title="Twitter">
                <FaTwitter size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-all" title="LinkedIn">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Appointment</a></li>
              <li><a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Operational Hours Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Working Hours</h4>
            <ul className="space-y-2 text-xs text-neutral-500">
              <li className="flex justify-between"><span>Mon - Fri: 8:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday: 9:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday: Emergencies Only</span></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Emergency</h4>
            <div className="space-y-1">
              <p className="text-xs text-neutral-500">Call 24/7 Support:</p>
              <p className="text-base font-bold text-blue-500 tracking-tight">+91 00000 00000</p>
            </div>
            <p className="text-[11px] text-neutral-600 leading-snug">
              Email:hospil@gmail.com
            </p>
            <p className="text-[11px] text-neutral-600 leading-snug">
              Main Clinic Road, Medical District block 4B.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}