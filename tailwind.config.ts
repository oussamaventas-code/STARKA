import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#0a0a0a",
          800: "#101010",
          700: "#161616",
          600: "#1c1c1c",
          500: "#232323",
          400: "#2c2c2c",
        },
        bone: {
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#a8a29e",
        },
        brand: {
          DEFAULT: "#C8102E",
          50: "#fef2f3",
          100: "#fde3e6",
          400: "#E63950",
          500: "#C8102E",
          600: "#A10D25",
          700: "#7A0A1C",
          glow: "#FF2D4F",
        },
        signal: {
          red: "#EA2227",
          amber: "#FFB400",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "hero": "clamp(3.5rem, 9vw, 9.5rem)",
        "display": "clamp(2.5rem, 6vw, 6rem)",
        "heading": "clamp(2rem, 4vw, 4rem)",
      },
      letterSpacing: {
        tightest: "0em",
        tighter: "0em",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "shine": "shine 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "gradient": "gradient 8s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, #050505 75%)",
        "brand-glow": "radial-gradient(circle at 50% 50%, rgba(200,16,46,0.18), transparent 60%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(200,16,46,0.45)",
        "glow-sm": "0 0 30px -8px rgba(200,16,46,0.35)",
        "inner-line": "inset 0 1px 0 0 rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
