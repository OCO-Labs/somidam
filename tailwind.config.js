/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'somidam' : '#946045'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}