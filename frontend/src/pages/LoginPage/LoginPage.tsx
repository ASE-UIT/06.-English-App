import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'
export const LoginPage = () => {
    return (
        <>
            <div className='w-[500px] h-[480px] flex flex-col justify-between'>
                <div className="flex flex-col">
                    <span className='text-[40px] text-[#5d5fef] font-bold'>Welcome back</span>
                    <span className='text-[20px] font-normal text-black'>Please enter your details</span>
                </div>

                <input type="text" name='username' placeholder='Username' className='h-[40px] rounded-lg text-[20px] p-1 bg-white text-[#f17ab7]'/>
                <input type="password" name='password' placeholder='password' className='h-[40px] rounded-lg text-[20px] p-1 bg-white text-[#f17ab7]'/>

                <div className="flex justify-between">
                    <div>
                        <input name='remember-me' type="checkbox" className='mr-1 bg-white h-5 w-5'/>
                        <label className='text-[20px] font-normal text-black'>Remmember me</label>
                    </div>
                    <Link to='/forgot-password' className='text-[20px] text-[#f17ab7] underline-offset-4'>Forgot password?</Link>
                </div>

                <div>
                    <button className="w-full rounded-lg bg-fuschia text-[20px] font-normal text-white p-[6px] mb-[16px]">
                        Log in
                    </button>

                    <button className="w-full rounded-lg bg-white text-[20px] font-normal text-black p-[6px] flex justify-center items-center">
                        <FcGoogle className='w-6 h-6 mr-2'/>
                        Log in with Google
                    </button>
                </div>
            </div>
        </> 
    )
  }