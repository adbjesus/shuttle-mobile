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

const Home = ({ counter, increaseCounter, decreaseCounter }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome Cona to React Native!
    </Text>
    <Text style={styles.instructions}>
      To get started, edit App.js
    </Text>
    <Text style={styles.instructions}>
      {counter}
    </Text>
    <Button title='Increase' onPress={increaseCounter} />
    <Text> </Text>
    <Button title='Decrease' onPress={decreaseCounter} />
  </View>
);

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increaseCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
};

export default Home;
