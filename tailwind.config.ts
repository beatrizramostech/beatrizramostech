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
        'orange-focus': '#FF9F15',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
