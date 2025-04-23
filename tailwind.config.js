/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2f4858",
        secondary: "#2a8091",
        tertiary: "#34bdb5",
        accent: "#ffb343"
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1200px",
          xl: "1200px"
        }
      },
      height: {
        'custom-img': '400px',
      },
    },
    plugins: [],
  }
}

