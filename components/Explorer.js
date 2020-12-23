import React from "react";
import { observer } from "mobx-react";

//Styling
import { Text, View } from "native-base";

//Components
import TripList from "./TripList";

//Stores
import tripStore from "../stores/tripStore";

const Explorer = () => {
  const trips = tripStore.trips;

  return (
    <>
      <TripList trips={trips} />
    </>
  );
};

export default observer(Explorer);
