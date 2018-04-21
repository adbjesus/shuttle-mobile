 // @flow

import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from '../store';

import { Home } from '../containers/*';
import { Map } from '../components/*';

const ShuttleApp = TabNavigator({
  Home: { screen: Home },
  Map: { screen: Map },
}, {
  initialRouteName: 'Home',
});

export default App = () => (
  <Provider store={store}>
    <ShuttleApp />
  </Provider>
);


