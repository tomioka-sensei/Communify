import React, { useState } from 'react'

const Upload = () => {
    const[image ,setImage] = useState("");
    const submitImage = ()=>{
        const data = new FormData();
        data.append("file",data);
        data.append("upload-preset","jwt-iot");
        data.append("cloud-name","dgozpfjis");


        fetch("https://api.cloudinary.com/vl_l/dgozpfjis/image/upload",{
            method:"post",
            body:data
            
        } ).then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err);
        })
    }
    
  return (
    <div className=' flex flex-col mx-auto border border-black max-w-fit p-1 rounded-md mt-10 '>
        <div>
            <img src = "https://img.freepik.com/free-vector/online-image-upload-landing-page_23-2148282428.jpg" className='flex mx-auto'/>
            <input type='file' className = "flex flex-col justify-between font-semibold text-lg  text-gray-300 gap-2 mx-auto"   onChange={(e)=>{setImage(e.target.files[0])}}/>
            <input type='text' placeholder='Title' className='flex mx-auto border border-black my-2 w-96 placeholder:text-2xl placeholder:font-bold placeholder:justify-center p-1 rounded-lg'/>
            <button onClick={submitImage} className='bg-black text-white font-medium text-lg py-1 px-2 rounded-lg flex mx-auto mt-1'>Upload</button>

        </div>
    </div>
  )
}

export default Upload
