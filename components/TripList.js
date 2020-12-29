//Libraries
import React from "react";

//Components
import TripItem from "./TripItem";

//Styles
import { List, Content } from "native-base";

const TripList = ({ trips, navigation }) => {
  const tripList = trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Content style={{ marginTop: 10 }}>
      <List>{tripList}</List>
    </Content>
  );
};

export default TripList;
