const Answer = ({content} : {content: string}) => { 
    return (
        <div className="min-w-[240px] w-full bg-customPink rounded-lg border-[1px] py-[12px] px-[16px]">
            <p className="text-2xl text-black">{content}</p>
        </div>
    )
}
export default Answer