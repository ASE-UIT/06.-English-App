import { Button } from "@/components/Layout/Components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { convertToVND } from "@/utils/constants.";
import { FaDownload } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdInfinite } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { useEffect, useState } from "react";
import { courseApi } from "@/apis";
import { Course } from "@/type/course";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import FroalaViewComponent from "@/components/Layout/Components/ui/FroalaViewComponent";
import { toast } from "react-toastify";
import courseBuyingApi, { PaymentMethod } from "@/apis/courseBuyingApi";
import { MdLocalAtm } from "react-icons/md";
export default function BuyCoursePage() {
    const {id} = useParams()
    const [course, setCourse] = useState<Course>();
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
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
    async function handleBuyCourseWithVNPAY(courseId: string) {
        try {
            // Call API
            const res = await courseBuyingApi.createPaymentUrlWithVNPAY({
                courseId,
                paymentMethod: PaymentMethod.QR_CODE,
            });
            
            // Redirect to VNPAY
            if (res && res.result) {
                window.location.href = res.result;
            } else {
                toast.error("Failed to create payment URL");
            }
        } catch (error) {
            console.error("Error during payment URL creation:", error); // Log the error for debugging
            toast.error("Something went wrong. Please try again.");
        }
    }    
    const navigate = useNavigate();
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {!isLoading && course && <>
            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                <DialogContent className="overflow-y-auto">
                    <DialogHeader className="flex content-center items-center">
                        <DialogTitle className="text-black ">Please select your pay option</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-4">
                        <Button className="bg-transparent border-1 border-[black] hover:bg-[#34a853] text-xl font-bold text-black gap-10 bg-[#34a853]">
                            <MdLocalAtm className="w-[40px] h-[40px]"/>
                            Pay with ATM card
                        </Button> 
                        <Button className="bg-transparent border-1 border-[black] hover:bg-transparent text-xl font-bold text-black gap-10" onClick={() => handleBuyCourseWithVNPAY(course?.id ?? "", PaymentMethod.VNPAY)}>
                            <img className="w-[40px] h-[40px]" src="https://stcd02206177151.cloud.edgevnpay.vn/assets/images/logo-icon/logo-primary.svg"></img>
                            Pay with VNPAY
                        </Button> 
                        <Button className="bg-transparent border-1 border-[black] hover:bg-[#00a3ff] text-xl font-bold bg-[#00a3ff] gap-10">
                            <img className="w-[40px] h-[40px]" src="https://simg.zalopay.com.vn/zlp-website/assets/new_logo_6c5db2d21b.svg"></img>
                            Pay with Zalopay
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
            <div className="flex w-full">
                <div className="flex flex-[1] p-[20px] items-start justify-start w-full ">
                    <Button className="bg-transparent hover:bg-transparent" onClick={() => navigate("/student-home")}>
                        <span><ArrowLeft /></span>
                    </Button>
                </div>
                <div className="p-[20px] flex flex-[8] items-start justify-start w-full">
                    <div className="flex flex-col gap-[20px] items-start justify-center">
                        <span className="font-sans font-bold text-2xl">{course?.title}</span>
                        <div className="flex gap-[50px] items-center justify-center">
                            <div className="flex items-center justify-center gap-1">
                                <img src="https://via.placeholder.com/150" alt="Course" className="w-[40px] h-[40px] rounded-full" />
                                <span>{course?.teacherName}</span>
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <FaStar color="#ffa405" />
                                <span>{course?.ratingAverage}</span>
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <span><MdPlayLesson /></span>
                                <span>{course.lessons.length} lessons</span>
                            </div>
                        </div>
                        <img src={course?.thumbnail_image} alt="course-thumbnail" className="w-full max-w-[1000px] h-auto object-cover rounded-md" />
                        <div>
                            <span className="font-sans font-bold text-2xl">Course Description</span>
                            <FroalaViewComponent model={course?.description}/>
                        </div>
                        <div className="flex flex-col gap-[20px] items-start justify-center">
                            <span className="font-sans font-bold text-2xl">Playlist</span>
                            {course.lessons.map((lesson, index) => (
                                <div key={lesson.id} className="flex items-center justify-between gap-8">
                                    <span className="h-full content-center"><FaVideo size="30px" /></span>
                                    <span className="font-bold font-sans text-xl">{`Lesson ${index + 1}`}</span>
                                    <span className="h-full content-center font-sans">{lesson.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-[3] items-center justify-center h-[100vh] gap-[20px] bg-[#f7f9fa]">
                    <p className="font-bold text-6xl">{convertToVND(course?.finalPrice ?? 0)}</p>
                    <Button className="min-w-[300px] bg-transparent border-1 border-[black] hover:bg-transparent text-xl font-bold" onClick={() => setOpen(true)}>Buy now</Button>
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
            </>
            }
        </>
    )
}