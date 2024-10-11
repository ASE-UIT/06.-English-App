import { View, Text } from "react-native";
import React from "react";
import QuestionHeading from "../QuestionHeading";
import SelectionQuestion from "./SelectionQuestion";
import QuestionSubHeading from "../QuestionSubHeading";

const data = [
  { id: 1, question: "What is the capital of France?" },
  { id: 2, question: "Which planet is known as the Red Planet?" },
  { id: 3, question: "Which ocean is the largest ?" },
  { id: 4, question: 'Who wrote "Romeo and Juliet"?' },
  { id: 5, question: "What is the chemical formula for water?" },
];
const options = ["A", "B", "C", "D"];

const SelectionFormat = () => {
  return (
    <View>
      <View className=" container border border-secondary  
      rounded-xl p-2 ">
      <QuestionHeading from={1} to={5} />
      <QuestionSubHeading text={"Choose the correct letter A, B, C or D"} />

      <QuestionSubHeading text="Write the correct letter in boxes 1-5 on your answer sheet"></QuestionSubHeading>
      <View className="questions-container">
        {data.map((question) => (
          <View className=" my-1">
          <SelectionQuestion
            key={question.id}
            id={question.id}
            question={question.question}
            options={options}
          />
          </View>
        ))}
      </View>
    </View>
    </View>

  );
};

export default SelectionFormat;
