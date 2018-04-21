// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  Text,
  View
} from 'react-native';

import { Button } from 'react-native-elements';

import styles from '../styles';

export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increaseCounter: PropTypes.func.isRequired,
    decreaseCounter: PropTypes.func.isRequired,
  }

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
          {this.props.counter}
        </Text>
        <Button title='Increase' onPress={this.props.increaseCounter} />
        <Text> </Text>
        <Button title='Decrease' onPress={this.props.decreaseCounter} />
      </View>
    );
  }
};
