import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { LuClock } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const SpeakingTestPage = () => {
    // const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const totalMinutes: number = 15;
    const [minutes, setMinutes] = useState(totalMinutes);
    const [isRecording, setIsRecording] = useState(false);
    const [seconds, setSeconds] = useState(59);

    const startRecording = () => {
        setIsRecording(!isRecording);
        // if (isRecording == true) {
        //     listening ? SpeechRecognition.startListening() :
        //     SpeechRecognition.startListening();
        // } else {
        //     listening ? SpeechRecognition.stopListening() :
        //     SpeechRecognition.stopListening();
        // }
    }
    useEffect(() => {
        const interval = setInterval(() => {
        if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
        } else {
            setSeconds(seconds - 1);
        }
        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);   
            // console.log('Đã hết giờ!');
        }
        }, 1000);
        return () => clearInterval(interval);
    }, [minutes, seconds]);
    // console.log(transcript);
    return (
        <>
        <div className="h-screen flex flex-col h-screen bg-white">
            <div className='bg-[#FFF4F9] h-[60px] flex-none shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                <button className='flex items-center bg-transparent py-[14px]'>
                    <IoIosArrowBack className='text-[#5D5FEF] w-[30px] h-[30px]'/>
                    <span className='text-[16px] text-[#5D5FEF] font-bold'>Speaking task 1</span>
                </button>
            </div>

            <div className="h-full w-full flex items-center justify-around">
                <div className="h-[90%] w-[95%] border-2 border-[#a5a6f6] mx-auto rounded-lg flex flex-col">
                    <div className="h-[60px] bg-[#e4e4e4] w-full flex justify-between items-center">
                        <div></div>
                        <span className="text-[32px] font-medium text-black items-center mr-[-40]">PART 1 TOPIC</span>
                        <button className='h-[30px] w-[110px] flex items-center justify-center bg-fuschia py-[5px] mr-10 '>
                            <span className='text-[20px] text-white font-normal mr-3'>Next</span>
                            <IoSend className='text-white w-[20px] h-[20px]'/>
                        </button>
                    </div>

                    <div className="flex-grow bg-[#fafafa] flex flex-col justify-around">
                        <div className="flex justify-center items-center">
                            <LuClock className="w-[30px] h-[30px] text-[#5D5FEF] ml-[2px]"/>
                            <span className="text-[24px] font-semibold text-[#5D5FEF]">{minutes}:</span>
                            <span className="text-[24px] font-semibold text-[#5D5FEF]">{seconds}</span>
                        </div>

                        <span className="text-[28px] font-semibold text-fuschia mx-auto">QUESTION</span>
                        
                        <p className="text-[24px] font-semibold text-black mx-auto">Describe a person you like to work or study with</p>
                       
                        <div className="ml-[200px]">
                            <p className="text-[20px] font-medium text-black">You should say:</p>
                            <p className="text-[20px] font-medium text-black ml-5">Who this person is </p>
                            <p className="text-[20px] font-medium text-black ml-5">How you met</p>
                            <p className="text-[20px] font-medium text-black ml-5">Why you want to work or study with this person</p>
                        </div>

                        <div className="flex items-center justify-between mx-auto">
                            <hr className="w-[250px] border-fuschia border"/>
                            <button className="h-[70px] w-[70px] bg-white rounded-full flex justify-center items-center mx-2 shadow-[0_-1px_4px_rgba(0,0,0,0.25)] outline-none focus:outline-none overflow-hidden" 
                                onClick={() => {
                                    startRecording();
                                }}>
                                {
                                    isRecording ? <FaMicrophoneSlash className="h-[30px] w-[40px] rounded-full  text-red-500"/>
                                    : <FaMicrophone className="h-[30px] w-[30px] rounded-full text-fuschia"/>
                                }
                            </button>
                            <hr className="w-[250px] border-fuschia border"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}