var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
// var CopyWebpackPlugin = require('copy-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: 'assets/javascript/[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('assets/styles/[name].[hash].css'),
    new ImageminPlugin({
      disable: false,
      optipng: {
        optimizationLevel: 3
      },
      gifsicle: {
        optimizationLevel: 1
      },
      jpegtran: {
        progressive: false
      },
      svgo: {
      },
      pngquant: null, // pngquant is not run unless you pass options here
      plugins: []
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
