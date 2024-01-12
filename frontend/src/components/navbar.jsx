import React from 'react'
import { useState , useEffect , useRef } from 'react';
import { NavLink , Link, useLocation } from 'react-router-dom';
import Logonav from '../assets/logonav.png'
import { CgProfile } from "react-icons/cg";
import { FaBookmark } from 'react-icons/fa';
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const navbar = () => {

  

  const [isOpen, setIsOpen] = useState(false);
 


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  function useScrollDirection() {
  // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // the offset of the document.body
 const [bodyOffset, setBodyOffset] = useState(
   document.body.getBoundingClientRect()
 );
  // the vertical direction
 const [scrollY, setScrollY] = useState(bodyOffset.top);
  // the horizontal direction
 const [scrollX, setScrollX] = useState(bodyOffset.left);
  // scroll direction would be either up or down
 const [scrollDirection, setScrollDirection] = useState();

 const listener = e => {
   setBodyOffset(document.body.getBoundingClientRect());
   setScrollY(-bodyOffset.top);
   setScrollX(bodyOffset.left);
   setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
   setLastScrollTop(-bodyOffset.top);
 };

 useEffect(() => {
   window.addEventListener("scroll", listener);
   return () => {
     window.removeEventListener("scroll", listener);
   };
 });

 return {
  
   scrollDirection
 };
  };
 
  const  scrollDirection = useScrollDirection();

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }
  return (
    <>
  

    <div  className='  sticky   bg-white  z-50  top-0 font-title   font-semibold text-2xl  flex  justify-between shadow-lg items-center  h-32 ' > 
         <Link to="/" > <img src={Logonav} alt="logo"  className=' ml-9 lg:ml-12'/> </Link>
          
        


       
       <div className='xl:flex xl:text-primary flex-wrap  hidden  xl:block gap-14 '>
          
         <NavLink to="/Apropos" className={({ isActive }) =>
            isActive ? " text-rosee" : "" }><p>A propos</p> </NavLink>

          <NavLink to="/Articles" className={({ isActive }) =>
            isActive ? " text-rosee" : "" }><p>Articles</p> </NavLink>
  
        
    
          <NavLink to="/Notreequipe"  className={({ isActive }) =>
            isActive ? " text-rosee" : "" }>
               <p>Notreequipe</p>  </NavLink>
    
        
       
          <NavLink to="/Faq" className={({ isActive }) =>
            isActive ? " text-rosee" : "" }> <p>Faq</p> </NavLink>
        </div>
       
   
    
         <div className=' flex   items-center gap-7  mr-6 '>

    {/* when user is connected */}
      <Link to="/ArticlesSauvgardes"  >
       <button   className='p-4 border sm:block hidden border-primary  rounded-tl-3xl rounded-b-3xl transform transition-transform duration-200 ease-in-out hover:scale-110'> <FaBookmark className='text-primary w-4 h-4 sm:h-7 sm:w-7 '/></button>
      </Link>
     <Link to="/Adminpage">   
      {/* when role is moderateur path is to="/Moderateurpage" ||  */}
       <button className='p-4 border border-primary sm:block hidden  rounded-tl-3xl rounded-b-3xl transform transition-transform duration-200 ease-in-out hover:scale-110'> <CgProfile  className='text-primary w-4 h-4 sm:h-7 sm:w-7'/> </button>
    </Link>  
    
     {/* when user is not connected  */}
        {/* <Link to={"/LogIn"}>
        <button type='submit' className=' hidden md:block'>se connecter </button>
        </Link>   

        <Link to={"/SignIn"}>
        <button type='submit' className=' hidden md:block items-center m-3 px-8 lg:px-14   pb-2 lg:py-7 bg-primary rounded-tl-3xl rounded-b-3xl   lg:font-medium  h-16 lg:h-20 text-white  hover:bg-red-400
          lg:text-2xl text-lg transform transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-opacity-75 '>s'inscrire</button>
          </Link> */}

          {/* burger Icon menu */}
        <button className='xl:hidden' onClick={toggleNavbar}> {isOpen ?  <IoCloseSharp /> :<MdOutlineMenu />}</button>
      
        </div>
        
           </div>
           {isOpen && (
             <div className=' flex-col xl:hidden gap-11 z-50  bg-white font-title   font-semibold text-2xl  flex  py-12  shadow-lg items-center'>

          <NavLink to="/Apropos" className={({ isActive }) =>
            isActive ? " text-rosee" : "" }><p>A propos</p> </NavLink>

          <NavLink to="/Articles" className={({ isActive }) =>
            isActive ? " text-rosee" : "" }><p>Articles</p> </NavLink>
  
        
    
          <NavLink to="/Notreequipe"  className={({ isActive }) =>
            isActive ? " text-rosee" : "" }>
               <p>Notreequipe</p>  </NavLink>
    
        
       
          <NavLink to="/Faq" className={({ isActive }) =>
            isActive ? " text-rosee" : "" }> <p>Faq</p> </NavLink>

            <div className='flex  md:hidden  flex-wrap-reverse items-center gap-12 justify-center w-full px-8'> 
            <button className='  px-8  text-xl   rounded-tl-3xl rounded-b-3xl  h-16  border-primary  border  
            transform transition-transform duration-200 ease-in-out hover:scale-110 focus:border-rosee focus:outline-none focus:ring-1 focus:ring-rosee focus:ring-opacity-75 ' >se connecter </button>
         <button  className=' px-8    bg-primary rounded-tl-3xl rounded-b-3xl    h-16  text-white  hover:bg-red-400
           text-xl transform transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:border-rosee focus:ring-opacity-75 '>s'inscrire</button>
         
            </div>
             </div>
          )}
    </>
  )
}

export default navbar ;


