import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TasksScreen } from "../../modules/tasks/ui/TasksScreen";
import { ChatScreen } from "../../modules/chat/ui/ChatScreen";
import { TodoSvg } from "../../../assets/icons/svgTasks";
import { ChatSvg } from "../../../assets/icons/svgChat";
import {tasksList } from "../../modules/entities/tasks/tasksSlice";
import { useSelector } from "react-redux";
import { ITask } from "../../modules/entities/tasks/ITask";
import { IChatTask } from "../../modules/entities/chat/IChatTask";
import {chatTasksList } from "../../modules/entities/chat/chatSlice";

const Tab = createBottomTabNavigator();

export const TabNavigator: FC = () => {
  const tasks:ITask[] = useSelector(tasksList);
  const chat:IChatTask[] = useSelector(chatTasksList)

  return (
      <Tab.Navigator screenOptions={{
        headerShown: false ,
        tabBarShowLabel:false, 
        tabBarStyle:{
        backgroundColor:'#1E1A3C'
      }}} >
        <Tab.Screen  name="Tasks" component={TasksScreen}  options={{tabBarBadge:  tasks.length ? tasks.length : undefined , tabBarIcon:({focused})=> <TodoSvg color={focused ? 'blue' : '#fff'} width={focused ? 40 : 34} height={focused? 40 : 34}/>}} 
        />
        <Tab.Screen name="Chat" component={ChatScreen}  options={{tabBarBadge: chat.length ? chat.length : undefined, tabBarIcon:({focused})=> <ChatSvg color={focused ?  'blue': '#fff'} width={focused ? 40 : 34} height={focused? 40 : 34}/>}} 
        />
      </Tab.Navigator>
  );
};
