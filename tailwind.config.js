/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'university-dark': '#05070A',
        'university-red': '#E11D48',
        'university-glass': 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'], // For "Legacy"
        sans: ['Plus Jakarta Sans', 'sans-serif'], // Modern body font
      },
    },
  },
  plugins: [],
}