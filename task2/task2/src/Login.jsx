
import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Loginpage from './Loginpage';
import Signup from './Signup.jsx';


function Login(){

    const [status,setstatus]=useState(false)

         const login=()=>
         {
         setstatus(true)
         }

         const signup=()=>
         {
            setstatus(false)
         }

    return(
 
         
         <div className='lbg'>

            <h6 className='h'>State management</h6>

            <button className='btn btn-outline-danger mt-5' onClick={login}>Login</button>
            <button className='btn btn-outline-danger ms-2 mt-5' onClick={signup}>Sign up</button>
              
            {
                status ? <>
               < Loginpage/>
               
                </> : <>

                < Signup/>
                </> 
            }
                </div>

    );
}
export default Login;

