import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Components
import createTrip from "../createTrip";
import Explorer from "../Explorer";
import Profile from "../Profile";
import Home from "../Home";

//Buttons
import SignoutButton from "../buttons/SignoutButton";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerRight: () => <SignoutButton /> }}
      />
      <Tab.Screen name="Explorer" component={Explorer} />
      <Tab.Screen name="createTrip" component={createTrip} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MyTabs;
