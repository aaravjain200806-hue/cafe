"use client";

// ── Replace with your Instagram handle ──────────────────────────────────────
const INSTAGRAM_URL = "https://www.instagram.com/";
// ─────────────────────────────────────────────────────────────────────────────

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500&q=80", alt: "Cafe vibe", span: "col-span-1 row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=500&q=80", alt: "Breakfast plate", span: "col-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80", alt: "Coffee art", span: "col-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80", alt: "Interior", span: "col-span-2" },
  { id: 5, src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80", alt: "Burger", span: "col-span-1" },
  { id: 6, src: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&q=80", alt: "Waffle dessert", span: "col-span-1" },
];

export default function InstagramGallery() {
  return (
    <section
      id="vibes"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "#1a150f" }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-boho-mustard/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-hand text-boho-terra text-2xl mb-2">📸 The Gram</p>
          <h2 className="font-display text-4xl md:text-5xl text-boho-cream">
            Vibes &amp; Moments
          </h2>
          <p className="text-boho-cream/45 text-sm mt-3 font-body">
            Tag us{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-boho-mustard hover:text-boho-terra transition-colors"
            >
              @themessydoor
            </a>{" "}
            and we might feature you here!
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[520px]">
          {photos.map((p) => (
            <a
              key={p.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${p.span} group relative rounded-2xl overflow-hidden`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-boho-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl">📸</span>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram follow button */}
        <div className="text-center mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
            Follow @themessydoor on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}