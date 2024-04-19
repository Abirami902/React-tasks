import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



function Netflix(){

    const[netflix,setnetflix]=useState(false)

    const Netflix=()=>
         {
            if(netflix){
                setnetflix(false)
            }
            else
            {
                setnetflix(true)
            }
          
         }
        
    return(

        <div className='nbg'>

            <h3 className='faq'>Frequently Asked Questions</h3><br/> 
              <button type="submit" class="btn  btn-dark mb-2">What is Netflix?</button>
              <button type="submit" class="btn  btn-dark mb-2">How much does Netflix cost?</button>
              <button type="submit" class="btn  btn-dark mb-2">Where can i watch?</button>
              <button type="submit" class="btn  btn-dark mb-2">how do i cancel?</button>


 {
    netflix &&
    "hii"
}


        </div>


        
    );
}

export default Netflix;