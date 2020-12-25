import React from "react";
import { observer } from "mobx-react";
// import { List, Content } from "native-base";

//Components
import TripList from "./TripList";

//Stores
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";
import tripStore from "../stores/tripStore";

//Styles
import { ProfileWrapper, ProfileImage, ProfileBio } from "../styles";

const Profile = ({ navigation }) => {
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
    </>
  );
};

export default observer(Profile);
