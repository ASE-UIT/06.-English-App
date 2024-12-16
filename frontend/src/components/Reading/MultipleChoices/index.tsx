import { Button } from "@/components/ui/button"
// import { ComboboxDemo } from "@/components/ui/combobox"
import { useState } from "react"
import Question from "../Components/Question"
import { useDispatch, useSelector } from "react-redux"
import { useSectionSlice } from "@/features/section/store"
import { selectSectionCurrent, selectSections, selectSectionUpdate } from "@/features/section/store/selectors"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
interface question {
  questionGroup?: string
  section?: string
  text: string
  type: string
  order: number
  answers?: {
    text: string
    isCorrect: boolean
  }[]
}
const MultipleChoice = ({ type, sectionType }: { type: string; sectionType?: string }) => {
  const [question, setQuestion] = useState<question[]>([])
  const dispatch = useDispatch()
  const { actions: sectionActions } = useSectionSlice()
  const section = useSelector(selectSections)
  const sectionCurrent = useSelector(selectSectionCurrent)
  const updateData = useSelector(selectSectionUpdate)
  const currentQuestion = updateData[sectionCurrent]
  console.log("currentQuestion", currentQuestion, updateData, sectionCurrent)
  const [questions, setQuestions] = useState<number>(currentQuestion?.length ?? 0)
  const update = useSelector(selectSectionUpdate)
  console.log("update", update, question, currentQuestion)
  return (
    <div className="flex w-full flex-col">
      <ToastContainer />
      {
        <Button
          onClick={() => {
            let updateQuestionGroup = {}
            if (!sectionType) {
              updateQuestionGroup = {
                [sectionCurrent]: question,
              }
            } else {
              updateQuestionGroup = {
                [section.id]: question,
              }
            }
            dispatch(sectionActions.updateQuestion(updateQuestionGroup))
            dispatch(sectionActions.updateViewChanged(false))
            toast.success("Save successfully")
          }}
          className="fixed right-4 top-1/2 z-50 rounded-lg bg-blue-500 px-2 py-1 text-xs font-semibold text-white"
        >
          Save
        </Button>
      }
      {Array.from({ length: questions }).map((_, index) => (
        <Question key={index} index={index} setQuestion={setQuestion} type={type} />
      ))}
      <Button
        onClick={() => {
          dispatch(sectionActions.updateViewChanged(true))
          setQuestions((prev) => prev + 1)
        }}
        className="mt-[20px] h-[50px] w-[200px] rounded-md bg-[#5D5FEF] text-white"
      >
        Add Question
      </Button>
    </div>
  )
}

export default MultipleChoice
