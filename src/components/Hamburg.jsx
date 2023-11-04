import React from 'react'
import {CgProfile} from "react-icons/cg";
import {CiSaveDown2} from "react-icons/ci";
import {MdOutlineWorkspacePremium} from "react-icons/md";
import {AiOutlineSearch} from "react-icons/ai";
import { CgCommunity} from "react-icons/cg";




const Hamburg = () => {
  return (
    <div className='flex flex-col  absolute top-[4.5rem] right-[1rem] p-2 w-[200px] bg-white border border-gray-500 rounded-md before:content before:absolute before:top-[-0.7rem] before:right-4 before:w-5 before:h-5 before:bg-white before:border-l-2 before:border-r-2'>
        <ul className='flex flex-col gap-4 '>
            <li className='text-base font-medium flex flex-row gap-1 align-middle text-center items-center'><CgProfile/>Profile</li>
            <li className='text-base font-medium flex flex-row gap-1 align-middle text-center items-center '><CiSaveDown2/>Saved LifeHack</li>
            <li className='text-base font-medium flex flex-row gap-1 align-middle text-center items-center'><MdOutlineWorkspacePremium/>Unlock Chat With Premium</li>
            <li className='text-base font-medium flex flex-row gap-1 align-middle text-center items-center'><AiOutlineSearch/>Find Jobs</li>
            <li className='text-base font-medium flex flex-row gap-1 align-middle text-center items-center'><CgCommunity/>Community Support</li>
        </ul>
    </div>
  )
}

export default Hamburg