
import FadeIn from "./FadeIn"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 import Kahina from '../assets/kahina.jpg'
 import mehdi from '../assets/mehdi.jpeg'
 import wassim from '../assets/wassim.png'
 import nesrine from '../assets/NESRINE.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import "swiper/css/navigation";


// import required modules
import { FreeMode , Navigation} from 'swiper/modules';

export default function membersSlider() {

  const members = [
    {
       img: mehdi,
       name: "MEHDI MAMOUNI",
       description: "Etudiant 1CS G06, Designer et développeur web Front-end ",
       facebook: "https://www.facebook.com/profile.php?id=100052880411339",
       github: "https://github.com/thenotoriousmehdi",
       linkedin: "https://www.linkedin.com/in/mehdi-mamouni-68a010211/"
    },
    {
      img: Kahina,
      name: "SAADAOUI KAHINA ",
      description: "Etudiant 1CS G06,  développeur web Front-end ",
      facebook: "https://www.facebook.com/profile.php?id=100052880411339",
      github: "https://github.com/thenotoriousmehdi",
      linkedin: "https://www.linkedin.com/in/mehdi-mamouni-68a010211/"
   },
   {
    img: wassim,
    name: "BELDJOUDI WASSIM ",
    description: "Etudiant 1CS G06, développeur web Back-end ",
    facebook: "https://www.facebook.com/profile.php?id=100052880411339",
    github: "https://github.com/thenotoriousmehdi",
    linkedin: "https://www.linkedin.com/in/mehdi-mamouni-68a010211/"
 },
 {
  img: mehdi ,
  name: "YALA RIAD",
  description: "Etudiant 1CS G06,  développeur web Back-end ",
  facebook: "https://www.facebook.com/profile.php?id=100052880411339",
  github: "https://github.com/thenotoriousmehdi",
  linkedin: "https://www.linkedin.com/in/mehdi-mamouni-68a010211/"
},
{
  img: nesrine ,
  name: "FADEL NESRINE",
  description: "Etudiant 1CS G06, développeur web Front-end ",
  facebook: "https://www.facebook.com/profile.php?id=100052880411339",
  github: "https://github.com/thenotoriousmehdi",
  linkedin: "https://www.linkedin.com/in/mehdi-mamouni-68a010211/"
},

   ];


  return (
    <>
       <div className='flex-col items-center  mt-32  flex justify-center'>
       <FadeIn delay={0.2} direction="down" >
       <h1 className=' font-title text-center md:text-5xl text-3xl lg:text-6xl font-extrabold p-4 text-primary mb-6'> rencontrez notre <span className='text-rosee'>équipe</span></h1>
       </FadeIn>
       <FadeIn delay={0.4} direction="down" >
       <p className=' px-6 font-body text-center text-primary m-3 text-lg md:text-2xl lg:text-3xl mt-8  '> Cette application web a été réalisée par une équipe exceptionnelle 
où la créativité est la priorité </p>
      </FadeIn>

      
      <Swiper
       
        freeMode={true}
       slidesPerView={1}
       spaceBetween={35}
        breakpoints={{
          880: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1460: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
       
        modules={[FreeMode , Navigation]}
        className="  w-full sm:w-4/5 z-0  sm:m-10 p-10   "
      >
         {members.map((props) => (        
        <SwiperSlide className='  sm:h-[560px]  z-0  my-4   transform transition-transform duration-200 ease-in-out hover:scale-105  font-title text-primary  shadow-md shadow-slate-400  text-2xl rounded-tl-3xl rounded-b-3xl flex flex-col items-center   border-slate-600  gap-8 '>
        <div className="h-[125px] w-[125px] md:h-[160px] md:w-[160px] rounded-[50%] md:mt-[60px] mt-[30px] bg-white flex flex-row justify-center items-center border-[3.5px] md:border-[4px] border-l-rosee border-b-rosee border-r-white border-t-white">
        <div className="  h-[110px] w-[110px] md:h-[140px] md:w-[140px] rounded-[50%]">
            <img src={props.img} className="w-[100%] h-[100%] rounded-[50%] object-cover"></img>
        </div>
       </div>

        <p className="md:text-2xl text-rosee  mt-[35px] font-medium text-center text-xl ">{props.name}</p>
        <p className=" text-lg text-center text-primary mx-5 mt-[20px] md:text-xl">{props.description}</p>

          <div className=" flex  mb-2  w-full md:h-[60px] justify-evenly items-center mt-[40px]">
            <a href={props.facebook}><div className=" w-[30px] h-[30px] md:w-[35px] md:h-[35px]">
                
            <svg
                className="w-[100%] h-[100%] object-cover"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
                
                 
                </div></a>
            <a href={props.linkedin}><div className=" w-[30px] h-[30px] md:w-[35px] md:h-[35px]">
               
            <svg 
            className=" fill-black"
            viewBox="0 0 512 512">
      <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
    </svg>




                </div>
                
                
                
                
                </a>
            <a href={props.github}><div className=" w-[30px] h-[30px] md:w-[35px] md:h-[35px]">
            <svg
                className="w-[100%] h-[100%] object-cover"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
                
              </svg>
                
                
                
                </div></a>

          </div>
        </SwiperSlide>     ))}
     

       
      </Swiper>
     </div>
    </>
  );
}

