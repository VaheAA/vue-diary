/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'color-1': '#334257',
      'color-2': '#476072',
      'color-3': '#548CA8',
      'color-4': '#EEEEEE'
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
