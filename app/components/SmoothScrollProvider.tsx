"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScrollProvider
 * ──────────────────────────────────────────────────────────────────
 * Initialises Lenis smooth scroll and connects it to GSAP's
 * ScrollTrigger via the RAF ticker — the industry-standard setup
 * for scroll-linked GSAP animations.
 *
 * Lenis settings:
 *   lerp  0.09 — momentum lag (lower = more inertia)
 *   smoothWheel true — wheel events interpolated
 *   syncTouch   false — keep native momentum on mobile
 * ──────────────────────────────────────────────────────────────────
 */
export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Skip on touch-only devices (keep native scroll feel)
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const rafCallback = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
