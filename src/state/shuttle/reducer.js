import { handleActions } from 'redux-actions'

import { SHUTTLE } from './types'

const initialState = {
  playState: false,
  trackInfo: null,
}

export default handleActions(
  {
    [SHUTTLE.SET_PLAY_STATE]: (state, { payload }) => ({
      ...state,
      playState: payload,
    }),

    [SHUTTLE.SET_TRACK_INFO]: (state, { payload }) => ({
      ...state,
      trackInfo: payload,
    }),
  },
  initialState,
)
