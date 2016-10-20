import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Match } from 'react-router';

import actions from './actions';

import ControlledRouter from './controlled-router';
import Home from './routes/home';
import Counter from './routes/counter';


const App = ({ router, setLocation }) => (
  <ControlledRouter location={router} setLocation={setLocation}>
    <div>
      <Match exactly pattern="/" component={Home} />
      <Match exactly pattern="/counter" component={Counter} />
    </div>
  </ControlledRouter>
);

const stateToProps = ({ router }) => {
  return { router };
};

const dispatchToProps = (dispatch) => {
  return {
    setLocation: (routerState) => dispatch(actions.setLocation(routerState))
  }
}

export default connect(stateToProps, dispatchToProps)(App);
