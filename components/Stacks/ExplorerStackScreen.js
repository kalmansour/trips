import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Explorer from "../Explorer";
import TripDetail from "../TripDetail";
import Profile from "../Profile";

//Buttons
import BackButton from "../buttons/BackButton";

const ExplorerStack = createStackNavigator();

const ExplorerStackScreen = () => {
  return (
    <ExplorerStack.Navigator>
      <ExplorerStack.Screen
        name="Explorer"
        component={Explorer}
        options={{ headerShown: false }}
      />
      <ExplorerStack.Screen
        name="TripDetail"
        component={TripDetail}
        options={{
          headerStyle: {
            backgroundColor: null,
          },
          headerTitle: null,
          headerTitle: null,
          headerBackTitle: null,
          headerBackTitleVisible: null,
          headerBackImage: () => <BackButton />,
        }}
      />
      <ExplorerStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: null,
          },
          headerTitle: null,
          headerBackTitle: null,
          headerBackTitleVisible: null,
          headerBackImage: () => <BackButton />,
        }}
      />
    </ExplorerStack.Navigator>
  );
};

export default ExplorerStackScreen;
