/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      // => @media (min-width: 576px) { ... }
      md: '768px',
      // => @media (min-width: 960px) { ... }
      lg: '976px',
      // => @media (min-width: 976px) { ... }
      xl: "1440px"
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      colors:{
        newer:{
          100: "#f8c471",
          500: "#f99c09"
        }
      }
    }
  },
  plugins: [],
}

