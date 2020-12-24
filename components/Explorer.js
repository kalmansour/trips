import React from "react";
import { observer } from "mobx-react";

//Styling
import { Text, View } from "native-base";

//Components
import TripList from "./TripList";

//Stores
import tripStore from "../stores/tripStore";

const Explorer = ({ navigation }) => {
  const trips = tripStore.trips;

  // Fragments below aren't necessary, remove them.
  return (
    <>
      <TripList trips={trips} navigation={navigation} />
    </>
  );
};

export default observer(Explorer);
