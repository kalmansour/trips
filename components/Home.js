import React from "react";
import {
  HomeBackground,
  Title,
  TopStyling,
  BottomStyling,
  SkipStyled,
  OverLayContainer,
} from "../styles";

const Home = () => {
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
        </TopStyling>
        <BottomStyling>
          <SkipStyled>Click here to skip</SkipStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
