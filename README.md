# Hot Loader Demo
The goal of this repository is to provide a minimal, out-of-the-box working
starter kit. I often found myself spending time deleting most of the features
from other people’s starter kits and implementing them myself. **Not**
necessarily because the implementation was wrong, but because I didn’t
understand how it worked and wanted to gain a better understanding of it.
This repository should serve as the barest minimum so you can add rather than
delete.

## NOTE:
- **No support provided.**
- If you don’t know how to use this, don’t.
- **Do not use in production** — some libraries are still in beta or even alpha.

## Libraries
- React
- React Redux 5
- React Router 4
- Redux-controlled router
- React Hot Reload 3
- Webpack 2

## Babel
This project uses as little transpilation as possible as it fits my use case
(Electron app). The only use of transpilation is there due to a bug in [UglifyJS](https://github.com/mishoo/UglifyJS2/issues/448#issuecomment-245936071).

## Babel presets
As pointed [here](https://github.com/gaearon/react-hot-loader/issues/410),
setting up hot reload with Babel presets requires some additional
configuration. There are two ways of solving this problem:

### 1. Use Webpack 2 with native modules & tree shaking
Just opt-out of Babel module transpiling.

```json
{
  "presets": ["es2015", { "modules": false }]
}
```

### 2. Use Babel module transpiling
You will need to re-require the app and the root reducer when a hot reload
occurs. Edit `./src/main.js`:

```js
if (module.hot) {
  module.hot.accept('./reducer', () => {
    const NextReducer = require('./reducer').default;

    store.replaceReducer(NextReducer);
  });

  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;

    renderApp(NextApp);
  });
}
```

## CSS
I didn’t want to provide (or force) the use of a particular css preprocessor or workflow so only `style-loader` and `css-loader` are included. If you are looking for a good css compiler, check out [PostCSS](https://github.com/postcss/postcss).

# License
MIT
