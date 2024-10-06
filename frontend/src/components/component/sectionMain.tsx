import { selectPickType, selectSectionCurrent, selectSections } from "@/features/section/store/selectors"
import { MdOutlineArrowUpward, MdOutlineArrowDownward } from "react-icons/md"
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
import React, { useCallback, useEffect, useMemo } from "react"
import { getSectionValue } from "@/features/section/helpers/common"

export const SectionMain = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  const { actions: sectionActions } = useSectionSlice()
  const currentSection = useSelector(selectSectionCurrent)
  const section = useSelector(selectSections)
  const pickType = useSelector(selectPickType)
  const sectionValue = useMemo(() => getSectionValue(currentSection, section), [currentSection, section])
  useEffect(() => {
    console.log("updatelaiPick", sectionValue)
    if (sectionValue) dispatch(sectionActions.changeType(sectionValue))
  }, [dispatch, sectionActions, sectionValue])
  console.log("pickType", pickType)
  // const [typeChange, setTypeChange] = useState(sectionValue)
  // useEffect(() => {
  //     setTypeChange(sectionValue)
  // },[sectionValue])
  console.log("currentSection", currentSection)
  console.log("section", Object.keys(section ?? {}).length)
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

  return (
    <div className="flex h-full w-full flex-col rounded-md border-2 border-borderContent">
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
              dispatch(sectionActions.changeCurrentSection(currentSection + 1))
            }}
            stroke="#5D5FEF"
            size={20}
            className={`${checkPossibleClick("increment") ? "mr-[26.45px] cursor-pointer" : "pointer-events-none mr-[26.45px]"}`}
          />
          <MdOutlineArrowDownward
            onClick={() => {
              dispatch(sectionActions.changeCurrentSection(currentSection - 1))
            }}
            stroke="#5D5FEF"
            size={20}
            className={`${checkPossibleClick("decrement") ? "mr-[42px] cursor-pointer" : "pointer-events-none mr-[42px]"}`}
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
      <div className="px-[31px] py-[17px]">{children}</div>
    </div>
  )
}
