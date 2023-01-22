import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import { CompleteSvg } from '../../../../assets/icons/svgComplete';
import { DeleteSvg } from '../../../../assets/icons/svgDelete';
import {styles} from './styles';

interface IProps {
  deleteTask: () => void;
  task: {text: string; isDone: boolean; id: number};
  index: number;
  tasks: string;
  value: {};
}

export const TaskItem: FC<IProps> = ({task, index, deleteTask}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.indexContainer, task.isDone ? {backgroundColor: 'green'} : null]}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View
        style={[
          styles.taskContainer,
          task.isDone ? {backgroundColor: 'green'} : null,
        ]}>
        <Text style={styles.task}>{task.text}</Text>
        <TouchableOpacity onPress={deleteTask}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{task.isDone ? <CompleteSvg/>: <DeleteSvg />}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
