/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables the dark mode toggle
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Optional: Add a nice serif font import to index.html if you want
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}