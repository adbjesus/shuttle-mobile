 // @flow

import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from '../store';

import Home from '../containers/Home';

const ShuttleApp = StackNavigator({
  Home: { screen: Home },
}, {
  initialRouteName: 'Home',
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ShuttleApp />
      </Provider>
    );
  }
}


