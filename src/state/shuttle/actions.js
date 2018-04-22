// @flow

import { createAction } from 'redux-actions'

import { SHUTTLE } from './types'

export const shuttleSetTrackInfo = createAction(
  SHUTTLE.SET_TRACK_INFO,
  (trackInfo) => trackInfo,
)

export const shuttleSetPlayState = createAction(
  SHUTTLE.SET_PLAY_STATE,
  (playState) => playState,
)
