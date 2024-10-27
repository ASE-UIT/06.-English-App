import { ReadingQuestion } from "@/pages/main-layout/readingQuestion";
import { Button } from "@/components/ui/button";
import SubmitLogo from "@/assets/submit_icon.svg";

export default function DoTestListening() { 
    return (
        <div className="flex mt-[45px] ml-[75px] mr-[40px] mb-[20px]">
            <div className="flex-[7] flex flex-col">
                <span className="text-2xl font-bold text-[#5d5fef]">Play audio</span>
                <div className="flex gap-10">
                    <div className="flex flex-col flex-[8]">
                        <div className="flex flex-col">
                            <div className="my-8 bg-transparent">
                                <audio className="w-full bg-[#fff5fa] -z-10" controls autoPlay muted loop>
                                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                                </audio>
                            </div>
                            <div className="border-[#fcddec] border-2 rounded-md w-full p-[20px]">
                                <div className="flex flex-col flex-[8]">
                                    <ReadingQuestion/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-[50px]">
                            <Button className="bg-[#ef5da8] items-center text-white text-2xl w-[120px]" >
                                <img className="bg-[#ef5da8]" src={SubmitLogo}></img> Submit
                            </Button>
                        </div>
                    </div>
                    <div className="flex-[2] bg-[#fcddec] h-[300px] rounded-lg p-[30px]">
                        <div className="grid grid-cols-7 gap-2">
                        {
                            Array.from({ length: 10 }, (_, i) => (
                                <Button key={i} className="h-[40px] w-[40px] bg-inherit text-[#ef5da8] hover:bg-inherit hover:outline-none focus:outline-none rounded-full border-1 border-[#5d5fef]">{i + 1}</Button>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}