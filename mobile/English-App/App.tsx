import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./src/Navigation/BottomTabsNavigator";
import MainHeader from "./src/components/MainHeader";
import { createStackNavigator } from "@react-navigation/stack";
import RootStack from "./src/Navigation/RootStack";
import CourseDetail from "./src/screens/CourseDetail";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <MainHeader title="English App" />
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
    
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
