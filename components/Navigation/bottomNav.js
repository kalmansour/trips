import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Components
import createTrip from "../createTrip";
import Explorer from "../Explorer";
import Profile from "../Profile";

const Tab = createBottomTabNavigator();

const bottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explorer" component={Explorer} />
      <Tab.Screen name="createTrip" component={createTrip} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default bottomNav;
