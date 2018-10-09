const path = require('path');

module.exports = {
  context: path.join(__dirname, 'client_src', 'src'),
  devtool: 'source-map',

  entry: {
    javascript: './js/index.js'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client_src', '/dist'),
    publicPath: '/public/'
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: [ '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test:/\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ],
  },
};
  