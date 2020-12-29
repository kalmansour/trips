import styled from "styled-components/native";
import { Icon, Button } from "native-base";

export const theme = {
  Maincolor: "#FF5A5F", // redish main font color
  backgroundColor: "#f5fffa", // white main background color
  black: "black",
  blackish: "#484848",
  grey: "#767676",
  blueish: "#00A699",
};

//Profile
export const ProfileWrapper = styled.View`
  margin-top: 50px;
`;

export const ProfileImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 100px;
`;

export const ProfileUsernameStyled = styled.Text`
  color: ${({ theme }) => theme.black};
  font-weight: bold;
  font-size: 30px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
`;

export const ProfileBio = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-weight: bold;
  font-size: 20px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
`;

//Home Styling
export const HomeBackground = styled.ImageBackground`
  flex: 1px;
  width: 100%;
  height: 100px;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.Maincolor};
  font-size: 38px;
  text-align: center;
  font-weight: bold;
`;

export const Description = styled.Text`
  margin-top: 5px;
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 25;
  font-style: italic;
  text-align: center;
`;

export const OverLayContainer = styled.View`
  flex: 1px;
  background-color: rgba(255, 90, 95, 0.2);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const SkipStyled = styled.Text`
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

export const SignOutButtonStyled = styled(Icon)`
  color: ${({ theme }) => theme.blueish};
  margin-right: 10px;
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const BackButtonStyled = styled(Icon)`
  color: black;
  margin-right: 10px;
  padding-left: 20px;
`;

//Signin && Signup Styling
export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.backgroundColor}; */
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
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 30px;
  width: 100%;
`;

export const TripImageStyled = styled.Image`
  width: 100;
  height: 100;
`;

//Edit Button
export const EditButtonStyled = styled(Icon)`
  color: ${({ theme }) => theme.blueish};
  padding-left: 20px;
  margin-bottom: 10px;
`;

//Delete Button
export const DeleteButtonStyled = styled(Icon)`
  color: red;
  margin-right: 10px;
  padding-left: 20px;
`;

//Update Button
export const UpdateButtonStyled = styled(Icon)`
  color: ${({ theme }) => theme.blueish};
  margin-right: 5px;
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const UpdateTextStyled = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 16px;
  font-weight: bold;
  flex: 1px;
`;

//Trip Details Styling
export const TripDetailImage = styled.Image`
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: 300px;
`;

export const TripDetailWrapper = styled.View`
  margin-top: 50px;
`;

export const TripDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: ${({ theme }) => theme.Maincolor};
  text-align: left;
  margin-top: 10px;
  margin-left: 40px;
`;

export const TripDescription = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.blackish};
  text-align: left;
  margin-top: 10px;
  margin-left: 40px;
  margin-right: 20px;
`;
