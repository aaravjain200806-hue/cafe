"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Update these ─────────────────────────────────────────────────────────────
const INSTAGRAM_URL   = "https://www.instagram.com/";
const FACEBOOK_URL    = "https://www.facebook.com/";
const ZOMATO_URL      = "https://www.zomato.com/search?q=the+messy+door";
const SWIGGY_URL      = "https://www.swiggy.com/";
const WHATSAPP_NO     = "919876543210";
const PHONE_TEL       = "tel:+919876543210";
const PHONE_DISPLAY   = "+91 98765 43210";
const MAPS_URL        = "https://maps.google.com/?q=The+Messy+Door";
const ADDRESS1        = "No. 45, 12th Main, Indiranagar";
const ADDRESS2        = "Bengaluru, Karnataka – 560038";
// ─────────────────────────────────────────────────────────────────────────────

const socials = [
  {
    name: "Instagram",
    href: INSTAGRAM_URL,
    label: "@themessydoor",
    color: "hover:text-[#E1306C]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: FACEBOOK_URL,
    label: "The Messy Door",
    color: "hover:text-[#1877F2]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Zomato",
    href: ZOMATO_URL,
    label: "Order / Review",
    color: "hover:text-[#E23744]",
    svg: <span className="font-black text-base">Z</span>,
  },
  {
    name: "Swiggy",
    href: SWIGGY_URL,
    label: "Order Online",
    color: "hover:text-[#FC8019]",
    svg: <span className="font-black text-base">S</span>,
  },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".foot-col", {
        y: 36, opacity: 0, duration: 0.9, stagger: 0.1, ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={ref}
      className="relative pt-20 pb-10 border-t overflow-hidden"
      style={{ background: "#100d09", borderColor: "rgba(212,160,23,0.12)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-boho-terra/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand col */}
          <div className="foot-col lg:col-span-2">
            <p className="font-hand text-4xl text-boho-cream mb-1">The Messy Door</p>
            <p className="text-boho-mustard text-xs tracking-widest uppercase font-body mb-5">Cafe &amp; Bistro · Bengaluru</p>
            <p className="text-boho-cream/50 font-body text-sm leading-relaxed mb-8 max-w-sm">
              A bohemian neighbourhood spot for artisan coffee, continental plates, fast food bites and good vibes. No dress code. Just good food.
            </p>

            {/* Order buttons */}
            <div className="flex flex-wrap gap-2 mt-2">
              <a href={ZOMATO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "9px 18px", fontSize: 12 }}>
                <svg viewBox="0 0 24 24" fill="none" width="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12h8M12 8v8"/>
                </svg>
                Zomato
              </a>
              <a href={SWIGGY_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "9px 18px", fontSize: 12 }}>
                <svg viewBox="0 0 24 24" fill="none" width="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0z"/>
                  <path d="M12 9v3l2 2"/>
                </svg>
                Swiggy
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ padding: "9px 18px", fontSize: 12 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="13">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="foot-col">
            <h4 className="font-display text-boho-cream text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                ["Our Story", "#story"],
                ["Menu", "#menu"],
                ["Vibes", "#vibes"],
                ["Reviews", "#reviews"],
                ["Find Us", "#location"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); }}
                    className="text-boho-cream/45 hover:text-boho-mustard transition-colors text-sm font-body"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="foot-col">
            <h4 className="font-display text-boho-cream text-lg mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-boho-cream/45 font-body">
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-boho-mustard transition-colors">
                  <span className="mt-0.5">📍</span>
                  <span>{ADDRESS1}<br />{ADDRESS2}</span>
                </a>
              </li>
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-boho-terra transition-colors">
                  <span>📞</span> {PHONE_DISPLAY}
                </a>
              </li>
            </ul>

            {/* Social icon row */}
            <div className="flex flex-wrap gap-2 mt-5">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" title={s.name} className="btn-icon">
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-boho-cream/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-boho-cream/20 font-body tracking-wide">
            &copy; {new Date().getFullYear()} The Messy Door. Made with ❤️ in Bengaluru.
          </p>
          <p className="font-hand text-boho-mustard/40 text-sm">A little messy, a lot delicious.</p>
        </div>
      </div>
    </footer>
  );
}