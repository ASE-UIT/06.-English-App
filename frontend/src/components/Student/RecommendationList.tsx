import { useEffect, useState } from "react";
import CourseRecommendationItem from "./CourseRecommendationItem";
import { RecommendCourseItem } from "@/type/course";
import { courseApi } from "@/apis";
import { useNavigate } from "react-router";

export default function RecommendationList(){
    const [listRecomendCourse, setListRecommendCourse] = useState<RecommendCourseItem[]>([]); 
    const navigate = useNavigate();
    function handleClickCourse(courseId: string){
        navigate(`/student/course-preview/${courseId}`);
    }
    async function fetchRecommendCourse() {
        try{
            const response = await courseApi.getRecommendCourse();
            if(response){
                setListRecommendCourse(response.data);
            }
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        fetchRecommendCourse();
    }, [listRecomendCourse])

    return (
        <div className="flex flex-row gap-4 flex-wrap hover:cursor-pointer mt-[20px]">
            {listRecomendCourse.map((course) => (
                <CourseRecommendationItem key={course.id} course={course} onClick={() => handleClickCourse(course.id)} />
            ))}
        </div>
    )
}