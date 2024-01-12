import { Input } from '@mui/material';
import React, { useState , useEffect , useRef } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ArticleDetails = () => {


  let article= {
    id: '1',
    title: 'Python comme langage scientifique',
    name: 'Varoquaux Gaël',
    ifSaved: false,
    Resume:
      "De nos jours, l'informatique et la simulation numérique prennent une place de plus en plus importante dans la recherche scientifique, ainsi que le développement technologique. L'ENIAC, le premier ordinateur conçu, avait pour but le calcul scientifique, puisqu'il était utilisé pour calculer des trajectoires d'artillerie. En effet, un ordinateur permet d'automatiser bien des tâches, dont les tâches de calcul, et d'explorer systématiquement les problèmes scientifiques.",
    Introduction:
      "De façon générale, un problème de recherche et développement se présente comme un modèle que l'on veut étudier et comprendre. Le modèle peut aussi bien être un modèle théorique qu'un système modèle fait d'expériences ou une maquette. Pour développer son intuition, l'idéal est de pouvoir interagir le plus possible avec le modèle. Ainsi, depuis l'antiquité, les mathématiciens utilisent des dessins et des calculs pour formuler leurs hypothèses, mais la généralisation des ordinateurs, il y a vingt ans, a conduit à l'apparition des mathématiques dites « expérimentales », s'appuyant sur l'utilisation systématique de l'informatique. Dans l'industrie, par exemple, lors de la conception d'un nouveau produit, la simulation numérique permet de tester systématiquement.",
    Body: `De nombreuses solutions géométriques ou des matériaux différents de manière relativement pratique, plutôt que de construire de nombreuses maquettes à grand coût. L'informatique scientifique a pour but premier de faciliter cette exploration du problème. Ses outils, que le scientifique doit apprendre et maîtriser, ne sont que des barrières pour l'utilisateur entre son problème et lui-même. Par ailleurs, dans le domaine de la recherche, il est inévitable que les problèmes soient souvent mal posés, et changent en permanence au fur et à mesure que l'on progresse. C'est pourquoi, il faut que les solutions utilisées soient aussi souples et agiles que possible.`.repeat(5),
  
    motsCles: 'Python, cs, computer science, webdev, ml, ai, backend, dev, langage',
    source: 'GNU/Linux Magazine HS n°Numéro 40',
  };

   const [moderateurRole , usemoderateurRole] = useState(true); 
   const [modify , setModify ] = useState(false); 
   const elementRef = useRef(null);
   const [position, setPosition] = useState(0);

//to detect the end of the article so we can fix showw less button 
  useEffect(() => {
    function handleResize() {
    
      const y =  elementRef.current.offsetTop  ;
      setPosition( y );
    }

    handleResize(); // initial call to get position of the element on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);


  const [afterposition, setAfterposition]= useState(false); // use it to not make the button static after the article section 
  const [InitHeight, setInitHeight] = useState(33) ;
  const [moreposition, setMoreposition] = useState(0);  //to save the position of voir plus button   
  const [show, setShow] = useState(false); //indicates that we clicked on the show more button 


  const handleShowmore =()=>{
    setShow(true) 
    setMoreposition( window.scrollY );
    setInitHeight(InitHeight*2)
    
    
  }

  const handleShowless =()=>{
   setInitHeight(33)
   setShow(false)
   setAfterposition(false)

 
}

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < moreposition) {
        handleShowless()
      } 
      else if (window.scrollY > (position ) ){
        setAfterposition(true)

      }
    } );

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY < moreposition) {
          handleShowless()
        } 
        else if (window.scrollY > (position ) ){
          setAfterposition(true)
  
        }
      } );  
    }
    
  }, []);
     
     
  const [auteur , setAuteur] = useState(article.name)
  const [source , setSource] = useState(article.source)
  const [Resume , setResume] = useState(article.Resume)
  const [Introduction , setIntroduction] = useState(article.Introduction)
  const [Body , setBody] = useState(article.Body)
  const [title , setTitle] = useState(article.title)
  const [motsCles , setMotsCles] = useState(article.motsCles)


const handleSubmitModifications =()=>{

    setModify(!modify)
    handleShowless()
    console.log("title" , title )
}
         
  return (
    
    < div className=' bg-bgr px-6   sm:px-20 xl:px-44'>
      <Link to="/Articles">
    <button class="  border border-primary hover:text-white my-10 rounded-tl-3xl rounded-b-3xl lg:ml-40 ml-12  p-3  hover:bg-slate-700 text-white font-bold   transform transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-75">
    <AiOutlineArrowLeft  className='text-primary md:w-8 md:h-8  h-5 w-5 hover:text-white'/>
    </button>
     </Link>
     {modify? 
      <textarea type='text' placeholder={`Modifier le titre  de l'article...`}
      value={title}
      rows={2}
      onChange={e=>setTitle(e.target.value)}
      className='border-primary font-title font-black w-full text-primary text-4xl sm:text-5xl md:text-6xl  my-9    placeholder:text-lg placeholder:p-2 ring-1 border rounded-xl'
     />
     : <h1 className='font-title font-black text-primary text-4xl sm:text-5xl md:text-6xl  my-9 '> {article.title}</h1>
}
   
    <div className=' mb-20 flex flex-wrap justify-between items-start '>
        <div className='flex  lg:w-5/12   my-2 font-body font-semibold  text-2xl sm:text-3xl text-primary flex-col items-start'>
            { modify ? 
            <>
           <textarea type='text' placeholder={`Modifier le nom  de l'auteur...`}
            value={auteur}
            rows={2}
            onChange={e=>setAuteur(e.target.value)}
            className='border-primary  my-2  w-full placeholder:text-lg placeholder:p-2 ring-1 border rounded-xl'
           />


           <textarea type='text' placeholder={`Modifier la source de l'article`}
            value={source} rows={2}
            onChange={e=>setSource(e.target.value)}
            className='border-primary  my-2 w-full  break-words    placeholder:text-lg placeholder:p-2 ring-1 border rounded-xl'
            
           />
</> 

            : 
            <>
            <span className=' my-2'>{article.name}</span> 
            <span className='my-2'>{article.source}</span>
            </>}



              
        </div>

 {moderateurRole ?
   (modify? 
    <button  
        onClick={handleSubmitModifications}
      
        
         className=' my-6  md:my-0 w-full sm:w-[566px] h-[116px] px-4 md:px-10 justify-between  mr-2 flex items-center bg-rosee rounded-xl transform transition-transform duration-200 ease-in-out hover:scale-105 '> 
         <span className=' font-title text-white  text-xl mx-7 md:mx-0 sm:text-4xl font-extrabold '> Enregistrer </span>
         </button>
   :
   <button 
        onClick={()=>{
          setModify(!modify)
          handleShowmore()} }
         className=' my-6  md:my-0 w-full sm:w-[566px] h-[116px] px-4 md:px-10 justify-between  mr-2 flex items-center bg-rosee rounded-xl transform transition-transform duration-200 ease-in-out hover:scale-105 '> 
         <span className=' font-title text-white  text-xl mx-7 md:mx-0 sm:text-4xl font-extrabold '> Modifier </span>
         </button>    )
  
        
        : 
        
        <button className=' my-6  md:my-0 sm:w-[566px] h-[116px] px-4 md:px-10 justify-between  mr-2 flex items-center bg-rosee rounded-xl transform transition-transform duration-200 ease-in-out hover:scale-105 '> 
        <>
         <span > <FaRegFilePdf className='text-white  w-10  h-10' /></span>
         <span className=' font-title text-white text-xl mx-7 md:mx-0 sm:text-4xl font-extrabold '>Télécharger le pdf </span>
        </>
       </button>  } 
       
    </div>
   
    <div className=' flex  my-6 flex-col md:flex-row items-start gap-2 text-primary'>
        
        <div className=' w-full md:w-1/2'>
                 {modify?
                   <>
                    <h4 className='font-title mb-10 text-3xl font-extrabold'>Résume</h4>
                    <textarea   type='text' placeholder={`Modifier le resume de l'article...`}
                    value={Resume}
                    rows={14}
                    onChange={e=>setResume(e.target.value)}
                    className='border-primary p-1 w-full font-body mb-14  text-2xl  font-medium   placeholder:text-lg placeholder:p-2 ring-1 border rounded-xl'
                  />

                 <h4 className='font-title mb-10 text-3xl font-extrabold'>Mot clés </h4>    
                 <textarea  type='text' placeholder={`Modifier les mots cles de l'article...`}
                    value={motsCles} rows={4}
                    onChange={e=>setMotsCles(e.target.value)}
                    className='border-primary p-1 font-body w-full  text-2xl  font-medium  placeholder:text-lg placeholder:p-2 ring-1 border rounded-xl'
                  />
                   </>
                 :
                    <>
                      <h4 className='font-title mb-10 text-3xl font-extrabold'>Résume</h4>
                      <p className=' font-body mb-14  text-2xl  font-medium '>
                       {article.Resume}
                     </p>

                     <h4 className='font-title mb-10 text-3xl font-extrabold'>Mot clés </h4>
                     <p className=' font-body  text-2xl  font-medium '>
                     {article.motsCles}
                     </p>
                     </>}
        </div>


        <div className=' w-full md:w-1/2'>
                   <h4 className='font-title mb-10 text-3xl font-extrabold'>Introduction</h4>

                   {modify?
                   <textarea type='text' placeholder={`Modifier l'introduction de l'article...`}
                   value={Introduction}
                   rows={23}
                   onChange={e=>setIntroduction(e.target.value)}
                   className='border-primary  w-full font-body mb-14  text-2xl     font-medium placeholder:text-lg placeholder:p-2 ring-1 border rounded-xl'
                 />
                  :<p className=' font-body mb-14  text-2xl     font-medium'>
                   {article.Introduction}
                   </p>}
                   
                      
       
        </div>
    </div>

    <div className='  text-center'>
        {modify?
        <textarea type='text' placeholder={`Modifier l'article...`}
        value={Body}
        rows={20}
        onChange={e=>setBody(e.target.value)}
        className='border-primary  w-full  my-9 font-body  text-2xl text-primary   font-medium   placeholder:text-lg placeholder:p-2 ring-1 border rounded-xl'
      />
      : 
      <p ref={elementRef} className={InitHeight=== 33? ' font-body  text-2xl text-primary   font-medium max-h-[33rem]  overflow-hidden  ':  ' font-body  text-2xl text-primary   font-medium   '  }  >
            {article.Body}
        </p>
      }
       

      { !modify  &&  ( 
      (InitHeight ===33 ) ?
      <> 
      <div className='  inset-x-0 bottom-0 h-11 -top-10 relative bg-gradient-to-t from-gray-300 to-transparent    black  mx-6 sm:mx-20 xl:mx-44'>
         </div> 
         <button  onClick={handleShowmore} className='font-title   relative -top-5   transform transition-transform duration-200 ease-in-out 
         hover:scale-110       text-center text-2xl text-rosee font-bold hover:opacity-75  '>Voir plus </button>
      </>  : 
      show && (  <button  onClick={handleShowless} className= {afterposition ?'    mb-16  transform translate-y-4 font-title  hover:scale-110  text-center text-2xl text-rosee font-bold hover:opacity-75  ' :
      '   fixed bottom-0 left-1/2  -ml-10 mb-16  transform translate-y-4 font-title hover:scale-110  text-center text-2xl text-rosee font-bold hover:opacity-75  '} 
       >Voir moins </button>
       ))
      }
        </div>     
        
      
</div>

  )
}
 




export default ArticleDetails