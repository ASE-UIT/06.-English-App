import { convertToVND } from "@/utils/constants."

const SeedData = {
    courseName: "IELTS General Training Writing Task 1 & 2",
    courseInstructor: "Dr. John Doe",
    courseRating: 4.5,
    courseRatingCount: 100,
    thumbNail: "https://study4.com/media/courses/Course/files/2023/12/12/gt_writing-min.webp",
    coursePrice: 500000,
    courseDiscount: 40,
    finalCoursePrice: 299000,
}

export default function CourseRecommendationItem() {
    return (
        <div className="flex flex-col">
            <img src={SeedData.thumbNail} alt="course-thumbnail" className="w-full max-w-[400px] h-auto object-cover rounded-md" />
            <p className="text-[black] font-sans text-[32px] font-bold leading-normal">{SeedData.courseName}</p>
            <p className="text-[#7879F1] text-[20px]">{SeedData.courseInstructor}</p>
            <div>
                <p>{SeedData.courseRating}</p>
                <p>{SeedData.courseRatingCount}</p>
            </div>
            <div>
                <p className="text-lg font-bold text-[red]">{convertToVND(SeedData.finalCoursePrice)}</p>
                <p className="text-gray-400 line-through">{convertToVND(SeedData.coursePrice)}</p>
            </div>

            {/* <div>
                <p>{convertToVND(SeedData.finalCoursePrice)}</p>
                <p>{convertToVND(SeedData.coursePrice)}</p>
                <p>{SeedData.courseDiscount}%</p>
            </div> */}
        </div>
    )
}
