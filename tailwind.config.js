// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // or your actual paths
  theme: {
    extend: {
      fontFamily: {
        bruno: ['"Bruno Ace"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
