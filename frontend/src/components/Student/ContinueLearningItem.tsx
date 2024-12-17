export default function ContinueLearningItem(){ 
    return (
        <div className="flex gap-[20px] max-w-[500px] mt-[20px] mb-[20px] bg-[#f7f9fa] rounded-md">
            <img src="https://via.placeholder.com/150" alt="course-thumbnail" className="w-[200px] h-[200px] rounded-md" />
            <div className="flex flex-col justify-between">
                <div>
                    <p className="text-xl uppercase font-bold text-[#cccccc]">
                        The complete guide to ielts reading general
                    </p>
                    <p className="font-sans font-[600]">Lesson 1</p>
                </div>
                <p className="font-sans font-[600] text-[#5d5fef]">Section 2</p>
            </div>
        </div>
    )
}