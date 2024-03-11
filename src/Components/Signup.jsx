import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
const Signup = () => {
  return (
    <div className='h-[90vh] md:py-2 bg-slate-200  '>
      <div className='h-full md:w-[60%] m-auto'>
      <div>

      </div>
      <div className='h-full px-5 py-3  '>
        <form action="" className='h-[50%] gap-4 bg-white rounded-lg  px-3 py-2  w-full   shadow-md shadow-gray-400 flex flex-col items-center'>
        <h4 className='font-semibold self-start '>Log in for the best Experience</h4>
        <h4 className='text-gray-500 self-start '>Enter Email-id and Password to continue</h4>
        
          <label htmlFor="" className=' flex items-center gap-3 justify-start border-2 border-blue-400 focus:border-blue-500 focus:border-3 focus:border-solid border-solid w-[90%] rounded-md py-2 px-3 '>
            <MdEmail/>
            <input type="text" className='bg-transparent outline-none w-full border-none ' placeholder='Enter Email-id' />
          </label>
          <label htmlFor="" className='flex items-center gap-3 border-2 border-blue-400 focus:border-blue-500 focus:border-3 focus:border-solid border-solid w-[90%] rounded-md py-2 px-3 '>
            <RiLockPasswordFill/>
            <input type="text" className='bg-transparent outline-none border-none w-full ' placeholder='Enter Password' />
            
          </label>

          <button className='w-1/2 text-white font-semibold  bg-blue-600 hover:bg-blue-700 rounded-md py-2 '>Login </button>
         
        </form>
      </div>

      </div>
        
    </div>
  )
}

export default Signup