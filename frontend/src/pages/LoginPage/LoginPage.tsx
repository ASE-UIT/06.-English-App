import LoginImage from '@/assets/LoginImage.jpg'
import { Link } from 'react-router-dom'
export const LoginPage = () => {
    return (
        <>
            <div className="w-screen h-screen flex bg-gradient-to-b from-white via-pink-200 to-white mx-auto">
                <img src={LoginImage} alt="" className='w-login-image h-login-image mr-16'/>
                <div className='w-register-table h-register-table flex flex-col justify-between'>
                    <span className='text-title text-[#5d5fef] font-bold'>Create an account</span>

                    <div>
                        <span className='text-default font-normal text-black'>Already have an acount? </span>
                        <Link to='/Login' className='text-default text-[#f17ab7] underline-offset-4'>Login</Link>
                    </div>

                    <input type="text" name='username' placeholder='Username' className='rounded-lg text-default p-1 bg-white text-[#f17ab7]'/>

                    <div className='flex justify-between w-full'>
                        <input type="password" name='password' placeholder='Password' className='w-72 rounded-lg text-default p-1 bg-white text-[#f17ab7]'/>
                        <input type="password" name='retype-password' placeholder='Retype Password' className='w-72 rounded-lg text-default p-1 bg-white text-[#f17ab7]'/>
                    </div>

                    <input type="tel" name='phone' placeholder='Phone number' className='rounded-lg text-default p-1 bg-white text-[#f17ab7]'/>

                    <div>
                        <input type="checkbox" className='mr-1 bg-white'/>
                        <span className='text-default font-normal text-black'>I agree to the </span>
                        <Link to='/Login' className='text-default text-[#f17ab7] underline-offset-4'>Terms and Conditions</Link>
                    </div>

                    <div className="flex justify-between align-bottom flex-start">
                        <hr className="border-2 block text-[#767676] w-4/12 mt-6" />
                        <span className="text-default font-normal text-[#767676]">Or register with</span>
                        <hr className="border-2 block text-[#767676] w-4/12 mt-6" />
                    </div>
                </div>
            </div>
        </> 
    )
  }