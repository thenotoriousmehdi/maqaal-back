import React from 'react'
import Logo from '../assets/logo.png'

import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const footer = () => {
  return (
    <div className='  overflow-hidden bg-primary flex flex-wrap-reverse  justify-center sm:justify-between  h-44 sm:px-5'> 

        <div className=' justify-center flex flex-col  items-start'>
           <img src={Logo} alt="logo"  className='hidden sm:block' />
           <p className=' font-body text-sm  text-white'> Copyright © 2023 maqaal.com™. Tous droits réservé</p>
        </div>


        <div className=' flex justify-evenly   items-center'>

        <a href="https://www.facebook.com" className='mr-3 sm:m-4'>
        <FaFacebook  className=' text-white md:w-16 md:h-16  h-  h-9 w-9'/>
          </a>
         <a href="https://www.twitter.com" className='mr-3 sm:m-4' >
         <FaXTwitter className=' text-white md:w-16 md:h-16  h-9 w-9' />
         </a>
           <a href="https://www.github.com"  className='mr-3 sm:m-4'>
           <FaGithub   className=' text-white md:w-16 md:h-16  h-9 w-9' />
           </a>
     <a href="https://www.instagram.com"  className=' sm:m-4'>
     <FaInstagram   className=' text-white md:w-16 md:h-16 h-9 w-9' />
     </a>
       </div>

    </div>
  )
}

export default footer