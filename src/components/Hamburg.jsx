import React from 'react'
import {CgProfile} from "react-icons/cg";
import {CiSaveDown2} from "react-icons/ci";
import {MdOutlineWorkspacePremium} from "react-icons/md";
import {AiOutlineSearch} from "react-icons/ai";
import { CgCommunity} from "react-icons/cg";
import { Link } from "react-router-dom";




const Hamburg = () => {

  const handleClick = () => {
    window.location.replace('https://www.impactguru.com/info/medical-fundraising-ig-g1/?utm_source=google&utm_medium=google-search-ads&utm_campaign=brand&utm_content=674795973294&utm_term=impactguru&device=c&matchtype=p&keyword=impact%20guru%20crowdfunding&adposition=&adgroup=144354128049&model=&location=9061702&network=g&source=google&medium=CMA&gad_source=1&gclid=EAIaIQobChMImaGC58erggMVGw8rCh1hKQaBEAAYASAAEgJ5svD_BwE');
  };


  return (
    <div className='flex flex-col  absolute top-[4.5rem] right-[1rem] p-2 w-[200px] bg-white border border-gray-500 rounded-md before:content before:absolute before:top-[-0.7rem] before:right-4 before:w-5 before:h-5 before:bg-white before:border-l-2 before:border-r-2'>
        <ul className='flex flex-col gap-4 '>
            <li className='text-base font-medium flex flex-row gap-1 align-middle text-center items-center'><CgProfile/><Link to="/profile">
       Profile
      </Link></li>
            <li className='text-base font-medium flex flex-row gap-1 align-middle text-center items-center '><CiSaveDown2/>Saved LifeHack</li>
            <li className='text-base font-medium flex flex-row gap-1 align-middle text-center items-center'><MdOutlineWorkspacePremium/>Unlock Chat With Premium</li>
            <li className='text-base font-medium flex flex-row gap-1 align-middle text-center items-center'><AiOutlineSearch/>Find Jobs</li>
            <li className='text-base font-medium flex flex-row gap-1 align-middle text-center items-center cursor-pointer' onClick={handleClick}><CgCommunity/>Community Support</li>
        </ul>
    </div>
  )
}

export default Hamburg