import React from "react";
import { observer } from "mobx-react";

//Components
import TripList from "./TripList";

//Stores
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";

const Explorer = ({ navigation }) => {
  while (authStore.user) {
    const trips = tripStore.trips.filter(
      (trip) => trip.userId !== authStore.user.id
    );
    const explore = 1;

    return <TripList trips={trips} navigation={navigation} explore={explore} />;
  }
  navigation.replace("Signin");
};

export default observer(Explorer);
