import {
  selectPickType,
  selectSectionCurrent,
  selectSectionData,
  selectSections,
} from "@/features/section/store/selectors"
import { MdOutlineArrowUpward, MdOutlineArrowDownward, MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md"
import { FiCopy } from "react-icons/fi"
import { BiTrashAlt } from "react-icons/bi"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../Layout/Components/ui/Select"
import { LuStar } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import { FIELD } from "@/config/option"
import { useSectionSlice } from "@/features/section/store"
import { useCallback, useEffect, useMemo } from "react"
import { getSectionValue } from "@/features/section/helpers/common"
import { Button } from "../Layout/Components/ui/Button"
import MultipleChoice from "../Reading/MultipleChoices"
import TrueFalseNotGiven from "../Reading/TFNG"
import NoteCompletion from "../Reading/NoteCompletion"

export const SectionMain = () => {
  const dispatch = useDispatch()
  const { actions: sectionActions } = useSectionSlice()
  const currentSection = useSelector(selectSectionCurrent)
  const section = useSelector(selectSections)
  const pickType = useSelector(selectPickType)
  const sectionValue = useMemo(() => getSectionValue(currentSection, section), [currentSection, section])
  useEffect(() => {
    if (sectionValue) dispatch(sectionActions.changeType(sectionValue))
  }, [dispatch, sectionActions, sectionValue])
  const checkPossibleClick = useCallback(
    (typeClick: string) => {
      if (typeClick === "increment") {
        return currentSection + 1 <= Object.keys(section ?? {}).length
      } else if (typeClick === "decrement") {
        return currentSection - 1 > 0
      }
    },
    [currentSection, section],
  )

  const currentSectionData = useSelector((state) => selectSectionData(state, currentSection))
  console.log("currentSectionData", currentSectionData)
  const handleMovement = (type: string) => {
    if (type === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  const children = useMemo(() => {
    switch (currentSectionData.type) {
      case "Multiple choices":
        return <MultipleChoice />
      case "T/F/NG":
        return <TrueFalseNotGiven />
      case "Note completion":
        return <NoteCompletion />
      case "Setence completion":
        return <NoteCompletion />
      default:
        return <div />
    }
  }, [currentSectionData.type])

  return (
    <div className="flex h-full w-full flex-col">
      <div className="h-full w-full rounded-md border-2 border-borderContent">
        <div className="flex items-center justify-between bg-sectionHeaderBg px-[43px] pb-[35px] pt-[31px]">
          <div className="flex items-center">
            <LuStar stroke="black" size={20} />
            <span className="ml-[7px] mr-5 text-2xl text-content">Section {currentSection}</span>
            <Select
              onValueChange={(value: string) => {
                if (value) dispatch(sectionActions.changeType(value))
              }}
              value={pickType}
            >
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Chọn danh mục"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {FIELD.map((i) => (
                    <SelectItem key={i.text} value={i.text}>
                      {i.text}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
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
                const newSectionData = {
                  id: currentSection,
                  type: pickType,
                }
                dispatch(sectionActions.loadSectionData(newSectionData))
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
            dispatch(sectionActions.changeCurrentSection(currentSection - 1))
          }}
          className={`${checkPossibleClick("decrement") ? "rounded-lg border-2 border-fuschia bg-white px-[14px] py-3 hover:bg-fuschia" : "pointer-events-none rounded-lg border-2 border-fuschia bg-white px-[14px] py-3"}`}
        >
          <MdOutlineArrowBack stroke="black" fill="black" size={20} />
          <span className="ml-2 text-black">Previous</span>
        </Button>
        <Button
          onClick={() => {
            dispatch(sectionActions.changeCurrentSection(currentSection + 1))
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
