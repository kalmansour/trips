import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Explorer from "../Explorer";
import TripDetail from "../TripDetail";
import Profile from "../Profile";

const ExplorerStack = createStackNavigator();

const ExplorerStackScreen = () => {
  return (
    <ExplorerStack.Navigator>
      <ExplorerStack.Screen name="Explorer" component={Explorer} />
      <ExplorerStack.Screen name="TripDetail" component={TripDetail} />
      <ExplorerStack.Screen name="Profile" component={Profile} />
    </ExplorerStack.Navigator>
  );
};

export default ExplorerStackScreen;
