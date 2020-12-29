import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Profile from "../Profile";
import editProfile from "../editProfile";

//Buttons
import BackButton from "../buttons/BackButton";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="editProfile"
        component={editProfile}
        options={{
          headerTitle: null,
          headerTitle: null,
          headerBackTitle: null,
          headerBackTitleVisible: null,
          headerBackImage: () => <BackButton />,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
