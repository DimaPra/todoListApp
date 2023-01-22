import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { StackNavigator } from "../stackNavigator";
import {TabNavigator} from '../tabNavigator'

export const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
};
