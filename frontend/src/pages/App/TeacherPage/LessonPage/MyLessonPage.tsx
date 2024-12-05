import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { BiPlus } from "react-icons/bi"
import { useNavigate } from "react-router"
import { X } from "lucide-react"
import { Text } from "@radix-ui/themes"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lesson } from "@/type/lesson"
import FroalaEditorComponent from "@/components/Layout/Components/ui/FroalaEditorComponent"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useMemo, useState } from "react"
import generateFroalaConfig from "@/config/froala.config"
import { useMutation } from "@tanstack/react-query"
import { lessonApi } from "@/apis"
import { toast } from "react-toastify"
import { useLessonByCourse } from "@/features/lesson/hooks"
import _ from "lodash"
import { SectionByLesson } from "./Section/SectionByLesson"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(1, "Vui lòng điền vào chỗ trống"),
  description: z.string().min(1, "Vui lòng điền vào chỗ trống"),
  content: z.string().min(1, "Vui lòng điền vào chỗ trống"),
})

type CreateLessonDTO = z.infer<typeof formSchema>

export const MyLessonPage = ({ courseId }: { courseId: string | undefined }) => {
  const navigate = useNavigate()
  const { data: lessonList, refetch: refetchLesson } = useLessonByCourse(courseId as string)
  const froalaConfig = useMemo(() => generateFroalaConfig(), [])
  const [openDialog, setOpenDialog] = useState(false)
  const [content, setContent] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [type, setType] = useState<string>("")
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<CreateLessonDTO>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      content: "",
      description: "",
    },
  })

  useEffect(() => {
    if (content) {
      setValue("content", content)
    }
    if (description) {
      setValue("description", description)
    }
  }, [content, description, setValue])

  const CreateLesson = useMutation({
    mutationFn: lessonApi.CreateLesson,
    onSuccess: (Res) => {
      if (Res?.message === "Create lesson successfully") {
        toast.success(`${Res.message}`)
        reset()
        refetchLesson()
        setOpenDialog(false)
      } else {
        toast.error(`Error ${Res?.statusCode}: ${Res?.message}`)
      }
    },
    onError: () => {
      toast.error("Something error")
    },
  })

  function onSubmit(values: CreateLessonDTO) {
    console.log("onSubmit", values)
    const data = {
      name: values.name,
      description: values.description,
      content: values.content,
      courseId: courseId as string,
      type: type,
    }
    CreateLesson.mutate(data)
  }

  return (
    <div className="flex h-full min-h-screen w-full flex-col gap-[28px] bg-white py-[64px]">
      {lessonList?.data && lessonList.data.length > 0 ? (
        _.sortBy(lessonList.data, ["createDate"]).map((lesson, index) => (
          <div key={lesson.id} className="flex flex-col rounded-md border-2 border-fuschia px-[78px] py-[56px]">
            <div className="flex items-center text-headerIcon">
              <span className="mr-[30px] text-2xl font-semibold">
                Lesson {index + 1}:{" "}
                <span className="font-normal text-black">
                  {lesson.name} {lesson.type}
                </span>
              </span>
              <Button
                onClick={() => navigate("/course/1/lesson/Vocabulary")}
                className="mr-[19px] rounded-full border-2 border-fuschia bg-lessonbg px-[12px] py-[9.5px] text-[16px] font-normal hover:border-fuschia hover:bg-fuschia hover:text-white"
              >
                <BiPlus className="mr-[1.5px]" size={20} />
                Vocabulary
              </Button>
              <Button
                onClick={() => navigate(`/course/${courseId}/1/Grammar`)}
                className="mr-[19px] rounded-full border-2 border-fuschia bg-lessonbg px-[12px] py-[9.5px] text-[16px] font-normal hover:border-fuschia hover:bg-fuschia hover:text-white"
              >
                <BiPlus className="mr-[1.5px]" size={20} />
                Grammar
              </Button>
            </div>
            <div className="mt-[33px] flex w-full flex-col gap-[23px]">
              {/* <div className="flex h-[73px] w-full cursor-pointer shadow-sectionCard">
      <div className="w-[96px] bg-white"></div>
      <div className="flex w-full flex-col bg-lessonbg px-[26px] py-[9px]">
        <span className="text-2xl font-normal text-black">VideoLecture1.mp4</span>
        <span className="text-xl font-extralight text-black">15.00</span>
      </div>
    </div> */}
              <SectionByLesson lessonId={lesson.id} />
              <div>
                <Button
                  onClick={() => navigate(`/course/${courseId}/lesson/${lesson.id}/section/create`)}
                  className="mr-[19px] rounded-lg border-2 border-fuschia bg-lessonbg p-3 text-[16px] font-normal text-headerIcon hover:border-fuschia hover:bg-fuschia hover:text-white"
                >
                  <BiPlus className="mr-[1.5px]" size={20} />
                  Add section
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span className="text-base font-semibold text-black">No lesson in this course...</span>
      )}
      <div className="mt-[38px]">
        <Dialog
          open={openDialog}
          onOpenChange={() => {
            reset()
            setOpenDialog(!openDialog)
          }}
        >
          <DialogTrigger className="mr-[19px] flex rounded-lg border-2 bg-fuschia px-3 py-1.5 text-base font-normal text-white transition-all hover:border-fuschia hover:bg-white hover:text-headerIcon">
            <BiPlus className="mr-[1.5px]" size={20} />
            Add Lesson
          </DialogTrigger>
          <DialogContent className="flex h-full flex-col overflow-y-auto bg-white">
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle className="text-2xl text-fuschia">Create Lesson</DialogTitle>
              <DialogClose className="h-fit w-fit bg-fuschia">
                <X className="h-6 w-6" />
              </DialogClose>
            </DialogHeader>
            <form className="flex w-full flex-col gap-5 px-[78px] py-[56px]" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex w-full items-center gap-5">
                <div className="flex w-full flex-col">
                  <Text as="div" className="mb-2 text-zinc-700" size="4" mb="1" weight="bold">
                    Lesson Name
                  </Text>
                  <Input
                    placeholder="Your lesson name..."
                    className="bg-white text-zinc-700"
                    {...register("name")}
                    id="name"
                    type="text"
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <label className="w-auto">
                  <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
                    Type
                  </Text>
                  <div className="flex w-full flex-col">
                    <Select key="type" onValueChange={(value) => setType(value)}>
                      <div className="flex w-full space-x-3">
                        <SelectTrigger className="h-10 w-[200px] !cursor-pointer rounded-md border-[1.5px] border-slate-300 bg-white text-base !font-normal text-black">
                          <SelectValue placeholder="Chọn danh mục"></SelectValue>
                        </SelectTrigger>
                      </div>
                      <SelectContent>
                        {Lesson.map((i) => (
                          <SelectItem
                            className="text-sm text-black hover:text-navTitle focus:text-navTitle"
                            key={i.key}
                            value={i.key}
                          >
                            {i.text}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </label>
              </div>
              <div className="relative">
                <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
                  Content
                </Text>
                <FroalaEditorComponent
                  key={content}
                  tag="textarea"
                  config={froalaConfig}
                  model={content}
                  onModelChange={(e: string) => setContent(e)}
                />
                {errors.content && <p className="text-red-500">{errors.content.message}</p>}
              </div>
              <div className="relative">
                <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
                  Description
                </Text>
                <FroalaEditorComponent
                  key={description}
                  tag="textarea"
                  config={froalaConfig}
                  model={description}
                  onModelChange={(e: string) => setDescription(e)}
                />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}
              </div>

              <div className="flex w-full items-center justify-center gap-5">
                <div>
                  <Button className="flex rounded-lg border-2 bg-fuschia px-3 py-1.5 text-base font-normal text-white transition-all hover:border-fuschia hover:bg-white hover:text-headerIcon">
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="flex rounded-lg border-2 bg-headerIcon px-3 py-1.5 text-base font-normal text-white transition-all hover:border-fuschia hover:bg-white hover:text-headerIcon"
                  >
                    Save & Continue{" "}
                  </Button>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}