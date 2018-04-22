// @flow

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { playState, trackInfo } from '../../state/selectors'
import { shuttleSetPlayState, shuttleSetTrackInfo } from '../../state/shuttle/actions'

export default connect(createStructuredSelector({
  playState,
  trackInfo,
}), {
  shuttleSetPlayState,
  shuttleSetTrackInfo,
})
