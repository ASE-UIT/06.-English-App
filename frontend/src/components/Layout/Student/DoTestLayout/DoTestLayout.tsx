import { Button } from "@/components/ui/button"
import BackIconButton from "../../../../assets/back_button_icon.svg"
const SectionData = {
  title: "Reading task 1",
}
export default function DoTestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 flex h-[70px] items-center gap-[10px] bg-[#fff4f9] shadow-custom">
        <Button variant="ghost" className="bg-inherit hover:bg-inherit hover:outline-none focus:outline-none">
          <span className="ml-[14px]">
            <img src={BackIconButton} />
          </span>
        </Button>
        <span className="ml-[11px] text-2xl font-normal text-[#5D5FEF]">{SectionData.title}</span>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  )
}
