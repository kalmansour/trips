import styled from "styled-components/native";
import { Icon, Button } from "native-base";

export const theme = {
  Maincolor: "#FF5A5F", // redish main font color
  backgroundColor: "#f5fffa", // white main background color
  blackish: "#484848",
  grey: "#767676",
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
  color: ${({ theme }) => theme.Maincolor};
  font-size: 38;
  text-align: center;
  font-weight: bold;
`;

export const Description = styled.Text`
  margin-top: 5;
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 25;
  font-style: italic;
  text-align: center;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(255, 90, 95, 0.2);
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

export const SignOutButtonStyled = styled(Icon)`
  color: black;
  margin-right: 10px;
  padding-left: 20;
`;

//Signin && Signup Styling
export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: ${(props) => props.theme.blackish};
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: ${({ theme }) => theme.blackish};
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.blackish};
  border-bottom-color: ${({ theme }) => theme.blackish};
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.Maincolor};
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: ${({ theme }) => theme.backgroundColor};
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: ${({ theme }) => theme.blackish};
  margin-top: 15px;
`;

//Trip Item Styling
export const TripItemStyled = styled.Text`
  color: ${({ theme }) => theme.Maincolor};
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

//Delete Button
export const DeleteButtonStyled = styled(Icon)`
  color: red;
  margin-right: 10px;
  padding-left: 20;
`;

//Update Button
export const UpdateButtonStyled = styled(Button)`
  height: 35;
  width: 70;
  margin-top: 10;
  /* background-color: ${({ theme }) => theme.mainColor}; */
`;

export const UpdateTextStyled = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 16;
  font-weight: bold;
  flex: 1;
`;

//Trip Details Styling
export const TripDetailImage = styled.Image`
  width: 150;
  height: 150;
`;

export const TripDetailWrapper = styled.View`
  margin-top: 50;
`;

export const TripDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40;
`;
