import React from 'react';

export default function SwiggyWidget() {
  // Replace the src URL with your actual Swiggy widget embed URL or restaurant ID.
  const src = 'https://www.swiggy.com/widgets/embed?restaurantId=YOUR_RESTAURANT_ID';
  return (
    <div className="glass-strong p-4 rounded-lg my-8 max-w-3xl mx-auto">
      <h2 className="text-xl text-gradient-gold mb-2">Order via Swiggy</h2>
      <iframe
        src={src}
        title="Swiggy widget"
        width="100%"
        height="400"
        style={{ border: 'none' }}
        loading="lazy"
      />
    </div>
  );
}
