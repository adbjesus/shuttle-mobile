// @flow

import { createStore, compose } from 'redux'
import { combineReducers, install } from 'redux-loop'

import spotify from './spotify/reducer'

export default createStore(
  combineReducers({
    spotify,
  }),
  (compose)(install()),
)
