import React from 'react';
import actions from '../actions';

import { connect } from 'react-redux';


const Counter = ({ counter, dispatch }) => (
  <div>
    <h1>Counter</h1>
    {counter}
    <hr />

    <button onClick={() => dispatch(actions.nextStep())}>next</button>
    <button onClick={() => dispatch(actions.prevStep())}>prev</button>
    <hr />

    <a href="javascript:;" onClick={() => dispatch(actions.setLocation('/'))}>
      Link back home using a Redux action
    </a>
  </div>
);

const stateToProps = ({ counter }) => {
  return { counter };
};

export default connect(stateToProps)(Counter);
