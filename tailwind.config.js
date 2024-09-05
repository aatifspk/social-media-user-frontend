/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

 const conf = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        primary: "#ffc001",
        secondary: "#ff9c01",
        dark: "#080809",
        light: "#f8f9fb",
        mediumDark : "rgb(57 57 57)"
      },

    },
  },
  plugins: [],
})





export default conf