import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./src/components/BottomTabsNavigator";
import MainHeader from "./src/components/MainHeader";
import FlashCard from "./src/screens/FlashCard";
import LearningScreen from "./src/screens/LearningScreen";
import SignUp from "./src/screens/SignUp";
import Writing_submit from "./src/components/Writing/Writing_submit";
import Writing_task from "./src/components/Writing/Writing_task";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader title="English App" />

          <LearningScreen />

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
