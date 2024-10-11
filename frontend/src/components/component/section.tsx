import { selectSectionCurrent, selectSections } from "@/features/section/store/selectors"
import { useDispatch, useSelector } from "react-redux"
import { LuStar } from "react-icons/lu"
import { Button } from "../Layout/Components/ui/Button"
import { getSectionIndex } from "@/features/section/helpers/common"
import { useSectionSlice } from "@/features/section/store"

export const Section = () => {
  const dispatch = useDispatch()
  const { actions: sectionActions } = useSectionSlice()
  const section = useSelector(selectSections)
  const sectionCurrent = useSelector(selectSectionCurrent)
  console.log("sectionCurrent", sectionCurrent)
  Object.entries(section ?? {}).forEach(([key, value]) => console.log("section", key, " ", value))
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex min-h-[625px] min-w-[439px] flex-col rounded-md border-2 border-borderContent bg-white p-[30px]">
        <p className="w-full border-b-2 border-borderContent pb-3 text-[32px] text-content">Content</p>
        {Object.entries(section ?? {}).map(([key, value]) => {
          return (
            <div
              key={key}
              className={`${sectionCurrent.toString() === key ? "my-2 flex w-full rounded-md bg-currentBg px-4 py-3" : "my-2 flex w-full bg-white px-4 py-3"}`}
            >
              <LuStar stroke="black" size={20} />
              <div className="ml-3 flex flex-col">
                <p className="text-2xl text-content">Section {key}</p>
                <p className="text-sm text-typeContent">{value.type ?? "Unknown"}</p>
              </div>
            </div>
          )
        })}
      </div>
      <Button
        onClick={() => {
          const newKey = Object.keys(section ?? {}).length + 1
          const newType = getSectionIndex(newKey - 1)
          const newSection = {
            [newKey]: {
              type: newType,
            },
          }
          dispatch(sectionActions.loadSections(newSection))
        }}
        className="mx-auto my-[43px] rounded-lg bg-fuschia px-10 py-6 text-2xl font-normal text-white"
      >
        + Add
      </Button>
    </div>
  )
}
