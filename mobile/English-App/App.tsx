import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./src/Navigation/BottomTabsNavigator";
import MainHeader from "./src/components/MainHeader";
export default function App() {
  return (
  
      <SafeAreaView style={styles.container}>
        <MainHeader title="English App" />
        <NavigationContainer>

          <BottomTabsNavigator />
        </NavigationContainer>
      </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
});
