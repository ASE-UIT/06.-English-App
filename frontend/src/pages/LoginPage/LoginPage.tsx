import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
export const LoginPage = () => {
  return (
    <>
      <div className="flex h-[480px] w-[500px] flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-[40px] font-bold text-[#5d5fef]">Welcome back</span>
          <span className="text-[20px] font-normal text-black">Please enter your details</span>
        </div>

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="h-[40px] rounded-lg bg-white p-1 text-[20px] text-[#f17ab7]"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="h-[40px] rounded-lg bg-white p-1 text-[20px] text-[#f17ab7]"
        />

        <div className="flex justify-between">
          <div>
            <input name="remember-me" type="checkbox" className="mr-1 h-5 w-5 bg-white" />
            <label className="text-[20px] font-normal text-black">Remmember me</label>
          </div>
          <Link to="/forgot-password" className="text-[20px] text-[#f17ab7] underline-offset-4">
            Forgot password?
          </Link>
        </div>

        <div>
          <button className="mb-[16px] w-full rounded-lg bg-fuschia p-[6px] text-[20px] font-normal text-white">
            Log in
          </button>

          <button className="flex w-full items-center justify-center rounded-lg bg-white p-[6px] text-[20px] font-normal text-black">
            <FcGoogle className="mr-2 h-6 w-6" />
            Log in with Google
          </button>
        </div>
      </div>
    </>
  )
}
