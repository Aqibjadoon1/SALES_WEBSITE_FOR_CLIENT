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
        background: "#F8F6EF",
        surface: "#FFFFFF",
        surfaceHigh: "#F0EDE4",
        primary: "#D71961",
        primaryDark: "#A70F45",
        accent: "#0B2B57",
        textPrimary: "#101827",
        textSecondary: "#606A7B",
        border: "#DED8CC",
        borderGlow: "rgba(215,25,97,0.34)",
        gold: "#C9A84C",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 16px 34px rgba(215, 25, 97, 0.22)",
        "glow-violet": "0 18px 42px rgba(11, 43, 87, 0.16)",
        card: "0 24px 64px rgba(16, 24, 39, 0.12)",
      },
      backgroundImage: {
        "neon-mesh":
          "radial-gradient(circle at 20% 18%, rgba(215,25,97,0.14), transparent 32%), radial-gradient(circle at 78% 16%, rgba(201,168,76,0.18), transparent 28%), linear-gradient(135deg, rgba(11,43,87,0.08), transparent 42%)",
        noise:
          "linear-gradient(rgba(11,43,87,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(11,43,87,0.045) 1px, transparent 1px)",
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
