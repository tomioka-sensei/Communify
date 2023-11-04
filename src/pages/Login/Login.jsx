import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router'
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [value ,setValue] = useState({
        email:"",
        pass:""
    })

    const[errorMsg, setErrorMsg] = useState("");

    const[sBtn , setSBtn] = useState(false)




const handleSubmission=()=>{
    if(!value.email ||!value.pass){
        setErrorMsg("Fields can't be empty")
        return;
    }

    setErrorMsg("");

    setSBtn(true);

    signInWithEmailAndPassword(auth,value.email,value.pass).then(
        async (res) => {
            setSBtn(false);
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
                <h1 className='text-7xl font-bold'>LOGIN,</h1>
                <p className='text-3xl font-semibold '>And start sharing your stories</p>
                <div className='w-[30rem]'>
                <p className='text-base font-light justify-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus illo, sed minus iusto cumque magni </p>
                </div>
            </div>

            <div >
                <form className='text-base font-normal  text-black  rounded-lg p-5  '>
                    <input type="text" className='bg-slate-200 w-80 h-8 p-5 rounded-md text-black text-lg placeholder-black '
                    placeholder='Email ' 
                    onChange={(event)=>{
                        setValue((prev)=>({...prev, email:event.target.value }))
                    }}/>
                </form>

                <form className='text-base font-normal rounded-md'>
                    <input type="text" className='bg-slate-200 w-80 h-8 p-5 rounded-md text-black text-lg placeholder-black '
                    placeholder='Password ' 
                    onChange={(event)=>{
                        setValue((prev)=>({...prev, pass:event.target.value }))
                    }}
                    
                    />
                </form>
                <p className='text-lg font-bold mx-auto justify-center'>{errorMsg}</p>
<           Button colorScheme='blackAlpha' style={{borderRadius : "5px", background:"black",width:"20rem", margin:"1rem", }} onClick={handleSubmission} disabled={sBtn} >Next</Button>
            </div>
            
              <p><span className='text-black font-bold'>Login</span> with others</p>

              <div className='border-[2px] border-black flex  w-48 rounded-lg  p-1 mx-auto justify-center mt-4'>
                <button className='flex flex-row text-center align-middle justify-center '><span className='pr-2'>Login With Google</span> <div className='mt-1'><FcGoogle/> </div></button>
              </div>

              <h2 className='text-xl font-normal'>Don't have an account?<span className='text-green-500'><Link to="/signUp">
                  SignUp
                 </Link></span></h2>
        </div>

        <div >
            <img src='/Login image.png' alt='reload' className='flex h-[600px]'/>
        </div>


    </div>
  )
}

export default Login