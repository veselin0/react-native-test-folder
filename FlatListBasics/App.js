import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dani'},
          {key: 'Domi'},
          {key: 'Jack'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jill'},
          {key: 'Jimmi'},
          {key: 'julie'},
          {key: 'Gocho'},
          {key: 'Kochev'},
        ]}
        renderItem={({item}) => <Text styles={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;
