var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./config/webpack.config.dev');

var app = express();
var compiler = webpack(config);
var root = __dirname + '/www/';

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(root)); 

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
