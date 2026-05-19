import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          raised: "#111111",
          panel: "#0d0d0d",
        },
        bone: {
          DEFAULT: "#e8e8e3",
          dim: "#9a9a92",
          faint: "#5a5a55",
        },
        accent: {
          DEFAULT: "#ff3d8b",
          deep: "#d92670",
          glow: "#ff3d8b",
        },
        rule: "#2a2a26",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-dot": "pulse 1.6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
