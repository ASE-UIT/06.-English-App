import { MatchingQuestion } from "@/components/Layout/Components/shared/MatchingQuestion"
import { MultipleChoiceQuestion } from "@/components/Layout/Components/shared/MultipleChoiceQuestion"
// import { RadioGroupQuestion } from "@/components/Layout/Components/shared/RadioGroupQuestion"
import { ComboBoxQuestion } from "@/components/Layout/Components/shared/TFNQuestion"
import { questionData } from "./data"
import _ from "lodash"
import { RadioGroupQuestion } from "@/components/Layout/Components/shared/RadioGroupQuestion"

export const ReadingQuestion = () => {
  const prevSum = (index: number) => {
    let total = 0
    if (index === 0) return total
    const questionDataTemp = _.clone(questionData)
    questionDataTemp.slice(0, index).forEach((question) => {
      total += question.questions.length
    })
    return total
  }
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto bg-white">
      {questionData.map((questions, index) => {
        return (
          <>
            <span className="my-[14.64px] text-2xl font-semibold text-headerIcon">
              Questions {prevSum(index) + 1}{" "}
              {questions.questions.length > 1 && `- ${prevSum(index) + questions.questions.length}`}
            </span>
            <span className="mb-5 text-2xl text-questionText">{questions.text}</span>
            {questions.questions[0].type === "ComboBox" ? (
              <ComboBoxQuestion prevSum={prevSum(index)} answer={questions.questions} />
            ) : questions.questions[0].type === "Multiple Choice" && !questions.multiAnswer ? (
              <MultipleChoiceQuestion prevSum={prevSum(index)} answer={questions.questions} />
            ) : questions.questions[0].type === "Multiple Choice" && questions.multiAnswer ? (
              <RadioGroupQuestion prevSum={prevSum(index)} answer={questions.questions} />
            ) : (
              <MatchingQuestion />
            )}
          </>
        )
      })}
      {/* <TFNQuestion />
      <MultipleChoiceQuestion />
      <RadioGroupQuestion />
      <MatchingQuestion/> */}
      <hr className="bg-[#FCDDEC] my-[30px] mx-3 border-t-2"/>
      <div className="my-[50px] text-center text-2xl text-[#5d5fef]">--End of the Test--</div>
    </div>
  )
}
