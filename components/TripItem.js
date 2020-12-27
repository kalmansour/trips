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


const TripItem = ({ trip, navigation, explore }) => {
  const profile = profileStore.getProfileById(trip.userId);
  const other = 1;
  let myProfile;
  authStore.user.id === profileStore.userId ? (myProfile = 1) : (myProfile = 0);

  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Left>
        <Image style={{ width: 50, height: 50 }} source={{ uri: trip.image }} />
        <TripItemStyled>{trip.title}</TripItemStyled>
      </Left>
      {myProfile ? (
        <Right>
          <UpdateButton oldTrip={trip} />
          <DeleteButton tripId={trip.id} />
        </Right>
      ) : (
        <Right>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profile", {
                other: other,
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
