/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crimson-red': '#A83E3E',
        'ink-black': '#2D2D2D',
        'paper-white': '#FAFAF9',
        'imperial-gold': '#B8860B',
        'jade-green': '#065F46',
      },
      fontFamily: {
        'serif': ['"Noto Serif TC"', 'serif'],
        'sans': ['"Noto Sans TC"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
