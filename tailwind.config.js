/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
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
