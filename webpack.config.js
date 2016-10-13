module.exports = {
  entry: [
    'babel-polyfill',
    './app/app.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style!css!sass?sourceMap',
    },
  ],
  },
  sassLoader: {
    includePaths: ['./app/foundation/scss'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './app',
  },
};
