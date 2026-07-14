import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        surface: "#0a0505",
        elevated: "#140a0a",
        border: "#2a1515",
        muted: "#9a8484",
        text: "#f5f0f0",
        accent: "#dc2626",
        "accent-bright": "#f87171",
        crimson: "#9f1239",
        ember: "#b91c1c",
        // keep aliases so existing class names still resolve to red
        violet: "#be123c",
        blue: "#991b1b",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-purple":
          "linear-gradient(135deg, #7f1d1d 0%, #dc2626 45%, #9f1239 100%)",
        "gradient-red":
          "linear-gradient(135deg, #7f1d1d 0%, #dc2626 45%, #9f1239 100%)",
        "gradient-text":
          "linear-gradient(135deg, #f87171 0%, #dc2626 50%, #9f1239 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(220, 38, 38, 0.3)",
        "glow-lg": "0 0 80px rgba(220, 38, 38, 0.4)",
        "glow-sm": "0 0 20px rgba(220, 38, 38, 0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
