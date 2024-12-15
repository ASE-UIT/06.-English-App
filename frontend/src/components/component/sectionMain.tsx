import { selectSectionChanged, selectSectionCurrent, selectSections } from "@/features/section/store/selectors"
import { MdOutlineArrowUpward, MdOutlineArrowDownward, MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md"
import { FiCopy } from "react-icons/fi"
import { BiTrashAlt } from "react-icons/bi"
import { LuStar } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import { useSectionSlice } from "@/features/section/store"
import { useCallback, useMemo, useState } from "react"
import { Button } from "../Layout/Components/ui/Button"
import MultipleChoice from "../Reading/MultipleChoices"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import _ from "lodash"
import FroalaViewComponent from "../Layout/Components/ui/FroalaViewComponent"

export const SectionMain = () => {
  const dispatch = useDispatch()
  const { actions: sectionActions } = useSectionSlice()
  const section = useSelector(selectSections)
  const currentSection = useSelector(selectSectionCurrent)
  const [open, setOpen] = useState(false)
  const viewChange = useSelector(selectSectionChanged)

  const getCurrentData = useMemo(
    () =>
      _.orderBy(section.questionGroups ?? [], ["createDate"]).filter((questionGr) => questionGr.id === currentSection),
    [currentSection, section.questionGroups],
  )
  console.log("section", section)
  console.log("getCurrenData", getCurrentData)
  const getCurrentIndex = useMemo(
    () =>
      _.orderBy(section.questionGroups ?? [], ["createDate"]).findIndex(
        (questionGr) => questionGr.id === currentSection,
      ),
    [currentSection, section.questionGroups],
  )
  console.log("getCurrentIndex", getCurrentIndex, currentSection)
  const checkPossibleClick = useCallback(
    (typeClick: string) => {
      if (typeClick === "increment") {
        return getCurrentIndex + 1 < section.questionGroups.length
      } else if (typeClick === "decrement") {
        return getCurrentIndex - 1 >= 0
      }
    },
    [getCurrentIndex, section.questionGroups.length],
  )

  const handleMovement = (type: string) => {
    if (type === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  const children = useMemo(() => {
    switch (getCurrentData[0].questionGroupType) {
      case "MULTIPLE_CHOICE":
        return <MultipleChoice key={getCurrentData[0].id} type="MULTIPLE_CHOICE" />
      case "COMBO_BOX":
        return <MultipleChoice key={getCurrentData[0].id} type="COMBO_BOX" />
      case "BLANK":
        return <MultipleChoice key={getCurrentData[0].id} type="BLANK" />
      default:
        return <div />
    }
  }, [getCurrentData])

  return (
    <div className="flex h-full w-full flex-col">
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogContent className="h-fit overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-black">Oops!!!</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center">
            <span className="text-black">Save your changes before moving to another question group</span>
          </div>
        </DialogContent>
      </Dialog>
      <div className="h-full w-full rounded-md border-2 border-borderContent">
        <div className="flex items-center justify-between bg-sectionHeaderBg px-[43px] pb-[35px] pt-[31px]">
          <div className="flex items-center gap-2">
            <LuStar stroke="black" size={20} />
            <FroalaViewComponent model={getCurrentData[0].text} />
          </div>
          <div className="flex items-center text-headerIcon">
            <MdOutlineArrowUpward
              onClick={() => {
                handleMovement("top")
              }}
              stroke="#5D5FEF"
              size={20}
              className="mr-[26.45px] cursor-pointer"
            />
            <MdOutlineArrowDownward
              onClick={(e) => {
                e.stopPropagation()
                handleMovement("bottom")
              }}
              stroke="#5D5FEF"
              size={20}
              className="mr-[42px] cursor-pointer"
            />
            <FiCopy
              size={20}
              strokeWidth={3}
              onClick={() => {
                dispatch(sectionActions.changeCurrentSection(currentSection))
              }}
              className="mr-[42px] cursor-pointer font-bold"
            />
            <BiTrashAlt size={20} strokeWidth={1} className="mr-[42px] cursor-pointer font-bold" />
          </div>
        </div>
        <div className="px-[31px] py-[40px]">{children}</div>
      </div>
      <div className="mt-[83px] flex w-full items-center justify-end gap-4 pr-[71px]">
        <Button
          onClick={() => {
            handleMovement("top")
            if (viewChange) {
              setOpen(true)
              return
            }
            console.log("CheckDecre", section.questionGroups[getCurrentIndex - 1])
            dispatch(
              sectionActions.changeCurrentSection(
                _.orderBy(section.questionGroups ?? [], ["createDate"])[getCurrentIndex - 1].id,
              ),
            )
          }}
          className={`${checkPossibleClick("decrement") ? "rounded-lg border-2 border-fuschia bg-white px-[14px] py-3 hover:bg-fuschia" : "pointer-events-none rounded-lg border-2 border-fuschia bg-white px-[14px] py-3"}`}
        >
          <MdOutlineArrowBack stroke="black" fill="black" size={20} />
          <span className="ml-2 text-black">Previous</span>
        </Button>
        <Button
          onClick={() => {
            if (viewChange) {
              setOpen(true)
              return
            }
            dispatch(
              sectionActions.changeCurrentSection(
                _.orderBy(section.questionGroups ?? [], ["createDate"])[getCurrentIndex + 1].id,
              ),
            )
          }}
          className={`${checkPossibleClick("increment") ? "rounded-lg bg-fuschia px-[28.5px] py-3" : "pointer-events-none rounded-lg bg-fuschia px-[28.5px] py-3"}`}
        >
          <span className="mr-2 text-white">Next</span>
          <MdOutlineArrowForward stroke="white" size={20} />
        </Button>
      </div>
    </div>
  )
}
