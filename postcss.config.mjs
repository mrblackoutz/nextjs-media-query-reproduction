// postcss.config.mjs
const config = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: true,
        grid: true
      },
      stage: 3,
      features: {
        'media-query-ranges': false,
        'nesting-rules': false,
        'custom-properties': true,
        'custom-media-queries': true
      }
    },
    '@tailwindcss/postcss': {}
  }
}

export default config
