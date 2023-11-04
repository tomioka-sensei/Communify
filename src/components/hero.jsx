import React from 'react'
import { IoSearchCircle } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center mt-8 '>
<div className='flex flex-row border-2 border-green-600 rounded-3xl w-96 p-2 text-center  '>
    <p className='text-sm font-semibold mx-auto '>Share Your LifeHacks & Make Friends🤗 </p>
    </div>

<div className='p-9 '>
    <h1 className='text-green-500 font-bold text-4xl p-2'>Empowering Communities For Better Tomorrow</h1>
    <h4 className='text-lg font-normal'>Unite,Innovate,Transform:Be The Change Your Community Needs</h4>
</div>

   <button className='border border-green-600 flex flex-row text-center w-[40rem] rounded-3xl p-0 justify-between align-middle px-3 '>
     <span className='mt-[6px]'>Search For Life Hacks...</span>
    <div className='text-green-600 text-[40px]  '>
     <IoSearchCircle />
     </div> 
   </button>




    </div>
  )
}

export default Hero