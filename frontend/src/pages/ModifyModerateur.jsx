import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
export const ModifyModerateur = () => {

  return (
    <>
 <div className='flex  xl:gap-14   gap-[10%]   items-center '>
    <Link to="/Adminpage">
    <button  className="  border border-primary rounded-tl-3xl rounded-b-3xl lg:ml-28 ml-6  p-3  hover:bg-slate-700 text-white font-bold   transform transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-75">
    <AiOutlineArrowLeft  className='text-primary md:w-8 md:h-8  h-5 w-5 hover:text-white'/>
    </button>
    </Link>
   <h1 className='font-title  font-extrabold my-14 text-xl sm:text-3xl md:text-6xl text-primary '> Modifer modérateur , <span className=' text-rosee '>NOMX</span></h1>

 </div>






</>
  )
}
