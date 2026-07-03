import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Messy Door | Cafe & Bistro · Bengaluru",
  description:
    "A bohemian Indian cafe & bistro serving artisanal coffee, continental plates, fast food and more. Dine in, take away, or order on Zomato & Swiggy.",
  keywords: [
    "The Messy Door",
    "cafe bistro Bengaluru",
    "bohemian cafe",
    "continental food",
    "fast food cafe",
    "artisan coffee",
    "order Zomato Swiggy",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${dancing.variable}`}
    >
      <body className="bg-boho-charcoal text-boho-cream antialiased">{children}</body>
    </html>
  );
}