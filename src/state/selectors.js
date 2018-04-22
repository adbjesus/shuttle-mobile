// @flow

import { createSelector } from 'reselect'
import * as spotifySelectors from './spotify/selectors'
import * as shuttleSelectors from './shuttle/selectors'

const spotify = (state) => state.spotify
const shuttle = (state) => state.shuttle

export const initialized = createSelector(spotify, spotifySelectors.initialized)
export const loggedIn = createSelector(spotify, spotifySelectors.loggedIn)
export const playState = createSelector(shuttle, shuttleSelectors.playState)
export const trackInfo = createSelector(shuttle, shuttleSelectors.trackInfo)
