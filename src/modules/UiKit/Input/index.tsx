import React, {Dispatch, FC, SetStateAction} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { EddTodoSvg } from '../../../../assets/icons/svgEddTodo';
import {styles} from './style';

interface IProps {
  task: string;
  setTask: (value: string) => void;
  handleAddTask: (value: string) => void;
}

export const Input: FC<IProps> = ({setTask, handleAddTask, task}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerInput}>
      <TextInput
        style={styles.inputField}
        value={task}
        onChangeText={text => setTask(text)}
        placeholder={'Write a task'}
        placeholderTextColor={'#fff'}
      />
      <TouchableOpacity onPress={() => handleAddTask(task)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}><EddTodoSvg/></Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
