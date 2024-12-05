import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import FormGroup from "@/components/Layout/Components/ui/form-group"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/Layout/Components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Layout/Components/ui/Select"
import { Input } from "@/components/Layout/Components/ui/Input"
import { Button } from "@/components/Layout/Components/ui/Button"
import { BiPlus } from "react-icons/bi"
import { GiGlobe } from "react-icons/gi"
import { WordType } from "@/type"
import { useMutation } from "@tanstack/react-query"
import { fileApi, lessonApi } from "@/apis"
import { toast } from "react-toastify"
import { vocabularyDTO } from "@/type/vocabulary"

export const formSchema = z.object({
  Term: z.string().min(1, ""),
  Type: z.string().min(1, ""),
  Definition: z.string().min(1, ""),
  file:
    typeof window === "undefined"
      ? z.any()
      : z.instanceof(File).refine((files) => files !== null, "Tài liệu không được để trống"),
})

export const CreateVocab = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Term: "",
      Definition: "",
    },
  })
  const CreateVocab = useMutation({
    mutationFn: ({ lessonId, vocabularies }: { lessonId: string; vocabularies: vocabularyDTO[] }) =>
      lessonApi.AddVocabToLesson(lessonId, vocabularies),
    onSuccess: (Res) => {
      if (Res?.message === "Create lesson successfully") {
        toast.success(`${Res.message}`)
        form.reset()
      } else {
        toast.error(`Error ${Res?.statusCode}: ${Res?.message}`)
      }
    },
    onError: () => {
      toast.error("Something error")
    },
  })
  const fileRef = form.register("file")

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const contentType = values.file?.type || "image/jpeg"
    let mediaUrl = ""
    console.log("contentType", values.file?.type)
    const getPreUrl = await fileApi.getPresignedUrl(contentType, "png")
    console.log("getPreUrl", getPreUrl)
    if (getPreUrl?.data.preSignedUrl && values.file) {
      const uploadFile = await fileApi.uploadFile(getPreUrl?.data.preSignedUrl, values.file)
      console.log("uploadFile", uploadFile)
      mediaUrl = getPreUrl?.data.key
    }
    if (mediaUrl === "") {
      toast.error("Something error")
      return
    }
    const data = {
      vocabulary: values.Term,
      note: values.Definition,
      mediaWord: mediaUrl,
      wordType: values.Type,
    }
    CreateVocab.mutate({ lessonId: "lessonId", vocabularies: [data] })
  }

  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-white px-[66px] py-[64px]">
      <div className="flex flex-wrap rounded-md border-2 border-fuschia px-[78px] py-[56px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="flex w-full flex-wrap items-center gap-[33px]">
              <FormGroup
                control={form.control}
                label="Term"
                name="Term"
                autoFocus
                inputClassName="text-base font-normal text-black min-w-[240px] w-[600px] bg-white border-slate-300"
              />
              <FormField
                control={form.control}
                name="Type"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel className="text-sm font-medium text-black">Type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <div className="flex w-full space-x-3">
                          <SelectTrigger className="mt-2 h-10 w-[243px] !cursor-pointer rounded-md border-[1.5px] border-slate-300 bg-white text-base !font-normal text-placeHolder">
                            <SelectValue placeholder="Chọn danh mục"></SelectValue>
                          </SelectTrigger>
                        </div>
                      </FormControl>
                      <SelectContent className="w-[243px]">
                        {WordType.map((i) => (
                          <SelectItem key={i.key} value={i.key}>
                            {i.text}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormGroup
                control={form.control}
                label="Definition"
                name="Definition"
                inputClassName="text-base font-normal text-black min-w-[240px] w-[600px] bg-white border-slate-300"
              />
              <FormField
                control={form.control}
                name="file"
                render={({ fieldState }) => (
                  <FormItem className="">
                    <FormLabel className="text-sm font-medium text-black">File</FormLabel>
                    <FormControl>
                      <Input
                        className="cursor-pointer bg-white text-base font-normal text-placeHolder placeholder:text-base"
                        type="file"
                        {...fileRef}
                      />
                    </FormControl>
                    {fieldState.error && <p className="text-sm text-red-600">{fieldState.error.message}</p>}
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <Button className="mt-5 rounded-full border-2 border-fuschia bg-lessonbg px-[12px] py-[9.5px] text-[16px] font-normal text-fuschia">
          <GiGlobe className="mr-[1.5px]" size={20} />
          Add from dictionary
        </Button>
      </div>
      <div className="mt-[38px]">
        <Button className="mr-[19px] rounded-lg border-2 bg-fuschia p-3 text-[16px] font-normal text-white">
          <BiPlus className="mr-[1.5px]" size={20} />
          Add New
        </Button>
      </div>
    </div>
  )
}
