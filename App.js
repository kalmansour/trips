import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Componets
import RootNavigator from "./components/Navigation";
import bottomNav from "./components/Navigation/bottomNav";

//Styles
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <bottomNav />
          {/* <RootNavigator /> */}
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
