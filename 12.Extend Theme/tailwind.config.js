// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  mode: 'jit',
  darkMode: 'media',
  theme: {

  extend: {
        // overwiting  hbe
        screens: {
          sm: '540px',
          lg: '1000px',
          '4k': '2560px',
        },
        frontFamily: {
    sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        },
    colors: {
      MyGray: {
        50: '#a5g678',
      },
      blue: colors.purple,
    },
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
