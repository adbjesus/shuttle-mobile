// @flow

import { combineReducers } from 'redux';

function defaultdata(state=[], action) {
  switch (action.type) {
    default:
      return [];
  }
}

export default ShuttleApp = combineReducers({
  defaultdata,
});
