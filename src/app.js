import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Match } from 'react-router';
import Router from 'react-router-addons-controlled/ControlledBrowserRouter';

import actions from './actions';

import Home from './routes/home';
import Counter from './routes/counter';


const App = ({ router, setLocation }) => (
  <Router
    history={router.history}
    location={router.location}
    action={router.action}
    onChange={(routerState, action) => {
      // https://github.com/ReactTraining/react-router-addons-controlled/blob/master/redux-example/index.js#L55
      setLocation(routerState, action === 'SYNC' ? router.action : action);
    }}
  >
    <div>
      <Match exactly pattern="/" component={Home} />
      <Match exactly pattern="/counter" component={Counter} />
    </div>
  </Router>
);

const stateToProps = ({ router }) => {
  return { router };
};

const dispatchToProps = (dispatch) => {
  return {
    setLocation: (routerState, action) => dispatch(actions.setLocation(routerState, action))
  }
}

export default connect(stateToProps, dispatchToProps)(App);
