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
        'primary': '#F14F38',
        'secondary': '#E0482A',
        'accent': '#80C60C',
        'bg': '#191919',
        'header': '#141414',
        'mid-gray': '#8e8e8e',
        'light-gray': '#353535'
      }
    },
  },
  plugins: [],
}
