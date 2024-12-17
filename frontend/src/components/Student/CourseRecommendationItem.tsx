import { RecommendCourseItem } from "@/type/course";
import { convertToVND } from "@/utils/constants."
import ReactStars from "react-rating-stars-component";

type CourseRecommendationItemProps = {
    course: RecommendCourseItem;
    onClick: () => void;
  };
  

export default function CourseRecommendationItem({course, onClick} : CourseRecommendationItemProps){
    return (

        <div className="flex flex-col max-w-[300px]" onClick={onClick}>
            <img src="https://study4.com/media/courses/Course/files/2023/12/12/gt_writing-min.webp" alt="course-thumbnail" className="w-full max-w-[400px] h-auto object-cover rounded-md" />
            <p className="text-[black] font-sans text-[24px] font-bold leading-normal">{course.title}</p>
            <p className="text-[#7879F1] text-[20px]">{course.teacherName}</p>
            <div className="flex content-center py-2 gap-2">
                <p className="h-100 content-center">{course.ratingAverage}</p>
                <ReactStars
                    count={5}
                    value={course.ratingAverage}
                    edit={false}
                    size={24}
                    isHalf={true}
                    activeColor="#ffd700"
                /> 
                <p className="h-100 content-center">({course.rating})</p>
            </div>
            <div className="flex content-center gap-2">
                <p className="text-lg font-bold text-[red]">{convertToVND(299000)}</p>
                <p className="text-gray-400 line-through">{convertToVND(500000)}</p>
            </div>
        </div>
    )
}
