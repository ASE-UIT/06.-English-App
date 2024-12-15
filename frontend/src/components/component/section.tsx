import { selectSectionCurrent, selectSections, selectSectionUpdate } from "@/features/section/store/selectors"
import { useSelector } from "react-redux"
import { LuStar } from "react-icons/lu"
import { Button } from "../Layout/Components/ui/Button"
import _ from "lodash"
import { questionGroupNameMap } from "@/type/question"
import { SaveIcon } from "lucide-react"
import { useParams } from "react-router"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { sectionApi } from "@/apis"
import { toast } from "react-toastify"
import { queryKeys } from "@/config"
interface question {
  questionGroup?: string
  section: string
  text: string
  type: string
  order: number
  answers: {
    text: string
    isCorrect: boolean
  }[]
}
export const Section = ({ onOpenDialog }: { onOpenDialog: () => void }) => {
  const queryClient = useQueryClient()
  const sectionById = useSelector(selectSections)
  const { sectionId } = useParams()
  const section = useSelector(selectSections)
  const sectionCurrent = useSelector(selectSectionCurrent)
  const updateData = useSelector(selectSectionUpdate)
  console.log("updateData", updateData)
  const CreateQuestion = useMutation({
    mutationFn: sectionApi.CreateQuestion,
    onSuccess: (Res) => {
      if (Res?.message === "Create successfully") {
        queryClient.invalidateQueries({
          queryKey: queryKeys.sectionById.gen(sectionId as string),
        })
        toast.success(`${Res.message}`)
      } else {
        toast.error(`Error ${Res?.statusCode}: ${Res?.message}`)
      }
    },
    onError: () => {
      toast.error("Something error")
    },
  })
  console.log("sectionCurrent", sectionCurrent)
  Object.entries(section ?? {}).forEach(([key, value]) => console.log("section", key, " ", value))
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex min-h-[625px] min-w-[439px] flex-col rounded-md border-2 border-borderContent bg-white p-[30px]">
        <p className="w-full border-b-2 border-borderContent pb-3 text-[32px] text-content">Content</p>
        {sectionById &&
          _.orderBy(sectionById.questionGroups ?? [], ["createDate"]).map((questionGr, index) => {
            return (
              <div
                key={questionGr.id}
                className={`${sectionCurrent.toString() === questionGr.id ? "my-2 flex w-full rounded-md bg-currentBg px-4 py-3" : "my-2 flex w-full bg-white px-4 py-3"}`}
              >
                <LuStar stroke="black" size={20} />
                <div className="ml-3 flex flex-col">
                  <p className="text-2xl text-content">QuestionGroup {index + 1}</p>
                  <p className="text-sm text-typeContent">{questionGroupNameMap[questionGr.questionGroupType]}</p>
                </div>
              </div>
            )
          })}
      </div>
      <Button
        onClick={() => onOpenDialog()}
        className="mx-auto my-[43px] rounded-lg bg-fuschia px-10 py-6 text-2xl font-normal text-white"
      >
        + Add
      </Button>
      <Button
        onClick={async () => {
          const promises = []
          Object.entries(updateData ?? {}).forEach(([questionGrKey, value]) => {
            const data = {
              sectionId: sectionId as string,
              questionGroupId: questionGrKey,
              questions: value as question[],
            }
            promises.push(CreateQuestion.mutateAsync(data))
          })
        }}
        className="mx-auto my-[0px] rounded-lg bg-green-600 px-10 py-6 text-2xl font-normal text-white"
      >
        <SaveIcon size={20} className="mr-1" />
        Save
      </Button>
    </div>
  )
}
