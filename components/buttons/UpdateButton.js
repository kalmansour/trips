import React from "react";
// import { observer } from "mobx-react";

//Styles
import { UpdateButtonStyled, UpdateTextStyled } from "../../styles";

const UpdateButton = ({ oldTrip, navigation }) => {
  return (
    <UpdateButtonStyled
      onPress={() => navigation.navigate("createTrip", { oldTrip })}
    >
      <UpdateTextStyled>Update</UpdateTextStyled>
    </UpdateButtonStyled>
  );
};

export default UpdateButton;
