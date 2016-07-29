var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.js',
    'vendor': './src/vendor.js',
    'app': './src/main.js'
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      app: helpers.root('src/app'),
      utils: helpers.root('src/app/utils'),
      directive: helpers.root('src/app/shared/directive'),
      model: helpers.root('src/app/shared/model'),
      service: helpers.root('src/app/shared/service')
    }
  },

  module: {
    loaders: [{
        test: /\.html$/,
        loader: 'html'
    }, {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
    }, {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
    }, {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
    },{
        test: /\.js$/,
        loader: 'babel-loader',
        include: helpers.root('src'),
        query: {
          presets: ['es2015', 'angular2']
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    // app conf vars
    new webpack.DefinePlugin({
      maxCardsCount: 3
    })
  ]
};