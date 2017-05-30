const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/app.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 1,
            localIdentName: '[path]--[name]--[local]--[hash:base64:5]',
          },
        },
        'postcss-loader',
      ],
    },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './app',
  },
};
