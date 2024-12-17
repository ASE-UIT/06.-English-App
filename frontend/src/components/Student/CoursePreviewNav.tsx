import { useState } from "react"
import { Button } from "../ui/button"
import { FaStar } from "react-icons/fa";


const NavContent = [
    {
        id: "Overview",
        title: "Overview",
    },
    {
        id: "Rating",
        title: "Rating",
    }
]
export default function CoursePreviewNav(){
    const [tabName, setTabName] = useState("Overview");
    return (
        <div>
        {
            NavContent.map((item) => {
                const className = 
                            `${tabName === item.title ? "font-bold underline text-[#5d5fef]" : "text-[#a5a6f6]"} 
                            bg-transparent hover:bg-transparent hover:border-transparent 
                             text-[20px]
                            font-sans gap-[20px] 
                            `;
                return <Button className={className} key={item.id} onClick={() => setTabName(item.title)} >{item.title}</Button>
            })
        }
        {
            tabName === "Overview" && (
                <div className="flex flex-col">
                    <h2 className="text-2xl font-sans text-[#5d5fef] p-[20px] px-0">Course Overview</h2>
                    <div className="flex gap-[40px] ">
                        <div>
                            <div className="flex gap-[10px]">
                                <span className="font-bold"> 4.0</span>
                                <span className="h-100 content-center"><FaStar color="#ffff00"/></span>
                            </div>
                            <span className="text-[#757575]">350 ratings</span>
                        </div>
                        <div>
                            <div className="flex gap-[10px]">
                                <span className="font-bold">1052</span>
                            </div>
                            <span className="text-[#757575]">students</span>
                        </div>
                        <div>
                            <div className="flex gap-[10px]">
                                <span className="font-bold"> 3hrs</span>
                            </div>
                            <span className="text-[#757575]">of video</span>
                        </div>
                    </div>
                    <div className="w-full bg-slate-500 h-[1px] mt-[20px]" /> 
                    <h2 className="text-2xl font-sans text-[black] p-[20px] px-0 font-bold">Description</h2>
                    <div className="w-full bg-slate-500 h-[1px] mt-[20px]" /> 
                    <div className="flex flex-col gap-[20px]">
                        <h2 className="text-2xl font-sans text-[black] p-[20px] px-0 font-bold">Instructor</h2>
                        <div className="flex gap-[20px]">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="instructor" className="w-[50px] h-[50px] rounded-full"/>
                            <span className="h-100 content-center font-bold text-[16px]">Nguyen Thuy Minh</span>
                        </div>
                    </div>
                </div>
            )
        }
        </div>
    )
}