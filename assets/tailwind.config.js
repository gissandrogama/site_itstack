module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "../**/*.html.eex",
    "../**/*.html.leex",
    "../**/views/**/*.ex",
    "../**/live/**/*.ex",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        purple_acai: '#682C90',
        orange_stack: '#FF6F61',
        green_stack: '#388A35',
      },
    },
    fontFamily: {
      sans: [
        "Rubik",
        "Roboto",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
  },
  variants: {},
  plugins: [],
}
