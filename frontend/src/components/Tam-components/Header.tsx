import { HiOutlineArrowNarrowLeft} from "react-icons/hi";
import { FiUpload } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoEyeOutline,IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useLocation } from "react-router";

// import { ButtonGroup } from "primitives"
// import { Button } from "primitives"
// import { IconCheckCircle } from "icons"
// import { IconEye } from "icons"

function Header() {
    const param = useLocation()
    return ( <>
        <header className = "w-screen h-52 bg-gradient-to-b from-[#fdebf4] to-[#FEFCFC]" >
            <div className="flex py-10 w-full h-full justify-between items-baseline">
                <div className="flex">
                    <button className="bg-transparent h-10 w-10 rounded-full p-0 mr-14 ml-16 border-0">
                        <HiOutlineArrowNarrowLeft  className="text-icon_color text-2xl h-8 w-8 font-medium"/>
                    </button>
                    <div className="flex justify-between flex-col">
                        <div className="flex items-center space-x-2">
                            <h1 className="font-normal text-black text-2xl">Create reading exercise</h1>
                            <span className="px-2 py-1 text-xs font-semibold text-white bg-gray-400 rounded-full">Draft</span>
                        </div>


                        <p className="text-xl text-black opacity-50">{param.pathname}</p>  
                            <span className="text-xl text-black">Create Reading Exercise</span>
                            <div className="flex">
                                <button className="flex items-center bg-transparent rounded-lg p-0 mr-3">
                                    <FiUpload className="text-2xl text-icon_color mr-1"/>
                                    <span className="text-xl text-black font-normal">Upload paragraph</span>
                                </button>
                                <button className="flex items-center bg-transparent rounded-lg p-0">
                                    <AiOutlineQuestionCircle className="text-2xl text-icon_color mr-1"/>
                                    <span className="text-xl text-black font-normal">Create questions</span>
                                </button>
                            </div>
                    </div>
                </div>

                <div className="flex mr-16 my-auto">
                    <button className="h-10 w-28 flex items-center bg-white rounded-lg p-0 mr-3 justify-center border">
                        <IoEyeOutline className="text-2xl text-icon_color mr-1"/>
                        <span className="text-xl text-black font-normal">Preview</span> 
                    </button>
                    <button className="h-10 w-28 flex items-center bg-white rounded-lg p-0 justify-center border">
                        <IoCheckmarkDoneCircleOutline className="text-2xl text-icon_color mr-1"/>
                        <span className="text-xl text-black font-normal">Publish</span> 
                    </button>
                </div>
            </div>
        </header>
    </> );
}

export default Header;