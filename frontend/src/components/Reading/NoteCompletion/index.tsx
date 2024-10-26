import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FiUpload } from "react-icons/fi"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/Layout/Components/ui/Select"
import { FIELD } from "@/config/option"

const NoteCompletion = () => {
  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="ml-[50px] text-2xl text-[#5d5fef]">Enter note with blanks</div>
        <Button className="className=h-10 flex w-28 items-center justify-center rounded-[16px] border-[#F178B6] bg-white p-0 text-[#5d5fef]">
          <span>
            <FiUpload className="mr-1 text-2xl text-icon_color" />
          </span>{" "}
          Add media
        </Button>
      </div>
      <div className="ml-[75px] mt-[20px] flex flex-col items-end">
        '
        <Textarea className="min-h-[400px] min-w-[700px] border-[#d9d9d9] bg-inherit" />
        <div className="mt-[25px] flex w-[250px] gap-[10px]">
          <Button className="w-full border-[#ef5da8] bg-inherit text-[16px] text-black" variant="outline">
            Add blank
          </Button>
          <Button className="w-full bg-fuschia">OK</Button>
        </div>
      </div>
      <hr className="my-[60px] px-[35px]" />
      <div className="ml-[60px]">
        <div className="flex justify-between">
          <p className="text-2xl text-[#5D5FEF]">Enter correct answers</p>
          <div>
            <span className="text-black">Maximum number of words</span>
            <Select>
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Chọn danh mục"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {FIELD.map((i) => (
                    <SelectItem key={i.text} value={i.text}>
                      {i.text}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <ul>{}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NoteCompletion
