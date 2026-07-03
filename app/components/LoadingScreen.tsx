"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef  = useRef<HTMLDivElement>(null);
  const counterRef   = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut",
          onComplete,
        });
      },
    });

    tl.to(obj, {
      val: 100,
      duration: 2.4,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current)
          counterRef.current.textContent = `${Math.round(obj.val)}`;
        if (progressRef.current)
          progressRef.current.style.width = `${obj.val}%`;
      },
    });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "#1E1A16" }}
    >
      {/* Animated blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl animate-pulse"
        style={{ background: "#C1440E" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ background: "#D4A017", animationDelay: "1s" }}
      />

      {/* Brand */}
      <div className="relative z-10 text-center">
        <p className="font-hand text-5xl md:text-6xl text-boho-cream mb-1">
          The Messy Door
        </p>
        <p className="text-xs tracking-[0.35em] uppercase text-boho-mustard font-body mb-12">
          Cafe &amp; Bistro
        </p>

        {/* Counter */}
        <div className="mb-6">
          <span
            ref={counterRef}
            className="font-display text-7xl md:text-9xl"
            style={{
              background: "linear-gradient(135deg,#f4c842,#C1440E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            0
          </span>
          <span className="font-display text-4xl text-boho-cream/30">%</span>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-0.5 bg-boho-cream/10 rounded-full overflow-hidden mx-auto">
          <div
            ref={progressRef}
            className="h-full rounded-full transition-none"
            style={{
              width: "0%",
              background: "linear-gradient(90deg,#C1440E,#D4A017)",
            }}
          />
        </div>

        <p className="mt-6 font-accent text-boho-cream/35 italic text-lg tracking-wide">
          A little messy, a lot delicious...
        </p>
      </div>
    </div>
  );
}