import { SafeAreaView } from "react-native";
import VideoLearning from "./src/components/VideoLearning/VideoLearning";
import CourseItem from "./src/components/CourseItem";

export default function App() {
  return (
    <SafeAreaView className="w-full h-full pt-16">
      <CourseItem rated={2} progress={25} teacherName="Vinh Thinh" title="TOEIC" srcImg="https://images.unsplash.com/photo-1728996152930-233c5aca21d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"/>
    </SafeAreaView>
  );
}
