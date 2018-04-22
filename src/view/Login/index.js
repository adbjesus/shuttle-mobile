// @flow

import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import styles from '../../styles'
import LoginContainer from './container'

type Props = {
  initialized: bool,
  loggedIn: bool,
  spotifyInitializeRequest: Function,
  spotifyLoginRequest: Function,
  navigation: Object,
}

class Login extends React.Component<Props> {
  componentDidMount () {
    if (!this.props.initialized) {
      this.props.spotifyInitializeRequest()
    } else if (this.props.initialized && this.props.loggedIn) {
      this.props.navigation.navigate('App')
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.initialized && nextProps.loggedIn) {
      nextProps.navigation.navigate('App')
    }
  }

  render () {
    if (!this.props.initialized) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Loading...
          </Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Hey! You! Log into your spotify
          </Text>
          <Button title='Login with Spotify' onPress={this.props.spotifyLoginRequest} />
        </View>
      )
    }
  }
}

export default LoginContainer(Login)
