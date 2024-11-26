import Logo from "../../../assets/header_image_teacher.svg"
import { BellIcon } from "@radix-ui/react-icons"

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
   <div className="h-screen w-screen flex overflow-auto">
    <div className="w-[300px] overflow-auto bg-pink-100 flex flex-col">
      <div className="p-3 flex gap-3 items-center">
        <img src={Logo} alt="" className="h-9 w-9" />
        <span className="text-2xl font-semibold">Emma</span>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="p-3 text-xl border-l-4 border-solid border-pink-500 bg-pink-50">
          Course
        </div>
      </div>
    </div>
    <div className="flex-1 overflow-auto flex flex-col">
      <div className="flex justify-end p-4 border-b items-center gap-4">
        <span className="text-lg font-semibold">Teacher</span>
        <BellIcon width={24} height={24}></BellIcon>
        <img src={Logo} alt="" className="h-10 w-10 rounded-full bg-pink-200 p-1" />
      </div>
      <div className="p-5 d-flex flex-col overflow-auto">
        {children}
      </div>
    </div>
   </div>
  )
}
