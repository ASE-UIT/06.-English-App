import Logo from "@/assets/Logo.svg"

type HeaderCourseProps = {
    title?: string
}
export function HeaderCourse({title}: HeaderCourseProps){
    return(
            <div className="flex content-center gap-5 min-w-[90px] bg-[#FFF4F9] p-[20px] shadow-[0_6px_10px_-3px_rgba(0,0,0,0.5)]">
                    <div className="flex justify-between content-center">
                    <img src={Logo} alt="logo" className="w-[36px] h-[36px] mt-[5px] rounded-[40px]" />
                    <h1 className="text-[#5D5FEF] font-bold font-sans  text-3xl">Engdigo</h1>
                </div>
                <span className="h-100 content-center text-[24px]">|</span>
                <h1 className="text-[#5D5FEF] font-sans text-3xl">{title}</h1>
            </div>
    )
}