"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "@/app/components/GlassCard";
import { CoffeeItem } from "@/app/types";

const coffees: CoffeeItem[] = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    origin: "Gedeo Zone, Ethiopia",
    description: "Floral notes of jasmine and bergamot with a bright, wine-like acidity. Grown at 1,800-2,200m altitude.",
    price: "$48",
    notes: ["Jasmine", "Bergamot", "Citrus", "Honey"],
    intensity: 3,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
  },
  {
    id: "2",
    name: "Colombian Supremo",
    origin: "Huila, Colombia",
    description: "Rich caramel sweetness with nutty undertones and a smooth, balanced finish. The crown jewel of Colombian coffee.",
    price: "$38",
    notes: ["Caramel", "Nutty", "Chocolate", "Smooth"],
    intensity: 2,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
  },
  {
    id: "3",
    name: "Sumatra Mandheling",
    origin: "North Sumatra, Indonesia",
    description: "Full-bodied with earthy, herbal notes and low acidity. A bold experience for the adventurous palate.",
    price: "$42",
    notes: ["Earthy", "Herbal", "Dark Chocolate", "Spice"],
    intensity: 5,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
  },
  {
    id: "4",
    name: "Kenya AA",
    origin: "Nyeri, Kenya",
    description: "Bright and complex with blackcurrant and wine-like flavors. A true connoisseur's choice.",
    price: "$52",
    notes: ["Blackcurrant", "Wine", "Citrus", "Bright"],
    intensity: 4,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  },
];

export default function CoffeeCollection() {
  const [activeCoffee, setActiveCoffee] = useState<CoffeeItem>(coffees[0]);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="collection" ref={sectionRef} className="relative py-32 md:py-48 bg-luxury-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-espresso-900/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase font-body mb-4 block">Signature Collection</span>
          <h2 className="font-display text-4xl md:text-6xl text-luxury-cream">Rare & Exceptional</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCoffee.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative aspect-square rounded-3xl overflow-hidden glass"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110" style={{ backgroundImage: `url(${activeCoffee.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-darker/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                    <span className="text-luxury-gold text-2xl font-display">{activeCoffee.price}</span>
                    <span className="text-luxury-cream/40 text-sm ml-2">/ 250g</span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute -inset-4 border border-luxury-gold/10 rounded-3xl pointer-events-none" />
          </div>

          <div className="space-y-6">
            {coffees.map((coffee, index) => (
              <GlassCard key={coffee.id} delay={index * 0.1} className={`cursor-pointer transition-all duration-500 ${activeCoffee.id === coffee.id ? "border-luxury-gold/40 bg-white/5" : "hover:border-luxury-gold/20"}`} hoverEffect={false}>
                <button onClick={() => setActiveCoffee(coffee)} className="w-full text-left">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl text-luxury-cream mb-1">{coffee.name}</h3>
                      <p className="text-xs text-luxury-gold/70 tracking-wider uppercase">{coffee.origin}</p>
                    </div>
                    <span className="font-display text-lg text-luxury-gold">{coffee.price}</span>
                  </div>
                  <p className="text-sm text-luxury-cream/60 leading-relaxed mb-4">{coffee.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {coffee.notes.map((note) => (
                      <span key={note} className="px-3 py-1 rounded-full text-xs border border-luxury-gold/20 text-luxury-gold/80">{note}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-xs text-luxury-cream/40 uppercase tracking-wider">Intensity</span>
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-gradient-to-r from-luxury-gold to-luxury-goldLight" initial={{ width: 0 }} animate={{ width: activeCoffee.id === coffee.id ? `${(coffee.intensity / 5) * 100}%` : 0 }} transition={{ duration: 0.8, ease: "easeOut" }} />
                    </div>
                  </div>
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}