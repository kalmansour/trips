import React from "react";
import { useNavigation } from "@react-navigation/native";

import { EditButtonStyled } from "../../styles";

const EditButton = () => {
  const navigation = useNavigation();

  return (
    <EditButtonStyled
      type="MaterialCommunityIcons"
      name="account-edit-outline"
      onPress={() => navigation.navigate("editProfile")}
    />
  );
};

export default EditButton;
