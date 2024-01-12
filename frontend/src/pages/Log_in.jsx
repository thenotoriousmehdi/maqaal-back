import React , { useState } from 'react'
import { Link } from 'react-router-dom';
import pic2 from '../assets/pic2.png'
import pic from '../assets/pic1.jpg'



const Log_in = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrorEmail('Veuillez saisir votre email');
    } 
    else {
      setErrorEmail('');
      if (!password) {
        setErrorPassword('Veuillez saisir  votre mot de passe ');
      } else {
        setErrorPassword('');
        if (!emailRegex.test(email)) {
          setError('Veillez saisir votre mail correctement');
        } else {
          setError('');
          // Envoyer le formulaire ou effectuer d'autres actions
        }
      }
    }

    
  }
  
  return (
    <div className="w-full min-h-screen flex items-start ">
    <div  className="flexbox flex-col w-full xl:w-1/2  h-screen flex items-center justify-center  ">
    <div className=" hidden xl:block h-12 w-full items-center bg-customRed opacity-5 p-2 shadow-2xl rounded-full filter blur-md  "></div>
    <div className="flex flex-col w-full xl:w-[640px] xl:h-[901px] h-full items-center justify-evenly bg-white  md:shadow-2xl  rounded-2xl ">
     <img
      src={pic2}
      alt="Logo" 
      className='w-15 h-9  px-0 py-0  bg-transparent '
     ></img>
     < div className='flex flex-col items-center justify-evenly gap-5'>
     <div className="xl:w-[277px] w-full h-[29px] text-center text-slate-700 text-3xl font-extrabold font-['Raleway']">Bienvenue</div>
     <div className="xl:w-[449px] w-full h-[61px]  text-center text-black xl:text-[15px] text-[14px] font-medium font-['Raleway']">Connecter vous à votre compte en remplissant le formulaire de connexion avec vos informations personnelles<br/></div> </div>
     
     <div className='flex flex-col flex-wrap sm:w-[530px] w-full gap-2 justify-evenly items-center'>
     <input
     id='email'
     type ="email"
     value={email}
     onChange={handleEmailChange}
     placeholder=' Entrez votre email '
     className='sm:w-[528px] w-2/3 h-20 text-black text-[18px]   bg-slate-200 rounded-[10px] '
     />
    
     <input
     id='password'
     type ="password"
     placeholder='  Mot de passe '
    
     value={password}
        onChange={handlePasswordChange}
    className='sm:w-[528px] w-2/3 h-20  text-black text-[18px]   bg-slate-200 rounded-[10px] '
     />
    </div>
      <div className='flex flex-col flex-wrap sm:w-[530px] w-full gap-2 justify-evenly items-center'>
       
      <button onClick={handleSubmit}
      type="submit"
       className="bg-customBlue sm:w-[528px] w-2/3 h-[65px] text-white font-normal rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px]">
      Se connecter 
     </button>
     </div>
       {errorEmail && <p className="text-red-500">{errorEmail}</p>}
        {errorPassword&& <p className="text-red-500">{errorPassword}</p>}
        {error && <p className="text-red-500">{error}</p>}

     < div className='flex flex-col sm:w-[397px] items-center w-full justify-evenly mb-8  '>
     <div className="sm:w-[397px] w-2/3 h-[0px] opacity-40 border border-slate-700 mb-2"></div>
     <div className='flex sm:w-[397px] w-2/3 justify-between '>
    <div className="text-black text-opacity-40 pl-4 pb-0 text-[15px] font-['SF Pro']">Vous n'avez pas encore de compte? </div>
    <Link to={"/SignIn"}>
    <button className="text-customBlue  cursor-pointer  text-[15px] font-['SF Pro']"
              >
              S'inscrire
     </button>
     </Link>
    </div>
     </div>
     </div>
     <div className="h-12 w-full hidden xl:block items-center bg-customBlue opacity-10 p-4 shadow-2xl rounded-full filter blur-md  "></div>
    </div>
    
    <div className="w-0 xl:w-1/2 h-screen flex items-center justify-center">
      <img src={pic} alt=''  className="h-full w-full object-cover"/>
     </div>
    </div>  
    
    
  )
}

export default Log_in
