import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {AppRegistry} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AppRegistry.getAppKeys('Text').concat(count);
  });

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me!" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default App;
