import Header from "@/components/Tam-components/Header"
import Logo from "../../../assets/header_image_teacher.svg"

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="h-[120px] bg-white flex items-center ml-[70px] gap-[30px]">
        <img  src={Logo}/>
        <span className="text-[40px] text-black font-bold">Emma</span>
      </div>
      <Header></Header>
      <div className="mb-4 max-w-screen-2xl flex-1">{children}</div>
    </div>
  )
}
