// global.Promise = require('bluebird');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const publicPath = 'http://localhost:7050/dist/';
// const CleanWebpackPlugin = require('')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '/dist/'),
      publicPath: "dist/",
      filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
        })
      }, {
        test: /\.js/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.gif$/,
        loader: 'url-loader?limit=10000&mimetype=image/gif'
      },
        {
        test:/\.jpg$/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg'
        },
        {
            test:/\.png$/,
            loader: 'url-loader?limit=10000&mimetype=image/png'
        },
        {
            test:/\.svg$/,
            loader: 'url-loader?limit=26000&mimetype=image/svg+xml'
        },
        {
            test:/\.jsx$/,
            loader: 'react-hot!babel',
            exclude: [/node_module/]
        }
    ]
  },
  devServer: {
      publicPath: '/',
      contentBase: path.join(__dirname, "./dist"),
      hot: true,
    compress: true,
    port: 7050,
    stats: 'errors-only',
    // open: true
  },
  plugins: [
      // new HtmlWebpackPlugin({
      //     title: 'Shop on the coach',
      //     // minify: {
      //     //     collapseWhitespace: true
      //     // },
      //     hash: true,
      //     template: './src/index.html'
      //   }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })]
    // ],
    // resolve: {
    //     modules: [__dirname, 'node_modules'],
    //     extensions: ['*', '.js', '.jsx']
    // },
    // devtool: 'source-map'
};
