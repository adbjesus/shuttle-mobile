// @flow

import { createSelector } from 'reselect'
import * as spotifySelectors from './spotify/selectors'

const spotify = (state) => state.spotify
export const initialized = createSelector(spotify, spotifySelectors.initialized)
export const loggedIn = createSelector(spotify, spotifySelectors.loggedIn)
