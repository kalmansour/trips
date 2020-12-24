import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import createTrip from "../createTrip";
import TripDetail from "../TripDetail";
import Explorer from "../Explorer";
// import headerRight from "../headerRight";

//Buttons
import SignoutButton from "../buttons/SignoutButton";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Explorer">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => <SignoutButton />,
        }}
      />

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
      <Screen name="createTrip" component={createTrip} />
      <Screen name="TripDetail" component={TripDetail} />
    </Navigator>
  );
};

export default RootNavigator;
