const express = require('express');
const app = express();
const historyMiddleware = require('connect-history-api-fallback');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const webpack = require('webpack');
const config = require('./webpack.config.dev');
const compiler = webpack(config);

app.use(historyMiddleware());
app.use(express.static(__dirname));
app.use(hotMiddleware(compiler));
app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.listen(8080);
