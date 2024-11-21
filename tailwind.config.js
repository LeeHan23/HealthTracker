/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        'background-accent': '#FEFAF7',
        primary: '#154D57',
        secondary: '#B7A08B',
        'secondary-bold': '#9F8573',
        text: '#000000',
      },
    },
  },
  plugins: [],
}