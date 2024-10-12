import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FiUpload } from "react-icons/fi";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
  } from '@/components/Layout/Components/ui/Select'
import { FIELD } from "@/config/option";


const NoteCompletion = () => {
    return (
        <div>
            <div className="flex gap-[50px] items-center">
                <div className="text-[#5d5fef] text-2xl ml-[50px]">Enter note with blanks</div>
                <Button className="className=h-10 w-28 flex items-center bg-white text-[#5d5fef] rounded-[16px] p-0 justify-center border-[#F178B6] "><span><FiUpload className="text-2xl text-icon_color mr-1"/></span> Add media</Button>
            </div>
            <div className="flex flex-col ml-[75px] mt-[20px] items-end">'
                <Textarea className="min-w-[700px] min-h-[400px] bg-inherit border-[#d9d9d9]" />
                <div className="flex gap-[10px] w-[250px] mt-[25px]">
                    <Button className="w-full bg-inherit border-[#ef5da8] text-black text-[16px]" variant="outline">Add blank</Button>
                    <Button className="w-full bg-fuschia">OK</Button>
                </div>
            </div>
            <hr className="px-[35px] my-[60px]"/>
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
                        <ul>
                            {}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default NoteCompletion
