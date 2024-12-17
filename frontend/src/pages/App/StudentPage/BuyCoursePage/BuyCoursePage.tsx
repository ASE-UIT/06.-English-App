import { Button } from "@/components/Layout/Components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { convertToVND } from "@/utils/constants.";
import { FaDownload } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdInfinite } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";






export default function BuyCoursePage() {
    const navigate = useNavigate();
    return (
        <div className="flex w-full">
            <div className="flex flex-[1] p-[20px] items-start justify-start w-full ">
                <Button className="bg-transparent hover:bg-transparent" onClick={() => navigate("/student-home")}>
                    <span><ArrowLeft /></span>
                </Button>
            </div>
            <div className="p-[20px] flex flex-[8] items-center justify-start w-full">
                <div className="flex flex-col gap-[20px] items-start justify-center">
                    <span className="font-sans font-bold text-2xl">IELTS Reading: Basic to Advance</span>
                    <div className="flex gap-[50px] items-center justify-center">
                        <div className="flex items-center justify-center gap-1">
                            <img src="https://via.placeholder.com/150" alt="Course" className="w-[40px] h-[40px] rounded-full" />
                            <span>Ms Thuy</span>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <FaStar color="#ffa405" />
                            <span>4.5</span>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <span><MdPlayLesson /></span>
                            <span>10 lessons</span>
                        </div>
                    </div>
                    <img src="https://study4.com/media/courses/Course/files/2023/12/12/gt_writing-min.webp" alt="course-thumbnail" className="w-full max-w-[1000px] h-auto object-cover rounded-md" />
                    <div>
                        <span className="font-sans font-bold text-2xl">Course Description</span>

                    </div>
                    <div className="flex flex-col gap-[20px] items-start justify-center">
                        <span className="font-sans font-bold text-2xl">Playlist</span>
                        <div className="flex items-center justify-between gap-8">
                            <span className="h-full content-center"><FaVideo size="30px" /></span>
                            <span className="font-bold font-sans text-xl">Lesson 1</span>
                            <span className="h-full content-center font-sans"> Introduction to IELTS Reading</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-[3] items-center justify-center w-full gap-[20px] bg-[#f7f9fa]">
                <p className="font-bold text-6xl">{convertToVND(300000)}</p>
                <Button className="min-w-[300px] bg-transparent border-1 border-[black] hover:bg-transparent text-xl font-bold">Buy now</Button>
                <p className="font-bold text-xl">This course includes: </p>
                <div className="flex flex-col min-w-[300px] gap-[20px] items-start justify-center"> 
                    <div className="flex w-full gap-[30px]">
                        <span><FaDownload/></span>
                        <p>Downloadable resources</p>
                    </div>
                    <div className="flex w-full gap-[30px]">
                        <span><FaMobileAlt/></span>
                        <p>Access on mobile and TV</p>
                    </div>
                    <div className="flex w-full gap-[30px]">
                        <span><IoMdInfinite/></span>
                        <p>Full lifetime access</p>
                    </div>
                    <div className="flex w-full gap-[30px]">
                        <span><TbCertificate/></span>
                        <p>Certificate of completion</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}