import { courseApi } from "@/apis";
import { Button } from "@/components/Layout/Components/ui/Button";
import CoursePreviewNav from "@/components/Student/CoursePreviewNav";
import { HeaderCourse } from "@/components/Student/HeaderCourse";
import LessonList from "@/components/Student/LessonList";
import { Course } from "@/type/course";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { toast } from "react-toastify";



export function CoursePreviewPage(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState<Course>();
    const [isLoading, setIsLoading] = useState(false);
    async function getCourseDetail(id?: string){
        try {
            setIsLoading(true);
            if(id){
                const result = await courseApi.GetCourseDetail(id);
                if(result && result.data){
                    setCourse(result.data);
                    setIsLoading(false);
                }
            }
        }
        catch (error){ 
            setIsLoading(false);
            toast.error("Error when fetching course detail");
            console.log(error)
        }
    }
    useEffect(() => {
        getCourseDetail(id)
    }, [id])
    console.log(course)
    return (

        <>
            {isLoading && <div>Loading...</div>}
            {!isLoading && course &&
            <>
                <HeaderCourse title={course?.title} /> 
                <div className="flex justify-center p-[20px]">
                    <div className="flex flex-col flex-8 content-start">
                        <div>
                            <img src={course?.thumbnail_image} alt="course" className="w-[100%] h-[400px]"/>
                        </div>
                        <CoursePreviewNav course={course} />
                    </div>
                    <div className="flex flex-col flex-4 p-[20px] py-0">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-sans font-bold text-[#5d5fef] p-[20px] px-0">Course content</h2>
                            <Button className="bg-[#5d5fef] text-white" onClick={() => navigate(`/student/buy-course/${id}`)}>Buy course</Button>
                        </div>
                        <div className="bg-[#EF5DA8] w-full h-[2px]" />
                        <LessonList lessons = {course?.lessons} />
                    </div>
                </div>
            </>
        }
        </>
    )
}