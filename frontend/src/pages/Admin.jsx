import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg'; // Import CgProfile
import { Link, json } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Logo from '../assets/Frame68007.png'
import { CiCirclePlus } from "react-icons/ci";

import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';


async function SubmitEvent(e){
  e.preventDefault();

  const fileInput = document.querySelector('input[type="file"]');
   
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  // Fetch options
  const options = {
    method: 'POST',
    body: formData,
  };
  const options2 = {
    method: 'GET',
  };  
  
    /* fetch('http://127.0.0.1:8000/article/upload', options)
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      var fileName = data.file_path.split("/").pop() 
      console.log(fileName);
      return fetch(`http://127.0.0.1:8000/article/extract/${fileName}`,options2);
    })
    .then(response => response.json())
    .then(data =>{
      console.log("extract fetch got executed well");
      console.log(data);
    })

    .catch(error => {
      console.error('Error:', error);
    }); */

    var data = await (await fetch('http://127.0.0.1:8000/article/upload', options)).json()
    console.log(data.file_path);
    var fileName = data.file_path.split("/").pop() 
    console.log(fileName);

    var data2 =await fetch(`http://127.0.0.1:8000/article/extract/${fileName}`,options2); 
    console.log("hihi"+ data2);
    
}



export const Admin = () => {

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  }
  const handleDeleted=()=>{

    setOpen2(false);
  }
  const handleClose = () => {
    console.log("email" , email) ; 
    console.log("password", password ); 
    if (email === "" && password ===""){setOpen(false)}else{
    if( (password.length<4)&&( email.length!==0 || password.length!==0  ) ){setMdperror(true)}
    else(setMdperror(false))
    if(email!=='' && password !='' && !Mdperror){
         
       
       setOpen(false);
       setMdperror(false)
       setEmail("")
       setPassword("")
        
    }
   
    }
  };

const [email    , setEmail   ] = useState("");
const [password ,setPassword ] = useState("")
const [Mdperror , setMdperror] = useState(false)
; 
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log("email" , email) ; 
    
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log("password", password ); 
  };

  const moderateurs = [
    { id: 1, nom: "SAADAOUI", prenom: "Kahina HOUDA" },
    { id: 2, nom: "BEDJOUDI", prenom: "Wassim" },
    { id: 3, nom: "YALA", prenom: "RIAD" }
  ];

  return (
    <>
      <h1 className=' text-3xl sm:text-4xl font-title my-6 font-extrabold mx-5 sm:mx-12 xl:mx-32 text-primary '>Bonjour , <span className=' text-rosee'>Admin</span> </h1>
      {/* FILE UPLOAD */}
      <div className=' mx-5 my-12 sm:mx-12 xl:mx-32 text-white bg-primary rounded-xl   p-10 lg:p-32 text-center font-body text-2xl xl:text-4xl font-bold'>
        file upload

        <form className='p-4 flex flex-col ' method="POST" action="http://127.0.0.1:8000/article/upload" encType='multipart/form-data'>
          <input className='m-auto align-item' type="file" name='file'  />
 
          <button className='text-rosee  round-3 hover:bg-sky-700 w-32 p-2 m-auto mt-5' onClick={SubmitEvent} type='submit'>submit</button>
        </form>


      </div>

      {/* moderateurs list */}
      <Accordion.Root className=" mx-5 sm:mx-12 xl:mx-32 mb-56 lg:mb-20  my-20   flex flex-col items-center  " type="single" defaultValue="item-1" collapsible>
             
            
     <Accordion.Item className="AccordionItem w-full "  value={1}>


                 <AccordionTrigger className=" bg-primary w-full  p-10  lg:p-16   h-36 lg:h-48  rounded-xl font-body text-2xl xl:text-4xl font-bold  text-white ">Gerer les modérateurs</AccordionTrigger>
                 <AccordionContent  className='   w-full  pl-5 text-xl font-body  text-primary font-semibold  '>
                 <div className='flex flex-col  bg-beige rounded-xl my-10 gap-6 '>
                        {moderateurs.map((moderateur) => (
                        <div key={moderateur.id} className='flex  justify-center  md:justify-between flex-wrap h-36 items-center border border-primary rounded-xl'>
                            <div className='flex items-center justify-evenly gap-3 md:gap-10 mx-3 md:ml-10'>
                            <CgProfile className='text-primary w-4 h-4 sm:h-7 sm:w-7' />
                            <h4 className='text-primary font-body text-xl xl:text-3xl  font-semibold'> {moderateur.nom} {moderateur.prenom}</h4>
                            </div>
                            
                            <div className='flex items-center justify-evenly gap-10 mr-10'>
                               <Link to='/Adminpage/Moderateur:id'>
                                    <button className='text-center text-primary font-body text-xl sm:text-2xl xl:text-4xl font-semibold'>
                                    Modifier
                                    </button>
                                </Link> 
                                    <button onClick={handleClickOpen2} className='text-center text-red-700 font-body text-xl sm:text-2xl xl:text-4xl font-semibold'>
                                    Supprimer
                                    </button>
                                  
                                    <Dialog
                                        open={open2}
                                        onClose={handleClose2}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                        {"Etes-vous sure de vouloir supprimer ce modérateur?"}
                                        </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText id="alert-dialog-description"  >
                                           Supprimer un modérateur peut jdoiohdoodha  aiu hdiahdza dziazd azidaiuzd
                                            aidh ai iaudhi a
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleClose2}>Annuler</Button>
                                        <Button onClick={handleDeleted} autoFocus>
                                            Supprimer
                                        </Button>
                                        </DialogActions>
                                    </Dialog>
                                    
                            </div>
                        </div>
                        ))}
                 </div>

                 <div >


                  <Button  onClick={handleClickOpen} className='rounded-4xl relative   left-[75%] md:left-[90%] ' >
                    <CiCirclePlus className='text-primary h-16 w-16  '/>
                    </Button>
                    <Dialog open={open} onClose={handleClose}  >
                    
                    <DialogContent >
                        <div className='flex   flex-col justify-cenetr sm:m-10 items-center '>
                                <img src={Logo} alt="logo"  className='w-10 h-8 sm:w-14 sm:h-12'/> 
                                <h4 className='font-title my-4 text-3xl sm:text-4xl text-primary font-extrabold '>Bienvenue</h4>
                                <p className='mb-6 font-title text-lg text-center sm:text-xl text-primary '>Entrez les infos d'un modérateur pour l'ajouter</p>
                                    
                        </div>
                        <TextField
                            autoFocus
                             required
                            margin="dense"
                            id="email"
                            label="Entrez votre email ou numero de telephone"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            onChange={handleEmailChange}
                            /> 
                             <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="password"
                            label="Mot de passe"
                            type="password"
                            fullWidth
                            variant="standard"
                            value={password}       
                            onChange={handlePasswordChange}
                            /> 
                            { Mdperror ? <span className='p-2 text-base text-red-800'>Votre mot de passe est court</span>: ''}
                            {/* <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                            </DialogContentText>
                             */}
                    </DialogContent>
                    <DialogActions>
                    
                     <button onClick={handleClose} className='font-title   hover:opacity-80 text-center text-xl text-white m-4  w-full rounded-xl h-14
                     transform transition-transform duration-200 ease-in-out hover:scale-95     focus:ring-2 focus:ring-blue-700' style={{ backgroundColor:'#2E4165'}}> {Mdperror? "Reessayer":"Ajouter"}</button>
                    </DialogActions>
                    </Dialog>
            </div>
                 </AccordionContent>


     </Accordion.Item>
         
                  

             </Accordion.Root>
    
 


     {/* Ajouter moderateur button */}
   
     
    </>
  );
};
const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className=" flex">
      <Accordion.Trigger
        className={classNames('flex  items-center justify-between  px-4 AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden  style={{ width: 50 , height: 50} }/>
      </Accordion.Trigger>
    </Accordion.Header>
  ));
  
  const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  ));
