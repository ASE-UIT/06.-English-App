import ProgressBar from "@ramonak/react-progress-bar";


export default function MyCourseItem() { 
    return (
        <div>
            <img src="https://study4.com/media/courses/Course/files/2023/12/12/gt_writing-min.webp" alt="course-thumbnail" className="w-full max-w-[400px] h-auto object-cover rounded-md" />
            <div className="flex flex-col gap-[10px]">
                <span className="font-bold text-2xl">Reading essentials</span>
                <span className="text-[#7879f1]">Ms. Thuy</span>
                <ProgressBar completed={25} maxCompleted={100} bgColor="#ef5da8" />
                <p>25% completed</p>
            </div>
        </div>
    )
}