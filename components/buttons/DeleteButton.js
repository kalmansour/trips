import React from "react";
import { observer } from "mobx-react";

//Store
import tripStore from "../../stores/tripStore";

//Styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ tripId }) => {
  return (
    <DeleteButtonStyled
      type="AntDesign"
      name="delete"
      onPress={() => tripStore.deleteTrip(tripId)}
    />
  );
};

export default observer(DeleteButton);
