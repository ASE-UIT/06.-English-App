import SectionHeader from "./SectionHeader"
import { useDispatch, useSelector } from "react-redux"
import { selectSectionView } from "@/features/course/store/selectors"
import { CreateQuestion } from "./CreateQuestion"
import { SectionDetail } from "./SectionDetail"
import { useEffect, useMemo } from "react"
import { useParams } from "react-router"
import { useSectionById } from "@/features/section/hooks"
import { useSectionSlice } from "@/features/section/store"
import LoadingScreen from "@/components/Layout/loadingScreen"
import { selectSectionHandling } from "@/features/section/store/selectors"
import _ from "lodash"
export const Section = () => {
  const { createQuestion } = useSelector(selectSectionView)
  const { sectionId } = useParams()
  const { data: sectionById, isLoading } = useSectionById(sectionId as string)
  const dispatch = useDispatch()
  const { actions: sectionActions } = useSectionSlice()
  const handling = useSelector(selectSectionHandling)
  useEffect(() => {
    console.log("sectionUseEff", sectionById?.data)
    if (sectionById?.data) {
      // console.log("sectionUseEff",sectionById.data)
      dispatch(sectionActions.loadSections(sectionById.data))
      if (sectionById.data.questionGroups.length > 0) {
        dispatch(
          sectionActions.setCurrentSection(_.orderBy(sectionById.data.questionGroups ?? [], ["createDate"])[0].id),
        )
        sectionById.data.questionGroups.forEach((questionGr) => {
          const updateData = {
            [questionGr.id]: questionGr.questions,
          }
          dispatch(sectionActions.updateQuestion(updateData))
        })
      }
    }
  }, [sectionById?.data, dispatch, sectionActions])
  console.log("sectionById", sectionById, sectionId, handling)
  const isReady = useMemo(() => !isLoading && handling, [handling, isLoading])
  console.log("isReady", isReady)
  return (
    <SectionHeader>
      {isLoading ? <LoadingScreen /> : null}
      {isReady && (createQuestion ? <CreateQuestion /> : <SectionDetail />)}
    </SectionHeader>
  )
}