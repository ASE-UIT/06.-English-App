import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./src/components/BottomTabsNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}
