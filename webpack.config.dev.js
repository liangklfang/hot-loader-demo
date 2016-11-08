const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/main.js'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    noParse: /\.min\.js/,
    rules: [
      {
        test: /\.js$/,
        use: 'babel',
        include: path.resolve('./src')
      }
    ]
  }
}
