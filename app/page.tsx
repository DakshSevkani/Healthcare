"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Menu, X, HeartPulse, Phone, Clock, ShieldCheck, Stethoscope, 
  Award, Users, Heart, Brain, Sparkles, Milestone, Calendar, 
  Activity, Video, Star, Quote 
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

interface HospilTemplateProps {
  data?: {
    basicInfo?: {
      name?: string;
      tagline?: string;
      email?: string;
      hotline?: string;
      address?: string;
    };
    heroSection?: {
      badge?: string;
      headingBold?: string;
      headingBlue?: string;
      description?: string;
      bgImage?: string;
    };
    services?: {
      departmentList?: Array<{
        title: string;
        description: string;
        image: string;
        points?: Array<{ point: string }>;
      }>;
    };
    doctors?: {
      doctorList?: Array<{
        fullName: string;
        specialty: string;
      }>;
    };
    testimonials?: {
      reviewList?: Array<{
        name: string;
        role: string;
        text: string;
        rating: string | number;
        image: string;
      }>;
    };
    timings?: {
      monFri?: string;
      saturday?: string;
      sunday?: string;
    };
    socials?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
      linkedin?: string;
      whatsappNumber?: string;
    };
  };
}

export default function HospilTemplate({ data }: HospilTemplateProps) {
  // Safe destructuring matrices
  const basic = data?.basicInfo || {};
  const hero = data?.heroSection || {};
  const timings = data?.timings || {};
  const social = data?.socials || {};

  const brandName = basic.name || "Hospil";
  const brandTagline = basic.tagline || "Providing premium, personalized healthcare services combined with top-tier medical experts.";
  const clinicEmail = basic.email || "hospil@gmail.com";
  const clinicHotline = basic.hotline || "+91 00000 00000";
  const clinicAddress = basic.address || "Main Clinic Road, Medical District block 4B.";
  const monFriTime = timings.monFri || "Mon - Sat: 8:00 AM - 8:00 PM";

  const whatsappLinkNumber = social.whatsappNumber || "8237024546";

  // Dynamic lists extractor with core fallback items
  const dynamicDepartments = data?.services?.departmentList || [
    { title: "Cardiology", description: "Advanced cardiac diagnostics, interventional procedures, and preventive heart wellness.", points: [{ point: "24/7 Cardiac Cath Lab" }, { point: "ECG, Echo & TMT" }], image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" },
    { title: "Neurology", description: "Comprehensive brain, spine & nerve care — stroke management, epilepsy surgery & rehab.", points: [{ point: "Advanced Neuro-Imaging" }, { point: "Stroke Recovery Unit" }], image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop" }
  ];

  const dynamicDoctors = data?.doctors?.doctorList || [
    { fullName: "Dr. Alex Smith", specialty: "Cardiology" },
    { fullName: "Dr. Jane Doe", specialty: "Neurology" }
  ];

  const dynamicReviews = data?.testimonials?.reviewList || [
    { name: "Sarah Jenkins", role: "Cardiology Patient", text: "The care I received at Hospil was exceptional. The booking process via WhatsApp was incredibly seamless.", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-800 antialiased">
      
      <NavbarComponent brandName={brandName} clinicHotline={clinicHotline} monFriTime={monFriTime} />
      
      <div className="pt-20 md:pt-32">
        
        <HeroComponent hero={hero} />

        <WhyChooseUsComponent />

        <FeaturedDepartmentsComponent departments={dynamicDepartments} />

        <ContactFormComponent whatsappLinkNumber={whatsappLinkNumber} doctors={dynamicDoctors} departments={dynamicDepartments} />

        <TestimonialsComponent reviews={dynamicReviews} />

        <FooterComponent 
          brandName={brandName}
          brandTagline={brandTagline}
          clinicHotline={clinicHotline}
          clinicEmail={clinicEmail}
          clinicAddress={clinicAddress}
          timings={timings}
          social={social}
        />
      </div>

      <WhatsAppStickyComponent whatsappLinkNumber={whatsappLinkNumber} />
    </div>
  );
}

// ==========================================
// NAVBAR SUB-COMPONENT
// ==========================================
function NavbarComponent({ brandName, clinicHotline, monFriTime }: { brandName: string; clinicHotline: string; monFriTime: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Appointment", href: "#contact" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top utility contact bar (Enlarged to text-sm/text-base) */}
      <div className="hidden md:flex w-full bg-blue-600 text-white text-sm lg:text-base py-3 px-6 lg:px-16 justify-between items-center border-b border-blue-500">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Clock size={16} />
            <span>Hours: {monFriTime}</span>
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} />
            <span>Emergency Support Available 24/7</span>
          </span>
        </div>
        <div className="font-semibold tracking-wide text-base">
          Call Central Hotline: <span className="underline">{clinicHotline}</span>
        </div>
      </div>

      {/* Main navigation container */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-neutral-200 py-4"
            : "bg-white border-neutral-100 py-6"
        } px-6 lg:px-16 flex justify-between items-center`}
      >
        <Link href="#" className="flex items-center gap-2 text-blue-600 font-bold text-2xl lg:text-3xl tracking-tight">
          <HeartPulse size={30} className="text-blue-600" />
          <span>
            {brandName}<span className="text-emerald-500">.</span>
          </span>
        </Link>

        {/* Desktop items (Enlarged to text-base) */}
        <div className="hidden md:flex items-center gap-10 text-base lg:text-lg">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-neutral-600 hover:text-blue-600 font-semibold transition-colors duration-200">
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button (Enlarged to text-base/text-lg) */}
        <div className="hidden md:block">
          <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base lg:text-lg px-6 py-3 rounded-xl shadow-md transition-all duration-200">
            Make Appointment
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-neutral-600 hover:text-blue-600 focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile drawer layout */}
      {isOpen && (
        <div className="md:hidden w-full bg-white border-b border-neutral-200 shadow-2xl flex flex-col px-6 py-6 space-y-5 text-lg">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-neutral-700 hover:text-blue-600 font-bold py-2">
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-neutral-100">
            <Link href="#contact" onClick={() => setIsOpen(false)} className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-base">
              Make Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ==========================================
// HERO SUB-COMPONENT
// ==========================================
function HeroComponent({ hero }: { hero: any }) {
  const badgeText = hero.badge || "Top-Rated Medical Studio";
  const mainHeadingBold = hero.headingBold || "Your Health,";
  const mainHeadingBlue = hero.headingBlue || "Our Total Priority.";
  const heroDescription = hero.description || "Experience world-class, personalized medical care without the long wait times. Our board-certified specialists utilize state-of-the-art diagnostics to put your wellness first.";
  const fallbackImg = hero.bgImage || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center px-6 lg:px-16 overflow-hidden bg-neutral-900 py-12">
      <div className="absolute inset-0 w-full h-full">
        <img src={fallbackImg} alt="Clinic Background" className="w-full h-full object-cover opacity-35" />
      </div>
      <div className="max-w-7xl w-full mx-auto items-center z-10">
        <div className="flex flex-col space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm lg:text-base font-bold px-4 py-2 rounded-full w-fit backdrop-blur-sm">
            <Activity size={16} />
            <span>{badgeText}</span>
          </div>

          {/* Heading scaled up dramatically */}
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold text-white tracking-tight leading-none">
            {mainHeadingBold} <br />
            <span className="text-blue-400">{mainHeadingBlue}</span>
          </h1>

          <p className="text-neutral-200 text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed font-medium">
            {heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 text-base lg:text-lg font-bold">
            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4.5 rounded-2xl shadow-xl transition-all duration-200 hover:scale-[1.02]">
              <Calendar size={20} />
              <span>Book Appointment Now</span>
            </Link>
            <Link href="#services" className="w-full sm:w-auto text-center border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-4.5 rounded-2xl transition-all duration-200 backdrop-blur-sm">
              Explore Specialties
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// WHY CHOOSE US SUB-COMPONENT
// ==========================================
function WhyChooseUsComponent() {
  const features = [
    { icon: <Award className="text-blue-600" size={32} />, title: "Certified Excellence", description: "Our clinic is fully accredited with international health standards, ensuring you receive premium treatment protocols." },
    { icon: <Stethoscope className="text-blue-600" size={32} />, title: "Advanced Technology", description: "We utilize cutting-edge diagnostic equipment and minimal-access laboratory screening tools for precise results." },
    { icon: <Users className="text-blue-600" size={32} />, title: "Expert Medical Team", description: "Our staff consists of board-certified medical specialists and practitioners with decades of combined experience." },
    { icon: <ShieldCheck className="text-blue-600" size={32} />, title: "Patient-First Safety", description: "Your health records and physical treatment plans are secured with strict confidentiality and absolute care." }
  ];

  return (
    <section id="about" className="w-full py-20 md:py-28 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="group relative bg-white border border-neutral-200 p-8 rounded-3xl shadow-md duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center duration-300 group-hover:bg-blue-600 group-hover:text-white mb-6">
                {React.cloneElement(item.icon, { className: "transition-colors duration-300 group-hover:text-white" })}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3">{item.title}</h3>
              <p className="text-neutral-600 text-base lg:text-stretch leading-relaxed font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// FEATURED DEPARTMENTS SUB-COMPONENT
// ==========================================
function FeaturedDepartmentsComponent({ departments }: { departments: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".scroll-animate-row");
    if (!elements) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-16");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [departments]);

  return (
    <section id="services" className="w-full py-20 md:py-28 px-6 lg:px-16 bg-white overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-24 space-y-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            We Care for Patients Across Various <br /> Departments and Services.
          </h2>
        </div>

        <div className="space-y-32">
          {departments.map((dept, idx) => (
            <div key={idx} className="scroll-animate-row grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 relative items-center opacity-0 translate-y-16 transition-all duration-700 ease-out">
              <div className="bg-white rounded-3xl p-10 lg:p-12 border border-neutral-200 shadow-2xl md:col-span-6 z-20 md:mr-[-50px] relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600"><Heart className="text-blue-600" size={30} /></div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-neutral-900">{dept.title}</h3>
                </div>
                <p className="text-neutral-600 text-lg lg:text-xl leading-relaxed mb-8 font-medium">{dept.description}</p>
                <ul className="space-y-4">
                  {dept.points?.map((p: any, i: number) => (
                    <li key={i} className="flex items-center gap-4 text-base lg:text-lg text-neutral-800 font-semibold">
                      <ShieldCheck className="text-blue-500 shrink-0" size={22} />
                      <span>{p.point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-6 h-80 md:h-[460px] w-full rounded-3xl overflow-hidden relative z-10 shadow-xl">
                <img src={dept.image || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"} alt={dept.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-neutral-950/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// CONTACT FORM SUB-COMPONENT
// ==========================================
function ContactFormComponent({ whatsappLinkNumber, doctors, departments }: { whatsappLinkNumber: string; doctors: any[]; departments: any[] }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", doctor: "", date: "", time: "Morning Slot", notes: "" });

  useEffect(() => {
    if (departments?.length > 0 && !formData.service) {
      setFormData(prev => ({ ...prev, service: departments[0].title }));
    }
    if (doctors?.length > 0 && !formData.doctor) {
      setFormData(prev => ({ ...prev, doctor: doctors[0].fullName }));
    }
  }, [departments, doctors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message =
      `Hi Hospil Clinic Team, I'd like to book an appointment:\n\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Department:* ${formData.service}\n` +
      `• *Doctor:* ${formData.doctor}\n` +
      `• *Date:* ${formData.date}\n` +
      `• *Preferred Time:* ${formData.time}\n` +
      `• *Symptom Notes:* ${formData.notes || "None"}`;

    const whatsappUrl = `https://wa.me/${whatsappLinkNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    setFormData({ name: "", phone: "", email: "", service: departments[0]?.title || "", doctor: doctors[0]?.fullName || "", date: "", time: "Morning Slot", notes: "" });
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">Secure Your Healing Journey in Seconds</h2>
          <div className="space-y-5 pt-2 text-base lg:text-xl font-semibold text-neutral-700">
            <div className="flex items-center gap-4"><Clock className="text-blue-600 shrink-0" size={24} /> Same-day slots available</div>
            <div className="flex items-center gap-4"><Video className="text-blue-600 shrink-0" size={24} /> Video or in-clinic consult</div>
            <div className="flex items-center gap-4"><ShieldCheck className="text-blue-600 shrink-0" size={24} /> Insurance options accepted</div>
          </div>
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-neutral-100 mt-6">
            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" alt="Medical Team" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 p-8 md:p-12 rounded-3xl shadow-md">
          <h3 className="text-3xl font-extrabold text-neutral-900 mb-2">Book an Appointment</h3>
          <p className="text-base text-neutral-500 mb-8 font-medium">Confirm within 2 hours.</p>
          <form onSubmit={handleSubmit} className="space-y-6 text-base lg:text-lg font-semibold text-neutral-700">
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Full Name</label>
              <input type="text" required name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full bg-white border border-neutral-300 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="font-bold">Phone Number</label>
                <input type="tel" required name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone" className="w-full bg-white border border-neutral-300 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-bold">Email Address</label>
                <input type="email" required name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" className="w-full bg-white border border-neutral-300 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="font-bold">Service</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-white border border-neutral-300 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {departments.map((d, i) => <option key={i} value={d.title}>{d.title}</option>)}
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-bold">Preferred Doctor</label>
                <select name="doctor" value={formData.doctor} onChange={handleChange} className="w-full bg-white border border-neutral-300 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="Any Available Specialist">Any Available Specialist</option>
                  {doctors.map((doc, i) => <option key={i} value={doc.fullName}>{doc.fullName} ({doc.specialty})</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="font-bold">Date</label>
                <input type="date" required name="date" value={formData.date} onChange={handleChange} className="w-full bg-white border border-neutral-300 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-bold">Preferred Time</label>
                <select name="time" value={formData.time} onChange={handleChange} className="w-full bg-white border border-neutral-300 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Morning Slot (8:00 AM - 12:00 PM)</option><option>Afternoon Slot (12:00 PM - 4:00 PM)</option><option>Evening Slot (4:00 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Additional Notes (optional)</label>
              <textarea name="notes" rows={4} value={formData.notes} onChange={handleChange} placeholder="Describe symptoms..." className="w-full bg-white border border-neutral-300 rounded-xl px-5 py-4 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-lg py-4.5 rounded-2xl shadow-xl transition-all duration-200 mt-4 hover:scale-[1.01]">Confirm Appointment via WhatsApp →</button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// TESTIMONIALS SUB-COMPONENT
// ==========================================
function TestimonialsComponent({ reviews }: { reviews: any[] }) {
  return (
    <section id="testimonials" className="w-full py-20 md:py-28 px-6 lg:px-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">Trusted by Thousands of Patients</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border border-neutral-200 p-10 rounded-3xl shadow-md flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Quote className="absolute top-8 right-8 text-neutral-100 h-16 w-16 pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(typeof review.rating === "number" ? review.rating : 5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-neutral-600 text-lg lg:text-xl leading-relaxed italic font-medium">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-5 pt-8 mt-8 border-t border-neutral-100 relative z-10">
                <img src={review.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"} alt={review.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-50" />
                <div>
                  <h4 className="text-lg font-bold text-neutral-900">{review.name}</h4>
                  <p className="text-sm lg:text-base text-neutral-500 font-semibold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// FOOTER SUB-COMPONENT
// ==========================================
function FooterComponent({ brandName, brandTagline, clinicHotline, clinicEmail, clinicAddress, timings, social }: any) {
  const monFriTime = timings.monFri || "Mon - Fri: 8:00 AM - 8:00 PM";
  const satTime = timings.saturday || "Saturday: 9:00 AM - 5:00 PM";
  const sunTime = timings.sunday || "Sunday: Emergencies Only";

  const fbLink = social.facebook || "https://facebook.com";
  const igLink = social.instagram || "https://instagram.com";
  const twLink = social.twitter || "https://twitter.com";
  const liLink = social.linkedin || "https://linkedin.com";

  return (
    <footer className="w-full bg-neutral-950 text-neutral-400 pt-20 pb-10 px-6 lg:px-16 border-t border-t-neutral-900 text-base lg:text-lg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-white font-black text-2xl tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center"><HeartPulse size={22} className="text-white" /></div>
              <span>{brandName}<span className="text-blue-500">.</span></span>
            </div>
            <p className="leading-relaxed max-w-sm text-neutral-500 font-medium">{brandTagline}</p>
            <div className="flex items-center gap-4 pt-2">
              <a href={fbLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-blue-600 hover:text-white transition-all shadow-md"><FaFacebookF size={18} /></a>
              <a href={igLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-blue-600 hover:text-white transition-all shadow-md"><FaInstagram size={18} /></a>
              <a href={twLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-blue-600 hover:text-white transition-all shadow-md"><FaTwitter size={18} /></a>
              <a href={liLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-blue-600 hover:text-white transition-all shadow-md"><FaLinkedinIn size={18} /></a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm lg:text-base font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-3 font-semibold">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Appointment</a></li>
              <li><a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm lg:text-base font-bold uppercase tracking-widest text-white">Working Hours</h4>
            <ul className="space-y-3 text-neutral-500 font-semibold">
              <li><span>{monFriTime}</span></li>
              <li><span>{satTime}</span></li>
              <li><span>{sunTime}</span></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-sm lg:text-base font-bold uppercase tracking-widest text-white">Emergency</h4>
            <div className="space-y-2">
              <p className="text-neutral-500 font-medium">Call 24/7 Support:</p>
              <p className="text-2xl font-black text-blue-500 tracking-tight">{clinicHotline}</p>
            </div>
            <p className="leading-snug font-bold text-neutral-300">Email: {clinicEmail}</p>
            <p className="leading-relaxed text-neutral-500 font-medium">{clinicAddress}</p>
          </div>
        </div>
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-600 gap-4 font-semibold">
          <p>© {new Date().getFullYear()} {brandName} Clinic. All rights reserved.</p>
          <p className="flex items-center gap-2">Made with <HeartPulse size={14} className="text-rose-600 fill-rose-600" /> for complete medical care.</p>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// STICKY FLOATING WHATSAPP BUTTON SUB-COMPONENT
// ==========================================
function WhatsAppStickyComponent({ whatsappLinkNumber }: { whatsappLinkNumber: string }) {
  const whatsappUrl = `https://wa.me/${whatsappLinkNumber}?text=${encodeURIComponent("Hi, I'd like to inquire about booking an appointment.")}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center" aria-label="WhatsApp Sticky Support">
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm lg:text-base font-extrabold transition-all duration-300 group-hover:max-w-xs group-hover:pr-4 ease-in-out">Chat with us</span>
      <FaWhatsapp size={28} className="drop-shadow-md" />
    </a>
  );
}