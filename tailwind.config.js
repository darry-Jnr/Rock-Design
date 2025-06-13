/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003152',
        accent: '#310A51',
        lightgray: '#CCCCCC',
        danger: '#4A0000',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
