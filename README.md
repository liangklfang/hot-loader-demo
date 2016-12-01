# Hot Loader Demo
The goal of this repository is to provide a minimal, out-of-the-box working starter kit. I realised that I often find myself spending time on deleting most of the features from other people’s starter kits and implementing them myself. **Not** necessarily because the implementation is wrong, but because I don’t understand how it works and I want to gain a better understanding of it. So this repository is the barest minimum so you can add, rather than delete.

## NOTE:
- No support is provided.
- If you don’t know how to use this, don’t.
- **Do not use in production** — some libraries are still in beta or even alpha.

## Prerequisites
- Node 6 or later

## Libraries
- React
- Redux & React Redux
- React Router 4
- Redux-controlled router
- React Hot Reload 3
- Webpack 2

## Babel
This project uses as little transpilation as possible as it fits my use-case (Electron app). The only “heavier” use of transpilation is there only to fix [UglifyJS](https://github.com/mishoo/UglifyJS2/issues/448#issuecomment-245936071). Should you have any problems with Babel, there will not be any support unless it’s also affecting the functionality of this kit.

## Using with ES2015 preset
As pointed [here](https://github.com/gaearon/react-hot-loader/issues/410), using with `babel-preset-es2015` requires some additional configuration. You can either:

### 1. Use Babel module transpiling — in that case, you will need to re-require the app module on `module.hot.accept`. Edit [`./src/main.js`](https://github.com/patrikholcak/hot-loader-demo/blob/master/src/main.js#L30) as follows:

```js
  module.hot.accept('./app', () => {
    const NextApp = require('./app');

    renderApp(NextApp);
  });
```

### 2. Use native modules & tree shaking — just opt-out of Babel module transpiling.

```json
{
  "presets": ["es2015", { "modules": false }]
}
```


## CSS
I didn’t want to provide (or force) the use of a particular css preprocessor or workflow so only `style-loader` and `css-loader` are provided. If you are looking for a good css compiler, check out [PostCSS](https://github.com/postcss/postcss).

# License
MIT
