module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    margin: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui')
  ],
}
