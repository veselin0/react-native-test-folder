import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function GoalItem(props) {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'silver',
    borderColor: 'olive',
    borderWidth: 5,
  },
});
