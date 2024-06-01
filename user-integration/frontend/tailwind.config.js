/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#37996B',
        gray: '#343434',
        background: '#1C1C1C',
      },
    },
  },
  plugins: [],
}
