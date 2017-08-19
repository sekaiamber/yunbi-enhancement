var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var WebpackShellPlugin = require('webpack-shell-plugin');

var config = {
  context: path.join(__dirname, '..', '/src'),
  entry: {
    // Add each page's entry here
    index: './index',
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 20000 }),
    new webpack.optimize.OccurenceOrderPlugin(false),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
    }),
    new CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.DedupePlugin(),
    new WebpackShellPlugin({
      onBuildExit: [
        'echo',
        'echo ==============',
        'echo   ALL IN ONE',
        'echo ==============',
        'echo',
        'node webpack/allinone.js'
      ]
    })
  ],
  module: {
    perLoaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'eslint'
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass')
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=10000!img?progressive=true'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ],
    noParse: []
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.reactx', 'react'],
    alias: {}
  },
  devServer: {
    host: '0.0.0.0',
  },
};

module.exports = config;
