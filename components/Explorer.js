import React from "react";
import { observer } from "mobx-react";

//Styling
import { Text, View } from "native-base";

//Components
import TripList from "./TripList";

//Stores
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";

const Explorer = ({ navigation }) => {
  if (!authStore.user) navigation.navigate("Signin");
  const trips = tripStore.trips;
  const explore = 1;

  return (
    <>
      <TripList trips={trips} navigation={navigation} explore={explore} />
    </>
  );
};

export default observer(Explorer);
