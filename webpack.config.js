var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/index.js',
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
      loader: 'style!css!sass?modules&&importLoaders=1&sourceMap&localIdentName=[name]',
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style!css?modules&&importLoaders=1&sourceMap&localIdentName=[local]__[path][name]__[hash:base64:5]!postcss-loader',
    },
  ],
  },
  sassLoader: {
    includePaths: ['./app/foundation-sites/scss'],
  },
  sassResources: './app/foundation-sites/scss/foundation.scss',
  postcss: function() {
    return [precss, autoprefixer];
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './app',
  },
};
