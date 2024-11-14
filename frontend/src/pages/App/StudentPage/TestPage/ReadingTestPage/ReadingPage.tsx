import SubmitLogo from "@/assets/submit_icon.svg"
import { Button } from "@/components/ui/button"
import RightNav from "@/assets/right_nav_button.svg"
import LeftNav from "@/assets/left_nav_button.svg"
import { ReadingTestPage } from "@/pages/App/StudentPage/TestPage/ReadingTestPage/ReadingTestPage"

const testData = {
  title: "Australian artist Margaret Preston",
  image:
    "https://www.artgallery.nsw.gov.au/media/uploads/artists/MP_in_her_Adelaide_studio_c1909_photograph_from_the_State_Library_of_SA.jpg",
  content:
    "Margaret Preston's vibrant paintings and prints of Australian flowers, animals and landscapes have delighted the Australian public since the early 1920s. Margaret Preston was born Margaret Rose McPherson in Port Adelaide, South Australia in 1875, the daughter of David McPherson, a Scottish marine engineer and his wife Prudence Lyle. She and her sister were sent at first to a private school, but when family circumstances changed, her mother took the girls to Sydney where Margaret attended a public high school. She decided early in life to become an artist and took private art lessons. In 1888, she trained for several months with Sydney landscape painter William Lister, and in 1893 enrolled at the National Gallery of Victoria Art School, where she studied for just over four years. In 1898, after her father died, Margaret returned to Adelaide to study and then teach at the Adelaide School of Design. Her early artwork was influenced by the German aesthetic tradition, in which subjects of the natural world were depicted in a true to life manner. Margaret Preston's vibrant paintings and prints of Australian flowers, animals and landscapes have delighted the Australian public since the early 1920s. Margaret Preston was born Margaret Rose McPherson in Port Adelaide, South Australia in 1875, the daughter of David McPherson, a Scottish marine engineer and his wife Prudence Lyle. She and her sister were sent at first to a private school, but when family circumstances changed, her mother took the girls to Sydney where Margaret attended a public high school. She decided early in life to become an artist and took private art lessons. In 1888, she trained for several months with Sydney landscape painter William Lister, and in 1893 enrolled at the National Gallery of Victoria Art School, where she studied for just over four years. In 1898, after her father died, Margaret returned to Adelaide to study and then teach at the Adelaide School of Design. Her early artwork was influenced by the German aesthetic tradition, in which subjects of the natural world were depicted in a true to life manner. Margaret Preston's vibrant paintings and prints of Australian flowers, animals and landscapes have delighted the Australian public since the early 1920s. Margaret Preston was born Margaret Rose McPherson in Port Adelaide, South Australia in 1875, the daughter of David McPherson, a Scottish marine engineer and his wife Prudence Lyle. She and her sister were sent at first to a private school, but when family circumstances changed, her mother took the girls to Sydney where Margaret attended a public high school. She decided early in life to become an artist and took private art lessons. In 1888, she trained for several months with Sydney landscape painter William Lister, and in 1893 enrolled at the National Gallery of Victoria Art School, where she studied for just over four years. In 1898, after her father died, Margaret returned to Adelaide to study and then teach at the Adelaide School of Design. Her early artwork was influenced by the German aesthetic tradition, in which subjects of the natural world were depicted in a true to life manner. Margaret Preston's vibrant paintings and prints of Australian flowers, animals and landscapes have delighted the Australian public since the early 1920s. Margaret Preston was born Margaret Rose McPherson in Port Adelaide, South Australia in 1875, the daughter of David McPherson, a Scottish marine engineer and his wife Prudence Lyle. She and her sister were sent at first to a private school, but when family circumstances changed, her mother took the girls to Sydney where Margaret attended a public high school. She decided early in life to become an artist and took private art lessons. In 1888, she trained for several months with Sydney landscape painter William Lister, and in 1893 enrolled at the National Gallery of Victoria Art School, where she studied for just over four years. In 1898, after her father died, Margaret returned to Adelaide to study and then teach at the Adelaide School of Design. Her early artwork was influenced by the German aesthetic tradition, in which subjects of the natural world were depicted in a true to life manner. Margaret Preston's vibrant paintings and prints of Australian flowers, animals and landscapes have delighted the Australian public since the early 1920s. Margaret Preston was born Margaret Rose McPherson in Port Adelaide, South Australia in 1875, the daughter of David McPherson, a Scottish marine engineer and his wife Prudence Lyle. She and her sister were sent at first to a private school, but when family circumstances changed, her mother took the girls to Sydney where Margaret attended a public high school. She decided early in life to become an artist and took private art lessons. In 1888, she trained for several months with Sydney landscape painter William Lister, and in 1893 enrolled at the National Gallery of Victoria Art School, where she studied for just over four years. In 1898, after her father died, Margaret returned to Adelaide to study and then teach at the Adelaide School of Design. Her early artwork was influenced by the German aesthetic tradition, in which subjects of the natural world were depicted in a true to life manner. Margaret Preston's vibrant paintings and prints of Australian flowers, animals and landscapes have delighted the Australian public since the early 1920s. Margaret Preston was born Margaret Rose McPherson in Port Adelaide, South Australia in 1875, the daughter of David McPherson, a Scottish marine engineer and his wife Prudence Lyle. She and her sister were sent at first to a private school, but when family circumstances changed, her mother took the girls to Sydney where Margaret attended a public high school. She decided early in life to become an artist and took private art lessons. In 1888, she trained for several months with Sydney landscape painter William Lister, and in 1893 enrolled at the National Gallery of Victoria Art School, where she studied for just over four years. In 1898, after her father died, Margaret returned to Adelaide to study and then teach at the Adelaide School of Design. Her early artwork was influenced by the German aesthetic tradition, in which subjects of the natural world were depicted in a true to life manner.",
  numberOfQuestions: 16,
}
export default function ReadingPage() {
  return (
    <div className="mx-[16px] mb-[32px] mt-[32px] flex gap-[10px]">
      <div className="flex max-h-[1100px] flex-1 flex-col items-center overflow-scroll overflow-x-hidden rounded-md border-2 border-[#a5a6f6] px-[5px] text-black scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-400">
        <h2 className="mb-[25px] mt-[25px] text-2xl font-bold">{testData.title}</h2>
        <img className="object-fill" src={testData.image} />
        <p className="mt-[25px] text-xl">{testData.content}</p>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="w-full rounded-md border-2 border-b-0 border-[#fcddec] p-[20px]">
          <ReadingTestPage />
        </div>
        <div className="flex h-[60px] justify-between bg-[#fff4f9]">
          <Button className="h-full bg-inherit hover:bg-inherit hover:outline-none focus:outline-none">
            <img src={LeftNav} />
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: testData.numberOfQuestions }, (_, i) => (
              <Button className="border-1 h-[40px] w-[40px] rounded-full border-[#5d5fef] bg-inherit text-[#ef5da8] hover:bg-inherit hover:outline-none focus:outline-none">
                {i + 1}
              </Button>
            ))}
          </div>
          <Button className="h-full bg-inherit hover:bg-inherit hover:outline-none focus:outline-none">
            <img src={RightNav} />
          </Button>
        </div>
        <div className="mt-[50px] flex justify-center">
          <Button className="w-[120px] items-center bg-[#ef5da8] text-2xl text-white">
            <img className="bg-[#ef5da8]" src={SubmitLogo}></img> Submit
          </Button>
        </div>
      </div>
    </div>
  )
}
