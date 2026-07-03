"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/app/components/GlassCard";
import { Barista } from "@/app/types";

gsap.registerPlugin(ScrollTrigger);

const baristas: Barista[] = [
  {
    id: "1",
    name: "Marco Santini",
    role: "Head Barista",
    experience: "12 Years",
    specialty: "Latte Art",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    quote: "Coffee is a language in itself.",
  },
  {
    id: "2",
    name: "Yuki Tanaka",
    role: "Roast Master",
    experience: "10 Years",
    specialty: "Single Origin",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    quote: "Every bean tells a story of its soil.",
  },
  {
    id: "3",
    name: "Antoine Dubois",
    role: "Sensory Analyst",
    experience: "15 Years",
    specialty: "Cupping",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    quote: "Perfection lives in the details.",
  },
];

export default function MasterBaristas() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".barista-card", { y: 100, opacity: 0, duration: 1.2, stagger: 0.15, ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="baristas" ref={sectionRef} className="relative py-32 md:py-48 bg-luxury-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase font-body mb-4 block">The Artisans</span>
          <h2 className="font-display text-4xl md:text-6xl text-luxury-cream">Master Baristas</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {baristas.map((barista, index) => (
            <GlassCard key={barista.id} delay={index * 0.15} className="barista-card group p-0 overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${barista.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker via-luxury-darker/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-luxury-gold text-xs tracking-widest uppercase mb-2 block">{barista.role}</span>
                  <h3 className="font-display text-2xl text-luxury-cream mb-1">{barista.name}</h3>
                  <p className="text-sm text-luxury-cream/60 italic mb-4">&ldquo;{barista.quote}&rdquo;</p>
                  <div className="flex gap-4 text-xs text-luxury-cream/50">
                    <span>{barista.experience}</span>
                    <span className="text-luxury-gold/50">•</span>
                    <span>{barista.specialty}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}