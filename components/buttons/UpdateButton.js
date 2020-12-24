import React from "react";
import { useNavigation } from "@react-navigation/native";

//Styles
import { UpdateButtonStyled, UpdateTextStyled } from "../../styles";

const UpdateButton = ({ oldTrip }) => {
  const navigation = useNavigation();

  return (
    <UpdateButtonStyled
      onPress={() => navigation.navigate("createTrip", { oldTrip })}
    >
      <UpdateTextStyled>Update</UpdateTextStyled>
    </UpdateButtonStyled>
  );
};

export default UpdateButton;
