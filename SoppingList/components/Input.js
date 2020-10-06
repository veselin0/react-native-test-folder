import React, {useState} from 'react';
import {TextInput} from 'react-native';
import styles from './styles.js';

const Input = () => {
  const [value, onChange] = useState('');
  return (
    <TextInput
      style={styles.tImp}
      placeholder="Type Here!"
      onChange={(text) => onChange(text)}
      value={value}
    />
  );
};
export default Input;
