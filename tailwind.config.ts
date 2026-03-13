import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf8f0",
          100: "#f9eddb",
          200: "#f2d7b5",
          300: "#e9bb86",
          400: "#df9954",
          500: "#d88035",
          600: "#c9672b",
          700: "#a74f26",
          800: "#864025",
          900: "#6d3621",
          950: "#3b1a0f",
        },
        sage: {
          50: "#f4f7f4",
          100: "#e3eae2",
          200: "#c7d5c6",
          300: "#a1b8a0",
          400: "#789777",
          500: "#577a56",
          600: "#436142",
          700: "#364e36",
          800: "#2d3f2d",
          900: "#253426",
          950: "#121c12",
        },
        clay: {
          50: "#faf6f2",
          100: "#f3ebe0",
          200: "#e6d4bf",
          300: "#d5b797",
          400: "#c49a72",
          500: "#b88358",
          600: "#aa704c",
          700: "#8e5940",
          800: "#744a39",
          900: "#5f3e31",
          950: "#331f19",
        },
        charcoal: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#1a1a1a",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
