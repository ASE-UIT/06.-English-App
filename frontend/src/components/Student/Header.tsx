import Logo from "@/assets/logo_web.svg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DefaultAvatar } from "@/utils/constants.";
import { FaSearch } from "react-icons/fa";
import { RiNotification2Line } from "react-icons/ri";

export default function Header(){ 
    return (
        <header className="p-[20px] flex content-center justify-between border-b-[1px] border-[#A5A6F6]">
            <div className="flex content-center">
                <div className="flex justify-between content-center">
                    <img src={Logo} alt="logo" className="w-[36px] h-[36px] mt-[5px]" />
                    <h1 className="text-[#5D5FEF] font-bold font-sans  text-3xl">Engdigo</h1>
                </div>
                <Button className="bg-transparent hover:bg-transparent hover:border-transparent ">Categories</Button>
            </div>
                <div className="relative">
                    <Input placeholder="Search for courses" className="min-w-[700px] h-[40px] bg-transparent border-2 border-[#ef5da8] rounded-[20px] relative"/>
                    <Button className="bg-transparent hover:bg-transparent hover:border-transparent absolute top-0 right-0"><FaSearch/></Button>
                </div>
                <div className="flex content-center">
                    <Button className="bg-transparent hover:bg-transparent hover:border-transparent">
                        Instructor
                    </Button>
                    <Button className="bg-transparent hover:bg-transparent hover:border-transparent">
                        MyLearning
                    </Button>
                    <Button className="bg-transparent hover:bg-transparent hover:border-transparent">
                        <RiNotification2Line className="text-[20px] text-[#5D5FEF]"/>
                    </Button>
                    <Button className="bg-transparent hover:bg-transparent hover:border-transparent">
                        <img src={DefaultAvatar} alt="avatar" className="w-[36px] h-[36px] rounded-full"/>
                    </Button>
                </div>
            </header>
    )
}