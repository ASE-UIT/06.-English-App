import { SafeAreaView } from "react-native";
import VideoLearning from "./src/components/VideoLearning/VideoLearning";
import CourseItem from "./src/components/CourseItem";
import LearningScreen from "./src/screens/LearningScreen";

export default function App() {
  return (
    <SafeAreaView className="w-full h-full pt-16">
      <LearningScreen />
    </SafeAreaView>
  );
}
