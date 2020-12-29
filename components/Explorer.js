import React from "react";
import { observer } from "mobx-react";

//Components
import TripList from "./TripList";

//Stores
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";
import { View } from "native-base";

const Explorer = ({ navigation }) => {
  while (authStore.user) {
    const trips = tripStore.trips.filter(
      (trip) => trip.userId !== authStore.user.id
    );
    return <TripList trips={trips} navigation={navigation} />;
  }
};

export default observer(Explorer);
