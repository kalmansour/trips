//Libraries
import React from "react";
import { observer } from "mobx-react";

//Styles
import { TripItemStyled } from "../styles";
import { ListItem, Left, Right } from "native-base";
import { Image } from "react-native";

//Components
import UpdateButton from "./buttons/UpdateButton";
import DeleteButton from "./buttons/DeleteButton";

const TripItem = ({ trip, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Left>
        <Image style={{ width: 50, height: 50 }} source={{ uri: trip.image }} />
        <TripItemStyled>{trip.title}</TripItemStyled>
      </Left>
      <Right>
        <UpdateButton oldTrip={trip} />
        <DeleteButton tripId={trip.id} />
      </Right>
    </ListItem>
  );
};

export default observer(TripItem);
