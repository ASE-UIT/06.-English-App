interface AnswerProps {
  content: string
  index: number
  [key: string]: unknown // để cho phép các prop bổ sung
}
function numberToLetters(num: number) {
  let letters = '';
  
  while (num > 0) {
      const remainder = (num - 1) % 26;
      letters = String.fromCharCode(65 + remainder) + letters;
      num = Math.floor((num - 1) / 26);
  }
  return letters;
}
const Answer = ({ content, index, ...props }: AnswerProps) => {
  return (
    <div className="flex w-full min-w-[240px] max-w-[740px] rounded-lg border-[1px] bg-customPink px-[16px] py-[12px] text-2xl text-black gap-2">
      <span>{index + 1}.</span>
      <p {...props} className="max-w-[800px]">
      {`${numberToLetters(index + 1)} ${content}`}
      </p>
    </div>
  )
}
export default Answer
