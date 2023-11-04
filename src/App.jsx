import React from "react"
import SignUp from "./pages/signup/SignUp"
import Login from "./pages/Login/Login"
import Home from "./pages/Home"
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom"
import Land from "./pages/LandingPage/Land"
import VideoPlayer from "./components/videoPlayer"

function App() {


  return (
    <>
     <ChakraProvider>
      <Routes>
        <Route path="/" element = {<Home/>}/>
         <Route path="/login" element={ <Login/> } />
        <Route path="/signUp" element={ <SignUp/> } />
        <Route path = "/Land" element={<Land/>} />
        <Route path = "/VideoPlayer" element = {<VideoPlayer
        height ={750}
        width = {900}/>} />

      </Routes>
      </ChakraProvider>
    </>
  )
}

export default App
