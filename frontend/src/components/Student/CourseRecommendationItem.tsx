const SeedData = {
    courseName: "Introduction to Computer Science",
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
            <img src={SeedData.thumbNail} alt="course-thumbnail" className="w-[400px] h-[400px]" />
        </div>
    )
}
