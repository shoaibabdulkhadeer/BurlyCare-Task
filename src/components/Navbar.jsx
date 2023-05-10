import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { RxDividerVertical } from 'react-icons/rx';


import { FaBars  } from 'react-icons/fa';

import { ImCross } from 'react-icons/im';






const Navbar = () => {

const [nav,setNav] = useState(true);


function handlechange(){
    setNav(prev => !prev)
}

    return (
        <div>
        <div className='p-3 flex w-full   bg-white justify-between  md:py-5 md:px-12  items-center '>

            <img src='https://burlycare.com/static/media/logo.4d9ce206.svg'
                alt='' className='w-28'
            />

               <div className='relative flex items-center'>
                <AiOutlineSearch size={23} className='hidden md:block md:absolute md:left-3 text-slate-400'/>
                <input type="text" placeholder='Search here'  className='w-[130px] px-4 bg-slate-100 md:w-[650px] rounded-full md:py-2 md:pl-12' />
               </div>
         
            <div className='hidden md:flex items-center '>
                <a href="/" className='text-red-600 font-bold'>Call 0876-123-4567</a>
                <RxDividerVertical size={36} className='text-slate-500'/>
                <button className='rounded-full py-2 px-6 bg-red-700 text-white'>Log In/Sign Up</button>
            </div>
 
         
          <div className='m-3 cursor-pointer md:hidden ' onClick={handlechange}>
      { nav ? <FaBars size={25} className='hover:scale-125'/> : <ImCross size={25}/> }
 </div>
       
         

        </div>

          {/* //links */}
              <div className='hidden  md:block md:bg-[#ffdad9] p-3 '>
                <ul className='flex items-center justify-center gap-14 font-bold'>
                    <li>ENT</li>
                    <li>Gynaecology</li>
                    <li>Protolohy</li>
                    <li>Laparoscopy</li>
                    <li>Urology</li>
                    <li>Othopedics</li>
                </ul>
                     
              </div>
     

    {/* Mobile Navbar */}
    {
        !nav ? <div className=' md:hidden'>
        <ul className='flex flex-col absolute bg-white w-full h-screen items-center justify-center gap-5 font-bold'>
        <a href="/" className='text-red-600 font-bold'>Call 0876-123-4567</a>
        <button className='rounded-full py-2 px-6 bg-red-700 text-white'>Log In/Sign Up</button>
                      <li>ENT</li>
                      <li>Gynaecology</li>
                      <li>Protolohy</li>
                      <li>Laparoscopy</li>
                      <li>Urology</li>
                      <li>Othopedics</li>
                  </ul>
                       
        </div> : null
    }
      

        </div>
    )
}

export default Navbar