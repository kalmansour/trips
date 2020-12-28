//Libraries
import React from "react";
import { observer } from "mobx-react";

//Styles
import { TripItemStyled } from "../styles";
import { ListItem, Left, Right } from "native-base";
import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

//Components
import UpdateButton from "./buttons/UpdateButton";
import DeleteButton from "./buttons/DeleteButton";

//Stores
import profileStore from "../stores/profileStore";
import authStore from "../stores/authStore";

const TripItem = ({ trip, navigation }) => {
  const profile = profileStore.getProfileById(trip.userId);
  let myProfile;
  authStore.user.id === profile.userId ? (myProfile = 1) : (myProfile = 0);

  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Left>
        <Image style={{ width: 50, height: 50 }} source={{ uri: trip.image }} />
        <TripItemStyled>{trip.title}</TripItemStyled>
      </Left>
      {myProfile ? (
        <Right>
          <UpdateButton oldTrip={trip} navigation={navigation} />
          <DeleteButton tripId={trip.id} />
        </Right>
      ) : (
        <Right>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profile", {
                userId: profile.userId,
              })
            }
          >
            <Text>created by {profile.username}</Text>
          </TouchableOpacity>
        </Right>
      )}
    </ListItem>
  );
};

export default observer(TripItem);
