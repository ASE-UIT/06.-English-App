import { Section } from "@/components/component/section"
import { SectionMain } from "@/components/component/sectionMain"

export const Lecture = () => {

  return (
    <div className="flex h-full w-full bg-white justify-between gap-[76px] overflow-x-hidden  pl-[67px] pt-[61px]">
      <Section></Section>
      <SectionMain></SectionMain>
    </div>
  )
}
