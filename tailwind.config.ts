import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F14",
        surface: "#1E1E24",
        surfaceHigh: "#2A2A33",
        primary: "#FF1E6E",
        primaryDark: "#B1004B",
        accent: "#6A00FF",
        textPrimary: "#FFFFFF",
        textSecondary: "#A0A0B0",
        border: "#2A2A33",
        borderGlow: "rgba(255,30,110,0.4)",
        gold: "#C9A84C",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 34px rgba(255, 30, 110, 0.28)",
        "glow-violet": "0 0 38px rgba(106, 0, 255, 0.28)",
        card: "0 22px 60px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "neon-mesh":
          "radial-gradient(circle at 20% 18%, rgba(255,30,110,0.18), transparent 32%), radial-gradient(circle at 78% 16%, rgba(106,0,255,0.2), transparent 28%), linear-gradient(135deg, rgba(255,30,110,0.08), transparent 42%)",
        noise:
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-18px) rotate(1deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
        mesh: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -16px, 0) scale(1.02)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 1.45s linear infinite",
        mesh: "mesh 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
