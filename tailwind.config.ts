/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#5e16ea',
        'gradient-purple': '#9C80FF',
        'gradient-orange': '#FFD788',
        // Adicione mais cores conforme necessário
      },
    },
  },
  plugins: [],
}
