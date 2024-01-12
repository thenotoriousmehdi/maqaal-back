import { useState } from 'react';
import React  from 'react'
import Artclimg from '../assets/artclimg.png'
import { FaRegBookmark , FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const articleCard = ({article }) => {



    const [isWishlisted, setIsWishlisted] = useState(article.ifSaved);
   
    const toggleWishlist = () => {
       setIsWishlisted(!isWishlisted);
       article.ifSaved = isWishlisted ; 
    };


  return (
    <div className=' h-[540px]  overflow-hidden z-0  my-4  w-[300px] sm:w-[370px] lg:w-[410px]  transform transition-transform duration-200 ease-in-out hover:scale-105 font-body text-primary  shadow-md shadow-slate-400 text-xl sm:text-2xl lg:text-3xl    rounded-tl-3xl rounded-b-3xl flex flex-col items-start    bg-white'>

       <div className=' '> <img src={Artclimg} alt="articl image"  className='    w-full '/>    </div>
         <div className='flex justify-between items-center my-4 w-full '>

               <span className=' px-6 py-3 font-bold  '> {article.name} </span>
              <div className='pr-2'>
              <FaRegBookmark   className={`productCard__wishlist  text-rosee  ${ isWishlisted ? ' hidden' : ''}`    }  onClick={toggleWishlist}/>
              <FaBookmark   className={`productCard__wishlist  ${ isWishlisted ? '  text-rosee' : 'hidden'}`    }  onClick={toggleWishlist}/>
               </div>
          </div>
        <p className='px-6  font-semibold' >{article.title}</p>
        <Link to="/articles/:id" >   {/* /articles/${artcile._id} */}
        <button className='absolute bottom-7 right-6   w-[181px] h-[58px] bg-rosee font-body text-xl text-white rounded-xl   hover:bg-opacity-70 font-semibold focus:ring-2 '>consulter</button>
        </Link>
      
        </div>
  )
}

export default articleCard