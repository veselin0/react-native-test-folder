import 'react-native-get-random-values';
import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem';

export default function App() {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'milk'},
    {id: uuidv4(), text: 'eggs'},
    {id: uuidv4(), text: 'bread'},
    {id: uuidv4(), text: 'juice'},
  ]);

  const deleteItem = (id) => {
    setItems((previousItems) => {
      return previousItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please, enter an item', '', [
        {text: 'OK'},
        {cancelable: true},
      ]);
    } else {
      setItems((previousItems) => {
        return [{id: uuidv4(), text}, ...previousItems];
      });
      text = '';
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
