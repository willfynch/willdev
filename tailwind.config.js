/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'my-white' : '#fdf7ec',
        'my-black' : '#160f0b',
        'my-gray' : "#3b3226",
        'my-brown' : '#D4C09E',
        'my-dark-blue': '#2C4F57',
        'my-blue': '#A8C7D0',
        'my-green' : '#e9ebe3',
        'my-dark-green' : '#535b3d',
        'my-text': '#C3BEB6',
        'my-dark-brown': '#593117',
        'my-red' : '#fecaca',
        'my-dark-red' : '#dc2626'
      }
    },
  },
  plugins: [],
}

