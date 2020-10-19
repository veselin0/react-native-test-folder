import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function AddItem({title, addItem}) {
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add Item"
        style={StyleSheet.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText('');
        }}>
        <Text style={styles.btn.Text}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    paddingTop: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: 'darkolivegreen',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'indigo',
    fontSize: 20,
    textAlign: 'center',
  },
});
