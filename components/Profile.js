//Libraries
import React from "react";
import { observer } from "mobx-react";
import {
  Body,
  Left,
  ListItem,
  Right,
  Spinner,
  Text,
  View,
  Item,
} from "native-base";

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
import {
  ProfileWrapper,
  ProfileImage,
  ProfileUsernameStyled,
  ProfileBio,
} from "../styles";

const Profile = ({ navigation, route }) => {
  if (!authStore.user) return <Spinner />;
  const userProfile = profileStore.getProfileById(
    route.params?.userId ? route.params.userId : authStore.user.id
  );
  const trips = tripStore.trips.filter(
    (trip) =>
      trip.userId ===
      (route.params?.userId ? route.params.userId : authStore.user.id)
  );
  return (
    <>
      <ProfileWrapper>
        {userProfile.id === authStore.user.id ? (
          <View style={{ height: 50 }}>
            <Item style={{ marginTop: 0 }}>
              <Left>
                <EditButton
                  navigation={navigation}
                  style={{ marginRight: 100 }}
                />
              </Left>
              <Right>
                <SignOutButton navigation={navigation} />
              </Right>
            </Item>
          </View>
        ) : (
          <></>
        )}
        <ProfileImage source={{ uri: userProfile.image }} />
        <ProfileUsernameStyled>{userProfile.username}</ProfileUsernameStyled>
        <ProfileBio>{userProfile.bio}</ProfileBio>
      </ProfileWrapper>
      <TripList trips={trips} navigation={navigation} />
    </>
  );
};

export default observer(Profile);
