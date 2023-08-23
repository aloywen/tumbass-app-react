/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '5rem'
      },
      fontFamily: {
        'brand': 'Manrope, sans-serif',
        'secondary': 'Roboto, sans-serif',
        'primary': 'Poppins, sans-serif'
      },
      colors: {
        'primary': '#AE4CCF',
        'secondary': '#FFF9B6',
        'secondary2': '#C1FFD7',
        'third': '#B4FE98'
      },
      backgroundImage: {
        'subs': "url('https://ik.imagekit.io/aloywen/tumbas/utils/subs.jpg')",
      }
    },
  },
  plugins: [],
}

