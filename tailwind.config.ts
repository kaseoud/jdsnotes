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
        background: "#EEEBE7",
        foreground: "#1A1A1A",
        muted: "#666666",
        accent: "#8B4513",
        "accent-light": "#D2691E",
      },
      fontFamily: {
        serif: ["var(--font-libre-baskerville)", "Georgia", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "Courier New", "monospace"],
        sans: ["var(--font-ibm-plex-mono)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.01em",
      },
      lineHeight: {
        relaxed: "1.7",
      },
    },
  },
  plugins: [],
};

export default config;

