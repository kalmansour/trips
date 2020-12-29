import React from "react";
import { useNavigation } from "@react-navigation/native";

//Styles
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ oldTrip }) => {
  const navigation = useNavigation();

  return (
    <UpdateButtonStyled
      type="FontAwesome5"
      name="edit"
      onPress={() => navigation.navigate("createTrip", { oldTrip })}
    />
  );
};

export default UpdateButton;
