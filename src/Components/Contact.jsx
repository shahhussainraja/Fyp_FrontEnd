import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiPhone } from "react-icons/fi";

function Contact() {
  return (
    <div id='contact'>
        <h3>Send complaints</h3>
        <div className='contact-input'>
            <input type='email' placeholder='example@gmail.com'/>
            {/* <a href='#'>Contact</a> */}
        </div>
       <br/>
       <div className='contact-input'>
            <input type='text' placeholder='Type message here'/>
            <a href='#'>Send</a>
        </div>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiPhone/>
        </div>
        
      
    </div>
  )
}

export default Contact
