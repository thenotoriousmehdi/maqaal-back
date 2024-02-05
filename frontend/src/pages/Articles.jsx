import React from 'react'
import '../index.css'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import ArticleCard from '../components/articleCard'
import { AiOutlineArrowLeft } from "react-icons/ai";
import {  useState , useEffect} from "react";
import { Link, useLocation } from 'react-router-dom';
import { VscWholeWord } from "react-icons/vsc";
import ReactPaginate from 'react-paginate';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlinePerson3 } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
const Articles = () => {


  const articles = [
    {id: '1' , title : 'FrontEnd dev with react js '           , name : 'SAADAOUI KAHINA' ,  ifSaved : false}, 
    {id: '2' , title : 'La différence entre le UI et le UX   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : false}, 
    {id: '3' , title : 'La différence entre le UI et le UX   ' , name : 'BELDJOUDI WASSIM',  ifSaved : false}, 
    {id: '4' , title : 'FastApi: the best python framewrok   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : false}, 
    {id: '5' , title : 'FrontEnd dev with react js '           , name : 'SAADAOUI KAHINA' ,  ifSaved : false}, 
    {id: '6' , title : 'La différence entre le UI et le UX   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : false}, 
    {id: '7' , title : 'La différence entre le UI et le UX   ' , name : 'BELDJOUDI WASSIM',  ifSaved : false}, 
    {id: '8' , title : 'FastApi: the best python framewrok   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : false}, 
    {id: '9' , title : 'FrontEnd dev with react js '           , name : 'SAADAOUI KAHINA' ,  ifSaved : false}, 
    {id: '10', title : 'La différence entre le UI et le UX   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : false}, 
    {id: '11', title : 'La différence entre le UI et le UX   ' , name : 'BELDJOUDI WASSIM',  ifSaved : false}, 
    {id: '12', title : 'FastApi: the best python framewrok   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : false}, 
  ] 


  const [motsCles , setMotscles] = useState([]); 
  const [PE2DP,setPE2DP]= useState([]); 
  const [Auteurs,setAuteurs]= useState([]); 
  const [Institutions,setInstitutions]= useState([]); 

  function StringifyMotsCles(objArr) {
    let result = "";
    
    for (const item of objArr) {
      result = `${item.title} ${result}`;
    }
  
    return result; // trim to remove leading/trailing spaces
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(StringifyMotsCles(motsCles)); 
    console.log(StringifyMotsCles(Auteurs)); 
    console.log(StringifyMotsCles(Institutions)); 
    console.log(StringifyMotsCles(PE2DP)); 
    
    // Launch search based on the field 
    var lunchParam = {
      "keytwords":motsCles,
      "Auteurs":Auteurs,
      "Institutions":Institutions,
      "PE2DP":PE2DP
    }

    const result = fetch("http://localhost:8000/article/filter", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(lunchParam),
  })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data);
      return data 
    })
    .catch((err)=>{
      console.error('Error:', error);
    })





 };


  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 9  ;

  useEffect(() => {
      setTotalPages(Math.ceil(articles.length / itemsPerPage))
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset =  articles.slice(startIndex, endIndex);


    const handlePageChange = (selectedPage) => {
      setCurrentPage(selectedPage.selected);
    };
      
  return (
    <>
    <div className='flex   xl:gap-10    gap-[10%]   items-center '>
         <Link to="/">
         <button className="  border border-primary rounded-tl-3xl rounded-b-3xl lg:mx-28 mx-6  p-3  hover:bg-slate-700 text-white font-bold   transform transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-75">
      
         <AiOutlineArrowLeft  className='text-primary md:w-8 md:h-8  h-5 w-5 hover:text-white'/>
         </button>   </Link>
        <h1 className='font-title  font-extrabold my-10 text-3xl md:text-6xl text-primary text-center'> TOUT </h1>
    
    </div>
        
       <div className='mx-4 2xl:mx-10 flex flex-wrap gap-4 mb-4  p-6 border-2 border-primary rounded-xl items-start justify-between '>
          <div className='w-[280px] 2xl:w-[350px]'>   {/* filtre des mots clés  */}
             <div className='flex mb-5 gap-3 items-center'>
               <VscWholeWord  className=' text-rosee h-8 w-8' />
               <p className='text-xl xl:text-3xl  text-primary font-bold'>Mots clés</p>
             </div>   

             <Autocomplete
               limitTags={3}
                multiple
                id="motscles"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[]}
                onChange={(event, value) => setMotscles(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    placeholder="Ajouter +"
                  />
                )}
             />
          </div>

          <div className=' w-[280px] 2xl:w-[350px]'> {/* Filtre des auteurs */}
              <div className='flex mb-5 gap-3 items-center'>
              <MdOutlinePerson3 className=' h-7 w-7 text-rosee' />
              <p className='text-xl xl:text-3xl  text-primary font-bold'>Auteurs</p>
              </div>

              <Autocomplete
               limitTags={3}
                multiple
                id="Auteurs"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[]}
                onChange={(event, value) => setAuteurs(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    placeholder="Ajouter +"
                  />
                )}
             />
          </div>

          <div className=' w-[280px] 2xl:w-[350px]'> {/* Filtre des Institutions */}
            
             <div className='flex mb-5 gap-3 items-center'>
               <FaUniversity className=' text-rosee h-7 w-7' />
               <p className='text-xl xl:text-3xl  text-primary font-bold'>Institutions</p>
              </div>

              <Autocomplete
               limitTags={3}
                multiple
                id="Institutions"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                onChange={(event, value) => setInstitutions(value)}
                defaultValue={[]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    placeholder="Ajouter +"
                  />
                )}
             />
          </div>

          <div className=' w-[280px] 2xl:w-[350px]'>
             <div className='flex gap-3 mb-5  items-center'>
             <IoMdCalendar className=' text-rosee h-7 w-7'/>
             <p className='text-xl xl:text-3xl  text-primary font-bold'>PE2DP</p>
             </div>
              
             <Autocomplete
               limitTags={3}
                multiple
                id="PE2DP"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[]}
                onChange={(event, value) => setPE2DP(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    placeholder="Ajouter +"
                  />
                )}
             />
             
          </div>

          <button type="submit" onClick={handleSubmit} className=' bg-primary  w-44 h-16 rounded-b-3xl rounded-tl-3xl p-5 flex justify-between my-6 transform transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 '>
            <span className='text-xl font-title text-white font-semibold'>Filtrer</span>
            <IoFilter className=' text-white h-7 w-7'/>
          </button>
 
       </div>


    {subset.length === 0 ? 
  <p  className=" text-center w-full  font-body text-primary  p-10  mb-[117px] pb-48  mt-40  border border-rosee rounded-lg">No Articles found.</p>
 : 
  <>

    {/* mapping the articles cards------------------------------------------ */}

    <div className=" flex flex-wrap  overflow-hidden justify-center">
      {subset.map((article) => (
        <div className="mx-20 my-2" key={article.id}>
          <ArticleCard article={article} key={article.id} />
        </div>
      ))}
    </div>

    {/*___________________________________________________________________  */}
   
      <ReactPaginate
        pageCount={totalPages}
        breakLabel={"..."}
        previousLabel={<IoIosArrowRoundBack />}
        nextLabel={<IoIosArrowRoundForward /> }
        onPageChange={handlePageChange}
        forcePage={currentPage}
        pageRangeDisplayed={1} 
        marginPagesDisplayed={1} 
        breakClassName={" w-10 h-10 md:w-16 md:h-16  md:text-3xl text-lg  md:p-3 text-center  md:font-semibold   font-title   border border-primary rounded-tl-3xl rounded-b-3xl transform transition-transform duration-200 ease-in-out hover:scale-110"}
        containerClassName={"flex text-center px-1 mx-2 my-6 justify-center  items-center gap-2 "}
        pageClassName	={"w-10 h-10 md:w-16 md:h-16  md:text-3xl text-xl  md:font-semibold  text-primary border border-primary rounded-tl-3xl rounded-b-3xl m-1 md:m-4 md:p-3 font-title  cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-110"}
        activeClassName={"w-10 h-10 md:w-16 md:h-16  md:text-3xl text-xl  md:p-3 text-center   bg-rosee   font-title md:font-semibold text-white border border-primary rounded-tl-3xl rounded-b-3xl transform transition-transform duration-200 ease-in-out hover:scale-110"}
        previousClassName={"transform transition-transform duration-200 ease-in-out hover:scale-110 w-10 h-10 md:w-16 md:h-16  md:text-3xl text-xl   text-center md:font-semibold  text-primary border border-primary rounded-tl-3xl rounded-b-3xl m-1 md:m-4 p-3 font-title "}
        nextClassName={"transform transition-transform duration-200 ease-in-out hover:scale-110  w-10 h-10 md:w-16 md:h-16  md:text-3xl text-xl text-center md:font-semibold  text-primary border border-primary rounded-tl-3xl rounded-b-3xl m-1 md:m-4 p-3 font-title  cursor-pointer "}
    />


  </>
}
  
      </>
  )
}
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },]
export default Articles
