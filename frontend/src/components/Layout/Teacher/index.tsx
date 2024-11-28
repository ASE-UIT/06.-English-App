import { Sidebar, SidebarBody, SidebarLink } from "@/components/Layout/Components/ui/Sidebar"
import { useState } from "react"
import { MdOutlineMonitor } from "react-icons/md"
import { FiMessageSquare, FiBarChart } from "react-icons/fi"
import { BiHelpCircle } from "react-icons/bi"
import LOGO from "@/assets/Logo.svg"
import LogoTeacher from "../../../assets/header_image_teacher.svg"
import { BellIcon } from "@radix-ui/react-icons"

const links = [
  {
    label: "Course",
    href: "#",
    icon: <MdOutlineMonitor className="h-5 w-5 flex-shrink-0 text-headerIcon dark:text-neutral-200" />,
  },
  {
    label: "Communication",
    href: "#",
    icon: <FiMessageSquare className="h-5 w-5 flex-shrink-0 text-headerIcon dark:text-neutral-200" />,
  },
  {
    label: "Performance",
    href: "#",
    icon: <FiBarChart className="h-5 w-5 flex-shrink-0 text-headerIcon dark:text-neutral-200" />,
  },
  {
    label: "Resources",
    href: "#",
    icon: <BiHelpCircle className="h-5 w-5 flex-shrink-0 text-headerIcon dark:text-neutral-200" />,
  },
]

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex h-screen max-w-screen-2xl flex-row">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10 bg-sideBar shadow-sideBar">
            <div className={`flex flex-1 flex-col overflow-y-auto overflow-x-hidden`}>
              {open ? (
                <div className="flex min-h-[32px] flex-shrink-0 items-center">
                  <img src={LOGO} className="mr-[27px] h-7 w-7 flex-shrink-0 rounded-full object-cover" />
                  <span className="text-2xl font-bold text-headerIcon">Engdigo</span>
                </div>
              ) : (
                <div className="flex min-h-[32px] items-center">
                  <img src={LOGO} className="h-7 w-7 flex-shrink-0 rounded-full object-cover" />
                </div>
              )}
              <div className="mt-11 flex flex-1 flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
        <div className="flex-1 overflow-auto flex flex-col">
      <div className="flex justify-end p-4 border-b items-center gap-4">
        <span className="text-lg font-semibold">Teacher</span>
        <BellIcon width={24} height={24}/>
        <img src={LogoTeacher} alt="" className="h-10 w-10 rounded-full bg-pink-200 p-1" />
      </div>
      <div className="p-5 d-flex flex-col overflow-auto">
        {children}
      </div>
    </div>
      </div>
    </div>
  )
}
