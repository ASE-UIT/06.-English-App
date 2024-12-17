import StudentMyCourseNav from "@/components/Student/StudentMyCourseNav";

export default function StudentMyCoursePage(){
    return (
        <>
            <div className="p-[20px] w-100 bg-[#fcddec] content-center flex justify-center min-h-[200px] items-center">
                <p className="text-[#5D5FEF] font-sans font-bold text-8xl">My Learning</p>
            </div>
            <div>
                <StudentMyCourseNav />
            </div>
        </>
    )
}