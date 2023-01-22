import React, { FC,} from 'react';
import { ScrollView, TouchableOpacity, View,} from 'react-native';
import { Input } from '../../../UiKit/Input';
import { TaskItem } from '../../../UiKit/TaskItem';
import { useTasks } from '../../presenters/useTasks';
import { styles } from './style';
import {Theitle} from '../../../UiKit/Title/index'

export const TasksScreen: FC = () => {
  const { deleteTask, setDone, handleAddTask, setTaskName, tasksName, tasks } = useTasks()
  return (
    <View style={styles.container}>
      <Theitle title={''} tasks={{}} />
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.taskContainer}
              onPress={() => setDone(task.id)}>
              <TaskItem
                index={index + 1}
                task={task}
                value={''}
                deleteTask={() => deleteTask(index)}
                tasks={''}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Input task={tasksName} setTask={setTaskName} handleAddTask={handleAddTask} />
    </View>
  );
};

