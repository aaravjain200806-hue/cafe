"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import HeroParallax     from "@/app/components/HeroParallax";
import MagneticElement  from "@/app/components/MagneticElement";
import SplitTextReveal  from "@/app/components/SplitTextReveal";

export default function VideoScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Video autoplay
    videoRef.current?.play().catch(() => {});

    // Hero entrance — staggered layers
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(".hero-eyebrow",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }
      )
      .fromTo(".hero-tags",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "expo.out", stagger: 0.06 },
        "-=0.3"
      )
      .fromTo(".hero-ctas",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "expo.out" },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex items-end"
      style={{ background: "#1E1A16" }}
    >
      {/* ── Video bg ── */}
      <video
        ref={videoRef}
        src="/creat_this_same_video_whithout.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline preload="auto"
        style={{ zIndex: 0 }}
      />

      {/* ── Gradients ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-boho-charcoal via-boho-charcoal/45 to-transparent" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-boho-charcoal/70 via-transparent to-transparent" style={{ zIndex: 1 }} />

      {/* ── Mouse-tracking ambient glow ── */}
      <HeroParallax sectionRef={sectionRef} />

      {/* ── Floating badge ── */}
      <div
        data-depth="0.25"
        className="absolute top-32 right-8 lg:right-16 hidden md:flex flex-col items-center justify-center w-28 h-28"
        style={{
          borderRadius: "50%",
          border: "1px solid rgba(212,160,23,0.25)",
          background: "rgba(16,13,9,0.5)",
          backdropFilter: "blur(12px)",
          zIndex: 3,
          willChange: "transform",
        }}
      >
        <span className="font-hand text-boho-mustard text-sm font-bold text-center leading-snug px-3">
          Open<br />Since &apos;18
        </span>
      </div>

      {/* ── Main content ── */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28"
        style={{ zIndex: 5 }}
      >
        {/* Eyebrow */}
        <div className="hero-eyebrow mb-6 flex items-center gap-3 opacity-0">
          <div style={{ width: 32, height: 1, background: "rgba(212,160,23,0.5)" }} />
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(212,160,23,0.8)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Cafe &amp; Bistro · Est. 2018
          </span>
        </div>

        {/* Title — split word reveal */}
        <div data-depth="0.15" style={{ willChange: "transform" }}>
          <SplitTextReveal
            text="The Messy Door"
            as="h1"
            className="font-hand text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold leading-none mb-4 text-boho-cream"
            delay={0.1}
            stagger={0.06}
            splitBy="words"
          />
        </div>

        {/* Tagline — split word reveal */}
        <div data-depth="0.2" style={{ willChange: "transform" }} className="mb-10">
          <SplitTextReveal
            text="Where every meal feels like home"
            as="p"
            className="font-accent text-xl md:text-2xl italic text-boho-sand/70 max-w-lg leading-relaxed"
            delay={0.35}
            stagger={0.04}
            splitBy="words"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["Artisan Coffee", "Continental", "Fast Food", "Indian Flavours", "Vegetarian"].map((tag, i) => (
            <span
              key={tag}
              className="hero-tags opacity-0"
              style={{
                padding: "5px 14px",
                borderRadius: 4,
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "1px solid rgba(253,246,227,0.1)",
                color: "rgba(253,246,227,0.5)",
                background: "rgba(253,246,227,0.02)",
                fontFamily: "var(--font-inter)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-ctas flex flex-wrap gap-3 opacity-0">
          <MagneticElement strength={0.25}>
            <button onClick={() => scrollTo("#menu")} className="btn-gold">
              Explore Our Menu
            </button>
          </MagneticElement>
          <MagneticElement strength={0.2}>
            <button onClick={() => scrollTo("#location")} className="btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" width="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Find Us
            </button>
          </MagneticElement>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 5, color: "rgba(253,246,227,0.25)" }}
      >
        <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
        {/* Animated line */}
        <div style={{ width: 1, height: 40, background: "rgba(212,160,23,0.3)", position: "relative", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              top: 0, left: 0,
              width: "100%",
              height: "50%",
              background: "#D4A017",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}