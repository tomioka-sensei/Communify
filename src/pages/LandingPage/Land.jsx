
import {MdSupervisorAccount} from "react-icons/md";
import Search from '../../components/search';
import React, { useState } from 'react';
import Hamburg from "../../components/Hamburg";






const Land = () => {

  const [openProfile , setOpenProfile] = useState(false);


  return (
    <div className='justify-center mx-auto flex flex-col '>
    <div className='justify-between flex flex-row m-4'>
    <img src = "/logo.png" alt = "reload"/>
    <h2 className='text-green-500 font-bold text-4xl '>CogniLink</h2>
    <div className='text-green-600 font-bold text-4xl'>
  <  MdSupervisorAccount onClick={()=> setOpenProfile((prev=>!prev))}/>
    </div>
    </div>

    <div className='flex flex-col justify-center align-middle mx-auto mt-6 py-2'>
        <h1 className='text-green-500 font-semibold text-5xl '>Let's Find Some Life Hacks</h1>
        <p className='text-xl font-medium mx-20 mt-3'>Welcome To <span className='text-green-500'>CogniLink</span> Where Solutions Connects</p>


    </div>

    

       
  <Search/>



  {
    openProfile && (<Hamburg/>)
   }


    </div>
     
     
  )

  
}

export default Land