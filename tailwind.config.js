/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // or your actual file paths
  ],
  theme: {
    extend: {
      fontFamily: {
        afacad: ['"Afacad"', 'sans-serif'],
        bruno: ['"Bruno Ace"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
