import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Test from "./src/screens/TestScreen/Test";
import Sentence_completion_format from "./src/components/Sentence_completion_format";
import Writing_submit from "./src/components/Writing_submit";

const questionList = [
  {
    question: "I ___ a cat. I love ___ fish",
  },
  {
    question: "I ___ a cat. I love ___ fish",
    
  },
  {
    question: "I ___ a cat. I love ___ fish",
    
  },
  {
    question: "I ___ a cat. I love ___ fish",
  },
  {
    question: "I ___ a cat. I love ___ fish",
  },
]

export default function App() {
  return (
    <View className="items-center m-10">
        <Sentence_completion_format questionList={questionList} questionNumber={1} />
        <Writing_submit />
    </View>
  );
}