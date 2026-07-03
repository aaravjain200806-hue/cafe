"use client";

const ZOMATO_REVIEW_URL = "https://www.zomato.com/search?q=the+messy+door"; // link to your Zomato page

const reviews = [
  {
    name: "Priya S.",
    platform: "Zomato",
    rating: 5,
    text: "Honestly the best smash burger I've had outside a fine-dine. Loved the cold brew too. The vibe is super chill — feels like someone's really cool living room.",
    avatar: "P",
    color: "#E23744",
  },
  {
    name: "Rahul M.",
    platform: "Google",
    rating: 5,
    text: "The Messy Door is my go-to whenever I need a good meal that doesn't break the bank. Paneer tikka + hazelnut latte is the perfect combo. 10/10 every time.",
    avatar: "R",
    color: "#4285F4",
  },
  {
    name: "Aanya K.",
    platform: "Instagram",
    rating: 5,
    text: "Came for the waffles, stayed for the vibes. Every corner is so Instagram-worthy. The staff is super warm and the food comes fast. Absolute fav spot in Indiranagar!",
    avatar: "A",
    color: "#fd1d1d",
  },
  {
    name: "Dev P.",
    platform: "Zomato",
    rating: 5,
    text: "Ordered truffle mushroom pasta on Zomato — arrived hot and fresh. The flavours were restaurant-quality. Will definitely order again. Highly recommend!",
    avatar: "D",
    color: "#E23744",
  },
  {
    name: "Sana R.",
    platform: "Google",
    rating: 5,
    text: "Mac & cheese is absolutely loaded — the jalapeños give it just the right kick. The gulab jamun cheesecake is a MUST. Such a unique place with genuine heart.",
    avatar: "S",
    color: "#4285F4",
  },
  {
    name: "Kabir A.",
    platform: "Swiggy",
    rating: 5,
    text: "Fast delivery, hot food, and honest flavours. The samosa chaat is street food at its best. Love that they have everything from desi to continental.",
    avatar: "K",
    color: "#FC8019",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative py-20 md:py-36 overflow-hidden"
      style={{ background: "#1a150f" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-boho-burgundy/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-hand text-boho-terra text-2xl mb-2">What Our Guests Say</p>
          <h2 className="font-display text-4xl md:text-5xl text-boho-cream">
            Real Reviews, Real Love ❤️
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((s) => (
                <span key={s} className="text-boho-mustard text-lg">★</span>
              ))}
            </div>
            <span className="text-boho-cream/50 font-body text-sm">4.7 average · 500+ reviews</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="boho-card p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                  style={{ background: r.color }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="text-boho-cream font-body text-sm font-semibold">{r.name}</p>
                  <p className="text-boho-cream/35 text-xs">{r.platform}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} className="text-boho-mustard text-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-boho-cream/60 font-body text-sm leading-relaxed italic">
                &ldquo;{r.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={ZOMATO_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg viewBox="0 0 24 24" fill="none" width="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12h8M12 8v8"/>
            </svg>
            Rate Us on Zomato
          </a>
        </div>
      </div>
    </section>
  );
}