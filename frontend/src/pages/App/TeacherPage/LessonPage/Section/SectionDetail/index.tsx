import { selectSectionView } from "@/features/course/store/selectors"
import { useSelector } from "react-redux"

export const SectionDetail = () => {
  const { id, name: sectionName, createQuestion, sectionDetail } = useSelector(selectSectionView)
  return <div>index</div>
}
