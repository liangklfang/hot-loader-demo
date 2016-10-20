import { combineReducers } from 'redux';


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
  pathname: location.pathname,
  search: location.search,
  hash: location.hash
};

const routerStore = (state = routerDefaultState, action) => {
  switch (action.type) {
    case 'LOCATION_CHANGE':
      return action.router;
    default:
      return state;
  }
};

export default combineReducers({
  counter: counterStore,
  router: routerStore
});
