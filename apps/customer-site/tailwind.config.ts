/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if you are using Next.js app directory
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ECFDFE",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4", // اصلی
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
          950: "#083344",
        },
        secondary: {
          50: "#FFFAF5",
          100: "#FEF4E8",
          200: "#FDE5CC",
          300: "#FCD6AE",
          400: "#FBC793",
          500: "#F9B872", // اصلی
          600: "#F59E42",
          700: "#D97706",
          800: "#B45309",
          900: "#78350F",
          950: "#451A03",
        },
        accent: {
          50: "#FFF9F0",
          100: "#FFEFD9",
          200: "#FFD9A8",
          300: "#FFC478",
          400: "#FFAD47",
          500: "#FF9900",
          600: "#E68A00",
          700: "#B36A00",
          800: "#804B00",
          900: "#4D2B00",
          950: "#331D00",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#0A0F1A",
        },
      },
    },
  },
  plugins: [],
};
