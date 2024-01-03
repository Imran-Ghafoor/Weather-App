/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'background': 'url("/src/assets/weather2.jpg")'
      },
      fontFamily: {
        comforter: ['Comforter', '  cursive'],
        changa: ['Changa One', 'sans-serif'],

      },
    },
  },
  plugins: [],
}

