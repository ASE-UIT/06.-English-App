import { Link } from 'react-router-dom'
export const LoginPage = () => {
    return (
        <>
            <div className='w-register-table h-full flex flex-col justify-between'>
                <div className="flex flex-col">
                    <span className='text-title text-[#5d5fef] font-bold'>Welcome back</span>
                    <span className='text-default font-normal text-black'>Please enter your details</span>
                </div>

                <input type="text" name='username' placeholder='Username' className='rounded-lg text-default p-1 bg-white text-[#f17ab7]'/>
                <input type="password" name='password' placeholder='password' className='rounded-lg text-default p-1 bg-white text-[#f17ab7]'/>

                <div className="flex justify-between">
                    <div>
                        <input name='remember-me' type="checkbox" className='mr-1 bg-white h-5 w-5'/>
                        <label className='text-default font-normal text-black'>Remmember me</label>
                    </div>
                    <Link to='/forgot-password' className='text-default text-[#f17ab7] underline-offset-4'>Forgot password?</Link>
                </div>

                <button className="w-full rounded-lg bg-fuschia text-2xl font-normal text-white">
                    Log in
                </button>

                <div className="flex justify-between align-bottom flex-start">
                    <hr className="border-2 block text-[#767676] w-4/12 mt-6" />
                    <span className="text-default font-normal text-[#767676]">Or register with</span>
                    <hr className="border-2 block text-[#767676] w-4/12 mt-6" />
                </div>
            </div>
        </> 
    )
  }