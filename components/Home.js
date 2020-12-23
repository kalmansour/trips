import React from "react";
import {
  HomeBackground,
  Title,
  Description,
  TopStyling,
  BottomStyling,
  SkipStyled,
  OverLayContainer,
} from "../styles";

// import { SignoutButton } from "./buttons/SignoutButton"; // remove this unused import

//Stores
// import authStore from "../stores/authStore"; // remove this unused import

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://www.telegraph.co.uk/content/dam/cars/Spark/Peugeot/couple-driving-open-top-car.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Tripster</Title>
          <Description>Where adventurers come to inspire</Description>
        </TopStyling>
        <BottomStyling>
          <SkipStyled onPress={() => navigation.navigate("Signin")}>
            Click here to skip
          </SkipStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
