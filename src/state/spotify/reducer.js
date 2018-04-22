import { loop } from 'redux-loop'
import { handleActions } from 'redux-actions'

import { SPOTIFY } from './types'
import {
  spotifyInitializeRequest,
  spotifyLoginRequest,
  spotifyLogoutRequest,
} from './cmds'

const initialState = {
  initialized: false,
  loggedIn: false,
}

export default handleActions(
  {
    [SPOTIFY.INITIALIZE_REQUEST]: (state) =>
      loop(
        {
          ...state,
          initialized: false,
          loggedIn: false,
        },
        spotifyInitializeRequest,
      ),

    [SPOTIFY.INITIALIZE_RESPONSE]: (state, { payload }) => ({
      ...state,
      initialized: true,
      loggedIn: payload,
    }),

    [SPOTIFY.LOGIN_REQUEST]: (state) =>
      loop(
        {
          ...state,
          loggedIn: false,
        },
        spotifyLoginRequest,
      ),

    [SPOTIFY.LOGIN_RESPONSE]: (state, { payload }) => ({
      ...state,
      loggedIn: payload,
    }),

    [SPOTIFY.LOGOUT_REQUEST]: (state) => loop(state, spotifyLogoutRequest),

    [SPOTIFY.LOGOUT_RESPONSE]: (state) => ({
      ...state,
      loggedIn: false,
    }),
  },
  initialState,
)
