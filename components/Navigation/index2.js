import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Components
import Home from "../Home";
import createTrip from "../createTrip";
import ExplorerStackScreen from "../Stacks/ExplorerStackScreen";
import ProfileStackScreen from "../Stacks/ProfileStackScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explorer" component={ExplorerStackScreen} />
      <Tab.Screen name="createTrip" component={createTrip} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
