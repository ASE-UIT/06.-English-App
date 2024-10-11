import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Answer from "./Answer"
import React from "react"
import { Textarea } from "@/components/ui/textarea"

interface Answer {
  text: string
  isCorrect: boolean
}

interface Question {
  index: number
  question: string
  answers: Answer[]
  multipleAnswers: boolean
}

const Question = ({ index }: { index: number }) => {
  const [question, setQuestion] = useState<string>("")
  const [numberOfAnswer, setNumberOfAnswer] = useState(4)
  const [answers, setAnswers] = useState<Answer[]>(Array(numberOfAnswer).fill({ text: "A", isCorrect: false }))
  const [multipleAnswers, setMultipleAnswers] = useState(false)
  const handleAddAnswer = () => {
    setNumberOfAnswer((prev) => prev + 1)
    const newAnswers = [...answers]
    newAnswers.push({ text: "A", isCorrect: false })
    setAnswers(newAnswers)
  }
  const handleRemoveAnswer = (index: number) => {
    const newAnswers = [...answers]
    newAnswers.splice(index, 1)
    setAnswers(newAnswers)
  }
  const handleChangeMultipleAnswer = () => {
    setMultipleAnswers((prev) => !prev)
  }
  const handleQuestionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value)
  }
  const handleCheckAnswer = (index: number) => {
    const newAnswers = [...answers]
    newAnswers[index].isCorrect = !newAnswers[index].isCorrect
    setAnswers(newAnswers)
  }
  return (
    <div className="mb-[28px] rounded-lg border-2 border-gray-200">
      <h3 className="ml-[14px] mt-[16px] text-[24px] font-normal not-italic leading-normal text-[#5D5FEF]">
        Question {index}
      </h3>
      <div className="ml-[42px] mt-[33px]">
        <Label className="leading-[140%] text-black" htmlFor="question">
          Question
        </Label>
        <Textarea
          className="min-h-[80px] min-w-[240px] rounded-lg border-[1px] bg-inherit"
          id="question"
          placeholder="Enter the question"
          value={question}
          onChange={handleQuestionChange}
        />
      </div>
      <div className="ml-[36px] mt-[66px]">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex w-full flex-col">
              <ul className="flex flex-col gap-[28px]">
                {answers.map((answer, index) => (
                  <li className="flex justify-self-center" key={index}>
                    <Answer content={answer.text} />
                    <Button className="h-full bg-transparent text-[#A5A6F6]" onClick={() => handleRemoveAnswer(index)}>
                      X
                    </Button>
                  </li>
                ))}
                <div className="flex w-full justify-center align-middle">
                  <div className="w-full min-w-[240px] rounded-lg border-[1px] bg-customPink px-[16px] py-2">
                    <Input className="border-none bg-customPink" type="text" />
                  </div>
                  <div className="flex items-center">
                    <Button className="h-full bg-inherit px-3 text-2xl text-[black]" onClick={handleAddAnswer}>
                      +
                    </Button>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <div className="mt-[71px]">
              <div className="flex justify-between">
                <p className="text-[#5D5FEF]">Select correct answers</p>
                <div className="flex">
                  <p className="text-[#1E1E1E]">Multiple answers</p>
                  <div style={{ height: "inherit" }}>
                    <Button onClick={handleChangeMultipleAnswer} />
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-[18px]">
                {answers.map((answer, index) => (
                  <li key={index}>
                    <div className="flex">
                      <Input
                        className="block max-w-fit bg-inherit"
                        type={multipleAnswers ? "checkbox" : "radio"}
                        checked={answer.isCorrect}
                        onClick={() => handleCheckAnswer(index)}
                      />
                      <span className="ml-3 self-center text-[#1E1E1E]">Option {index + 1}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Question
