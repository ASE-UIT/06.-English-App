import { MdOutlinePlayLesson } from "react-icons/md";
import { TbTextGrammar } from "react-icons/tb";
import { Button } from "../ui/button";
import { FcReading } from "react-icons/fc";
import { TiMicrophoneOutline } from "react-icons/ti";
import { TfiWrite } from "react-icons/tfi";
import { FiHeadphones } from "react-icons/fi";






const sectionIcon: { [key in SectionType]: JSX.Element } = {
    READING: <FcReading />,
    LISTENING: <FiHeadphones />,
    SPEAKING: <TiMicrophoneOutline />,
    WRITING: <TfiWrite />,
}

type SectionType = "READING" | "LISTENING" | "SPEAKING" | "WRITING";

const sections: { id: number; sectionName: string; sectionType: SectionType }[] = [
    {
        id: 1,
        sectionName: "Introduction",
        sectionType: "READING",
    },
    {
        id: 2,
        sectionName: "Introduction",
        sectionType: "LISTENING",
    },
    {
        id: 3,
        sectionName: "Introduction",
        sectionType: "SPEAKING",
    },
    {
        id: 4,
        sectionName: "Introduction",
        sectionType: "WRITING",
    },
]

export default function LessonList() {
    return (
        <div className="flex flex-col mt-[20px]">
            <p className="text-[20px] font-sans mb-2 font-bold">Lesson 1: Introduction</p>
            <div className="flex gap-2">
                <Button className="rounded-[20px] bg-[#e4e5fd] ">
                    <span>
                        <MdOutlinePlayLesson />
                    </span>
                    <span>
                        Lesson's vocabulary
                    </span>
                </Button>
                <Button className="rounded-[20px] bg-[#e4e5fd] ">
                    <span>
                        <TbTextGrammar />
                    </span>
                    <span>
                        Lesson's grammar
                    </span>
                </Button>
            </div>
            <div>
                {sections.map((section) => (
                    <div key={section.id} className="flex gap-[20px]">
                        <span className="h-100 content-center">
                            {sectionIcon[section.sectionType]}
                        </span>
                        <div>
                            <p className="text-[24px] font-sans">{section.sectionName}</p>
                            <p className="text-[16px] font-sans text-[#a49e9e]">{section.sectionType}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}