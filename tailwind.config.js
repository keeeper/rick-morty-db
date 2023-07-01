/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#1B3FFB',
        'secondary': '#DA4167',
        'accent': '#083D77',
        'bg': '#191919',
        'header': '#141414',
        'gray': '#8e8e8e'
      }
    },
  },
  plugins: [],
}
