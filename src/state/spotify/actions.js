// @flow

import { createAction } from 'redux-actions'

import { SPOTIFY } from './types'

export const spotifyInitializeRequest = createAction(
  SPOTIFY.INITIALIZE_REQUEST,
  () => (null),
)

export const spotifyInitializeResponse = createAction(
  SPOTIFY.INITIALIZE_RESPONSE,
  (data) => (data),
)

export const spotifyLoginRequest = createAction(
  SPOTIFY.LOGIN_REQUEST,
  () => (null),
)

export const spotifyLoginResponse = createAction(
  SPOTIFY.LOGIN_RESPONSE,
  (data) => (data),
)

export const spotifyLogoutRequest = createAction(
  SPOTIFY.LOGOUT_REQUEST,
  () => (null),
)

export const spotifyLogoutResponse = createAction(
  SPOTIFY.LOGOUT_RESPONSE,
  () => (null),
)
