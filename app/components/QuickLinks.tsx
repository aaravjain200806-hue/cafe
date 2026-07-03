"use client";

import { useState } from "react";
import MagneticElement from "@/app/components/MagneticElement";

// ══════════════════════════════════════════════════════════
//  Replace these with your real links
// ══════════════════════════════════════════════════════════
const ZOMATO_URL      = "https://www.zomato.com/search?q=the+messy+door";
const SWIGGY_URL      = "https://www.swiggy.com/";
const ZOMATO_BOOK_URL = "https://www.zomato.com/book-a-table";
const INSTAGRAM_URL   = "https://www.instagram.com/";
const FACEBOOK_URL    = "https://www.facebook.com/";
const WHATSAPP_NO     = "919876543210";
const PHONE           = "tel:+919876543210";
const MAPS_URL        = "https://maps.google.com/?q=The+Messy+Door+cafe";
// ══════════════════════════════════════════════════════════

// ── Monochrome SVG icons ─────────────────────────────────
const ZomatoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 shrink-0" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8M12 8v8" strokeLinecap="round" />
  </svg>
);
const SwiggyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 shrink-0" stroke="currentColor" strokeWidth="2">
    <path d="M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0z" />
    <path d="M12 9v3l2 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 shrink-0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 shrink-0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const TableIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 shrink-0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M3 12h18M8 18h8"/>
  </svg>
);

interface ActionItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  target: string | undefined;
}

const actions: ActionItem[] = [
  { id: "zomato",    label: "Order · Zomato",    href: ZOMATO_URL,                                                  icon: <ZomatoIcon />,    target: "_blank" },
  { id: "swiggy",   label: "Order · Swiggy",    href: SWIGGY_URL,                                                  icon: <SwiggyIcon />,    target: "_blank" },
  { id: "book",     label: "Book a Table",       href: ZOMATO_BOOK_URL,                                             icon: <TableIcon />,     target: "_blank" },
  { id: "whatsapp", label: "WhatsApp",           href: `https://wa.me/${WHATSAPP_NO}?text=Hello%20The%20Messy%20Door!`, icon: <WhatsAppIcon />, target: "_blank" },
  { id: "insta",    label: "Instagram",          href: INSTAGRAM_URL,                                               icon: <InstagramIcon />, target: "_blank" },
  { id: "fb",       label: "Facebook",           href: FACEBOOK_URL,                                                icon: <FacebookIcon />,  target: "_blank" },
  { id: "call",     label: "Call Us",            href: PHONE,                                                       icon: <PhoneIcon />,     target: undefined },
  { id: "map",      label: "Directions",         href: MAPS_URL,                                                    icon: <MapPinIcon />,    target: "_blank" },
];

export default function QuickLinks() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ─────────────────────────────────────────────────
          INLINE STRIP — right below the hero
      ───────────────────────────────────────────────── */}
      <section
        id="quick-links"
        className="relative border-y"
        style={{
          background: "#16120e",
          borderColor: "rgba(212,160,23,0.1)",
          padding: "20px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p
            className="text-center font-body mb-4"
            style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(212,160,23,0.5)" }}
          >
            Order · Connect · Visit
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {actions.map((a) => (
              <a
                key={a.id}
                href={a.href}
                target={a.target}
                rel={a.target ? "noopener noreferrer" : undefined}
                className="btn-platform"
              >
                {a.icon}
                <span>{a.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          FLOATING QUICK-LINKS PANEL — bottom-right
      ───────────────────────────────────────────────── */}
      <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end gap-2.5">
        {/* Expanded panel */}
        <div
          className="flex flex-col items-end gap-1.5 transition-all duration-300 origin-bottom-right"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0) scale(1)" : "translateY(8px) scale(0.97)",
            pointerEvents: open ? "auto" : "none",
            marginBottom: "4px",
          }}
        >
          <div
            className="rounded-lg border p-3 flex flex-col gap-1.5 min-w-[180px]"
            style={{
              background: "#1a1510",
              borderColor: "rgba(212,160,23,0.15)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
            }}
          >
            <p
              className="text-center font-body mb-1"
              style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(212,160,23,0.4)" }}
            >
              Quick Actions
            </p>
            {actions.map((a) => (
              <a
                key={a.id}
                href={a.href}
                target={a.target}
                rel={a.target ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 12px",
                  borderRadius: 4,
                  fontSize: 12,
                  fontWeight: 450,
                  letterSpacing: "0.04em",
                  color: "rgba(253,246,227,0.65)",
                  border: "1px solid transparent",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212,160,23,0.07)";
                  e.currentTarget.style.borderColor = "rgba(212,160,23,0.2)";
                  e.currentTarget.style.color = "rgba(253,246,227,0.95)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.color = "rgba(253,246,227,0.65)";
                }}
              >
                {a.icon}
                {a.label}
              </a>
            ))}
          </div>
        </div>

        {/* Toggle button (three lines / close) */}
        <MagneticElement strength={0.3}>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Quick links"
            style={{
              width: 44,
              height: 44,
              borderRadius: 6,
              border: "1px solid rgba(212,160,23,0.3)",
              background: open ? "rgba(212,160,23,0.15)" : "#1a1510",
              color: "rgba(212,160,23,0.9)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            {open ? (
              <svg viewBox="0 0 16 16" fill="none" width="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M2 2l12 12M14 2L2 14"/>
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" fill="none" width="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 8h12M2 4h12M2 12h12"/>
              </svg>
            )}
          </button>
        </MagneticElement>
      </div>
    </>
  );
}
