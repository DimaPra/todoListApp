import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';


interface IProps {
  title: string;
  tasks: {};
}

export const Theitle: FC<IProps> = ({title, tasks}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.heading}>TODO LIST</Text>
      </View>
    </View>
  );
};
