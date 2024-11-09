import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./src/components/BottomTabsNavigator";
import MainHeader from "./src/components/MainHeader";
import CourseDetail from "./src/screens/CourseDetail";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader title="English App" />
      <CourseDetail />
      
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
