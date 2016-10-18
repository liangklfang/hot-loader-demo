import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from './actions';


const App = (props) => (
  <div>
    <h1>Counter</h1>
    {props.step}
    <hr />

    <button onClick={props.nextStep}>next</button>
    <button onClick={props.prevStep}>prev</button>
  </div>
);

const stateToProps = (step) => {
  return { step };
};

const dispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(actions.nextStep()),
    prevStep: () => dispatch(actions.prevStep())
  }
}

export default connect(stateToProps, dispatchToProps)(App);
