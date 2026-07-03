"use client";

import { useState, useEffect } from "react";
import MagneticElement from "@/app/components/MagneticElement";

const ZOMATO_URL = "https://www.zomato.com/search?q=the+messy+door";
const PHONE      = "tel:+919876543210";

const navItems = [
  { label: "Our Story", href: "#story"    },
  { label: "Menu",      href: "#menu"     },
  { label: "Vibes",     href: "#vibes"    },
  { label: "Reviews",   href: "#reviews"  },
  { label: "Find Us",   href: "#location" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Top bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-4 lg:mx-auto lg:max-w-6xl transition-all duration-500 ${
            isScrolled
              ? "glass-dark rounded-xl px-5 py-3 shadow-2xl"
              : "px-6"
          }`}
        >
          <div className="flex items-center justify-between">

            {/* ── Logo ── */}
            <MagneticElement strength={0.2}>
              <a href="#" className="flex flex-col leading-none">
                <span className="font-hand text-2xl md:text-3xl font-bold text-boho-cream leading-none">
                  The Messy Door
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-boho-mustard font-body">
                  Cafe &amp; Bistro
                </span>
              </a>
            </MagneticElement>

            {/* ── Desktop nav items ── */}
            <div className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <MagneticElement key={item.href} strength={0.25}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="relative text-sm tracking-wide text-boho-cream/60 hover:text-boho-cream transition-colors duration-300 font-body group py-1"
                  >
                    {item.label}
                    {/* Animated underline */}
                    <span
                      className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-500 ease-out"
                      style={{ background: "rgba(212,160,23,0.7)" }}
                    />
                  </button>
                </MagneticElement>
              ))}
            </div>

            {/* ── Desktop CTAs ── */}
            <div className="hidden lg:flex items-center gap-2.5">
              <MagneticElement strength={0.2}>
                <a href={PHONE} className="btn-ghost" style={{ padding: "8px 16px", fontSize: 12 }}>
                  <svg viewBox="0 0 24 24" fill="none" width="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call
                </a>
              </MagneticElement>
              <MagneticElement strength={0.2}>
                <a
                  href={ZOMATO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "8px 18px", fontSize: 12 }}
                >
                  Order Now
                </a>
              </MagneticElement>
            </div>

            {/* ── Mobile hamburger ── */}
            <MagneticElement strength={0.3}>
              <button
                className="lg:hidden p-2.5 rounded-md border border-boho-cream/10 text-boho-cream/70 hover:text-boho-cream hover:border-boho-cream/25 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className="block transition-all duration-300"
                  style={{ lineHeight: 1 }}
                >
                  {isMenuOpen ? (
                    <svg viewBox="0 0 16 16" fill="none" width="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M2 2l12 12M14 2L2 14"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" fill="none" width="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M2 4h12M2 8h12M2 12h12"/>
                    </svg>
                  )}
                </span>
              </button>
            </MagneticElement>
          </div>
        </div>
      </nav>

      {/* ── Mobile fullscreen menu ── */}
      <div
        className="fixed inset-0 z-40 backdrop-blur-2xl transition-all duration-500"
        style={{
          background: "rgba(16,13,9,0.97)",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-boho-terra/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-boho-mustard/6 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center justify-center h-full gap-6">
          <span className="font-hand text-4xl text-boho-mustard mb-4">The Messy Door</span>

          {navItems.map((item, i) => (
            <div
              key={item.href}
              style={{
                transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMenuOpen ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07 + 0.1}s`,
              }}
            >
              <button
                onClick={() => scrollTo(item.href)}
                className="font-display text-4xl md:text-5xl text-boho-cream/80 hover:text-boho-cream transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 group-hover:w-full transition-all duration-500 bg-boho-mustard/50" />
              </button>
            </div>
          ))}

          <div
            className="flex gap-3 mt-6"
            style={{
              transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isMenuOpen ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.16,1,0.3,1) 0.45s",
            }}
          >
            <a href={PHONE} className="btn-ghost" style={{ padding: "10px 20px" }}>
              <svg viewBox="0 0 24 24" fill="none" width="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Us
            </a>
            <a href={ZOMATO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "10px 20px" }}>
              Order on Zomato
            </a>
          </div>
        </div>
      </div>
    </>
  );
}