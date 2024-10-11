import { useState } from "react"
import InputQuestion from "../Components/InputQuestion"
import Answer from "../Components/Answer"
import { TFNGENUM } from "@/config/option"
import { Select,SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/Layout/Components/ui/Select"

interface TFNGQuestion {
    question: string
    answer: string
}

const initialQuestions = [
    {
        question: "The first paragraph describes the history of the company.",
        answer: "True"
    },
    {
        question: "The company is located in the United States.",
        answer: "False"
    },
    {
        question: "The company was founded in 1990.",
        answer: "Not Given"
    }
]
const TrueFalseNotGiven = () => { 
    const [numberOfQuestion, setNumberOfQuestion] = useState()
    const [questions, setQuestions] = useState<TFNGQuestion[]>(initialQuestions)
    
    return( 
        <div>
            <div className="ml-[45px] mt-[35px]">
                <span className="text-2xl text-[#5D5FEF] leading-normal">Add statement</span>
                <div className="mt-[42px]">
                    <ul className="flex flex-col gap-6">
                    {
                    questions.map((question, index) => { 
                        return (
                            <li key={index}>
                                <Answer content={question.question} index={index} />
                            </li>
                        )
                    })
                    }
                    </ul>
                    <InputQuestion className="mt-[24px]"/>
                </div>
            </div>
            <hr className="my-[52px] bg-backgroundLine stroke-1 stroke-[#A5A6F6]"/>
            <div className="ml-[45px] mt-[35px] max-w-[800px]"> 
                <span className="text-[#5D5FEF] text-2xl">Select correct answers</span>
                <div className="mt-[40px]">
                    <ul className="flex flex-col gap-[10px]">
                    {
                        questions.map((question, index) => { 
                            return (
                                <li key={index} className="flex justify-between">
                                    <span className="text-black text-2xl">Statement {index + 1}</span>
                                    <Select
                                        // onValueChange={(value: string) => {
                                        //     if (value) dispatch(sectionActions.changeType(value))
                                        // }}
                                        // value={pickType}
                                    >
                                        <SelectTrigger className="w-auto min-w-[240px] bg-inherit text-black border-2 border-[#d9d9d9]">
                                            <SelectValue placeholder="Chọn đáp án"></SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                        <SelectGroup>
                                            {TFNGENUM.map((i) => (
                                            <SelectItem key={i.text} value={i.text}>
                                                {i.text}
                                            </SelectItem>
                                            ))}
                                        </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </li>
                            )
                        })
                    }
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
export default TrueFalseNotGiven