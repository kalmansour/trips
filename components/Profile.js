import React from "react";
import { observer } from "mobx-react";

//Components
import TripList from "./TripList";

//Stores
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";
import tripStore from "../stores/tripStore";

//Buttons
import SignOutButton from "./buttons/SignoutButton";

//Styles
import { ProfileWrapper, ProfileImage, ProfileBio } from "../styles";

const Profile = ({ navigation }) => {
  if (!authStore.user) {
    console.log(1);
    navigation.navigate("Signin");
  }

  const userProfile = profileStore.getProfileById(authStore.user.id);
  const trips = tripStore.trips;
  const explore = 0;
  return (
    <>
      <ProfileWrapper>
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileBio>{userProfile.bio}</ProfileBio>
      </ProfileWrapper>
      <TripList trips={trips} explore={explore} navigation={navigation} />
      <SignOutButton />
    </>
  );
};

export default observer(Profile);
