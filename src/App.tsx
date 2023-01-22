import React, { FC } from "react";
import { store } from "./repository/index";
import { Provider } from "react-redux";
import { RootNavigator } from "./navigation/rootNavigator";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <RootNavigator/>
    </Provider>
  );
};
