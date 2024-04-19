import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function Netdemo(){

    const[net,setnet]=useState(false)

    const Netdemo=()=>
         {
            if(net){
                setnet(false)
            }
            else
            {
                setnet(true)
            }
          
         }
        

    return(
<div>
       
 <button className='btn btn-outline-danger ' onClick={Netdemo}>show</button>
{
    net &&
    "netflix"
}

</div>







    )
}

export default Netdemo;