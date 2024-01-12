import React from 'react'
import { PlusOutlined  , MinusOutlined  } from '@ant-design/icons'
  import { Collapse } from 'react-collapse'
const faqitem = ({open,toggle,title,desc}) => {

  
  return (
    
    
   
      
          <div className='my-6  bg-primary w-1/2   h-16  rounded-b-3xl rounded-tl-3xl'>
            <div className='flex justify-between items-center cursor-pointer' onClick={toggle}>
              <p className='text-xl font-body  text-white font-semibold  pr-4'>{title}</p>
              {open ? <div > <MinusOutlined className='icon'/> </div>:<div> <PlusOutlined className='icon' /></div>}
            </div>
            
            <Collapse isOpened={open} >
              <div className='pt-4 px-5 text-left text-base tablet:text-lg'>{desc}</div>
            </Collapse>
          </div>
     



  )
}

export default faqitem