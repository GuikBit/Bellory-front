/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          // Cores principais da Barbearia Bigode
          "bigode-amber": {
            DEFAULT: "#D97706", // amber-600
            light: "#F59E0B", // amber-500
            dark: "#B45309", // amber-700
          },
          "bigode-neutral": {
            900: "#171717",
            800: "#262626",
            700: "#404040",
            600: "#525252",
            500: "#737373",
            400: "#A3A3A3",
            300: "#D4D4D4",
            200: "#E5E5E5",
            100: "#F5F5F5",
          },
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        boxShadow: {
          "bigode-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          "bigode-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          "bigode-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          "bigode-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
        animation: {
          "fade-in": "fadeIn 0.5s ease-in-out",
          "slide-up": "slideUp 0.5s ease-in-out",
          "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          slideUp: {
            "0%": { transform: "translateY(20px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "bigode-gradient": "linear-gradient(to bottom, #171717, #262626)",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  