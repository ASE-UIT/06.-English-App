const Answer = ({ content }: { content: string }) => {
  return (
    <div className="w-full min-w-[240px] rounded-lg border-[1px] bg-customPink px-[16px] py-[12px]">
      <p className="text-2xl text-black">{content}</p>
    </div>
  )
}
export default Answer
