import { Sidebar, SidebarBody, SidebarLink } from "@/components/Layout/Components/ui/Sidebar"
import { useState } from "react"
import { MdOutlineMonitor } from "react-icons/md"
import { FiMessageSquare, FiBarChart } from "react-icons/fi"
import { BiHelpCircle } from "react-icons/bi"
import LOGO from "@/assets/Logo.svg"
import { FaRegBell } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import ProfileImage from "@/assets/image/ProfileImage.jpg"
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

export const InstructorHome = () => {
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
        <div className="w-full">
          <div className="w-[90%] mx-auto">
            <div className="flex justify-between justify-between items-center w-full">
                <span className="text-headerIcon text-[30px] font-semibold">Course</span>
                <div className="flex justify-center items-center mr-[20px]">
                  <span className="text-[25px] font-medium text-black mr-[20px]">Student</span>
                  <FaRegBell className="text-headerIcon w-[25px] h-[25px] mr-[20px]"/>
                  <img src={ProfileImage} alt="" className="w-[30px] h-[30px] rounded-full object-cover"/>
                </div>
            </div>

            <div className="flex items-center">
                  <Input type="text" className="h-[50px] text-[20px] rounded-3xl w-[200px] mr-[20px]" placeholder="Search your courses"/>
                  <select name="" id="" className="h-[30px] bg-white rounded-lg text-black border-black mr-[20px]">
                    <option value="">Newest</option>
                    <option value="">Most popular</option>
                    <option value="">Most view</option>
                    <option value="">Most like</option>
                  </select>
                  <button className='h-[38px] rounded-2xl flex items-center justify-center bg-fuschia'>
                        <span className='text-[20px] text-white font-normal'>Create new</span>
                  </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
