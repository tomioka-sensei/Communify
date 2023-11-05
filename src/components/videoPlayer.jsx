import React, { useEffect , useRef } from 'react'
import { Link } from "react-router-dom";
const VideoPlayer = (props) => {
  const {width ,height} = props;
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(()=>{
        if(cloudinaryRef.current ) return;

        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current,{
            cloud_name: "dgozpfjis"
        })
    },[])
  return (
    <>
    
    <video className='w-screen h-screen'
    ref = {videoRef}
    data-cld-public-id = "ws5qgstrv2w9ponzqum9"
    width={width}
    height={height}
    controls
    {...props}
    
    />
    </>
  )
}

export default VideoPlayer