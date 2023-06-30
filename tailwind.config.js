/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#1B3FFB',
        'secondary': '#DA4167',
        'accent': '#083D77',
        'bg': '#191919',
        'gray': '#8e8e8e'
      }
    },
  },
  plugins: [],
}
