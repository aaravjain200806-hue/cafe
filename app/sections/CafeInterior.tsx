"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Main Lounge" },
  { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80", alt: "Bar Area" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "Private Booth" },
  { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80", alt: "Roastery View" },
  { src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80", alt: "Outdoor Terrace" },
  { src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80", alt: "Coffee Lab" },
];

export default function CafeInterior() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;
    const ctx = gsap.context(() => {
      const items = gridRef.current!.querySelectorAll(".interior-item");
      gsap.from(items, { y: 60, opacity: 0, scale: 0.95, duration: 1, stagger: 0.1, ease: "expo.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 70%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="interior" ref={sectionRef} className="relative py-32 md:py-48 bg-luxury-darker overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase font-body mb-4 block">The Space</span>
          <h2 className="font-display text-4xl md:text-6xl text-luxury-cream">Architectural Sanctuary</h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={image.alt} className={`interior-item group relative overflow-hidden rounded-2xl img-zoom ${index === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}>
              <div className="w-full h-full min-h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${image.src})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-display text-xl text-luxury-cream">{image.alt}</h3>
                <div className="w-12 h-px bg-luxury-gold mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}