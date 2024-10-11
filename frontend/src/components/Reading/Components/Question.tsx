import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Answer from "./Answer"
import React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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
  // const handleCheckAnswer = (index: number) => {
  //   const newAnswers = [...answers]
  //   newAnswers[index].isCorrect = !newAnswers[index].isCorrect
  //   setAnswers(newAnswers)
  // }
  return (
    <div className="mb-[28px] rounded-lg border-2 border-gray-200">
      <h3 className="ml-[14px] mt-[16px] text-[24px] font-normal not-italic leading-normal text-[#5D5FEF]">
        Question {index}
      </h3>
      <div className="ml-[42px] mt-[33px] mr-[10px]">
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
      <hr className="bg-backgroundLine mx-[15px] mt-[36px]" />
      <div className="ml-[36px] mt-[66px]">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex w-full flex-col">
              <div className="flex justify-between items-center mr-[25px]">
                <div className="flex mb-[33px] min-w-[340px] gap-6">
                  <span className="text-[#1E1E1E] text-xl leading-normal">Multiple answers</span>
                  <div>
                    <Button className="h-inherit" onClick={handleChangeMultipleAnswer} />
                  </div>
                </div>
                <span className="text-[#8A8A8A]">Correct</span>
              </div>

              <ul className="flex flex-col gap-[28px] mr-[25px]">
                {answers.map((answer, index) => (
                  <li className="flex justify-self-center items-center" key={index}>
                    <Answer content={answer.text} index={index} />
                    <Button className="h-full bg-transparent text-[#A5A6F6]" onClick={() => handleRemoveAnswer(index)}>
                      X
                    </Button>
                    {
                      multipleAnswers ? 
                      <Checkbox className="bg-inherit"/>
                      :
                      <RadioGroup defaultValue="comfortable">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem className="bg-inherit"  value="default" id="r1" />
                          <Label htmlFor="r1">Default</Label>
                        </div>
                      </RadioGroup>
                    }
                  </li>
                ))}
                <div className="flex w-full justify-center align-middle mb-[20px]">
                  <div className="w-full min-w-[240px] rounded-lg border-[1px] bg-customPink px-[16px] py-2">
                    <Input className="border-none bg-inherit text-[#AEAEB2]" type="text" placeholder="Type here" />
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
        </div>
      </div>
    </div>
  )
}
export default Question
