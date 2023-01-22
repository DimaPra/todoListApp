import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {FC, useEffect, useState} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Input} from './component/Input';
import {TaskItem} from './component/Task';
import {Theitle} from './component/Title';

interface IProps {
  tasks: number;
  task: string;
  isDone: boolean;
  id: string;
}

export const App: FC<IProps> = () => {
  const [tasks, setTasks] = useState<{text: string; isDone: boolean; id: number}[]>([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const handleAddTask = (value: string) => {
    addTask(value);
    setTask('');
  };

  const storeData = async (
    save: {text: string; isDone: boolean; id: number}[],
  ) => {
    try {
      const jsonValue = JSON.stringify(save);
      await AsyncStorage.setItem('Todo_list', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Todo_list');
      const todoList = JSON.parse(value as string);
      if (value !== null) {
        setTasks(todoList);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addTask = (task: string) => {
    const newTask = {text: task, id: new Date().getTime(), isDone: false};
    if (task) {
      setTasks([...tasks, newTask]);
      storeData([...tasks, newTask]);
      Keyboard.dismiss();
    }
  };

  const deleteTask = (deleteIndex: number) => {
    const newTasks = tasks.filter((value, index) => index != deleteIndex);
    setTasks(newTasks);
    storeData(newTasks);
  };

  const setDone = (id: number) => {
    const newTasks = tasks.map(task =>
      task.id === id ? {...task, isDone: !task.isDone} : task,
    );
    setTasks(newTasks);
    storeData(newTasks);
  };
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
      <Input task={task} setTask={setTask} handleAddTask={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});
