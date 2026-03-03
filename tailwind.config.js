/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#148E7C",
        "primary-hover": "#0f6e60",
        secondary: "#0F2636",
        accent: "#e0f2f1",
        "background-light": "#F8FAFC",
        "background-dark": "#0B1120",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E293B",
        "text-main-light": "#0F172A",
        "text-main-dark": "#E2E8F0",
        "text-muted-light": "#64748B",
        "text-muted-dark": "#94A3B8",
        "text-light": "#334155",
        "text-dark": "#94A3B8",
        "subtext-light": "#6B7280",
        "subtext-dark": "#9CA3AF",
        "heading-light": "#0F172A",
        "heading-dark": "#F1F5F9",
        "border-light": "#E5E7EB",
        "border-dark": "#374151",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop')",
      },
      keyframes: {
        "float-slow": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-slow-delayed": "float-slow 7s ease-in-out 2s infinite",
        blob: "blob 7s infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
