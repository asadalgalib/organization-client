/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors : {
        primary : '#44a75d',
        accent : '#4759d5',
      },
      backgroundImage : {
        slide1 : "url('/src/assets/one.jpg')",
        slide2 : "url('/src/assets/two.jpg')",
        slide3 : "url('/src/assets/three.jpg')",
        slide4 : "url('/src/assets/four.jpg')",
      }
    },
  },
  plugins: [],
}

