import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 8,
    backgroundColor: 'darkmagenta',
  },
  text: {
    color: 'deeppink',
    fontSize: 25,
    textAlign: 'center',
  },
});
