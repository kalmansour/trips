//Libraries
import React from "react";
import { observer } from "mobx-react";

//Styles
import { TripItemStyled } from "../styles";
import { ListItem, Left, Right } from "native-base";
import { Image } from "react-native";

const TripItem = ({ trip }) => {
  return (
    <ListItem>
      <Left>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: trip.image.replace("localhost", "192.168.8.136") }}
        />
        <TripItemStyled>{trip.title}</TripItemStyled>
      </Left>
      <Right></Right>
    </ListItem>
  );
};

export default observer(TripItem);
