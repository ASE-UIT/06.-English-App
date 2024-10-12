import LoginImage from '@/assets/LoginImage.jpg'
export default function LoginRegisterLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="max-w-screen-2xl h-full flex bg-gradient-to-b from-white via-pink-200 to-white mx-auto">
                <img src={LoginImage} alt="" className='w-login-image h-login-image mr-16'/>
                <div className="w-full max-w-6xl flex-1">{children}</div>
            </div>
        </>
    )
}