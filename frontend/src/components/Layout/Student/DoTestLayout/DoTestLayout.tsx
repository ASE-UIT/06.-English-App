import { Button } from '@/components/ui/button';
import BackIconButton from '../../../../assets/back_button_icon.svg';
const SectionData = { 
    title: "Reading task 1", 
}
export default function DoTestLayout({children} : {children : React.ReactNode}) { 
    return (
        <div className='flex flex-col'>
            <div className="h-[70px] bg-[#fff4f9] flex items-center gap-[10px] shadow-custom sticky top-0 ">
                <Button variant="ghost" className='bg-inherit hover:bg-inherit hover:outline-none focus:outline-none'>
                    <span className='ml-[14px]'><img src={BackIconButton}/></span>
                </Button>
                <span className='ml-[11px] text-2xl text-[#5D5FEF] font-normal'>{SectionData.title}</span>
            </div>
            <div className='bg-white'>
                {children}
            </div>
        </div>
    )
}