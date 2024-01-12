
import DOTSgrid from '../assets/dotsGrid.png'
import React from 'react';
import FadeIn from "./FadeIn"
import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { Link } from 'react-router-dom';



const qstFrequentes = () => {

  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
 
  const FaqItems = [

    {title : 'question 1 ' , desc : ' answer 1 ' , id:1}, 
    {title : 'question 2 ' , desc : ' answer 2 ' , id:2}, 
    {title : 'question 3 ' , desc : ' answer 1 ' , id:3}, 
    {title : 'question 4 ' , desc : ' answer 2 ' , id:4}, 
    {title : 'question 5 ' , desc : ' answer 2 ' , id:5}, 
    
    
  ];

  return (
    <div className='mt-10  bg-rosee  bg-opacity-6    rounded-tl-3xl rounded-b-3xl'>
         <div className='flex flex-col items-center  my-10'>
         <FadeIn delay={0.2} direction="down" >
              <h1 className=' font-title text-center md:text-5xl text-3xl lg:text-6xl font-extrabold p-4 text-primary my-10'> questions <span className='text-rosee'>fréquentes</span></h1>
         </FadeIn>


            <Accordion.Root className="    w-11/12  md:w-7/12 flex flex-col items-center  " type="single" defaultValue="item-1" collapsible>
               
                {FaqItems.map((item) => (
                      <Accordion.Item className="AccordionItem w-full "  value={item.id}>
                      <AccordionTrigger className=" my-4 bg-primary w-full      h-16  rounded-b-3xl rounded-tl-3xl text-xl font-body  text-white font-semibold">{item.title}</AccordionTrigger>
                      <AccordionContent className=' w-full  pl-5 text-xl font-body  text-primary font-semibold '>{item.desc}</AccordionContent>
                    </Accordion.Item>
                  ))}
             
            </Accordion.Root>

              <Link to="/Faq" >
                 <button className='font-body my-5 text-left text-2xl text-rosee font-bold hover:opacity-75 '>Voir plus </button>
              </Link>
        </div>
     
      <div className='relative  right-0 left-auto hidden lg:block  pb-3'> <img src={DOTSgrid} alt="dots grid " /> </div>
    </div>
  )
}
const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className=" flex">
    <Accordion.Trigger
      className={classNames('flex  items-center justify-between  px-4 AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
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
export default qstFrequentes