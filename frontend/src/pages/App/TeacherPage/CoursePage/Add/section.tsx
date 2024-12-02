import { useEffect, useMemo, useState } from "react"
import { Button, Text, TextField } from "@radix-ui/themes"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Section } from "@/type/section"
import FroalaEditorComponent from "react-froala-wysiwyg"
import generateFroalaConfig from "@/config/froala.config"
import { FileUpload } from "@/components/ui/fileInput"
import { useMutation } from "@tanstack/react-query"
import { sectionApi } from "@/apis"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router"

const formSchema = z.object({
  title: z.string().min(1, "Vui lòng điền vào chỗ trống"),
  content: z.string().min(1, "Vui lòng điền vào chỗ trống"),
})

type CreateSectionDTO = z.infer<typeof formSchema>

export const SectionComp = () => {
  const { courseId, lessonId } = useParams()
  const navigate = useNavigate()
  const froalaConfig = useMemo(() => generateFroalaConfig(), [])
  const [content, setContent] = useState<string>("")
  const [type, setType] = useState<string>("")
  const [files, setFiles] = useState<File[]>([])
  const handleFileUpload = (files: File[]) => {
    setFiles(files)
    console.log(files)
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateSectionDTO>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  })

  useEffect(() => {
    if (content) {
      setValue("content", content)
    }
  }, [content, setValue])

  const CreateSection = useMutation({
    mutationFn: sectionApi.CreateSection,
    onSuccess: (Res) => {
      if (Res?.message === "Course created") {
        toast.success(`${Res.message}`)
        navigate(`/course/${courseId}`)
      } else {
        toast.error(`Error ${Res?.statusCode}: ${Res?.message}`)
      }
    },
    onError: () => {
      toast.error("Something error")
    },
  })

  function onSubmit(values: CreateSectionDTO) {
    console.log("onSubmit", values)
    const data = {
      title: values.title,
      content: values.content,
      type: type,
      lessionId: lessonId as string,
      sectionMedia: files[0].name,
    }
    CreateSection.mutate(data)
  }

  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-white py-[27px]">
      <form className="flex w-full flex-col gap-5 px-[78px] py-[56px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full items-center gap-5">
          <label className="w-full">
            <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
              Title
            </Text>
            <TextField.Root
              className="!w-full"
              type="text"
              {...register("title")}
              placeholder="Enter your section title"
              size="3"
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </label>
          <label className="w-auto">
            <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
              Type
            </Text>
            <div className="flex w-full flex-col">
              <Select key="category" onValueChange={(value) => setType(value)}>
                <div className="flex w-full space-x-3">
                  <SelectTrigger className="h-10 w-[200px] !cursor-pointer rounded-md border-[1.5px] border-slate-300 bg-white text-base !font-normal text-black">
                    <SelectValue placeholder="Chọn danh mục"></SelectValue>
                  </SelectTrigger>
                </div>
                <SelectContent>
                  {Section.map((i) => (
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
        <div>
          <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
            Content
          </Text>
          <FroalaEditorComponent
            tag="textarea"
            config={froalaConfig}
            model={content}
            onModelChange={(e: string) => setContent(e)}
          />
          {errors.content && <p className="text-red-500">{errors.content.message}</p>}
        </div>
        <div>
          <Text as="div" size="4" className="mb-2 text-zinc-700" mb="1" weight="bold">
            Title
          </Text>
          <div className="mx-auto min-h-96 w-full rounded-lg border border-dashed border-headerIcon bg-white">
            <FileUpload onChange={handleFileUpload} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div>
            <Button variant="outline" size="3">
              Cancel
            </Button>
          </div>
          <div>
            <Button variant="solid" size="3" className="cursor-pointer" type="submit">
              Save & Continue{" "}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
