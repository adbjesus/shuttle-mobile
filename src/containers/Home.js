// @flow

import { connect } from 'react-redux';
import Home from '../components/Home';
import { increaseCounter, decreaseCounter } from '../actions';

const mapStateToProps = (state) => ({
  counter: state.counter, 
});

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => dispatch(increaseCounter()),
  decreaseCounter: () => dispatch(decreaseCounter()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
