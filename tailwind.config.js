module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        indigo: {
          '50': '#BBB1D8',
          '100': '#B0A4D1',
          '200': '#9889C4',
          '300': '#806DB6',
          '400': '#6954A7',
          '500': '#58468C',
          '600': '#473871',
          '700': '#362B56',
          '800': '#251D3A',
          '900': '#14101F'
        },
        red: {
          '50': '#FFCCB8',
          '100': '#FFBDA3',
          '200': '#FFA07A',
          '300': '#FF8352',
          '400': '#FF6529',
          '500': '#FF4800',
          '600': '#D63C00',
          '700': '#AD3100',
          '800': '#852500',
          '900': '#5C1A00'
        },
      },
    }
  },
  variants: {
      borderColor: ['invalid', 'responsive', 'hover', 'focus', 'active'],
      backgroundColor: ['invalid', 'responsive', 'hover', 'focus', 'active'] 
  },
  plugins: [
      require('./tailwind/invalid-plugin.js')
  ]
}
