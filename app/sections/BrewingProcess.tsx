"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: "01", title: "Sourcing", description: "Direct trade relationships with farmers across 25+ origins. Hand-picked cherries at peak ripeness." },
  { number: "02", title: "Processing", description: "Washed, natural, or honey processed according to origin character. Precision-controlled fermentation." },
  { number: "03", title: "Roasting", description: "Small-batch roasting on vintage Probat drums. Profile development by our master roasters." },
  { number: "04", title: "Brewing", description: "Calibrated extraction using precision equipment. Temperature, time, and ratio optimized to the gram." },
];

export default function BrewingProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, { scaleY: 0 }, {
        scaleY: 1, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%", end: "bottom 40%", scrub: 1 },
      });
      gsap.from(".process-step", { x: -40, opacity: 0, duration: 1, stagger: 0.2, ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative py-32 md:py-48 bg-luxury-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase font-body mb-4 block">From Seed to Cup</span>
          <h2 className="font-display text-4xl md:text-6xl text-luxury-cream">The Brewing Process</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div ref={lineRef} className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-luxury-gold via-luxury-gold/50 to-transparent origin-top" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className={`process-step relative flex items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full glass-strong flex items-center justify-center border border-luxury-gold/30">
                  <span className="font-display text-lg text-luxury-gold">{step.number}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-3xl text-luxury-cream mb-4">{step.title}</h3>
                  <p className="font-body text-luxury-cream/60 leading-relaxed max-w-md">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}