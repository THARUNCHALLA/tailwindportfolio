/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#0ea5e9',
      },
      fontFamily: {
        ballet: ['Ballet', 'cursive'],
      },
    },
  },
  plugins: [],
};
