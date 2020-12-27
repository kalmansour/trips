import React from "react";
import { useNavigation } from "@react-navigation/native";

import { EditButtonStyled } from "../../styles";

const EditButton = () => {
  const navigation = useNavigation();

  return (
    <EditButtonStyled
      type="AntDesign"
      name="edit"
      onPress={() => navigation.navigate("editProfile")}
    />
  );
};

export default EditButton;
