import { Section } from "@/components/component/section"
import { SectionMain } from "@/components/component/sectionMain"

export const CreateQuestion = () => {
  return <div className="grid grid-cols-6 gap-12 mt-5">
    <div className="col-span-2">
      <Section/>
    </div>
    <div className="col-span-4">
      <SectionMain/>
    </div>
  </div>
}
