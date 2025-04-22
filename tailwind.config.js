/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2f4858",
        secondary: "#00beff",
        tertiary:"#00c9f8",
        accent:"#ffb343"
      },
      container:"1200px"
    },
  },
  plugins: [],
}

