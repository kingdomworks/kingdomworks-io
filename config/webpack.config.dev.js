var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: "[name].js",
    chunkFilename: "[id].js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'www/index.html',
      inject: 'body',
      hash: true
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.scss$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 5 version", "ie >= 11"]}!sass'
    }
    ]
  }
};
