var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client.js'
  ],
  output: {
    path: path.join(__dirname, '../www'),
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
      exclude: /node_modules/
    },
    // CSS
    { 
      test: /\.scss$/, 
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 5 version", "ie >= 11"]}!sass'
    }
    ]
  }
};
