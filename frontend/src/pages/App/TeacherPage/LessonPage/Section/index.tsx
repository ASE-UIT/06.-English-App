import SectionHeader from "./SectionHeader"
import { useSelector } from "react-redux"
import { selectSectionView } from "@/features/course/store/selectors"
import { CreateQuestion } from "./CreateQuestion"
import { SectionDetail } from "./SectionDetail"

export const Section = () => {
  const { createQuestion } = useSelector(selectSectionView)
  return <SectionHeader>{createQuestion ? <CreateQuestion /> : <SectionDetail />}</SectionHeader>
}
