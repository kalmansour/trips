//Libraries
import React from "react";
import { observer } from "mobx-react";

//Stores
import authStore from "../stores/authStore";

//Components
import TripItem from "./TripItem";

//Styles
import { List, Content } from "native-base";

const TripList = ({ trips, navigation, explore }) => {
  const exploreList = trips
    .filter((trip) => trip.userId !== authStore.user.id)
    .map((trip) => (
      <TripItem
        trip={trip}
        key={trip.id}
        navigation={navigation}
        explore={explore}
      />
    ));

  const profileList = trips
    .filter((trip) => trip.userId === authStore.user.id)
    .map((trip) => (
      <TripItem
        trip={trip}
        key={trip.id}
        navigation={navigation}
        explore={explore}
      />
    ));

  return (
    <Content>
      {explore ? <List>{exploreList}</List> : <List>{profileList}</List>}
    </Content>
  );
};

export default observer(TripList);
