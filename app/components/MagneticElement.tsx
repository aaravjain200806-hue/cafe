"use client";

import { useRef, useCallback, type ReactNode } from "react";
import { gsap } from "gsap";

interface Props {
  children: ReactNode;
  strength?: number;  // 0.2 = subtle, 0.5 = dramatic
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * MagneticElement
 * ──────────────────────────────────────────────────────────────────
 * Wraps any element with a physics-based magnetic hover effect:
 *   • On mousemove over the element: it slides TOWARD the cursor
 *     (proportional to cursor offset from element center).
 *   • On mouseleave: snaps back via an elastic spring (GSAP).
 *
 * Used on Navigation links and CTA buttons.
 * Strength: default 0.3 (subtle premium feel).
 * ──────────────────────────────────────────────────────────────────
 */
export default function MagneticElement({
  children,
  strength = 0.3,
  className = "",
  style,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;

      gsap.to(el, {
        x: dx,
        y: dy,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.45)",
      overwrite: "auto",
    });
  }, []);

  // Dynamically cast — Next.js / TSX workaround
  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ display: "inline-block", ...style }}
    >
      {children}
    </Component>
  );
}
