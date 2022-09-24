/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     container: {
      padding:'0rem'
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      'white':'#fff',
      'helper': '#FF6F00',
      'helper2':'#6A1B9A',
      'black':'#000000',
      'gray':'#808080',
      'bg':'#303030'
    },
    screens: {
      'tab': '640px',
      // => @media (min-width: 640px) { ... }

      'lap': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desk': '1280px',
      // => @media (min-width: 1024px) { ... }

      'extra': '1536px',

    },
  },
  plugins: [],
}