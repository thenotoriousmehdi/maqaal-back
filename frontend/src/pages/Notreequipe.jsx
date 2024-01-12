import React from 'react'
import Kahina from '../assets/kahina.jpg'
 import mehdi from '../assets/mehdi.jpeg'
 import wassim from '../assets/wassim.png'
 import nesrine from '../assets/NESRINE.jpg'
import MemberCard from '../components/memberCard'
const Notreequipe = () => {
       
 

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
    <h1 className='font-title  font-extrabold my-14 text-3xl md:text-6xl text-primary text-center'> NOTRE <span className=' text-rosee '>EQUIUPE</span></h1>
     <div className='flex flex-wrap my-20 justify-center'>    
    {members.map((props) => ( 
       
       <MemberCard props={props}/>
       ))} 
     </div> 
   </> )

}

export default Notreequipe