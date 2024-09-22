/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: '200px', //minimim width
      // => @media (min-width: 576px) { ... }
      md: '600px',
      // => @media (min-width: 960px) { ... }
      lg: '1000px',
      // => @media (min-width: 976px) { ... }
      xl: "1600px"
      // => @media (min-width: 1440px) { ... }
    },
    spacing: {
      // => You can customize the pixel values depending on your use
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },

    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors:{
        newer: {
          100: "#f8c471",
          500: "#f99c09"
        }
      },
      fontFamily:{
        "title":["Playfair Display"],
      }
    }
  },
  plugins: [],
}

/*        newer:{
  100: "#f8c471",
  500: "#f99c09"
}
        colors:{
        newer:{
          100: "#f8c471",
          500: "#f99c09"
        }
      },
  */