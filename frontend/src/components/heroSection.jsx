import React from 'react'

import DOTSgrid from '../assets/dotsGrid.png'
import FadeIn from "./FadeIn";
import { FiSearch } from "react-icons/fi";
import  { useState } from 'react';
 import heroimg from "../assets/heroimg.png"
const heroSection = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

   
  const PerformSearch = async ()=>{
  const response = await fetch("http://localhost:8000/article/Perform_search", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: searchQuery }),
});  

const dataObj = await response.json();
console.log(dataObj.data.hits.hits[0]._source);

}


  return (
    <>
    <div className=' font-title  text-primary   flex flex-wrap  w-full   bg-rosee  bg-opacity-6    items-center md:justify-between    pb-24  pt-2  '>
      
       <div className='  flex-col  gap-3 w-full lg:w-7/12  pt-10 sm:pl-6 '>
       <FadeIn delay={0.2} direction="down" >
          <h1 className=' font-title      font-black mx-4   sm:ml-12   sm:mr-5 text-3xl sm:text-6xl 2xl:text-7xl'> Cultivez votre Curiosité<span className=' text-rosee'> Scientifique </span> : Trouvez, Explorez, Découvrez.</h1>
        </FadeIn>
        <FadeIn delay={0.4} direction="down" >
          <p  className=' font-body   text-lg sm:text-2xl sm:ml-12  mt-6 sm:mr-6   lg:w-9/12'>Exploration  Scientifique Simplifiée : Trouvez les Articles qui Éclairent votre Savoir.</p>
          </FadeIn>
       </div>
       
       <div className=' lg:w-5/12  pt-10 '>
       <img src={heroimg} alt="hero section image"  className=' object-cover  sm:w-full  sm:h-[530px]'/>
       </div>
    </div>_
    <FadeIn delay={0.2} direction="up" >
      <div className="flex items-center justify-center  font-body text-xl  relative -top-14  left-8  lg:left-1/4 lg:w-1/2    w-11/12">
            <input
                type="text"
                placeholder="Rechercher un article.."
                value={searchQuery}
                onChange={handleSearchChange}
                className="border-2 border-gray-300  px-10 py-4   placeholder:text-bold   placeholder:text-primary placeholder-primary  font-body shadow-lg  text-primary   rounded-tl-3xl rounded-b-3xl   border-none    h-24 w-full focus:ring-2 focus:outline-none focus:ring-opacity-75"
            />
            <button onClick={PerformSearch} type="submit" className="  bg-primary w-16   p-4 h-14 relative  -left-20 rounded-tl-3xl rounded-b-3xl hover:bg-slate-700 text-white font-bold   transform transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-75">
           <FiSearch />     {/*{absolute left-1/4  mt-7 top-3/4 w-1/2} */}
            </button>
      </div>
      </FadeIn>
      <div className='relative hidden lg:block  -top-36  w-fit'> <img src={DOTSgrid} alt="dots grid " /> </div>
</>

  )
}

export default heroSection