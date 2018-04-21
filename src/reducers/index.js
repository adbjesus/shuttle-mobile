// @flow

import { combineReducers } from 'redux'

const counter = (state = 1, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return ++state
    case 'DECREASE_COUNTER':
      return --state
    default:
      return state
  }
}

const default_spotify = {
  initialized: false,
}

const spotify = (state = default_spotify, action) => {
  switch(action.type) {
    case 'TOGGLE_INITIALIZED':
      return {
        ...state,
        initialized: !state.initialized,
      }
    default:
      return state
  }
}

export default combineReducers({
  counter, spotify,
})
