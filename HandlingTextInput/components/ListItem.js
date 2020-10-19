import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function ListItem({item, deleteItem}) {
  return (
    <TouchableOpacity
      style={styles.ListItem}
      onPress={() => deleteItem(item.id)}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ListItem: {
    paddingTop: 15,
    backgroundColor: 'darksalmon',
    borderBottomWidth: 2,
    borderColor: 'firebrick',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
