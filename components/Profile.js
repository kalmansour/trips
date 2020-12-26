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
import Signin from "./authentication/Signin";

const Profile = ({ navigation }) => {
  const userProfile = profileStore.getProfileById(authStore.user.id);

  const trips = tripStore.trips;
  const explore = 0;
  return (
    <>
      {authStore.user ? (
        <>
          <ProfileWrapper>
            <ProfileImage source={{ uri: userProfile.image }} />
            <ProfileBio>{userProfile.bio}</ProfileBio>
          </ProfileWrapper>
          <TripList trips={trips} explore={explore} navigation={navigation} />
        </>
      ) : (
        <>
          <Signin />
        </>
      )}
    </>
  );
};

export default observer(Profile);
