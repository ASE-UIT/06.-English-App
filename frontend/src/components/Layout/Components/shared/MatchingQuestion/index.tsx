import { Input } from "@/components/ui/input"

interface MatchingQuestionProps {
  order: number
  text: string
}

export const MatchingQuestion = () => {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input className="h-[30px] w-[100px] rounded-md border-2 border-comboboxBorder bg-white text-black" />
      <span className="text-left text-2xl text-black">
        11. One limitation in the information produced by all of this research is that it
      </span>
    </div>
  )
}
