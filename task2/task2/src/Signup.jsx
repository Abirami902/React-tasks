import React, { useState } from 'react';

function Signup()
{

    return(

      <div className='A'>
  <form>
  <div class="mb-3 ">
  <h4>Sign up</h4>
    <label for="exampleInputEmail1" class="form-label mt-4" >E-mail </label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <button type="button" class="btn btn-primary">Cancel</button>
   <button type="submit" class="btn btn-primary ms-2">Sign Up</button>
</form>


</div>

    
     

);
}
export default Signup;