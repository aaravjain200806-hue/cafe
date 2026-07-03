"use client";

// ── Update these with your real details ─────────────────────────────────────
const PHONE        = "+91 98765 43210";
const PHONE_TEL    = "tel:+919876543210";
const WHATSAPP_NO  = "919876543210";
const EMAIL        = "hello@themessydoor.in";
const ADDRESS1     = "No. 45, 12th Main, Indiranagar";
const ADDRESS2     = "Bengaluru, Karnataka – 560038";
const HOURS        = "Mon–Sun  8:00 AM – 11:00 PM";
const MAPS_URL     = "https://maps.google.com/?q=The+Messy+Door+Indiranagar+Bengaluru";
const MAPS_EMBED   = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56659553306!2d77.4908527!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin";
// ─────────────────────────────────────────────────────────────────────────────

export default function Location() {
  return (
    <section
      id="location"
      className="relative py-20 md:py-36 overflow-hidden"
      style={{ background: "#231e19" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-boho-terra/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-hand text-boho-terra text-2xl mb-2">📍 Come Find Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-boho-cream">
            We&apos;re Right Around the Corner
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Info cards */}
          <div className="space-y-5">
            {/* Address */}
            <div className="boho-card p-6">
              <p className="text-boho-terra text-xs font-bold tracking-widest uppercase mb-3">📍 Address</p>
              <p className="text-boho-cream font-display text-lg">{ADDRESS1}</p>
              <p className="text-boho-cream/60 font-body text-sm mt-1">{ADDRESS2}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-boho-mustard text-sm hover:text-boho-terra transition-colors font-body"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Hours */}
            <div className="boho-card p-6">
              <p className="text-boho-terra text-xs font-bold tracking-widest uppercase mb-3">🕐 Hours</p>
              <p className="text-boho-cream font-body text-base">{HOURS}</p>
              <p className="text-boho-cream/40 text-xs mt-2">Kitchen closes at 10:30 PM</p>
            </div>

            {/* Contact actions */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PHONE_TEL}
                className="boho-card p-5 flex flex-col items-center gap-2 text-center hover:border-boho-terra/40 cursor-pointer"
              >
                <span className="text-2xl">📞</span>
                <span className="text-boho-cream font-body text-sm font-medium">Call Us</span>
                <span className="text-boho-cream/40 text-xs">{PHONE}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NO}?text=Hi%20The%20Messy%20Door!`}
                target="_blank"
                rel="noopener noreferrer"
                className="boho-card p-5 flex flex-col items-center gap-2 text-center hover:border-[#25D366]/40 cursor-pointer"
              >
                <span className="text-2xl">💬</span>
                <span className="text-boho-cream font-body text-sm font-medium">WhatsApp</span>
                <span className="text-boho-cream/40 text-xs">Chat with us</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="boho-card p-5 flex flex-col items-center gap-2 text-center hover:border-boho-mustard/40 cursor-pointer col-span-2"
              >
                <span className="text-2xl">✉️</span>
                <span className="text-boho-cream font-body text-sm font-medium">{EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded map */}
          <div className="rounded-3xl overflow-hidden border border-boho-cream/8 shadow-2xl min-h-[360px]">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ minHeight: "360px", border: 0, filter: "saturate(0.7) brightness(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Messy Door location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}