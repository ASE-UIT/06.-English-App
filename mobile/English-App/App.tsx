import { SafeAreaView } from "react-native";
import SpeakingExercise from "./src/components/Speaking.tsx";
import AppLoading from "expo-app-loading";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";

export default function App() {

  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  } else {
    console.log("Fonts loaded");
  }
  
  return <SafeAreaView className="w-full h-full  pt-16">
    <SpeakingExercise />
  </SafeAreaView>;
}
