"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  trigger?: string; // CSS selector or "self"
  stagger?: number;
  splitBy?: "words" | "chars";
}

/**
 * SplitTextReveal
 * ──────────────────────────────────────────────────────────────────
 * Splits text into words or chars and animates each one with
 * a clip-path + Y translate reveal — the "luxury title reveal"
 * seen on premium agency / MNC sites.
 *
 * Each word/char slides up from behind a hidden overflow container,
 * staggered to produce a flowing wave effect.
 * ──────────────────────────────────────────────────────────────────
 */
export default function SplitTextReveal({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.04,
  splitBy = "words",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  // Split on mount
  const tokens = splitBy === "chars"
    ? text.split("")
    : text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>(".split-token");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          delay,
          stagger,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, stagger]);

  const Component = Tag as React.ElementType;

  return (
    <Component ref={ref} className={className} aria-label={text}>
      {tokens.map((token, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            // For chars: no extra space; for words: add trailing space
            marginRight: splitBy === "words" && i < tokens.length - 1 ? "0.25em" : 0,
            verticalAlign: "bottom",
          }}
        >
          <span
            className="split-token"
            style={{ display: "inline-block", opacity: 0 }}
          >
            {token === " " ? "\u00A0" : token}
          </span>
        </span>
      ))}
    </Component>
  );
}
