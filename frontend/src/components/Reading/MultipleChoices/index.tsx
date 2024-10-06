import { Button } from "@/components/ui/button"
import { ComboboxDemo } from "@/components/ui/combobox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Question from "../Components/Question"
import { useState } from "react"

const MultipleChoice = () => { 
    const [numberOfQuestion, setNumberOfQuestion] = useState<number>(0)
    const [question, setQuestion] = useState<number[]>([])
    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfQuestion(+e.target.value)
    }
    const handleQuestion = () => { 
        setQuestion([...Array(numberOfQuestion).keys()])
    }
    const handleAddButton = () => { 
        setNumberOfQuestion((prev) => prev + 1)
    }
    const handleRemoveButton = () => { 
        setNumberOfQuestion((prev) => prev - 1)
    }
    return (
        <div>
            <div>
                <div>
                    <Label>Section 2</Label>
                    <ComboboxDemo />
                </div>
                <div>
                    {!question.length &&
                        <div>
                            <Label>Number of questions</Label>
                            <div className="flex justify-between">
                                <div>
                                    <Input type="number" value={numberOfQuestion} onChange={handleChange} />
                                    <Button onClick={handleQuestion}>
                                        OK
                                    </Button>
                                </div>
                                <div>
                                    <Button onClick={handleAddButton}>+</Button>
                                    <Button onClick={handleRemoveButton}>-</Button>
                                </div>
                            </div>
                        </div>
                    }
                    {question.length > 0 &&
                        <div>
                            <ul>
                            {question.map((q, i) => (
                                <li key={i}>
                                    <Question index={i+1} />
                                </li>
                            ))}
                            </ul>
                            
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default MultipleChoice