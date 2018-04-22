// @flow

import { createStore, compose } from 'redux'
import { combineReducers, install } from 'redux-loop'

import spotify from './spotify/reducer'
import shuttle from './shuttle/reducer'

export default createStore(
  combineReducers({
    spotify,
    shuttle,
  }),
  compose(install()),
)
