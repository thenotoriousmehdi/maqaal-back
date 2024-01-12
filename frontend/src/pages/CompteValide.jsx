import React from 'react';
import pic from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/sticker.png';
import { Link } from 'react-router-dom';

const CompteValide = () => {
  return (
    <div className="w-full min-h-screen flex items-start ">
    <div  className=" flexbox flex-col  w-full xl:w-1/2 h-screen flex items-center justify-center  ">
    <div className="hidden xl:block h-12 w-full items-center bg-customBlue opacity-5 p-2 shadow-2xl rounded-full filter blur-md  "></div>
    <div className="flex flex-col w-full xl:w-[640px] xl:h-[901px] h-full items-center justify-evenly bg-white  md:shadow-2xl  rounded-2xl ">
     <img
      src={pic2}
      alt="Logo" 
      className='w-15 h-9  bg-transparent '
     ></img>
    
      <img
      src={pic3}
      alt="Logo" 
      className='w-[141.99px] h-[142.34px] bg-slate-700 rounded-full bg-transparent'
     ></img>
      < div className='flex flex-col items-center  mb-8 gap-8'>
     <div class="xl:w-[277px] w-full text-center text-slate-700 xl:text-5xl text-3xl font-bold font-['Raleway']">Félicitations!</div>
     <div class="wl:w-[869.14px] w-full text-center text-slate-700 xl:text-3xl text-xl font-medium font-['Raleway'] leading-[45px]">Félicitations, vous avez terminer la <br/>création de votre compte avec succès. </div>
     </div>
     <button
      className="bg-customBlue sm:w-[528px] h-[65px] w-2/3 font-['SF Pro'] text-white font-normal  rounded-tl-full rounded-bl-full rounded-tr-none rounded-br-full
       "
    >
    Vers l'acceuil

    </button>
     </div>
     <div className=" hidden xl:block h-12 w-full items-center bg-customRed opacity-10 p-4 shadow-2xl rounded-full filter blur-md  "></div>
    </div>
    
    <div className="w-0 xl:w-1/2 h-screen flex items-center justify-center">
      <img src={pic} alt='' className="h-full w-full object-cover"/>
     </div>
     </div>
  );
};

export default CompteValide;
