import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {
  saveTasks,
  saveTasksName,
  taskName,
  tasksList,
} from "../../entities/tasks/tasksSlice";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const useTasks = () => {
  const tasks = useSelector(tasksList);
  const tasksName = useSelector(taskName);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

  const setTaskName = (name: string) => {
    dispatch(saveTasksName(name));
  };
  const handleAddTask = (value: string) => {
    addTask(value);
    dispatch(saveTasksName(""));
  };

  const storeData = async (
    save: { text: string; isDone: boolean; id: number }[]
  ) => {
    try {
      const jsonValue = JSON.stringify(save);
      await AsyncStorage.setItem("Todo_list", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("Todo_list");
      const todoList = JSON.parse(value as string);
      if (value !== null) {
        dispatch(saveTasks(todoList));
      }
    } catch (e) {
      console.log(e);
    }
  };


  const addTask = (task: string) => {
    const newTask = { text: task, id: new Date().getTime(), isDone: false };
    if (task) {
      dispatch(saveTasks([...tasks, newTask]));
      storeData([...tasks, newTask]);
      Keyboard.dismiss();
    }
  };

  const deleteTask = (deleteIndex: number) => {
    const newTasks = tasks.filter((value, index) => index != deleteIndex);
    dispatch(saveTasks(newTasks));
    storeData(newTasks);
  };

  const setDone = (id: number) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    dispatch(saveTasks(newTasks));
    storeData(newTasks);
  };
  return{
    deleteTask, setDone,handleAddTask,setTaskName,tasksName,tasks
  }
};
