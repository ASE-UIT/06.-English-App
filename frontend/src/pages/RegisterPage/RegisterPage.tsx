import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom'
export const RegisterPage = () => {
  return (
    <>
        <div className='w-[500px] h-[550px] flex flex-col justify-between'>
            <div>
                <span className='text-[40px] text-[#5d5fef] font-bold mb-[20px]'>Create an account</span>
                <div>
                    <span className='text-[20px] font-normal text-black'>Already have an acount? </span>
                    <Link to='/Login' className='text-[20px] text-[#f17ab7] underline-offset-4'>Login</Link>
                </div>

            </div>

            <input type="text" name='username' placeholder='Username' className='h-[40px] rounded-lg text-[20px] p-1 bg-white text-[#f17ab7]'/>

            <div className='flex justify-between w-full'>
                <input type="password" name='password' placeholder='Password' className='h-[40px] w-[48%] rounded-lg text-[20px] p-1 bg-white text-[#f17ab7]'/>
                <input type="password" name='retype-password' placeholder='Retype Password' className='h-[40px] w-[48%] rounded-lg text-[20px] p-1 bg-white text-[#f17ab7]'/>
            </div>

            <input type="tel" name='phone' placeholder='Phone number' className='h-[40px] rounded-lg text-[20px] p-1 bg-white text-[#f17ab7]'/>

            <div>
                <input type="checkbox" className='h-[18px] w-[18px] mr-1 bg-white'/>
                <label className='text-[20px] font-normal text-black'>I agree to the </label>
                <Link to='/Login' className='text-[20px] text-[#f17ab7] underline-offset-4'>Terms and Conditions</Link>
            </div>

            <button className="w-full rounded-lg bg-fuschia text-[20px] font-normal text-white p-[6px]">
                Create account
            </button>

            <div className="flex justify-between align-bottom flex-start">
                <hr className="border-2 block text-[#767676] w-[35%] mt-5" />
                <span className="text-[20px] font-normal text-[#767676]">Or register with</span>
                <hr className="border-2 block text-[#767676] w-[35%] mt-5" />
            </div>

            <div className="flex justify-between w-[70%] mx-auto">
                <button className="w-[150px] rounded-lg bg-white text-[20px] font-normal text-black p-[6px] flex justify-center items-center">
                    <FaFacebook fill="#1877f2" className='w-6 h-6 mr-2'/>
                    Facebook
                </button>
                <button className="w-[150px] rounded-lg bg-white text-[20px] font-normal text-black p-[6px] flex justify-center items-center">
                    <FcGoogle className='w-6 h-6 mr-2'/>
                    Google
                </button>

            </div>
        </div>
    </>
  )
}
