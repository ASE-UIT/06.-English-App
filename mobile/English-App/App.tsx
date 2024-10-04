import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import MultipleChoiceFormat from "./src/components/SelectionQuestion/MultipleChoiceFormat";
import { Button } from '@rneui/themed';
export default function App() {
  return (
    <SafeAreaView className="w-full h-full pl-4 pt-16">
      {/* <MultipleChoiceFormat /> */}
      <Button title="Solid" />
      <Button title="Outline" type="outline" />
      <Button title="Clear" type="clear" />
    </SafeAreaView>
  );
}
