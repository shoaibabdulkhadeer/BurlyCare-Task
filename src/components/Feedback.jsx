import React from 'react'

const Feedback = () => {
  return (
    <div className='p-14 flex items-center justify-center'>
            <div className='flex flex-col justify-center  items-center border-2 rounded-lg p-12 border-red-800 md:w-[1000px] '>
                  <h1 className='text-2xl md:text-4xl text-red-700 font-bold'>Have Feedback?</h1>
                  <p className='my-5 md:text-2xl'>Help us to improve by providing your feedbacks!</p>

            <input type="text" placeholder='Enter Your email'  className='w-[260px] bg-slate-200 md:w-[550px] rounded-xl py-2 pl-5 my-3' />
            <textarea name="" id="" cols="30" rows="6" placeholder='Message' className='bg-slate-200 rounded-xl md:w-[550px] py-3 pl-5'></textarea>
        
           
            <button className='rounded-full py-2 px-16 bg-red-700 mt-5 text-white'>Submit</button>
            </div>


    </div>
  )
}

export default Feedback