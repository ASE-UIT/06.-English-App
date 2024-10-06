import { FIELD } from "@/config/option"
import { SectionData } from "../interface"

export const getSectionIndex = (index: number) => {
  const section = FIELD.find((_fieldValue, fieldIndex) => {
    return fieldIndex === index
  })
  return section?.text
}

export const getSectionValue = (index: number, section: SectionData) => {
  console.log("ChayvaoSectionValue", index, section)
  const getType = Object.entries(section).find(([key, value]) => {
    if (key === index.toString()) {
      return (value as SectionData[0]).type
    }
  })?.[1]?.type
  const findText = FIELD.find((value) => {
    if (value.text === getType) {
      return value.text
    }
  })
  return findText?.text
}
