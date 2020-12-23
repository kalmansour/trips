import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import TripList from "../TripList";
import Explorer from "../Explorer";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Explorer">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />

      <Screen name="Explorer" component={Explorer} />
    </Navigator>
  );
};

export default RootNavigator;
