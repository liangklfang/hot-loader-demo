import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import actions from './actions';

import Home from './routes/home';
import Counter from './routes/counter';


class App extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.router.listen(this.props.setLocation);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Router history={this.props.router}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
        </div>
      </Router>
    );
  }
}

const stateToProps = ({ router }) => {
  return { router };
};

const dispatchToProps = (dispatch) => {
  return {
    setLocation: (routerState, action) => dispatch(actions.setLocation(routerState, action))
  }
}

export default connect(stateToProps, dispatchToProps)(App);
