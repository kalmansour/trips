import React from "react";
import { observer } from "mobx-react";

//Store
import authStore from "../../stores/authStore";

//Styles
import { SignOutButtonStyled } from "../../styles";

const SignoutButton = () => {
  return (
    authStore.user && (
      <SignOutButtonStyled
        type="AntDesign"
        name="logout"
        onPress={authStore.signout}
      />
    )
  );
};

export default observer(SignoutButton);
