//Libraries
import React from "react";
import { observer } from "mobx-react";

//Components
import TripItem from "./TripItem";

//Styles
import { List, Content } from "native-base";
import tripStore from "../stores/tripStore";

const TripList = ({ trips, navigation }) => {
  //   const trips = tripStore.trips;

  const tripList = trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));
  return (
    <Content>
      <List>{tripList}</List>
    </Content>
  );
};

export default observer(TripList);
