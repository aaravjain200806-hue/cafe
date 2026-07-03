import React from 'react';

export default function ZomatoWidget() {
  // Replace the src URL with your actual Zomato widget embed URL or restaurant ID.
  const src = 'https://www.zomato.com/widgets/embed?type=restaurant&res_id=YOUR_RESTAURANT_ID';
  return (
    <div className="glass-strong p-4 rounded-lg my-8 max-w-3xl mx-auto">
      <h2 className="text-xl text-gradient-gold mb-2">Our Zomato Reviews</h2>
      <iframe
        src={src}
        title="Zomato widget"
        width="100%"
        height="400"
        style={{ border: 'none' }}
        loading="lazy"
      />
    </div>
  );
}
