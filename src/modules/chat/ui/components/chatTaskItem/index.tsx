import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { CompleteSvg } from '../../../../../../assets/icons/svgComplete';
import { DeleteSvg } from '../../../../../../assets/icons/svgDelete';
import { IChatTask } from '../../../../entities/chat/IChatTask';
 
import {styles} from './styles';

interface IProps {
  task: IChatTask;
}

export const ChatTaskItem: FC<IProps> = ({task}) => {
  return (
      <TouchableOpacity style={styles.container}>
      <View style={[styles.indexContainer, task.completed ? {backgroundColor: 'green'} : null]}>
        <Text style={styles.index}>{task.id}</Text>
      </View>
      <View
        style={[
          styles.taskContainer,
          task.completed ? {backgroundColor: 'green'} : null,
        ]}>
        <Text style={styles.task}>{task.title}</Text>
        
        <TouchableOpacity >
          <View style={styles.button}>
            <Text style={styles.buttonText}>{task.completed ? <CompleteSvg/>: <DeleteSvg />}</Text>
          </View>
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
  );
};
