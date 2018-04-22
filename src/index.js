// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation'

import store from './state/reducer'

// import { Login } from './containers/*'
import Map from './view/Map'
import Home from './view/Home'
import Login from './view/Login'
import Share from './view/Share'

const AppStack = TabNavigator(
  {
    Home: { screen: Home },
    Share: { screen: Share },
    Map: { screen: Map },
  },
  {
    initialRouteName: 'Share',
  },
)

const AuthStack = StackNavigator({
  Login: Login,
})

const Nav = SwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
)

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
)

export default App
