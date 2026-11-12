import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#6366F1",
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
        },
        accent: {
          DEFAULT: "#06B6D4",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
        },
        muted: "#94A3B8",
        glass: {
          card: "rgba(255, 255, 255, 0.05)",
          hover: "rgba(255, 255, 255, 0.09)",
          border: "rgba(255, 255, 255, 0.12)",
          borderHover: "rgba(99, 102, 241, 0.4)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Space Grotesk", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      boxShadow: {
        "glass-sm": "0 4px 20px -2px rgba(0, 0, 0, 0.4)",
        "glass-md": "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        "glass-lg": "0 20px 48px -8px rgba(0, 0, 0, 0.7)",
        "neon-indigo": "0 0 25px -4px rgba(99, 102, 241, 0.45)",
        "neon-cyan": "0 0 25px -4px rgba(6, 182, 212, 0.45)",
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
