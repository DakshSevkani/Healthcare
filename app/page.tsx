"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, HeartPulse, Phone, Clock, ShieldCheck, Stethoscope, Award, Users, Heart, Brain, Sparkles, Milestone, Calendar, Activity, Video, Star, Quote } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

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
          Call Central Hotline:{" "}
          <span className="underline">+91 00000 00000</span>
        </div>
      </div>

      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-neutral-200 py-3"
            : "bg-white border-neutral-100 py-4"
        } px-6 lg:px-16 flex justify-between items-center`}
      >
        <Link
          href="#"
          className="flex items-center gap-2 text-blue-600 font-bold text-xl tracking-tight"
        >
          <HeartPulse size={26} className="text-blue-600" />
          <span>
            Hospil<span className="text-emerald-500">.</span>
          </span>
        </Link>

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

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200"
          >
            Make Appointment
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-neutral-600 hover:text-blue-600 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

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

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center px-6 lg:px-16 overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 w-full h-full">
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

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight">
            Your Health, <br />
            <span className="text-blue-400">Our Total Priority.</span>
          </h1>

          <p className="text-neutral-300 text-base md:text-lg max-w-xl">
            Experience world-class, personalized medical care without the long
            wait times. Our board-certified specialists utilize state-of-the-art
            diagnostics to put your wellness first.
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

export function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="text-blue-600" size={28} />,
      title: "Certified Excellence",
      description: "Our clinic is fully accredited with international health standards, ensuring you receive premium treatment protocols.",
    },
    {
      icon: <Stethoscope className="text-blue-600" size={28} />,
      title: "Advanced Technology",
      description: "We utilize cutting-edge diagnostic equipment and minimal-access laboratory screening tools for precise results.",
    },
    {
      icon: <Users className="text-blue-600" size={28} />,
      title: "Expert Medical Team",
      description: "Our staff consists of board-certified medical specialists and practitioners with decades of combined experience.",
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={28} />,
      title: "Patient-First Safety",
      description: "Your health records and physical treatment plans are secured with strict confidentiality and absolute care.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-neutral-100 p-6 rounded-2xl shadow-sm duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-100"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center duration-300 group-hover:bg-blue-600 group-hover:text-white mb-4">
                {React.cloneElement(item.icon, {
                  className: "transition-colors duration-300 group-hover:text-white",
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

export function FeaturedDepartments() {
  const containerRef = useRef<HTMLDivElement>(null);

  const departments = [
    {
      id: "cardiology",
      icon: <Heart className="text-blue-600" size={24} />,
      title: "Cardiology",
      description: "Advanced cardiac diagnostics, interventional procedures, and preventive heart wellness.",
      points: ["24/7 Cardiac Cath Lab", "ECG, Echo & TMT", "Top interventional cardiologists"],
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "neurology",
      icon: <Brain className="text-blue-600" size={24} />,
      title: "Neurology",
      description: "Comprehensive brain, spine & nerve care — stroke management, epilepsy surgery & rehab.",
      points: ["Advanced Neuro-Imaging", "Stroke Recovery Unit", "Robotic Neuro Rehab"],
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop",
    },
    {
      id: "orthopedics",
      icon: <Activity className="text-blue-600" size={24} />,
      title: "Orthopedics",
      description: "Joint replacement, sports medicine, trauma surgery & minimally invasive procedures.",
      points: ["Knee & Hip Replacement", "Sports Injury Clinic", "Digital 3D Navigation"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    },
    {
      id: "oncology",
      icon: <Sparkles className="text-blue-600" size={24} />,
      title: "Oncology",
      description: "Precision oncology, chemotherapy, immunotherapy and compassionate palliative support.",
      points: ["Molecular Profiling", "Day Care Chemotherapy", "Psycho-oncology Support"],
      image: "https://salvavidaspharma.com/wp-content/uploads/2022/08/What-is-Oncology.webp",
    },
    {
      id: "maternity",
      icon: <Milestone className="text-blue-600" size={24} />,
      title: "Maternity",
      description: "Holistic pregnancy care, high-risk basics, state of the art delivery suites & NICU.",
      points: ["24/7 Labor Epidural", "Antenatal Classes", "Luxury Mother & Baby Suites"],
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".scroll-animate-row");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-16");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="w-full py-16 md:py-24 px-6 lg:px-16 bg-white overflow-hidden">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            We Care for Patients Across Various <br /> Departments and Services.
          </h2>
        </div>

        <div className="space-y-24">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="scroll-animate-row grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 relative items-center opacity-0 translate-y-16 transition-all duration-700 ease-out"
            >
              <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl md:col-span-5 z-20 md:mr-[-40px] relative">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    {dept.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {dept.title}
                  </h3>
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

              <div className="md:col-span-7 h-72 md:h-[380px] w-full rounded-3xl overflow-hidden relative z-10 shadow-lg">
                <img src={dept.image} alt={dept.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-neutral-950/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Cardiology Patient",
      text: "The care I received at Hospil was exceptional. The booking process via WhatsApp was incredibly seamless, and the cardiologists were deeply thorough with my heart wellness screenings.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
    {
      name: "David Miller",
      role: "Family Medicine",
      text: "I highly recommend this clinic. There was zero wait time for my checkup, and the state-of-the-art diagnostic lab returned my results within a few hours. Absolutely top-tier healthcare.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    },
    {
      name: "Elena Rostova",
      role: "Neurology Patient",
      text: "The specialists here are world-class. They took the time to map out a personalized treatment plan for my chronic migraines and treated me with absolute care and confidentiality.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 px-6 lg:px-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight">
            Trusted by Thousands of Patients
          </p>
          <p className="text-neutral-500 text-sm md:text-base">
            See what our community has to say about our advanced care and dedicated medical team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200/60 p-8 rounded-3xl shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Quote className="absolute top-6 right-6 text-neutral-100 h-12 w-12 pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "General Medicine",
    doctor: "Any Available Specialist",
    date: "",
    time: "Morning Slot",
    notes: "",
  });

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

    const whatsappUrl = `https://wa.me/8237024546?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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

        <div className="lg:col-span-7 bg-neutral-50 border border-neutral-100 p-6 md:p-8 rounded-3xl shadow-sm">
          <h3 className="text-2xl font-bold text-neutral-900 mb-1">Book an Appointment</h3>
          <p className="text-xs text-neutral-500 mb-6">Fill the details below — we'll confirm within 2hrs.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold text-neutral-700">Full Name</label>
              <input
                type="text"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-neutral-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-neutral-700">Email Address</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-neutral-700">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
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
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option>Any Available Specialist</option>
                  <option>Dr. Alex Smith (Cardiology)</option>
                  <option>Dr. Jane Doe (Neurology)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-neutral-700">Date</label>
                <input
                  type="date"
                  required
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-neutral-700">Preferred Time</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option>Morning Slot (8:00 AM - 12:00 PM)</option>
                  <option>Afternoon Slot (12:00 PM - 4:00 PM)</option>
                  <option>Evening Slot (4:00 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold text-neutral-700">Additional Notes (optional)</label>
              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Describe your symptom here..."
                className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

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

export function WhatsAppSticky() {
  const whatsappUrl = `https://wa.me/8237024546?text=${encodeURIComponent("Hi Hospil, I'd like to inquire about booking an appointment.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold transition-all duration-300 group-hover:max-w-xs group-hover:pr-3 ease-in-out">
        Chat with us
      </span>
      <FaWhatsapp size={24} className="drop-shadow" />
    </a>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-950 text-neutral-400 pt-16 pb-8 px-6 lg:px-16 border-t border-t-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <HeartPulse size={18} className="text-white" />
              </div>
              <span>
                Hospil<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-neutral-500">
              Providing premium, personalized healthcare services combined with
              top-tier medical experts and cutting-edge diagnostics.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-all"
                title="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-all"
                title="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-all"
                title="Twitter"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-all"
                title="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Appointment</a></li>
              <li><a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Working Hours</h4>
            <ul className="space-y-2 text-xs text-neutral-500">
              <li><span>Mon - Fri: 8:00 AM - 8:00 PM</span></li>
              <li><span>Saturday: 9:00 AM - 5:00 PM</span></li>
              <li><span>Sunday: Emergencies Only</span></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Emergency</h4>
            <div className="space-y-1">
              <p className="text-xs text-neutral-500">Call 24/7 Support:</p>
              <p className="text-base font-bold text-blue-500 tracking-tight">+91 00000 00000</p>
            </div>
            <p className="text-[11px] text-neutral-600 leading-snug">Email: hospil@gmail.com</p>
            <p className="text-[11px] text-neutral-600 leading-snug">Main Clinic Road, Medical District block 4B.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 antialiased">
      <Navbar />
      <div className="pt-14 md:pt-24">
        <Hero />
        <WhyChooseUs />
        <FeaturedDepartments />
        <Contact />
        <Testimonials />
        <Footer />
      </div>
      <WhatsAppSticky />
    </div>
  );
}