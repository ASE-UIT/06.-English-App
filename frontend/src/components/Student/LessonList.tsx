import { MdOutlinePlayLesson } from "react-icons/md";
import { TbTextGrammar } from "react-icons/tb";
import { Button } from "../ui/button";
import { FcReading } from "react-icons/fc";
import { TiMicrophoneOutline } from "react-icons/ti";
import { TfiWrite } from "react-icons/tfi";
import { FiHeadphones } from "react-icons/fi";
import { SiRootssage } from "react-icons/si";






const sectionIcon: { [key in SectionType]: JSX.Element } = {
    READING: <FcReading />,
    LISTENING: <FiHeadphones />,
    SPEAKING: <TiMicrophoneOutline />,
    WRITING: <TfiWrite />,
    ROOT: <SiRootssage />
}

type SectionType = "READING" | "LISTENING" | "SPEAKING" | "WRITING" | "ROOT";

type LessonListProps = {
    lessons: any[];
}

export default function LessonList({ lessons }: LessonListProps) {
    return (
        <>
            {lessons && lessons.length > 0 && lessons.map((lesson) => (
            <div key={lesson.id} className="flex flex-col mt-[20px]">
                <p className="text-[20px] font-sans mb-2 font-bold">{lesson.name}</p>
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
                    {lesson.sections.map((section) => (
                        <div key={section.id} className="flex gap-[20px]">
                            <span className="h-100 content-center">
                                {sectionIcon[section.type]}
                            </span>
                            <div>
                                <p className="text-[24px] font-sans">{section.title}</p>
                                <p className="text-[16px] font-sans text-[#a49e9e]">{section.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            ))}
        </> 
    )
}