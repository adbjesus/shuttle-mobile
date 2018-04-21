// @flow

import { connect } from 'react-redux'

import Login from '../components/Login'
import { toggleInitializedSpotify } from '../actions'

const mapStateToProps = (state) => ({
  initialized: state.initialized,
})

const mapDispatchToProps = (dispatch) => ({
  toggleInitializedSpotify: () => dispatch(toggleInitializedSpotify()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
