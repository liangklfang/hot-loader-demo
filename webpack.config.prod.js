const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/main.js'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve('./dist'),
  },
  plugins: [
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
        use: 'babel',
        include: path.resolve('./src'),
      }
    ]
  }
}
