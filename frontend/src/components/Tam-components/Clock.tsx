import { useEffect, useState } from "react";
import { LuClock } from "react-icons/lu";
interface ClockProps {
    totalMinutes: number;
}
const Clock: React.FC<ClockProps> = ({ totalMinutes }: ClockProps) => {
    const [minutes, setMinutes] = useState(totalMinutes);
    const [seconds, setSeconds] = useState(59);

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
    return ( 
        <>
            <div className="flex justify-center items-center">
                <LuClock className="w-[30px] h-[30px] text-[#5D5FEF] ml-[2px]"/>
                <span className="text-[24px] font-semibold text-[#5D5FEF]">{minutes}:</span>
                <span className="text-[24px] font-semibold text-[#5D5FEF]">{seconds}</span>
            </div>
        </>
     );
}

export default Clock;