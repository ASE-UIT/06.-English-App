import { useState } from "react";
import MyCourseItem from "./MyCourseItem";

const TabName = [
    {
        id: "AllCourses",
        title: "All Courses",
    },
    {
        id: "InProgress",
        title: "In progress",
    },
    {
        id: "Finished",
        title: "Finished",
    },
    {
        id: "Favorite",
        title: "Favorite",
    }
]
export default function StudentMyCourseNav(){ 
    const [tabName, setTabName] = useState("All Courses");
    return  (
        <div>
            <div className="flex gap-[20px] justify-center">
                {TabName.map((item) => { 
                    const className = 
                        `${tabName === item.title ? "font-bold underline text-[#5d5fef]" : "text-[#a5a6f6]"} 
                        bg-transparent hover:bg-transparent hover:border-transparent 
                        text-[20px]
                        font-sans gap-[20px] 
                        `;
                    return <button className={className} key={item.id} onClick={() => setTabName(item.title)} >{item.title}</button>
                })}
            </div>
            <div className="flex flex-wrap gap-[100px] justify-start px-[20px] py-[20px]">
                <MyCourseItem />
                <MyCourseItem />
            </div>
        </div>
    )
}