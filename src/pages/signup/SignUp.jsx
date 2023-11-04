import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router'
import { Link } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();
        const [value ,setValue] = useState({
            name:"",
            email:"",
            pass:""
        })
    
        const[errorMsg, setErrorMsg] = useState("");

        const[sBtn , setSBtn] = useState(false)




    const handleSubmission=()=>{
        if(!value.name || !value.email ||!value.pass){
            setErrorMsg("Fields can't be empty")
            return;
        }

        setErrorMsg("");

        setSBtn(true);

        createUserWithEmailAndPassword(auth,value.email,value.pass).then(
            async (res) => {
                setSBtn(false);
                const user = res.user;
                await updateProfile(user,{
                    displayName:value.name
                });
                
                console.log(user)
                navigate("/");
            }
        ).catch((err)=>{
            setSBtn(true);
        setErrorMsg(err.message)});
        
console.log(value);
    }
  return (
    <div className='flex flex-row justify-between  align-middle text-center m-16'>

        
        <div className='mt-5'>
            <div className='flex flex-col m-5'>
                <h1 className='text-7xl font-bold'>REGISTER,</h1>
                <p className='text-3xl font-semibold '>and start sharing your stories</p>
                <div className='w-[30rem]'>
                <p className='text-base font-light justify-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus illo, sed minus iusto cumque magni </p>
                </div>
            </div>

            <div className='flex flex-col justify-center align-middle text-center mx-9' >
                <form className='text-base font-normal  text-black  rounded-lg p-5 flex flex-col gap-6 '>
                    <input type="text" className='bg-slate-200 w-80 h-8 p-5 rounded-md text-black text-lg placeholder-black '
                    placeholder='Name ' 
                    onChange={(event)=>{
                        setValue((prev)=>({...prev, name:event.target.value }))
                    }}
                    />
                
                    <input type="text" className='bg-slate-200 w-80 h-8 p-5 rounded-md text-black text-lg placeholder-black '
                    placeholder='Mail '
                    onChange={(event)=>{
                        setValue((prev)=>({...prev, email:event.target.value }))
                    }}

                    />

                   <input type="text" className='bg-slate-200 w-80 h-8 p-5 rounded-md text-black text-lg placeholder-black '
                    placeholder='Password' 
                    onChange={(event)=>{
                        setValue((prev)=>({...prev, pass:event.target.value }))
                    }}
                    />


                </form>

                <p className='text-lg font-bold mx-auto justify-center'>{errorMsg}</p>

            < Button colorScheme='blackAlpha' style={{borderRadius : "5px", background:"black",width:"20rem", margin:"1rem",  }} onClick={handleSubmission}
                   disabled={sBtn}>Next</Button>
            </div>
        </div>

        <div >
            <img src='/Login image.png' alt='reload' className='flex h-[600px]'/>
        </div>


    </div>
  )
}

export default SignUp