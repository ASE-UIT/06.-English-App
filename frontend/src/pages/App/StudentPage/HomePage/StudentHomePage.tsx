import CategoryList from "@/components/Student/CategoryList";
import ContinueLearningItem from "@/components/Student/ContinueLearningItem";
import CourseRecommendationItem from "@/components/Student/CourseRecommendationItem";
import Header from "@/components/Student/Header";
import { DefaultAvatar } from "@/utils/constants.";

export default function StudentHomePage(){ 
    return (
        <> 
            <Header />
            <CategoryList />
            <div className="p-[20px]">
                <div className="flex content-center justify-between">
                    <img src={DefaultAvatar} className="w-[100px] h-[100px] rounded-[100%]" />
                    <div className="flex flex-col">
                        <h3 className="text-[#000000] font-bold text-2xl">Welcome back, <span className="text-[#5d5fef]">Emma! </span></h3>
                        <span className="text-[#000000] text-2xl">Set today's goals</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-sans font-bold text-[#5d5fef]">Continue learning</h3>
                    <ContinueLearningItem />
                </div>
                <div>
                    <h3 className="text-2xl font-sans font-bold text-[#5d5fef]">Recommend for you</h3>
                    <CourseRecommendationItem />
                </div>    
            </div>
        </>
    )
}