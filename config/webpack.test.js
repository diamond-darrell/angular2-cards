var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

// we need only 'module' and 'resolve' from webpack.common

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: {},
  output: {},
  plugins: []
});