import React from 'react'
import Frame1 from '../assets/Frame1.png'
import Frame2 from '../assets/Frame2.png'
import DOTS3 from '../assets/DOTS3.png'
import FadeIn from "./FadeIn"
import { Link } from 'react-router-dom'
const apropos = () => {
  return (
    <>
     <FadeIn delay={0.2} direction="right" >
    <div className=' absolute  right-0   md:block hidden'>
     <img src={Frame2} alt="dots grid" className='  mt-6 ' /> 
     </div>
     </FadeIn>
    <div className='flex  flex-wrap  p-8 bg-primary   justify-around   items-center bg-opacity-7  rounded-tl-[30px]  '> 
   
    <FadeIn delay={0.2} direction="right" >
     <img src={Frame1} alt="illustration 1 " className=' w-3/4 md:w-2/4   lg:h-[560px] lg:w-auto h-auto  ' />
    </FadeIn>
    
     <div className='flex-col  justify-center items-center w-11/12    xl:w-1/2'>
     {/* flex-col  justify-center items-center  w-11/12  lg:w-2/5 */}
     <FadeIn delay={0.2} direction="left" >
        <h1 className=' font-title md:text-5xl text-3xl lg:text-6xl font-extrabold p-4 text-primary'> A propos de <span className='text-rosee'>maqaal</span></h1>
      </FadeIn>
      <FadeIn delay={0.3} direction="left" >
         <p className='font-body text-primary p-4  text-lg md:text-2xl lg:text-3xl w-fit '>Bienvenue sur maqaal, votre passerelle vers l'univers fascinant de la recherche scientifique. Notre mission 
          est de simplifier l'accès à une mine d'informations à 
          travers une plateforme intuitive. Explorez des articles 
          en utilisant notre outil de recherche avancée, 
          personnalisez votre expérience avec des filtres précis, 
          et sauvegardez vos découvertes favorites en toute 
          simplicité. Chez Maqaal, la connaissance pour tous 
          est notre conviction. Rejoignez notre quête 
          intellectuelle, chaque clic dévoile une compréhension 
          plus profonde du monde.</p>
      </FadeIn>
      <FadeIn delay={0.4} direction="left" >
        <Link to="/Articles">
     <button type="submit" className=' m-3 px-8 md:px-20   pb-2 md:py-7 bg-rosee rounded-tl-3xl rounded-b-3xl   font-normal md:font-medium  h-16 md:h-20 text-white  hover:bg-red-400
     font-body md:text-2xl text-lg transform transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-opacity-75 '> Découvrir </button>
      </Link>
      </FadeIn>

     <FadeIn delay={0.2} direction="up" >
     <div className='flex font-body text-primary  justify-around mb-20 mt-12 lg:my-5 ' >

      <div className='flex-col gap-4'> 
        <p className=' text-2xl md:text-3xl'>Membres</p>
        <span className='text-3xl md:text-5xl font-bold font-title'> + 2022</span>
      </div>
      <div className='flex-col  items-center gap-4 '> 
     
      <p className='text-2xl md:text-3xl'>Articles</p>
       <span className='text-3xl md:text-5xl font-bold font-title '> + 1023</span>
       </div>
      
     </div>
     </FadeIn>
     </div>
     
      
     </div><img src={DOTS3} alt="dots grid" className=' md:w-auto md:h-auto w-20 h-20 relative mt-6  -top-20' /></>
  )
}

export default apropos