// @flow

import { Cmd } from 'redux-loop'
import Spotify from 'rn-spotify-sdk'

import {
  spotifyInitializeResponse,
  spotifyLoginResponse,
  spotifyLogoutResponse,
} from './actions'

const spotifyOptions = {
  clientID: '042dbf588d8642928ff88e58fa9c5048',
  sessionUserDefaultsKey: 'SpotifySession',
  redirectURL: 'shuttlemobile://auth',
  scopes: ['streaming'],
}

export const spotifyInitializeRequest = Cmd.run(Spotify.initialize, {
  successActionCreator: spotifyInitializeResponse,
  args: [spotifyOptions],
})

export const spotifyLoginRequest = Cmd.run(Spotify.login, {
  successActionCreator: spotifyLoginResponse,
})

export const spotifyLogoutRequest = Cmd.run(Spotify.logout, {
  successActionCreator: spotifyLogoutResponse,
})
