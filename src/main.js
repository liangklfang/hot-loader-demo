import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import appReducer from './reducer';

import App from './app';

const store = createStore(appReducer);

const rootEl = document.getElementById('root');
const renderApp = (Component = App) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
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
