import { View, Text, Dimensions } from "react-native";
import React from "react";
import QuestionHeading from "../QuestionHeading";
import SelectionQuestion from "./SelectionQuestion";
import QuestionSubHeading from "../QuestionSubHeading";
import QuestionGroup from "../../models/QuestionGroup";
import RenderHTML from "react-native-render-html";
import HtmlReader from "../HtmlReader";

// const data = [
//   { id: 1, question: "What is the capital of France?" },
//   { id: 2, question: "Which planet is known as the Red Planet?" },
//   { id: 3, question: "Which ocean is the largest ?" },
//   { id: 4, question: 'Who wrote "Romeo and Juliet"?' },
//   { id: 5, question: "What is the chemical formula for water?" },
// ];

const width = Dimensions.get("window").width;

const options = ["A", "B", "C", "D"];

type SelectionFormatProps = {
  questionGroup: QuestionGroup;
};

const SelectionFormat = ({ questionGroup }: SelectionFormatProps) => {
  const { questions } = questionGroup;

  return (
    <View>
      <View
        className=" container border border-secondary  
      rounded-xl p-2 "
      >
        {/* <QuestionHeading from={1} to={5} />
        <QuestionSubHeading text={"Choose the correct letter A, B, C or D"} />

        <QuestionSubHeading text="Write the correct letter in boxes 1-5 on your answer sheet"></QuestionSubHeading> */}
        {questionGroup.text && (
<<<<<<< HEAD
          <HtmlReader
            html={ questionGroup.text }
=======
          <RenderHTML
            contentWidth={width}
            source={{ html: questionGroup.text }}
            ignoredDomTags={["iframe"]}
>>>>>>> 74d46f818ed44c4cb087dffc8b6355e845beb9be
          />
        )}
        <View className="questions-container">
          {questions.map((question) => (
            <View key={question.id} className=" my-1">
              <SelectionQuestion
                key={question.id}
                order={question.order}
                text={question.text}
                options={question.answers.map((answer) => answer.text)}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SelectionFormat;
