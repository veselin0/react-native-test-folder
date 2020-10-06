import React from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Input from './components/Input.js';
import styles from './components/styles.js';
import Current from './components/Current.js';
import Update from './components/Update.js';
import Delete from './components/Delete.js';

const App = () => {
  const {storeAction, persisted, setCurrentText} = useStoreData();

  return (
    <View style={styles.container}>
      <Input onTextChange={setCurrentText} />
      <Current value="Todo..." />
      <Update
        onPress={() => {
          throw new Error('Not implemented!');
        }}
      />
      <Delete
        onPress={() => {
          throw new Error('Not implemented!');
        }}
      />
    </View>
  );
};

const useStoreData = async () => {
  const [currentText, setCurrentText] = React.useState('');
  const [persisted, setPersited] = React.useState('');

  const storeAction = async () => {
    const newPersisted = persisted
      ? `${persisted}, ${currentText}`
      : currentText;
    await AsyncStorage.setItem('@storage_key', newPersisted);
    setPersited(newPersisted);
  };

  return {
    storeAction,
    persisted,
    setCurrentText,
  };
};

export default App;
