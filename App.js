import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Componets
// import RootNavigator from "./components/Navigation";
import MyTabs from "./components/Navigation/index2";

//Styles
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MyTabs />
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
