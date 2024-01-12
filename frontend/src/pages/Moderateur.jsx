import React from 'react'

import ArticleCard from '../components/articleCard'
import {  useState , useEffect} from "react";

import ReactPaginate from 'react-paginate';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
export const Moderateur = () =>{ 
    const ifSaved = true 
    
     const articles = [
     
       {id: '1' , title : 'FrontEnd dev with react js '           , name : 'SAADAOUI KAHINA' ,  ifSaved : true}, 
       {id: '2' , title : 'La différence entre le UI et le UX   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : true}, 
       {id: '3' , title : 'La différence entre le UI et le UX   ' , name : 'BELDJOUDI WASSIM',  ifSaved : true}, 
       {id: '4' , title : 'FastApi: the best python framewrok   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : true}, 
       {id: '5' , title : 'FrontEnd dev with react js '           , name : 'SAADAOUI KAHINA' ,  ifSaved : true}, 
       {id: '6' , title : 'La différence entre le UI et le UX   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : true}, 
       {id: '7' , title : 'La différence entre le UI et le UX   ' , name : 'BELDJOUDI WASSIM',  ifSaved : true}, 
       {id: '8' , title : 'FastApi: the best python framewrok   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : true}, 
       {id: '9' , title : 'FrontEnd dev with react js '           , name : 'SAADAOUI KAHINA' ,  ifSaved : true}, 
       {id: '10', title : 'La différence entre le UI et le UX   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : true}, 
       {id: '11', title : 'La différence entre le UI et le UX   ' , name : 'BELDJOUDI WASSIM',  ifSaved : true}, 
       {id: '12', title : 'FastApi: the best python framewrok   ' , name : 'MAMOUNI MEHDI '  ,  ifSaved : true}, 
     ] 
   
   
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
      <h1 className=' text-3xl sm:text-5xl font-title my-14 font-extrabold mx-5 sm:mx-12 xl:mx-32 text-primary '>Bonjour ,  <span className=' text-rosee '>Moderateur X</span> </h1>
     
   
       {subset.length === 0 ? 
     <p  className=" text-center w-full  font-body text-primary  p-10  mb-[117px] pb-48  mt-40  border border-rosee rounded-lg">No Articles found.</p>
    : 
     <>
   
       {/* mapping the articles cards------------------------------------------ */}
   
       <div className=" flex flex-wrap  justify-center">
         {subset.map((article) => (
           <div className="mx-20 my-2" key={article.id}>
   
             
             <ArticleCard article={article} key={article.id}  ifSaved={ifSaved}/>
    
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
   