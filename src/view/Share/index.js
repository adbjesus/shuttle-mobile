// @flow

import React from 'react'
import { Text, View, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import Spotify from 'rn-spotify-sdk'

import styles from '../../styles'
import ShareContainer from './container'

type Props = {
  navigation: Object,
  playState: boolean,
  trackInfo: Object,
  shuttleSetTrackInfo: Function,
  shuttleSetPlayState: Function,
}

class Share extends React.Component<Props> {
  componentDidMount() {
    Spotify.playURI('spotify:track:7kQiiHm3jvdz2npYMW7wcE', 0, 0).then(() => {
      this.props.shuttleSetPlayState(true)
      setTimeout(() => Spotify.getPlaybackMetadataAsync().then((result) => {
        console.log(result)
        this.props.shuttleSetTrackInfo(result.currentTrack)
      }), 1000)
    }).catch((error) => {
      Alert.alert('Error', error.message)
    })
  }

  componentDidUpdate() {
    console.log(this.props.playState)
    console.log(this.props.trackInfo)
  }

  musicName = () => {
    if (this.props.trackInfo !== null) {
      return this.props.trackInfo.name
    } else {
      return ''
    }
  }

  render() {
    console.log(this.props.trackInfo)

    const musicInfo = this.props.trackInfo != null ? (
      <Text style={styles.welcome}>{this.props.trackInfo.name}</Text>
    ) : (
      <Text style={styles.welcome}>Not listening to anything</Text>
    )

    return (
      <View style={styles.container}>
        {musicInfo}
        <Button title="Share" />
      </View>
    )
  }
}

export default ShareContainer(Share)
