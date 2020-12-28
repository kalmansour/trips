//Libraries
import React from "react";
import { observer } from "mobx-react";
import { Spinner, Text } from "native-base";

//Components
import TripList from "./TripList";

//Stores
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";
import tripStore from "../stores/tripStore";

//Buttons
import SignOutButton from "./buttons/SignoutButton";
import EditButton from "./buttons/EditButton";

//Styles
import { ProfileWrapper, ProfileImage, ProfileBio } from "../styles";

const Profile = ({ navigation, route }) => {
  if (!authStore.user) return <Spinner />;
  const userProfile = profileStore.getProfileById(
    route.params?.userId ? route.params.userId : authStore.user.id
  );
  console.log("1");
  const trips = tripStore.trips.filter(
    (trip) =>
      trip.userId ===
      (route.params?.userId ? route.params.userId : authStore.user.id)
  );
  return (
    <>
      <ProfileWrapper>
        {userProfile.id === authStore.user.id ? (
          <>
            <SignOutButton navigation={navigation} />
            <EditButton navigation={navigation} />
          </>
        ) : (
          <></>
        )}
        <Text>{userProfile.username}</Text>
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileBio>{userProfile.bio}</ProfileBio>
      </ProfileWrapper>
      <TripList trips={trips} navigation={navigation} />
    </>
  );
};

export default observer(Profile);
