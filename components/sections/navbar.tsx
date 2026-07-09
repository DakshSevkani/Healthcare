'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, HeartPulse, Phone, Clock } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Appointment', href: '#contact' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top utility contact bar */}
      <div className="hidden md:flex w-full bg-blue-600 text-white text-xs py-2 px-6 lg:px-16 justify-between items-center border-b border-blue-500">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>Hours: Mon - Sat: 8:00 AM - 8:00 PM</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} />
            <span>Emergency Support Available 24/7</span>
          </span>
        </div>
        <div className="font-medium tracking-wide">
          Call Central Hotline: <span className="underline">+91 00000 00000</span>
        </div>
      </div>

      {/* Main navigation container */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-neutral-200 py-3'
            : 'bg-white border-neutral-100 py-4'
        } px-6 lg:px-16 flex justify-between items-center`}
      >
        <Link href="#" className="flex items-center gap-2 text-blue-600 font-bold text-xl tracking-tight">
          <HeartPulse size={26} className="text-blue-600" />
          <span>Hospil<span className="text-emerald-500">.</span></span>
        </Link>

        {/* Desktop items */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-neutral-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200"
          >
            Make Appointment
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-neutral-600 hover:text-blue-600 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer layout */}
      {isOpen && (
        <div className="md:hidden w-full bg-white border-b border-neutral-200 shadow-xl flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-700 hover:text-blue-600 font-medium text-base py-1"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-neutral-100">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-sm"
            >
              Make Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}