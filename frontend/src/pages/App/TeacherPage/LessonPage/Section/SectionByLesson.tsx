import { useSectionByLesson } from "@/features/section/hooks"
import { sectionNameMap } from "@/type/section"
import _ from "lodash"

export const SectionByLesson = ({ lessonId }: { lessonId: string }) => {
  const { data: sectionData } = useSectionByLesson(lessonId)
  return (
    <div>
      {sectionData?.data && sectionData.data.length > 0 ? (
        _.orderBy(sectionData.data, ["createDate"]).map((section) => (
          <div
            key={section.id}
            className="flex h-[73px] w-full cursor-pointer border-[1px] border-headerIcon shadow-sectionCard"
          >
            <div className="flex flex-col bg-lessonbg px-[26px] py-[9px]">
              <div className="flex w-full items-center gap-[23px]">
                <span className="text-2xl font-normal text-headerIcon">Section: {section.title}</span>
                <span className="text-xl font-extralight text-headerIcon">{sectionNameMap[section.type]}</span>
              </div>
              <span className="text-xl font-extralight text-black">3 questions</span>
            </div>
          </div>
        ))
      ) : (
        <span className="text-base font-semibold text-zinc-700">No section in this lesson...</span>
      )}
    </div>
  )
}
