/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'color-1': '#002B5B',
      'color-2': '#2B4865',
      'color-3': '#256D85',
      'color-4': '#8FE3CF'
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
