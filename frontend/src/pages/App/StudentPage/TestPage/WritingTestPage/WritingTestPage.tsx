import { Splitter, SplitterPanel } from "primereact/splitter"
import { IoSend } from "react-icons/io5"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io"

import writtingTest from "@/assets/image/writingTest.jpg"
const WritingTestPage = () => {
  return (
    <>
      <div className="flex h-screen flex-col overflow-hidden bg-white">
        <div className="h-[60px] flex-none bg-[#FFF4F9] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <button className="flex items-center bg-transparent py-[14px]">
            <IoIosArrowBack className="h-[30px] w-[30px] text-[#5D5FEF]" />
            <span className="text-[16px] font-bold text-[#5D5FEF]">Writing task 1</span>
          </button>
        </div>

        <Splitter
          style={{ height: "calc(100vh - 150px)", backgroundColor: "#a5a6f6" }}
          className="mt-[8px] border-b-2 border-[#a5a6f6]"
        >
          <SplitterPanel
            className="align-items-center justify-content-center flex overflow-y-auto bg-white"
            size={25}
            minSize={10}
          >
            <div className="mx-2 my-auto w-full overflow-y-auto">
              <span className="text-[24px] font-bold text-black">Writing task 1</span>
              <p className="text-[16px] text-black">
                You should spend about 20 minutes on this task. The graph below shows the production levels of the main
                kinds of fuel in the UK between 1981 and 2000. Summarize the formation by selecting and reporting the
                main features and make comparisons where relevant. You should write at least 150 words.
              </p>

              <img src={writtingTest} alt="writting test image" className="w-full object-cover" />
            </div>
          </SplitterPanel>
          <SplitterPanel className="align-items-center justify-content-center flex bg-white" size={75}>
            <div className="mx-6 my-auto w-full">
              <textarea
                placeholder="Type your essay here..."
                className="min-h-[400px] w-full rounded-md border-2 bg-white text-black"
                name=""
                id=""
              ></textarea>
              <div className="flex w-full items-center justify-between">
                <span className="text-[20px] text-black">Word Count:</span>
                <div className="flex justify-between">
                  <button className="mr-2 flex items-center rounded-full bg-transparent p-0">
                    <IoIosArrowDropleft className="h-[50px] w-[50px] text-fuschia" />
                  </button>

                  <button className="flex items-center rounded-full bg-transparent p-0">
                    <IoIosArrowDropright className="h-[50px] w-[50px] text-fuschia" />
                  </button>
                </div>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>

        <div className="flex h-[90px] items-center justify-center">
          <button className="flex h-[38px] w-[160px] items-center justify-center bg-fuschia py-[18px]">
            <span className="mr-4 text-[20px] font-bold text-white">Submit</span>
            <IoSend className="h-[25px] w-[25px] text-white" />
          </button>
        </div>
      </div>
    </>
  )
}
export default WritingTestPage
