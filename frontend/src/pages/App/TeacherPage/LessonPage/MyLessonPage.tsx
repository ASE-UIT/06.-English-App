import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Section } from "@/type/section"
import { BiPlus } from "react-icons/bi"
import { useNavigate } from "react-router"

export const MyLessonPage = () => {
  const navigate = useNavigate()
  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-white py-[64px]">
      <div className="flex flex-col rounded-md border-2 border-fuschia px-[78px] py-[56px]">
        <div className="flex items-center text-headerIcon">
          <span className="mr-[30px] text-2xl font-semibold">
            Lesson 1: <span className="font-normal text-black">Introduction</span>
          </span>
          <Button
            onClick={() => navigate("/course/1/lesson/Vocabulary")}
            className="mr-[19px] rounded-full border-2 border-fuschia bg-lessonbg px-[12px] py-[9.5px] text-[16px] font-normal hover:border-fuschia hover:bg-fuschia hover:text-white"
          >
            <BiPlus className="mr-[1.5px]" size={20} />
            Vocabulary
          </Button>
          <Button className="mr-[19px] rounded-full border-2 border-fuschia bg-lessonbg px-[12px] py-[9.5px] text-[16px] font-normal hover:border-fuschia hover:bg-fuschia hover:text-white">
            <BiPlus className="mr-[1.5px]" size={20} />
            Grammar
          </Button>
        </div>
        <div className="mt-[33px] flex w-full flex-col gap-[28px]">
          <div className="flex h-[73px] w-full cursor-pointer shadow-sectionCard">
            <div className="w-[96px] bg-white"></div>
            <div className="flex w-full flex-col bg-lessonbg px-[26px] py-[9px]">
              <span className="text-2xl font-normal text-black">VideoLecture1.mp4</span>
              <span className="text-xl font-extralight text-black">15.00</span>
            </div>
          </div>
          <div className="flex h-[73px] w-full cursor-pointer border-[1px] border-headerIcon shadow-sectionCard">
            <div className="flex flex-col bg-lessonbg px-[26px] py-[9px]">
              <div className="flex w-full items-center gap-[23px]">
                <span className="text-2xl font-normal text-headerIcon">Section 1</span>
                <span className="text-xl font-extralight text-headerIcon">Reading</span>
              </div>
              <span className="text-xl font-extralight text-black">3 questions</span>
            </div>
          </div>
          <div className="flex h-[73px] w-full cursor-pointer border-[1px] border-headerIcon shadow-sectionCard">
            <div className="flex flex-col bg-lessonbg px-[26px] py-[9px]">
              <div className="flex w-full items-center gap-[23px]">
                <span className="text-2xl font-normal text-headerIcon">Section 2</span>
                <span className="text-xl font-extralight text-headerIcon">Listening</span>
              </div>
              <span className="text-xl font-extralight text-black">3 questions</span>
            </div>
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mr-[19px] rounded-lg border-2 border-fuschia bg-lessonbg p-3 text-[16px] font-normal text-headerIcon hover:border-fuschia hover:bg-fuschia hover:text-white">
                  <BiPlus className="mr-[1.5px]" size={20} />
                  Add section
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[384px] bg-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-black">Create a new section</DialogTitle>
                  <DialogDescription className="text-sm font-normal text-sectionDesriptionModal">
                    Please choose section type
                  </DialogDescription>
                </DialogHeader>
                <RadioGroup>
                  {Section.map((ans) => (
                    <div className="flex items-center space-x-[6px]">
                      <RadioGroupItem value={ans.key} id={ans.key} />
                      <label htmlFor={ans.key} className="text-left text-sm font-normal text-black">
                        {ans.text}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
                <DialogFooter className="bg-white">
                  <DialogClose className="flex w-full justify-between gap-2 border-0 bg-white px-0 text-sm">
                    <Button className="w-full rounded-lg border-fuschia bg-white py-[13.5] text-center font-normal text-fuschia">
                      Cancel
                    </Button>
                    <Button className="w-full rounded-lg bg-fuschia py-[13.5] text-center font-normal text-white">
                      OK
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="mt-[38px]">
        <Button className="mr-[19px] rounded-lg border-2 bg-fuschia p-3 text-[16px] font-normal text-white hover:border-fuschia hover:bg-white hover:text-headerIcon">
          <BiPlus className="mr-[1.5px]" size={20} />
          Add Lesson
        </Button>
      </div>
    </div>
  )
}
