import { Button } from "@/components/ui/button";
import { FiUpload } from "react-icons/fi";


const NoteCompletion = () => {
    return (
        <div>
            <div className="text-black">Reading Note Completion</div>
            <Button className="className=h-10 w-28 flex items-center bg-white text-[#5d5fef] rounded-[16px] p-0 justify-center border-[#F178B6] "><span><FiUpload className="text-2xl text-icon_color mr-1"/></span> Add media</Button>
        </div>
    )
}
export default NoteCompletion;