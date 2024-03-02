module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',

  theme: {
      // customising color it will change all default

//     colors: {
// blue: {
//   900: '#7e22ce',
// },
//     },
    extend: {
            // customising color inside extend  it will not change all default

      colors: {
        blue: {
          900: '#7e22ce',
        },
            },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
