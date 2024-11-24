import { Button } from "@/components/Layout/Components/ui/Button"
import "react-dropzone-uploader/dist/styles.css"
import Dropzone, { IFileWithMeta } from "react-dropzone-uploader"
import { useState, useRef } from "react"

export default function CreateReadingMaterial() {
  const [isUpdatePreview, setIsUpdatePreview] = useState(false)
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null)
  const [isUploadSuccess, setIsUploadSuccess] = useState(false)
  const fileRef = useRef<IFileWithMeta | null>(null)

  const handleChangeStatus = (fileWithMeta: IFileWithMeta, status: string) => {
    console.log(`${fileWithMeta.meta.name} is ${status}`)
    if (status === "done") {
      setIsUpdatePreview(true)
      setUploadedFileName(fileWithMeta.meta.name)
      fileRef.current = fileWithMeta
    } else if (status === "removed") {
      setIsUpdatePreview(false)
      setUploadedFileName(null)
      fileRef.current = null
    }
  }

  const handleSubmit = async () => {
    if (fileRef.current) {
      const { file } = fileRef.current
      const formData = new FormData()
      formData.append("file", file)

      // const response = await axios.post("/api/upload", formData)
      setIsUploadSuccess(true)
    }
  }

  const handleCancel = () => {
    if (fileRef.current) {
      fileRef.current.remove()
    }
  }

  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-white px-[66px] py-[64px]">
      {isUploadSuccess && (
        <div className="absolute left-0 top-0 z-10 flex min-h-screen w-full flex-col items-center justify-center bg-[#FFFFFFCC]">
          <span className="text-[32px] font-medium">Upload success</span>
          <Button
            className="rounded-md bg-fuschia px-[8px] py-[4px] text-[18px] font-normal text-white"
            onClick={() => setIsUploadSuccess(false)}
          >
            OK
          </Button>
        </div>
      )}
      <div className="flex w-full flex-col gap-4 px-[305px] py-[80px]">
        <span className="text-[32px] font-medium">Upload files</span>
        <div
          className={`flex w-full flex-col rounded-md ${isUpdatePreview ? "border border-solid border-[#FCDDECEE]" : "border-2 border-dashed border-fuschia"}`}
        >
          {isUpdatePreview && uploadedFileName && (
            <div className="w-full bg-[#FCDDECDD] p-2 pl-4">
              <span className="text-base text-gray-500">{uploadedFileName}</span>
            </div>
          )}
          <Dropzone
            onChangeStatus={handleChangeStatus}
            maxFiles={1}
            multiple={false}
            inputContent="Drop a file here or click to browse"
            accept="image/*"
            submitButtonDisabled={false}
            classNames={{
              dropzone: `w-full min-h-[250px] bg-white text-2xl text-placeHolder`,
              submitButton: "hidden",
              previewImage: "w-full rounded-md flex items-center justify-center",
              submitButtonContainer: "hidden",
            }}
          />
        </div>
        {isUpdatePreview && (
          <div className="flex w-full items-center justify-center gap-2">
            <Button
              className="rounded-md border border-fuschia bg-white px-[8px] py-[4px] text-[18px] font-normal text-black hover:text-white"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              className="rounded-md bg-fuschia px-[8px] py-[4px] text-[18px] font-normal text-white"
              onClick={handleSubmit}
            >
              Confirm
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
