module.exports = {
  plugins: {
    tailwindcss: {
      content: ['./src/**/*.{html,js,ts,vue}'],
      theme: {
        extend: {
          gridTemplateColumns: {
            'compare': 'auto 1fr 1fr',
          }
        },
      },
    },
    autoprefixer: {},
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
};