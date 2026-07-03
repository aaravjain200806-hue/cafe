"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "2018", label: "Est." },
  { value: "4.7★", label: "Zomato" },
  { value: "50+", label: "Menu items" },
  { value: "∞", label: "Good vibes" },
];

const milestones = [
  {
    year: "2018",
    heading: "A door that was never meant to be tidy",
    body: "Started as a tiny 12-seat cafe tucked in a bylane, The Messy Door was born from the idea that great food doesn't need a dress code.",
  },
  {
    year: "2020",
    heading: "The bistro grows up",
    body: "We added an open kitchen, a full coffee bar, and our now-legendary continental menu — mac & cheese, wood-fired pastas, loaded fries, and more.",
  },
  {
    year: "2022",
    heading: "City's favourite pit-stop",
    body: "Rated top neighbourhood bistro on Zomato. Featured in Times Food Guide, local food blogs, and more reels than we can count.",
  },
  {
    year: "Today",
    heading: "Same messy soul, bigger table",
    body: "Dine in, order via Swiggy & Zomato, or just walk through our door. You're always welcome here.",
  },
];

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".story-text", {
        y: 40, opacity: 0, duration: 0.9, stagger: 0.15, ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      });
      gsap.from(".story-img", {
        scale: 1.12, opacity: 0, duration: 1.4, ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
      });
      gsap.from(".mile-item", {
        x: -24, opacity: 0, duration: 0.7, stagger: 0.12, ease: "expo.out",
        scrollTrigger: { trigger: ".milestones", start: "top 70%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden"
      style={{ background: "#231e19" }}
    >
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-boho-terra/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-72 h-72 bg-boho-mustard/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="text-center mb-16 story-text">
          <p className="font-hand text-boho-terra text-2xl mb-2">Our Story</p>
          <h2 className="font-display text-4xl md:text-6xl text-boho-cream leading-tight">
            A little messy,<br />
            <span className="text-messy-gold italic">a lot delicious.</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: image + stats */}
          <div>
            <div className="story-img aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="The Messy Door interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-boho-charcoal/70 via-transparent to-transparent" />
              {/* Floating tag */}
              <div className="absolute bottom-6 left-6 glass-dark rounded-2xl px-5 py-4">
                <span className="font-hand text-boho-mustard text-xl">Where good food lives 🍽</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="story-text grid grid-cols-4 gap-3 mt-6">
              {stats.map((s) => (
                <div key={s.label} className="boho-card text-center p-4">
                  <span className="block font-display text-2xl text-boho-terra">{s.value}</span>
                  <span className="text-[10px] tracking-widest uppercase text-boho-cream/40 mt-0.5 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: copy + timeline */}
          <div className="space-y-8 lg:pt-6">
            <div className="story-text space-y-4 text-boho-cream/65 leading-relaxed font-body text-base">
              <p>
                We're <strong className="text-boho-cream/90">The Messy Door</strong> — a bohemian Indian cafe and bistro
                where artisanal coffee meets continental comfort food. No white-tablecloth pretence, just
                honest flavours in a space that feels like someone's very cool living room.
              </p>
              <p>
                From slow-brewed cold coffees to wood-fired pastas, loaded burgers and street-inspired
                Indian bites — our menu is a love letter to every cuisine we grew up with.
              </p>
            </div>

            {/* Timeline */}
            <div className="milestones space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="mile-item flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="shrink-0 w-14 text-center px-2 py-1 rounded-lg bg-boho-terra/15 border border-boho-terra/20 text-boho-terra text-xs font-bold">
                      {m.year}
                    </span>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-boho-terra/15 mt-2 min-h-[28px]" />
                    )}
                  </div>
                  <div className="pb-5">
                    <h4 className="font-display text-boho-cream text-sm mb-1">{m.heading}</h4>
                    <p className="text-boho-cream/45 text-xs leading-relaxed">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}