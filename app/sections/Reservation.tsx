"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import GlassCard from "@/app/components/GlassCard";

gsap.registerPlugin(ScrollTrigger);

export default function Reservation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "2", occasion: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".form-field", { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservation" ref={sectionRef} className="relative py-32 md:py-48 bg-luxury-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-espresso-900/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase font-body mb-4 block">Reserve</span>
          <h2 className="font-display text-4xl md:text-6xl text-luxury-cream">Your Table Awaits</h2>
        </div>

        <GlassCard className="p-8 md:p-12">
          {isSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-20 h-20 rounded-full border-2 border-luxury-gold flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-3xl text-luxury-cream mb-2">Reservation Confirmed</h3>
              <p className="text-luxury-cream/60">We look forward to welcoming you.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-field">
                  <label className="block text-xs tracking-widest uppercase text-luxury-cream/50 mb-2">Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-luxury-gold/50 transition-all" />
                </div>
                <div className="form-field">
                  <label className="block text-xs tracking-widest uppercase text-luxury-cream/50 mb-2">Email</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-luxury-gold/50 transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-field">
                  <label className="block text-xs tracking-widest uppercase text-luxury-cream/50 mb-2">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-luxury-gold/50 transition-all" />
                </div>
                <div className="form-field">
                  <label className="block text-xs tracking-widest uppercase text-luxury-cream/50 mb-2">Guests</label>
                  <select name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-luxury-gold/50 transition-all">
                    {[1,2,3,4,5,6,7,8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-field">
                  <label className="block text-xs tracking-widest uppercase text-luxury-cream/50 mb-2">Date</label>
                  <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-luxury-gold/50 transition-all" />
                </div>
                <div className="form-field">
                  <label className="block text-xs tracking-widest uppercase text-luxury-cream/50 mb-2">Time</label>
                  <select name="time" required value={formData.time} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-luxury-gold/50 transition-all">
                    <option value="">Select Time</option>
                    {["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label className="block text-xs tracking-widest uppercase text-luxury-cream/50 mb-2">Special Occasion</label>
                <input type="text" name="occasion" placeholder="Birthday, Anniversary, Business Meeting..." value={formData.occasion} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-luxury-gold/50 transition-all" />
              </div>

              <div className="form-field pt-4">
                <button type="submit" className="w-full py-4 rounded-xl bg-luxury-gold text-luxury-darker font-body text-sm tracking-widest uppercase font-semibold hover:bg-luxury-goldLight transition-colors duration-500">
                  Confirm Reservation
                </button>
              </div>
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  );
}