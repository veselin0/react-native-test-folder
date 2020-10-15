/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

export default function App() {
  const onPressHandler = () => {
    Alert.alert('button pressed');
  };

  return (
    <View style={styles.screen}>
      <Text>Gocho</Text>
      <Button
        onPress={onPressHandler}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn More about this purple button"
      />
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
