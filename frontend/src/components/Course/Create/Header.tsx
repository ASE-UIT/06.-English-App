import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router";

const CourseCreateHeader = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (<div className="px-3 py-5 bg-pink-50 border border-zinc-200 rounded-sm flex">
        <div>
            <ArrowLeftIcon className="text-blue-700 cursor-pointer" height={24} width={24} onClick={goBack}></ArrowLeftIcon>
        </div>
        <div className="ml-3 flex-1">
            <div className="text-lg">Back to course</div>
            <div>
                <span className="text-zinc-400">Courses / </span>
                <span className="font-semibold ">IELTS 001</span>
            </div>
        </div>
        <div className="flex items-center">
            {children}
        </div>
    </div>);
}
 
export default CourseCreateHeader; 