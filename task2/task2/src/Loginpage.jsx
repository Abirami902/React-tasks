import React, { useState } from 'react';
import './App.css'


function Loginpage(){

    return(

   <div className='A'>
  <form>
  <div class="mb-3">
  <h4>Login</h4>
    <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


   </div>




    );
}

export default Loginpage;