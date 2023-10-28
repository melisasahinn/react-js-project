/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#abaaf3',
        'neutralDGrey': '#322460',
        'brandPrimary': '#322460',
        'neutralGrey': '#322460',
        'gray900':'#18191F',
        'blue':'#0E7490'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

