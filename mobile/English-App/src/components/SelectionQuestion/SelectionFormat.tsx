import { View, Text, ScrollView } from "react-native";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

export default function SelectionFormat() {
  const questions = [
    {
      question:
        "The writer suggests that Brantingham and Beekman's findinds were",
      options: ["Options A", "Option B", "Options C", "Option D"],
    },
    {
      question:
        "The writer suggests that Brantingham and Beekman's findinds were",
      options: ["Options A", "Option B", "Options C", "Option D"],
    },
    {
      question:
        "The writer suggests that Brantingham and Beekman's findinds were",
      options: ["Options A", "Option B", "Options C", "Option D"],
    },
  ];
  return (
    <ScrollView className="flex gap-2">
      <Text className="heading text-green-600 text-2xl">Question 6-8</Text>
      <Text className="description text-black text-lg">
        Choose the correct letter A,B,C or D. {"\n"}Write the correct letter in
        boxes 1-{questions.length} on your answer sheet.
      </Text>
      <View className="questions-container">
        {questions.map((question, index) => (
          <MultipleChoiceQuestion
            key={index}
            number={index + 1}
            question={question.question}
            options={question.options}
          />
        ))}
      </View>
    </ScrollView>
  );
}
