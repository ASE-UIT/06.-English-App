import { Splitter, SplitterPanel } from 'primereact/splitter';
import { IoSend } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import writtingTest  from '@/assets/image/writingTest.jpg'
export const WritingTestPage = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className='bg-[#FFF4F9] h-[60px] flex-none shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                    <button className='flex items-center bg-transparent py-[14px]'>
                        <IoIosArrowBack className='text-[#5D5FEF] w-[30px] h-[30px]'/>
                        <span className='text-[16px] text-[#5D5FEF] font-bold'>Writing task 1</span>
                    </button>
                </div> 

                <Splitter style={{ height: '100%', backgroundColor: "#a5a6f6" }} className='border-b-2 border-[#a5a6f6] mt-[8px]'>
                    <SplitterPanel className="flex align-items-center justify-content-center bg-white" size={25} minSize={10}>
                        <div className='w-full my-auto mx-2'>
                            <span className='text-[24px] text-black font-bold'>Writing task 1</span>
                            <p className='text-[16px] text-black'>
                                You should spend about 20 minutes on this task.

                                The graph below shows the production levels of the main kinds of fuel in the UK between 1981 and 2000.

                                Summarize the formation by selecting and reporting the main features and make comparisons where relevant.

                                You should write at least 150 words.
                            </p>

                            <img src={writtingTest} alt="writting test image" className='w-full object-cover'/>
                        </div>

                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center bg-white" size={75}>
                        <div className='w-full my-auto mx-6'>
                            <textarea placeholder='Type your essay here...' className='min-h-[400px] w-full bg-white text-black border-2 rounded-md' name="" id=""></textarea>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-[20px] text-black'>Word Count:</span>
                                <div className='flex justify-between'>
                                <button className='flex items-center bg-transparent p-0 rounded-full mr-2'>
                                    <IoIosArrowDropleft className='text-fuschia w-[50px] h-[50px]'/>
                                </button>

                                <button className='flex items-center bg-transparent p-0 rounded-full'>
                                    <IoIosArrowDropright className='text-fuschia w-[50px] h-[50px]'/>
                                </button>
                                </div>
                            </div>
                        </div>

                    </SplitterPanel>
                </Splitter>

                <div className='h-[90px] flex justify-center items-center'>
                    <button className='h-[38px] w-[160px] flex items-center justify-center bg-fuschia py-[18px]'>
                        <span className='text-[20px] text-white font-bold mr-4'>Submit</span>
                        <IoSend className='text-white w-[25px] h-[25px]'/>
                    </button>
                </div>

            </div>
        </>
    )
}