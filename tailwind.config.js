module.exports = {
  purge: {
    enable: true,
    content: [
      './src/**/*.vue',
      './src/**/*.css',
      './src/**/*.js'
    ],
  },
  theme: {
    extend: {
      colors: {
        'red': {
          '100': '#FCECEB',
          '200': '#F8CFCD',
          '300': '#F4B2AF',
          '400': '#EB7972',
          '500': '#E33F36',
          '600': '#CC3931',
          '700': '#882620',
          '800': '#661C18',
          '900': '#441310',
        },
      }
    },
  },
  variants: {
    visibility: ['responsive', 'hover']
  },
  plugins: [],
}
