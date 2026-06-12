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
        background: "#EEF2F5",
        surface: "#FFFFFF",
        surfaceHigh: "#DDE5EA",
        primary: "#407F9D",
        primaryDark: "#255D78",
        accent: "#111C25",
        textPrimary: "#111C25",
        textSecondary: "#5D6D78",
        border: "#C8D2D9",
        borderGlow: "rgba(64,127,157,0.28)",
        gold: "#7CA7BB",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 18px 44px rgba(64, 127, 157, 0.18)",
        "glow-violet": "0 20px 48px rgba(77, 104, 119, 0.16)",
        card: "0 26px 70px rgba(32, 50, 62, 0.14)",
      },
      backgroundImage: {
        "neon-mesh":
          "radial-gradient(circle at 20% 18%, rgba(255,255,255,0.72), transparent 32%), radial-gradient(circle at 78% 16%, rgba(124,167,187,0.22), transparent 28%), linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(243,245,247,0.36) 50%, rgba(196,208,216,0.18) 100%)",
        noise:
          "linear-gradient(rgba(37,93,120,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37,93,120,0.045) 1px, transparent 1px)",
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
