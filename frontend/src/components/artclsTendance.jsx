import  { React ,  useState }  from 'react';
 import ArticleCard from './articleCard';
 import FadeIn from "./FadeIn";
 import Artclimg from '../assets/artclimg.png'
import { FaRegBookmark , FaBookmark } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import './style.css'
import 'swiper/swiper-bundle.css';

// import required modules

import { Navigation , FreeMode } from 'swiper/modules';
const artclsTendance = () => {


  const [isWishlisted, setIsWishlisted] = useState(false);
   
  const toggleWishlist = () => {
     setIsWishlisted(!isWishlisted);
  };




  const articles = [
  
    {id: '1' , title : 'FrontEnd dev with react js ' , name : ' SAADAOUI KAHINA'} , 
    {id: '2' ,  title : 'La différence entre le UI et le UX   ' , name : 'MAMOUNI MEHDI '}, 
    {id: '3' , title : 'La différence entre le UI et le UX   ' , name : 'BELDJOUDI WASSIM '}, 
    {id: '4' , title : 'FastApi: the best python framewrok   ' , name : 'MAMOUNI MEHDI '}, 
  ]
  return (
    <div   className="xl:p-20 sm:p-4   mb-20 ">
      <FadeIn delay={0.2} direction="down" >
      <h1 className='font-title  font-extrabold  my-20 md:text-5xl text-3xl lg:text-6xl text-primary text-center'> Articles <span className=' text-rosee '>Tendance</span></h1>
   </FadeIn>
      <Swiper
        freeMode={true}
        slidesPerView={1}
        spaceBetween={30}
         breakpoints={{
           879: {
             slidesPerView: 2,
             spaceBetween: 30,
           },
           1619: {
             slidesPerView: 3,
             spaceBetween: 30,
           },
         }}
         navigation={true}
        
         modules={[FreeMode , Navigation]}
     className="p-4 sm:p-8 z-0  "
       
      >         
        
  
      {articles.map((article) => (        
        <SwiperSlide key={article.id} className=' mr-8' >
            {/* <div className=' h-[560px]  z-0  m-4 md:w-[320px]   lg:w-[410px]  transform transition-transform duration-200 ease-in-out hover:scale-105 font-body text-primary  shadow-md shadow-slate-400 text-xl lg:text-2xl rounded-tl-3xl rounded-b-3xl flex flex-col items-start    bg-primary bg-opacity-7'>

              <div className=' h-80 w-full'> <img src={Artclimg} alt="articl image"  className='  mb-2   '/>    </div>

              <span className=' px-6 py-3 font-semibold  '> {article.name} </span>
              <p className='px-6 ' >{article.title}</p>

              <FaRegBookmark   className={`productCard__wishlist  absolute bottom-7 right-6 ${ isWishlisted ? ' hidden' : ''}`    }  onClick={toggleWishlist}/>
              <FaBookmark   className={`productCard__wishlist  absolute bottom-7 right-6  ${ isWishlisted ? '  text-rosee' : 'hidden'}`    }  onClick={toggleWishlist}/>

           </div> */}

           <ArticleCard article={article} />

        </SwiperSlide>
        ))} 
     
       
      </Swiper>
    </div>
  )
}

export default artclsTendance
  /* <SwiperSlide  >  <ArticleCard   name={"SAADAOUI KAHINA"} title={"FrontEnd dev with react js  "}/> </SwiperSlide>
       <SwiperSlide >  <ArticleCard   name={"MAMOUNI MEHDI"} title={"La différence entre le UI et le UX  "}/> </SwiperSlide>
    <SwiperSlide  >       <ArticleCard   name={"BELDJOUDI WASSIM"} title={"FastApi: the best python framewrok "}/> </SwiperSlide>
    <SwiperSlide  >  <ArticleCard   name={"MAMOUNI MEHDI"} title={"La différence entre le UI et le UX  "}/> </SwiperSlide> */