import React from "react";
import { Image } from "react-native";

//Stores
import tripStore from "../stores/tripStore";

//Styling
import { TripDetailWrapper, TripDetailImage, TripDetailTitle } from "../styles";
import { Spinner, Text } from "native-base";

//Components

const TripDetail = ({ navigation, route }) => {
  const { trip } = route.params;
  if (tripStore.loading) return <Spinner />;

  return (
    <>
      <TripDetailWrapper>
        <Image
          source={{
            uri: trip.image,
            // uri: trip.image.replace("localhost", "192.168.8.136"),
          }}
        />
        <TripDetailTitle>{trip.title}</TripDetailTitle>
      </TripDetailWrapper>
      <Text>{trip.description}</Text>
    </>
  );
};

export default TripDetail;
