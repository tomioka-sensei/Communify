import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between align-middle p-5 mt-5 '>
        <img src = "/logo.png" alt = "reload"/>
        <ul className='flex flex-row font-medium text-xl text-gray-500'>
            <li className='mx-10'>Home</li>
            <li className='mx-10'>About</li>
            <li className='mx-10'>Lorem</li>
            <li className='mx-10'>ipsum</li>
        </ul>
        

        <Button colorScheme='green' variant='solid' style={{borderRadius : "20px"}}>
        <Link to="/login">
       Login
      </Link>
  </Button>
  

        



    </div>
  )
}

export default Navbar