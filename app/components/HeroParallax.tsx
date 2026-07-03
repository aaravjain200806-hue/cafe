"use client";

import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

/**
 * HeroParallax
 * ──────────────────────────────────────────────────────────────────
 * Adds subtle mouse-driven parallax to hero text layers.
 * Each layer moves at a different depth factor producing a 3D feel.
 *
 * Usage: wrap hero section children that should move on mouse move
 * with data-depth="0.5" (lower = slower = "deeper in scene").
 *
 * Also adds:
 *  • Smooth page entrance animation (clip-path reveal)
 *  • Ambient gradient that tracks the mouse position
 * ──────────────────────────────────────────────────────────────────
 */
export default function HeroParallax({ sectionRef }: { sectionRef: React.RefObject<HTMLElement> }) {
  const gradRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: MouseEvent) => {
    const section = sectionRef.current;
    const grad    = gradRef.current;
    if (!section) return;

    const rect  = section.getBoundingClientRect();
    const xPct  = (e.clientX - rect.left) / rect.width  - 0.5; // -0.5 to 0.5
    const yPct  = (e.clientY - rect.top ) / rect.height - 0.5;

    // Parallax layers inside section that carry data-depth
    section.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
      const depth = parseFloat(el.dataset.depth || "0.3");
      gsap.to(el, {
        x: xPct * depth * 60,
        y: yPct * depth * 40,
        duration: 1.0,
        ease: "power2.out",
        overwrite: "auto",
      });
    });

    // Ambient radial gradient chases cursor
    if (grad) {
      gsap.to(grad, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        duration: 1.2,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [sectionRef]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Only on pointer devices
    if (window.matchMedia("(hover: none)").matches) return;

    section.addEventListener("mousemove", onMove as EventListener, { passive: true });
    return () => section.removeEventListener("mousemove", onMove as EventListener);
  }, [sectionRef, onMove]);

  return (
    // Ambient gradient layer — moves with mouse
    <div
      ref={gradRef}
      aria-hidden
      style={{
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(193,68,14,0.12) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 1,
        top: "50%",
        left: "50%",
        willChange: "transform",
        filter: "blur(1px)",
      }}
    />
  );
}
