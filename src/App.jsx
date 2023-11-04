import React from "react"
// import SignUp from "./pages/signup/SignUp"
// import Login from "./pages/Login/Login"
// import Home from "./pages/Home"
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom"
import Land from "./pages/LandingPage/Land"

function App() {


  return (
    <>
     <ChakraProvider>
      <Routes>
        <Route path="/" element={ <Land/> } />
        {/* <Route path="/login" element={ <Login/> } />
        <Route path="/signUp" element={ <SignUp/> } /> */}
      </Routes>
      </ChakraProvider>
    </>
  )
}

export default App
