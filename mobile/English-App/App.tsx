import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import MultipleChoiceFormat from "./src/components/SelectionQuestion/MultipleChoiceFormat";
import VideoLearning from "./src/components/VideoLearning/VideoLearning";

export default function App() {
  return (
    <SafeAreaView className="w-full h-full pl-4 pt-16">
      <VideoLearning />
    </SafeAreaView>
  );
}
