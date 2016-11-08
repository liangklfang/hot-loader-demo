const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/main.js',
    './styles/main.css'
  ],
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: {
        toplevel: true
      },
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        babel: {
          babelrc: false,
          presets: [
            'react'
          ],
          plugins: [
            'transform-es2015-arrow-functions',
            'transform-es2015-parameters',
            'transform-es2015-shorthand-properties',
            'transform-es2015-block-scoping',
            'transform-es2015-destructuring'
          ]
        }
      }
    })
  ],
  module: {
    noParse: /\.min\.js/,
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve('./src'),
      },
      {
        test: /\.css$/,
        // Use `loader` instead of `use` due to
        // https://github.com/webpack/extract-text-webpack-plugin/issues/265
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      }
    ]
  }
}
