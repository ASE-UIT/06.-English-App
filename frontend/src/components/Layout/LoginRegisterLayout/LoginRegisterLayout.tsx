import LoginImage from "@/assets/LoginImage.jpg"
export default function LoginRegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto flex h-full max-w-screen-2xl bg-gradient-to-b from-white via-pink-200 to-white">
        <img src={LoginImage} alt="" className="mr-16 h-login-image w-login-image" />
        <div className="w-full max-w-6xl flex-1">{children}</div>
      </div>
    </>
  )
}
