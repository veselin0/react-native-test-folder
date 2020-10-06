import React from 'react';
import {Text} from 'react-native';
import styles from './styles.js';

const Update = ({onPress}) => {
  return (
    <Text style={styles.update} onPress={onPress}>
      Update List Content
    </Text>
  );
};

export default Update;
