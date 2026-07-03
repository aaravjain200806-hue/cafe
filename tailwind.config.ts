import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The Messy Door — bohemian bistro palette
        boho: {
          terra:   "#C1440E", // terracotta
          mustard: "#D4A017", // mustard gold
          cream:   "#FDF6E3", // warm cream
          burgundy:"#6B1A2A", // deep wine
          olive:   "#5C6B2E", // earthy olive
          sand:    "#E8D5A3", // sandy beige
          charcoal:"#1E1A16", // deep dark
          brown:   "#3D2B1F", // warm dark brown
          blush:   "#F2A07B", // warm blush/orange
          teal:    "#2A6B6B", // muted teal
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body:    ["var(--font-inter)", "sans-serif"],
        accent:  ["var(--font-cormorant)", "serif"],
        hand:    ["var(--font-dancing)", "cursive"],
      },
      backgroundImage: {
        "boho-grad": "linear-gradient(135deg, #C1440E 0%, #D4A017 50%, #6B1A2A 100%)",
      },
      animation: {
        "fade-up":   "fadeUp 0.8s ease-out forwards",
        "float":     "float 4s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;