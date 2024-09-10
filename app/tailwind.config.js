/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EAE2F8",
          200: "#A081D9",
          300: "#8662C7",
          400: "#724BB7",
          500: "#653CAD",
          600: "#51279B",
          700: "#421987",
          800: "#34126F",
          900: "#240754",
        },
        secondary: {
          10: "#7f8fec",
          50: "#7080de",
          100: "#6373d1",
          200: "#5363c2",
          300: "#4555b6",
          400: "#4050b1",
          500: "#3c4cad",
          600: "#3543984",
          700: "#2c377b",
          800: "#2c377b",
          900: "#1a2045",
        },
        baseGray: {
          50: "#F0F4F8",
          100: "#F0F4F8",
          200: "#D9E2EC",
          300: "#BCCCDC",
          400: "#9FB3C8",
          500: "#829AB1",
          600: "#627D98",
          700: "#334E68",
          800: "#243B53",
          900: "#102A43",
        }
      },
    },
  },
  plugins: [],
};
