/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        sienna: '#834534',
        floralwhite: '#FFFBEF',
        darkolivegreen: '#1A5018',
        darkslategray: '#2F4F4F',
        darkred: '#941513',
        peru: '#BF7643',
        rosybrown: '#D49C92',
        darkslateblue: '#073A7F',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadein: 'fadein 0.5s ease forwards',
        fadeout: 'fadeout 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}
