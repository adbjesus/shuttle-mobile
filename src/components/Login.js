// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import Spotify from 'rn-spotify-sdk';

import styles from '../styles'

const Login = ({ initialized, toggleInitializedSpotify }) => {
  if(!this.state.spotifyInitialized) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Loading...
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hey! You! Log into your spotify
        </Text>
        <Button title='Login with Spotify' onPress={spotifyLogin} />
      </View>
    );
  }
  <View style={styles.container}>
    <Button title='Login' onPress={login} />
  </View>
}

Login.spotifyLogin = () => {
  Spotify.login().then((loggedIn) => {
    if(loggedIn) {
      // this.goToPlayer();
    } else {
      // cancelled
    }
  }).catch((error) => {
    Alert.alert("Error", error.message);
  });
}


Login.propTypes = {
  initialized: PropTypes.bool.isRequired,
  toggleInitializedSpotify: PropTypes.func.isRequired,
}

export default Login
