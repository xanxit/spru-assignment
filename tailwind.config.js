/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '576px',
      // => @media (min-width: 576px) { ... }

      'sm': '768px',
      // => @media (min-width: 960px) { ... }

      'md': '992px',
      // => @media (min-width: 1440px) { ... }
      'lg': '1200px',
    },
    fontFamily: {
      sans: ["Nunito Sans"],
      lato: ["Lato"]
    },
  },
  plugins: [],
}