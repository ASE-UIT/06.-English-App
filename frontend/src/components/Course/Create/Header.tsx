import { selectCourseView } from "@/features/course/store/selectors"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

const CourseCreateHeader = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const { name } = useSelector(selectCourseView)
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="flex rounded-sm border border-zinc-200 bg-pink-50 px-3 py-5">
      <div>
        <ArrowLeftIcon className="cursor-pointer text-blue-700" height={24} width={24} onClick={goBack}></ArrowLeftIcon>
      </div>
      <div className="ml-3 flex-1">
        <div className="text-lg">Back to course</div>
        <div>
          <span className="text-zinc-400">Courses / </span>
          <span className="font-semibold">{name}</span>
        </div>
      </div>
      <div className="flex items-center">{children}</div>
    </div>
  )
}

export default CourseCreateHeader
