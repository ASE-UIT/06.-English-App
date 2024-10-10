import { useState } from "react"
import InputQuestion from "../Components/InputQuestion"
import Answer from "../Components/Answer"

interface TFNGQuestion {
    question: string
    answer: string
}

const TrueFalseNotGiven = () => { 
    const [numberOfQuestion, setNumberOfQuestion] = useState()
    const [questions, setQuestions] = useState<TFNGQuestion[]>([])
    
    return( 
        <div>
            <div className="ml-[45px] mt-[35px]">
                <span className="text-2xl text-[#5D5FEF] leading-normal">Add statement</span>
                <div className="mt-[42px]">
                    <ul>
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
                    <InputQuestion />
                </div>
            </div>
            <hr className="my-[52px] bg-backgroundLine stroke-1 stroke-[#A5A6F6]"/>
            <div className="ml-[45px] mt-[35px]"> 
                <span className="text-[#5D5FEF] text-2xl">Select correct answers</span>
                <div>
                    {
                        questions.map((question, index) => { 
                            return (
                                <li key={index}>
                                    <span>Statement {index + 1}</span>
                                    
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default TrueFalseNotGiven