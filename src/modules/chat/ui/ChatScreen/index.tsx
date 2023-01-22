import React, { FC} from 'react';
import { ActivityIndicator,FlatList, TouchableOpacity, View,} from 'react-native';
import { useChat } from '../../presenters/useChat';
import { ChatTaskItem } from '../components/chatTaskItem';
import { styles } from './style';


export const ChatScreen: FC = () => {
  const {isLoading, chatTasks} = useChat();
  
  return (
    
    <View style={styles.container}>
      {isLoading 
      ? <ActivityIndicator/> 
      : <FlatList contentContainerStyle={{alignItems:  'center'}}
      data={chatTasks}
      renderItem={({item}) => <ChatTaskItem task={item}  />}
      keyExtractor={item => item.id}
    />
      }
  </View>
  );
};








 // const chat = async () => {
  //  const obj = await fetch("https://jsonplaceholder.typicode.com/todos")
  //  const result = await obj.json();
  //  console.log(result);
   
  // }
  // chat()