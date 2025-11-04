/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#ff5cf7",
          purple: "#8c7bff",
          yellow: "#ffd166",
        },
        dark: "#0f0f11",
        light: "#fafafa",
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
        heading: ['"Space Grotesk"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #ff5cf7 0%, #8c7bff 100%)",
        "gradient-accent": "linear-gradient(90deg, #ffd166, #ff5cf7)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        shimmer: "shimmer 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
