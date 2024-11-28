import CourseCreateHeader from "@/components/Course/Create/Header"
import { Button } from "@radix-ui/themes"
import { EyeOpenIcon, CheckIcon, PlusIcon } from "@radix-ui/react-icons"
import CourseCreateLesson from "@/components/Course/Create/Lesson"

const CourseAddLessons = () => {
  return (
    <div className="p-3">
      <CourseCreateHeader>
        <div className="flex gap-3">
          <Button variant="outline" size="3" className="cursor-pointer bg-white">
            <EyeOpenIcon></EyeOpenIcon>
            Preview
          </Button>
          <Button variant="outline" size="3" className="cursor-pointer bg-white">
            <CheckIcon></CheckIcon>
            Publish
          </Button>
        </div>
      </CourseCreateHeader>
      <div className="px-10">
        <CourseCreateLesson></CourseCreateLesson>
        <Button variant="solid" size="3" className="cursor-pointer bg-pink-500">
          <PlusIcon></PlusIcon>
          Add lesson
        </Button>
      </div>
    </div>
  )
}

export default CourseAddLessons
