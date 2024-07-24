/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '70/30': '70% 30%',
        '1fr-max-1fr': '1fr max-content 1fr',
      },
      colors: {
        custom1: '#c69963',
        custom2: '#cf8a35',
        custom3: '#f78b06',
        custom4: '#101d2c',
      },
    },
  },
  plugins: [],
};
