import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Home from './routes/home';
import Counter from './routes/counter';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={Counter} />
    </div>
  </ConnectedRouter>
);

export default App;
