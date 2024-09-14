/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

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

