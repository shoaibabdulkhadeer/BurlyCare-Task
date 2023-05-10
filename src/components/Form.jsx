import React from 'react'

const Form = () => {
  return (
    <div className='md:p-14 flex items-center justify-center'>
            <div className='flex w-[300px] flex-col justify-center  items-center border-2 rounded-lg p-12 border-red-800 md:w-[1000px]  '>
                  <h1 className='text-xl md:text-4xl text-red-700 font-bold'>Let s Schedule Your Appointment</h1>
                  <p className='my-5 md:text-2xl'>We would love to hear from you!</p>

            <input type="text" placeholder='Full name'  className='bg-slate-200 md:w-[550px] rounded-xl py-2 pl-12 my-3' />
            <input type="text" placeholder='Phone Number'  className='bg-slate-200 md:w-[550px] rounded-xl py-2 pl-12 my-3' />
            <input type="text" placeholder='Select city'  className='bg-slate-200 md:w-[550px] rounded-xl py-2 pl-12 my-3' />
            <input type="text" placeholder='Select your treatment'  className='bg-slate-200 md:w-[550px] rounded-xl py-2 pl-12 my-3' />
           
            <button className='rounded-full py-2 px-16 bg-red-700 mt-5 text-white'>Submit</button>
            </div>


    </div>
  )
}

export default Form