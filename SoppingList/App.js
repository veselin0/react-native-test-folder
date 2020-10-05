import React from 'react';
import {View, Text} from 'react-native';
import Input from './components/Input.js';
import styles from './components/styles.js';
import Current from './components/Current.js';
import Update from './components/Update.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Input />
      <Current />
      <Update />
      <Text style={styles.delete}>Dellete Matching</Text>
    </View>
  );
};

export default App;
