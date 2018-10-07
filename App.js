/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.log("Hello RN!");
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, {flex: 5}]}>Hello World1!</Text>
        <Text style={[styles.welcome, {flex: 4}]}>Hello World2!</Text>
        <Text style={[styles.welcome, {flex: 1}]}>Hello World3!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 20,
    // textAlign: 'center',
    margin: 10,
    backgroundColor: "rosybrown",
  },
});
