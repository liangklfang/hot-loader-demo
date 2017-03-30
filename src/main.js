import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import appReducer from './reducer';

import App from './app';

const history = createBrowserHistory();
const store = createStore(
  appReducer,
  applyMiddleware(routerMiddleware(history))
);

const rootEl = document.getElementById('root');
const renderApp = (Component = App) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </AppContainer>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./reducer', () => {
    store.replaceReducer(appReducer);
  });

  module.hot.accept('./app', () => renderApp());
}

renderApp();
