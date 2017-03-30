import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


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

export default combineReducers({
  counter: counterStore,
  router: routerReducer
});
