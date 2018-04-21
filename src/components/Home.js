// @flow

import React, { PropTypes, Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import styles from '../styles';

export default class Home extends Component {

  static defaultProps = {}

  static propTypes = {}

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Cona to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          Teste
        </Text>
      </View>
    );
  }
};
