"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * CustomCursor
 * ─────────────────────────────────────────────────────────────────
 * Two-layer cursor:
 *   • dot   — 6 px, follows mouse instantly via quickSetter
 *   • ring  — 40 px, follows with ~120ms inertia via GSAP ticker
 *
 * On hover over links / buttons:
 *   • ring grows to 56 px + fills with gold tint
 *   • dot fades out
 *
 * On hover over [data-cursor="text"] (e.g. section headings):
 *   • ring becomes a thin underline pill + shows label
 *
 * Only rendered on pointer-capable devices (hidden on touch).
 * ─────────────────────────────────────────────────────────────────
 */
export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    const wrap = wrapRef.current;
    if (!dot || !ring || !wrap) return;

    // ── 1. Hide on touch devices ──────────────────────────────
    if (window.matchMedia("(hover: none)").matches) {
      wrap.style.display = "none";
      return;
    }

    // ── 2. Fast setters (avoids per-frame object creation) ───
    const setDotX  = gsap.quickSetter(dot,  "x", "px");
    const setDotY  = gsap.quickSetter(dot,  "y", "px");
    const setRingX = gsap.quickSetter(ring, "x", "px");
    const setRingY = gsap.quickSetter(ring, "y", "px");

    // ── 3. State ─────────────────────────────────────────────
    let mx = window.innerWidth  / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    const LERP = 0.10; // ring lag factor — lower = more lag

    // ── 4. Mouse tracker ─────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      setDotX(mx);
      setDotY(my);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // ── 5. Ticker: smooth ring lag at 60 fps ─────────────────
    const tick = () => {
      rx += (mx - rx) * LERP;
      ry += (my - ry) * LERP;
      setRingX(rx);
      setRingY(ry);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0); // disable lag smoothing for clean physics

    // ── 6. Hover helpers ─────────────────────────────────────
    const expand = () => {
      gsap.to(ring, {
        width: 56, height: 56,
        borderColor: "rgba(212,160,23,0.9)",
        background: "rgba(212,160,23,0.08)",
        duration: 0.35, ease: "expo.out",
      });
      gsap.to(dot, { opacity: 0, scale: 0, duration: 0.2 });
    };
    const collapse = () => {
      gsap.to(ring, {
        width: 36, height: 36,
        borderColor: "rgba(212,160,23,0.45)",
        background: "rgba(212,160,23,0)",
        duration: 0.5, ease: "expo.out",
      });
      gsap.to(dot, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(2)" });
    };
    const shrink = () => {
      gsap.to(ring, { width: 24, height: 24, duration: 0.2, ease: "expo.out" });
    };
    const reset = () => collapse();

    // ── 7. Bind interactive elements ─────────────────────────
    const selectors = "a, button, [role='button'], input, textarea, select, [data-cursor]";

    const attachAll = () => {
      document.querySelectorAll<HTMLElement>(selectors).forEach(el => {
        el.addEventListener("mouseenter", expand);
        el.addEventListener("mouseleave", collapse);
        el.addEventListener("mousedown",  shrink);
        el.addEventListener("mouseup",    reset);
      });
    };
    attachAll();

    // Re-attach after Next.js route changes (MutationObserver)
    const obs = new MutationObserver(attachAll);
    obs.observe(document.body, { childList: true, subtree: true });

    // ── 8. Hide cursor when it leaves the window ─────────────
    const onLeave  = () => gsap.to(wrap, { opacity: 0, duration: 0.3 });
    const onEnter  = () => gsap.to(wrap, { opacity: 1, duration: 0.3 });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(tick);
      obs.disconnect();
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div ref={wrapRef} aria-hidden="true" style={{ pointerEvents: "none", zIndex: 99999 }}>
      {/* ── Dot — instant follow ── */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 6, height: 6,
          borderRadius: "50%",
          background: "#D4A017",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          mixBlendMode: "normal",
        }}
      />

      {/* ── Ring — lagging follow ── */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 36, height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(212,160,23,0.45)",
          background: "rgba(212,160,23,0)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99998,
          willChange: "transform, width, height",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(0px)",
          transition: "border-color 0.15s",
        }}
      />
    </div>
  );
}
