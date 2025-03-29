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
      }
    },
  },
  plugins: [],
}

