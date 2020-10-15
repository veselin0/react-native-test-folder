/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text>Gocho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: '5%',
    width: '90%',
    height: '90%',
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
