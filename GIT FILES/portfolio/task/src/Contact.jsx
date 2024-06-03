import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

 function Contact() {
  return (
    <div className='contact'>
      <p className='head3'><b>Get in touch</b></p><br></br>
      <p className='para'>If you wanna get in touch, talk to me about a project collaboration or just say hi,<br></br>
        fill up the awesome form below or send an email to <b> abiramipabi2001@gmail.com </b> and ~let's talk.
</p>    
<input  type="text" id="fname" name="fname" class="input" label="lets chat"/><MdOutlineMailOutline className='large-icon4' /><br></br>
    <button type="button" class="btn btn-custom1">NEXT</button>
    <button type="button" class="btn btn-custom">SUBMIT YOUR MESSAGE</button>
  


  <p className='head4'><b> Lets get Social</b></p>
  <p className='para1'>Follow my online pages on Facebook,instagram and profiles on GitHub and Linkedin.</p>
  <RiInstagramFill className="large-icon " />
  <SiFacebook className="large-icon1 " />
  <FaGithub className="large-icon2" />
  <BsLinkedin className="large-icon3" />

  </div>
  )
}
export default Contact