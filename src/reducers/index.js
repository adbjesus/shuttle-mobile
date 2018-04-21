// @flow

import { combineReducers } from 'redux';

const counter = (state = 1, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return ++state;
    case 'DECREASE_COUNTER':
      return --state;
    default:
      return state;
  }
}

export default combineReducers({
  counter,
});
