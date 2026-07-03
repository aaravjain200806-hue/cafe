"use client";

import { useState } from "react";

// ── Replace with your real restaurant page URLs ───────────────────────────
const ZOMATO_URL = "https://www.zomato.com/search?q=the+messy+door";
const SWIGGY_URL = "https://www.swiggy.com/";
// ─────────────────────────────────────────────────────────────────────────

type Category = "Coffee & Drinks" | "All-Day Breakfast" | "Continental" | "Fast Food" | "Indian Bites" | "Desserts";

interface Item {
  name: string;
  desc: string;
  price: string;
  veg: boolean;
  tag?: string;
  img: string;
}

const menu: Record<Category, Item[]> = {
  "Coffee & Drinks": [
    { name: "Messy Cold Brew", desc: "18-hr steeped Arabica on ice with a hint of vanilla", price: "₹199", veg: true, tag: "☕ Must Try", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80" },
    { name: "Hazelnut Latte", desc: "Double espresso, steamed milk & house hazelnut syrup", price: "₹179", veg: true, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" },
    { name: "Mango Chilli Cooler", desc: "Fresh mango, chilli salt, lemon & sparkling water", price: "₹159", veg: true, tag: "🌶 Signature", img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&q=80" },
    { name: "Masala Chai Latte", desc: "Spiced Indian chai blended with steamed oat milk", price: "₹139", veg: true, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80" },
  ],
  "All-Day Breakfast": [
    { name: "Eggs Benedict", desc: "Poached eggs, ham, hollandaise on sourdough", price: "₹299", veg: false, tag: "🔥 Bestseller", img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80" },
    { name: "Avocado Toast", desc: "Smashed avo, cherry tomatoes, feta & micro herbs", price: "₹259", veg: true, img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80" },
    { name: "Masala Omelette Wrap", desc: "Spiced egg omelette, onions, coriander in a whole wheat wrap", price: "₹179", veg: false, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" },
    { name: "Pancake Stack", desc: "Fluffy buttermilk pancakes, maple syrup & seasonal fruit", price: "₹239", veg: true, tag: "🥞 Fan Fav", img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80" },
  ],
  "Continental": [
    { name: "Truffle Mushroom Pasta", desc: "Pappardelle, wild mushrooms, truffle oil & aged parmesan", price: "₹429", veg: true, tag: "🍝 Chef's Pick", img: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=400&q=80" },
    { name: "Chicken Alfredo", desc: "Creamy white sauce pasta with grilled chicken & herbs", price: "₹399", veg: false, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80" },
    { name: "Veggie Quesadilla", desc: "Grilled veggies, cheddar & chipotle mayo in a flour tortilla", price: "₹279", veg: true, img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80" },
    { name: "Mac & Cheese (Loaded)", desc: "Creamy mac, breadcrumb crust, jalapeños & bacon bits", price: "₹319", veg: false, tag: "🔥 Bestseller", img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400&q=80" },
  ],
  "Fast Food": [
    { name: "Messy Smash Burger", desc: "Double smash patty, secret sauce, caramelised onions, brioche bun", price: "₹349", veg: false, tag: "🏆 #1 Rated", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
    { name: "Crispy Veg Burger", desc: "Crunchy chickpea patty, coleslaw, avocado, sriracha mayo", price: "₹299", veg: true, img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80" },
    { name: "Loaded Fries", desc: "Crispy fries piled with pulled chicken, cheese & jalapeños", price: "₹229", veg: false, tag: "😍 Crowd Pleaser", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" },
    { name: "Nachos Grande", desc: "Corn chips, refried beans, salsa, jalapeños, sour cream", price: "₹249", veg: true, img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80" },
  ],
  "Indian Bites": [
    { name: "Paneer Tikka Skewers", desc: "Tandoor-grilled paneer, bell peppers & mint chutney", price: "₹269", veg: true, tag: "🌟 Chef's Pick", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80" },
    { name: "Butter Chicken Bowl", desc: "Silky tomato-cream curry, jeera rice & laccha paratha", price: "₹329", veg: false, tag: "🇮🇳 Indian Soul", img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80" },
    { name: "Dal Makhani Platter", desc: "Slow-cooked black lentils, butter rice & toasted naan", price: "₹279", veg: true, img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80" },
    { name: "Samosa Chaat", desc: "Crispy samosa, yoghurt, tamarind chutney & sev", price: "₹149", veg: true, tag: "🌶 Street Vibes", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
  ],
  "Desserts": [
    { name: "Belgian Waffle", desc: "Crispy waffle, Nutella, banana & vanilla ice cream", price: "₹269", veg: true, tag: "🔥 Bestseller", img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&q=80" },
    { name: "Gulab Jamun Cheesecake", desc: "NY cheesecake swirled with warm gulab jamun compote", price: "₹249", veg: true, tag: "🌟 Signature", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80" },
    { name: "Brownie Sundae", desc: "Warm fudge brownie, vanilla scoop & sea-salted caramel", price: "₹219", veg: true, img: "https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=400&q=80" },
    { name: "Mango Kulfi", desc: "Alphonso mango kulfi, pistachio & rose petals", price: "₹149", veg: true, img: "https://images.unsplash.com/photo-1629385701021-fcd29d9b4b6e?w=400&q=80" },
  ],
};

const categories = Object.keys(menu) as Category[];

export default function FoodMenu() {
  const [active, setActive] = useState<Category>("Coffee & Drinks");

  return (
    <section id="menu" className="relative py-24 md:py-40 overflow-hidden" style={{ background: "#1a150f" }}>
      {/* BG blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-boho-terra/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-boho-mustard/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-hand text-boho-terra text-2xl mb-2">What's Cooking</p>
          <h2 className="font-display text-4xl md:text-6xl text-boho-cream mb-3">
            Our Menu
          </h2>
          <p className="text-boho-cream/50 font-body text-sm max-w-lg mx-auto">
            From your first sip to the last bite — something for every mood, every time of day.
          </p>

          {/* Order CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href={ZOMATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg viewBox="0 0 24 24" fill="none" width="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12h8M12 8v8" strokeLinecap="round"/>
              </svg>
              Order on Zomato
            </a>
            <a
              href={SWIGGY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <svg viewBox="0 0 24 24" fill="none" width="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0z"/>
                <path d="M12 9v3l2 2"/>
              </svg>
              Order on Swiggy
            </a>
          </div>
        </div>

        {/* Category tabs — scrollable on mobile */}
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide justify-start lg:justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-boho-terra text-boho-cream shadow-lg scale-105"
                  : "border border-boho-cream/10 text-boho-cream/55 hover:border-boho-terra/40 hover:text-boho-terra"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {menu[active].map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl overflow-hidden border border-boho-cream/5 hover:border-boho-terra/30 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl"
              style={{ background: "rgba(61,43,31,0.55)", backdropFilter: "blur(12px)" }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-boho-charcoal/60 via-transparent to-transparent" />

                {/* Veg / Non-veg indicator */}
                <span
                  className={`absolute top-3 right-3 w-5 h-5 rounded-sm border-2 flex items-center justify-center ${
                    item.veg
                      ? "border-green-500 bg-green-500/15"
                      : "border-red-500 bg-red-500/15"
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${item.veg ? "bg-green-500" : "bg-red-500"}`} />
                </span>

                {item.tag && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-boho-charcoal/70 text-boho-mustard text-[10px] font-bold backdrop-blur-sm border border-boho-mustard/20">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-boho-cream text-sm leading-snug flex-1 mr-2">
                    {item.name}
                  </h3>
                  <span className="text-boho-mustard font-bold text-sm shrink-0">{item.price}</span>
                </div>
                <p className="text-boho-cream/45 text-xs leading-relaxed mb-4">{item.desc}</p>

                {/* Order buttons */}
                <div className="flex gap-2">
                  <a
                    href={ZOMATO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center" as const,
                      padding: "6px 0",
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      border: "1px solid rgba(212,160,23,0.2)",
                      color: "rgba(212,160,23,0.7)",
                      background: "rgba(212,160,23,0.04)",
                      transition: "all 0.2s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(212,160,23,0.12)";
                      e.currentTarget.style.color = "rgba(212,160,23,1)";
                      e.currentTarget.style.borderColor = "rgba(212,160,23,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(212,160,23,0.04)";
                      e.currentTarget.style.color = "rgba(212,160,23,0.7)";
                      e.currentTarget.style.borderColor = "rgba(212,160,23,0.2)";
                    }}
                  >
                    Zomato
                  </a>
                  <a
                    href={SWIGGY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center" as const,
                      padding: "6px 0",
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      border: "1px solid rgba(253,246,227,0.1)",
                      color: "rgba(253,246,227,0.45)",
                      background: "transparent",
                      transition: "all 0.2s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(253,246,227,0.05)";
                      e.currentTarget.style.color = "rgba(253,246,227,0.85)";
                      e.currentTarget.style.borderColor = "rgba(253,246,227,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(253,246,227,0.45)";
                      e.currentTarget.style.borderColor = "rgba(253,246,227,0.1)";
                    }}
                  >
                    Swiggy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-boho-cream/25 text-xs mt-10 font-body">
          Full menu available on Zomato &amp; Swiggy · Prices inclusive of taxes · Menu may vary seasonally
        </p>
      </div>
    </section>
  );
}
