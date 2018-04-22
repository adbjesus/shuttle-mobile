// @flow

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { loggedIn } from '../../state/selectors'
import { spotifyLogoutRequest } from '../../state/spotify/actions'

export default connect(createStructuredSelector({ loggedIn }), {
  spotifyLogoutRequest,
})
