import React from 'react'
import './Footer.css'
import logo3 from "../../images/logo4.png"
import { FiFacebook, FiTwitter, FiInstagram, FiPhone } from "react-icons/fi";
import { GeoAltFill, Envelope } from 'react-bootstrap-icons';
const Footer = () => {
  return (
    <div className='container-fluid footer'>
      <div className='row setrow'>
        <div className='col-4 col-box1'>
          <img className='footerlogo' src={logo3} alt=''></img>
          <div className='rightInnerDiv'>
            <p style={{fontSize:"small", color:"white"}}>
            Find your dream customized products by sitting at home. Your dreams are our responsinility
          </p>
          </div>
        </div>
        <div className='col-3 col-box'>
          
          <p className='heading'>Contact info</p>
          <div>
          <div className='d-flex'>
          <Envelope className='color'/>
          <p className='contactP'>Bespoke_Pakistan.io</p>
          </div>
          <div className='d-flex'>
          <GeoAltFill className='color'/>
          <p className='contactP'>Lahore, Paksitan</p>
          </div>
          </div>
        </div>
        <div className='col-4 col-box'>
          <p className='heading'>Subscribe to our social</p>
          <div className='icons '>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiPhone/>
          </div>
        </div>
      </div>
      <div className='row bottomRow'>
        <div className='col-6 text-muted d-flex align-item-center justify-content-center'>
        <p className='footerP' >Copyright Bespoke CORP PTY LTD © 2022. All Rights Reserved</p>
        </div>
        <div className='col-6 text-muted d-flex justify-content-center align-item-center' >
        <p className='footerP'>Privacy Policy</p><p className='footerP'>Terms And Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
