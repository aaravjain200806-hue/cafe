"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;       // seconds
  duration?: number;    // seconds
  distance?: number;    // px
  stagger?: number;     // seconds between child animations
  threshold?: string;   // ScrollTrigger start, e.g. "top 80%"
  className?: string;
  once?: boolean;       // animate once or replay on scroll
}

/**
 * ScrollReveal
 * ──────────────────────────────────────────────────────────────────
 * Wraps children in a GSAP ScrollTrigger animation.
 * Supports: fade-up, fade-down, fade-left, fade-right, scale-in.
 * ──────────────────────────────────────────────────────────────────
 */
export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.85,
  distance = 36,
  stagger = 0,
  threshold = "top 82%",
  className = "",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger > 0
      ? Array.from(el.children) as HTMLElement[]
      : [el];

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      ...(direction === "up"    && { y:  distance }),
      ...(direction === "down"  && { y: -distance }),
      ...(direction === "left"  && { x:  distance }),
      ...(direction === "right" && { x: -distance }),
      ...(direction === "scale" && { scale: 0.88 }),
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0, x: 0, scale: 1,
      duration,
      delay,
      ease: "expo.out",
      stagger: stagger || 0,
      scrollTrigger: {
        trigger: el,
        start: threshold,
        toggleActions: once
          ? "play none none none"
          : "play none none reverse",
      },
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, fromVars, toVars);
    });

    return () => ctx.revert();
  }, [direction, delay, duration, distance, stagger, threshold, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
