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
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass?sourceMap',
    },
  ],
  },
  sassResources: './app/foundation-sites/scss/foundation',
  postcss: function() {
    return [precss, autoprefixer];
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './app',
  },
};
