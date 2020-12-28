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
  console.log(trip.image);
  return (
    <>
      <TripDetailWrapper>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: trip.image,
          }}
        />
        <TripDetailTitle>{trip.title}</TripDetailTitle>
      </TripDetailWrapper>
      <Text>{trip.description}</Text>
    </>
  );
};

export default TripDetail;
