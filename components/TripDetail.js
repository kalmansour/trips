import React from "react";
import { Image } from "react-native";

//Stores
import tripStore from "../stores/tripStore";

//Styling
import {
  TripDetailWrapper,
  TripDetailImage,
  TripDetailTitle,
  TripDescription,
} from "../styles";
import { Spinner, Text } from "native-base";

//Components

const TripDetail = ({ navigation, route }) => {
  const { trip } = route.params;
  if (tripStore.loading) return <Spinner />;
  console.log(trip.image);
  return (
    <>
      <TripDetailWrapper>
        <TripDetailImage
          source={{
            uri: trip.image,
          }}
        />
        <TripDetailTitle>{trip.title}</TripDetailTitle>
      </TripDetailWrapper>
      <TripDescription>{trip.description}</TripDescription>
    </>
  );
};

export default TripDetail;
