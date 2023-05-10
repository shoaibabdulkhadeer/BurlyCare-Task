import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {IoLogoYoutube} from 'react-icons/io';
import {MdCall} from 'react-icons/md';
import {CgMail} from 'react-icons/cg';



const Footer = () => {
    return (
        <div className='flex flex-col  md:flex-row  bg-red-700 text-white p-16 justify-around'>

            <div className='mb-10 md:mb-0'>
                    <div  className='mb-2'>  
                        <h1>BURLYCARE</h1>
                        <p>Connecting Patients with Doctors</p>
                    </div>
               
                <p className='w-[300px]'> Get full medical assistance and consultation for
                diseases Hassle-free experience throughout your
                treatment  </p>

               </div>


          <div className='md:flex bg-red-700 text-white gap-10'>
                <div className='hidden md:block'>
                    <h1>Quick Links</h1>
                    <ul>
                        <li>Our treatments</li>
                        <li>Our Docters</li>
                        <li>Contact us</li>
                        <li>Terms and conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
          
                <div className='hidden md:block'>
                    <h1>Quick Links</h1>
                    <ul>
                        <li>Our treatments</li>
                        <li>Our Docters</li>
                        <li>Contact us</li>
                        <li>Gallstone</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
          

           <div>
            <h1>Follow us</h1>
            <div className='flex gap-2 mt-3'>
               <AiFillInstagram size={30}/>
               <BsLinkedin size={25}/>
               <AiFillTwitterCircle size={30} />
               <IoLogoYoutube size={30} />
            </div>
            <div className='py-4'>
            <p className='flex items-center py-3'>  <MdCall size={25}/> 1800 102 6601 | 080 4687 2700 </p>
                 <p className='flex items-center'> <CgMail size={25}/> Burlycare@gmail.com</p>
    
            </div>
                
           </div>


         
          </div>

        </div>
    )
}

export default Footer