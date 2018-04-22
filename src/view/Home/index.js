// @flow

import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import styles from '../../styles'
import HomeContainer from './container'

type Props = {
  spotifyLogoutRequest: Function,
  loggedIn: bool,
  navigation: Object,
}

class Home extends React.Component<Props> {
  static propTypes = {
  }

  componentDidMount = () => {
    if (!this.props.loggedIn) {
      this.props.navigation.navigate('Auth')
    }
  }

  componentDidUpdate = () => {
    if (!this.props.loggedIn) {
      this.props.navigation.navigate('Auth')
    }
  }

  render = () => (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome Cona to React Native!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit App.js
      </Text>
      <Text style={styles.instructions}>
        Yay
      </Text>
      <Button title="Logout" onPress={this.props.spotifyLogoutRequest} />
    </View>
  )
}

export default HomeContainer(Home)
