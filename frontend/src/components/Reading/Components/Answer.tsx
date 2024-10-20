interface AnswerProps {
  content: string
  index: number
  [key: string]: unknown // để cho phép các prop bổ sung
}

const Answer = ({ content, index, ...props }: AnswerProps) => {
  return (
    <div className="w-full min-w-[240px] rounded-lg border-[1px] bg-customPink px-[16px] py-[12px]">
      <span>{index + 1}</span>
      <p {...props} className="max-w-[800px] text-2xl text-black">
        {content}
      </p>
    </div>
  )
}
export default Answer
