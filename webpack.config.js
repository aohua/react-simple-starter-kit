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
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'postcss-loader',
        },
      ],
    },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './app',
  },
};
