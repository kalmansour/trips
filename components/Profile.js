import React from "react";
import { observer } from "mobx-react";

//Components
import TripList from "./TripList";

//Stores
// import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";
import tripStore from "../stores/tripStore";

//Buttons
import SignOutButton from "./buttons/SignoutButton";

//Styles
import { ProfileWrapper, ProfileImage, ProfileBio } from "../styles";
import { Text } from "native-base";

const Profile = ({ navigation, route }) => {
  const { other } = route.params;
  const { userId } = route.params;
  let userProfile = {};

  while (authStore.user) {
    if (other) {
      userProfile = profileStore.getProfileById(userId);
    } else {
      userProfile = profileStore.getProfileById(authStore.userId);
    }
    console.log(userProfile);
    const trips = tripStore.trips.filter((trip) => trip.userId === userId);
    const explore = 0;
    return (
      <>
        <SignOutButton />
        <ProfileWrapper>
          <Text>{userProfile.username}</Text>
          <ProfileImage source={{ uri: userProfile.image }} />
          <ProfileBio>{userProfile.bio}</ProfileBio>
        </ProfileWrapper>
        <TripList trips={trips} explore={explore} navigation={navigation} />
      </>
    );
  }
};

export default observer(Profile);
