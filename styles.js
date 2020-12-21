import styled from "styled-components/native";

export const theme = {
  light: {
    mainColor: "mediumpurple", // main font color
    backgroundColor: "#f5fffa", // main background color
    pink: "#eea9b8",
    red: "#FF0000",
  },
  dark: {
    mainColor: "#f5fffa", // main font color
    backgroundColor: "mediumpurple", // main background color
    pink: "#eea9b8",
    red: "#FF0000",
  },
};

//Home Styling
export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: black;
  font-size: 38;
  text-align: center;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const SkipStyled = styled.Text`
  font-size: 20;
  color: #fff;
  text-align: center;
`;
