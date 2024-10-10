import { View, Text, ScrollView } from "react-native";
import QuestionHeading from "../QuestionHeading";
import QuestionSubHeading from "../QuestionSubHeading";
import MultiSelectQuestion from "./MultiSelectQuestion";

export default function MultipleChoiceFormat() {
  // hardcoded questions data
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
    <View className="flex gap-2 border border-[#FCDDEC] rounded-lg p-4">
      <QuestionHeading from={1} to={questions.length} />
      <QuestionSubHeading text="Select the correct answer for each question" />
      <View
        className="questions-container"
        style={{ display: "flex", gap: 10 }}
      >
        {questions.map((question, index) => (
          <MultiSelectQuestion
            key={index}
            number={index + 1}
            question={question.question}
            options={question.options}
          />
        ))}
      </View>
    </View>
  );
}
