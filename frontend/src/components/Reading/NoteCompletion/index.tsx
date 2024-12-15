import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
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
      </div>
      <div className="ml-[75px] mt-[20px] flex flex-col items-end">
        '
        <Textarea className="min-h-[400px] min-w-[700px] border-[#d9d9d9] bg-inherit" />
      </div>
      <hr className="my-[60px] px-[35px]" />
      <div className="ml-[60px]">
        <div className="flex justify-between">
          <p className="text-2xl text-[#5D5FEF]">Enter correct answers</p>
        </div>
      </div>
    </div>
  )
}
export default NoteCompletion
