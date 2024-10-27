import LoginImage from "@/assets/image/LoginImage.jpg"
export default function LoginRegisterLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-screen h-screen bg-gradient-to-b from-white via-pink-200 to-white flex justify-center items-center">
                <img src={LoginImage} alt="" className='w-[500px] h-[570px] mr-16'/>
                <>{children}</>
            </div>
        </>
    )
}
