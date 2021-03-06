import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { Button, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

//Styling
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
} from "../styles";

//Stores
import tripStore from "../stores/tripStore";

const createTrip = ({ navigation, route }) => {
  const [trip, setTrip] = useState(
    route.params?.oldTrip ?? {
      title: "",
      description: "",
      image: "",
    }
  );
  const handleSubmit = async () => {
    if (route.params?.oldTrip) {
      await tripStore.updateTrip(trip);
      route.params.oldTrip = null;
    } else await tripStore.createTrip(trip);
    navigation.navigate("ProfileScreen");
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      setTrip({ ...trip, image: { uri: localUri, name: filename, type } });
    }
  };

  return (
    <>
      <AuthContainer>
        <AuthTitle>
          {route.params?.oldTrip ? "Update trip" : "Post trip"}
        </AuthTitle>
        <AuthTextInput
          onChangeText={(title) => setTrip({ ...trip, title })}
          placeholder="Title"
          placeholderTextColor="#A6AEC1"
          autoCapitalize="none"
        />
        <AuthTextInput
          onChangeText={(description) => setTrip({ ...trip, description })}
          placeholder="description"
          placeholderTextColor="#A6AEC1"
          autoCapitalize="none"
        />
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {trip.image ? (
          <Image
            source={{ uri: trip.image.uri }}
            style={{ width: 200, height: 200 }}
          />
        ) : (
          <></>
        )}
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>
            {route.params?.oldTrip ? "Update trip" : "Post trip"}
          </AuthButtonText>
        </AuthButton>
      </AuthContainer>
    </>
  );
};

export default observer(createTrip);
