import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import MultipleChoiceFormat from "./src/components/MultipleChoiceQuestion/MultipleChoiceFormat";
import SelectionFormat from "./src/components/SelectionFormat/SelectionFormat";

export default function App() {
  return (
    <SafeAreaView className="w-full h-full pl-4 pt-16">
      <SelectionFormat/>
    </SafeAreaView>
  );
}
