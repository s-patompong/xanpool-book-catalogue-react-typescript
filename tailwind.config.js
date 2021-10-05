module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'open-sans': 'Open Sans, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
