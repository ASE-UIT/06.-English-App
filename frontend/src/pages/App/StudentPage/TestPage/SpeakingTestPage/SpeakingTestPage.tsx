import "regenerator-runtime/runtime"
import { useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { LuClock } from "react-icons/lu"
import { IoSend } from "react-icons/io5"
import { FaMicrophone } from "react-icons/fa"
import { FaMicrophoneSlash } from "react-icons/fa"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"

const SpeakingTestPage = () => {
  const { transcript } = useSpeechRecognition()
  const totalMinutes: number = 15
  const [minutes, setMinutes] = useState(totalMinutes)
  const [isRecording, setIsRecording] = useState(false)
  const [seconds, setSeconds] = useState(59)

  const startRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      SpeechRecognition.startListening()
    } else {
      SpeechRecognition.stopListening()
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else {
        setSeconds(seconds - 1)
      }
      if (minutes === 0 && seconds === 0) {
        clearInterval(interval)
        // console.log('Đã hết giờ!');
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [minutes, seconds])
  console.log(transcript)
  return (
    <>
      <div className="flex h-screen flex-col bg-white">
        <div className="h-[60px] flex-none bg-[#FFF4F9] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <button className="flex items-center bg-transparent py-[14px]">
            <IoIosArrowBack className="h-[30px] w-[30px] text-[#5D5FEF]" />
            <span className="text-[16px] font-bold text-[#5D5FEF]">Speaking task 1</span>
          </button>
        </div>

        <div className="flex h-full w-full items-center justify-around">
          <div className="mx-auto flex h-[90%] w-[95%] flex-col rounded-lg border-2 border-[#a5a6f6]">
            <div className="flex h-[60px] w-full items-center justify-between bg-[#e4e4e4]">
              <div></div>
              <span className="mr-[-40] items-center text-[32px] font-medium text-black">PART 1 TOPIC</span>
              <button className="mr-10 flex h-[30px] w-[110px] items-center justify-center bg-fuschia py-[5px]">
                <span className="mr-3 text-[20px] font-normal text-white">Next</span>
                <IoSend className="h-[20px] w-[20px] text-white" />
              </button>
            </div>

            <div className="flex flex-grow flex-col justify-around bg-[#fafafa]">
              <div className="flex items-center justify-center">
                <LuClock className="ml-[2px] h-[30px] w-[30px] text-[#5D5FEF]" />
                <span className="text-[24px] font-semibold text-[#5D5FEF]">{minutes}:</span>
                <span className="text-[24px] font-semibold text-[#5D5FEF]">{seconds}</span>
              </div>

              <span className="mx-auto text-[28px] font-semibold text-fuschia">QUESTION</span>

              <p className="mx-auto text-[24px] font-semibold text-black">
                Describe a person you like to work or study with
              </p>

              <div className="ml-[200px]">
                <p className="text-[20px] font-medium text-black">You should say:</p>
                <p className="ml-5 text-[20px] font-medium text-black">Who this person is</p>
                <p className="ml-5 text-[20px] font-medium text-black">How you met</p>
                <p className="ml-5 text-[20px] font-medium text-black">
                  Why you want to work or study with this person
                </p>
              </div>

              <div className="mx-auto flex items-center justify-between">
                <hr className="w-[250px] border border-fuschia" />
                <button
                  className="mx-2 flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_-1px_4px_rgba(0,0,0,0.25)] outline-none focus:outline-none"
                  onClick={() => {
                    startRecording()
                  }}
                >
                  {isRecording ? (
                    <FaMicrophoneSlash className="h-[30px] w-[40px] rounded-full text-red-500" />
                  ) : (
                    <FaMicrophone className="h-[30px] w-[30px] rounded-full text-fuschia" />
                  )}
                </button>
                <hr className="w-[250px] border border-fuschia" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SpeakingTestPage
