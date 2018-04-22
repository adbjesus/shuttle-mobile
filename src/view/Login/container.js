// @flow

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { initialized, loggedIn } from '../../state/selectors'
import {
  spotifyInitializeRequest,
  spotifyLoginRequest,
} from '../../state/spotify/actions'

export default connect(createStructuredSelector({ initialized, loggedIn }), {
  spotifyInitializeRequest,
  spotifyLoginRequest,
})
