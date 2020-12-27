import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import {observer} from "mobx-react"

//Components
import Signin from "../authentication/Signin";
import Explorer from "../Explorer";
import TripDetail from "../TripDetail";

const ExplorerStack = createStackNavigator();

const ExplorerStackScreen = () => {
  return (
    <ExplorerStack.Navigator>
      <ExplorerStack.Screen name="Explorer" component={Explorer} />
      <ExplorerStack.Screen name="TripDetail" component={TripDetail} />
      <ExplorerStack.Screen name="Signin" component={Signin} />
    </ExplorerStack.Navigator>
  );
};

export default ExplorerStackScreen;
