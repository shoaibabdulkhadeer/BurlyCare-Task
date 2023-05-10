import React from 'react'
import { RxDividerVertical } from 'react-icons/rx';


const Main = () => {
  return (
    <div className=' min-h-[350px] flex flex-col items-center justify-center mt-6 pt-10'>
          <h1 className='text-xl md:text-4xl text-center mb-5 font-bold'>Book <span className='text-red-700'>Free Appointments</span> With Our <br></br> Expert Doctors!</h1>
         <p className='text-sm md:text-xl'>Get full medical assistance and consultation for diseases <br></br> Hassle-free experience throughout your treatment.</p>

         <div className='flex items-center mt-5 pb-10'>
         <button className='p-2 rounded-full md:py-2 md:px-6 bg-red-700 text-white'>Book Appointments</button>
        
                <RxDividerVertical size={46} className='text-slate-500'/>
              <button className='p-2 rounded-full md:py-2 md:px-10 bg-transparent text-slate-700 border-slate-700 border'>Call our Agent</button>
               
            </div>

       
       <div className=''>
        <img 
        src="https://lh3.googleusercontent.com/M1KigFgNnJA61NtnSMJlpv7_vQz4_2H3nhdD0QrugA6X86TSjYALVcRG0J8jPRNXBZXAK_fKCC29Htntri5DStjFtQEokGlpcJSjs0Ce" 
        alt=""
        className=' ' 
        />
       </div>

    </div>
  )
}

export default Main