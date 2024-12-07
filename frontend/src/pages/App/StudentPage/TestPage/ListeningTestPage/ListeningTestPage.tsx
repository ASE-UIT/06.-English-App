import { Button } from "@/components/ui/button"
import SubmitLogo from "@/assets/submit_icon.svg"
import { ReadingTestPage } from "../ReadingTestPage/ReadingTestPage"

export default function ListeningTestPage() {
  return (
    <div className="mb-[20px] ml-[75px] mr-[40px] mt-[45px] flex">
      <div className="flex flex-[7] flex-col">
        <span className="text-2xl font-bold text-[#5d5fef]">Play audio</span>
        <div className="flex gap-10">
          <div className="flex flex-[8] flex-col">
            <div className="flex flex-col">
              <div className="my-8 bg-transparent">
                <audio className="-z-10 w-full bg-[#fff5fa]" controls autoPlay muted loop>
                  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                </audio>
              </div>
              <div className="w-full rounded-md border-2 border-[#fcddec] p-[20px]">
                <div className="flex flex-[8] flex-col">
                  <ReadingTestPage questionGroups={[]}/>
                </div>
              </div>
            </div>
            <div className="mt-[50px] flex justify-center">
              <Button className="w-[120px] items-center bg-[#ef5da8] text-2xl text-white">
                <img className="bg-[#ef5da8]" src={SubmitLogo}></img> Submit
              </Button>
            </div>
          </div>
          <div className="h-[300px] flex-[2] rounded-lg bg-[#fcddec] p-[30px]">
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 10 }, (_, i) => (
                <Button
                  key={i}
                  className="border-1 h-[40px] w-[40px] rounded-full border-[#5d5fef] bg-inherit text-[#ef5da8] hover:bg-inherit hover:outline-none focus:outline-none"
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
