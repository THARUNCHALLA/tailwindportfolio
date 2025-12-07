import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0ea5e9",
      },
      fontFamily: {
        ballet: ["Ballet", "cursive"],
      },
    },
  },
  plugins: [
    tailwindScrollbar
  ],
};
