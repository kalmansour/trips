import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import {observer} from "mobx-react"

//Components
import Signin from "../authentication/Signin";
import Profile from "../Profile";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Signin" component={Signin} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
