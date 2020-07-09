module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        karla: '"Karla"',
        rubik: '"Rubik"'
      },
      screens: {
        900: '900px',
        500: '500px',
        400: '400px'
      },
      colors: {
        'custom-blue': '#346EBA',
        'custom-light-blue': '#3376CF',
        'custom-green': '#00A9A2',
        'custom-light-green': '#1DB1AB',
        'black': '#111111',
        'custom-gray': '#E1E1E1',
        'custom-light-gray': '#F6F6F6'
      },
      rotate: {
        '330': '330deg'
      },
      boxShadow: {
        default: '0 5px 15px 0 rgba(0, 0, 0, .07), 0 1px 2px 0 rgba(0, 0, 0, .06)'
      }
    }
  },
  variants: {},
  plugins: []
}
