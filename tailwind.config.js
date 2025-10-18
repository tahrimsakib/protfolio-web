import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#050816",
          800: "#0b1025",
          700: "#121a37",
        },
        accent: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 25px 50px -12px rgba(139, 92, 246, 0.35)",
      },
    },
  },
  plugins: [forms],
};
