import { Link } from "react-router-dom"
export const LoginPage = () => {
  return (
    <>
      <div className="flex h-full w-register-table flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-title font-bold text-[#5d5fef]">Welcome back</span>
          <span className="text-default font-normal text-black">Please enter your details</span>
        </div>

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="rounded-lg bg-white p-1 text-default text-[#f17ab7]"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="rounded-lg bg-white p-1 text-default text-[#f17ab7]"
        />

        <div className="flex justify-between">
          <div>
            <input name="remember-me" type="checkbox" className="mr-1 h-5 w-5 bg-white" />
            <label className="text-default font-normal text-black">Remmember me</label>
          </div>
          <Link to="/forgot-password" className="text-default text-[#f17ab7] underline-offset-4">
            Forgot password?
          </Link>
        </div>

        <button className="w-full rounded-lg bg-fuschia text-2xl font-normal text-white">Log in</button>

        <div className="flex-start flex justify-between align-bottom">
          <hr className="mt-6 block w-4/12 border-2 text-[#767676]" />
          <span className="text-default font-normal text-[#767676]">Or register with</span>
          <hr className="mt-6 block w-4/12 border-2 text-[#767676]" />
        </div>
      </div>
    </>
  )
}
