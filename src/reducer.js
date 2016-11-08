import { combineReducers } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();


const counterStore = (state = 1, action) => {
  switch (action.type) {
    case 'NEXT':
      return state + 1;
    case 'PREVIOUS':
      return state - 1;
    default:
      return state;
  }
};


const routerDefaultState = {
  history,
  location: history.location,
  action: history.action
}

const routerStore = (state = routerDefaultState, action) => {
  switch (action.type) {
    case 'LOCATION_CHANGE':
      return Object.assign({}, state, action.router);
    default:
      return state;
  }
};

export default combineReducers({
  counter: counterStore,
  router: routerStore
});
