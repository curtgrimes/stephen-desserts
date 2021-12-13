module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
  },
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        veryWide: '0.4rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
