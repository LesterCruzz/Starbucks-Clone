/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'PT Sans Caption': 'sans-serif',
      },
      colors: {
        'l-green': '#d4e9e2',
        'green': '#00754a',
        'gray': '#f1f8f5',
        'dark': '#1f2020',
        'gold': '#cba258',
      }
    },
  },
  plugins: [],
}