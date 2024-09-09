/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '-18px 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
      },
      colors: {
        'custom-blue': '#4158D0',
        'custom-pink': '#C850C0',
        'custom-yellow': '#FFCC70',
      },
    },
  },
  plugins: [],
}

