import { Button } from "@/components/Layout/Components/ui/Button"
import "react-dropzone-uploader/dist/styles.css"
import Dropzone, { IFileWithMeta } from "react-dropzone-uploader"
import { useState } from "react"

export default function CreateReadingMaterial() {
  const [isUpdatePreview, setIsUpdatePreview] = useState(false)
  const handleChangeStatus = ({ meta }: { meta: { name: string } }, status: string) => {
    console.log(`${meta.name} is ${status}`)
    if (status === "done") {
      setIsUpdatePreview(true)
    } else {
      setIsUpdatePreview(false)
    }
  }
  const handleSubmit = async (files: IFileWithMeta[]) => {
    const f = files[0]
    console.log(f)
  }

  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-white px-[66px] py-[64px]">
      <div className="flex w-full flex-col gap-4 px-[305px] py-[80px]">
        <span className="text-[32px] font-medium">Upload files</span>
        <Dropzone
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          maxFiles={1}
          multiple={false}
          inputContent="Drop a file here or click to browse"
          accept="image/*,audio/*,video/*"
          submitButtonDisabled={false}
          classNames={{
            dropzone:
              "w-full min-h-[250px] border-2 border-dashed border-fuschia rounded-md flex items-center justify-center",
            submitButton: "hidden",
            previewImage: "w-full rounded-md flex items-center justify-center",
          }}
        />
        {isUpdatePreview && (
          <div className="flex w-full items-center justify-center gap-2">
            <Button className="rounded-md border border-fuschia bg-white px-[8px] py-[4px] text-[18px] font-normal text-black hover:text-white">
              Cancel
            </Button>
            <Button className="rounded-md bg-fuschia px-[8px] py-[4px] text-[18px] font-normal text-white">
              Confirm
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
