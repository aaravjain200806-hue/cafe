"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className = "", delay = 0, hoverEffect = true }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 1.2, delay,
        ease: "expo.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 90%", toggleActions: "play none none none" },
      }
    );
  }, [delay]);

  return (
    <div ref={cardRef} className={`glass rounded-2xl p-8 transition-all duration-700 ${hoverEffect ? "hover:bg-white/5 hover:border-luxury-gold/30 hover:shadow-[0_0_60px_rgba(212,175,55,0.15)] hover:-translate-y-2" : ""} ${className}`}>
      {children}
    </div>
  );
}