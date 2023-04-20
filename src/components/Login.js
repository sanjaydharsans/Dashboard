import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import './Login.css'




const Login = () => {

  const [loginbtn , setloginbtn] = useState({
    diable:false,
    style:{
      backgroundColor:"black",
      color:"white"
    }
  })

  const validator = ()=>{
    const userName = document.getElementById("User");
     const pass = document.getElementById("pass")

     console.log(userName.value)
   
     if(userName.value == null && pass.value == null){
        setloginbtn({
          diable:true,
          style:{
            backgroundColor:"gray"
          }
        })

        console.log(loginbtn.style.backgroundColor)
     }

     document.getElementById('login').disabled = loginbtn.diable;


     
}

useEffect(validator , [])


  return (
    <div className=' main flex flex-row '>
      <div className="board flex flex-col justify-center bg-black  h-[100vh] w-[30%]">
        <div className="">
        <h1 className='text-5xl font-bold text-white'>Board.</h1>
        </div>
      </div>

      <div className="flex flex-col bg-[#F5F5F5]  h-[100vh] w-[70%] sign-container">
        
        <div className=" cont text-left m-auto pl-20 w-[56%] h-1/2 p-2 mb-52 flex flex-col justify-center">
        <h1 className='font-bold text-2xl'>Sign in</h1>
        <p className='text-black'>Sign in to our account</p>
        <div className="button-container py-4 flex md:flex-nowrap flex-wrap">
        <button className='bg-white text-[#858585] p-2 rounded-lg w-[35%] flex  justify-center'><img src="/google.png" className='my-1' alt="" width={'10%'}/> <span className='px-2 text-xs m-1'>Sigin in with google</span></button>
            <button className='bg-white text-[#858585] p-2  rounded-lg w-[36%] flex mx-4  justify-center'> <img src="/apple.png" className='my-1' alt="" width={'8%'}/> <span className='px-2 text-xs m-1'>Sigin in with Apple</span></button>
           
        </div>
        <div className="form-container w-[75%] bg-white p-4 rounded-md">
            <div className='w-[90%] m-auto ml-6'>
            <form action="" className='m-auto'>
                <div className="my-3">
                    <p>Email Address</p>
                    <input className='bg-[#F5F5F5] p-2 w-[94%] rounded-lg' id='User' type="email" onChange={validator} />
                </div>
                <div className="my-3">
                    <p>Password</p>
                    <input className='bg-[#F5F5F5] p-2 w-[94%] rounded-lg' id='pass' type="password" onChange={validator} />
                </div>
                <div className="my-2">
                    <a className='text-[#346BD4]' href="#">Forgot password?</a>
                </div>
                <div className="my-3">
                    <Link to='/Dashboard'>
                    <button className='bg-black text-white w-[94%] rounded-lg p-2 font-bold' id='login' style={loginbtn.style} disabled>Sign in</button>
               
               </Link> </div>
            </form>
            </div>
            
        </div>
        <div className="w-[80%] text-center my-1">
            <p className='text-[#858585]'>Don't have an account? <span className='text-[#346BD4]'>Register here</span></p>
        </div>
        </div>
        </div>
      </div>
      
    
  )
}

export default Login