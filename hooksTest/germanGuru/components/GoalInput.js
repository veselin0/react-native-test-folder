import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

export default function GoalInput(props) {
  const [enteredGoal, setEnteredgoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredgoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'tomato',
    borderWidth: 5,
    padding: 10,
  },
});
