import { MatchingQuestion } from "@/components/Layout/Components/shared/MatchingQuestion"
import { MultipleChoiceQuestion } from "@/components/Layout/Components/shared/MultipleChoiceQuestion"
import { ComboBoxQuestion } from "@/components/Layout/Components/shared/TFNQuestion"
import _ from "lodash"
import { RadioGroupQuestion } from "@/components/Layout/Components/shared/RadioGroupQuestion"

interface ReadingTestPageProps {
  questionGroups: []
}


export const ReadingTestPage: React.FC<ReadingTestPageProps> = ({ questionGroups }) => {
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto bg-white">
      {questionGroups.map((group, index) => (
        <div key={index} className="my-6">
          <div className="mt-4">
            {/* Group Description */}
            <div
              className="mb-4 text-lg text-gray-800"
              dangerouslySetInnerHTML={{ __html: group.text }}
            />
            {/* Questions */}
            {group.questions.map((question, qIndex) => (
              <div key={qIndex} className="mb-4">
                {question.type === "BLANK" && <MatchingQuestion text={} order={} />}
                {question.type === "MULTIPLECHOICE" && <MultipleChoiceQuestion text={} order={} />}
                {question.type === "COMBOBOX" && <ComboBoxQuestion text={} order={} />}
              </div>
            ))}
          </div>
        </div>
      ))}
      <hr className="mx-3 my-[30px] border-t-2 bg-[#FCDDEC]" />
      <div className="my-[50px] text-center text-2xl text-[#5d5fef]">--End of the Test--</div>
    </div>
  )
}
