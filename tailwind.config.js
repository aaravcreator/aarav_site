/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#007bff',
      }
    },
  },
  plugins: [],
}